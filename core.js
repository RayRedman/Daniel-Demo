// ==========================================
// ELITE HOME SERVICES - CORE JS
// Shared functionality across all pages
// ==========================================

// ==========================================
// SVG ICONS LIBRARY
// ==========================================
const ICONS = {
    phone: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
    
    clock: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
    
    mapPin: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
    
    shield: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>`,
    
    star: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
    
    car: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>`,
    
    sparkle: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>`,
    
    starOutline: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>`,
    
    check: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
    
    checkSimple: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>`,
    
    lock: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
    
    wrench: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
    
    arrow: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
    
    arrowRight: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`,
    
    fire: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"/></svg>`,
    
    droplet: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/></svg>`,
    
    tool: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>`,
    
    dollar: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
    
    plus: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>`,
    
    email: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
    
    mail: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
    
    users: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>`,
    
    home: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
    
    award: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>`,
    
    thumbsUp: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/></svg>`,
    
    heart: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>`,
    
    zap: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>`,
    
    settings: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>`,
    
    calendar: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
    
    messageCircle: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>`,
};

// Helper function to get icon by name
function getIcon(name) {
    return ICONS[name] || ICONS.check;
}

// Generate star rating HTML
function getStarRating(rating) {
    let stars = '';
    for (let i = 0; i < 5; i++) {
        stars += i < rating ? ICONS.star : ICONS.starOutline;
    }
    return stars;
}

// ==========================================
// XSS SANITIZATION HELPER
// ==========================================
function escapeHTML(str) {
    if (typeof str !== 'string') return str;
    return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#039;');
}

// ==========================================
// THEME APPLICATION
// ==========================================
function applyTheme() {
    if (typeof CONFIG === 'undefined') return;
    
    const root = document.documentElement;
    const theme = CONFIG.theme;
    
    root.style.setProperty('--primary', theme.primaryColor);
    root.style.setProperty('--primary-dark', theme.primaryDark);
    root.style.setProperty('--primary-light', theme.primaryLight || theme.primaryColor);
    root.style.setProperty('--accent', theme.accentColor);
    root.style.setProperty('--accent-dark', theme.accentDark);
    root.style.setProperty('--accent-light', theme.accentLight || theme.accentColor);
    root.style.setProperty('--gold', theme.gold);
    root.style.setProperty('--green', theme.green);
    
    // Gradients
    root.style.setProperty('--gradient-primary', `linear-gradient(135deg, ${theme.primaryColor} 0%, ${theme.primaryLight || theme.primaryColor} 100%)`);
    root.style.setProperty('--gradient-accent', `linear-gradient(135deg, ${theme.accentColor} 0%, ${theme.accentLight || theme.accentColor} 100%)`);
}

// ==========================================
// SEO APPLICATION
// ==========================================
function getPageContext() {
    return window.__PAGE_CONTEXT__ || null;
}

function normalizePathname(pathname = window.location.pathname) {
    if (!pathname || pathname === '/index.html') return '/';
    return pathname.startsWith('/') ? pathname : `/${pathname}`;
}

function toAbsoluteUrl(pathname = '') {
    if (!pathname) {
        return window.location.origin + normalizePathname(window.location.pathname);
    }
    if (/^https?:\/\//.test(pathname)) return pathname;
    return window.location.origin + normalizePathname(pathname);
}

function resolveInternalHref(href = '') {
    if (!href) return '/';
    if (/^(https?:|mailto:|tel:|sms:|#)/.test(href)) return href;
    return normalizePathname(href);
}

function hasQuoteTarget() {
    return Boolean(document.getElementById('quote') || document.getElementById('quote-section'));
}

function resolvePrimaryCtaHref(href = '') {
    if (href === '#quote') {
        return hasQuoteTarget() ? '#quote' : '/contact.html#quote';
    }
    return resolveInternalHref(href);
}

function hasConfiguredWebhook(url = '') {
    return Boolean(
        url &&
        /^https?:\/\//.test(url) &&
        !url.includes('REPLACE_WITH_YOUR_WEBHOOK')
    );
}

function openLeadEmailFallback(data = {}) {
    const recipient = CONFIG.form?.notificationEmail || CONFIG.brand?.email;
    if (!recipient) return false;

    const subjectParts = ['New Website Lead'];
    if (data.service) subjectParts.push(data.service);
    if (data.name) subjectParts.push(data.name);

    const lines = [
        `Name: ${data.name || ''}`,
        `Phone: ${data.phone || ''}`,
        `Email: ${data.email || ''}`,
        `Service: ${data.service || ''}`,
        `Message: ${data.message || ''}`,
        `Page Type: ${data.pageType || ''}`,
        `Page Slug: ${data.pageSlug || ''}`,
        `Source URL: ${window.location.href}`,
    ];

    const mailtoUrl = `mailto:${encodeURIComponent(recipient)}?subject=${encodeURIComponent(subjectParts.join(' | '))}&body=${encodeURIComponent(lines.join('\n'))}`;
    window.location.href = mailtoUrl;
    return true;
}

function getResolvedSEO(pageKey = 'home') {
    if (typeof CONFIG === 'undefined') return { title: '', description: '' };

    const contextSeo = getPageContext()?.seo;
    const configSeo = CONFIG.seo?.[pageKey] || CONFIG.seo?.home || {};

    return {
        title: contextSeo?.title || configSeo.title || CONFIG.brand?.name || '',
        description: contextSeo?.description || configSeo.description || CONFIG.footer?.description || '',
    };
}

function getResolvedImage() {
    if (typeof CONFIG === 'undefined') return '';
    return getPageContext()?.image || CONFIG.images?.og || CONFIG.images?.hero || '';
}

function applySEO(pageKey) {
    if (typeof CONFIG === 'undefined') return;

    const seo = getResolvedSEO(pageKey);
    
    const titleEl = document.getElementById('page-title');
    const descEl = document.getElementById('meta-description');
    
    if (titleEl) titleEl.textContent = seo.title;
    if (descEl) descEl.setAttribute('content', seo.description);
}

// ==========================================
// IMAGE HELPER - Get image from CONFIG
// ==========================================
function getImage(key, serviceId = null) {
    if (typeof CONFIG === 'undefined') return '';
    
    // If serviceId provided, try to get service-specific image
    if (serviceId && CONFIG.images.services && CONFIG.images.services[serviceId]) {
        return CONFIG.images.services[serviceId];
    }
    
    // Try to get the specific image
    if (CONFIG.images[key]) {
        return CONFIG.images[key];
    }
    
    // Fall back to default
    return CONFIG.images.fallback || '';
}

// ==========================================
// RENDER GALLERY
// ==========================================
function renderGallery() {
    if (typeof CONFIG === 'undefined') return;
    if (!CONFIG.images.gallery || !CONFIG.images.gallery.enabled) return;
    
    const container = document.getElementById('gallery');
    if (!container) return;
    
    const items = CONFIG.images.gallery.items.map((img, index) => `
        <div class="gallery-item" data-index="${index}">
            <img src="${img.src}" alt="${img.alt}" loading="lazy">
            <div class="gallery-item-overlay">
                <span class="gallery-item-zoom">${ICONS.plus}</span>
            </div>
        </div>
    `).join('');
    
    container.innerHTML = `
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">${CONFIG.images.gallery.title}</h2>
                <p class="section-subtitle">${CONFIG.images.gallery.subtitle}</p>
            </div>
            <div class="gallery-grid">${items}</div>
        </div>
        
        <!-- Lightbox -->
        <div class="lightbox" id="lightbox">
            <button class="lightbox-close">${ICONS.plus}</button>
            <button class="lightbox-prev">${ICONS.arrow}</button>
            <button class="lightbox-next">${ICONS.arrow}</button>
            <div class="lightbox-content">
                <img src="" alt="" id="lightbox-img">
            </div>
        </div>
    `;
    
    // Lightbox functionality
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    let currentIndex = 0;
    
    const openLightbox = (index) => {
        currentIndex = index;
        const img = CONFIG.images.gallery.items[index];
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
    };
    
    const closeLightbox = () => {
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
    };
    
    const nextImage = () => {
        currentIndex = (currentIndex + 1) % CONFIG.images.gallery.items.length;
        const img = CONFIG.images.gallery.items[currentIndex];
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
    };
    
    const prevImage = () => {
        currentIndex = (currentIndex - 1 + CONFIG.images.gallery.items.length) % CONFIG.images.gallery.items.length;
        const img = CONFIG.images.gallery.items[currentIndex];
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
    };
    
    // Event listeners
    container.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('click', () => openLightbox(parseInt(item.dataset.index)));
    });
    
    lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
    lightbox.querySelector('.lightbox-next').addEventListener('click', nextImage);
    lightbox.querySelector('.lightbox-prev').addEventListener('click', prevImage);
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
    });
}

