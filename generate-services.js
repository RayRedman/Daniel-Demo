#!/usr/bin/env node
/**
 * Generate Service & Service Area Pages
 * 
 * Reads CONFIG.js and generates individual HTML files for:
 * - Each service in /services/ directory
 * - Each service area in /service-areas/ directory
 * 
 * Usage: node generate-services.js
 */

const fs = require('fs');
const path = require('path');

// Resolve paths relative to project root (script is now in root)
const projectRoot = __dirname;
const configPath = path.join(projectRoot, 'CONFIG.js');
const servicesDir = path.join(projectRoot, 'services');
const serviceAreasDir = path.join(projectRoot, 'service-areas');

// Read and evaluate CONFIG.js
const configContent = fs.readFileSync(configPath, 'utf8');

// Extract CONFIG object - CONFIG.js exports via window.CONFIG or module.exports
// We need to create a mock environment for it
const vm = require('vm');
const sandbox = { 
    CONFIG: null,
    window: {},
    module: { exports: {} }
};
vm.createContext(sandbox);
vm.runInContext(configContent, sandbox);

// Get CONFIG from whichever export method was used
const CONFIG = sandbox.CONFIG || sandbox.window.CONFIG || sandbox.module.exports;

if (!CONFIG || !CONFIG.services || !CONFIG.services.items) {
    console.error('Error: CONFIG.services.items not found in CONFIG.js');
    process.exit(1);
}

// Ensure directories exist
if (!fs.existsSync(servicesDir)) {
    fs.mkdirSync(servicesDir, { recursive: true });
}
if (!fs.existsSync(serviceAreasDir)) {
    fs.mkdirSync(serviceAreasDir, { recursive: true });
}

const domain = CONFIG.brand?.domain ? `https://${CONFIG.brand.domain}` : '';
const cityState = [CONFIG.brand?.city, CONFIG.brand?.state].filter(Boolean).join(', ');
const primaryAreaIds = ['chicago', 'skokie', 'evanston', 'oak-park', 'park-ridge', 'des-plaines'];
const featuredServiceIds = [
    'ev-charger-installation',
    'tesla-powerwall-battery-storage',
    'electrical-panel-upgrades',
    'generator-installation',
];

function escapeHtml(value = '') {
    return String(value)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
}

function cleanText(value = '') {
    return String(value).replace(/\s+/g, ' ').trim();
}

function truncateDescription(text, maxLength = 160) {
    const clean = cleanText(text);
    if (clean.length <= maxLength) return clean;
    const clipped = clean.slice(0, maxLength + 1);
    const lastSpace = clipped.lastIndexOf(' ');
    const limit = lastSpace > 120 ? lastSpace : maxLength;
    return `${clipped.slice(0, limit).trim()}...`;
}

function normalizePathname(pathname = '/') {
    if (!pathname || pathname === '/index.html') return '/';
    return pathname.startsWith('/') ? pathname : `/${pathname}`;
}

