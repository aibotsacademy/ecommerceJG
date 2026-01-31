// ===================================
// LUXAESTHETICA - JavaScript
// E-commerce functionality
// ===================================

// === Product Data ===
const productsData = [
    {
        id: 1,
        name: "Barrier Recovery Serum",
        category: "Skincare",
        price: 185,
        description: "Advanced peptide complex with ceramide barrier support",
        rating: 5,
        tags: ["bestseller", "curated"],
        stock: 24,
        imageSvg: `<svg width="200" height="200" viewBox="0 0 200 200"><defs><linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#7C5CFF;stop-opacity:0.3"/><stop offset="100%" style="stop-color:#22D3EE;stop-opacity:0.3"/></linearGradient></defs><rect width="200" height="200" fill="url(#g1)"/><circle cx="100" cy="100" r="40" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="2"/><circle cx="100" cy="100" r="20" fill="rgba(124,92,255,0.5)"/></svg>`
    },
    {
        id: 2,
        name: "LED Precision Device",
        category: "Devices",
        price: 895,
        description: "Clinical-grade LED therapy with calibrated wavelengths",
        rating: 5,
        tags: ["bestseller", "new"],
        stock: 8,
        imageSvg: `<svg width="200" height="200" viewBox="0 0 200 200"><defs><linearGradient id="g2" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#22D3EE;stop-opacity:0.3"/><stop offset="100%" style="stop-color:#F5D0FE;stop-opacity:0.3"/></linearGradient></defs><rect width="200" height="200" fill="url(#g2)"/><rect x="60" y="60" width="80" height="80" rx="10" fill="none" stroke="rgba(255,255,255,0.4)" stroke-width="2"/><circle cx="100" cy="80" r="5" fill="rgba(34,211,238,0.8)"/><circle cx="100" cy="100" r="5" fill="rgba(34,211,238,0.8)"/><circle cx="100" cy="120" r="5" fill="rgba(34,211,238,0.8)"/></svg>`
    },
    {
        id: 3,
        name: "Retinal Complex",
        category: "Skincare",
        price: 165,
        description: "Time-release retinal with antioxidant defense",
        rating: 5,
        tags: ["bestseller", "curated"],
        stock: 18,
        imageSvg: `<svg width="200" height="200" viewBox="0 0 200 200"><defs><linearGradient id="g3" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#F5D0FE;stop-opacity:0.3"/><stop offset="100%" style="stop-color:#7C5CFF;stop-opacity:0.3"/></linearGradient></defs><rect width="200" height="200" fill="url(#g3)"/><path d="M100 60 L120 90 L150 90 L130 110 L140 140 L100 120 L60 140 L70 110 L50 90 L80 90 Z" fill="none" stroke="rgba(245,208,254,0.6)" stroke-width="2"/></svg>`
    },
    {
        id: 4,
        name: "Hyaluronic Hydration",
        category: "Skincare",
        price: 145,
        description: "Multi-weight HA with moisture retention technology",
        rating: 4,
        tags: ["curated"],
        stock: 32,
        imageSvg: `<svg width="200" height="200" viewBox="0 0 200 200"><defs><linearGradient id="g4" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#22D3EE;stop-opacity:0.3"/><stop offset="100%" style="stop-color:#7C5CFF;stop-opacity:0.3"/></linearGradient></defs><rect width="200" height="200" fill="url(#g4)"/><circle cx="100" cy="100" r="50" fill="none" stroke="rgba(34,211,238,0.5)" stroke-width="2"/><circle cx="100" cy="100" r="35" fill="none" stroke="rgba(34,211,238,0.4)" stroke-width="2"/><circle cx="100" cy="100" r="20" fill="rgba(34,211,238,0.3)"/></svg>`
    },
    {
        id: 5,
        name: "Microcurrent Sculpting Tool",
        category: "Devices",
        price: 675,
        description: "Professional-grade facial contouring device",
        rating: 5,
        tags: ["new"],
        stock: 12,
        imageSvg: `<svg width="200" height="200" viewBox="0 0 200 200"><defs><linearGradient id="g5" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#7C5CFF;stop-opacity:0.3"/><stop offset="100%" style="stop-color:#F5D0FE;stop-opacity:0.3"/></linearGradient></defs><rect width="200" height="200" fill="url(#g5)"/><ellipse cx="100" cy="100" rx="40" ry="60" fill="none" stroke="rgba(124,92,255,0.5)" stroke-width="2"/><line x1="80" y1="90" x2="120" y2="90" stroke="rgba(255,255,255,0.4)" stroke-width="2"/><line x1="80" y1="110" x2="120" y2="110" stroke="rgba(255,255,255,0.4)" stroke-width="2"/></svg>`
    },
    {
        id: 6,
        name: "Recovery Mask Set",
        category: "Recovery",
        price: 225,
        description: "Post-treatment biocellulose masks with growth factors",
        rating: 5,
        tags: ["new"],
        stock: 15,
        imageSvg: `<svg width="200" height="200" viewBox="0 0 200 200"><defs><linearGradient id="g6" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#22D3EE;stop-opacity:0.3"/><stop offset="100%" style="stop-color:#F5D0FE;stop-opacity:0.3"/></linearGradient></defs><rect width="200" height="200" fill="url(#g6)"/><rect x="50" y="60" width="100" height="80" rx="40" fill="none" stroke="rgba(34,211,238,0.5)" stroke-width="2"/><circle cx="80" cy="90" r="8" fill="rgba(245,208,254,0.5)"/><circle cx="120" cy="90" r="8" fill="rgba(245,208,254,0.5)"/></svg>`
    },
    {
        id: 7,
        name: "Vitamin C Brightening",
        category: "Skincare",
        price: 155,
        description: "Stabilized L-ascorbic acid with ferulic acid",
        rating: 5,
        tags: [],
        stock: 28,
        imageSvg: `<svg width="200" height="200" viewBox="0 0 200 200"><defs><linearGradient id="g7" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#F5D0FE;stop-opacity:0.3"/><stop offset="100%" style="stop-color:#22D3EE;stop-opacity:0.3"/></linearGradient></defs><rect width="200" height="200" fill="url(#g7)"/><polygon points="100,50 130,80 130,130 100,150 70,130 70,80" fill="none" stroke="rgba(245,208,254,0.5)" stroke-width="2"/><circle cx="100" cy="100" r="15" fill="rgba(245,208,254,0.4)"/></svg>`
    },
    {
        id: 8,
        name: "Complete Restoration Bundle",
        category: "Bundles",
        price: 485,
        description: "Comprehensive treatment system with clinical protocols",
        rating: 5,
        tags: [],
        stock: 10,
        imageSvg: `<svg width="200" height="200" viewBox="0 0 200 200"><defs><linearGradient id="g8" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#7C5CFF;stop-opacity:0.3"/><stop offset="100%" style="stop-color:#22D3EE;stop-opacity:0.3"/></linearGradient></defs><rect width="200" height="200" fill="url(#g8)"/><rect x="60" y="60" width="80" height="80" rx="8" fill="none" stroke="rgba(124,92,255,0.5)" stroke-width="2"/><rect x="70" y="70" width="20" height="30" fill="rgba(124,92,255,0.3)"/><rect x="90" y="70" width="20" height="30" fill="rgba(34,211,238,0.3)"/><rect x="110" y="70" width="20" height="30" fill="rgba(245,208,254,0.3)"/></svg>`
    },
    {
        id: 9,
        name: "Elite Membership Annual",
        category: "Membership",
        price: 2400,
        description: "Unlimited treatments, priority booking, exclusive products",
        rating: 5,
        tags: [],
        stock: 999,
        imageSvg: `<svg width="200" height="200" viewBox="0 0 200 200"><defs><linearGradient id="g9" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#7C5CFF;stop-opacity:0.4"/><stop offset="100%" style="stop-color:#F5D0FE;stop-opacity:0.4"/></linearGradient></defs><rect width="200" height="200" fill="url(#g9)"/><path d="M100 50 L110 80 L140 85 L115 105 L122 135 L100 120 L78 135 L85 105 L60 85 L90 80 Z" fill="rgba(124,92,255,0.6)"/></svg>`
    },
    {
        id: 10,
        name: "Niacinamide Treatment",
        category: "Skincare",
        price: 135,
        description: "High-potency niacinamide with zinc for clarity",
        rating: 4,
        tags: [],
        stock: 40,
        imageSvg: `<svg width="200" height="200" viewBox="0 0 200 200"><defs><linearGradient id="g10" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#22D3EE;stop-opacity:0.3"/><stop offset="100%" style="stop-color:#7C5CFF;stop-opacity:0.3"/></linearGradient></defs><rect width="200" height="200" fill="url(#g10)"/><circle cx="100" cy="70" r="15" fill="none" stroke="rgba(34,211,238,0.5)" stroke-width="2"/><circle cx="80" cy="110" r="15" fill="none" stroke="rgba(34,211,238,0.5)" stroke-width="2"/><circle cx="120" cy="110" r="15" fill="none" stroke="rgba(34,211,238,0.5)" stroke-width="2"/></svg>`
    },
    {
        id: 11,
        name: "Cooling Cryo Tool",
        category: "Devices",
        price: 445,
        description: "Thermal therapy device for inflammation reduction",
        rating: 4,
        tags: ["new"],
        stock: 14,
        imageSvg: `<svg width="200" height="200" viewBox="0 0 200 200"><defs><linearGradient id="g11" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#22D3EE;stop-opacity:0.4"/><stop offset="100%" style="stop-color:#F5D0FE;stop-opacity:0.3"/></linearGradient></defs><rect width="200" height="200" fill="url(#g11)"/><path d="M100 50 L110 70 L130 75 L115 90 L118 110 L100 100 L82 110 L85 90 L70 75 L90 70 Z" fill="none" stroke="rgba(34,211,238,0.6)" stroke-width="2"/><circle cx="100" cy="130" r="20" fill="rgba(34,211,238,0.2)"/></svg>`
    },
    {
        id: 12,
        name: "Post-Laser Recovery Cream",
        category: "Recovery",
        price: 195,
        description: "Medical-grade healing complex with barrier repair",
        rating: 5,
        tags: [],
        stock: 22,
        imageSvg: `<svg width="200" height="200" viewBox="0 0 200 200"><defs><linearGradient id="g12" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#F5D0FE;stop-opacity:0.3"/><stop offset="100%" style="stop-color:#7C5CFF;stop-opacity:0.3"/></linearGradient></defs><rect width="200" height="200" fill="url(#g12)"/><rect x="70" y="70" width="60" height="60" rx="30" fill="none" stroke="rgba(245,208,254,0.5)" stroke-width="2"/><path d="M100 80 L100 120 M80 100 L120 100" stroke="rgba(245,208,254,0.6)" stroke-width="2"/></svg>`
    },
    {
        id: 13,
        name: "Peptide Eye Treatment",
        category: "Skincare",
        price: 175,
        description: "Advanced peptide blend for periorbital rejuvenation",
        rating: 5,
        tags: [],
        stock: 26,
        imageSvg: `<svg width="200" height="200" viewBox="0 0 200 200"><defs><linearGradient id="g13" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#7C5CFF;stop-opacity:0.3"/><stop offset="100%" style="stop-color:#22D3EE;stop-opacity:0.3"/></linearGradient></defs><rect width="200" height="200" fill="url(#g13)"/><ellipse cx="80" cy="100" rx="25" ry="15" fill="none" stroke="rgba(124,92,255,0.5)" stroke-width="2"/><ellipse cx="120" cy="100" rx="25" ry="15" fill="none" stroke="rgba(124,92,255,0.5)" stroke-width="2"/></svg>`
    },
    {
        id: 14,
        name: "RF Skin Tightening Device",
        category: "Devices",
        price: 1295,
        description: "Radio-frequency technology for collagen stimulation",
        rating: 5,
        tags: [],
        stock: 6,
        imageSvg: `<svg width="200" height="200" viewBox="0 0 200 200"><defs><linearGradient id="g14" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#F5D0FE;stop-opacity:0.3"/><stop offset="100%" style="stop-color:#22D3EE;stop-opacity:0.3"/></linearGradient></defs><rect width="200" height="200" fill="url(#g14)"/><circle cx="100" cy="100" r="45" fill="none" stroke="rgba(245,208,254,0.5)" stroke-width="2"/><path d="M85 100 Q100 80 115 100 Q100 120 85 100" fill="rgba(34,211,238,0.3)"/></svg>`
    },
    {
        id: 15,
        name: "Acne Treatment Bundle",
        category: "Bundles",
        price: 365,
        description: "Complete acne management system with clinical actives",
        rating: 4,
        tags: [],
        stock: 18,
        imageSvg: `<svg width="200" height="200" viewBox="0 0 200 200"><defs><linearGradient id="g15" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#22D3EE;stop-opacity:0.3"/><stop offset="100%" style="stop-color:#7C5CFF;stop-opacity:0.3"/></linearGradient></defs><rect width="200" height="200" fill="url(#g15)"/><circle cx="85" cy="85" r="12" fill="rgba(34,211,238,0.4)"/><circle cx="115" cy="85" r="12" fill="rgba(124,92,255,0.4)"/><circle cx="100" cy="115" r="12" fill="rgba(245,208,254,0.4)"/></svg>`
    },
    {
        id: 16,
        name: "Premium Membership Monthly",
        category: "Membership",
        price: 225,
        description: "Monthly treatments, product discounts, expert consultations",
        rating: 5,
        tags: [],
        stock: 999,
        imageSvg: `<svg width="200" height="200" viewBox="0 0 200 200"><defs><linearGradient id="g16" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#7C5CFF;stop-opacity:0.3"/><stop offset="100%" style="stop-color:#22D3EE;stop-opacity:0.3"/></linearGradient></defs><rect width="200" height="200" fill="url(#g16)"/><rect x="60" y="70" width="80" height="60" rx="8" fill="none" stroke="rgba(124,92,255,0.5)" stroke-width="2"/><text x="100" y="110" text-anchor="middle" fill="rgba(124,92,255,0.6)" font-size="24" font-weight="bold">P</text></svg>`
    },
    {
        id: 17,
        name: "Intensive Recovery Serum",
        category: "Recovery",
        price: 245,
        description: "Post-procedure healing accelerator with growth factors",
        rating: 5,
        tags: ["new"],
        stock: 16,
        imageSvg: `<svg width="200" height="200" viewBox="0 0 200 200"><defs><linearGradient id="g17" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#F5D0FE;stop-opacity:0.3"/><stop offset="100%" style="stop-color:#22D3EE;stop-opacity:0.3"/></linearGradient></defs><rect width="200" height="200" fill="url(#g17)"/><path d="M100 60 L100 140 M70 100 L130 100" stroke="rgba(245,208,254,0.5)" stroke-width="3" stroke-linecap="round"/><circle cx="100" cy="100" r="35" fill="none" stroke="rgba(34,211,238,0.4)" stroke-width="2"/></svg>`
    },
    {
        id: 18,
        name: "Exfoliation Treatment Kit",
        category: "Skincare",
        price: 205,
        description: "Medical-grade exfoliation system with barrier support",
        rating: 4,
        tags: [],
        stock: 20,
        imageSvg: `<svg width="200" height="200" viewBox="0 0 200 200"><defs><linearGradient id="g18" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" style="stop-color:#7C5CFF;stop-opacity:0.3"/><stop offset="100%" style="stop-color:#F5D0FE;stop-opacity:0.3"/></linearGradient></defs><rect width="200" height="200" fill="url(#g18)"/><rect x="65" y="65" width="70" height="70" rx="4" fill="none" stroke="rgba(124,92,255,0.5)" stroke-width="2"/><circle cx="80" cy="80" r="3" fill="rgba(245,208,254,0.6)"/><circle cx="100" cy="80" r="3" fill="rgba(245,208,254,0.6)"/><circle cx="120" cy="80" r="3" fill="rgba(245,208,254,0.6)"/><circle cx="80" cy="100" r="3" fill="rgba(245,208,254,0.6)"/><circle cx="100" cy="100" r="3" fill="rgba(245,208,254,0.6)"/><circle cx="120" cy="100" r="3" fill="rgba(245,208,254,0.6)"/><circle cx="80" cy="120" r="3" fill="rgba(245,208,254,0.6)"/><circle cx="100" cy="120" r="3" fill="rgba(245,208,254,0.6)"/><circle cx="120" cy="120" r="3" fill="rgba(245,208,254,0.6)"/></svg>`
    }
];

