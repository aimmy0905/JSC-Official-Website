<script setup lang="ts">
useHead({
  title: 'JSC Dropshipping - 首页'
})

const services = [
  {
    number: '01',
    icon: '/images/icons/直销icon.PNG',
    title: '直销',
    description: '您可在任意电商平台销售商品，专注营销核心即可！我们全程为您承接订单对接、商品履约全流程服务，实时同步最新进度，并随时为您提供最新信息，让您省心省力。'
  },
  {
    number: '02',
    icon: '/images/icons/中国采购.PNG',
    title: '中国采购',
    description: 'JSCDropshipping 为您提供从询价、采购现有产品、定制制造到送货上门的全链路生产管理服务，覆盖您公司所需的全方位供应支持。'
  },
  {
    number: '03',
    icon: '/images/icons/包装定制.png',
    title: '包装定制',
    description: 'JSCDROPSHIPPING 会严格按您的需求包装产品，通过添加您指定的专属盒子或袋子进行重新封装，为您的产品赋予独特质感与专属标识。'
  },
  {
    number: '04',
    icon: '/images/icons/订单履行.png',
    title: '订单履行',
    description: '库存商品可实现 12至24小时快速履约，我们深知包裹损坏或丢失的处理难题，特提供高效解决方案与客户友好型退款政策，全程保障您的权益。'
  }
]

const processSteps = [
  { icon: '/images/icons/选品.png', title: '1.选品', description: '免费注册账号，在盒盒分销平台上选择产品，并下载商品资源包' },
  { icon: '/images/icons/刊登.png', title: '2.刊登', description: '将所选商品刊登到您的Amazon、eBay、Shopify等店铺进行销售' },
  { icon: '/images/icons/下单.png', title: '3.下单', description: '店铺出单后，即可到盒盒平台下单并付款' },
  { icon: '/images/icons/发货.png', title: '4.发货', description: '盒盒海外仓24小时内出单号，2-8天妥投' }
]

const platforms = [
  { name: 'Shopify', logo: '/images/logos/shopify.png' },
  { name: 'WooCommerce', logo: '/images/logos/woocommerce.png' },
  { name: 'Amazon', logo: '/images/logos/amazon.png' },
  { name: 'eBay', logo: '/images/logos/ebay.png' }
]

const advantages = [
  {
    title: '海量优质货源',
    subtitle: '这里有那些年，你发不动的大货！',
    list: ['10亿专业产品团队', '13条品类线', '1000+精选产品每月上新', '60000+真实海外仓现货SKU', '支持非普货类及大件类产品海外仓直发'],
    image: '/images/素材图片/海量优质货源.jpeg',
    reverse: false
  },
  {
    title: '"0"库存运营模式',
    subtitle: '解放资金压力，降低库存风险',
    list: ['热门产品一件代发，精准对接市场需求', '无需备货压货，彻底规避库存风险', '零成本搭建跨境供应链，轻松启动跨境业务'],
    image: '/images/素材图片/库存运营模式.png',
    reverse: true
  },
  {
    title: '9大海外仓服务',
    subtitle: '24小时出单号，2-8天妥投',
    list: ['海外总仓储面积达63万+㎡', '支持Fedex、UPS、USPS等物流全程跟踪', '满足Amazon、eBay、Walmart、Shopify物流时效要求', '快速缩短回款周期，提升资金周转率'],
    image: '/images/素材图片/9大海外仓.jpeg',
    reverse: false
  },
  {
    title: '售后无忧',
    subtitle: '售后比率<2%，快捷退换货',
    list: ['专业客服团队，快速响应', '长达60天售后服务期', '售后比率<2%', '退换货便捷，极速处理售后问题'],
    image: '/images/素材图片/售后无忧.png',
    reverse: true
  },
  {
    title: '强大技术支持',
    subtitle: '大量减少工作量，实现智能化管理',
    techSupport: true,
    image: '/images/素材图片/强大技术支持.jpg',
    reverse: false
  },
  {
    title: '一对一客户经理服务',
    subtitle: '您的供应链"私人管家"',
    list: ['专业产品服务，定制化推荐，一对一服务', '协助管理订单库存，提升库存稳定性', '网站功能使用讲解，解决客户问题'],
    image: '/images/素材图片/一对一客户经理服务.jpeg',
    reverse: true
  }
]

