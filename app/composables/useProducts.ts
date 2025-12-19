/**
 * 产品数据 Composable
 * 在任何 Nuxt 组件中使用产品图片数据
 */

import {
  productImages,
  getImagesByCategory,
  getAllCategories,
  getTotalImageCount,
  searchImagesByName,
  type ProductImage
} from '~/data/productImages'

export const useProducts = () => {
  /**
   * 类别名称映射（英文 -> 中文）
   */
  const categoryNameMap: Record<string, string> = {
    appliances: '家电',
    babycare: '母婴/宝宝',
    decor: '装饰品',
    pets: '宠物用品',
    toys: '玩具'
  }

  /**
   * 获取中文类别名称
   */
  const getCategoryName = (categoryKey: string): string => {
    return categoryNameMap[categoryKey] || categoryKey
  }

  /**
   * 获取英文类别key
   */
  const getCategoryKey = (categoryName: string): string | undefined => {
    return Object.entries(categoryNameMap).find(
      ([_, cnName]) => cnName === categoryName
    )?.[0]
  }

  /**
   * 获取所有类别（中文）
   */
  const getCategoriesInChinese = (): string[] => {
    return getAllCategories().map(cat => getCategoryName(cat))
  }

  /**
   * 获取所有产品（包含类别信息）
   */
  const getAllProducts = (): Array<ProductImage & { category: string }> => {
    return Object.entries(productImages).flatMap(([category, images]) =>
      images.map(img => ({ ...img, category }))
    )
  }

  /**
   * 获取指定类别的产品
   */
  const getProductsByCategory = (category: string): Array<ProductImage & { category: string }> => {
    const images = getImagesByCategory(category)
    return images.map(img => ({ ...img, category }))
  }

  /**
   * 获取随机产品
   */
  const getRandomProducts = (count: number = 4): Array<ProductImage & { category: string }> => {
    const allProducts = getAllProducts()
    return allProducts
      .sort(() => Math.random() - 0.5)
      .slice(0, count)
  }

  /**
   * 获取某个类别的随机产品
   */
  const getRandomProductsByCategory = (
    category: string,
    count: number = 4
  ): Array<ProductImage & { category: string }> => {
    const products = getProductsByCategory(category)
    return products
      .sort(() => Math.random() - 0.5)
      .slice(0, count)
  }

  /**
   * 分页产品
   */
  const paginateProducts = (
    products: Array<ProductImage & { category: string }>,
    page: number = 1,
    itemsPerPage: number = 20
  ) => {
    const start = (page - 1) * itemsPerPage
    const end = start + itemsPerPage
    const items = products.slice(start, end)
    const totalPages = Math.ceil(products.length / itemsPerPage)

    return {
      items,
      currentPage: page,
      totalPages,
      totalItems: products.length,
      hasNext: page < totalPages,
      hasPrev: page > 1
    }
  }

  /**
   * 获取类别统计信息
   */
  const getCategoryStats = () => {
    return getAllCategories().map(category => ({
      key: category,
      name: getCategoryName(category),
      count: getImagesByCategory(category).length
    }))
  }

  return {
    // 原始数据和函数
    productImages,
    getImagesByCategory,
    getAllCategories,
    getTotalImageCount,
    searchImagesByName,

    // 扩展功能
    categoryNameMap,
    getCategoryName,
    getCategoryKey,
    getCategoriesInChinese,
    getAllProducts,
    getProductsByCategory,
    getRandomProducts,
    getRandomProductsByCategory,
    paginateProducts,
    getCategoryStats
  }
}

// 类型导出
export type { ProductImage }