// ==========================================
// RENDER TOP BAR - Contractor Style
// ==========================================
function renderTopBar() {
    if (typeof CONFIG === 'undefined') return;
    
    const container = document.getElementById('top-bar');
    if (!container) return;
    
    const logoIcon = getIcon(CONFIG.brand.logoIcon || 'wrench');
    
    container.innerHTML = `
        <div class="container">
            <div class="top-bar-inner">
                <a href="/" class="top-bar-logo">
                    ${CONFIG.brand.logo 
                        ? `<img src="/${CONFIG.brand.logo}" alt="${CONFIG.brand.name}">` 
                        : `<div class="top-bar-logo-icon">${logoIcon}</div><span class="top-bar-logo-text">${CONFIG.brand.name}</span>`}
                </a>
                <div class="top-bar-right">
                    <div class="top-bar-info">
                        <div class="top-bar-info-item">
                            ${ICONS.clock}
                            <span>${CONFIG.brand.hours || 'Mon-Sat: 7AM-7PM'}</span>
                        </div>
                        <div class="top-bar-info-item">
                            ${ICONS.mapPin}
                            <span>${CONFIG.brand.address.split(',').slice(-2).join(',').trim()}</span>
                        </div>
                    </div>
                    <div class="top-bar-phone">
                        <a href="tel:${CONFIG.brand.phoneRaw}" class="top-bar-phone-link">
                            ${ICONS.phone}
                            <span class="top-bar-phone-number">${CONFIG.brand.phone}</span>
                        </a>
                    </div>
                    <a href="${resolvePrimaryCtaHref(CONFIG.hero.ctaPrimary.href)}" class="btn btn-accent top-bar-cta">${CONFIG.hero.ctaPrimary.text}</a>
                </div>
                <button class="mobile-toggle" id="mobile-toggle" aria-label="Menu">
                    <span></span><span></span><span></span>
                </button>
            </div>
        </div>
    `;
}

// ==========================================
// RENDER PROMO BANNER
// ==========================================
function renderPromoBanner() {
    if (typeof CONFIG === 'undefined') return;
    if (!CONFIG.promoBanner || !CONFIG.promoBanner.enabled) return;
    
    const container = document.getElementById('promo-banner');
    if (!container) return;
    
    container.innerHTML = `
        <div class="container">
            <div class="promo-banner-inner">
                <span class="promo-banner-text">${CONFIG.promoBanner.text}</span>
                <a href="${resolvePrimaryCtaHref(CONFIG.promoBanner.linkHref)}" class="promo-banner-link">${CONFIG.promoBanner.linkText}</a>
            </div>
        </div>
    `;
}

// ==========================================
// RENDER TRUST LOGOS BAR
// ==========================================
const TRUST_LOGO_ICONS = {
    Google: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/></svg>`,
    BBB: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18l7.5 3.75v7.14L12 18.82l-7.5-3.75V7.93L12 4.18zM8 9v6h2.5c1.38 0 2.5-1.12 2.5-2.5V11.5c0-.83-.67-1.5-1.5-1.5H10V9H8zm2 2h.5c.28 0 .5.22.5.5v1c0 .28-.22.5-.5.5H10v-2zm4-2v6h2.5c1.38 0 2.5-1.12 2.5-2.5v-1c0-1.38-1.12-2.5-2.5-2.5H14zm2 2h.5c.28 0 .5.22.5.5v1c0 .28-.22.5-.5.5H16v-2z"/></svg>`,
    HomeAdvisor: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3zm0 2.84L18 11v7h-2v-6H8v6H6v-7l6-5.16z"/></svg>`,
    Angi: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>`,
    Yelp: `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.16 12.73l-4.19 1.02a.75.75 0 0 0-.47 1.13l2.76 3.87a.75.75 0 0 0 1.24-.06l1.93-4.01a.75.75 0 0 0-.6-1.08l-.67.13zM16.64 7.73a.75.75 0 0 0-.96-.5l-4.28 1.4a.75.75 0 0 0-.4 1.09l2.4 3.63a.75.75 0 0 0 1.2.08l2.54-4.53a.75.75 0 0 0-.5-1.17zM11.5 3v6.5a.75.75 0 0 1-.75.75H4.5a.75.75 0 0 1-.75-.88l1.5-6a.75.75 0 0 1 .73-.62h4.77a.75.75 0 0 1 .75.75v-.5zm-7.16 9.73l4.19 1.02a.75.75 0 0 1 .47 1.13l-2.76 3.87a.75.75 0 0 1-1.24-.06L3.07 14.7a.75.75 0 0 1 .6-1.08l.67.11zm3.02-5l4.28 1.4a.75.75 0 0 1 .4 1.09l-2.4 3.63a.75.75 0 0 1-1.2.08L5.9 9.4a.75.75 0 0 1 .5-1.17l.96-.5z"/></svg>`,
};

function renderTrustLogosBar() {
    if (typeof CONFIG === 'undefined') return;
    if (!CONFIG.trustLogos || !CONFIG.trustLogos.enabled) return;
    
    const container = document.getElementById('trust-logos-bar');
    if (!container) return;
    
    const logos = CONFIG.trustLogos.logos.map(logo => {
        const icon = TRUST_LOGO_ICONS[logo.name] || ICONS.star;
        const ratingHTML = logo.rating ? `<span class="trust-logo-rating">${logo.rating}</span>` : '';
        
        return `
            <div class="trust-logo-item">
                <div class="trust-logo-icon ${logo.name.toLowerCase()}">${icon}</div>
                <span class="trust-logo-name">${logo.name}</span>
                ${ratingHTML}
            </div>
        `;
    }).join('');
    
    container.innerHTML = `
        <div class="container">
            <div class="trust-logos-inner">
                <span class="trust-logos-title">${CONFIG.trustLogos.title}</span>
                ${logos}
            </div>
        </div>
    `;
}

// ==========================================
// RENDER GOOGLE RATING BADGE
// ==========================================
function renderGoogleRatingBadge() {
    if (typeof CONFIG === 'undefined') return;
    if (!CONFIG.reviews.google || !CONFIG.reviews.google.enabled) return '';
    
    const { rating, reviewCount } = CONFIG.reviews.google;
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    let starsHTML = '';
    for (let i = 0; i < 5; i++) {
        if (i < fullStars) {
            starsHTML += ICONS.star;
        } else {
            starsHTML += ICONS.starOutline;
        }
    }
    
    return `
        <div class="google-rating-badge">
            <div class="google-rating-logo">
                ${TRUST_LOGO_ICONS.Google}
                <span>Google</span>
            </div>
            <div class="google-rating-score">
                <span class="google-rating-number">${rating}</span>
                <div>
                    <div class="google-rating-stars">${starsHTML}</div>
                    <span class="google-rating-count">${reviewCount} reviews</span>
                </div>
            </div>
        </div>
    `;
}

function getGoogleProfileUrl() {
    if (typeof CONFIG === 'undefined') return '';
    return CONFIG.brand?.googleBusinessUrl || CONFIG.reviews?.google?.url || '';
}

