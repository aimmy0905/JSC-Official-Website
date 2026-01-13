<script setup lang="ts">
const isVisible = ref(false)

const handleScroll = () => {
  isVisible.value = window.pageYOffset > 300
}

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<template>
  <button
    id="backToTop"
    class="back-to-top"
    :class="{ show: isVisible }"
    @click="scrollToTop"
    aria-label="Back to Top"
    title="Back to Top"
  >
    <i class="fas fa-arrow-up"></i>
  </button>
</template>
