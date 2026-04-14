// ==========================================
// SERVICE PAGE TEMPLATE ENGINE
// Canonical service rendering logic - single source of truth
// ==========================================

(function() {
    'use strict';
    
    // ==========================================
    // GET SERVICE FROM PATHNAME
    // ==========================================
    function getServiceFromPathname() {
        // Extract slug from pathname: /services/tv-mounting.html -> tv-mounting
        const pathname = window.location.pathname;
        const filename = pathname.split('/').pop(); // e.g., "tv-mounting.html"
        const slug = filename.replace('.html', '');  // e.g., "tv-mounting"
        
        if (slug && slug !== '_template' && CONFIG.services?.items) {
            // Find by slug (priority) or id (fallback)
            const found = CONFIG.services.items.find(s => 
                s.slug === slug || s.id === slug
            );
            if (found) return found;
        }
        
        // Fallback to first service
        return CONFIG.services?.items?.[0] || null;
    }
    
    // Current service (set on load)
    let currentService = null;

    function getServicePath(service) {
        const slug = service?.slug || service?.id || '';
        return slug ? `/services/${slug}.html` : '/services/';
    }

    function getServiceSEO(service) {
        if (!service) return { title: '', description: '', canonicalPath: '/services/' };

        const location = CONFIG.brand.address || '';
        const cityState = location.split(',').slice(-2).join(',').trim() || location;

        return {
            title: service.metaTitle || `${service.title} in ${cityState} | ${CONFIG.brand.name}`,
            description: service.metaDescription ||
                `${service.fullDesc || service.shortDesc} ${CONFIG.seo?.services?.description || ''}`.trim(),
            canonicalPath: getServicePath(service),
            image: service.image || CONFIG.images?.og || CONFIG.images?.hero || '',
        };
    }

    function setServicePageContext(service) {
        if (!service) return;
        const seo = getServiceSEO(service);

        window.__PAGE_CONTEXT__ = {
            pageType: 'service',
            canonicalPath: seo.canonicalPath,
            seo: {
                title: seo.title,
                description: seo.description,
            },
            image: seo.image,
            service: {
                id: service.id,
                slug: service.slug || service.id,
                title: service.title,
                description: service.fullDesc || service.shortDesc,
                image: seo.image,
            },
        };
    }
    
    // ==========================================
    // SEO - Set page title and meta
    // ==========================================
    function setServiceSEO(service) {
        if (!service) return;
        const seo = getServiceSEO(service);
        document.getElementById('page-title').textContent = seo.title;
        document.getElementById('meta-description').setAttribute('content', seo.description);
    }
    
    // ==========================================
    // HERO - Service-specific
    // ==========================================
    function renderHero() {
        const container = document.getElementById('hero');
        if (!container || !currentService) return;
        
        const location = CONFIG.brand.address || '';
        const cityState = location.split(',').slice(-2).join(',').trim() || location;
        
        // Use service image or fallback to homepage hero
        const bgImage = currentService.image || CONFIG.hero?.backgroundImage || getImage('hero');
        
        // Trust badges for hero
        const heroBadges = CONFIG.trustBadges.slice(0, 4).map(b => `
            <div class="hero-trust-badge">
                <span class="hero-trust-icon">${getIcon(b.icon)}</span>
                <span class="hero-trust-text">${b.text}</span>
            </div>
        `).join('');
        
        // Trust strip under hero
        const trustStrip = CONFIG.hero.trustStrip && CONFIG.hero.trustStrip.enabled 
            ? `<div class="hero-trust-strip">
                <div class="container">
                    <div class="hero-trust-strip-inner">
                        ${CONFIG.hero.trustStrip.items.map(item => `<span class="hero-trust-strip-item">${item}</span>`).join('<span class="hero-trust-strip-divider">•</span>')}
                    </div>
                </div>
            </div>`
            : '';
        
        container.innerHTML = `
            <div class="hero-bg"><img src="${bgImage}" alt="${currentService.title}"></div>
            <div class="container">
                <div class="hero-inner">
                    <div class="hero-content">
                        <div class="hero-label">${CONFIG.hero.label || 'Professional Service'}</div>
                        <h1 class="hero-headline">
                            ${currentService.title}
                            <span class="hero-headline-accent">in ${cityState}</span>
                        </h1>
                        <p class="hero-subhead">${currentService.fullDesc || currentService.shortDesc}</p>
                        <div class="hero-trust-row">${heroBadges}</div>
                        <div class="hero-cta">
                            <a href="#quote" class="btn btn-accent btn-lg">${CONFIG.hero.ctaPrimary.text}</a>
                            <a href="tel:${CONFIG.brand.phoneRaw}" class="btn btn-outline-white btn-lg">${getIcon('phone')} ${CONFIG.brand.phone}</a>
                        </div>
                    </div>
                </div>
            </div>
            ${trustStrip}
        `;
    }
    
    
    // ==========================================
    // WHAT'S INCLUDED - Uses services section style
    // ==========================================
    function renderWhatsIncluded() {
        const container = document.getElementById('services');
        if (!container || !currentService) return;
        
        // If service has no features, hide the section
        if (!currentService.features || currentService.features.length === 0) {
            container.style.display = 'none';
            return;
        }
        
        const features = currentService.features.map(f => `
            <div class="service-card">
                <div class="service-card-content">
                    <div class="service-card-icon">${getIcon('check-circle')}</div>
                    <h3 class="service-card-title">${f}</h3>
                </div>
            </div>
        `).join('');
        
        container.innerHTML = `
            <div class="container">
                <div class="services-header">
                    <div class="services-label">What's Included</div>
                    <h2 class="services-title">${currentService.title} Services</h2>
                    <p class="services-subtitle">Here's what you can expect when you book this service.</p>
                </div>
                <div class="services-grid">${features}</div>
            </div>
        `;
    }
    
    
    
    
    
    // ==========================================
    // INIT - Service page initialization
    // ==========================================
    function initServicePage() {
        // Get current service from pathname
        currentService = getServiceFromPathname();

        setServicePageContext(currentService);

        // Init common (promo banner, top bar, header, mobile menu, schema, OG, analytics)
        initCommon('service');

        // Re-apply page-specific SEO after shared initialization
        setServiceSEO(currentService);

        // Render page sections
        renderHero();
        renderQuoteForm({
            pageType: 'service',
            pageSlug: currentService ? (currentService.slug || currentService.id) : '',
            preselectedService: currentService ? currentService.id : null,
        });
        renderWhatsIncluded();
        renderProcess();
        renderWhyUs();
        renderReviews();
        renderCTA();
        renderFAQ();
        renderFooter();
        renderStickyMobileCTA();
    }
    
    // Auto-initialize when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initServicePage);
    } else {
        initServicePage();
    }
})();