// ==========================================
// RENDER HEADER - Contractor Style Nav
// ==========================================
function renderHeader() {
    if (typeof CONFIG === 'undefined') return;
    
    const container = document.getElementById('header');
    if (!container) return;
    
    const navLinks = CONFIG.nav.map(item => {
        // Special handling for services dropdown - derived from CONFIG.services.items[]
        if (item.type === 'servicesDropdown') {
            const serviceLinks = CONFIG.services.items.map(s => {
                const slug = s.slug || s.id;
                return `<a href="/services/${slug}.html" class="nav-dropdown-link">${s.title}</a>`;
            }).join('');
            return `<div class="nav-dropdown">
                <span class="nav-link nav-dropdown-toggle">${item.label}</span>
                <div class="nav-dropdown-menu">
                    ${serviceLinks}
                </div>
            </div>`;
        }
        // Special handling for service areas dropdown - derived from CONFIG.serviceAreas[]
        if (item.type === 'serviceAreasDropdown') {
            const areaLinks = (CONFIG.serviceAreas || []).map(a => {
                const slug = a.slug || a.id;
                return `<a href="/service-areas/${slug}.html" class="nav-dropdown-link">${a.name}</a>`;
            }).join('');
            return `<div class="nav-dropdown">
                <span class="nav-link nav-dropdown-toggle">${item.label}</span>
                <div class="nav-dropdown-menu">
                    ${areaLinks}
                </div>
            </div>`;
        }
        // Standard dropdown with explicit children
        if (item.children) {
            return `<div class="nav-dropdown">
                <span class="nav-link nav-dropdown-toggle">${item.label}</span>
                <div class="nav-dropdown-menu">
                    ${item.children.map(c => `<a href="${resolveInternalHref(c.href)}" class="nav-dropdown-link">${c.label}</a>`).join('')}
                </div>
            </div>`;
        }
        // Regular nav link
        const href = resolveInternalHref(item.href);
        return `<a href="${href}" class="nav-link">${item.label}</a>`;
    }).join('');
    
    container.innerHTML = `
        <div class="container">
            <div class="header-inner">
                <nav class="nav-desktop">${navLinks}</nav>
            </div>
        </div>
    `;
    
    // Render mobile menu
    renderMobileMenu();
    
    // Setup mobile toggle (now in top-bar)
    const toggle = document.getElementById('mobile-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (toggle && mobileMenu) {
        toggle.addEventListener('click', function() {
            this.classList.toggle('active');
            mobileMenu.classList.toggle('active');
            document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
        });
        
        // Close on link click
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                toggle.classList.remove('active');
                mobileMenu.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
    }
    
    // Sticky header scroll effect
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll > 50) {
            container.classList.add('scrolled');
        } else {
            container.classList.remove('scrolled');
        }
        lastScroll = currentScroll;
    });
}

// ==========================================
// RENDER MOBILE MENU
// ==========================================
function renderMobileMenu() {
    if (typeof CONFIG === 'undefined') return;
    
    const container = document.getElementById('mobile-menu');
    if (!container) return;
    
    const chevronDown = `<svg class="mobile-nav-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>`;
    
    const mobileNavLinks = CONFIG.nav.map(item => {
        // Special handling for services dropdown - derived from CONFIG.services.items[]
        if (item.type === 'servicesDropdown') {
            const serviceLinks = CONFIG.services.items.map(s => {
                const slug = s.slug || s.id;
                return `<a href="/services/${slug}.html" class="mobile-nav-child">${s.title}</a>`;
            }).join('');
            return `<div class="mobile-nav-dropdown">
                <button class="mobile-nav-link mobile-nav-toggle" type="button">
                    ${item.label}
                    ${chevronDown}
                </button>
                <div class="mobile-nav-children">
                    ${serviceLinks}
                </div>
            </div>`;
        }
        // Special handling for service areas dropdown - derived from CONFIG.serviceAreas[]
        if (item.type === 'serviceAreasDropdown') {
            const areaLinks = (CONFIG.serviceAreas || []).map(a => {
                const slug = a.slug || a.id;
                return `<a href="/service-areas/${slug}.html" class="mobile-nav-child">${a.name}</a>`;
            }).join('');
            return `<div class="mobile-nav-dropdown">
                <button class="mobile-nav-link mobile-nav-toggle" type="button">
                    ${item.label}
                    ${chevronDown}
                </button>
                <div class="mobile-nav-children">
                    ${areaLinks}
                </div>
            </div>`;
        }
        // Standard dropdown with explicit children
        if (item.children) {
            return `<div class="mobile-nav-dropdown">
                <button class="mobile-nav-link mobile-nav-toggle" type="button">
                    ${item.label}
                    ${chevronDown}
                </button>
                <div class="mobile-nav-children">
                    ${item.children.map(c => `<a href="${resolveInternalHref(c.href)}" class="mobile-nav-child">${c.label}</a>`).join('')}
                </div>
            </div>`;
        }
        // Regular nav link
        const href = resolveInternalHref(item.href);
        return `<a href="${href}" class="mobile-nav-link">${item.label}</a>`;
    }).join('');
    
    container.innerHTML = `
        <nav>${mobileNavLinks}</nav>
        <div class="mobile-menu-cta">
            <a href="tel:${CONFIG.brand.phoneRaw}" class="btn btn-primary">${ICONS.phone} ${CONFIG.ui.callNow} ${CONFIG.brand.phone}</a>
            <a href="${resolvePrimaryCtaHref(CONFIG.hero.ctaPrimary.href)}" class="btn btn-accent">${CONFIG.hero.ctaPrimary.text}</a>
        </div>
    `;
    
    // Setup dropdown toggles
    container.querySelectorAll('.mobile-nav-toggle').forEach(toggle => {
        toggle.addEventListener('click', function() {
            const dropdown = this.closest('.mobile-nav-dropdown');
            dropdown.classList.toggle('open');
        });
    });
}

// ==========================================
// RENDER TRUST BADGES
// ==========================================
function renderTrustBadges() {
    if (typeof CONFIG === 'undefined') return;
    
    const container = document.getElementById('trust-badges');
    if (!container) return;
    
    const badges = CONFIG.trustBadges.map(b => `
        <div class="trust-badge">
            <div class="trust-badge-icon">${getIcon(b.icon)}</div>
            <span class="trust-badge-text">${b.text}</span>
        </div>
    `).join('');
    
    container.innerHTML = `
        <div class="container">
            <div class="trust-badges-inner">${badges}</div>
        </div>
    `;
}

// ==========================================
// RENDER STATS
// ==========================================
function renderStats() {
    if (typeof CONFIG === 'undefined') return;
    
    const container = document.getElementById('stats');
    if (!container) return;
    
    const items = CONFIG.stats.map(s => `
        <div class="stat-item">
            <div class="stat-value">${s.value}</div>
            <div class="stat-label">${s.label}</div>
        </div>
    `).join('');
    
    container.innerHTML = `
        <div class="container">
            <div class="stats-grid">${items}</div>
        </div>
    `;
}

// ==========================================
// RENDER CTA SECTION
// ==========================================
function renderCTA() {
    if (typeof CONFIG === 'undefined') return;
    
    const container = document.getElementById('cta');
    if (!container) return;
    
    const phoneHTML = CONFIG.cta.showPhone ? `
        <span class="cta-divider">or</span>
        <a href="tel:${CONFIG.brand.phoneRaw}" class="cta-phone">${ICONS.phone} ${CONFIG.brand.phone}</a>
    ` : '';
    
    container.innerHTML = `
        <div class="container">
            <h2 class="cta-title">${CONFIG.cta.title}</h2>
            <p class="cta-subtitle">${CONFIG.cta.subtitle}</p>
            <div class="cta-buttons">
                <a href="${resolveInternalHref(CONFIG.cta.buttonLink)}" class="btn btn-primary">${CONFIG.cta.buttonText}</a>
                ${phoneHTML}
            </div>
        </div>
    `;
}

