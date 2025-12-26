<script setup lang="ts">
const { getRandomProducts } = useProducts()

useHead({
  title: 'JSC Dropshipping - Home'
})

// Get 8 random hot products
const hotProducts = getRandomProducts(8)

const services = [
  {
    number: '01',
    icon: '/images/icons/直销icon.PNG',
    title: 'Direct Sales',
    description: 'Sell products on any e-commerce platform and focus on marketing! We handle the entire process from order fulfillment to product delivery, synchronizing progress in real-time and keeping you informed, making your business effortless.'
  },
  {
    number: '02',
    icon: '/images/icons/中国采购.PNG',
    title: 'China Sourcing',
    description: 'JSCDropshipping provides end-to-end production management services from inquiry, purchasing existing products, custom manufacturing to doorstep delivery, covering comprehensive supply support for your business needs.'
  },
  {
    number: '03',
    icon: '/images/icons/包装定制.png',
    title: 'Custom Packaging',
    description: 'JSCDROPSHIPPING packages products strictly according to your requirements, repackaging with your designated custom boxes or bags to give your products a unique texture and exclusive branding.'
  },
  {
    number: '04',
    icon: '/images/icons/订单履行.png',
    title: 'Order Fulfillment',
    description: 'In-stock items can be fulfilled within 12-24 hours. We understand the challenges of damaged or lost packages and provide efficient solutions with customer-friendly refund policies, safeguarding your interests throughout.'
  }
]

const processSteps = [
  { icon: '/images/icons/选品.png', title: '1. Product Selection', description: 'Register for free, select products on the JSC dropshipping platform, and download product resource packages' },
  { icon: '/images/icons/刊登.png', title: '2. Listing', description: 'List your selected products on your Amazon, eBay, Shopify and other stores for sale' },
  { icon: '/images/icons/下单.png', title: '3. Ordering', description: 'After your store receives an order, place the order on the JSC platform and make payment' },
  { icon: '/images/icons/发货.png', title: '4. Shipping', description: 'JSC overseas warehouse issues tracking number within 24 hours, 2-8 days delivery' }
]

const platforms = [
  { name: 'Shopify', logo: '/images/logos/shopify.png' },
  { name: 'WooCommerce', logo: '/images/logos/woocommerce.png' },
  { name: 'Amazon', logo: '/images/logos/amazon.png' },
  { name: 'eBay', logo: '/images/logos/ebay.png' }
]

const advantages = [
  {
    title: 'Abundant Quality Sources',
    subtitle: 'The large items you struggled to ship? We handle them!',
    list: ['Professional product team of 1 billion', '13 product category lines', '1000+ curated products added monthly', '60000+ real overseas warehouse in-stock SKUs', 'Support for non-standard and large items direct from overseas warehouse'],
    image: '/images/素材图片/海量优质货源.jpeg',
    reverse: false
  },
  {
    title: `"Zero Inventory" Operating Model`,
    subtitle: 'Free up capital pressure, reduce inventory risk',
    list: ['Hot products dropshipping, precisely meeting market demand', 'No need for stock preparation, completely avoid inventory risk', 'Zero-cost cross-border supply chain setup, easily start your cross-border business'],
    image: '/images/素材图片/库存运营模式.png',
    reverse: true
  },
  {
    title: '9 Major Overseas Warehouses',
    subtitle: '24-hour tracking number, 2-8 days delivery',
    list: ['Total overseas warehouse area exceeds 630,000+ sqm', 'Support for Fedex, UPS, USPS and other logistics tracking', 'Meet Amazon, eBay, Walmart, Shopify logistics timeliness requirements', 'Quickly shorten cash cycle, improve capital turnover rate'],
    image: '/images/素材图片/9大海外仓.jpeg',
    reverse: false
  },
  {
    title: 'Worry-Free After-Sales',
    subtitle: 'After-sales rate <2%, fast returns and exchanges',
    list: ['Professional customer service team, quick response', 'Up to 60 days after-sales service period', 'After-sales rate <2%', 'Convenient returns and exchanges, rapid handling of after-sales issues'],
    image: '/images/素材图片/售后无忧.png',
    reverse: true
  },
  {
    title: 'Powerful Technical Support',
    subtitle: 'Significantly reduce workload, achieve intelligent management',
    techSupport: true,
    image: '/images/素材图片/强大技术支持.jpg',
    reverse: false
  },
  {
    title: 'One-on-One Account Manager Service',
    subtitle: 'Your supply chain "personal butler"',
    list: ['Professional product service, customized recommendations, one-on-one service', 'Assist with order and inventory management, improve inventory stability', 'Website functionality training, resolve customer issues'],
    image: '/images/素材图片/一对一客户经理服务.jpeg',
    reverse: true
  }
]

