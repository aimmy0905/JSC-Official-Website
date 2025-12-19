import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// 递归读取目录下的所有图片文件
function getImageFiles(dir, baseDir = dir) {
  const results = [];
  const files = fs.readdirSync(dir);

  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      results.push(...getImageFiles(filePath, baseDir));
    } else if (/\.(jpg|jpeg|png|gif|webp)$/i.test(file)) {
      // 获取相对于 public 目录的路径
      const relativePath = filePath.replace(baseDir, '').replace(/\\/g, '/');
      results.push(relativePath);
    }
  });

  return results;
}

// 按类别组织图片
function organizeByCategory(imagePaths) {
  const categories = {};

  imagePaths.forEach(imagePath => {
    // 从路径中提取类别名称 (例如: /images/products/appliances/xxx.jpg -> appliances)
    const match = imagePath.match(/\/products\/([^/]+)\//);
    if (match) {
      const category = match[1];
      if (!categories[category]) {
        categories[category] = [];
      }

      // 提取文件名（不含扩展名）作为产品名称
      const fileName = path.basename(imagePath);
      const productName = fileName.replace(/\.(jpg|jpeg|png|gif|webp)$/i, '');

      categories[category].push({
        name: productName,
        path: imagePath,
        fileName: fileName
      });
    }
  });

  return categories;
}

// 主函数
function generateProductImages() {
  const productsDir = path.join(__dirname, '../public/images/products');

  console.log('正在扫描图片文件...');
  const imagePaths = getImageFiles(productsDir, path.join(__dirname, '../public'));

  console.log(`找到 ${imagePaths.length} 张图片`);

  const categorizedImages = organizeByCategory(imagePaths);

  console.log(`分类数量: ${Object.keys(categorizedImages).length}`);
  Object.entries(categorizedImages).forEach(([category, images]) => {
    console.log(`  - ${category}: ${images.length} 张图片`);
  });

  // 生成 JS 文件（用于 Nuxt app 目录）
  const outputPath = path.join(__dirname, '../app/data/productImages.ts');
  const content = `// 自动生成的产品图片数据
// 生成时间: ${new Date().toISOString()}

export interface ProductImage {
  name: string;
  path: string;
  fileName: string;
}

export interface ProductImages {
  [category: string]: ProductImage[];
}

export const productImages: ProductImages = ${JSON.stringify(categorizedImages, null, 2)};

// 获取指定类别的所有图片
export function getImagesByCategory(category: string): ProductImage[] {
  return productImages[category] || [];
}

// 获取所有类别
export function getAllCategories(): string[] {
  return Object.keys(productImages);
}

// 获取所有图片数量
export function getTotalImageCount(): number {
  return Object.values(productImages).reduce((sum, images) => sum + images.length, 0);
}

// 根据名称搜索图片
export function searchImagesByName(query: string): Array<ProductImage & { category: string }> {
  const results: Array<ProductImage & { category: string }> = [];
  const lowerQuery = query.toLowerCase();

  Object.entries(productImages).forEach(([category, images]) => {
    images.forEach(image => {
      if (image.name.toLowerCase().includes(lowerQuery)) {
        results.push({ ...image, category });
      }
    });
  });

  return results;
}

export default productImages;
`;

  // 确保目录存在
  const outputDir = path.dirname(outputPath);
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  fs.writeFileSync(outputPath, content, 'utf8');
  console.log(`\n✓ 产品图片数据已生成到: ${outputPath}`);
}

// 运行脚本
generateProductImages();