// ==========================================
// RENDER FAQ
// ==========================================
function renderFAQ() {
    if (typeof CONFIG === 'undefined') return;
    
    const container = document.getElementById('faq');
    if (!container) return;
    
    const items = CONFIG.faq.items.map((f, i) => `
        <div class="faq-item" data-faq="${i}">
            <button class="faq-question">
                <span>${f.question}</span>
                <span class="faq-icon">${ICONS.plus}</span>
            </button>
            <div class="faq-answer">
                <div class="faq-answer-inner">${f.answer}</div>
            </div>
        </div>
    `).join('');
    
    container.innerHTML = `
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">${CONFIG.faq.title}</h2>
                <p class="section-subtitle">${CONFIG.faq.subtitle}</p>
            </div>
            <div class="faq-list">${items}</div>
        </div>
    `;
    
    // FAQ accordion functionality
    container.querySelectorAll('.faq-question').forEach(btn => {
        btn.addEventListener('click', () => {
            const item = btn.closest('.faq-item');
            const answer = item.querySelector('.faq-answer');
            const isActive = item.classList.contains('active');
            
            // Close all
            container.querySelectorAll('.faq-item').forEach(i => {
                i.classList.remove('active');
                i.querySelector('.faq-answer').style.maxHeight = null;
            });
            
            // Open clicked if wasn't active
            if (!isActive) {
                item.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
    });
}

// ==========================================
// RENDER FOOTER
// ==========================================
function renderFooter() {
    if (typeof CONFIG === 'undefined') return;
    
    const container = document.getElementById('footer');
    if (!container) return;
    
    const quickLinks = CONFIG.footer.quickLinks.map(l => `
        <li><a href="${resolveInternalHref(l.href)}">${l.label}</a></li>
    `).join('');
    
    container.innerHTML = `
        <div class="container">
            <div class="footer-grid">
                <div class="footer-brand">
                    <div class="footer-brand-name">${CONFIG.brand.name}</div>
                    <p class="footer-brand-desc">${CONFIG.footer.description}</p>
                    <p class="footer-license">${CONFIG.brand.license}</p>
                </div>
                <div class="footer-nav">
                    <h4 class="footer-title">${CONFIG.footer.quickLinksTitle || CONFIG.ui.quickLinks}</h4>
                    <ul class="footer-links">${quickLinks}</ul>
                </div>
                <div class="footer-contact">
                    <h4 class="footer-title">${CONFIG.footer.contactTitle || CONFIG.ui.contactUs}</h4>
                    <div class="footer-contact-item">${ICONS.phone}<span>${CONFIG.brand.phone}</span></div>
                    <div class="footer-contact-item">${ICONS.email}<span>${CONFIG.brand.email}</span></div>
                    <div class="footer-contact-item">${ICONS.mapPin}<span>${CONFIG.brand.address}</span></div>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <div class="container">
                <div class="footer-bottom-content">
                    <span>&copy; ${CONFIG.footer.copyrightYear} ${CONFIG.brand.name}. ${CONFIG.ui.allRightsReserved}</span>
                    <span class="footer-legal-links">
                        <a href="/privacy-policy.html">Privacy Policy</a>
                        <span class="footer-legal-divider">|</span>
                        <a href="/terms.html">Terms of Service</a>
                    </span>
                </div>
            </div>
        </div>
    `;
}

// ==========================================
// FORM SUBMISSION HANDLER
// ==========================================
function setupFormHandler(formId, webhookUrl, successMessage) {
    const form = document.getElementById(formId);
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        submitBtn.innerHTML = CONFIG.ui.loading || 'Sending...';
        submitBtn.disabled = true;

        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        if (!hasConfiguredWebhook(webhookUrl)) {
            const openedMailClient = openLeadEmailFallback(data);
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;

            if (!openedMailClient) {
                alert(`Form delivery is not configured yet. Please call us directly at ${CONFIG.brand.phone}.`);
            }
            return;
        }

        // Create an AbortController for timeout
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000);

        try {
            // Use sendBeacon as backup before attempting fetch
            const beaconData = new URLSearchParams(data).toString();

            await fetch(webhookUrl, {
                method: 'POST',
                mode: 'no-cors',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: beaconData,
                signal: controller.signal
            });

            clearTimeout(timeoutId);

            // Replace form with success message
            const formWrapper = form.closest('.quote-form-wrapper') || form.parentElement;
            const msg = successMessage || CONFIG.form.successMessage || "Thanks! We'll be in touch shortly.";
            formWrapper.innerHTML = `
                <div class="form-success">
                    <div class="form-success-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                    </div>
                    <h3 class="form-success-title">${msg}</h3>
                    <p class="form-success-subtitle">${CONFIG.form.successSubtext || "We typically respond within 30 minutes during business hours."}</p>
                    <a href="tel:${CONFIG.brand.phoneRaw}" class="btn btn-accent">${ICONS.phone} Call Now: ${CONFIG.brand.phone}</a>
                </div>
            `;
        } catch (err) {
            clearTimeout(timeoutId);

            if (err.name === 'AbortError') {
                // Timeout - but data might have been sent. Use sendBeacon as backup.
                try { navigator.sendBeacon(webhookUrl, new URLSearchParams(data)); } catch(e) {}
                // Show success since beacon likely delivered
                const formWrapper = form.closest('.quote-form-wrapper') || form.parentElement;
                const msg = successMessage || CONFIG.form.successMessage || "Thanks! We'll be in touch shortly.";
                formWrapper.innerHTML = `
                    <div class="form-success">
                        <div class="form-success-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                        </div>
                        <h3 class="form-success-title">${msg}</h3>
                        <p class="form-success-subtitle">${CONFIG.form.successSubtext || "We typically respond within 30 minutes during business hours."}</p>
                        <a href="tel:${CONFIG.brand.phoneRaw}" class="btn btn-accent">${ICONS.phone} Call Now: ${CONFIG.brand.phone}</a>
                    </div>
                `;
            } else {
                // Actual network error - try sendBeacon as last resort
                try { navigator.sendBeacon(webhookUrl, new URLSearchParams(data)); } catch(e) {}
                console.error('Form submission error:', err);
                alert(CONFIG.ui.error || 'Something went wrong. Please call us directly at ' + CONFIG.brand.phone);
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }
        }
    });
}

// ==========================================
// SCROLL ANIMATIONS (Fade-in on scroll)
// ==========================================
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.services, .why-us, .stats, .reviews, .gallery, .cta, .faq, .about-story, .about-values, .about-team');
    
    if (!animatedElements.length) return;
    
    // Add initial hidden state
    animatedElements.forEach(el => {
        el.classList.add('scroll-animate');
    });
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('scroll-animate-visible');
                observer.unobserve(entry.target); // Only animate once
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    animatedElements.forEach(el => observer.observe(el));
}

// ==========================================
// SHARED RENDER: REVIEWS
// ==========================================
function renderReviews() {
    if (typeof CONFIG === 'undefined') return;

    const container = document.getElementById('reviews');
    if (!container) return;

    const googleBadge = renderGoogleRatingBadge();
    const googleProfileUrl = getGoogleProfileUrl();
    const googleReviewCta = googleProfileUrl ? `
            <div class="reviews-cta">
                <a href="${googleProfileUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-outline">
                    Read Google Reviews
                </a>
            </div>
        ` : '';

    const cards = CONFIG.reviews.items.map(r => {
        const initials = r.author.split(' ').map(n => n[0]).join('');
        const stars = getStarRating(r.rating);

        return `
            <div class="review-card">
                <div class="review-stars">${stars}</div>
                <p class="review-text">"${r.text}"</p>
                <div class="review-author">
                    ${r.avatar
                        ? `<img src="${r.avatar}" alt="${r.author}" class="review-avatar">`
                        : `<div class="review-avatar-fallback">${initials}</div>`}
                    <div>
                        <div class="review-name">${r.author}</div>
                        <div class="review-location">${r.location}</div>
                    </div>
                </div>
            </div>
        `;
    }).join('');

    container.innerHTML = `
        <div class="container">
            <div class="section-header">
                <h2 class="section-title">${CONFIG.reviews.title}</h2>
                <p class="section-subtitle">${CONFIG.reviews.subtitle}</p>
            </div>
            ${googleBadge}
            ${googleReviewCta}
            <div class="reviews-grid">${cards}</div>
        </div>
    `;
}

