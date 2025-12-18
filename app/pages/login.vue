<script setup lang="ts">
definePageMeta({
  layout: false
})

useHead({
  title: 'JSC Dropshipping - 登录',
  meta: [
    { name: 'description', content: 'JSC Dropshipping - 登录' }
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

  // 清除画布
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  // 绘制背景
  const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height)
  gradient.addColorStop(0, '#f0f0f0')
  gradient.addColorStop(1, '#e8e8e8')
  ctx.fillStyle = gradient
  ctx.fillRect(0, 0, canvas.width, canvas.height)

  // 生成随机验证码
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnpqrstuvwxyz23456789'
  let newCaptcha = ''
  for (let i = 0; i < 4; i++) {
    newCaptcha += chars.charAt(Math.floor(Math.random() * chars.length))
  }
  captchaText.value = newCaptcha

  // 绘制验证码文本
  ctx.font = 'bold 24px Arial'
  ctx.textBaseline = 'middle'

  for (let i = 0; i < newCaptcha.length; i++) {
    const x = 15 + i * 25
    const y = 20
    const angle = (Math.random() - 0.5) * 0.4

    ctx.save()
    ctx.translate(x, y)
    ctx.rotate(angle)

    // 随机颜色
    const colors = ['#6B4FBB', '#FF8C42', '#5a3fa0', '#e67a30']
    ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)]
    ctx.fillText(newCaptcha[i], 0, 0)
    ctx.restore()
  }

  // 添加干扰线
  for (let i = 0; i < 3; i++) {
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.1)'
    ctx.beginPath()
    ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height)
    ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height)
    ctx.stroke()
  }

  // 添加干扰点
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
  // 验证验证码
  if (captchaInput.value.toLowerCase() !== captchaText.value.toLowerCase()) {
    alert('验证码错误，请重新输入！')
    generateCaptcha()
    captchaInput.value = ''
    return
  }

  // 演示登录
  alert(`登录功能演示：\n账号：${username.value}\n\n实际使用时，这里会连接到 Shopify App 的登录接口。`)
}

onMounted(() => {
  generateCaptcha()
})
</script>

<template>
  <div class="login-page">
    <!-- 登录容器 -->
    <div class="login-container">
      <!-- Logo -->
      <div class="login-logo">
        <h1>JSC</h1>
      </div>

      <!-- 登录表单 -->
      <div class="login-card">
        <h2 class="login-title">登录</h2>

        <form class="login-form" @submit.prevent="handleSubmit">
          <!-- 账号输入 -->
          <div class="form-group">
            <label for="username">账号</label>
            <input
              v-model="username"
              type="text"
              id="username"
              name="username"
              placeholder="请输入账号"
              required
            >
          </div>

          <!-- 密码输入 -->
          <div class="form-group">
            <label for="password">密码</label>
            <div class="password-input-wrapper">
              <input
                v-model="password"
                :type="showPassword ? 'text' : 'password'"
                id="password"
                name="password"
                placeholder="请输入密码"
                required
              >
              <button type="button" class="toggle-password" @click="togglePassword">
                <i :class="['fas', showPassword ? 'fa-eye' : 'fa-eye-slash']"></i>
              </button>
            </div>
          </div>

          <!-- 验证码输入 -->
          <div class="form-group">
            <label for="captcha">验证码</label>
            <div class="captcha-input-wrapper">
              <input
                v-model="captchaInput"
                type="text"
                id="captcha"
                name="captcha"
                placeholder="请输入验证码"
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

          <!-- 忘记密码和注册链接 -->
          <div class="form-links">
            <a href="#" class="link-forgot-password">忘记密码?</a>
            <a href="#" class="link-register">没有账号? 立即注册</a>
          </div>

          <!-- 登录按钮 -->
          <button type="submit" class="btn-login-submit">
            登录
          </button>
        </form>
      </div>

      <!-- 返回首页链接 -->
      <div class="back-to-home">
        <NuxtLink to="/">
          <i class="fas fa-arrow-left"></i> 返回首页
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
