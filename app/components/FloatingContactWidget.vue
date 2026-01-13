<script setup lang="ts">
const isExpanded = ref(false)

// 联系方式配置
// TODO: 请在部署前更新 Telegram 和 Skype 的实际联系方式
const contactConfig = {
  whatsapp: {
    url: 'https://wa.me/message/JGG26DVDNY3WM1',
    label: 'WhatsApp',
    enabled: true
  },
  telegram: {
    url: 'https://t.me/YOUR_TELEGRAM_USERNAME', // 请替换为实际的 Telegram 用户名
    label: 'Telegram',
    enabled: true
  },
  skype: {
    url: 'skype:YOUR_SKYPE_ID?chat', // 请替换为实际的 Skype ID
    label: 'Skype',
    enabled: true
  }
}

const toggleExpanded = () => {
  isExpanded.value = !isExpanded.value
}

const openContact = (platform: 'whatsapp' | 'telegram' | 'skype') => {
  const config = contactConfig[platform]

  if (!config.enabled) {
    console.warn(`${config.label} 联系方式未配置`)
    return
  }

  window.open(config.url, '_blank')
}
</script>

<template>
  <div class="floating-contact-widget">
    <!-- 联系方式按钮组 -->
    <div class="contact-buttons" :class="{ expanded: isExpanded }">
      <button
        v-if="contactConfig.whatsapp.enabled"
        class="contact-btn whatsapp"
        @click="openContact('whatsapp')"
        :title="contactConfig.whatsapp.label"
        :aria-label="contactConfig.whatsapp.label"
      >
        <i class="fab fa-whatsapp"></i>
      </button>
      <button
        v-if="contactConfig.telegram.enabled"
        class="contact-btn telegram"
        @click="openContact('telegram')"
        :title="contactConfig.telegram.label"
        :aria-label="contactConfig.telegram.label"
      >
        <i class="fab fa-telegram"></i>
      </button>
      <button
        v-if="contactConfig.skype.enabled"
        class="contact-btn skype"
        @click="openContact('skype')"
        :title="contactConfig.skype.label"
        :aria-label="contactConfig.skype.label"
      >
        <i class="fab fa-skype"></i>
      </button>
    </div>

    <!-- 主按钮 -->
    <button
      class="main-button"
      @click="toggleExpanded"
      :class="{ active: isExpanded }"
      title="Contact Us"
      aria-label="Contact Us"
    >
      <i class="fas fa-comment" v-if="!isExpanded"></i>
      <i class="fas fa-times" v-else></i>
    </button>
  </div>
</template>

<style scoped lang="scss">
.floating-contact-widget {
  position: fixed;
  bottom: 100px;
  right: 30px;
  z-index: 998;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
}

// 联系方式按钮组
.contact-buttons {
  display: flex;
  flex-direction: column;
  gap: 12px;
  pointer-events: none;

  .contact-btn {
    width: 50px;
    height: 50px;
    border: none;
    border-radius: 50%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
    color: white;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    transition: all 0.3s ease;
    transform: translateY(70px) scale(0.8);
    opacity: 0;
    pointer-events: none;

    i {
      transition: transform 0.2s ease;
    }

    &:hover {
      transform: translateY(0) scale(1.1);
      box-shadow: 0 6px 20px rgba(0, 0, 0, 0.25);

      i {
        transform: scale(1.1);
      }
    }

    &.whatsapp {
      background: linear-gradient(135deg, #25D366 0%, #128C7E 100%);
    }

    &.telegram {
      background: linear-gradient(135deg, #0088cc 0%, #005f8c 100%);
    }

    &.skype {
      background: linear-gradient(135deg, #00AFF0 0%, #0078D4 100%);
    }
  }

  &.expanded .contact-btn {
    transform: translateY(0) scale(1);
    opacity: 1;
    pointer-events: auto;

    &:nth-child(1) {
      transition-delay: 0.05s;
    }

    &:nth-child(2) {
      transition-delay: 0.1s;
    }

    &:nth-child(3) {
      transition-delay: 0.15s;
    }
  }
}

// 主按钮
.main-button {
  width: 50px;
  height: 50px;
  border: none;
  border-radius: 50%;
  background: linear-gradient(135deg, #6B4FBB 0%, #5a3fa0 100%);
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  box-shadow: 0 4px 16px rgba(107, 79, 187, 0.4);
  transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
  }

  &:hover {
    transform: translateY(-5px) scale(1.05);
    box-shadow: 0 8px 24px rgba(107, 79, 187, 0.5);

    &::before {
      width: 100%;
      height: 100%;
    }
  }

  &:active {
    transform: translateY(-2px) scale(0.98);
  }

  &.active {
    background: linear-gradient(135deg, #5a3fa0 0%, #6B4FBB 100%);
    transform: rotate(90deg);

    &:hover {
      transform: translateY(-5px) rotate(90deg) scale(1.05);
    }
  }

  i {
    position: relative;
    z-index: 1;
    transition: transform 0.3s ease;
  }
}

// 响应式设计
@media (max-width: 768px) {
  .floating-contact-widget {
    bottom: 80px;
    right: 20px;
  }

  .contact-buttons {
    gap: 10px;

    .contact-btn {
      width: 45px;
      height: 45px;
      font-size: 20px;
    }
  }

  .main-button {
    width: 45px;
    height: 45px;
    font-size: 20px;
  }
}

@media (max-width: 480px) {
  .floating-contact-widget {
    bottom: 70px;
    right: 15px;
  }

  .contact-buttons {
    gap: 8px;

    .contact-btn {
      width: 42px;
      height: 42px;
      font-size: 18px;
    }
  }

  .main-button {
    width: 42px;
    height: 42px;
    font-size: 18px;
  }
}
</style>