// ==========================================
// SHARED RENDER: WHY US
// ==========================================
function renderWhyUs() {
    if (typeof CONFIG === 'undefined') return;

    const container = document.getElementById('why-us');
    if (!container) return;

    const image = CONFIG.whyUs.image || getImage('whyUs');

    const items = CONFIG.whyUs.items.map(item => `
        <div class="why-us-item">
            <div class="why-us-icon">${getIcon(item.icon)}</div>
            <div class="why-us-content-inner">
                <h4 class="why-us-title">${item.title}</h4>
                <p class="why-us-desc">${item.description}</p>
            </div>
        </div>
    `).join('');

    container.innerHTML = `
        <div class="container">
            <div class="why-us-wrapper">
                <div class="why-us-image">
                    <img src="${image}" alt="${CONFIG.whyUs.title}">
                </div>
                <div class="why-us-content">
                    <h2>${CONFIG.whyUs.title}</h2>
                    <p>${CONFIG.whyUs.subtitle}</p>
                    <div class="why-us-grid">${items}</div>
                </div>
            </div>
        </div>
    `;
}

// ==========================================
// SHARED RENDER: PROCESS / HOW IT WORKS
// ==========================================
function renderProcess() {
    if (typeof CONFIG === 'undefined') return;

    const container = document.getElementById('process');
    if (!container) return;

    if (!CONFIG.process?.steps) return;
    const steps = CONFIG.process.steps;

    const stepsHTML = steps.map((step, i) => `
        <div class="process-step">
            <div class="process-number">${step.number}</div>
            <h3 class="process-step-title">${step.title}</h3>
            <p class="process-step-desc">${step.desc}</p>
        </div>
    `).join('');

    container.innerHTML = `
        <div class="container">
            <div class="process-header">
                <div class="process-label">${CONFIG.process?.label || 'How It Works'}</div>
                <h2 class="process-title">${CONFIG.process?.title || 'Simple & Easy Process'}</h2>
            </div>
            <div class="process-steps">${stepsHTML}</div>
        </div>
    `;
}

// ==========================================
// SHARED RENDER: QUOTE FORM (Multi-Step)
// Parameterized for use across all pages
// ==========================================
function renderQuoteForm(options = {}) {
    if (typeof CONFIG === 'undefined') return;

    const {
        pageType = 'home',
        pageSlug = 'home',
        preselectedService = null,
    } = options;

    const container = document.getElementById('quote-section');
    if (!container) return;

    const serviceButtons = CONFIG.form.serviceOptions
        .filter(o => o.value)
        .map(o => {
            const isSelected = preselectedService && o.value === preselectedService;
            return `<button type="button" class="msf-service-btn${isSelected ? ' selected' : ''}" data-value="${o.value}">${o.label}</button>`;
        }).join('');

    const formFeatures = (CONFIG.form.features || [
        "Free Estimates",
        "Same-Day Service Available",
        "No Obligation",
        "Licensed & Insured"
    ]).map(f => `
        <div class="quote-feature"><span class="quote-feature-icon">${getIcon('check')}</span> ${f}</div>
    `).join('');

    const utmParams = new URLSearchParams(window.location.search);

    const googleBadgeHTML = CONFIG.reviews?.google?.enabled ? `
        <div class="msf-google-badge">
            <div class="msf-google-stars">${getStarRating(CONFIG.reviews.google.rating)}</div>
            <span>${CONFIG.reviews.google.rating} from ${CONFIG.reviews.google.reviewCount} reviews on Google</span>
        </div>
    ` : '';

    container.innerHTML = `
        <div class="container">
            <div class="quote-section-inner">
                <div class="quote-section-content">
                    <div class="quote-section-badge">
                        ${getIcon('clock')}
                        <span>${CONFIG.form.responseBadge || 'We Respond Within 30 Minutes'}</span>
                    </div>
                    <h2 class="quote-section-title">${CONFIG.form.title}</h2>
                    <p class="quote-section-subtitle">${CONFIG.form.subtitle || 'Tell us about your project and we\'ll provide a free, no-obligation estimate.'}</p>

                    <div class="quote-section-features">
                        ${formFeatures}
                    </div>

                    <div class="quote-phone-cta">
                        <div class="quote-phone-label">${CONFIG.form.phoneCtaLabel || 'Prefer to talk? Call or text us:'}</div>
                        <a href="tel:${CONFIG.brand.phoneRaw}" class="quote-phone-number">
                            ${getIcon('phone')}
                            <span>${CONFIG.brand.phone}</span>
                        </a>
                        <a href="sms:${CONFIG.brand.phoneRaw}" class="quote-sms-link">
                            ${getIcon('messageCircle')}
                            <span>Text Us</span>
                        </a>
                        <div class="quote-phone-hours">${CONFIG.brand.hours || 'Mon-Sat: 7AM - 7PM'}</div>
                    </div>
                </div>
                <div class="quote-form-wrapper" id="quote">
                    <div class="quote-form-header">
                        <div class="quote-form-title">${CONFIG.form.formTitle || 'Get Your Free Quote'}</div>
                        <div class="quote-form-subtitle">${CONFIG.form.formSubtitle || 'No spam, no hassle — just honest pricing'}</div>
                    </div>
                    <!-- Progress bar -->
                    <div class="msf-progress">
                        <div class="msf-progress-bar" id="msf-progress-bar" style="width: 33%"></div>
                    </div>
                    <div class="msf-step-indicator">Step <span id="msf-step-num">1</span> of 3</div>
                    <form class="quote-form" id="hero-form">
                        <!-- Hidden fields -->
                        <input type="hidden" name="pageType" value="${pageType}">
                        <input type="hidden" name="pageSlug" value="${pageSlug}">
                        <input type="hidden" name="companySlug" value="${CONFIG.brand.companySlug}">
                        <input type="hidden" name="utm_source" value="${utmParams.get('utm_source') || ''}">
                        <input type="hidden" name="utm_medium" value="${utmParams.get('utm_medium') || ''}">
                        <input type="hidden" name="utm_campaign" value="${utmParams.get('utm_campaign') || ''}">
                        <input type="hidden" name="utm_content" value="${utmParams.get('utm_content') || ''}">
                        <input type="hidden" name="utm_term" value="${utmParams.get('utm_term') || ''}">
                        <input type="hidden" name="service" id="msf-service-value" value="${preselectedService || ''}">

                        <!-- STEP 1: Service Selection -->
                        <div class="msf-step active" data-step="1">
                            <div class="msf-step-title">What do you need help with?</div>
                            <div class="msf-service-grid">
                                ${serviceButtons}
                            </div>
                        </div>

                        <!-- STEP 2: Contact Info -->
                        <div class="msf-step" data-step="2">
                            <div class="msf-step-title">How can we reach you?</div>
                            <div class="form-group">
                                <input type="text" name="name" class="form-input" placeholder="Full Name *" required>
                            </div>
                            <div class="form-group">
                                <input type="tel" name="phone" class="form-input" placeholder="Phone Number *" required id="msf-phone-input">
                            </div>
                            <div class="form-group">
                                <input type="email" name="email" class="form-input" placeholder="Email (optional)">
                            </div>
                            <button type="button" class="btn btn-accent btn-block btn-lg msf-next-btn" data-next="3">Almost Done ${getIcon('arrowRight')}</button>
                            <button type="button" class="msf-back-link" data-back="1">${getIcon('arrowRight')} Back</button>
                        </div>

                        <!-- STEP 3: Details -->
                        <div class="msf-step" data-step="3">
                            <div class="msf-step-title">Any details to share?</div>
                            <div class="form-group">
                                <textarea name="message" class="form-textarea" rows="3" placeholder="${CONFIG.form.messagePlaceholder || 'Describe the work you need done (optional)...'}"></textarea>
                            </div>
                            ${googleBadgeHTML}
                            <button type="submit" class="btn btn-accent btn-block btn-lg">${CONFIG.form.submitText || 'Get My Free Quote'}</button>
                            <div class="form-consent-text">By submitting, you agree to receive texts and calls about your inquiry. Msg & data rates may apply.</div>
                            <div class="form-trust-badge">
                                ${getIcon('shield')}
                                <span>${CONFIG.form.privacyText || 'Your information is secure and never shared'}</span>
                            </div>
                            <button type="button" class="msf-back-link" data-back="2">${getIcon('arrowRight')} Back</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    `;

    // Multi-step form logic
    initMultiStepForm(container, preselectedService);

    // Setup form handler
    setupFormHandler('hero-form', CONFIG.form.ghlWebhook, CONFIG.form.successMessage);
}

