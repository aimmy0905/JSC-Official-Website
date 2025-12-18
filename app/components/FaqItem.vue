<script setup lang="ts">
interface Props {
  question: string
  isOpen?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  isOpen: false
})

const emit = defineEmits<{
  toggle: []
}>()
</script>

<template>
  <div class="faq-item" :class="{ active: isOpen }">
    <div class="faq-question" @click="emit('toggle')">
      <h3>{{ question }}</h3>
      <i class="fas fa-chevron-down"></i>
    </div>
    <div class="faq-answer">
      <slot />
    </div>
  </div>
</template>
