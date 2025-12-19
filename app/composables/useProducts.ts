/**
 * Product Data Composable
 * Use product image data in any Nuxt component
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
   * Category name mapping (key -> display name)
   */
  const categoryNameMap: Record<string, string> = {
    appliances: 'Appliances',
    babycare: 'Baby Care',
    decor: 'Decor',
    pets: 'Pet Supplies',
    toys: 'Toys'
  }

  /**
   * Get category display name
   */
  const getCategoryName = (categoryKey: string): string => {
    return categoryNameMap[categoryKey] || categoryKey
  }

  /**
   * Get category key from display name
   */
  const getCategoryKey = (categoryName: string): string | undefined => {
    return Object.entries(categoryNameMap).find(
      ([_, displayName]) => displayName === categoryName
    )?.[0]
  }

  /**
   * Get all categories (display names)
   */
  const getCategoriesInChinese = (): string[] => {
    return getAllCategories().map(cat => getCategoryName(cat))
  }

  /**
   * Get all products (with category info)
   */
  const getAllProducts = (): Array<ProductImage & { category: string }> => {
    return Object.entries(productImages).flatMap(([category, images]) =>
      images.map(img => ({ ...img, category }))
    )
  }

  /**
   * Get products by category
   */
  const getProductsByCategory = (category: string): Array<ProductImage & { category: string }> => {
    const images = getImagesByCategory(category)
    return images.map(img => ({ ...img, category }))
  }

  /**
   * Get random products
   */
  const getRandomProducts = (count: number = 4): Array<ProductImage & { category: string }> => {
    const allProducts = getAllProducts()
    return allProducts
      .sort(() => Math.random() - 0.5)
      .slice(0, count)
  }

  /**
   * Get random products by category
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
   * Paginate products
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
   * Get category statistics
   */
  const getCategoryStats = () => {
    return getAllCategories().map(category => ({
      key: category,
      name: getCategoryName(category),
      count: getImagesByCategory(category).length
    }))
  }

  return {
    // Original data and functions
    productImages,
    getImagesByCategory,
    getAllCategories,
    getTotalImageCount,
    searchImagesByName,

    // Extended functionality
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

// Type exports
export type { ProductImage }