function absoluteUrl(pathname = '/') {
    if (/^https?:\/\//.test(pathname)) return pathname;
    const normalized = normalizePathname(pathname);
    return domain ? `${domain}${normalized}` : normalized;
}

function absoluteImage(imagePath) {
    return imagePath ? absoluteUrl(imagePath) : '';
}

function renderHead({ title, description, pathname, imagePath }) {
    const canonicalUrl = absoluteUrl(pathname);
    const ogImage = absoluteImage(imagePath || CONFIG.images?.og || CONFIG.images?.hero || '');

    return `    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title id="page-title">${escapeHtml(title)}</title>
    <meta name="description" id="meta-description" content="${escapeHtml(description)}">
    <meta name="robots" content="index,follow">
    <link rel="canonical" href="${escapeHtml(canonicalUrl)}">
    <meta property="og:title" content="${escapeHtml(title)}">
    <meta property="og:description" content="${escapeHtml(description)}">
    <meta property="og:type" content="website">
    <meta property="og:url" content="${escapeHtml(canonicalUrl)}">
    <meta property="og:site_name" content="${escapeHtml(CONFIG.brand.name)}">
    <meta property="og:locale" content="en_US">
    ${ogImage ? `<meta property="og:image" content="${escapeHtml(ogImage)}">` : ''}
    <meta name="twitter:card" content="summary_large_image">
    <meta name="twitter:title" content="${escapeHtml(title)}">
    <meta name="twitter:description" content="${escapeHtml(description)}">
    ${ogImage ? `<meta name="twitter:image" content="${escapeHtml(ogImage)}">` : ''}
    
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Lora:wght@400;500;600;700&display=swap" rel="stylesheet">
    
    <!-- Shared Styles -->
    <link rel="stylesheet" href="/styles.css">`;
}

function renderFeatureCards(items) {
    return items.map(item => `
                    <div class="service-card">
                        <div class="service-card-content">
                            <h3 class="service-card-title">${escapeHtml(item.title)}</h3>
                            ${item.description ? `<p class="service-card-desc">${escapeHtml(item.description)}</p>` : ''}
                        </div>
                    </div>`).join('');
}

function renderLinkCards(items) {
    return items.map(item => `
                    <a href="${item.href}" class="service-card">
                        <div class="service-card-content">
                            <h3 class="service-card-title">${escapeHtml(item.title)}</h3>
                            <p class="service-card-desc">${escapeHtml(item.description)}</p>
                        </div>
                    </a>`).join('');
}

function getServicePath(service) {
    return `/services/${service.slug || service.id}.html`;
}

function getAreaPath(area) {
    return `/service-areas/${area.slug || area.id}.html`;
}

function getServiceMeta(service) {
    const title = service.metaTitle || `${service.title} in ${cityState} | ${CONFIG.brand.name}`;
    const description = truncateDescription(
        service.metaDescription ||
        `${service.shortDesc} Licensed and insured electrician serving ${cityState}. Call ${CONFIG.brand.phone} for a free estimate.`
    );

    return {
        title,
        description,
        pathname: getServicePath(service),
        imagePath: service.image || CONFIG.images?.og || CONFIG.images?.hero || '',
    };
}

function getAreaMeta(area) {
    const fallbackTitle = `${CONFIG.brand.trade || 'Electrical Services'} in ${area.name}, ${CONFIG.brand.state}`;
    const title = area.metaTitle || `${area.headline || fallbackTitle} | ${CONFIG.brand.name}`;
    const description = truncateDescription(
        area.metaDescription ||
        `${area.description} Licensed, insured, and bonded electrician. Call ${CONFIG.brand.phone} for a free estimate.`
    );

    return {
        title,
        description,
        pathname: getAreaPath(area),
        imagePath: area.image || CONFIG.images?.og || CONFIG.images?.hero || '',
    };
}

function getPrimaryAreas(limit = 4) {
    const configured = (CONFIG.serviceAreas || []).filter(area => primaryAreaIds.includes(area.id));
    const fallback = (CONFIG.serviceAreas || []).filter(area => !primaryAreaIds.includes(area.id));
    return [...configured, ...fallback].slice(0, limit);
}

function getFeaturedServices(limit = 4) {
    const configured = (CONFIG.services?.items || []).filter(service => featuredServiceIds.includes(service.id));
    const fallback = (CONFIG.services?.items || []).filter(service => !featuredServiceIds.includes(service.id));
    return [...configured, ...fallback].slice(0, limit);
}

function getServicesByIds(ids = [], limit = 4) {
    if (!Array.isArray(ids) || ids.length === 0) return [];

    const lookup = new Map((CONFIG.services?.items || []).map(service => [service.id, service]));
    return ids
        .map(id => lookup.get(id))
        .filter(Boolean)
        .slice(0, limit);
}

function renderParagraphs(paragraphs = []) {
    return paragraphs.map(paragraph => `<p>${escapeHtml(paragraph)}</p>`).join('');
}

function renderServiceProofSection(service) {
    const features = renderFeatureCards(
        (service.features || []).map(feature => ({
            title: feature,
            description: `${service.title} completed with code-compliant workmanship and a clean finish.`,
        }))
    );

    const areaCards = renderLinkCards(
        getPrimaryAreas().map(area => ({
            href: getAreaPath(area),
            title: `${service.title} in ${area.name}`,
            description: `See how we serve homeowners and businesses in ${area.name}.`,
        }))
    );

    const overview = truncateDescription(
        `${service.fullDesc || service.shortDesc} ${CONFIG.brand.name} helps homeowners throughout ${cityState} with permitting, code-compliant installation, and clear upgrade recommendations when the project affects panel capacity, safety, and long-term reliability.`,
        220
    );

    return `    <section class="services">
        <div class="container">
            <div class="services-header">
                <div class="services-label">Service Overview</div>
                <h2 class="services-title">${escapeHtml(service.title)} for ${escapeHtml(cityState)} Homes</h2>
                <p class="services-subtitle">${escapeHtml(overview)}</p>
            </div>
            <div class="services-grid">
${features}
            </div>
            <div class="services-header" style="margin-top:48px;">
                <div class="services-label">Popular Service Areas</div>
                <h2 class="services-title">Serving Chicago and Nearby Suburbs</h2>
                <p class="services-subtitle">We regularly complete ${escapeHtml(service.title.toLowerCase())} projects throughout the city and close-in suburbs where homeowners need fast scheduling, clean installations, and help navigating permits and panel capacity.</p>
            </div>
            <div class="services-grid">
${areaCards}
            </div>
        </div>
    </section>`;
}

function renderAreaProofSection(area) {
    const localContent = area.localContent || {};
    const hasLocalIntro = Array.isArray(localContent.intro) && localContent.intro.length > 0;
    const introParagraphs = hasLocalIntro
        ? localContent.intro
        : [
            `${area.description} We help homeowners in ${area.name} with EV charging, backup power, panel upgrades, troubleshooting, and code-compliant electrical improvements that fit the property, usage, and long-term plans for the home.`,
        ];
    const overview = localContent.summary || truncateDescription(introParagraphs[0], 220);
    const features = renderFeatureCards(
        (localContent.considerations?.length > 0 ? localContent.considerations : (area.features || []).map(feature => ({
            title: feature,
            description: `${CONFIG.brand.name} brings specialized electrical expertise to homes and businesses in ${area.name}.`,
        })))
    );
    const selectedServices = getServicesByIds(area.priorityServices, 4);
    const fallbackServices = getFeaturedServices();
    const serviceCards = renderLinkCards(
        (selectedServices.length > 0 ? selectedServices : fallbackServices).map(service => ({
            href: getServicePath(service),
            title: service.title,
            description: `${service.shortDesc} Serving ${area.name} and nearby neighborhoods.`,
        }))
    );
    const faqCards = Array.isArray(localContent.faqs) && localContent.faqs.length > 0
        ? renderFeatureCards(localContent.faqs.map(item => ({
            title: item.question,
            description: item.answer,
        })))
        : '';

    const neighborhoods = (area.neighborhoods || []).map(name => `
                    <div class="area-neighborhood-item">
                        <span>${escapeHtml(name)}</span>
                    </div>`).join('');

    return `    <section class="services">
        <div class="container">
            <div class="services-header">
                <div class="services-label">${escapeHtml(localContent.label || 'Local Electrical Expertise')}</div>
                <h2 class="services-title">${escapeHtml(localContent.title || `${area.name} Electrical Services Backed by Specialty Training`)}</h2>
                <p class="services-subtitle">${escapeHtml(overview)}</p>
            </div>
            ${hasLocalIntro ? `<div class="local-copy">
                ${renderParagraphs(introParagraphs)}
            </div>` : ''}
            <div class="services-grid">
${features}
            </div>
            <div class="services-header" style="margin-top:48px;">
                <div class="services-label">${escapeHtml(localContent.serviceLabel || `Popular Services in ${area.name}`)}</div>
                <h2 class="services-title">${escapeHtml(localContent.serviceTitle || 'High-Intent Services for Local Homeowners')}</h2>
                <p class="services-subtitle">${escapeHtml(localContent.serviceIntro || `Our strongest demand in ${area.name} centers on EV charging, backup power, panel capacity upgrades, and code-compliant electrical improvements for older and modern homes alike.`)}</p>
            </div>
            <div class="services-grid">
${serviceCards}
            </div>
            ${neighborhoods ? `<div class="area-neighborhoods">
                <h3 class="area-neighborhoods-title">Neighborhoods We Serve in ${escapeHtml(area.name)}</h3>
                <div class="area-neighborhoods-grid">
${neighborhoods}
                </div>
            </div>` : ''}
            ${faqCards ? `<div class="services-header" style="margin-top:48px;">
                <div class="services-label">${escapeHtml(localContent.faqLabel || `Common Questions From ${area.name} Homeowners`)}</div>
                <h2 class="services-title">${escapeHtml(localContent.faqTitle || `Planning Electrical Work in ${area.name}`)}</h2>
                <p class="services-subtitle">${escapeHtml(localContent.faqIntro || `These are the practical questions we hear most often from homeowners planning EV charging, service upgrades, backup power, and code-driven electrical work in ${area.name}.`)}</p>
            </div>
            <div class="services-grid">
${faqCards}
            </div>` : ''}
        </div>
    </section>`;
}

function renderStaticHero({ label, title, accent, description, imagePath }) {
    return `    <section class="hero" id="hero">
        <div class="hero-bg"><img src="${escapeHtml(imagePath)}" alt="${escapeHtml(title)}"></div>
        <div class="container">
            <div class="hero-inner">
                <div class="hero-content">
                    <div class="hero-label">${escapeHtml(label)}</div>
                    <h1 class="hero-headline">
                        ${escapeHtml(title)}
                        ${accent ? `<span class="hero-headline-accent">${escapeHtml(accent)}</span>` : ''}
                    </h1>
                    <p class="hero-subhead">${escapeHtml(description)}</p>
                    <div class="hero-cta">
                        <a href="#quote" class="btn btn-accent btn-lg">${escapeHtml(CONFIG.hero.ctaPrimary.text)}</a>
                        <a href="tel:${escapeHtml(CONFIG.brand.phoneRaw)}" class="btn btn-outline-white btn-lg">${escapeHtml(CONFIG.brand.phone)}</a>
                    </div>
                </div>
            </div>
        </div>
    </section>`;
}

function renderServicePage(service) {
    const meta = getServiceMeta(service);
    const backgroundImage = service.image || CONFIG.hero?.backgroundImage || CONFIG.images?.hero || '';

    return `<!-- GENERATED FILE. DO NOT EDIT. -->
<!DOCTYPE html>
<html lang="en">
<head>
${renderHead(meta)}
</head>
<body>
    <!-- PROMO BANNER -->
    <div class="promo-banner" id="promo-banner"></div>
    <!-- TOP BAR -->
    <div class="top-bar" id="top-bar"></div>
    <!-- HEADER -->
    <header class="header" id="header"></header>
    <!-- MOBILE MENU -->
    <div class="mobile-menu" id="mobile-menu"></div>
    <!-- HERO -->
${renderStaticHero({
        label: CONFIG.hero.label || 'Professional Service',
        title: service.title,
        accent: `in ${cityState}`,
        description: service.fullDesc || service.shortDesc,
        imagePath: backgroundImage,
    })}
    <!-- QUOTE FORM SECTION -->
    <section class="quote-section" id="quote-section"></section>
${renderServiceProofSection(service)}
    <!-- WHAT'S INCLUDED -->
    <section class="services" id="services"></section>
    <!-- PROCESS -->
    <section class="process" id="process"></section>
    <!-- WHY US -->
    <section class="why-us" id="why-us"></section>
    <!-- REVIEWS -->
    <section class="reviews" id="reviews"></section>
    <!-- CTA -->
    <section class="cta" id="cta"></section>
    <!-- FAQ -->
    <section class="faq" id="faq"></section>
    <!-- FOOTER -->
    <footer class="footer" id="footer"></footer>
    <!-- STICKY MOBILE CTA -->
    <div class="sticky-mobile-cta" id="sticky-mobile-cta"></div>

    <!-- Core Scripts -->
    <script src="/CONFIG.js"></script>
    <script src="/core.js"></script>
    <!-- Service Template Engine (single source of truth) -->
    <script src="/services/_template.js"></script>
</body>
</html>`;
}

function renderAreaPage(area) {
    const meta = getAreaMeta(area);
    const backgroundImage = area.image || CONFIG.hero?.backgroundImage || CONFIG.images?.hero || '';

    return `<!-- GENERATED FILE. DO NOT EDIT. -->
<!DOCTYPE html>
<html lang="en">
<head>
${renderHead(meta)}
</head>
<body>
    <!-- PROMO BANNER -->
    <div class="promo-banner" id="promo-banner"></div>
    <!-- TOP BAR -->
    <div class="top-bar" id="top-bar"></div>
    <!-- HEADER -->
    <header class="header" id="header"></header>
    <!-- MOBILE MENU -->
    <div class="mobile-menu" id="mobile-menu"></div>
    <!-- HERO -->
${renderStaticHero({
        label: CONFIG.hero.label || 'Professional Service',
        title: area.headline || `${CONFIG.brand.trade || 'Electrical Services'} in ${area.name}`,
        accent: '',
        description: area.description,
        imagePath: backgroundImage,
    })}
    <!-- QUOTE FORM SECTION -->
    <section class="quote-section" id="quote-section"></section>
${renderAreaProofSection(area)}
    <!-- AREA FEATURES -->
    <section class="services" id="services"></section>
    <!-- PROCESS -->
    <section class="process" id="process"></section>
    <!-- WHY US -->
    <section class="why-us" id="why-us"></section>
    <!-- REVIEWS -->
    <section class="reviews" id="reviews"></section>
    <!-- CTA -->
    <section class="cta" id="cta"></section>
    <!-- FAQ -->
    <section class="faq" id="faq"></section>
    <!-- FOOTER -->
    <footer class="footer" id="footer"></footer>
    <!-- STICKY MOBILE CTA -->
    <div class="sticky-mobile-cta" id="sticky-mobile-cta"></div>

    <!-- Core Scripts -->
    <script src="/CONFIG.js"></script>
    <script src="/core.js"></script>
    <!-- Service Area Template Engine (single source of truth) -->
    <script src="/service-areas/_template.js"></script>
</body>
</html>`;
}

// ==========================================
// GENERATE SERVICE PAGES
// ==========================================
const services = CONFIG.services.items;
let serviceCount = 0;

services.forEach(service => {
    const serviceSlug = service.slug || service.id;
    const filename = `${serviceSlug}.html`;
    const filepath = path.join(servicesDir, filename);

    fs.writeFileSync(filepath, renderServicePage(service), 'utf8');
    console.log(`Generated: /services/${filename}`);
    serviceCount++;
});

console.log(`✓ Generated ${serviceCount} service pages in /services/\n`);

// ==========================================
// GENERATE SERVICE AREA PAGES
// ==========================================
if (CONFIG.serviceAreas && CONFIG.serviceAreas.length > 0) {
    let areaCount = 0;

    CONFIG.serviceAreas.forEach(area => {
        const areaSlug = area.slug || area.id;
        const filename = `${areaSlug}.html`;
        const filepath = path.join(serviceAreasDir, filename);

        fs.writeFileSync(filepath, renderAreaPage(area), 'utf8');
        console.log(`Generated: /service-areas/${filename}`);
        areaCount++;
    });

    console.log(`✓ Generated ${areaCount} service area pages in /service-areas/\n`);
} else {
    console.log('⚠ No service areas found in CONFIG.serviceAreas\n');
}

// ==========================================
// GENERATE SITEMAP.XML (with absolute URLs)
// ==========================================
if (domain) {
    const sitemapEntries = [
        { loc: '/', priority: '1.0', changefreq: 'weekly' },
        { loc: '/contact.html', priority: '0.9', changefreq: 'monthly' },
        { loc: '/our-work.html', priority: '0.7', changefreq: 'monthly' },
    ];
    const lastmod = new Date().toISOString().split('T')[0];

    services.forEach(s => {
        const slug = s.slug || s.id;
        sitemapEntries.push({ loc: `/services/${slug}.html`, priority: '0.8', changefreq: 'monthly' });
    });

    if (CONFIG.serviceAreas) {
        CONFIG.serviceAreas.forEach(a => {
            const slug = a.slug || a.id;
            sitemapEntries.push({ loc: `/service-areas/${slug}.html`, priority: '0.8', changefreq: 'monthly' });
        });
    }

    sitemapEntries.push({ loc: '/privacy-policy.html', priority: '0.3', changefreq: 'yearly' });
    sitemapEntries.push({ loc: '/terms.html', priority: '0.3', changefreq: 'yearly' });

    const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapEntries.map(e => `  <url><loc>${absoluteUrl(e.loc)}</loc><lastmod>${lastmod}</lastmod><priority>${e.priority}</priority><changefreq>${e.changefreq}</changefreq></url>`).join('\n')}
</urlset>
`;
    fs.writeFileSync(path.join(projectRoot, 'sitemap.xml'), sitemapXml, 'utf8');
    console.log(`✓ Generated sitemap.xml with absolute URLs (${domain})\n`);

    const robotsTxt = `User-agent: *\nAllow: /\n\nSitemap: ${domain}/sitemap.xml\n`;
    fs.writeFileSync(path.join(projectRoot, 'robots.txt'), robotsTxt, 'utf8');
    console.log('✓ Generated robots.txt\n');
} else {
    console.log('⚠ brand.domain not set — skipping sitemap.xml and robots.txt generation\n');
}