// === State Management ===
let cart = [];
let currentFilter = 'all';
let currentSort = 'featured';
let currentCategory = 'Skincare';
let sliderPosition = 0;

// === Initialize ===
document.addEventListener('DOMContentLoaded', () => {
    initializeCart();
    renderTopPicks();
    renderCuratedProducts();
    renderNewArrivals();
    renderCategorySlider();
    renderProductsGrid();
    setupEventListeners();
    setupScrollReveal();
    setupParallax();
});

// === Cart Functions ===
function initializeCart() {
    const savedCart = localStorage.getItem('luxaesthetica-cart');
    if (savedCart) {
        cart = JSON.parse(savedCart);
        updateCartBadge();
    }
}

function saveCart() {
    localStorage.setItem('luxaesthetica-cart', JSON.stringify(cart));
}

function addToCart(productId) {
    const product = productsData.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    saveCart();
    updateCartBadge();
    renderCartItems();
    showToast(`${product.name} added to cart`);
}

function removeFromCart(productId) {
    const product = cart.find(item => item.id === productId);
    cart = cart.filter(item => item.id !== productId);
    saveCart();
    updateCartBadge();
    renderCartItems();
    if (product) {
        showToast(`${product.name} removed from cart`);
    }
}

function updateQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (!item) return;
    
    item.quantity += change;
    
    if (item.quantity <= 0) {
        removeFromCart(productId);
    } else {
        saveCart();
        renderCartItems();
    }
}