// ==========================================
// MULTI-STEP FORM CONTROLLER
// ==========================================
function initMultiStepForm(container, preselectedService) {
    let currentStep = preselectedService ? 2 : 1;
    const steps = container.querySelectorAll('.msf-step');
    const progressBar = container.querySelector('#msf-progress-bar');
    const stepNum = container.querySelector('#msf-step-num');
    const serviceInput = container.querySelector('#msf-service-value');

    function goToStep(step) {
        currentStep = step;
        steps.forEach(s => {
            s.classList.remove('active');
            if (parseInt(s.dataset.step) === step) s.classList.add('active');
        });
        if (progressBar) progressBar.style.width = (step / 3 * 100) + '%';
        if (stepNum) stepNum.textContent = step;
    }

    // If preselected, jump to step 2
    if (preselectedService) goToStep(2);

    // Step 1: Service button clicks
    container.querySelectorAll('.msf-service-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            container.querySelectorAll('.msf-service-btn').forEach(b => b.classList.remove('selected'));
            btn.classList.add('selected');
            serviceInput.value = btn.dataset.value;
            setTimeout(() => goToStep(2), 150);
        });
    });

    // Next buttons
    container.querySelectorAll('.msf-next-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const nextStep = parseInt(btn.dataset.next);
            // Validate current step fields
            const currentStepEl = container.querySelector(`.msf-step[data-step="${currentStep}"]`);
            const requiredFields = currentStepEl.querySelectorAll('[required]');
            let valid = true;
            requiredFields.forEach(f => {
                if (!f.value.trim()) {
                    f.classList.add('msf-error');
                    valid = false;
                } else {
                    f.classList.remove('msf-error');
                }
            });
            if (valid) goToStep(nextStep);
        });
    });

    // Back buttons
    container.querySelectorAll('.msf-back-link').forEach(btn => {
        btn.addEventListener('click', () => {
            goToStep(parseInt(btn.dataset.back));
        });
    });

    // Phone number formatting
    const phoneInput = container.querySelector('#msf-phone-input');
    if (phoneInput) {
        phoneInput.addEventListener('input', (e) => {
            let val = e.target.value.replace(/\D/g, '');
            if (val.length > 10) val = val.slice(0, 10);
            if (val.length >= 6) {
                val = '(' + val.slice(0, 3) + ') ' + val.slice(3, 6) + '-' + val.slice(6);
            } else if (val.length >= 3) {
                val = '(' + val.slice(0, 3) + ') ' + val.slice(3);
            }
            e.target.value = val;
        });
    }
}

// ==========================================
// JSON-LD STRUCTURED DATA
// Auto-generates LocalBusiness + FAQ schema from CONFIG
// ==========================================
function compactJsonLd(value) {
    if (Array.isArray(value)) {
        return value
            .map(item => compactJsonLd(item))
            .filter(item => item != null && item !== '' && (!Array.isArray(item) || item.length > 0));
    }

    if (value && typeof value === 'object') {
        return Object.entries(value).reduce((acc, [key, item]) => {
            const compacted = compactJsonLd(item);
            if (
                compacted == null ||
                compacted === '' ||
                (Array.isArray(compacted) && compacted.length === 0)
            ) {
                return acc;
            }

            acc[key] = compacted;
            return acc;
        }, {});
    }

    return value;
}

function appendJsonLd(schema) {
    const ldScript = document.createElement('script');
    ldScript.type = 'application/ld+json';
    ldScript.textContent = JSON.stringify(compactJsonLd(schema));
    document.head.appendChild(ldScript);
}

function getPostalAddress() {
    const raw = CONFIG.brand?.fullAddress || CONFIG.brand?.address || '';
    const parts = raw.split(',').map(part => part.trim()).filter(Boolean);
    const [streetAddress = '', addressLocality = CONFIG.brand?.city || '', regionPostal = ''] = parts;
    const regionMatch = regionPostal.match(/^([A-Z]{2})\s+(.+)$/);

    return compactJsonLd({
        "@type": "PostalAddress",
        "streetAddress": streetAddress,
        "addressLocality": addressLocality,
        "addressRegion": regionMatch ? regionMatch[1] : CONFIG.brand?.state || '',
        "postalCode": regionMatch ? regionMatch[2] : '',
        "addressCountry": "US",
    });
}

function expandDays(daysLabel = '') {
    const label = daysLabel.toLowerCase().trim();
    const days = {
        monday: 'Monday',
        tuesday: 'Tuesday',
        wednesday: 'Wednesday',
        thursday: 'Thursday',
        friday: 'Friday',
        saturday: 'Saturday',
        sunday: 'Sunday',
    };

    if (label.includes('-')) {
        const [startRaw, endRaw] = label.split('-').map(part => part.trim());
        const keys = Object.keys(days);
        const startIndex = keys.findIndex(key => startRaw.includes(key));
        const endIndex = keys.findIndex(key => endRaw.includes(key));
        if (startIndex >= 0 && endIndex >= startIndex) {
            return keys.slice(startIndex, endIndex + 1).map(key => days[key]);
        }
    }

    return Object.entries(days)
        .filter(([key]) => label.includes(key))
        .map(([, day]) => day);
}

function to24Hour(timeText = '') {
    const match = timeText.trim().match(/^(\d{1,2})(?::(\d{2}))?\s*(AM|PM)$/i);
    if (!match) return '';

    let hours = parseInt(match[1], 10);
    const minutes = match[2] || '00';
    const meridiem = match[3].toUpperCase();

    if (meridiem === 'PM' && hours !== 12) hours += 12;
    if (meridiem === 'AM' && hours === 12) hours = 0;

    return `${String(hours).padStart(2, '0')}:${minutes}`;
}

function getOpeningHoursSpecification() {
    const hoursEntries = CONFIG.contact?.hours;
    if (!Array.isArray(hoursEntries)) return null;

    const specs = hoursEntries.flatMap(entry => {
        if (!entry?.days || !entry?.time || /closed/i.test(entry.time)) return [];

        const [opensRaw, closesRaw] = entry.time.split('-').map(part => part.trim());
        const opens = to24Hour(opensRaw);
        const closes = to24Hour(closesRaw);
        const dayOfWeek = expandDays(entry.days);

        if (!opens || !closes || dayOfWeek.length === 0) return [];

        return [{
            "@type": "OpeningHoursSpecification",
            dayOfWeek,
            opens,
            closes,
        }];
    });

    return specs.length > 0 ? specs : null;
}

function getSameAsLinks() {
    return [
        CONFIG.brand?.googleBusinessUrl,
        CONFIG.reviews?.google?.url,
        ...(CONFIG.footer?.socialLinks || []).map(link => link.url),
    ].filter(Boolean);
}

function buildBreadcrumbList(items) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: toAbsoluteUrl(item.path),
        })),
    };
}

