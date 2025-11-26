/**
 * JSC Dropshipping 官网 JavaScript
 * 负责网站的交互功能
 */

// ==================== 导航栏功能 ====================

// 汉堡菜单切换（移动端）
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    if (hamburger) {
        hamburger.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
        
        // 点击菜单项后关闭菜单
        const navLinks = document.querySelectorAll('.nav-menu li a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }
});

// ==================== 返回顶部按钮 ====================

const backToTopButton = document.getElementById('backToTop');

// 监听滚动事件
window.addEventListener('scroll', function() {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

// 点击返回顶部
if (backToTopButton) {
    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ==================== FAQ 折叠功能 ====================

// 获取所有FAQ项目
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', function() {
        // 关闭所有其他打开的FAQ
        faqItems.forEach(otherItem => {
            if (otherItem !== item && otherItem.classList.contains('active')) {
                otherItem.classList.remove('active');
            }
        });
        
        // 切换当前FAQ的状态
        item.classList.toggle('active');
    });
});

// ==================== 产品搜索功能 ====================

function searchProducts() {
    const searchInput = document.getElementById('productSearch');
    if (searchInput) {
        const searchTerm = searchInput.value.toLowerCase().trim();
        const productCards = document.querySelectorAll('.product-card');
        
        if (searchTerm === '') {
            // 如果搜索框为空，显示所有产品
            productCards.forEach(card => {
                card.style.display = 'block';
            });
            return;
        }
        
        let foundCount = 0;
        
        productCards.forEach(card => {
            const title = card.querySelector('.product-title').textContent.toLowerCase();
            
            if (title.includes(searchTerm)) {
                card.style.display = 'block';
                foundCount++;
            } else {
                card.style.display = 'none';
            }
        });
        
        // 如果没有找到任何产品，可以显示提示
        if (foundCount === 0) {
            alert('没有找到匹配的产品，请尝试其他关键词');
        }
    }
}

// 回车键搜索
const searchInput = document.getElementById('productSearch');
if (searchInput) {
    searchInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            searchProducts();
        }
    });
}

// ==================== 滚动动画 ====================

// 观察元素进入视口
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// 为需要动画的元素添加观察
document.addEventListener('DOMContentLoaded', function() {
    const animateElements = document.querySelectorAll(
        '.service-card, .step, .platform-logo, .advantage-item, .product-card, .faq-item'
    );
    
    animateElements.forEach(element => {
        observer.observe(element);
    });
});

// ==================== 平滑滚动 ====================

// 为所有锚点链接添加平滑滚动
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ==================== 导航栏滚动效果 ====================

let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 4px 16px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// ==================== 产品分类筛选 ====================

const categoryTabs = document.querySelectorAll('.tab');

categoryTabs.forEach(tab => {
    tab.addEventListener('click', function(e) {
        e.preventDefault();
        
        // 移除所有active类
        categoryTabs.forEach(t => t.classList.remove('active'));
        
        // 给当前点击的tab添加active类
        this.classList.add('active');
        
        // 这里可以添加实际的筛选逻辑
        // 目前是演示版本，只改变样式
        console.log('选中分类：', this.textContent);
    });
});

// ==================== 页面加载完成提示 ====================

window.addEventListener('load', function() {
    console.log('JSC Dropshipping 网站加载完成！');
    console.log('如有任何问题，请联系：info@jscdropshipping.com');
});

// ==================== 表单验证（如果有联系表单） ====================

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// ==================== 点击统计（可选） ====================

// 统计按钮点击
const ctaButtons = document.querySelectorAll('.btn-primary, .btn-secondary');

ctaButtons.forEach(button => {
    button.addEventListener('click', function() {
        const buttonText = this.textContent.trim();
        console.log('按钮点击：', buttonText);
        // 这里可以添加Google Analytics或其他统计代码
    });
});

// ==================== 产品卡片hover效果增强 ====================

const productCards = document.querySelectorAll('.product-card');

productCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transition = 'all 0.3s ease';
    });
});

// ==================== 服务卡片点击查看更多 ====================

const serviceCards = document.querySelectorAll('.service-card');

serviceCards.forEach(card => {
    card.addEventListener('click', function() {
        // 这里可以添加显示更多详情的逻辑
        console.log('服务卡片被点击：', this.querySelector('h3').textContent);
    });
});

// ==================== 图片懒加载（如果需要） ====================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    const lazyImages = document.querySelectorAll('img.lazy');
    lazyImages.forEach(img => imageObserver.observe(img));
}

// ==================== 防止快速点击 ====================

function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ==================== 页面性能监控 ====================

if (window.performance) {
    window.addEventListener('load', function() {
        setTimeout(function() {
            const perfData = window.performance.timing;
            const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;
            console.log('页面加载时间：', pageLoadTime + 'ms');
        }, 0);
    });
}

// ==================== 添加到购物车动画（产品页） ====================

const addToCartButtons = document.querySelectorAll('.btn-add-cart');

addToCartButtons.forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        
        // 添加点击动画
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = 'scale(1)';
        }, 100);
        
        // 获取产品信息
        const productCard = this.closest('.product-card');
        const productTitle = productCard.querySelector('.product-title').textContent;
        const productPrice = productCard.querySelector('.product-price').textContent;
        
        console.log('查看产品：', productTitle, productPrice);
        
        // 这里可以添加实际的购物车逻辑
        // 或者跳转到详情页
        alert('产品信息：\n' + productTitle + '\n价格：' + productPrice + '\n\n请联系我们获取更多信息！');
    });
});

// ==================== 打印调试信息 ====================

console.log('%c欢迎来到 JSC Dropshipping！', 'color: #6B4FBB; font-size: 20px; font-weight: bold;');
console.log('%c专业的一站式代发货服务平台', 'color: #FF8C42; font-size: 14px;');
console.log('%c联系我们：info@jscdropshipping.com', 'color: #666; font-size: 12px;');

// ==================== 客户反馈滑动功能 ====================

function scrollTestimonials(direction) {
    const slider = document.querySelector('.testimonials-slider');
    if (!slider) return;
    
    const scrollAmount = 355; // 卡片宽度(340) + 间隙(15)
    
    if (direction === 'prev') {
        slider.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    } else if (direction === 'next') {
        slider.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }
}


// ==================== 导出函数供HTML使用 ====================

// 确保函数可以在HTML中被调用
window.searchProducts = searchProducts;
window.scrollTestimonials = scrollTestimonials;