</script>

<template>
  <div>
    <!-- Module 1: Banner Area -->
    <section class="hero-banner">
      <div class="container">
        <div class="hero-content">
          <div class="hero-text">
            <h1 class="hero-title">JSCDropshipping</h1>
            <p class="hero-subtitle">Our Goal is to <span class="highlight">Go</span></p>
            <p class="hero-description">
              Achieve higher profitability for every order at the lowest cost without compromising quality.
            </p>
            <a href="https://apps.shopify.com/" target="_blank" class="btn-primary">
              <i class="fab fa-shopify"></i> Install Shopify App
            </a>
          </div>
          <div class="hero-image">
            <div class="dashboard-mockup">
              <img src="/images/banner/1280X1280.JPEG" alt="JSC Dropshipping Dashboard" class="banner-img">
              <i class="fas fa-chart-line fallback-icon"></i>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Module 2: What We Can Do For You -->
    <section class="services-section">
      <div class="container">
        <div class="section-header">
          <h2>What Can We Do For You?</h2>
          <p>List and sell products without buying inventory upfront or packaging and shipping orders.</p>
        </div>

        <div class="services-grid">
          <div v-for="service in services" :key="service.number" class="service-card">
            <div class="service-number">{{ service.number }}</div>
            <div class="service-icon">
              <img :src="service.icon" :alt="service.title + ' icon'">
            </div>
            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Module 3: Start Profit Mode in Just 4 Steps -->
    <section class="process-section">
      <div class="container">
        <div class="section-header">
          <h2>Start Your Profitable</h2>
          <h2 class="highlight-text">Dropshipping Business in Just 4 Steps</h2>
        </div>

        <div class="process-steps">
          <div v-for="(step, index) in processSteps" :key="index" class="step">
            <div class="step-icon-wrapper">
              <div class="step-icon-circle">
                <img :src="step.icon" :alt="step.title">
              </div>
            </div>
            <h3>{{ step.title }}</h3>
            <p>{{ step.description }}</p>
            <div v-if="index < processSteps.length - 1" class="step-arrow"></div>
          </div>
        </div>
      </div>
    </section>

    <!-- Module 4: Automated Order Fulfillment - Platform Integration -->
    <section class="integration-section">
      <div class="container">
        <div class="section-header">
          <h2>Automated Order Fulfillment</h2>
          <p>We provide seamless integration with the following platforms</p>
        </div>

        <div class="platform-logos">
          <div v-for="platform in platforms" :key="platform.name" class="platform-logo">
            <img :src="platform.logo" :alt="platform.name">
          </div>
        </div>
      </div>
    </section>

    <!-- Module 5: Six Core Advantages -->
    <section class="advantages-section">
      <div class="container">
        <div class="section-header">
          <h2>Our Core Advantages</h2>
          <p>Providing professional, reliable one-stop service</p>
        </div>

        <div
          v-for="(advantage, index) in advantages"
          :key="index"
          class="advantage-card"
          :class="{ reverse: advantage.reverse }"
        >
          <div class="advantage-content">
            <h3>{{ advantage.title }}</h3>
            <h4>{{ advantage.subtitle }}</h4>
            <ul v-if="advantage.list" class="advantage-list">
              <li v-for="item in advantage.list" :key="item">{{ item }}</li>
            </ul>
            <div v-if="advantage.techSupport" class="tech-support">
              <p><strong>For Distributors Without Technical Development Team:</strong></p>
              <p>JSC now supports one-click listing for Shopify store products; and supports binding Amazon, eBay, Wish, Shopify and other platform store accounts with JSC system, enabling order loading, inventory synchronization, automatic tracking number upload and more.</p>

              <p><strong>For Distributors With Technical Development Team:</strong></p>
              <p>Through public API interface, you can implement many functions such as product management, order management, account management, etc.</p>
            </div>
          </div>
          <div class="advantage-image-real">
            <img :src="advantage.image" :alt="advantage.title">
          </div>
        </div>
      </div>
    </section>

    <!-- Module 6: Hot Products -->
    <section class="hot-products-section">
      <div class="container">
        <div class="section-header">
          <h2>Hot Products</h2>
          <p>Curated quality products to grow your business</p>
        </div>

        <div class="hot-products-grid">
          <ProductCard
            v-for="(product, index) in hotProducts"
            :key="`${product.category}-${index}`"
            :product="product"
          />
        </div>

        <div class="cta-button">
          <NuxtLink to="/products" class="btn-secondary">
            View More Products
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Module 7: Customer Testimonials -->
    <TestimonialSlider />
  </div>
</template>