function updateCartBadge() {
    const badge = document.getElementById('cartBadge');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    badge.textContent = totalItems;
}

function renderCartItems() {
    const cartItemsContainer = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<div class="cart-empty">Your cart is empty</div>';
        cartTotal.textContent = '$0.00';
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    cartItemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item">
            <div class="cart-item-image">${item.imageSvg}</div>
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">$${item.price.toFixed(2)}</div>
                <div class="cart-item-controls">
                    <button class="qty-btn" onclick="updateQuantity(${item.id}, -1)" aria-label="Decrease quantity">−</button>
                    <span class="qty-display">${item.quantity}</span>
                    <button class="qty-btn" onclick="updateQuantity(${item.id}, 1)" aria-label="Increase quantity">+</button>
                    <button class="btn-add" onclick="removeFromCart(${item.id})" style="margin-left: auto;">Remove</button>
                </div>
            </div>
        </div>
    `).join('');
    
    cartTotal.textContent = `$${total.toFixed(2)}`;
}

// === Toast Notification ===
function showToast(message) {
    const toast = document.getElementById('toast');
    const toastContent = document.getElementById('toastContent');
    
    toastContent.textContent = message;
    toast.classList.add('show');
    
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// === Render Functions ===
function renderTopPicks() {
    const container = document.getElementById('topPicksGrid');
    const topProducts = productsData.filter(p => p.tags.includes('bestseller')).slice(0, 4);
    
    container.innerHTML = topProducts.map(product => createPremiumCard(product)).join('');
}

function renderCuratedProducts() {
    const container = document.getElementById('curatedProducts');
    const curatedProducts = productsData.filter(p => p.tags.includes('curated')).slice(0, 3);
    
    container.innerHTML = curatedProducts.map(product => `
        <div class="curated-product-card">
            <div class="curated-product-image">${product.imageSvg}</div>
            <div class="curated-product-info">
                <div class="curated-product-name">${product.name}</div>
                <div class="curated-product-benefit">${product.description}</div>
                <div class="curated-product-price">$${product.price.toFixed(2)}</div>
                <button class="btn-add" onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        </div>
    `).join('');
}

function renderNewArrivals() {
    const container = document.getElementById('newArrivalsTrack');
    const newProducts = productsData.filter(p => p.tags.includes('new'));
    
    container.innerHTML = newProducts.map(product => `
        <div class="carousel-card">
            <div class="carousel-image">${product.imageSvg}</div>
            <div class="carousel-name">${product.name}</div>
            <div class="carousel-price">$${product.price.toFixed(2)}</div>
            <span class="new-badge">New</span>
            <button class="btn-add" onclick="addToCart(${product.id})" style="margin-top: 0.5rem; width: 100%;">Add to Cart</button>
        </div>
    `).join('');
}

function renderCategorySlider() {
    updateSliderContent();
    updatePaginationDots();
}

function updateSliderContent() {
    const track = document.getElementById('sliderTrack');
    const categoryProducts = productsData.filter(p => p.category === currentCategory);
    
    track.innerHTML = categoryProducts.map(product => createSliderCard(product)).join('');
    sliderPosition = 0;
    updateSliderPosition();
}

function renderProductsGrid() {
    const container = document.getElementById('productsGrid');
    let filtered = currentFilter === 'all' 
        ? productsData 
        : productsData.filter(p => p.category === currentFilter);
    
    // Sort products
    filtered = sortProducts(filtered);
    
    container.innerHTML = filtered.map(product => createProductCard(product)).join('');
}

function sortProducts(products) {
    const sorted = [...products];
    
    switch(currentSort) {
        case 'price-asc':
            return sorted.sort((a, b) => a.price - b.price);
        case 'price-desc':
            return sorted.sort((a, b) => b.price - a.price);
        case 'rating':
            return sorted.sort((a, b) => b.rating - a.rating);
        case 'name':
            return sorted.sort((a, b) => a.name.localeCompare(b.name));
        default:
            return sorted;
    }
}

// === Card Templates ===
function createPremiumCard(product) {
    return `
        <div class="premium-card">
            <div class="card-image">${product.imageSvg}</div>
            <div class="card-body">
                <h3 class="card-name">${product.name}</h3>
                <p class="card-description">${product.description}</p>
                <div class="card-rating">${createStars(product.rating)}</div>
                <div class="card-tags">
                    ${product.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <div class="card-meta">
                    <span class="card-price">$${product.price.toFixed(2)}</span>
                    <button class="btn-add" onclick="addToCart(${product.id})">Add to Cart</button>
                </div>
            </div>
        </div>
    `;
}

function createSliderCard(product) {
    return `
        <div class="slider-card">
            <div class="card-image">${product.imageSvg}</div>
            <div class="card-body">
                <h3 class="card-name">${product.name}</h3>
                <p class="card-description">${product.description}</p>
                <div class="card-rating">${createStars(product.rating)}</div>
                <div class="card-meta">
                    <span class="card-price">$${product.price.toFixed(2)}</span>
                    <button class="btn-add" onclick="addToCart(${product.id})">Add</button>
                </div>
            </div>
        </div>
    `;
}

function createProductCard(product) {
    return `
        <div class="product-card">
            <div class="card-image">${product.imageSvg}</div>
            <div class="card-body">
                <h3 class="card-name">${product.name}</h3>
                <p class="card-description">${product.description}</p>
                <div class="card-rating">${createStars(product.rating)}</div>
                <div class="card-tags">
                    ${product.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <div class="card-meta">
                    <span class="card-price">$${product.price.toFixed(2)}</span>
                    <button class="btn-add" onclick="addToCart(${product.id})">Add to Cart</button>
                </div>
            </div>
        </div>
    `;
}

function createStars(rating) {
    const stars = [];
    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            stars.push('<span class="star">★</span>');
        } else {
            stars.push('<span class="star" style="opacity: 0.3;">★</span>');
        }
    }
    return stars.join('');
}

// === Event Listeners ===
function setupEventListeners() {
    // Cart drawer
    const cartToggle = document.getElementById('cartToggle');
    const cartClose = document.getElementById('cartClose');
    const cartClose2 = document.getElementById('cartClose2');
    const cartOverlay = document.getElementById('cartOverlay');
    const cartDrawer = document.getElementById('cartDrawer');
    
    cartToggle.addEventListener('click', () => {
        cartDrawer.setAttribute('aria-hidden', 'false');
        renderCartItems();
    });
    
    const closeCart = () => {
        cartDrawer.setAttribute('aria-hidden', 'true');
    };
    
    cartClose.addEventListener('click', closeCart);
    cartClose2.addEventListener('click', closeCart);
    cartOverlay.addEventListener('click', closeCart);
    
    // ESC key to close cart
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && cartDrawer.getAttribute('aria-hidden') === 'false') {
            closeCart();
        }
    });
    
    // Category tabs
    const categoryTabs = document.querySelectorAll('.category-tab');
    categoryTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            categoryTabs.forEach(t => {
                t.classList.remove('active');
                t.setAttribute('aria-selected', 'false');
            });
            tab.classList.add('active');
            tab.setAttribute('aria-selected', 'true');
            currentCategory = tab.dataset.category;
            updateSliderContent();
        });
    });
    
    // Slider navigation
    const prevBtn = document.querySelector('.slider-nav--prev');
    const nextBtn = document.querySelector('.slider-nav--next');
    
    prevBtn.addEventListener('click', () => moveSlider(-1));
    nextBtn.addEventListener('click', () => moveSlider(1));
    
    // Keyboard navigation for slider
    const sliderViewport = document.getElementById('categorySlider');
    sliderViewport.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            moveSlider(-1);
        } else if (e.key === 'ArrowRight') {
            moveSlider(1);
        }
    });
    
    // Filter pills
    const filterPills = document.querySelectorAll('.filter-pill');
    filterPills.forEach(pill => {
        pill.addEventListener('click', () => {
            filterPills.forEach(p => p.classList.remove('active'));
            pill.classList.add('active');
            currentFilter = pill.dataset.filter;
            renderProductsGrid();
            // Re-setup scroll reveal for new cards
            setTimeout(setupScrollReveal, 100);
        });
    });
    
    // Sort dropdown
    const sortSelect = document.getElementById('sortSelect');
    sortSelect.addEventListener('change', (e) => {
        currentSort = e.target.value;
        renderProductsGrid();
        // Re-setup scroll reveal for new cards
        setTimeout(setupScrollReveal, 100);
    });
    
    // Newsletter form
    const newsletterForm = document.getElementById('newsletterForm');
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const input = newsletterForm.querySelector('.newsletter-input');
        if (input.value) {
            showToast('Successfully subscribed to newsletter!');
            input.value = '';
        }
    });
}

// === Slider Functions ===
function moveSlider(direction) {
    const track = document.getElementById('sliderTrack');
    const cards = track.querySelectorAll('.slider-card');
    const maxPosition = Math.max(0, cards.length - getVisibleCards());
    
    sliderPosition = Math.max(0, Math.min(maxPosition, sliderPosition + direction));
    updateSliderPosition();
    updatePaginationDots();
}

function getVisibleCards() {
    const viewportWidth = window.innerWidth;
    if (viewportWidth >= 1200) return 4;
    if (viewportWidth >= 900) return 3;
    if (viewportWidth >= 600) return 2;
    return 1;
}

function updateSliderPosition() {
    const track = document.getElementById('sliderTrack');
    const cardWidth = 300;
    const gap = 24;
    const offset = -(sliderPosition * (cardWidth + gap));
    track.style.transform = `translateX(${offset}px)`;
}

function updatePaginationDots() {
    const pagination = document.getElementById('sliderPagination');
    const track = document.getElementById('sliderTrack');
    const cards = track.querySelectorAll('.slider-card');
    const visibleCards = getVisibleCards();
    const totalDots = Math.max(1, Math.ceil(cards.length / visibleCards));
    
    pagination.innerHTML = Array.from({ length: totalDots }, (_, i) => {
        const isActive = Math.floor(sliderPosition / visibleCards) === i;
        return `<button class="pagination-dot ${isActive ? 'active' : ''}" 
                        onclick="jumpToSlide(${i})"
                        aria-label="Go to slide ${i + 1}"></button>`;
    }).join('');
}

function jumpToSlide(index) {
    const visibleCards = getVisibleCards();
    sliderPosition = index * visibleCards;
    updateSliderPosition();
    updatePaginationDots();
}

// === Scroll Reveal Animation ===
function setupScrollReveal() {
    const productCards = document.querySelectorAll('.product-card');
    
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('revealed');
                }, index * 50);
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    productCards.forEach(card => {
        observer.observe(card);
    });
}

// === Parallax Effect ===
function setupParallax() {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;
    
    const isTouchDevice = 'ontouchstart' in window;
    if (isTouchDevice) return;
    
    const parallaxElements = document.querySelectorAll('[data-parallax="true"]');
    
    let ticking = false;
    
    function updateParallax() {
        const scrolled = window.pageYOffset;
        
        parallaxElements.forEach((el, index) => {
            const speed = 0.3 + (index * 0.1);
            const yPos = -(scrolled * speed);
            el.style.transform = `translateY(${yPos}px)`;
        });
        
        ticking = false;
    }
    
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(updateParallax);
            ticking = true;
        }
    });
}

// === Window Resize Handler ===
let resizeTimeout;
window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
        updateSliderPosition();
        updatePaginationDots();
    }, 250);
});
