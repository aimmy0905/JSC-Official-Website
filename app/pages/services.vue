<script setup lang="ts">
useHead({
  title: '服务 - JSC Dropshipping',
  meta: [
    { name: 'description', content: 'JSC Dropshipping 服务 - 品牌定制、产品采购、质量检查、物流配送' }
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
  { number: 1, icon: 'fa-list-check', title: '提供产品信息', description: '客户需要提供产品信息，我们将根据客户的需求来进行采购' },
  { number: 2, icon: 'fa-search', title: '查找产品', description: '我们将为您寻找所需的产品或定制产品' },
  { number: 3, icon: 'fa-truck-loading', title: '查找运输解决方案', description: '我们将为您推荐合适的运输方案' },
  { number: 4, icon: 'fa-dollar-sign', title: '为您发送报价', description: '我们将为您提供透明的报价' },
  { number: 5, icon: 'fa-handshake', title: '开始合作', description: '我们开始为您提供服务，让您专注业务' }
]
</script>

<template>
  <div>
    <!-- 页面标题Banner -->
    <section class="page-banner">
      <div class="container">
        <h1>服务业</h1>
        <div class="breadcrumb">
          <NuxtLink to="/">首页</NuxtLink>
          <span>/</span>
          <span>服务页</span>
        </div>
      </div>
    </section>

    <!-- 品牌和定制 -->
    <section class="service-detail-section">
      <div class="container">
        <div class="service-detail-card">
          <div class="service-detail-image">
            <img src="/images/素材图片/品牌定制 专属赋能.jpeg" alt="品牌定制 专属赋能">
          </div>
          <div class="service-detail-content">
            <h2>品牌定制 专属赋能</h2>
            <p>我们的品牌服务支持灵活定制，您可在各类包装及稳定出单的产品上添加自身标识，快速拉近与客户的距离，筑牢品牌好感度。</p>
            <p class="highlight-text">JSCDropshipping 让直销公司的品牌打造与定制更简单高效，助力您的直销品牌打造差异化优势，脱颖而出！</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 优质产品采购 -->
    <section class="quality-sourcing-section">
      <div class="container">
        <div class="sourcing-card">
          <div class="sourcing-image">
            <img src="/images/illustrations/优质产品采购 省心高效.jpeg" alt="优质产品采购 省心高效">
          </div>
          <div class="sourcing-content">
            <h2>优质产品采购 省心高效</h2>
            <p>为客户甄选优质产品并不容易，不仅需要对接可靠供应商，还需耗费大量的时间筛选对比。</p>
            <p>选择 JSCDropshipping，您无需费心 —— 我们依托数百万商品资源库，为您精准匹配优质产品与适配预算的靠谱供应商，全程把控品质，让您轻松获取爆款产品，省心省力！</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 严格质量检查 -->
    <section class="quality-check-section">
      <div class="container">
        <div class="quality-card">
          <div class="quality-content">
            <h2>严苛质量检查 品质无忧</h2>
            <p>JSCDropshipping建立了严格的产品质量管控体系，对采购及仓储的每件产品开展全维度人工检测。</p>
            <p>从核验产品与包装是否符合标准、实测产品可用性、到排查各类缺陷并分类处理，只有通过逐分步严苛检验的产品，我们才会安排发货，全程为您筑牢品质防线！</p>
          </div>
          <div class="quality-image">
            <img src="/images/illustrations/严苛质量检查 品质无忧.jpeg" alt="严苛质量检查 品质无忧">
          </div>
        </div>
      </div>
    </section>

    <!-- 仓储+物流 高效实现 -->
    <section class="fulfillment-section">
      <div class="container">
        <div class="fulfillment-card">
          <div class="fulfillment-image">
            <img src="/images/素材图片/仓储物流.jpeg" alt="仓储物流服务">
          </div>
          <div class="fulfillment-content">
            <h2>仓储 + 物流 高效实现 助力增收</h2>
            <p>我们提供 90 天免费仓储服务，全程保障库存安全，及时补货并随时响应发货需求，为您节省额外成本。</p>
            <p>想要最大化收入，物流选择至关重要。位置、商品重量规格、海关政策等因素均会影响预算，而 JSCDropshipping 已全面考量这些变量。您只需从我们的多元运输方案中，挑选适配预算与目的地的选项，我们将以极具竞争力的价格，为您提供最优物流支持！</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 物流合作伙伴 -->
    <section class="logistics-partners-section">
      <div class="container">
        <div class="section-header">
          <h2>我们的物流合作伙伴</h2>
          <p>与全球顶级物流公司合作，确保快速可靠的配送服务</p>
        </div>

        <div class="partners-grid">
          <div v-for="partner in logisticsPartners" :key="partner.name" class="partner-logo">
            <img :src="partner.logo" :alt="partner.name">
          </div>
        </div>
      </div>
    </section>

    <!-- 合作流程 - 直销模式 零库存轻松经营 -->
    <section class="how-it-works-section">
      <div class="container">
        <div class="section-header">
          <h2>直销模式 零库存轻松经营</h2>
        </div>

        <div class="work-intro">
          <p>直销是无需持有库存的便捷商业模式：您完成销售后，我们全程承接产品采购、仓储管理、质量检测、重新包装，最终直接配送到您的客户手中。</p>
          <p class="contact-prompt">如需咨询，可发送邮件至 <a href="mailto:info@jscdropshipping.com">info@jscdropshipping.com</a>，或通过右下角实时聊天与我们联系！</p>
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
