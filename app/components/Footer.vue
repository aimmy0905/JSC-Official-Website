<script setup lang="ts">
const footerLinks = [
  { path: '/', label: '首页' },
  { path: '/services', label: '服务' },
  { path: '/products', label: '热门产品' },
  { path: '/faq', label: '常见问题' }
]
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h3>JSC Dropshipping</h3>
          <p>专业的一站式代发货服务平台</p>
        </div>

        <div class="footer-section">
          <h4>快速链接</h4>
          <ul>
            <li v-for="link in footerLinks" :key="link.path">
              <NuxtLink :to="link.path">{{ link.label }}</NuxtLink>
            </li>
          </ul>
        </div>

        <div class="footer-section">
          <h4>联系我们</h4>
          <ul>
            <li><i class="fas fa-envelope"></i> info@jscdropshipping.com</li>
            <li><i class="fas fa-phone"></i> 联系电话（待添加）</li>
          </ul>
        </div>

        <div class="footer-section">
          <h4>关注我们</h4>
          <div class="social-links">
            <a href="#"><i class="fab fa-facebook"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-linkedin"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; 2025 JSC Dropshipping. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>
