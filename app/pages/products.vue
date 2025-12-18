<script setup lang="ts">
useHead({
  title: '热门产品 - JSC Dropshipping',
  meta: [
    { name: 'description', content: 'JSC Dropshipping 热门产品 - 浏览我们精选的高品质产品' }
  ]
})

const categories = ['家电', '母婴/宝宝', 'HealthStar', '宠物与产品', '玩具儿童玩具', '更多>>']
const activeCategory = ref('家电')

const products = [
  { title: 'New Christmas gift cartoon pendant marker drawing', price: '$1.29', icon: 'fa-image' },
  { title: 'Toledo Cross Pendant Necklace, Men\'s Necklace', price: '$0.40', icon: 'fa-cross' },
  { title: 'Titanium steel boxing glove pendant, a unique punk', price: '$2.35', icon: 'fa-hands-wash' },
  { title: 'American Independence Day Alloy Gold-Plated', price: '$1.39', icon: 'fa-flag-usa' },
  { title: 'Men\'s Hip Hop Jewelry Stainless Steel Necklace', price: '$1.05', icon: 'fa-gem' },
  { title: 'Fashion Cuban Link Chain Gold Color Bracelet', price: '$0.85', icon: 'fa-crown' },
  { title: 'Stainless Steel Cross Pendant Necklace', price: '$0.95', icon: 'fa-ankh' },
  { title: 'Gold Chain Necklace for Men Hip Hop Jewelry', price: '$3.54', icon: 'fa-link' },
  { title: 'Vintage Religious Cross Pendant Necklace', price: '$1.99', icon: 'fa-star' },
  { title: 'Stainless Steel Heart Pendant Necklace', price: '$2.99', icon: 'fa-heart' },
  { title: 'Men\'s Stainless Steel Prayer Hands Pendant', price: '$3.20', icon: 'fa-praying-hands' },
  { title: 'Fashion Yin Yang Pendant Necklace Jewelry', price: '$1.75', icon: 'fa-yin-yang' },
  { title: 'Stainless Steel Men\'s Ring Fashion Jewelry', price: '$2.15', icon: 'fa-ring' },
  { title: 'Moon and Star Pendant Necklace Women\'s Jewelry', price: '$1.89', icon: 'fa-moon' },
  { title: 'Vintage Compass Pendant Necklace Travel Jewelry', price: '$2.45', icon: 'fa-compass' },
  { title: 'Stainless Steel Dragon Pendant Men\'s Necklace', price: '$3.25', icon: 'fa-dragon' },
  { title: 'Bohemian Feather Pendant Necklace Fashion Jewelry', price: '$1.59', icon: 'fa-feather' },
  { title: 'Nautical Anchor Pendant Necklace Marine Style', price: '$1.95', icon: 'fa-anchor' },
  { title: 'Tree of Life Pendant Necklace Nature Jewelry', price: '$2.29', icon: 'fa-tree' },
  { title: 'Peace Sign Pendant Necklace Hippie Style Jewelry', price: '$1.79', icon: 'fa-peace' }
]

const searchQuery = ref('')
const filteredProducts = computed(() => {
  if (!searchQuery.value.trim()) return products
  return products.filter(p =>
    p.title.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})

const currentPage = ref(1)
const totalPages = 5

const searchProducts = () => {
  if (searchQuery.value.trim() && filteredProducts.value.length === 0) {
    alert('没有找到匹配的产品，请尝试其他关键词')
  }
}
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
            @click.prevent="activeCategory = category"
          >
            {{ category }}
          </a>
        </div>
      </div>
    </section>

    <!-- 产品展示区 -->
    <section class="products-section">
      <div class="container">
        <div class="products-grid">
          <div v-for="(product, index) in filteredProducts" :key="index" class="product-card">
            <div class="product-image">
              <i :class="['fas', product.icon]"></i>
            </div>
            <div class="product-info">
              <h3 class="product-title">{{ product.title }}</h3>
              <p class="product-price">{{ product.price }}</p>
            </div>
          </div>
        </div>

        <!-- 分页 -->
        <div class="pagination">
          <button class="page-btn" :disabled="currentPage === 1">
            <i class="fas fa-chevron-left"></i>
          </button>
          <button
            v-for="page in totalPages"
            :key="page"
            class="page-btn"
            :class="{ active: currentPage === page }"
            @click="currentPage = page"
          >
            {{ page }}
          </button>
          <button class="page-btn" :disabled="currentPage === totalPages">
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
