<script setup lang="ts">
const footerLinks = [
  { path: '/', label: 'Home' },
  { path: '/services', label: 'Services' },
  { path: '/products', label: 'Popular Products' },
  { path: '/faq', label: 'FAQ' }
]
</script>

<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h3>JSC Dropshipping</h3>
          <p>Professional One-Stop Dropshipping Service Platform</p>
        </div>

        <div class="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li v-for="link in footerLinks" :key="link.path">
              <NuxtLink :to="link.path" :aria-label="`Go to ${link.label} Page`">{{ link.label }}</NuxtLink>
            </li>
          </ul>
        </div>

        <div class="footer-section">
          <h4>Contact Us</h4>
          <ul>
            <li>
              <a href="mailto:info@jscdropshipping.com" aria-label="Email Us">
                <i class="fas fa-envelope"></i>
                info@jscdropshipping.com
              </a>
            </li>
            <li><i class="fas fa-phone"></i>+86 18327129544</li>
          </ul>
        </div>

        <div class="footer-section">
          <h4>Follow Us</h4>
          <div class="social-links">
            <a href="#" aria-label="Follow us on Facebook"><i class="fab fa-facebook"></i></a>
            <a href="#" aria-label="Follow us on Twitter"><i class="fab fa-twitter"></i></a>
            <a href="#" aria-label="Follow us on LinkedIn"><i class="fab fa-linkedin"></i></a>
            <a href="#" aria-label="Follow us on Instagram"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>

      <div class="footer-bottom">
        <p>&copy; 2025 JSC Dropshipping. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>
