<script setup lang="ts">
const route = useRoute()

const navItems = [
  { path: '/', label: 'Home' },
  { path: '/services', label: 'Services' },
  { path: '/products', label: 'Popular Products' },
  { path: '/faq', label: 'FAQ' }
]

const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}

const isActive = (path: string) => {
  return route.path === path
}
</script>

<template>
  <nav class="navbar">
    <div class="container">
      <div class="logo">
        <NuxtLink to="/" aria-label="Go to Home Page">
          <h1>JSC <span>Dropshipping</span></h1>
        </NuxtLink>
      </div>
      <ul class="nav-menu" :class="{ active: isMenuOpen }">
        <li v-for="item in navItems" :key="item.path">
          <NuxtLink :to="item.path" :class="{ active: isActive(item.path) }" @click="closeMenu" :aria-label="`Go to ${item.label} Page`">
            {{ item.label }}
          </NuxtLink>
        </li>
        <li>
           <a href="https://jscdropshipping.com/merchant" class="btn-login" target="_blank" aria-label="Login to Merchant Account">Login</a>
        </li>
        <li>
          <a href="mailto:info@jscdropshipping.com" class="btn-contact" aria-label="Contact Us via Email">Contact Us</a>
        </li>
      </ul>
      <div class="hamburger" :class="{ active: isMenuOpen }" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </nav>
</template>
