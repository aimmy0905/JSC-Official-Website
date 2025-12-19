<script setup lang="ts">
const {
  getAllProducts,
  getCategoryName,
  getCategoryKey,
  getCategoriesInChinese
} = useProducts()

useHead({
  title: '热门产品 - JSC Dropshipping',
  meta: [
    { name: 'description', content: 'JSC Dropshipping 热门产品 - 浏览我们精选的高品质产品' }
  ]
})

// 获取所有类别并添加"全部"选项
const categories = ['全部', ...getCategoriesInChinese()]

// 当前选中的类别
const activeCategory = ref('全部')

// 搜索关键词
const searchQuery = ref('')

// 分页配置
const currentPage = ref(1)
const itemsPerPage = 20

// 获取所有产品（根据当前类别）
const currentProducts = computed(() => {
  if (activeCategory.value === '全部') {
    return getAllProducts()
  }

  const categoryKey = getCategoryKey(activeCategory.value)
  if (!categoryKey) return []

  return getAllProducts().filter(p => p.category === categoryKey)
})

// 过滤后的产品（搜索 + 类别）
const filteredProducts = computed(() => {
  let products = currentProducts.value

  // 如果有搜索关键词，进行搜索过滤
  if (searchQuery.value.trim()) {
    const lowerQuery = searchQuery.value.toLowerCase()
    products = products.filter(p =>
      p.name.toLowerCase().includes(lowerQuery)
    )
  }

  return products
})

// 分页后的产品
const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  const end = start + itemsPerPage
  return filteredProducts.value.slice(start, end)
})

// 总页数
const totalPages = computed(() => {
  return Math.ceil(filteredProducts.value.length / itemsPerPage)
})

// 切换类别
const changeCategory = (category: string) => {
  activeCategory.value = category
  currentPage.value = 1 // 重置到第一页
}

// 搜索产品
const searchProducts = () => {
  if (searchQuery.value.trim() && filteredProducts.value.length === 0) {
    alert('没有找到匹配的产品，请尝试其他关键词')
  } else {
    currentPage.value = 1 // 重置到第一页
  }
}

// 切换页码
const changePage = (page: number) => {
  if (page >= 1 && page <= totalPages.value) {
    currentPage.value = page
    // 滚动到顶部
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

// 获取显示的页码范围
const getPageRange = computed(() => {
  const range: number[] = []
  const total = totalPages.value
  const current = currentPage.value

  if (total <= 7) {
    // 如果总页数少于等于7，显示所有页码
    for (let i = 1; i <= total; i++) {
      range.push(i)
    }
  } else {
    // 总是显示第一页
    range.push(1)

    if (current > 3) {
      range.push(-1) // -1 表示省略号
    }

    // 显示当前页附近的页码
    const start = Math.max(2, current - 1)
    const end = Math.min(total - 1, current + 1)

    for (let i = start; i <= end; i++) {
      range.push(i)
    }

    if (current < total - 2) {
      range.push(-1) // -1 表示省略号
    }

    // 总是显示最后一页
    range.push(total)
  }

  return range
})
</script>

<template>
  <div>
    <!-- 产品搜索Banner -->
    <section class="product-search-banner">
      <div class="container">
        <div class="search-bar">
          <input
            v-model="searchQuery"
            type="text"
            id="productSearch"
            placeholder="搜索产品..."
            @keypress.enter="searchProducts"
          >
          <button type="button" @click="searchProducts">
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

    <!-- 产品展示区 -->
    <section class="products-section">
      <div class="container">
        <!-- 产品统计信息 -->
        <div class="products-stats">
          <p>
            找到 <strong>{{ filteredProducts.length }}</strong> 个产品
            <span v-if="searchQuery.trim()">
              - 搜索关键词: "{{ searchQuery }}"
            </span>
          </p>
        </div>

        <!-- 产品网格 -->
        <div v-if="paginatedProducts.length > 0" class="products-grid">
          <ProductCard
            v-for="(product, index) in paginatedProducts"
            :key="`${product.category}-${index}`"
            :product="product"
          />
        </div>

        <!-- 无结果提示 -->
        <div v-else class="no-results">
          <i class="fas fa-search"></i>
          <h3>没有找到相关产品</h3>
          <p>请尝试其他搜索关键词或选择不同的类别</p>
        </div>

        <!-- 分页 -->
        <div v-if="totalPages > 1" class="pagination">
          <button
            class="page-btn"
            :disabled="currentPage === 1"
            @click="changePage(currentPage - 1)"
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
          >
            {{ page === -1 ? '...' : page }}
          </button>

          <button
            class="page-btn"
            :disabled="currentPage === totalPages"
            @click="changePage(currentPage + 1)"
          >
            <i class="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </section>

    <!-- CTA区域 -->
    <section class="cta-section">
      <div class="container">
        <h2>找不到您想要的产品？</h2>
        <p>联系我们的专业团队，我们将为您定制化采购方案</p>
        <a href="mailto:info@jscdropshipping.com" class="btn-primary">
          <i class="fas fa-envelope"></i> 联系我们
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
