<script setup lang="ts">
definePageMeta({
  layout: false
})

useHead({
  title: 'JSC Dropshipping - Login',
  meta: [
    { name: 'description', content: 'JSC Dropshipping - Login' }
  ]
})

const username = ref('')
const password = ref('')
const captchaInput = ref('')
const showPassword = ref(false)
const captchaText = ref('')
const canvasRef = ref<HTMLCanvasElement | null>(null)

const generateCaptcha = () => {
  const canvas = canvasRef.value
  if (!canvas) return

  const ctx = canvas.getContext('2d')
  if (!ctx) return

  // Clear canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  // Draw background
  const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
  gradient.addColorStop(0, '#f0f0f0')
  gradient.addColorStop(1, '#e8e8e8')
  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  // Generate random captcha
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789'
  let newCaptcha = ''
  for (let i = 0; i < 4; i++) {
    newCaptcha += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  captchaText.value = newCaptcha

  // Draw captcha text
  ctx.font = 'bold 24px Arial'
  ctx.textBaseline = 'middle'

  for (let i = 0; i < newCaptcha.length; i++) {
    const x = 15 + i * 25
    const y = 20
    const angle = (Math.random() - 0.5) * 0.4

    ctx.save()
    ctx.translate(x, y)
    ctx.rotate(angle)

    // Random color
    const colors = ['#6B4FBB', '#FF8C42', '#5a3fa0', '#e67a30']
    ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)]
    ctx.fillText(newCaptcha[i], 0, 0)
    ctx.restore()
  }

  // Add interference lines
  for (let i = 0; i < 3; i++) {
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.1)'
    ctx.beginPath()
    ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height)
    ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height)
    ctx.stroke()
  }

  // Add interference dots
  for (let i = 0; i < 30; i++) {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)'
    ctx.beginPath()
    ctx.arc(
      Math.random() * canvas.width,
      Math.random() * canvas.height,
      1,
      0,
      2 * Math.PI
    )
    ctx.fill()
  }
}

const togglePassword = () => {
  showPassword.value = !showPassword.value
}

const handleSubmit = () => {
  // Verify captcha
  if (captchaInput.value.toLowerCase() !== captchaText.value.toLowerCase()) {
    alert('Incorrect captcha, please try again!')
    generateCaptcha()
    captchaInput.value = ''
    return
  }

  // Demo login
  alert(`Login Demo:\nUsername: ${username.value}\n\nIn actual use, this will connect to the Shopify App login interface.`)
}

onMounted(() => {
  generateCaptcha()
})
</script>

<template>
  <div class="login-page">
    <!-- Login Container -->
    <div class="login-container">
      <!-- Logo -->
      <div class="login-logo">
        <h1>JSC</h1>
      </div>

      <!-- Login Form -->
      <div class="login-card">
        <h2 class="login-title">Login</h2>

        <form class="login-form" @submit.prevent="handleSubmit">
          <!-- Username Input -->
          <div class="form-group">
            <label for="username">Username</label>
            <input
              v-model="username"
              type="text"
              id="username"
              name="username"
              placeholder="Enter username"
              required
            >
          </div>

          <!-- Password Input -->
          <div class="form-group">
            <label for="password">Password</label>
            <div class="password-input-wrapper">
              <input
                v-model="password"
                :type="showPassword ? 'text' : 'password'"
                id="password"
                name="password"
                placeholder="Enter password"
                required
              >
              <button type="button" class="toggle-password" @click="togglePassword">
                <i :class="['fas', showPassword ? 'fa-eye' : 'fa-eye-slash']"></i>
              </button>
            </div>
          </div>

          <!-- Captcha Input -->
          <div class="form-group">
            <label for="captcha">Captcha</label>
            <div class="captcha-input-wrapper">
              <input
                v-model="captchaInput"
                type="text"
                id="captcha"
                name="captcha"
                placeholder="Enter captcha"
                required
              >
              <div class="captcha-image">
                <canvas
                  ref="canvasRef"
                  id="captchaCanvas"
                  width="120"
                  height="40"
                  style="cursor: pointer;"
                  @click="generateCaptcha"
                ></canvas>
              </div>
            </div>
          </div>

          <!-- Forgot Password and Register Links -->
          <div class="form-links">
            <a href="#" class="link-forgot-password">Forgot Password?</a>
            <a href="#" class="link-register">No account? Register Now</a>
          </div>

          <!-- Login Button -->
          <button type="submit" class="btn-login-submit">
            Login
          </button>
        </form>
      </div>

      <!-- Back to Home Link -->
      <div class="back-to-home">
        <NuxtLink to="/">
          <i class="fas fa-arrow-left"></i> Back to Home
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
