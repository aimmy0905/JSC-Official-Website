<script setup lang="ts">
interface Testimonial {
  text: string
  name: string
  platform: string
}

const testimonials: Testimonial[] = [
  {
    text: '服务美好，支持也不错，这次新代发货套餐很贴很有帮助，价格好，运送也要好......',
    name: '贝查',
    platform: '亚马逊花园'
  },
  {
    text: '客户支持非常棒且快速。代理人总是努力解答问题并提供最佳解决方案。',
    name: '希蔻',
    platform: 'SHOPIFY'
  },
  {
    text: 'JSC提供了优质的产品和服务，物流速度快，客户经理响应及时，大大提升了我们的运营效率。',
    name: '李明',
    platform: 'eBay'
  },
  {
    text: '合作一年多了，JSC的零库存模式让我节省了大量资金，产品质量稳定，售后服务也很到位。',
    name: '王芳',
    platform: 'Amazon'
  },
  {
    text: '从选品到发货，JSC提供了完整的解决方案，让我可以专注于营销和客户服务，非常推荐！',
    name: '张伟',
    platform: 'Shopify'
  },
  {
    text: '海外仓的发货速度真的很快，客户满意度大大提升，售后问题也能快速解决，值得信赖的合作伙伴。',
    name: '刘娜',
    platform: 'Walmart'
  }
]

const sliderRef = ref<HTMLElement | null>(null)

const scrollTestimonials = (direction: 'prev' | 'next') => {
  if (!sliderRef.value) return
  const scrollAmount = 320
  if (direction === 'prev') {
    sliderRef.value.scrollLeft -= scrollAmount
  } else {
    sliderRef.value.scrollLeft += scrollAmount
  }
}
</script>

<template>
  <section class="testimonials-section">
    <div class="container">
      <div class="section-header">
        <h2>客户反馈</h2>
        <p>来自真实客户的评价</p>
      </div>

      <div class="testimonials-slider-container">
        <button class="slider-btn slider-btn-prev" @click="scrollTestimonials('prev')">
          <i class="fas fa-chevron-left"></i>
        </button>

        <div ref="sliderRef" class="testimonials-slider">
          <div
            v-for="(testimonial, index) in testimonials"
            :key="index"
            class="testimonial-card-compact"
          >
            <div class="quote-icon-compact">
              <i class="fas fa-quote-right"></i>
            </div>
            <p class="testimonial-text-compact">{{ testimonial.text }}</p>
            <div class="customer-info-compact">
              <div class="customer-avatar-compact">
                <i class="fas fa-user"></i>
              </div>
              <div class="customer-details-compact">
                <h4 class="customer-name-compact">{{ testimonial.name }}</h4>
                <p class="customer-platform-compact">{{ testimonial.platform }}</p>
              </div>
            </div>
          </div>
        </div>

        <button class="slider-btn slider-btn-next" @click="scrollTestimonials('next')">
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  </section>
</template>
