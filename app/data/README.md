# 产品图片数据

此目录包含自动生成的产品图片数据文件。

## 文件说明

- `productImages.ts` - 自动生成的产品图片数据文件（TypeScript）

## 数据统计

- **总图片数**: 248 张
- **分类数**: 5 个
  - appliances (家电): 76 张
  - babycare (母婴/宝宝): 34 张
  - decor (装饰品): 41 张
  - pets (宠物用品): 42 张
  - toys (玩具): 55 张

## 重新生成数据

当你添加或删除 `public/images/products` 目录下的图片后，运行以下命令重新生成数据文件：

```bash
node scripts/generate-product-images.js
```

## 使用方法

在 Nuxt 页面或组件中导入：

```typescript
import {
  productImages,           // 原始数据对象
  getImagesByCategory,     // 按类别获取图片
  getAllCategories,        // 获取所有类别
  searchImagesByName,      // 搜索图片
  type ProductImage        // TypeScript 类型
} from '~/data/productImages'
```

## API

### productImages

包含所有产品图片数据的对象。

```typescript
const allProducts = productImages
// { appliances: [...], babycare: [...], ... }
```

### getImagesByCategory(category: string)

获取指定类别的所有图片。

```typescript
const applianceImages = getImagesByCategory('appliances')
// [{ name: '...', path: '...', fileName: '...' }, ...]
```

### getAllCategories()

获取所有类别名称。

```typescript
const categories = getAllCategories()
// ['appliances', 'babycare', 'decor', 'pets', 'toys']
```

### searchImagesByName(query: string)

根据名称搜索图片。

```typescript
const results = searchImagesByName('lamp')
// [{ name: '...', path: '...', fileName: '...', category: 'appliances' }, ...]
```

## 示例

查看 `app/pages/products.vue` 获取完整的使用示例。

## 注意事项

⚠️ **不要手动编辑 `productImages.ts` 文件，它是自动生成的！**

如果需要修改数据，请：
1. 在 `public/images/products` 目录中添加/删除/修改图片
2. 运行 `node scripts/generate-product-images.js` 重新生成数据文件
