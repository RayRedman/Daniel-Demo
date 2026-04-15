// ==========================================
// SITE CONFIGURATION
// Daniel's Imperial Electric LLC — Chicago, IL
// ==========================================

const CONFIG = {
  // ================================
  // BRAND IDENTITY
  // ================================
  brand: {
    name: "Daniel's Imperial Electric",
    companySlug: "daniels-imperial-electric",
    tagline: "Chicago's EV & Energy Storage Specialists",
    phone: "(872) 829-0535",
    phoneRaw: "8728290535",
    email: "daniel@danielsimperialelectricllc.com",
    domain: "danielsimperialelectricllc.com",
    trade: "Electrical Services",
    tradeType: "Electrical Services",
    city: "Chicago",
    state: "IL",
    address: "Chicago, IL",
    fullAddress: "Chicago, IL",
    hours: "Mon–Sun 7 AM – 5 PM",
    license: "Licensed • Insured • Bonded",
    logo: "assets/clients/active/logo.jpeg",
    logoIcon: "zap",
    favicon: "/favicon.svg",
    yearEstablished: "",
    googleBusinessUrl: "",
  },

  // ================================
  // THEME & COLORS
  // ================================
  theme: {
    primaryColor: "#1A3A6B",
    primaryDark: "#0F2547",
    primaryLight: "#2A5090",
    accentColor: "#1A1A1A",
    accentDark: "#000000",
    accentLight: "#333333",
    gold: "#1A1A1A",
    green: "#28A745",
    gradientPrimary: "#1A3A6B",
    gradientAccent: "#1A1A1A",
    glassBg: "rgba(255, 255, 255, 1)",
    shadowSoft: "0 4px 20px rgba(0, 0, 0, 0.08)",
    shadowMedium: "0 8px 30px rgba(0, 0, 0, 0.12)",
    shadowStrong: "0 15px 50px rgba(0, 0, 0, 0.15)",
  },

  // ================================
  // NAVIGATION
  // ================================
  nav: [
    { label: "Home", href: "/" },
    { label: "Our Work", href: "our-work.html" },
    { label: "Services", type: "servicesDropdown" },
    { label: "Service Areas", type: "serviceAreasDropdown" },
    { label: "Contact", href: "contact.html" },
  ],

  // ================================
  // TOP BAR
  // ================================
  topBar: {
    emergencyText: "Certified Tesla & EV Charger Installer",
    showAddress: false,
    showHours: true,
    phoneLabel: "Call Now - Free Estimate",
  },

  // ==========================================
  // PROMO BANNER
  // ==========================================
  promoBanner: {
    enabled: true,
    text: "ICC Certified for ComEd Rebate Programs — Ask Us How to Save",
    linkText: "Get a Free Quote",
    linkHref: "#quote",
  },

  // ==========================================
  // TRUST LOGOS
  // ==========================================
  trustLogos: {
    enabled: true,
    title: "Trusted & Certified",
    logos: [
      { name: "Google", rating: "5.0" },
    ],
  },

  // ==========================================
  // SEO
  // ==========================================
  seo: {
    home: {
      title: "Daniel's Imperial Electric | EV Charger & Tesla Powerwall Installer in Chicago, IL",
      description: "Chicago's certified Tesla and EV charger installation specialist. Powerwall battery storage, generator installation, panel upgrades & more. ICC certified for ComEd rebates. Call (773) 706-0609.",
    },
    about: {
      title: "About Us | Daniel's Imperial Electric — Chicago, IL",
      description: "Meet Daniel's Imperial Electric — Chicago's certified Tesla installer and EV charging specialist. 8 years experience, licensed, insured, and bonded.",
    },
    services: {
      title: "Electrical Services | Daniel's Imperial Electric — Chicago, IL",
      description: "EV charger installation, Tesla Powerwall, generator installation, panel upgrades, whole-home rewiring, and more in Chicago and the suburbs.",
    },
    contact: {
      title: "Contact | Daniel's Imperial Electric — Chicago, IL",
      description: "Need an EV charger or Tesla Powerwall installed in Chicago? Call (773) 706-0609 or request a free estimate online.",
    },
    serviceArea: {
      title: "Service Areas | Daniel's Imperial Electric — Chicago, IL",
      description: "Electrical services in Chicago, Skokie, Evanston, Oak Park, Naperville, Schaumburg, Aurora, and the greater Chicagoland area.",
    },
    ourWork: {
      title: "Our Work | Daniel's Imperial Electric — Chicago, IL",
      description: "See examples of our EV charger installations, Tesla Powerwall setups, generator installs, and electrical projects across Chicago.",
    },
  },

  // ==========================================
  // IMAGES
  // ==========================================
  images: {
    basePath: "/assets/clients/active/",
    hero: "/assets/clients/active/hero.webp",
    about: "/assets/clients/active/hero.webp",
    whyUs: "/assets/clients/active/why-us.webp",
    contact: "/assets/clients/active/hero.webp",
    og: "/assets/clients/active/hero.webp",
    favicon: "/favicon.svg",

    services: {
      "ev-charger-installation": "/assets/clients/active/services/ev-charger-installation.webp",
      "tesla-powerwall-battery-storage": "/assets/clients/active/services/tesla-powerwall-battery-storage.jpg",
      "generator-installation": "/assets/clients/active/services/generator-installation.png",
      "electrical-panel-upgrades": "/assets/clients/active/services/electrical-panel-upgrades.webp",
      "whole-home-rewiring": "/assets/clients/active/services/whole-home-rewiring.webp",
      "electrical-repair-troubleshooting": "/assets/clients/active/services/electrical-repair-troubleshooting.webp",
      "security-camera-installation": "/assets/clients/active/services/security-camera-installation.webp",
      "ceiling-fan-fixture-installation": "/assets/clients/active/services/ceiling-fan-fixture-installation.webp",
      "smoke-detector-safety-installations": "/assets/clients/active/services/smoke-detector-safety-installations.webp",
    },

    gallery: {
      enabled: true,
      title: "Recent Work",
      subtitle: "Real electrical installations completed for Chicago homeowners",
      items: [
        { src: "/assets/clients/active/projects/ev-charger-autel.webp", alt: "Autel EV charger installation in residential garage", caption: "EV Charger Installation — Residential Garage" },
        { src: "/assets/clients/active/projects/tesla-wall-connector.webp", alt: "Tesla Wall Connector and sub-panel installation", caption: "Tesla Wall Connector & Sub-Panel Install" },
        { src: "/assets/clients/active/projects/garage-ev-charger.webp", alt: "EV charger installed in new construction garage", caption: "EV Charger — New Construction Garage" },
        { src: "/assets/clients/active/projects/generator-install.webp", alt: "Standby generator installation outside Chicago home", caption: "Standby Generator Installation" },
        { src: "/assets/clients/active/projects/chandelier-install.webp", alt: "Chandelier light fixture installation", caption: "Chandelier & Light Fixture Installation" },
        { src: "/assets/clients/active/projects/commercial-lighting.webp", alt: "Commercial parking garage lighting installation", caption: "Commercial Garage Lighting" },
        { src: "/assets/clients/active/projects/electrical-panel.webp", alt: "Electrical panel upgrade in residential home", caption: "Electrical Panel Upgrade" },
        { src: "/assets/clients/active/projects/outdoor-charging-station.webp", alt: "Outdoor EV charging station installation", caption: "Outdoor EV Charging Station" },
        { src: "/assets/clients/active/projects/outdoor-ev-station.webp", alt: "Outdoor EV charging pedestal installation", caption: "EV Charging Pedestal Install" },
        { src: "/assets/clients/active/projects/commercial-ev-charger.webp", alt: "Commercial EV charger installation", caption: "Commercial EV Charger" },
        { src: "/assets/clients/active/projects/ecobee-thermostat.webp", alt: "Ecobee smart thermostat installation", caption: "Smart Thermostat Installation" },
        { src: "/assets/clients/active/projects/exterior-electrical.webp", alt: "Exterior electrical service and security camera installation", caption: "Exterior Electrical & Security Cameras" },
        { src: "/assets/clients/active/projects/ev-charger-wall.webp", alt: "Wall-mounted EV charger installation", caption: "Wall-Mounted EV Charger" },
        { src: "/assets/clients/active/projects/project-14.jpg", alt: "Ceiling wiring rough-in with exposed joists", caption: "Whole-Home Rewiring — Rough-In" },
        { src: "/assets/clients/active/projects/project-15.jpg", alt: "Wall rough-in with conduit and junction boxes", caption: "Wall Wiring & Conduit Run" },
        { src: "/assets/clients/active/projects/project-16.jpg", alt: "New breaker panel directory schedule", caption: "Panel Schedule — New Breaker Directory" },
        { src: "/assets/clients/active/projects/project-17.jpg", alt: "Conduit rough-in with electrical panel", caption: "Conduit & Panel Rough-In" },
        { src: "/assets/clients/active/projects/project-18.jpg", alt: "ChargePoint EV charger ready for install", caption: "ChargePoint EV Charger" },
        { src: "/assets/clients/active/projects/project-19.jpg", alt: "EV charger and sub-panel installed in garage", caption: "EV Charger & Sub-Panel — Garage" },
        { src: "/assets/clients/active/projects/project-20.jpg", alt: "Outdoor EV charger pedestal installation", caption: "Outdoor EV Charger Pedestal" },
        { src: "/assets/clients/active/projects/project-21.jpg", alt: "Sub-panel and EV charger wall mount in garage", caption: "Sub-Panel & EV Charger — Garage Wall" },
        { src: "/assets/clients/active/projects/project-22.jpg", alt: "Ecobee smart thermostat in protective case", caption: "Smart Thermostat Installation" },
        { src: "/assets/clients/active/projects/project-23.jpg", alt: "Commercial parking garage EV charger stations", caption: "Commercial EV Charger Station" },
        { src: "/assets/clients/active/projects/project-24.jpg", alt: "Commercial parking garage EV chargers", caption: "Commercial EV Charger Station — Angle 2" },
        { src: "/assets/clients/active/projects/project-25.jpg", alt: "EV charger and sub-panel on cinder block wall", caption: "EV Charger & Sub-Panel Install" },
        { src: "/assets/clients/active/projects/project-26.jpg", alt: "EV charger mounted on concrete wall", caption: "EV Charger — Clean Concrete Wall Install" },
        { src: "/assets/clients/active/projects/project-27.jpg", alt: "EV charger installed on cinder block wall", caption: "EV Charger — Cinder Block Mount" },
        { src: "/assets/clients/active/projects/project-28.jpg", alt: "Conduit runs in attic crawl space", caption: "Attic Conduit Run" },
        { src: "/assets/clients/active/projects/project-29.jpg", alt: "Outdoor EV charger pedestal at residential home", caption: "Outdoor EV Pedestal — Residential" },
        { src: "/assets/clients/active/projects/project-30.jpg", alt: "Outdoor EV charger pedestal close-up", caption: "Outdoor EV Pedestal — Close-Up" },
        { src: "/assets/clients/active/projects/project-31.jpg", alt: "Exterior flood light on cedar siding", caption: "Exterior Flood Light Installation" },
        { src: "/assets/clients/active/projects/project-32.jpg", alt: "Exterior outlet box on cedar siding", caption: "Exterior Outlet Installation" },
        { src: "/assets/clients/active/projects/project-33.jpg", alt: "Exterior flood light close-up", caption: "Exterior Flood Light — Close-Up" },
        { src: "/assets/clients/active/projects/project-34.jpg", alt: "Video doorbell camera installation", caption: "Video Doorbell Installation" },
        { src: "/assets/clients/active/projects/project-35.jpg", alt: "Electrical panel upgrade in closet", caption: "Electrical Panel Upgrade" },
        { src: "/assets/clients/active/projects/project-36.jpg", alt: "Electrical panel open showing breakers", caption: "Electrical Panel — Breaker View" },
        { src: "/assets/clients/active/projects/project-37.jpg", alt: "Ecobee thermostat WiFi setup", caption: "Smart Thermostat — WiFi Setup" },
        { src: "/assets/clients/active/projects/project-38.jpg", alt: "Siemens sub-panel installation", caption: "Siemens Sub-Panel Install" },
      ],
    },
    fallback: "/assets/clients/active/hero.webp",
  },

  // ==========================================
  // HERO
  // ==========================================
  hero: {
    label: "Certified Tesla & EV Installer",
    badge: "Licensed • Insured • Bonded",
    headline: "Chicago's Certified",
    headlineAccent: "EV & Energy Specialist",
    subhead: "Tesla Powerwall, EV charger installation, and generator systems — installed by a certified professional. ICC certified for ComEd rebate programs.",
    features: [
      "Certified Tesla Installer",
      "ComEd Rebate Eligible",
      "Free Estimates"
    ],
    trustStrip: {
      enabled: true,
      items: [
        "Licensed, Insured & Bonded",
        "Certified Tesla Installer",
        "Certified Generac Installer",
        "ICC Certified — ComEd Rebates",
        "8+ Years Experience",
        "Serving All of Chicagoland",
      ],
    },
    guaranteeBadge: {
      enabled: false,
      text: "",
      subtext: "",
    },
    ctaPrimary: {
      text: "Get a Free Estimate",
      href: "#quote",
    },
  },

  // ==========================================
  // LEAD CAPTURE FORM
  // ==========================================
  form: {
    title: "Get a Free Electrical Estimate",
    subtitle: "Tell us about your project and we'll get back to you fast.",
    formTitle: "Get Your Free Estimate",
    formSubtitle: "No spam, no hassle — just honest pricing",
    responseBadge: "Fast Response Time",
    phoneCtaLabel: "Prefer to talk? Call us now:",
    submitText: "Get My Free Estimate",
    privacyText: "Your information is secure and never shared.",
    messagePlaceholder: "What's your project? (EV charger, Tesla Powerwall, generator, panel upgrade, rewiring, etc.)",
    consentText: "I agree to receive text messages and calls about my inquiry.",
    ghlWebhook: "https://services.leadconnectorhq.com/hooks/qrBiMHnXUxVqyOdJpqgV/webhook-trigger/tPgJgnt1eKvNZIQyHmtQ",
    successMessage: "Thanks — we got it. We'll be in touch shortly.",
    fields: [
      { name: "name", label: "Full Name", type: "text", placeholder: "Your Name", required: true },
      { name: "phone", label: "Phone Number", type: "tel", placeholder: "(872) 829-0535", required: true },
      { name: "email", label: "Email", type: "email", placeholder: "you@email.com", required: false },
    ],
    showServiceDropdown: true,
    features: [
      "Free Estimates",
      "Certified Tesla Installer",
      "ComEd Rebate Eligible",
      "Licensed & Insured",
    ],
  },

  // ==========================================
  // TRUST BADGES
  // ==========================================
  trustBadges: [
    { icon: "zap", text: "Certified Installer" },
    { icon: "star", text: "8+ Years Experience" },
    { icon: "shield", text: "ICC Certified" },
    { icon: "check", text: "Licensed & Bonded" },
  ],

  // ==========================================
  // SERVICES
  // ==========================================
  services: {
    title: "Our Electrical Services",
    subtitle: "Certified EV, energy storage, and electrical services for Chicago homes and businesses",
    viewAllText: "View All Services",
    viewAllLink: "services.html",
    learnMoreText: "Learn More",
    items: [
      {
        id: "ev-charger-installation",
        title: "EV Charger Installation",
        shortDesc: "Level 2 EV charger installation for Tesla, Ford, Rivian, and all electric vehicles.",
        fullDesc: "Charge your EV at home with a professional Level 2 charger installation. We install all major brands — Tesla Wall Connector, ChargePoint, JuiceBox, and more. Certified installer with ICC certification for ComEd rebate eligibility. Faster charging, done right.",
        icon: "zap",
        image: "/assets/clients/active/services/ev-charger-installation.webp",
        features: [
          "All EV Brands Supported",
          "Level 2 — 240V Installation",
          "ComEd Rebate Eligible",
          "Permit & Inspection Handled",
        ],
      },
      {
        id: "tesla-powerwall-battery-storage",
        title: "Tesla Powerwall & Battery Storage",
        shortDesc: "Certified Tesla Powerwall installer — whole-home battery backup and energy storage.",
        fullDesc: "Keep your home powered during outages and maximize your solar investment with a Tesla Powerwall. As a certified Tesla installer, we handle the complete installation — from electrical prep to commissioning. Store energy, reduce bills, and gain energy independence.",
        icon: "shield",
        image: "/assets/clients/active/services/tesla-powerwall-battery-storage.jpg",
        features: [
          "Certified Tesla Installer",
          "Whole-Home Battery Backup",
          "Solar Integration",
          "Energy Independence",
        ],
      },
      {
        id: "generator-installation",
        title: "Generac Generator Installation",
        shortDesc: "Certified Generac installer — whole-home backup generators (14kW–28kW) for uninterrupted power.",
        fullDesc: "Never lose power again. As a Certified Generac Generator Installer, we install Generac whole-home backup generators that kick in automatically when the grid goes down. From 14kW to 28kW systems, we size the right generator for your home. Full installation including automatic transfer switch, gas connection, and permit.",
        icon: "zap",
        image: "/assets/clients/active/services/generator-installation.png",
        features: [
          "Generac Certified",
          "Automatic Transfer Switch",
          "Whole-Home Backup",
          "Permit & Inspection Included",
        ],
      },
      {
        id: "electrical-panel-upgrades",
        title: "Electrical Panel Upgrades",
        shortDesc: "Panel upgrades to support EV chargers, modern appliances, and increased electrical demand.",
        fullDesc: "Older panels can't handle today's electrical demands — EV chargers, heat pumps, and modern appliances need more power. We upgrade your panel to 200A or 400A service, ensuring your home is safe, up to code, and ready for the future.",
        icon: "settings",
        image: "/assets/clients/active/services/electrical-panel-upgrades.webp",
        features: [
          "200A & 400A Upgrades",
          "EV-Ready Panels",
          "Code Compliance",
          "Permit & Inspection",
        ],
      },
      {
        id: "whole-home-rewiring",
        title: "Whole-Home Rewiring",
        shortDesc: "Complete home rewiring to replace outdated or unsafe wiring throughout your home.",
        fullDesc: "Old knob-and-tube or aluminum wiring is a fire hazard and won't support modern electrical needs. We rewire your entire home with modern copper wiring, bringing everything up to code and keeping your family safe.",
        icon: "tool",
        image: "/assets/clients/active/services/whole-home-rewiring.webp",
        features: [
          "Knob-and-Tube Replacement",
          "Aluminum Wiring Upgrade",
          "Full Code Compliance",
          "Modern Copper Wiring",
        ],
      },
      {
        id: "electrical-repair-troubleshooting",
        title: "Electrical Repair & Troubleshooting",
        shortDesc: "Expert diagnosis and repair for electrical problems — flickering lights, tripped breakers, and more.",
        fullDesc: "Electrical problems don't fix themselves and can be dangerous. We diagnose and repair all electrical issues — from flickering lights and tripped breakers to dead outlets and wiring faults. Fast, safe, professional repairs.",
        icon: "wrench",
        image: "/assets/clients/active/services/electrical-repair-troubleshooting.webp",
        features: [
          "Expert Diagnosis",
          "Breaker & Outlet Repair",
          "Wiring Fault Detection",
          "Same-Day Available",
        ],
      },
      {
        id: "security-camera-installation",
        title: "Security Camera Installation",
        shortDesc: "Professional home security camera installation with clean wiring and optimal placement.",
        fullDesc: "Protect your home with professionally installed security cameras. We handle mounting, wiring, and setup for all major brands. Clean installation with hidden wiring and optimal camera placement for maximum coverage.",
        icon: "shield",
        image: "/assets/clients/active/services/security-camera-installation.webp",
        features: [
          "All Major Brands",
          "Hidden Wiring",
          "Optimal Placement",
          "Full System Setup",
        ],
      },
      {
        id: "ceiling-fan-fixture-installation",
        title: "Ceiling Fan & Light Fixture Installation",
        shortDesc: "Professional ceiling fan, chandelier, and light fixture installation.",
        fullDesc: "Upgrade your home's lighting and comfort with professionally installed ceiling fans, chandeliers, recessed lights, and fixtures. We handle the wiring, mounting, and finish — clean work, no mess, and everything up to code.",
        icon: "home",
        image: "/assets/clients/active/services/ceiling-fan-fixture-installation.webp",
        features: [
          "Ceiling Fans",
          "Chandeliers & Pendants",
          "Recessed Lighting",
          "Dimmer Switches",
        ],
      },
      {
        id: "smoke-detector-safety-installations",
        title: "Smoke Detector & Safety Installations",
        shortDesc: "Hardwired smoke detectors, CO detectors, and exhaust fan installations.",
        fullDesc: "Keep your family safe with properly installed, hardwired smoke and carbon monoxide detectors. We also install bathroom exhaust fans, doorbell systems, and other safety devices. Code-compliant installation for Chicago homes.",
        icon: "check",
        image: "/assets/clients/active/services/smoke-detector-safety-installations.webp",
        features: [
          "Hardwired Smoke Detectors",
          "CO Detector Installation",
          "Exhaust Fan Installation",
          "Code Compliant",
        ],
      },
    ],
  },

  // ==========================================
  // PROCESS / HOW IT WORKS
  // ==========================================
  process: {
    label: "How It Works",
    title: "Simple & Easy Process",
    steps: [
      {
        number: "1",
        title: "Call or Request a Quote",
        desc: "Tell us about your project. We'll discuss your needs, check rebate eligibility, and schedule a time that works for you.",
      },
      {
        number: "2",
        title: "We Install It Right",
        desc: "Our licensed electrician arrives with everything needed. Clean, professional installation — permits and inspections handled.",
      },
      {
        number: "3",
        title: "Power On",
        desc: "We test everything, walk you through the system, and make sure you're 100% satisfied before we leave.",
      },
    ],
  },

  // ==========================================
  // WHY CHOOSE US
  // ==========================================
  whyUs: {
    title: "Why Choose Daniel's Imperial Electric",
    subtitle: "Certified installer. Quality work is our standard.",
    image: "/assets/clients/active/why-us.webp",
    items: [
      {
        icon: "home",
        title: "Your Trusted Local Electricians",
        description: "We're a local Chicago electrical company that treats every home and business like our own. Your trust is our foundation.",
      },
      {
        icon: "zap",
        title: "Fast and Reliable Service",
        description: "We show up on time, get the job done right, and don't leave until the work is complete. Fast response, reliable results.",
      },
      {
        icon: "check",
        title: "Transparent Pricing",
        description: "No hidden fees, no surprises. We give you an honest quote upfront so you know exactly what to expect before we start.",
      },
      {
        icon: "star",
        title: "Clean and Respectful Work",
        description: "We respect your space. Clean installs, no mess left behind, and we treat your property with care every time.",
      },
      {
        icon: "shield",
        title: "Top Quality at Competitive Prices",
        description: "We provide top quality work at competitive prices. Premium results without the premium markup.",
      },
      {
        icon: "users",
        title: "Customer Satisfaction Guaranteed",
        description: "Your satisfaction is our priority. We stand behind every job and won't rest until you're completely happy with the work.",
      },
    ],
  },

  // ==========================================
  // OUR WORK / GALLERY
  // ==========================================
  ourWork: {
    label: "Our Work",
    title: "Recent Installations",
    subtitle: "See the quality and precision we bring to every project.",
  },

  // ==========================================
  // STATISTICS
  // ==========================================
  stats: [
    { value: "8+", label: "Years Experience" },
    { value: "5.0", label: "Google Rating" },
    { value: "ICC", label: "Certified" },
    { value: "100%", label: "Satisfaction Rate" },
  ],

  // ==========================================
  // REVIEWS
  // ==========================================
  reviews: {
    title: "What Chicago Homeowners Say",
    subtitle: "Real reviews from real customers",
    google: {
      enabled: true,
      rating: 5.0,
      reviewCount: 5,
      url: "",
    },
    items: [
      {
        text: "Daniel installed our Tesla Wall Connector and it was seamless. He handled the permit, upgraded our panel, and had it running the same day. Highly recommend.",
        author: "Google Reviewer",
        location: "Chicago, IL",
        rating: 5,
        avatar: null,
      },
      {
        text: "Professional, on time, and the work was clean. Had our Generac generator installed and running in one day. Great communication throughout.",
        author: "Google Reviewer",
        location: "Skokie, IL",
        rating: 5,
        avatar: null,
      },
      {
        text: "Quality work is exactly right. Daniel rewired our entire house and the panel upgrade was done perfectly. Licensed, knows the code, and stands behind his work.",
        author: "Google Reviewer",
        location: "Evanston, IL",
        rating: 5,
        avatar: null,
      },
    ],
  },

  // ==========================================
  // CTA SECTION
  // ==========================================
  cta: {
    title: "Ready to Go Electric?",
    subtitle: "EV chargers, Tesla Powerwall, generators — call for a free estimate today.",
    buttonText: "Get a Free Estimate",
    buttonLink: "contact.html",
    showPhone: true,
  },

  // ==========================================
  // FAQ
  // ==========================================
  faq: {
    title: "Frequently Asked Questions",
    subtitle: "Got questions? We've got answers.",
    items: [
      {
        question: "How much does it cost to install an EV charger at home?",
        answer: "Level 2 EV charger installation typically ranges from $800-$2,500 depending on your panel capacity and installation location. We provide free estimates and can help you apply for ComEd rebates to reduce the cost.",
      },
      {
        question: "Are you a certified Tesla installer?",
        answer: "Yes. We are a certified installer for Tesla products including Powerwall battery backup systems, Wall Connector EV chargers, and solar integration.",
      },
      {
        question: "What are ComEd rebates and do I qualify?",
        answer: "ComEd offers rebates for qualifying electrical upgrades including EV charger installations. We are ICC certified for ComEd rebate programs in Illinois, which means we can help you maximize your savings.",
      },
      {
        question: "Do I need a panel upgrade for an EV charger?",
        answer: "It depends on your current panel capacity. Many older homes have 100A or 150A panels that may need an upgrade to support a Level 2 charger. We'll assess your panel during the free estimate and let you know.",
      },
      {
        question: "How long does a Tesla Powerwall installation take?",
        answer: "Most Powerwall installations are completed in one day. The process includes mounting the unit, connecting to your electrical panel, and configuring the Tesla app for monitoring.",
      },
      {
        question: "What areas do you serve?",
        answer: "We serve all of Chicago and the suburbs including Skokie, Evanston, Oak Park, Naperville, Schaumburg, Aurora, Crystal Lake, Bolingbrook, and surrounding areas.",
      },
      {
        question: "Are you licensed and insured?",
        answer: "Yes. Daniel's Imperial Electric LLC is fully licensed, insured, and bonded in the state of Illinois with 8+ years of experience.",
      },
    ],
  },

  // ==========================================
  // FOOTER
  // ==========================================
  footer: {
    description: "Chicago's certified Tesla and EV charger installation specialist. Powerwall battery storage, generator installation, panel upgrades, and complete electrical services. ICC certified for ComEd rebates.",
    copyrightYear: new Date().getFullYear(),
    quickLinksTitle: "Quick Links",
    quickLinks: [
      { label: "Home", href: "/" },
      { label: "Our Work", href: "our-work.html" },
      { label: "Contact", href: "contact.html" },
    ],
    contactTitle: "Contact Us",
    socialTitle: "Follow Us",
    socialLinks: [
      { platform: "facebook", url: "", icon: "facebook" },
      { platform: "instagram", url: "", icon: "instagram" },
      { platform: "google", url: "", icon: "google" },
    ],
  },

  // ==========================================
  // ABOUT PAGE
  // ==========================================
  about: {
    title: "About Daniel's Imperial Electric",
    subtitle: "Certified EV & energy storage specialists serving Chicago, IL",
    story: {
      title: "Our Story",
      image: null,
      paragraphs: [
        "Daniel's Imperial Electric LLC is a licensed electrical company based in Chicago, Illinois. We specialize in EV charger installation, Tesla Powerwall battery storage, generator systems, and residential electrical services.",
        "As a certified Tesla installer and ICC certified contractor for ComEd rebate programs, we bring specialized expertise that most electricians can't match. Our focus on EV charging and energy storage means deeper knowledge and better results for homeowners making the switch to electric.",
        "With 8+ years of experience, full licensing, insurance, and bonding, quality work is our standard. We handle permits, inspections, and rebate paperwork so you can focus on enjoying your new system.",
      ],
    },
    values: {
      title: "Why We're Different",
      subtitle: "What sets Daniel's Imperial Electric apart",
      items: [
        {
          icon: "zap",
          title: "Certified Specialist",
          description: "Factory-certified Tesla installer and ICC certified for ComEd rebate programs. Specialized expertise for modern electrical needs.",
        },
        {
          icon: "star",
          title: "Quality",
          description: "8+ years of experience, clean installations, and work that meets the highest standards. Quality work is our standard.",
        },
        {
          icon: "check",
          title: "Trust",
          description: "Licensed, insured, and bonded. We handle permits, inspections, and stand behind every installation.",
        },
      ],
    },
    team: {
      title: "Meet Our Team",
      subtitle: "The experts behind Daniel's Imperial Electric",
      showTeam: false,
      members: [],
    },
  },

  // ==========================================
  // CONTACT PAGE
  // ==========================================
  contact: {
    title: "Contact Us",
    subtitle: "Ready for your EV charger or energy upgrade? Let's talk.",
    showMap: true,
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d380511.98735025595!2d-88.01!3d41.83!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2c3cd0f4cbed%3A0xafe0a6ad09c0c000!2sChicago%2C%20IL!5e0!3m2!1sen!2sus",
    infoTitle: "Get In Touch",
    infoSubtitle: "Have a question about EV chargers, Powerwall, or electrical work? We'd love to help.",
    hoursTitle: "Business Hours",
    hours: [
      { days: "Monday - Sunday", time: "7:00 AM - 5:00 PM" },
      { days: "Sunday", time: "Closed" },
    ],
    emergencyNote: "Call us for free estimates and consultations",
    formTitle: "Request an Estimate",
    formSubtitle: "We'll get back to you as soon as possible",
    formFields: [
      { name: "name", type: "text", placeholder: "Your Name", required: true, halfWidth: true },
      { name: "phone", type: "tel", placeholder: "Phone Number", required: true, halfWidth: true },
      { name: "email", type: "email", placeholder: "Email Address", required: false, halfWidth: false },
      { name: "address", type: "text", placeholder: "Service Address", required: false, halfWidth: false },
      { name: "message", type: "textarea", placeholder: "What's your project? (EV charger, Tesla Powerwall, generator, panel upgrade, etc.)", required: false, halfWidth: false, rows: 4 },
    ],
    formSubmitText: "Request Estimate",
  },

  // ==========================================
  // SERVICE AREA PAGE
  // ==========================================
  serviceArea: {
    title: "Areas We Serve",
    subtitle: "Electrical services throughout Chicago and the Chicagoland suburbs",
    description: "We provide professional electrical services throughout Chicago and the greater Chicagoland area. If you don't see your area listed, give us a call — we may still be able to help!",
    showMap: true,
    mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d380511.98735025595!2d-88.01!3d41.83!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2c3cd0f4cbed%3A0xafe0a6ad09c0c000!2sChicago%2C%20IL!5e0!3m2!1sen!2sus",
    primaryAreas: {
      title: "Primary Service Areas",
      subtitle: "Same-day service typically available",
      areas: [
        "Chicago",
        "Skokie",
        "Evanston",
        "Oak Park",
      ],
    },
    secondaryAreas: {
      title: "Extended Service Areas",
      subtitle: "Service available throughout Chicagoland",
      areas: [
        "Naperville",
        "Schaumburg",
        "Aurora",
        "Bolingbrook",
      ],
    },
    ctaTitle: "Not Sure If We Service Your Area?",
    ctaSubtitle: "Give us a call and we'll let you know!",
  },

  // ==========================================
  // INDIVIDUAL SERVICE AREA PAGES
  // ==========================================
  serviceAreas: [
    {
      id: "chicago",
      name: "Chicago",
      slug: "chicago",
      headline: "EV Charger & Electrical Services in Chicago, IL",
      metaTitle: "EV Charger Installer Chicago, IL | Daniel's Imperial Electric",
      metaDescription: "Chicago EV charger installation, Tesla Powerwall, panel upgrades, and electrical troubleshooting for bungalows, flats, condos, and detached garages.",
      description: "Daniel's Imperial Electric serves all of Chicago with certified EV charger installation, Tesla Powerwall, generator systems, panel upgrades, and complete electrical services.",
      priorityServices: [
        "ev-charger-installation",
        "electrical-panel-upgrades",
        "tesla-powerwall-battery-storage",
        "electrical-repair-troubleshooting",
      ],
      localContent: {
        label: "Chicago Focus",
        title: "Electrical Upgrades for Chicago Bungalows, Flats, and Detached Garages",
        summary: "Chicago projects usually hinge on panel capacity, detached garage runs, permit coordination, and clean work in older homes where every wall opening matters.",
        intro: [
          "Chicago homeowners usually call us when they want modern electrical capacity without turning the house into a major demolition project. That means planning around older service equipment, masonry basements, finished interiors, condo parking setups, and detached garages off the alley.",
          "Our advantage is not only installing the equipment. It is building a practical plan for the property, handling the permit path, and making sure the charger, panel, backup system, or repair work is ready for daily use long after inspection day."
        ],
        considerations: [
          {
            title: "Detached garage charging plans",
            description: "Many Chicago EV charger installs require a thoughtful route from the main house to an alley garage, with attention to trenching, conduit protection, and future vehicle upgrades."
          },
          {
            title: "Older service equipment and capacity",
            description: "Bungalows, two-flats, and older condos often need load calculations, subpanel decisions, or full service upgrades before a Level 2 charger or battery system makes sense."
          },
          {
            title: "Permit-ready electrical scope",
            description: "City work moves faster when the panel, circuit sizing, disconnects, and equipment layout are planned correctly from day one instead of patched together after inspection comments."
          },
          {
            title: "Clean installs in finished spaces",
            description: "We prioritize neat runs, minimal disruption, and code-compliant placement in basements, utility rooms, and garages that homeowners still use every day."
          }
        ],
        serviceLabel: "Popular Chicago Projects",
        serviceTitle: "The Services Chicago Homeowners Ask Us For Most",
        serviceIntro: "Most Chicago demand centers on home EV charging, service-capacity upgrades, Tesla Powerwall planning, and troubleshooting tied to older electrical systems.",
        faqLabel: "Chicago Questions",
        faqTitle: "Planning EV Charging and Panel Work in Chicago",
        faqIntro: "These are the city-specific questions we hear most often when homeowners are comparing electricians for chargers, service upgrades, and code-driven repair work.",
        faqs: [
          {
            question: "Can you install an EV charger in a Chicago detached garage?",
            answer: "Yes. Many Chicago projects involve detached garages, which means we plan the feeder route, trenching or exterior conduit path, disconnect placement, and panel capacity before installation starts."
          },
          {
            question: "Do older Chicago homes usually need a panel upgrade for Level 2 charging?",
            answer: "Not always, but many bungalows, two-flats, and older condos need a load calculation before a charger is added. Some homes can use load management, while others need a panel or service upgrade to do the job safely."
          },
          {
            question: "Do you handle Chicago permits and inspections?",
            answer: "Yes. When the project requires permitting, we build the scope around code compliance from the start so the charger, panel work, or backup system is inspection-ready."
          }
        ]
      },
      features: [
        "Certified Tesla installer",
        "ComEd rebate eligible",
        "Licensed & insured",
        "Free estimates",
      ],
      neighborhoods: [
        "Lincoln Park",
        "Lakeview",
        "Logan Square",
        "Wicker Park",
      ],
      mapEmbedUrl: "https://www.google.com/maps?q=Chicago,+IL&output=embed",
    },
    {
      id: "skokie",
      name: "Skokie",
      slug: "skokie",
      headline: "EV Charger & Electrical Services in Skokie, IL",
      metaTitle: "EV Charger Installation Skokie, IL | Daniel's Imperial Electric",
      metaDescription: "Skokie EV charger installation, panel upgrades, generators, and electrical service for attached garages, driveways, and mid-century homes.",
      description: "Professional EV charger installation, Tesla Powerwall, and electrical services in Skokie. Certified installer with ComEd rebate eligibility.",
      priorityServices: [
        "ev-charger-installation",
        "electrical-panel-upgrades",
        "generator-installation",
        "electrical-repair-troubleshooting",
      ],
      localContent: {
        label: "Skokie Focus",
        title: "Practical Electrical Upgrades for Skokie Homes and Garages",
        summary: "Skokie homeowners usually want fast, clean upgrades that fit attached garages, driveway parking, and mid-century electrical systems without unnecessary scope creep.",
        intro: [
          "A lot of Skokie work comes down to useful daily upgrades: faster home charging, more panel capacity, cleaner outdoor power planning, and backup options that fit the house instead of overpowering it.",
          "Because many homes in Skokie are practical family houses rather than full gut rehabs, the right approach is usually careful load planning, straightforward permitting, and an installation layout that stays neat in garages, basements, and side-yard utility areas."
        ],
        considerations: [
          {
            title: "Attached garage charger placement",
            description: "Skokie homes often have an attached garage or short driveway setup, so charger height, parking orientation, and cable reach matter as much as the breaker size."
          },
          {
            title: "Mid-century panel limitations",
            description: "Ranch, split-level, and mid-century homes frequently need a load calculation before adding a Level 2 charger, backup equipment, or multiple new circuits."
          },
          {
            title: "Outdoor equipment planning",
            description: "For homes without an ideal indoor mounting spot, we plan weather-ready charger and disconnect locations that stay accessible without cluttering the facade."
          },
          {
            title: "Backup power for everyday reliability",
            description: "Generator and battery conversations in Skokie are usually about keeping refrigeration, sump systems, internet, and core household loads running when outages happen."
          }
        ],
        serviceLabel: "Popular Skokie Services",
        serviceTitle: "High-Value Electrical Work for Daily Use",
        serviceIntro: "In Skokie, the strongest demand is for home charging, panel capacity upgrades, backup power, and electrical diagnosis that removes the guesswork for homeowners.",
        faqLabel: "Skokie Questions",
        faqTitle: "What Skokie Homeowners Usually Ask Before Booking",
        faqIntro: "These are the planning questions that come up most often when a Skokie property needs more electrical capacity or a charger that works cleanly with the garage layout.",
        faqs: [
          {
            question: "Do I need 200-amp service for a Skokie EV charger install?",
            answer: "Not automatically. We start with a load calculation and the existing panel condition. Some homes can support charging with load management or a focused circuit upgrade, while others truly need a larger panel."
          },
          {
            question: "Can you install a charger outside near the driveway?",
            answer: "Yes. If the garage or interior wall is not the best fit, we can design an outdoor installation with the right equipment placement, weather protection, and cable reach for daily use."
          },
          {
            question: "Can panel work and charger installation be handled together?",
            answer: "Yes. In many Skokie homes, doing both in one coordinated scope is the cleanest way to avoid rework and make sure the electrical system is ready for the charger from day one."
          }
        ]
      },
      features: [
        "Certified Tesla installer",
        "ComEd rebate eligible",
        "Same-day available",
        "Free estimates",
      ],
      neighborhoods: [
        "Downtown Skokie",
        "Old Orchard",
        "East Skokie",
        "West Skokie",
      ],
      mapEmbedUrl: "https://www.google.com/maps?q=Skokie,+IL&output=embed",
    },
    {
      id: "evanston",
      name: "Evanston",
      slug: "evanston",
      headline: "EV Charger & Electrical Services in Evanston, IL",
      metaTitle: "EV Charger and Electrical Services Evanston, IL | Daniel's Imperial Electric",
      metaDescription: "Evanston EV chargers, rewiring, panel upgrades, and Tesla Powerwall installation for older homes, detached garages, and thoughtful remodels.",
      description: "Expert EV charger and electrical services in Evanston. Tesla Powerwall, generator installation, panel upgrades, and more.",
      priorityServices: [
        "ev-charger-installation",
        "whole-home-rewiring",
        "electrical-panel-upgrades",
        "tesla-powerwall-battery-storage",
      ],
      localContent: {
        label: "Evanston Focus",
        title: "Electrical Planning for Evanston's Older Housing Stock and Garage Layouts",
        summary: "Evanston projects often involve older wiring, detached garages, careful finish preservation, and smart choices about whether load management or a full upgrade is the better answer.",
        intro: [
          "Evanston homeowners often need modern electrical performance in houses that were never designed for EV charging, battery backup, or today's appliance loads. That is where careful panel planning and clear wiring strategy matter more than a generic install checklist.",
          "We are a strong fit when the house has age, character, tight garage logistics, or a remodel in progress. The goal is to add capacity and reliability without making the project messier or more invasive than it has to be."
        ],
        considerations: [
          {
            title: "Older-home wiring strategy",
            description: "Some Evanston properties need a broader plan that considers existing branch circuits, grounding, service condition, and how future upgrades will connect to the current system."
          },
          {
            title: "Historic finishes and minimal disruption",
            description: "When walls, trim, and finishes matter, installation planning has to account for routing, access points, and where electrical work can be completed cleanly."
          },
          {
            title: "Detached garages and long runs",
            description: "A charger plan for an Evanston alley garage often depends on distance, conduit path, and whether the panel can support the load without compromising other circuits."
          },
          {
            title: "Load management versus full service change",
            description: "The best answer is not always a bigger panel. We evaluate when a managed load setup works well and when a true service upgrade is the smarter long-term move."
          }
        ],
        serviceLabel: "Popular Evanston Projects",
        serviceTitle: "Electrical Work That Fits Older Homes",
        serviceIntro: "Evanston demand leans toward EV charging, rewiring strategy, panel upgrades, and energy-storage planning where the house needs a thoughtful path forward rather than a one-size-fits-all installation.",
        faqLabel: "Evanston Questions",
        faqTitle: "How We Scope Electrical Work in Evanston",
        faqIntro: "These are the recurring questions we hear from Evanston homeowners weighing chargers, rewiring, and electrical upgrades in older homes.",
        faqs: [
          {
            question: "Can you add an EV charger without opening up half the house?",
            answer: "In many cases, yes. The first step is finding the cleanest route from the panel to the charger location and deciding whether the current service can support the load without major rework."
          },
          {
            question: "When does an older Evanston home need rewiring instead of just a new circuit?",
            answer: "If the existing wiring, grounding, or branch-circuit condition is holding the system back, a larger plan may be smarter than stacking new circuits onto an already-limited setup."
          },
          {
            question: "Are detached garages common for EV charger installs in Evanston?",
            answer: "Yes. We regularly plan around alley-access garages where distance, conduit path, and panel capacity are the main factors that decide the final installation approach."
          }
        ]
      },
      features: [
        "Certified Tesla installer",
        "ComEd rebate eligible",
        "Licensed & insured",
        "Free estimates",
      ],
      neighborhoods: [
        "Downtown Evanston",
        "North Evanston",
        "South Evanston",
        "Central Street",
      ],
      mapEmbedUrl: "https://www.google.com/maps?q=Evanston,+IL&output=embed",
    },
    {
      id: "oak-park",
      name: "Oak Park",
      slug: "oak-park",
      headline: "EV Charger & Electrical Services in Oak Park, IL",
      metaTitle: "Electrician for EV Chargers and Panel Upgrades in Oak Park, IL",
      metaDescription: "Oak Park EV charger installation, panel upgrades, rewiring, and electrical modernization for vintage homes, garages, and renovation projects.",
      description: "Professional EV charger installation and electrical services in Oak Park. Certified Tesla installer, panel upgrades, and home rewiring.",
      priorityServices: [
        "whole-home-rewiring",
        "electrical-panel-upgrades",
        "ev-charger-installation",
        "electrical-repair-troubleshooting",
      ],
      localContent: {
        label: "Oak Park Focus",
        title: "Electrical Modernization for Oak Park's Vintage Housing Stock",
        summary: "Oak Park work usually rewards careful planning: older wiring, plaster walls, finished basements, detached garages, and remodel-driven electrical scope that has to stay clean and code-ready.",
        intro: [
          "Oak Park homes often need more than a single new circuit. They need a plan that respects the age of the property while still delivering modern performance for EV charging, kitchen loads, HVAC upgrades, lighting, and daily safety.",
          "We are especially useful when the electrical scope touches vintage construction, panel limitations, or renovation sequencing. That is where planning for access, finish protection, and code compliance prevents a small upgrade from turning into a frustrating project."
        ],
        considerations: [
          {
            title: "Old-home electrical modernization",
            description: "Oak Park houses often benefit from a broader look at panel condition, grounding, legacy wiring, and how future loads will fit before new equipment is added."
          },
          {
            title: "Minimal wall and finish disruption",
            description: "Plaster, trim, and detailed interiors demand routing choices that protect the home while still delivering a safe, inspection-ready installation."
          },
          {
            title: "Garage and side-drive charging layouts",
            description: "When an EV charger is headed to an older garage or a side-drive parking area, cable reach, conduit placement, and service capacity need to be mapped up front."
          },
          {
            title: "Permit-ready upgrades for remodels",
            description: "If other home improvements are already underway, we scope electrical work so panel upgrades, rewiring, and new circuits support the larger renovation instead of competing with it."
          }
        ],
        serviceLabel: "Popular Oak Park Services",
        serviceTitle: "Where Oak Park Homeowners Usually Start",
        serviceIntro: "The strongest Oak Park demand is for panel upgrades, targeted rewiring, EV charging, and troubleshooting where older construction changes the best installation approach.",
        faqLabel: "Oak Park Questions",
        faqTitle: "Common Planning Questions for Oak Park Homes",
        faqIntro: "These are the issues that come up most often when an Oak Park property needs modern electrical capacity without careless work in an older home.",
        faqs: [
          {
            question: "Do older Oak Park homes often need rewiring before major upgrades?",
            answer: "Sometimes. It depends on the condition of the existing wiring, grounding, and panel. The right answer is based on what the house can safely support today and what you plan to add next."
          },
          {
            question: "Can you install an EV charger in an older garage without making the setup look messy?",
            answer: "Yes. We plan the charger location, conduit path, and breaker work together so the final installation is practical, code-compliant, and visually clean."
          },
          {
            question: "Is a panel upgrade usually part of larger Oak Park remodel work?",
            answer: "Often, yes. If the home is adding HVAC load, kitchen upgrades, or EV charging, it usually makes sense to evaluate panel capacity and grounding before the renovation gets too far along."
          }
        ]
      },
      features: [
        "Certified Tesla installer",
        "Older home specialists",
        "Licensed & insured",
        "Free estimates",
      ],
      neighborhoods: [
        "Downtown Oak Park",
        "Frank Lloyd Wright District",
        "North Oak Park",
        "South Oak Park",
      ],
      mapEmbedUrl: "https://www.google.com/maps?q=Oak+Park,+IL&output=embed",
    },
    {
      id: "norridge",
      name: "Norridge",
      slug: "norridge",
      headline: "EV Charger & Electrical Services in Norridge, IL",
      description: "Expert electrical services in Norridge. EV charger installation, generator systems, panel upgrades, and certified Tesla installation.",
      features: [
        "Certified Tesla installer",
        "ComEd rebate eligible",
        "Same-day available",
        "Free estimates",
      ],
      neighborhoods: [
        "Norridge Commons",
        "Harlem Irving",
        "Central Norridge",
        "South Norridge",
      ],
      mapEmbedUrl: "https://www.google.com/maps?q=Norridge,+IL&output=embed",
    },
    {
      id: "niles",
      name: "Niles",
      slug: "niles",
      headline: "EV Charger & Electrical Services in Niles, IL",
      description: "Professional EV charger and electrical services in Niles. Tesla Powerwall, generators, panel upgrades, and complete electrical work.",
      features: [
        "Certified Tesla installer",
        "ComEd rebate eligible",
        "Licensed & insured",
        "Free estimates",
      ],
      neighborhoods: [
        "Golf Mill",
        "Grennan Heights",
        "Jonquil Terrace",
        "North Niles",
      ],
      mapEmbedUrl: "https://www.google.com/maps?q=Niles,+IL&output=embed",
    },
    {
      id: "elmwood-park",
      name: "Elmwood Park",
      slug: "elmwood-park",
      headline: "EV Charger & Electrical Services in Elmwood Park, IL",
      description: "Expert electrical services in Elmwood Park. EV charger installation, Tesla Powerwall, generator systems, and panel upgrades.",
      features: [
        "Certified Tesla installer",
        "ComEd rebate eligible",
        "Quality workmanship",
        "Free estimates",
      ],
      neighborhoods: [
        "Central Elmwood Park",
        "North Elmwood Park",
        "South Elmwood Park",
        "Grand Avenue",
      ],
      mapEmbedUrl: "https://www.google.com/maps?q=Elmwood+Park,+IL&output=embed",
    },
    {
      id: "park-ridge",
      name: "Park Ridge",
      slug: "park-ridge",
      headline: "EV Charger & Electrical Services in Park Ridge, IL",
      metaTitle: "EV Charger, Generator, and Panel Upgrades in Park Ridge, IL",
      metaDescription: "Park Ridge electrician for EV chargers, backup power, panel upgrades, and clean electrical installations in garages, basements, and remodels.",
      description: "Professional EV charger installation and electrical services in Park Ridge. Certified Tesla installer with ComEd rebate eligibility.",
      priorityServices: [
        "ev-charger-installation",
        "generator-installation",
        "tesla-powerwall-battery-storage",
        "electrical-panel-upgrades",
      ],
      localContent: {
        label: "Park Ridge Focus",
        title: "Clean Electrical Installations for Park Ridge Homes, Garages, and Backup Power Plans",
        summary: "Park Ridge projects often center on clean garage installs, stronger service capacity, and backup power planning for homeowners who want the work to feel polished from day one.",
        intro: [
          "Park Ridge homeowners usually want more than a contractor-grade install. They want equipment placed cleanly, panel work that leaves room for future upgrades, and a layout that looks intentional in garages, basements, and utility spaces.",
          "That makes Park Ridge a strong fit for our style of work: thoughtful EV charger placement, service-capacity planning, generator and battery backup conversations, and electrical upgrades that support remodeling without creating avoidable rework."
        ],
        considerations: [
          {
            title: "Finished-garage charger installs",
            description: "A good Park Ridge charger install has to work visually as well as electrically, especially when the garage is finished, organized, or used as an extension of the home."
          },
          {
            title: "Service capacity for larger homes",
            description: "As homes add EV charging, upgraded HVAC, kitchen equipment, and backup systems, panel and service planning becomes the key step that keeps the whole project moving."
          },
          {
            title: "Generator and battery backup planning",
            description: "Backup power projects work best when transfer strategy, essential loads, and future expansion are decided before equipment is mounted."
          },
          {
            title: "Remodel-friendly electrical scope",
            description: "For homes already improving kitchens, basements, or garages, we align electrical upgrades with the broader project so the work does not have to be reopened later."
          }
        ],
        serviceLabel: "Popular Park Ridge Services",
        serviceTitle: "High-Demand Electrical Upgrades in Park Ridge",
        serviceIntro: "Park Ridge demand is strongest around clean EV charger installs, backup power strategy, panel capacity upgrades, and electrical work that supports larger home improvements.",
        faqLabel: "Park Ridge Questions",
        faqTitle: "What Park Ridge Homeowners Ask Before They Upgrade",
        faqIntro: "These are the questions we hear most often when homeowners in Park Ridge are comparing options for EV charging, backup power, and service-capacity work.",
        faqs: [
          {
            question: "Can you keep an EV charger install looking clean in a finished garage?",
            answer: "Yes. Charger height, cable reach, conduit path, and disconnect placement are all part of the design conversation when the garage is a finished or highly visible space."
          },
          {
            question: "Should backup power planning happen before or after a panel upgrade?",
            answer: "Usually before. It is much easier to scope the panel correctly when the long-term plan already includes a generator or battery system."
          },
          {
            question: "Do larger Park Ridge homes often need more electrical capacity for modern upgrades?",
            answer: "Yes, especially when EV charging, HVAC, kitchen loads, or backup equipment are being added together. A load calculation helps determine whether the current service can support the plan or needs to be expanded."
          }
        ]
      },
      features: [
        "Certified Tesla installer",
        "ComEd rebate eligible",
        "Licensed & insured",
        "Free estimates",
      ],
      neighborhoods: [
        "Uptown Park Ridge",
        "South Park",
        "Maine Park",
        "Wildwood",
      ],
      mapEmbedUrl: "https://www.google.com/maps?q=Park+Ridge,+IL&output=embed",
    },
    {
      id: "rosemont",
      name: "Rosemont",
      slug: "rosemont",
      headline: "EV Charger & Electrical Services in Rosemont, IL",
      description: "Expert electrical services in Rosemont. EV charger installation, generator systems, and commercial electrical work.",
      features: [
        "Certified Tesla installer",
        "Commercial & residential",
        "Licensed & insured",
        "Free estimates",
      ],
      neighborhoods: [
        "Rosemont",
        "O'Hare Area",
        "Entertainment District",
        "River Road",
      ],
      mapEmbedUrl: "https://www.google.com/maps?q=Rosemont,+IL&output=embed",
    },
    {
      id: "des-plaines",
      name: "Des Plaines",
      slug: "des-plaines",
      headline: "EV Charger & Electrical Services in Des Plaines, IL",
      description: "Professional EV charger and electrical services in Des Plaines. Tesla Powerwall, panel upgrades, and complete electrical work.",
      features: [
        "Certified Tesla installer",
        "ComEd rebate eligible",
        "Same-day available",
        "Free estimates",
      ],
      neighborhoods: [
        "Downtown Des Plaines",
        "Orchard Place",
        "Chippewa",
        "Prairie Lakes",
      ],
      mapEmbedUrl: "https://www.google.com/maps?q=Des+Plaines,+IL&output=embed",
    },
    {
      id: "naperville",
      name: "Naperville",
      slug: "naperville",
      headline: "EV Charger & Electrical Services in Naperville, IL",
      description: "Certified EV charger installation and electrical services in Naperville. Tesla Powerwall, generators, and panel upgrades for your home.",
      features: [
        "Certified Tesla installer",
        "ComEd rebate eligible",
        "Licensed & insured",
        "Free estimates",
      ],
      neighborhoods: [
        "Downtown Naperville",
        "North Naperville",
        "South Naperville",
        "Winding Creek",
      ],
      mapEmbedUrl: "https://www.google.com/maps?q=Naperville,+IL&output=embed",
    },
    {
      id: "schaumburg",
      name: "Schaumburg",
      slug: "schaumburg",
      headline: "EV Charger & Electrical Services in Schaumburg, IL",
      description: "Expert EV charger and electrical services in Schaumburg. Tesla Powerwall, generator systems, panel upgrades, and more.",
      features: [
        "Certified Tesla installer",
        "ComEd rebate eligible",
        "Quality workmanship",
        "Free estimates",
      ],
      neighborhoods: [
        "Woodfield",
        "Olde Schaumburg",
        "South Schaumburg",
        "Hoffman Estates Border",
      ],
      mapEmbedUrl: "https://www.google.com/maps?q=Schaumburg,+IL&output=embed",
    },
    {
      id: "aurora",
      name: "Aurora",
      slug: "aurora",
      headline: "EV Charger & Electrical Services in Aurora, IL",
      description: "Professional EV charger installation and electrical services in Aurora. Certified Tesla installer with ComEd rebate eligibility.",
      features: [
        "Certified Tesla installer",
        "ComEd rebate eligible",
        "Licensed & insured",
        "Free estimates",
      ],
      neighborhoods: [
        "Downtown Aurora",
        "North Aurora",
        "Fox Valley",
        "Montgomery",
      ],
      mapEmbedUrl: "https://www.google.com/maps?q=Aurora,+IL&output=embed",
    },
    {
      id: "melrose-park",
      name: "Melrose Park",
      slug: "melrose-park",
      headline: "EV Charger & Electrical Services in Melrose Park, IL",
      description: "Expert electrical services in Melrose Park. EV charger installation, generator systems, panel upgrades, and residential electrical work.",
      features: [
        "Certified Tesla installer",
        "ComEd rebate eligible",
        "Same-day available",
        "Free estimates",
      ],
      neighborhoods: [
        "Central Melrose Park",
        "North Melrose Park",
        "Winston Park",
        "Bellwood Border",
      ],
      mapEmbedUrl: "https://www.google.com/maps?q=Melrose+Park,+IL&output=embed",
    },
    {
      id: "berwyn",
      name: "Berwyn",
      slug: "berwyn",
      headline: "EV Charger & Electrical Services in Berwyn, IL",
      description: "Professional EV charger and electrical services in Berwyn. Panel upgrades, home rewiring, and certified Tesla installation.",
      features: [
        "Certified Tesla installer",
        "Older home specialists",
        "Licensed & insured",
        "Free estimates",
      ],
      neighborhoods: [
        "Downtown Berwyn",
        "North Berwyn",
        "South Berwyn",
        "Depot District",
      ],
      mapEmbedUrl: "https://www.google.com/maps?q=Berwyn,+IL&output=embed",
    },
    {
      id: "elgin",
      name: "Elgin",
      slug: "elgin",
      headline: "EV Charger & Electrical Services in Elgin, IL",
      description: "Expert EV charger installation and electrical services in Elgin. Tesla Powerwall, generators, and complete electrical work.",
      features: [
        "Certified Tesla installer",
        "ComEd rebate eligible",
        "Quality workmanship",
        "Free estimates",
      ],
      neighborhoods: [
        "Downtown Elgin",
        "Northeast Elgin",
        "South Elgin",
        "West Elgin",
      ],
      mapEmbedUrl: "https://www.google.com/maps?q=Elgin,+IL&output=embed",
    },
    {
      id: "crystal-lake",
      name: "Crystal Lake",
      slug: "crystal-lake",
      headline: "EV Charger & Electrical Services in Crystal Lake, IL",
      description: "Professional EV charger and electrical services in Crystal Lake. Tesla Powerwall, generator systems, and panel upgrades.",
      features: [
        "Certified Tesla installer",
        "ComEd rebate eligible",
        "Licensed & insured",
        "Free estimates",
      ],
      neighborhoods: [
        "Downtown Crystal Lake",
        "Lake in the Hills",
        "Cary",
        "Prairie Grove",
      ],
      mapEmbedUrl: "https://www.google.com/maps?q=Crystal+Lake,+IL&output=embed",
    },
    {
      id: "bolingbrook",
      name: "Bolingbrook",
      slug: "bolingbrook",
      headline: "EV Charger & Electrical Services in Bolingbrook, IL",
      description: "Certified EV charger installation and electrical services in Bolingbrook. Tesla Powerwall, generators, and panel upgrades.",
      features: [
        "Certified Tesla installer",
        "ComEd rebate eligible",
        "Same-day available",
        "Free estimates",
      ],
      neighborhoods: [
        "Old Bolingbrook",
        "Colonial Village",
        "Westwood Valley",
        "Winston Woods",
      ],
      mapEmbedUrl: "https://www.google.com/maps?q=Bolingbrook,+IL&output=embed",
    },
  ],

  // ==========================================
  // UI TEXT
  // ==========================================
  ui: {
    callNow: "Call Now",
    callNowShort: "Call Now",
    freeQuoteShort: "Free Estimate",
    phoneLabel: "Call Now - Free Estimate",
    getQuote: "Get Estimate",
    learnMore: "Learn More",
    viewAll: "View All",
    readMore: "Read More",
    submitForm: "Submit",
    loading: "Loading...",
    success: "Success!",
    error: "Something went wrong. Please try again.",
    required: "Required",
    quickLinks: "Quick Links",
    contactUs: "Contact Us",
    followUs: "Follow Us",
    allRightsReserved: "All rights reserved.",
    emergencyService: "Certified Installer",
    freeEstimate: "Free Estimate",
    satisfactionGuarantee: "Quality Guaranteed",
  },

  // ==========================================
  // TRACKING / ANALYTICS
  // ==========================================
  tracking: {
    gtm: "",
    ga4: "",
    fbPixel: "",
  },
};

// Make CONFIG globally available
if (typeof window !== 'undefined') {
  window.CONFIG = CONFIG;
}

// Export for module systems
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONFIG;
}