function renderJsonLD(pageKey = 'home') {
    if (typeof CONFIG === 'undefined') return;

    // Remove any existing JSON-LD
    document.querySelectorAll('script[type="application/ld+json"]').forEach(el => el.remove());
    const pageContext = getPageContext();
    const currentUrl = toAbsoluteUrl(pageContext?.canonicalPath || window.location.pathname);
    const homeUrl = toAbsoluteUrl('/');
    const sameAs = getSameAsLinks();

    appendJsonLd({
        "@context": "https://schema.org",
        "@type": "Electrician",
        "@id": `${homeUrl}#local-business`,
        "name": CONFIG.brand.name,
        "description": CONFIG.footer?.description || CONFIG.seo?.home?.description || '',
        "url": homeUrl,
        "telephone": CONFIG.brand.phone,
        "email": CONFIG.brand.email,
        "address": getPostalAddress(),
        "openingHoursSpecification": getOpeningHoursSpecification(),
        "image": getResolvedImage() ? toAbsoluteUrl(getResolvedImage()) : '',
        "logo": CONFIG.brand?.logo ? toAbsoluteUrl(CONFIG.brand.logo) : '',
        "slogan": CONFIG.brand?.tagline || '',
        "foundingDate": CONFIG.brand?.yearEstablished || '',
        "sameAs": sameAs,
        "areaServed": (CONFIG.serviceAreas || []).map(area => ({
            "@type": "City",
            "name": area.name,
        })),
        "hasOfferCatalog": CONFIG.services?.items ? {
            "@type": "OfferCatalog",
            "name": CONFIG.services.title || "Services",
            "itemListElement": CONFIG.services.items.map(service => ({
                "@type": "Offer",
                "url": toAbsoluteUrl(`/services/${service.slug || service.id}.html`),
                "itemOffered": {
                    "@type": "Service",
                    "name": service.title,
                    "description": service.fullDesc || service.shortDesc,
                },
            })),
        } : null,
    });

    if (pageContext?.pageType === 'service' && pageContext.service) {
        appendJsonLd({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": `${currentUrl}#service`,
            "name": pageContext.service.title,
            "description": pageContext.service.description,
            "serviceType": pageContext.service.title,
            "url": currentUrl,
            "image": pageContext.service.image ? toAbsoluteUrl(pageContext.service.image) : '',
            "provider": {
                "@type": "Electrician",
                "@id": `${homeUrl}#local-business`,
                "name": CONFIG.brand.name,
                "url": homeUrl,
            },
            "areaServed": (CONFIG.serviceAreas || []).map(area => ({
                "@type": "City",
                "name": area.name,
            })),
        });

        appendJsonLd(buildBreadcrumbList([
            { name: 'Home', path: '/' },
            { name: pageContext.service.title, path: pageContext.canonicalPath || window.location.pathname },
        ]));
    }

    if (pageContext?.pageType === 'serviceArea' && pageContext.area) {
        appendJsonLd({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": `${currentUrl}#webpage`,
            "name": pageContext.area.headline || pageContext.area.name,
            "description": pageContext.area.description,
            "url": currentUrl,
            "about": {
                "@type": "Electrician",
                "@id": `${homeUrl}#local-business`,
            },
            "contentLocation": {
                "@type": "City",
                "name": pageContext.area.name,
            },
        });

        appendJsonLd(buildBreadcrumbList([
            { name: 'Home', path: '/' },
            { name: pageContext.area.name, path: pageContext.canonicalPath || window.location.pathname },
        ]));
    }

    if (pageKey === 'home' && CONFIG.faq?.items && CONFIG.faq.items.length > 0) {
        appendJsonLd({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": CONFIG.faq.items.map(f => ({
                "@type": "Question",
                "name": f.question,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": f.answer,
                },
            })),
        });
    }
}

// ==========================================
// OG META TAGS FOR SOCIAL SHARING
// ==========================================
function renderOGMeta(pageKey = 'home') {
    if (typeof CONFIG === 'undefined') return;

    const seo = getResolvedSEO(pageKey);
    const ogImage = getResolvedImage();
    const canonicalUrl = toAbsoluteUrl(getPageContext()?.canonicalPath || window.location.pathname);

    const ogTags = {
        'og:title': seo.title || CONFIG.brand.name,
        'og:description': seo.description || CONFIG.footer?.description || '',
        'og:type': 'website',
        'og:url': canonicalUrl,
        'og:site_name': CONFIG.brand.name,
        'og:locale': 'en_US',
    };

    if (ogImage) {
        ogTags['og:image'] = toAbsoluteUrl(ogImage);
    }

    // Twitter card tags
    ogTags['twitter:card'] = 'summary_large_image';
    ogTags['twitter:title'] = ogTags['og:title'];
    ogTags['twitter:description'] = ogTags['og:description'];
    if (ogImage) {
        ogTags['twitter:image'] = ogTags['og:image'];
    }

    // Remove existing OG/Twitter meta tags
    document.querySelectorAll('meta[property^="og:"], meta[name^="twitter:"]').forEach(el => el.remove());

    // Add new meta tags
    Object.entries(ogTags).forEach(([key, value]) => {
        if (!value) return;
        const meta = document.createElement('meta');
        if (key.startsWith('og:')) {
            meta.setAttribute('property', key);
        } else {
            meta.setAttribute('name', key);
        }
        meta.setAttribute('content', value);
        document.head.appendChild(meta);
    });
}

// ==========================================
// ANALYTICS / TRACKING INJECTION
// ==========================================
function renderAnalytics() {
    if (typeof CONFIG === 'undefined') return;
    if (!CONFIG.tracking) return;

    // Google Tag Manager
    if (CONFIG.tracking.gtm) {
        const gtmScript = document.createElement('script');
        gtmScript.textContent = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${CONFIG.tracking.gtm}');`;
        document.head.insertBefore(gtmScript, document.head.firstChild);
    }

    // Google Analytics 4
    if (CONFIG.tracking.ga4) {
        const gaScript = document.createElement('script');
        gaScript.async = true;
        gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${CONFIG.tracking.ga4}`;
        document.head.appendChild(gaScript);

        const gaInit = document.createElement('script');
        gaInit.textContent = `window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${CONFIG.tracking.ga4}');`;
        document.head.appendChild(gaInit);
    }

    // Facebook Pixel
    if (CONFIG.tracking.fbPixel) {
        const fbScript = document.createElement('script');
        fbScript.textContent = `!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');fbq('init','${CONFIG.tracking.fbPixel}');fbq('track','PageView');`;
        document.head.appendChild(fbScript);
    }
}

// ==========================================
// NORMALIZE CONFIG - Derive values, eliminate duplicates
// Run once before any rendering. Keeps CONFIG.js clean
// while ensuring all display locations stay in sync.
// ==========================================
function normalizeConfig() {
    if (typeof CONFIG === 'undefined') return;

    // Derive form.serviceOptions from services.items (single source of truth)
    if (CONFIG.services?.items && !CONFIG.form.serviceOptions) {
        CONFIG.form.serviceOptions = [
            { value: "", label: "Select Service Needed" },
            ...CONFIG.services.items.map(s => ({ value: s.id, label: s.title })),
            { value: "other", label: "Other / Not Sure" }
        ];
    }

    // Derive hero.backgroundImage from images.hero
    if (!CONFIG.hero.backgroundImage && CONFIG.images?.hero) {
        CONFIG.hero.backgroundImage = CONFIG.images.hero;
    }

    // Derive ourWork.images from images.gallery.items
    if (CONFIG.images?.gallery?.items) {
        if (!CONFIG.ourWork) CONFIG.ourWork = {};
        if (!CONFIG.ourWork.images) {
            CONFIG.ourWork.images = CONFIG.images.gallery.items;
        }
    }

    // Sync Google rating + review count into all display locations
    const rating = CONFIG.reviews?.google?.rating;
    const count = CONFIG.reviews?.google?.reviewCount;

    if (rating != null) {
        // Trust badges: patch star-icon badge
        const starBadge = CONFIG.trustBadges?.find(b => b.icon === 'star');
        if (starBadge) starBadge.text = rating + ' Star Rated';

        // Trust logos: patch Google entry
        const googleLogo = CONFIG.trustLogos?.logos?.find(l => l.name === 'Google');
        if (googleLogo) googleLogo.rating = String(rating);

        // Hero trust strip: patch rating line
        if (CONFIG.hero.trustStrip?.items) {
            const rIdx = CONFIG.hero.trustStrip.items.findIndex(i =>
                i.includes('\u2605') || i.includes('Google Rating')
            );
            if (rIdx >= 0) CONFIG.hero.trustStrip.items[rIdx] = rating + ' \u2605 Google Rating';
        }

        // WhyUs: patch star-icon item
        const ratedItem = CONFIG.whyUs?.items?.find(i => i.icon === 'star');
        if (ratedItem) {
            ratedItem.title = rating + ' Star Rated';
            if (count) ratedItem.description = count + ' five-star reviews on Google. Our customers love the results we deliver.';
        }

        // About values: patch review-count reference
        const trustValue = CONFIG.about?.values?.items?.find(i => i.icon === 'check');
        if (trustValue && count) {
            trustValue.description = rating + ' stars on Google with ' + count + '+ reviews. Our reputation speaks for itself.';
        }
    }

    // Sync city + year into hero trust strip
    if (CONFIG.hero.trustStrip?.items && CONFIG.brand.city) {
        const sIdx = CONFIG.hero.trustStrip.items.findIndex(i => i.includes('Since'));
        if (sIdx >= 0) {
            CONFIG.hero.trustStrip.items[sIdx] = 'Serving ' + CONFIG.brand.city + ' Since ' + CONFIG.brand.yearEstablished;
        }
    }
}

