<script setup lang="ts">
const {
  getAllProducts,
  getCategoryName,
  getCategoryKey,
  getCategoriesInChinese
} = useProducts()

useHead({
  title: 'Popular Products - JSC Dropshipping',
  meta: [
    { name: 'description', content: 'JSC Dropshipping Popular Products - Browse our curated selection of high-quality products' }
  ]
})

// Get all categories and add "All" option
const categories = ['All', ...getCategoriesInChinese()]

// Currently selected category
const activeCategory = ref('All')

// Search keywords
const searchQuery = ref('')

// Pagination config
const currentPage = ref(1)
const itemsPerPage = 20

// Get all products (based on current category)
const currentProducts = computed(() => {
  if (activeCategory.value === 'All') {
    return getAllProducts()
  }

  const categoryKey = getCategoryKey(activeCategory.value)
  if (!categoryKey) return []

  return getAllProducts().filter(p => p.category === categoryKey)
})

// Filtered products (search + category)
const filteredProducts = computed(() => {
  let products = currentProducts.value

  // If there's a search keyword, filter by search
  if (searchQuery.value.trim()) {
    const lowerQuery = searchQuery.value.toLowerCase()
    products = products.filter(p =>
      p.name.toLowerCase().includes(lowerQuery)
    )
  }

  return products
})

// Paginated products
const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return filteredProducts.value.slice(start, end)
})

// Total pages
const totalPages = computed(() => {
  return Math.ceil(filteredProducts.value.length / itemsPerPage)
})

// Switch category
const changeCategory = (category: string) => {
  activeCategory.value = category
  currentPage.value = 1 // Reset to first page
}

// Search products
const searchProducts = () => {
  if (searchQuery.value.trim() && filteredProducts.value.length === 0) {
    alert('No matching products found, please try other keywords')
  } else {
    currentPage.value = 1 // Reset to first page
  }
}

// Change page
const changePage = (page: number) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

// Get displayed page range
const getPageRange = computed(() => {
  const range: number[] = []
  const total = totalPages.value
  const current = currentPage.value

  if (total <= 7) {
    // If total pages <= 7, show all pages
    for (let i = 1; i <= total; i++) {
      range.push(i)
    }
  } else {
    // Always show first page
    range.push(1)

    if (current > 3) {
      range.push(-1) // -1 represents ellipsis
    }

    // Show pages around current page
    const start = Math.max(2, current - 1)
    const end = Math.min(total - 1, current + 1)

    for (let i = start; i <= end; i++) {
      range.push(i)
    }

    if (current < total - 2) {
      range.push(-1) // -1 represents ellipsis
    }

    // Always show last page
    range.push(total)
  }

  return range
})
</script>

<template>
  <div>
    <!-- Product Search Banner -->
    <section class="product-search-banner">
      <div class="container">
        <div class="search-bar">
          <input
            v-model="searchQuery"
            type="text"
            id="productSearch"
            placeholder="Search products..."
            @keypress.enter="searchProducts"
          >
          <button type="button" @click="searchProducts" aria-label="Search Products" title="Search Products">
            <i class="fas fa-search"></i>
          </button>
        </div>
        <div class="category-tabs">
          <a
            v-for="category in categories"
            :key="category"
            href="#"
            class="tab"
            :class="{ active: activeCategory === category }"
            @click.prevent="changeCategory(category)"
          >
            {{ category }}
          </a>
        </div>
      </div>
    </section>

    <!-- Products Display Area -->
    <section class="products-section">
      <div class="container">
        <!-- Product Stats -->
        <div class="products-stats">
          <p>
            Found <strong>{{ filteredProducts.length }}</strong> products
            <span v-if="searchQuery.trim()">
              - Search keyword: "{{ searchQuery }}"
            </span>
          </p>
        </div>

        <!-- Product Grid -->
        <div v-if="paginatedProducts.length > 0" class="products-grid">
          <ProductCard
            v-for="(product, index) in paginatedProducts"
            :key="`${product.category}-${index}`"
            :product="product"
          />
        </div>

        <!-- No Results Message -->
        <div v-else class="no-results">
          <i class="fas fa-search"></i>
          <h3>No products found</h3>
          <p>Please try other keywords or select a different category</p>
        </div>

        <!-- Pagination -->
        <div v-if="totalPages > 1" class="pagination">
          <button
            class="page-btn"
            :disabled="currentPage === 1"
            @click="changePage(currentPage - 1)"
            aria-label="Previous Page"
            title="Previous Page"
          >
            <i class="fas fa-chevron-left"></i>
          </button>

          <button
            v-for="page in getPageRange"
            :key="page"
            class="page-btn"
            :class="{ active: currentPage === page, ellipsis: page === -1 }"
            :disabled="page === -1"
            @click="page !== -1 && changePage(page)"
            :aria-label="page === -1 ? 'More Pages' : `Page ${page}`"
            :title="page === -1 ? 'More Pages' : `Page ${page}`"
          >
            {{ page === -1 ? '...' : page }}
          </button>

          <button
            class="page-btn"
            :disabled="currentPage === totalPages"
            @click="changePage(currentPage + 1)"
            aria-label="Next Page"
            title="Next Page"
          >
            <i class="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <h2>Can't Find What You're Looking For?</h2>
        <p>Contact our professional team and we'll create a customized sourcing solution for you</p>
        <a href="mailto:info@jscdropshipping.com" class="btn-primary" aria-label="Contact Us via Email">
          <i class="fas fa-envelope"></i> Contact Us
        </a>
      </div>
    </section>
  </div>
</template>

<style scoped>
.products-stats {
  margin-bottom: 2rem;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 8px;
  text-align: center;
}

.products-stats p {
  margin: 0;
  color: #666;
  font-size: 0.95rem;
}

.products-stats strong {
  color: #007bff;
  font-size: 1.1rem;
}

.no-results {
  text-align: center;
  padding: 4rem 2rem;
  color: #666;
}

.no-results i {
  font-size: 4rem;
  color: #ddd;
  margin-bottom: 1rem;
}

.no-results h3 {
  color: #333;
  margin-bottom: 0.5rem;
}

.page-btn.ellipsis {
  cursor: default;
  background: transparent;
}

.page-btn.ellipsis:hover {
  background: transparent;
  color: #666;
}
</style>
