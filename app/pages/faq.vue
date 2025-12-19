<script setup lang="ts">
useHead({
  title: 'FAQ - JSC Dropshipping',
  meta: [
    { name: 'description', content: 'JSC Dropshipping FAQ - Learn about our services and get answers to your questions' }
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
    question: 'What is Dropshipping?',
    answer: [
      'Dropshipping is a business model that requires no inventory. When your customer places an order, we will ship the product directly from our warehouse to your customer. You don\'t need to stock goods, pack, or handle logistics - you can focus on marketing and sales.',
      'Simply put, it\'s like opening an "online store" without needing to store inventory yourself - we deliver the goods directly to your customers.'
    ]
  },
  {
    question: 'How do I start using JSC services?',
    answer: ['Starting with JSC services is very simple, just 4 steps:', 'The whole process is very convenient, and we also provide one-on-one customer support!'],
    orderedList: ['Register Account: Sign up for a free JSCDropshipping account', 'Select Products: Browse and select the products you want to sell on our platform', 'List for Sale: Upload product information to your e-commerce platform (such as Shopify, Amazon, etc.)', 'Order Fulfillment: After customers place orders, order on JSC platform and we handle shipping']
  },
  {
    question: 'How long does order processing take?',
    answer: ['Our processing speed is very fast:', 'We partner with multiple global top logistics companies (such as DHL, FedEx, UPS, etc.) to ensure fast and reliable delivery services.'],
    list: ['In-stock items: Tracking number issued within 12-24 hours', 'Delivery time: 2-8 days delivery (depending on destination)', 'Custom products: Depends on specific circumstances, we will notify you in advance']
  },
  {
    question: 'What payment methods are supported?',
    answer: ['We support multiple convenient payment methods:', 'All payment processes are encrypted to ensure your funds are secure.'],
    list: ['Credit Cards (Visa, Mastercard, American Express)', 'PayPal', 'Bank Transfer', 'Alipay (for Chinese customers)']
  },
  {
    question: 'How are returns and exchanges handled?',
    answer: ['We provide comprehensive after-sales service:', 'Your customer satisfaction is our top priority!'],
    list: ['After-sales period: Up to 60 days after-sales service period', 'After-sales rate: Our after-sales rate is below 2%, ensuring product quality', 'Processing: Contact customer service when issues arise, we will quickly handle returns/exchanges or refunds', 'Package damage/loss: We take responsibility and provide refunds or reshipping services']
  },
  {
    question: 'How is shipping calculated?',
    answer: ['Shipping is calculated based on the following factors:', 'We provide diverse shipping solutions. You can choose the most suitable option based on your budget and timeliness requirements. The system will display accurate shipping costs before ordering - no hidden fees!'],
    list: ['Destination: Shipping costs vary by country and region', 'Product weight and size: Heavier and larger products have higher shipping costs', 'Shipping method: We offer multiple logistics options - faster speed means higher price']
  },
  {
    question: 'Do you offer product customization services?',
    answer: ['Absolutely! We offer multiple customization services:', 'Through customization services, you can quickly establish your own brand and increase customer loyalty!'],
    list: ['Packaging customization: Add your brand logo, custom boxes/bags', 'Product customization: Customize specific product styles, colors, specifications', 'Brand labels: Add exclusive labels to your products to build brand image']
  },
  {
    question: 'How can I contact customer service?',
    answer: ['We provide multiple contact methods:', 'Our customer service team is always ready to answer any questions - fast response, professional service!'],
    list: ['Email: info@jscdropshipping.com', 'Live Chat: Real-time chat window in the bottom right corner of the website', 'Dedicated Account Manager: You will get a dedicated account manager after registration']
  },
  {
    question: 'Which e-commerce platforms does JSC support?',
    answer: ['We seamlessly integrate with mainstream e-commerce platforms:', 'If you have a technical team, you can also implement more custom functions through our API interface!'],
    list: ['Shopify: Support one-click product listing, automatic order synchronization', 'Amazon: Meet Amazon FBA logistics requirements', 'eBay: Complete order management and inventory synchronization', 'WooCommerce: Support WordPress e-commerce websites', 'Wish: Automatic order loading']
  },
  {
    question: 'How is product quality guaranteed?',
    answer: ['We have a strict quality control system:', 'Only products that pass rigorous inspection will be shipped - our after-sales rate below 2% is the best proof!'],
    list: ['Manual inspection: Every product undergoes comprehensive manual inspection before shipping', 'Standard verification: Check whether products and packaging meet standards', 'Function testing: Test product usability', 'Defect screening: Identify various defects and handle them by category']
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
    <!-- Page Banner -->
    <section class="page-banner">
      <div class="container">
        <h1>Frequently Asked Questions</h1>
        <div class="breadcrumb">
          <NuxtLink to="/">Home</NuxtLink>
          <span>/</span>
          <span>FAQ</span>
        </div>
      </div>
    </section>

    <!-- FAQ Content Area -->
    <section class="faq-section">
      <div class="container">
        <div class="faq-intro">
          <h2>Questions You May Want to Know</h2>
          <p>We've compiled some common customer questions to help you better understand our services. If you have other questions, feel free to contact us anytime!</p>
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

    <!-- CTA Section -->
    <section class="cta-section">
      <div class="container">
        <h2>Have Other Questions?</h2>
        <p>Our professional team is always ready to answer</p>
        <a href="mailto:info@jscdropshipping.com" class="btn-primary">
          <i class="fas fa-envelope"></i> Contact Us
        </a>
      </div>
    </section>
  </div>
</template>
