<script setup lang="ts">
interface Product {
  name: string
  path: string
  category: string
}

const props = defineProps<{
  product: Product
}>()

// 对图片路径进行 URL 编码，处理文件名中的特殊字符
const encodedImagePath = computed(() => {
  // 分离路径和文件名
  const parts = props.product.path.split('/')
  // 对文件名部分进行编码，保留路径分隔符
  const encodedParts = parts.map((part, index) => {
    // 对最后一部分（文件名）进行 URL 编码
    if (index === parts.length - 1) {
      return encodeURIComponent(part)
    }
    return part
  })
  return encodedParts.join('/')
})
</script>

<template>
  <div class="product-card">
    <div class="product-image">
      <img
        :src="encodedImagePath"
        :alt="product.name"
        loading="lazy"
      >
    </div>
    <div class="product-info">
      <h3 class="product-title">{{ product.name }}</h3>
      <div class="product-name-overlay">
        <div class="overlay-content">
          {{ product.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.product-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);

    .product-image img {
      transform: scale(1.05);
    }
    .product-info {
      padding: 1rem;
      position: relative;

      .product-title {
        opacity: 0;
      }

      .product-name-overlay {
        transform: translateY(0);
      }
    }

  }

  .product-image {
    width: 100%;
    height: 200px;
    overflow: hidden;
    border-radius: 8px 8px 0 0;
    background: #f5f5f5;
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: transform 0.3s ease;
    }
  }

  .product-info {
    padding: 1rem;
    position: relative;

    .product-title {
      font-size: 0.9rem;
      line-height: 1.4;
      color: #333;
      margin: 0;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
      min-height: 2.8em;
    }

    .product-name-overlay {
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      background: rgba(255, 255, 255, 0.85);
      transform: translateY(100%);
      transition: transform 0.3s ease;
      padding: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100%;

      .overlay-content {
        font-size: 0.9rem;
        line-height: 1.4;
        word-break: break-word;
        max-width: 100%;
      }
    }
  }
}
</style>