const hotProducts = [
  { title: 'New Christmas gift cartoon pendant marker drawing', price: '$1.29', icon: 'fa-image' },
  { title: 'Toledo Cross Pendant Necklace, Men\'s Necklace', price: '$0.40', icon: 'fa-cross' },
  { title: 'Titanium steel boxing glove pendant, a unique punk', price: '$2.35', icon: 'fa-hands-wash' },
  { title: 'American Independence Day Alloy Gold-Plated', price: '$1.39', icon: 'fa-flag-usa' },
  { title: 'Men\'s Hip Hop Jewelry Stainless Steel Necklace', price: '$1.05', icon: 'fa-gem' },
  { title: 'Fashion Cuban Link Chain Gold Color Bracelet', price: '$0.85', icon: 'fa-crown' },
  { title: 'Stainless Steel Cross Pendant Necklace', price: '$0.95', icon: 'fa-ankh' },
  { title: 'Gold Chain Necklace for Men Hip Hop Jewelry', price: '$3.54', icon: 'fa-link' }
]
</script>

<template>
  <div>
    <!-- 模块1: Banner区域 -->
    <section class="hero-banner">
      <div class="container">
        <div class="hero-content">
          <div class="hero-text">
            <h1 class="hero-title">JSCDropshipping</h1>
            <p class="hero-subtitle">我们的目标是 <span class="highlight">Go</span></p>
            <p class="hero-description">
              在不影响质量的情况下，以最低的成本为每个订单实现更高的盈利能力。
            </p>
            <a href="https://apps.shopify.com/" target="_blank" class="btn-primary">
              <i class="fab fa-shopify"></i> 安装 Shopify App
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

    <!-- 模块2: 我们能为您做什么 -->
    <section class="services-section">
      <div class="container">
        <div class="section-header">
          <h2>我们能为您做些什么？</h2>
          <p>发布和销售产品,无需预先购买库存或包装和运送订单。</p>
        </div>

        <div class="services-grid">
          <div v-for="service in services" :key="service.number" class="service-card">
            <div class="service-number">{{ service.number }}</div>
            <div class="service-icon">
              <img :src="service.icon" :alt="service.title + '图标'">
            </div>
            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 模块3: 只需4步，开启盈利模式 -->
    <section class="process-section">
      <div class="container">
        <div class="section-header">
          <h2>只需4步，开启</h2>
          <h2 class="highlight-text">盈盈分销一件代发赚钱模式</h2>
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

    <!-- 模块4: 自动订单履行 - 平台集成 -->
    <section class="integration-section">
      <div class="container">
        <div class="section-header">
          <h2>自动订单履行</h2>
          <p>我们提供与以下产品的无缝集成</p>
        </div>

        <div class="platform-logos">
          <div v-for="platform in platforms" :key="platform.name" class="platform-logo">
            <img :src="platform.logo" :alt="platform.name">
          </div>
        </div>
      </div>
    </section>

    <!-- 模块5: 六大核心优势 -->
    <section class="advantages-section">
      <div class="container">
        <div class="section-header">
          <h2>我们的核心优势</h2>
          <p>为您提供专业、可靠的一站式服务</p>
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
              <p><strong>无技术开发团队分销商：</strong></p>
              <p>JSC现已支持Shopify店铺商品一键刊登功能；并支持Amazon、eBay、Wish、Shopify等平台店铺账号与JSC系统绑定，可实现订单加载、库存同步、自动上传跟踪号等功能。</p>

              <p><strong>拥有技术开发团队分销商：</strong></p>
              <p>可通过公共API接口，实现商品管理、订单管理、账户管理等诸多功能。</p>
            </div>
          </div>
          <div class="advantage-image-real">
            <img :src="advantage.image" :alt="advantage.title">
          </div>
        </div>
      </div>
    </section>

    <!-- 模块6: 热门产品 -->
    <section class="hot-products-section">
      <div class="container">
        <div class="section-header">
          <h2>热门产品</h2>
          <p>精选优质商品，助力您的业务增长</p>
        </div>

        <div class="hot-products-grid">
          <div v-for="(product, index) in hotProducts" :key="index" class="product-card">
            <div class="product-image">
              <i :class="['fas', product.icon]"></i>
            </div>
            <div class="product-info">
              <h3 class="product-title">{{ product.title }}</h3>
              <p class="product-price">{{ product.price }}</p>
            </div>
          </div>
        </div>

        <div class="cta-button">
          <NuxtLink to="/products" class="btn-secondary">
            查看更多产品
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- 模块7: 客户反馈 -->
    <TestimonialSlider />
  </div>
</template>
