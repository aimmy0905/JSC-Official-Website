<script setup lang="ts">
const route = useRoute()

const navItems = [
  { path: '/', label: '首页' },
  { path: '/services', label: '服务' },
  { path: '/products', label: '热门产品' },
  { path: '/faq', label: '常见问题' }
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
        <NuxtLink to="/">
          <h1>JSC <span>Dropshipping</span></h1>
        </NuxtLink>
      </div>
      <ul class="nav-menu" :class="{ active: isMenuOpen }">
        <li v-for="item in navItems" :key="item.path">
          <NuxtLink :to="item.path" :class="{ active: isActive(item.path) }" @click="closeMenu">
            {{ item.label }}
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/login" class="btn-login" @click="closeMenu">登录</NuxtLink>
        </li>
        <li>
          <a href="mailto:info@jscdropshipping.com" class="btn-contact">联系我们</a>
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