// ==========================================
// RENDER FAVICON
// ==========================================
function renderFavicon() {
    if (typeof CONFIG === 'undefined') return;
    const href = CONFIG.brand?.favicon || CONFIG.images?.favicon || '/favicon.ico';
    let link = document.querySelector('link[rel="icon"]');
    if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.head.appendChild(link);
    }
    link.href = href;
}

// ==========================================
// INITIALIZE COMMON ELEMENTS
// ==========================================
function initCommon(pageKey = 'home') {
    normalizeConfig();
    renderFavicon();
    applyTheme();
    applySEO(pageKey);
    renderCanonical();
    renderPromoBanner();
    renderTopBar();
    renderHeader();
    renderTrustLogosBar();
    renderJsonLD(pageKey);
    renderOGMeta(pageKey);
    renderAnalytics();

    // Initialize scroll animations after a short delay to let content render
    setTimeout(initScrollAnimations, 100);

    // Exit-intent popup after 5 seconds on page
    setTimeout(renderExitIntent, 5000);
}

// ==========================================
// CANONICAL TAG
// ==========================================
function renderCanonical() {
    const href = toAbsoluteUrl(getPageContext()?.canonicalPath || window.location.pathname);
    let link = document.querySelector('link[rel="canonical"]');

    if (!link) {
        link = document.createElement('link');
        link.rel = 'canonical';
        document.head.appendChild(link);
    }

    link.href = href;
}

// ==========================================
// RENDER STICKY MOBILE CTA
// ==========================================
function renderStickyMobileCTA() {
    if (typeof CONFIG === 'undefined') return;

    const container = document.getElementById('sticky-mobile-cta');
    if (!container) return;

    container.innerHTML = `
        <div class="sticky-mobile-cta-inner">
            <a href="tel:${CONFIG.brand.phoneRaw}" class="btn btn-call">
                ${ICONS.phone} Call
            </a>
            <a href="sms:${CONFIG.brand.phoneRaw}" class="btn btn-text">
                ${ICONS.messageCircle} Text
            </a>
            <a href="${resolvePrimaryCtaHref(CONFIG.hero.ctaPrimary.href)}" class="btn btn-quote">
                Free Quote
            </a>
        </div>
    `;
}

// ==========================================
// EXIT-INTENT POPUP
// ==========================================
function renderExitIntent() {
    if (typeof CONFIG === 'undefined') return;
    if (sessionStorage.getItem('exitIntentShown')) return;

    // Create the popup
    const popup = document.createElement('div');
    popup.id = 'exit-intent-popup';
    popup.className = 'exit-popup-overlay';
    popup.innerHTML = `
        <div class="exit-popup">
            <button class="exit-popup-close" aria-label="Close">&times;</button>
            <div class="exit-popup-icon">${getIcon('clock')}</div>
            <h3 class="exit-popup-title">Before You Go...</h3>
            <p class="exit-popup-text">Get a free, no-obligation estimate in under 60 seconds.</p>
            <form class="exit-popup-form" id="exit-form">
                <input type="hidden" name="pageType" value="exit-intent">
                <input type="hidden" name="companySlug" value="${CONFIG.brand.companySlug}">
                <input type="text" name="name" class="form-input" placeholder="Your Name *" required>
                <input type="tel" name="phone" class="form-input" placeholder="Phone Number *" required>
                <button type="submit" class="btn btn-accent btn-block">Get My Free Quote</button>
            </form>
            <div class="exit-popup-alt">
                or call <a href="tel:${CONFIG.brand.phoneRaw}">${CONFIG.brand.phone}</a>
            </div>
        </div>
    `;
    document.body.appendChild(popup);

    let shown = false;

    function showPopup() {
        if (shown) return;
        shown = true;
        sessionStorage.setItem('exitIntentShown', '1');
        popup.classList.add('active');
    }

    function hidePopup() {
        popup.classList.remove('active');
    }

    // Desktop: mouse leaves viewport toward top
    document.addEventListener('mouseout', (e) => {
        if (e.clientY <= 5 && !e.relatedTarget && !e.toElement) {
            showPopup();
        }
    });

    // Mobile: scroll up quickly after scrolling down
    let lastScrollY = 0;
    let scrolledDown = false;
    window.addEventListener('scroll', () => {
        const currentY = window.scrollY;
        if (currentY > 500) scrolledDown = true;
        if (scrolledDown && currentY < lastScrollY - 100 && currentY < 200) {
            showPopup();
        }
        lastScrollY = currentY;
    });

    // Close handlers
    popup.querySelector('.exit-popup-close').addEventListener('click', hidePopup);
    popup.addEventListener('click', (e) => {
        if (e.target === popup) hidePopup();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') hidePopup();
    });

    // Form handler
    setupFormHandler('exit-form', CONFIG.form.ghlWebhook, CONFIG.form.successMessage);
}

// Make functions globally available
if (typeof window !== 'undefined') {
    window.ICONS = ICONS;
    window.getIcon = getIcon;
    window.getImage = getImage;
    window.getStarRating = getStarRating;
    window.escapeHTML = escapeHTML;
    window.applyTheme = applyTheme;
    window.applySEO = applySEO;
    window.renderPromoBanner = renderPromoBanner;
    window.renderTopBar = renderTopBar;
    window.renderTrustLogosBar = renderTrustLogosBar;
    window.renderGoogleRatingBadge = renderGoogleRatingBadge;
    window.renderGallery = renderGallery;
    window.renderHeader = renderHeader;
    window.renderMobileMenu = renderMobileMenu;
    window.renderTrustBadges = renderTrustBadges;
    window.renderStats = renderStats;
    window.renderReviews = renderReviews;
    window.renderWhyUs = renderWhyUs;
    window.renderProcess = renderProcess;
    window.renderQuoteForm = renderQuoteForm;
    window.renderCTA = renderCTA;
    window.renderFAQ = renderFAQ;
    window.renderFooter = renderFooter;
    window.renderStickyMobileCTA = renderStickyMobileCTA;
    window.renderExitIntent = renderExitIntent;
    window.renderCanonical = renderCanonical;
    window.normalizeConfig = normalizeConfig;
    window.renderFavicon = renderFavicon;
    window.initMultiStepForm = initMultiStepForm;
    window.renderJsonLD = renderJsonLD;
    window.renderOGMeta = renderOGMeta;
    window.renderAnalytics = renderAnalytics;
    window.setupFormHandler = setupFormHandler;
    window.initCommon = initCommon;
}
