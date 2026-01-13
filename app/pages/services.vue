<script setup lang="ts">
useHead({
  title: 'Services - JSC Dropshipping',
  meta: [
    { name: 'description', content: 'JSC Dropshipping Services - Brand Customization, Product Sourcing, Quality Inspection, Logistics Delivery' }
  ]
})

const logisticsPartners = [
  { name: 'DHL', logo: '/images/logistics/dhl.jpeg' },
  { name: 'USPS', logo: '/images/logistics/usps.png' },
  { name: 'FedEx', logo: '/images/logistics/fedex.jpeg' },
  { name: 'UPS', logo: '/images/logistics/ups.jpeg' },
  { name: 'YunExpress', logo: '/images/logistics/yunexpress.jpeg' },
  { name: 'DPD', logo: '/images/logistics/dpd.png' },
  { name: 'PostNord', logo: '/images/logistics/postnord.png' },
  { name: 'AnPost', logo: '/images/logistics/anpost.jpeg' },
  { name: 'Chilexpress', logo: '/images/logistics/chilexpress.jpeg' },
  { name: 'PostNL', logo: '/images/logistics/postnl.jpeg' },
  { name: 'Hermes', logo: '/images/logistics/hermes.jpeg' },
  { name: 'New Zealand Post', logo: '/images/logistics/newzealandpost.png' },
  { name: 'Swiss Post', logo: '/images/logistics/swisspost.jpeg' },
  { name: 'OnTrac', logo: '/images/logistics/ontrac.jpeg' },
  { name: 'bpost', logo: '/images/logistics/bpost.jpeg' },
  { name: 'Buffalo', logo: '/images/logistics/buffalo.jpeg' },
  { name: 'La Poste', logo: '/images/logistics/laposte.jpeg' },
  { name: 'Poste Italiane', logo: '/images/logistics/posteitaliane.jpeg' }
]

const workSteps = [
  { number: 1, icon: 'fa-list-check', title: 'Provide Product Information', description: 'Customers need to provide product information, and we will procure based on your requirements' },
  { number: 2, icon: 'fa-search', title: 'Find Products', description: 'We will find the products you need or customize products for you' },
  { number: 3, icon: 'fa-truck-loading', title: 'Find Shipping Solutions', description: 'We will recommend suitable shipping solutions for you' },
  { number: 4, icon: 'fa-dollar-sign', title: 'Send You a Quote', description: 'We will provide you with a transparent quote' },
  { number: 5, icon: 'fa-handshake', title: 'Start Cooperation', description: 'We start serving you, allowing you to focus on your business' }
]
</script>

<template>
  <div>
    <!-- Page Banner -->
    <section class="page-banner">
      <div class="container">
        <h1>Services</h1>
        <div class="breadcrumb">
          <NuxtLink to="/" aria-label="Go to Home Page">Home</NuxtLink>
          <span>/</span>
          <span>Services</span>
        </div>
      </div>
    </section>

    <!-- Brand Customization -->
    <section class="service-detail-section">
      <div class="container">
        <div class="service-detail-card">
          <div class="service-detail-image">
            <img src="/images/素材图片/品牌定制 专属赋能.jpeg" alt="Brand Customization and Empowerment">
          </div>
          <div class="service-detail-content">
            <h2>Brand Customization & Exclusive Empowerment</h2>
            <p>Our branding services support flexible customization. You can add your own identity to various packaging and consistently selling products, quickly connecting with customers and building brand affinity.</p>
            <p class="highlight-text">JSCDropshipping makes brand building and customization simpler and more efficient for dropshipping companies, helping your brand create differentiated advantages and stand out!</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Quality Product Sourcing -->
    <section class="quality-sourcing-section">
      <div class="container">
        <div class="sourcing-card">
          <div class="sourcing-image">
            <img src="/images/illustrations/优质产品采购 省心高效.jpeg" alt="Quality Product Sourcing">
          </div>
          <div class="sourcing-content">
            <h2>Quality Product Sourcing - Hassle-Free & Efficient</h2>
            <p>Selecting quality products for customers is not easy - it requires connecting with reliable suppliers and spending considerable time on screening and comparison.</p>
            <p>Choose JSCDropshipping and stop worrying - we leverage our database of millions of products to precisely match quality products with reliable suppliers within your budget, maintaining quality control throughout, allowing you to easily access trending products, hassle-free and effortless!</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Strict Quality Inspection -->
    <section class="quality-check-section">
      <div class="container">
        <div class="quality-card">
          <div class="quality-content">
            <h2>Rigorous Quality Inspection - Worry-Free Quality</h2>
            <p>JSCDropshipping has established a strict product quality control system, conducting comprehensive manual inspections on every purchased and warehoused product.</p>
            <p>From verifying whether products and packaging meet standards, testing product usability, to identifying various defects and handling them by category - only products that pass our rigorous step-by-step inspection will be shipped, building a strong quality defense line for you throughout!</p>
          </div>
          <div class="quality-image">
            <img src="/images/illustrations/严苛质量检查 品质无忧.jpeg" alt="Rigorous Quality Inspection">
          </div>
        </div>
      </div>
    </section>

    <!-- Warehousing + Logistics -->
    <section class="fulfillment-section">
      <div class="container">
        <div class="fulfillment-card">
          <div class="fulfillment-image">
            <img src="/images/素材图片/仓储物流.jpeg" alt="Warehousing and Logistics Services">
          </div>
          <div class="fulfillment-content">
            <h2>Warehousing + Logistics - Efficient Fulfillment to Boost Revenue</h2>
            <p>We provide 90 days of free warehousing services, ensuring inventory safety throughout, timely restocking and always responding to shipping needs, saving you extra costs.</p>
            <p>To maximize revenue, logistics choices are critical. Location, product weight specifications, customs policies and other factors all affect budget, and JSCDropshipping has fully considered these variables. You just need to select options from our diverse shipping solutions that fit your budget and destination, and we will provide optimal logistics support at highly competitive prices!</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Logistics Partners -->
    <section class="logistics-partners-section">
      <div class="container">
        <div class="section-header">
          <h2>Our Logistics Partners</h2>
          <p>Partnering with the world's top logistics companies to ensure fast and reliable delivery services</p>
        </div>

        <div class="partners-grid">
          <div v-for="partner in logisticsPartners" :key="partner.name" class="partner-logo">
            <img :src="partner.logo" :alt="partner.name">
          </div>
        </div>
      </div>
    </section>

    <!-- How It Works - Dropshipping Model -->
    <section class="how-it-works-section">
      <div class="container">
        <div class="section-header">
          <h2>Dropshipping Model - Easy Zero-Inventory Business</h2>
        </div>

        <div class="work-intro">
          <p>Dropshipping is a convenient business model that requires no inventory: After you complete a sale, we handle the entire process of product sourcing, warehouse management, quality inspection, repackaging, and finally direct delivery to your customers.</p>
          <p class="contact-prompt">For inquiries, please send an email to <a href="mailto:info@jscdropshipping.com" aria-label="Email Us">info@jscdropshipping.com</a>, or contact us via the live chat in the bottom right corner!</p>
        </div>

        <div class="work-steps">
          <div v-for="step in workSteps" :key="step.number" class="work-step-card">
            <div class="step-badge">{{ step.number }}</div>
            <div class="step-icon-box">
              <i :class="['fas', step.icon]"></i>
            </div>
            <h3>{{ step.title }}</h3>
            <p>{{ step.description }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
