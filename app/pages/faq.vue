<script setup lang="ts">
useHead({
  title: '常见问题 - JSC Dropshipping',
  meta: [
    { name: 'description', content: 'JSC Dropshipping 常见问题 - 了解我们的服务和解答您的疑问' }
  ]
})

interface FaqQuestion {
  question: string
  answer: string[]
  list?: string[]
  orderedList?: string[]
}

const faqQuestions: FaqQuestion[] = [
  {
    question: '什么是Dropshipping（代发货）？',
    answer: [
      'Dropshipping（代发货）是一种无需持有库存的商业模式。当您的客户下单后，我们会直接从我们的仓库将产品发送给您的客户。您不需要囤货、打包或处理物流，可以专注于营销和销售。',
      '简单来说，就像您开了一家"网上商店"，但不需要自己存货，我们帮您把货物直接送到客户手中。'
    ]
  },
  {
    question: '如何开始使用JSC服务？',
    answer: ['开始使用JSC服务非常简单，只需4步：', '整个过程非常简便，我们还提供一对一客服支持！'],
    orderedList: ['注册账号：免费注册JSCDropshipping账户', '选择产品：在我们的平台上浏览并选择您想销售的产品', '上架销售：将产品信息上传到您的电商平台（如Shopify、Amazon等）', '接单发货：当客户下单后，在JSC平台下单，我们负责发货']
  },
  {
    question: '订单处理需要多长时间？',
    answer: ['我们的处理速度非常快：', '我们与多家全球顶级物流公司合作（如DHL、FedEx、UPS等），确保快速可靠的配送服务。'],
    list: ['库存商品：12-24小时内出单号', '配送时间：2-8天送达（取决于目的地）', '定制商品：根据具体情况而定，我们会提前告知']
  },
  {
    question: '支持哪些支付方式？',
    answer: ['我们支持多种便捷的支付方式：', '所有支付过程都经过加密保护，确保您的资金安全。'],
    list: ['信用卡（Visa、Mastercard、American Express）', 'PayPal', '银行转账', '支付宝（针对中国客户）']
  },
  {
    question: '如何处理退换货？',
    answer: ['我们提供完善的售后服务：', '您的客户满意度是我们的首要目标！'],
    list: ['售后期限：长达60天售后服务期', '售后比率：我们的售后比率低于2%，产品质量有保障', '处理流程：发现问题后联系客服，我们会快速处理退换货或退款', '包裹损坏/丢失：我们承担责任，提供退款或重发服务']
  },
  {
    question: '运费如何计算？',
    answer: ['运费根据以下因素计算：', '我们提供多元运输方案，您可以根据预算和时效要求选择最合适的方式。下单前系统会显示准确的运费，没有隐藏费用！'],
    list: ['目的地：不同国家和地区的运费不同', '产品重量和尺寸：越重越大的产品运费越高', '物流方式：我们提供多种物流选项，速度越快价格越高']
  },
  {
    question: '是否提供产品定制服务？',
    answer: ['当然！我们提供多种定制服务：', '通过定制服务，您可以快速建立自己的品牌，提升客户忠诚度！'],
    list: ['包装定制：可以添加您的品牌Logo、专属包装盒/袋子', '产品定制：可以定制特定的产品款式、颜色、规格', '品牌标签：为您的产品添加专属标签，打造品牌形象']
  },
  {
    question: '如何联系客服？',
    answer: ['我们提供多种联系方式：', '我们的客服团队随时准备为您解答任何问题，响应迅速，服务专业！'],
    list: ['邮件：info@jscdropshipping.com', '在线聊天：网站右下角的实时聊天窗口', '一对一客户经理：注册后您将获得专属客户经理']
  },
  {
    question: 'JSC支持哪些电商平台？',
    answer: ['我们与主流电商平台无缝集成：', '如果您有技术团队，还可以通过我们的API接口实现更多自定义功能！'],
    list: ['Shopify：支持一键刊登商品，自动同步订单', 'Amazon：满足亚马逊FBA物流要求', 'eBay：完整的订单管理和库存同步', 'WooCommerce：支持WordPress电商网站', 'Wish：订单自动加载']
  },
  {
    question: '产品质量如何保障？',
    answer: ['我们有严格的质量管控体系：', '只有通过严苛检验的产品才会发货，我们的售后比率低于2%就是最好的证明！'],
    list: ['人工检测：每件产品发货前都经过全维度人工检测', '标准核验：检查产品和包装是否符合标准', '功能测试：实测产品可用性', '缺陷筛查：排查各类缺陷并分类处理']
  }
]

const activeIndex = ref<number | null>(null)

const toggleFaq = (index: number) => {
  if (activeIndex.value === index) {
    activeIndex.value = null
  } else {
    activeIndex.value = index
  }
}
</script>

<template>
  <div>
    <!-- 页面标题Banner -->
    <section class="page-banner">
      <div class="container">
        <h1>常见问题</h1>
        <div class="breadcrumb">
          <NuxtLink to="/">首页</NuxtLink>
          <span>/</span>
          <span>常见问题</span>
        </div>
      </div>
    </section>

    <!-- FAQ内容区 -->
    <section class="faq-section">
      <div class="container">
        <div class="faq-intro">
          <h2>您可能想了解的问题</h2>
          <p>我们整理了一些客户常见的问题，希望能帮助您更好地了解我们的服务。如果您有其他问题，欢迎随时联系我们！</p>
        </div>

        <div class="faq-container">
          <div
            v-for="(faq, index) in faqQuestions"
            :key="index"
            class="faq-item"
            :class="{ active: activeIndex === index }"
          >
            <div class="faq-question" @click="toggleFaq(index)">
              <h3>{{ faq.question }}</h3>
              <i class="fas fa-chevron-down"></i>
            </div>
            <div class="faq-answer">
              <p v-if="faq.answer[0]">{{ faq.answer[0] }}</p>
              <ol v-if="faq.orderedList">
                <li v-for="(item, i) in faq.orderedList" :key="i">
                  <strong>{{ item.split('：')[0] }}：</strong> {{ item.split('：')[1] }}
                </li>
              </ol>
              <ul v-if="faq.list">
                <li v-for="(item, i) in faq.list" :key="i">
                  <strong v-if="item.includes('：')">{{ item.split('：')[0] }}：</strong>
                  <template v-if="item.includes('：')">{{ item.split('：')[1] }}</template>
                  <template v-else>{{ item }}</template>
                </li>
              </ul>
              <p v-if="faq.answer[1]">{{ faq.answer[1] }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA区域 -->
    <section class="cta-section">
      <div class="container">
        <h2>还有其他问题？</h2>
        <p>我们的专业团队随时为您解答</p>
        <a href="mailto:info@jscdropshipping.com" class="btn-primary">
          <i class="fas fa-envelope"></i> 联系我们
        </a>
      </div>
    </section>
  </div>
</template>
