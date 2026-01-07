# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

JSC Dropshipping Official Website - A Nuxt 3 application for a Chinese dropshipping service platform. The site showcases dropshipping services, product catalogs, and integrations with e-commerce platforms like Shopify, Amazon, and eBay.

**Tech Stack**: Nuxt 4.2.2, Vue 3, TypeScript, Sass

## Development Commands

### Installation
```bash
pnpm install
```

### Development Server
```bash
pnpm dev
# Starts on http://localhost:3000
```

### Build
```bash
pnpm build        # Production build
pnpm preview      # Preview production build
pnpm generate     # Generate static site
```

### Product Data Management
```bash
node scripts/generate-product-images.js
# Scans public/images/products/ and regenerates app/data/productImages.ts
# Run this after adding/removing product images
```

## Architecture

### Directory Structure

```
app/
├── components/       # Vue components (Navbar, Footer, ProductCard, etc.)
├── composables/      # Nuxt composables (useProducts)
├── data/            # Generated data files (productImages.ts)
├── layouts/         # Layout components (default.vue wraps Navbar/Footer)
├── pages/           # File-based routing (index, products, services, faq)
└── assets/css/      # Global SCSS styles
```

### Key Architectural Patterns

**Layout System**: Uses a `default.vue` layout that wraps all pages with Navbar, Footer, and BackToTop components. The layout is applied via `app.vue`.

**Product Image System**: The codebase uses an automated product data generation system:

1. **Data Source**: Product images stored in `public/images/products/` organized by category subdirectories (appliances, babycare, decor, pets, toys)

2. **Data Generation**: `scripts/generate-product-images.js` scans the product images directory and generates a TypeScript data file with type-safe interfaces

3. **Generated Output**: `app/data/productImages.ts` (1298 lines, ~248 products) - Contains:
   - `ProductImage` and `ProductImages` interfaces
   - `productImages` object organized by category
   - Utility functions: `getImagesByCategory()`, `getAllCategories()`, `getTotalImageCount()`, `searchImagesByName()`

4. **Composable Layer**: `app/composables/useProducts.ts` provides higher-level abstractions:
   - Category name mapping (English ↔ Chinese)
   - `getAllProducts()` - Flattens all products with category info
   - `getRandomProducts(count)` - Random product selection
   - `paginateProducts()` - Pagination logic
   - `getCategoryStats()` - Category statistics

5. **Usage in Pages**: Pages like `products.vue` and `index.vue` use `useProducts()` composable to access product data

**Important**: When adding new product images, always run the generation script to update the data file. The script is the single source of truth for product data.

### Routing

File-based routing via Nuxt pages:
- `/` - Homepage (index.vue)
- `/products` - Product catalog with filtering, search, and pagination
- `/services` - Service descriptions
- `/faq` - FAQ page

### Styling

Global styles defined in `app/assets/css/main.scss`, imported via nuxt.config.ts. Uses SCSS with component-scoped styles. Font Awesome 6.4.0 loaded via CDN.

### Language & i18n

Site is primarily in Chinese (lang='zh-CN' set in nuxt.config.ts). Content is hardcoded in components - there is no i18n library configured.

## Important Implementation Details

### Product Images Workflow

When modifying products:
1. Add/remove images in `public/images/products/[category]/`
2. Run `node scripts/generate-product-images.js`
3. The script auto-updates `app/data/productImages.ts`
4. Changes are immediately available via `useProducts()` composable

### Adding New Product Categories

1. Create directory in `public/images/products/[new-category]/`
2. Add images to the directory
3. Run generation script
4. Update `categoryNameMap` in `app/composables/useProducts.ts` to add Chinese name mapping

### TypeScript Configuration

Uses Nuxt's extended TypeScript setup with project references to `.nuxt/` generated config files. Don't modify `tsconfig.json` directly - configure via nuxt.config.ts if needed.

## External Dependencies

- Font Awesome 6.4.0 (CDN) - Used throughout for icons
- E-commerce platform logos (Shopify, WooCommerce, Amazon, eBay) stored in `public/images/logos/`

## Pages Implementation Notes

**products.vue**: Full-featured product catalog with:
- Category filtering (6 options: all + 5 categories)
- Real-time search by product name
- Pagination (20 items per page)
- Product count display
- Responsive grid layout

**index.vue**: Homepage with:
- Random hot products display (uses `getRandomProducts(8)`)
- Service showcase (4 core services)
- Process steps (4-step workflow)
- Platform integrations
- Testimonials

Both pages use the auto-generated product data system, not hardcoded data.
