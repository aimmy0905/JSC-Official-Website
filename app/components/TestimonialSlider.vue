<script setup lang="ts">
interface Testimonial {
  text: string
  name: string
  platform: string
}

const testimonials: Testimonial[] = [
  {
    text: 'Excellent service and great support. The new dropshipping package is very helpful, with good prices and reliable shipping.',
    name: 'Betsy Chen',
    platform: 'Amazon Marketplace'
  },
  {
    text: 'Customer support is outstanding and responsive. The team always works hard to answer questions and provide the best solutions.',
    name: 'Sarah Kim',
    platform: 'SHOPIFY'
  },
  {
    text: 'JSC provides high-quality products and services. Fast logistics and timely customer manager responses have greatly improved our operational efficiency.',
    name: 'Michael Lee',
    platform: 'eBay'
  },
  {
    text: 'We\'ve been working together for over a year. JSC\'s zero-inventory model has saved us substantial capital, with stable product quality and excellent after-sales service.',
    name: 'Emma Wang',
    platform: 'Amazon'
  },
  {
    text: 'From product selection to shipping, JSC provides a complete solution, allowing me to focus on marketing and customer service. Highly recommended!',
    name: 'David Zhang',
    platform: 'Shopify'
  },
  {
    text: 'The overseas warehouse shipping speed is incredibly fast, customer satisfaction has greatly increased, and after-sales issues are resolved quickly. A trustworthy partner.',
    name: 'Lisa Liu',
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
        <h2>Customer Testimonials</h2>
        <p>Reviews from Real Customers</p>
      </div>

      <div class="testimonials-slider-container">
        <button class="slider-btn slider-btn-prev" @click="scrollTestimonials('prev')" aria-label="Previous Testimonial" title="Previous Testimonial">
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

        <button class="slider-btn slider-btn-next" @click="scrollTestimonials('next')" aria-label="Next Testimonial" title="Next Testimonial">
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  </section>
</template>
