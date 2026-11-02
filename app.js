/**
 * IntradaySpell - Futuristic Tech Agency Platform
 * Contact: intradayspell@gmail.com
 */

// Services Data (All 14+ services requested by user)
const servicesData = [
  {
    id: 'web-app-dev',
    category: 'development',
    icon: 'code-2',
    title: 'Web & App Development',
    tagline: 'Build powerful web & mobile apps',
    desc: 'Custom high-performance web applications, responsive platforms, and progressive web apps built with modern frameworks and pixel-perfect design.',
    features: ['Next.js / React 19 Frontend', 'Progressive Web Apps (PWA)', 'Ultra-Fast Page Speed & Core Web Vitals', 'Headless CMS & E-Commerce Integration'],
    tech: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js'],
    deliverables: ['Responsive Web App', 'Admin Dashboard', 'API Integrations', 'Deployment & CI/CD Pipeline']
  },
  {
    id: 'software-dev',
    category: 'development',
    icon: 'layers',
    title: 'Software Development',
    tagline: 'Scalable & reliable software solutions',
    desc: 'Architecting robust, fault-tolerant enterprise software, microservices, and bespoke SaaS platforms designed to handle millions of transactions.',
    features: ['Microservices Architecture', 'Custom SaaS Platform Engineering', 'High-Throughput REST & GraphQL APIs', 'Database Clustering & Optimization'],
    tech: ['Python', 'Go', 'Java', 'PostgreSQL', 'Docker', 'Kubernetes'],
    deliverables: ['Custom Backend Engine', 'Scalable Database Schema', 'Comprehensive API Docs', 'Automated Unit & Integration Tests']
  },
  {
    id: 'graphic-design',
    category: 'creative',
    icon: 'palette',
    title: 'Graphic Design',
    tagline: 'Creative designs that inspire',
    desc: 'World-class tech branding, sleek UI/UX design systems, vector illustrations, pitch decks, and digital identity tailored for tech innovators.',
    features: ['Brand Identity & Logo Systems', 'High-Fidelity UI/UX in Figma', 'Marketing Collateral & Pitch Decks', 'Design System Guidelines & Tokenization'],
    tech: ['Figma', 'Adobe Illustrator', 'Photoshop', 'Spline 3D'],
    deliverables: ['Complete Vector Brand Kit', 'Interactive Figma Prototypes', 'Asset Export Suite (SVG/PNG)', 'Brand Stylebook']
  },
  {
    id: 'video-editing',
    category: 'creative',
    icon: 'video',
    title: 'Video Editing',
    tagline: 'Turn ideas into stunning visuals',
    desc: 'Cinematic commercial video production, 3D motion graphics, product demo showreels, and high-impact social media tech promo videos.',
    features: ['Product Showreel & Demo Videos', '3D Motion Graphics & VFX', 'Dynamic Color Grading & Audio Engineering', 'Multi-Platform Aspect Ratio Delivery'],
    tech: ['Premiere Pro', 'After Effects', 'DaVinci Resolve', 'Blender 3D'],
    deliverables: ['4K Rendered Video Masters', 'Short-Form Social Clips (9:16)', 'Motion Graphic Title Cards', 'Sound Design & Royalty-Free Audio']
  },
  {
    id: 'digital-marketing',
    category: 'marketing',
    icon: 'megaphone',
    title: 'Digital Marketing',
    tagline: 'Grow your business online',
    desc: 'Full-funnel digital marketing strategies, technical SEO, high-conversion Google & Meta ad campaigns, and data-backed viral growth funnels.',
    features: ['Technical & On-Page SEO Domination', 'PPC Google Search & Display Ads', 'Social Media Branding & Content Strategy', 'Conversion Rate Optimization (CRO)'],
    tech: ['Google Ads', 'Meta Business Suite', 'Google Analytics 4', 'Ahrefs', 'SEMrush'],
    deliverables: ['SEO Audit & Strategy Plan', 'Ad Campaign Setup & A/B Testing', 'Monthly ROI & Analytics Dashboard', 'Conversion Funnel Blueprint']
  },
  {
    id: 'hardware-supply',
    category: 'infrastructure',
    icon: 'cpu',
    title: 'Hardware Supply',
    tagline: 'Quality hardware, better performance',
    desc: 'Authorized supply and bulk procurement of high-performance computing hardware, enterprise server racks, AI workstations, and networking equipment.',
    features: ['AI & Deep Learning GPU Rigs', 'Enterprise Rack Servers & NAS Storage', 'Commercial Workstations & Laptops', 'Verified OEM Warranty & SLA Replacement'],
    tech: ['NVIDIA Enterprise', 'Dell PowerEdge', 'HP Enterprise', 'Cisco', 'Ubiquiti'],
    deliverables: ['OEM Certified Hardware Delivery', 'Pre-Configuration & Benchmarking', 'Warranty & Asset Tagging', 'On-Site Installation Support']
  },
  {
    id: 'domain-hosting',
    category: 'infrastructure',
    icon: 'globe',
    title: 'Domain & Hosting',
    tagline: 'Register & host with confidence',
    desc: 'Enterprise-grade domain registration, DNS management, high-speed NVMe cloud servers, automated SSL certificates, and 99.99% uptime guarantees.',
    features: ['Instant Global Domain Registration', 'High-Speed NVMe Cloud VPS & Dedicated', 'Cloudflare CDN & Automated SSL', 'Automated Daily Off-Site Backups'],
    tech: ['Cloudflare DNS', 'cPanel / Webmin', 'AWS Lightsail', 'Linux Ubuntu / AlmaLinux'],
    deliverables: ['Registered Domain DNS Configuration', 'Secured Web Hosting Space', 'Automated SSL Certificates', '24/7 Server Monitoring Setup']
  },
  {
    id: 'cyber-security',
    category: 'infrastructure',
    icon: 'shield-check',
    title: 'Cyber Security',
    tagline: 'Protect what matters most',
    desc: 'Comprehensive penetration testing, vulnerability assessments, Web Application Firewall (WAF) deployment, and zero-trust corporate security frameworks.',
    features: ['Web App & Network Penetration Testing', '24/7 SIEM & SOC Threat Monitoring', 'DDoS Protection & WAF Configuration', 'Zero-Trust Security & IAM Policies'],
    tech: ['OWASP ZAP', 'Burp Suite', 'Cloudflare WAF', 'Kali Linux', 'Suricata'],
    deliverables: ['Detailed Vulnerability Assessment Report', 'Remediation Roadmap & Verification', 'WAF Hardening Rules', 'Executive Security Brief']
  },
  {
    id: 'ai-solutions',
    category: 'ai-data',
    icon: 'bot',
    title: 'AI Solutions',
    tagline: 'Smarter solutions with AI',
    desc: 'Cutting-edge Generative AI agents, Google Gemini and OpenAI integrations, custom RAG document search engines, and automated intelligent workflows.',
    features: ['Custom AI Agents & Autonomous Bots', 'Google Gemini & OpenAI LLM Pipelines', 'RAG (Retrieval-Augmented Generation) Systems', 'Predictive Modeling & Automation'],
    tech: ['Google Gemini API', 'OpenAI', 'LangChain', 'Python', 'Vector DBs (Chroma/Pinecone)'],
    deliverables: ['Configured AI Agent Pipeline', 'Vector Knowledge Base Ingestion', 'Interactive Chat & Prompt Interface', 'API Integration & Safety Filters']
  },
  {
    id: 'data-analytics',
    category: 'ai-data',
    icon: 'bar-chart-3',
    title: 'Data & Analytics',
    tagline: 'Turn data into insights',
    desc: 'Transform raw data into strategic business intelligence with real-time interactive dashboards, automated ETL pipelines, and predictive warehouse modeling.',
    features: ['Real-Time Executive Dashboards', 'Automated ETL Data Ingestion Pipelines', 'Cloud Data Warehousing (BigQuery / Snowflake)', 'Predictive KPIs & Churn Forecasting'],
    tech: ['Google BigQuery', 'PowerBI', 'Tableau', 'Python Pandas', 'SQL Server'],
    deliverables: ['Interactive Live Dashboard', 'ETL Data Pipeline Code', 'Data Dictionary & Schema Model', 'Executive Insight Summary']
  },
  {
    id: 'digital-experiences',
    category: 'creative',
    icon: 'monitor',
    title: 'Digital Experiences',
    tagline: 'Engage. Convert. Grow.',
    desc: 'Next-generation immersive web experiences, interactive 3D product configurators, gamified customer journeys, and unforgettable digital touchpoints.',
    features: ['Three.js & WebGL Interactive 3D Scenes', 'Gamified Customer Onboarding Loops', 'Micro-Interactions & Liquid Motion', 'Multi-Device Touch & Gesture Support'],
    tech: ['Three.js', 'WebGL', 'GSAP Animation', 'Canvas API', 'CSS Grid'],
    deliverables: ['Interactive 3D Web Environment', 'Fluid Motion Assets', 'Cross-Browser Performance Tuning', 'Accessibility (a11y) Verification']
  },
  {
    id: 'bpo-kpo',
    category: 'infrastructure',
    icon: 'users',
    title: 'BPO / KPO',
    tagline: 'Focus on your core business',
    desc: 'Scalable business and knowledge process outsourcing, 24/7 technical helpdesk, customer success, back-office data processing, and IT operations.',
    features: ['24/7/365 Tier-1 & Tier-2 IT Support Desk', 'Knowledge Process & Data Mining', 'Customer Onboarding & Chat Operations', 'Strict SLA Adherence & Quality Audits'],
    tech: ['Zendesk', 'Jira Service Management', 'Freshdesk', 'Slack Enterprise'],
    deliverables: ['Trained Dedicated Support Squad', 'Custom SLA Metrics Dashboard', 'Weekly Quality Scorecards', 'Standard Operating Procedures (SOPs)']
  },
  {
    id: 'office-it-setup',
    category: 'infrastructure',
    icon: 'building-2',
    title: 'Office IT Setup',
    tagline: 'Modern IT for productive work',
    desc: 'Turnkey enterprise workplace IT setup: high-density mesh Wi-Fi, structured CAT6A/Fiber cabling, server racks, biometric security, and VoIP systems.',
    features: ['Enterprise Mesh Wi-Fi & VLAN Segmentation', 'Structured Server Rack & Cable Management', 'Biometric Access Control & IP CCTV Surveillance', 'VoIP Cloud Phone Systems & Conference Rooms'],
    tech: ['Ubiquiti UniFi', 'Cisco Meraki', 'Hikvision IP', 'Polycom VoIP'],
    deliverables: ['Network Topology Blueprint', 'Server Rack Termination & Labeling', 'Access Control Setup & Keycards', 'System Handover & Admin Training']
  },
  {
    id: 'mobile-app-dev',
    category: 'development',
    icon: 'smartphone',
    title: 'Mobile App Development',
    tagline: 'Apps for a smarter you',
    desc: 'Native and cross-platform mobile apps for iOS and Android engineered with buttery-smooth 120fps UI, offline-first sync, and secure payment integrations.',
    features: ['Cross-Platform Flutter & React Native', 'Native iOS (Swift) & Android (Kotlin)', 'Offline Cache & Real-Time Sync', 'App Store & Google Play Launch Guarantees'],
    tech: ['Flutter', 'React Native', 'Swift', 'Kotlin', 'Firebase', 'SQLite'],
    deliverables: ['Production iOS (IPA) & Android (APK/AAB)', 'App Store & Play Store Submissions', 'Push Notification Service Integration', 'Complete Source Code Repository']
  },
  {
    id: 'more-solutions',
    category: 'all',
    icon: 'plus-circle',
    title: '& More Solutions...',
    tagline: 'Custom engineering for limitless vision',
    desc: 'Have a unique technology requirement? From IoT sensors, Cloud DevOps automation, custom CRM integrations to smart contract audits, we make it happen.',
    features: ['Cloud Migration (AWS / GCP / Azure)', 'DevOps CI/CD Pipelines with Docker', 'Custom CRM / ERP Integration', 'IoT Smart Sensor Prototyping'],
    tech: ['AWS', 'Google Cloud', 'Terraform', 'FastAPI', 'MQTT'],
    deliverables: ['Custom Architecture Design', 'Milestone Delivery Roadmap', 'Dedicated Lead Architect', 'Full Lifetime Warranty']
  }
];

// Featured Projects Data (Datapur & Nityokart + Showcase)
const projectsData = [
  {
    id: 'datapur',
    name: 'Datapur',
    category: 'Data Analytics & Online Utilities',
    tag: 'Web & Analytics',
    url: 'https://ahammadali1607.github.io/datapur.com/',
    badge: 'Live Platform',
    accentColor: 'from-blue-600 to-cyan-500',
    desc: 'DataPur is an all-in-one web utility and analytics platform providing ultra-fast, client-side PDF manipulation, image conversion, and data parsing tools. Features zero-server latency, secure local sandboxing, and modern responsive UI.',
    stats: [
      { label: 'Speed', val: '< 200ms' },
      { label: 'Security', val: 'Client-Side' },
      { label: 'Uptime', val: '99.9%' }
    ],
    tech: ['Next.js', 'Tailwind CSS', 'WebAssembly', 'Chart.js', 'GitHub Pages'],
    previewImage: 'assets/crop-datapur.png',
    client: 'Rahul Sharma, CEO, Datapur',
    testimonial: 'IntradaySpell delivered our project beyond expectations. Professional, creative and always supportive! The analytics pipeline handles massive data spikes effortlessly.'
  },
  {
    id: 'nityokart',
    name: 'NITYOKART',
    category: 'Grocery E-Commerce App',
    tag: 'E-Commerce & Mobile',
    url: 'https://nityokart.ai.studio/',
    badge: 'Hyperlocal E-Commerce',
    accentColor: 'from-emerald-500 to-teal-400',
    desc: 'Nityokart delivers farm-fresh organic produce, orchard fruits, and cold-chain dairy directly to doorsteps in 10-20 minutes. Built with geofenced micro-warehouse routing, instant cart sync, and seamless checkout.',
    stats: [
      { label: 'Delivery Time', val: '10-20 Min' },
      { label: 'Active Users', val: '10K+' },
      { label: 'Satisfaction', val: '4.9 / 5' }
    ],
    tech: ['React Native', 'Node.js', 'MongoDB', 'Redis', 'Google Maps API'],
    previewImage: 'assets/crop-nityokart.png',
    client: 'Priya Verma, Founder, NITYOKART',
    testimonial: 'The mobile experience and backend reliability transformed our delivery times by 40%. IntradaySpell is our long-term technology engine.'
  },
  {
    id: 'cybershield',
    name: 'CyberShield SOC',
    category: 'Cyber Security & Threat Intel',
    tag: 'Security & Cloud',
    url: '#',
    badge: 'Enterprise Security',
    accentColor: 'from-purple-600 to-indigo-500',
    desc: 'Distributed cyber threat mitigation suite providing automated intrusion prevention, SIEM telemetry correlation, zero-day threat analysis, and automated Cloudflare WAF firewall rules.',
    stats: [
      { label: 'Threat Block Rate', val: '99.98%' },
      { label: 'Response Latency', val: '12ms' },
      { label: 'Monitoring', val: '24/7/365' }
    ],
    tech: ['Go', 'React', 'Docker', 'Suricata', 'Cloudflare WAF'],
    previewImage: 'assets/mockup-cyber.jpg',
    client: 'Alex Chen, CTO, CloudFlow Systems',
    testimonial: 'IntradaySpell locked down our corporate endpoints and passed our SOC 2 compliance audit on the first pass.'
  }
];

// Tech Stack Matrix Data
const techStackData = {
  frontend: [
    { name: 'React 19', icon: 'atom', level: 'Mastery' },
    { name: 'Next.js 15', icon: 'zap', level: 'Mastery' },
    { name: 'Tailwind CSS', icon: 'layout', level: 'Mastery' },
    { name: 'TypeScript', icon: 'file-code', level: 'Mastery' },
    { name: 'Vue 3', icon: 'layers', level: 'Advanced' },
    { name: 'Three.js / WebGL', icon: 'box', level: 'Advanced' }
  ],
  backend: [
    { name: 'Node.js / Express', icon: 'server', level: 'Mastery' },
    { name: 'Python / FastAPI', icon: 'terminal', level: 'Mastery' },
    { name: 'Go (Golang)', icon: 'cpu', level: 'Mastery' },
    { name: 'PostgreSQL', icon: 'database', level: 'Mastery' },
    { name: 'MongoDB', icon: 'database', level: 'Mastery' },
    { name: 'Redis Cache', icon: 'zap', level: 'Mastery' }
  ],
  mobile: [
    { name: 'Flutter', icon: 'smartphone', level: 'Mastery' },
    { name: 'React Native', icon: 'tablet', level: 'Mastery' },
    { name: 'iOS (Swift)', icon: 'apple', level: 'Advanced' },
    { name: 'Android (Kotlin)', icon: 'play', level: 'Advanced' }
  ],
  ai_cloud: [
    { name: 'Google Gemini API', icon: 'sparkles', level: 'Mastery' },
    { name: 'OpenAI GPT-4o', icon: 'bot', level: 'Mastery' },
    { name: 'Google Cloud (GCP)', icon: 'cloud', level: 'Mastery' },
    { name: 'Amazon AWS', icon: 'cloud-rain', level: 'Mastery' },
    { name: 'Docker & K8s', icon: 'box', level: 'Mastery' },
    { name: 'BigQuery & Spark', icon: 'bar-chart-2', level: 'Advanced' }
  ]
};

// Pricing / Project Estimator Matrix
const pricingConfig = {
  services: {
    'web-app': { base: 2200, name: 'Web & App Development', weeks: 4 },
    'software': { base: 3500, name: 'Software Development', weeks: 6 },
    'ai-data': { base: 2800, name: 'AI & Data Analytics', weeks: 5 },
    'cyber-security': { base: 1800, name: 'Cyber Security & Audit', weeks: 3 },
    'it-hardware': { base: 2000, name: 'Office IT & Hardware Setup', weeks: 2 },
    'design-video': { base: 1200, name: 'Design, Video & Marketing', weeks: 2 }
  },
  tiers: {
    'mvp': { multiplier: 1.0, label: 'MVP / Startup Scope', weeksMult: 1.0 },
    'growth': { multiplier: 1.8, label: 'Growth / Business Scale', weeksMult: 1.4 },
    'enterprise': { multiplier: 3.2, label: 'Enterprise / High-SLA', weeksMult: 2.0 }
  },
  speeds: {
    'standard': { multiplier: 1.0, label: 'Standard Cadence' },
    'fast': { multiplier: 1.25, label: 'Fast-Track (Rush Sprint)' },
    'extreme': { multiplier: 1.5, label: 'Emergency Sprint (Overnight/Weekend SLA)' }
  },
  addons: {
    'sla-support': { price: 600, label: '24/7 Dedicated SLA Support' },
    'cloud-devops': { price: 800, label: 'Cloud Architecture & DevOps CI/CD' },
    'ai-assistant': { price: 950, label: 'Custom AI Chat / Bot Integration' },
    'security-pentest': { price: 750, label: 'Full Penetration Testing Audit' }
  }
};

// Web Audio API Synthesized SFX (Zero external dependencies!)
class SoundFXEngine {
  constructor() {
    this.enabled = false;
    this.audioCtx = null;
  }

  init() {
    if (!this.audioCtx && (window.AudioContext || window.webkitAudioContext)) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.audioCtx = new AudioCtx();
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
  }

  playHover() {
    if (!this.enabled) return;
    this.init();
    if (!this.audioCtx) return;

    try {
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(880, this.audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1200, this.audioCtx.currentTime + 0.04);

      gain.gain.setValueAtTime(0.015, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 0.04);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start();
      osc.stop(this.audioCtx.currentTime + 0.04);
    } catch (e) {}
  }

  playClick() {
    if (!this.enabled) return;
    this.init();
    if (!this.audioCtx) return;

    try {
      const osc = this.audioCtx.createOscillator();
      const gain = this.audioCtx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(520, this.audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, this.audioCtx.currentTime + 0.08);

      gain.gain.setValueAtTime(0.05, this.audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + 0.08);

      osc.connect(gain);
      gain.connect(this.audioCtx.destination);

      osc.start();
      osc.stop(this.audioCtx.currentTime + 0.08);
    } catch (e) {}
  }

  playSuccess() {
    if (!this.enabled) return;
    this.init();
    if (!this.audioCtx) return;

    try {
      const notes = [523.25, 659.25, 783.99, 1046.50];
      notes.forEach((freq, i) => {
        const osc = this.audioCtx.createOscillator();
        const gain = this.audioCtx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, this.audioCtx.currentTime + i * 0.07);

        gain.gain.setValueAtTime(0.04, this.audioCtx.currentTime + i * 0.07);
        gain.gain.exponentialRampToValueAtTime(0.001, this.audioCtx.currentTime + i * 0.07 + 0.15);

        osc.connect(gain);
        gain.connect(this.audioCtx.destination);

        osc.start(this.audioCtx.currentTime + i * 0.07);
        osc.stop(this.audioCtx.currentTime + i * 0.07 + 0.15);
      });
    } catch (e) {}
  }
}

const sfx = new SoundFXEngine();

// Interactive Particle Background on Canvas
function initParticleCanvas() {
  const canvas = document.getElementById('cyber-particles');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  let width = (canvas.width = window.innerWidth);
  let height = (canvas.height = window.innerHeight);

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const numParticles = Math.min(Math.floor((width * height) / 18000), 75);
  const particles = [];
  const mouse = { x: -1000, y: -1000, radius: 140 };

  window.addEventListener('mousemove', (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
  });

  window.addEventListener('mouseout', () => {
    mouse.x = -1000;
    mouse.y = -1000;
  });

  for (let i = 0; i < numParticles; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      radius: Math.random() * 2 + 1,
      color: Math.random() > 0.4 ? 'rgba(0, 240, 255, ' : 'rgba(121, 40, 202, '
    });
  }

  function render() {
    ctx.clearRect(0, 0, width, height);

    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      // Mouse interaction
      const dx = mouse.x - p.x;
      const dy = mouse.y - p.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < mouse.radius) {
        const force = (mouse.radius - dist) / mouse.radius;
        p.x -= (dx / dist) * force * 2;
        p.y -= (dy / dist) * force * 2;
      }

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = p.color + '0.7)';
      ctx.shadowBlur = 10;
      ctx.shadowColor = '#00f0ff';
      ctx.fill();

      // Connect lines
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dist2 = Math.hypot(p.x - p2.x, p.y - p2.y);
        if (dist2 < 110) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          const alpha = (1 - dist2 / 110) * 0.22;
          ctx.strokeStyle = `rgba(0, 240, 255, ${alpha})`;
          ctx.lineWidth = 0.75;
          ctx.stroke();
        }
      }
    }

    requestAnimationFrame(render);
  }

  render();
}

// Render Services Grid
function renderServices(categoryFilter = 'all') {
  const container = document.getElementById('services-grid');
  if (!container) return;

  const filtered = categoryFilter === 'all' 
    ? servicesData 
    : servicesData.filter(s => s.category === categoryFilter || s.category === 'all');

  container.innerHTML = filtered.map(service => `
    <div class="tech-card group p-6 flex flex-col justify-between cursor-pointer" onclick="openServiceModal('${service.id}')">
      <div>
        <div class="flex items-center justify-between mb-4">
          <div class="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:bg-cyan-500/20 group-hover:border-cyan-400 transition-all duration-300">
            <i data-lucide="${service.icon}" class="w-6 h-6"></i>
          </div>
          <span class="text-[11px] font-mono tracking-wider px-2.5 py-1 rounded-full bg-slate-800/80 text-cyan-400 border border-slate-700/60 uppercase">
            ${service.category.replace('-', ' ')}
          </span>
        </div>

        <h3 class="text-xl font-bold font-heading text-white group-hover:text-cyan-300 transition-colors mb-2">
          ${service.title}
        </h3>
        
        <p class="text-xs font-medium text-cyan-400/90 mb-3 tracking-wide">
          ${service.tagline}
        </p>

        <p class="text-sm text-slate-300 leading-relaxed mb-4 line-clamp-2">
          ${service.desc}
        </p>

        <div class="flex flex-wrap gap-1.5 mb-4">
          ${service.tech.slice(0, 3).map(t => `
            <span class="text-[11px] font-mono px-2 py-0.5 rounded bg-slate-900/90 text-slate-400 border border-slate-800">
              ${t}
            </span>
          `).join('')}
          ${service.tech.length > 3 ? `<span class="text-[11px] font-mono px-1.5 py-0.5 text-cyan-400">+${service.tech.length - 3}</span>` : ''}
        </div>
      </div>

      <div class="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-semibold text-cyan-400 group-hover:text-cyan-300">
        <span class="inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
          Explore Details <i data-lucide="arrow-right" class="w-3.5 h-3.5"></i>
        </span>
        <span class="text-[10px] text-slate-400 uppercase font-mono">Verified SLA</span>
      </div>
    </div>
  `).join('');

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// Render Featured Work
function renderProjects(filter = 'all') {
  const container = document.getElementById('projects-grid');
  if (!container) return;

  const filtered = filter === 'all'
    ? projectsData
    : projectsData.filter(p => p.tag.toLowerCase().includes(filter.toLowerCase()));

  container.innerHTML = filtered.map(p => `
    <div class="tech-card overflow-hidden group flex flex-col justify-between">
      <div class="relative overflow-hidden aspect-video bg-slate-900 border-b border-cyan-500/20">
        <img src="${p.previewImage}" alt="${p.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100" />
        <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
        <div class="absolute top-4 left-4">
          <span class="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 backdrop-blur-md">
            ${p.badge}
          </span>
        </div>
        <div class="absolute bottom-4 left-4 right-4 flex justify-between items-end">
          <div>
            <h3 class="text-2xl font-bold font-heading text-white tracking-wide">${p.name}</h3>
            <p class="text-xs text-cyan-400 font-mono">${p.category}</p>
          </div>
        </div>
      </div>

      <div class="p-6 flex-1 flex flex-col justify-between">
        <div>
          <p class="text-sm text-slate-300 leading-relaxed mb-4">
            ${p.desc}
          </p>

          <div class="grid grid-cols-3 gap-2 p-3 rounded-lg bg-slate-900/60 border border-slate-800 mb-4">
            ${p.stats.map(s => `
              <div class="text-center">
                <div class="text-xs font-mono font-bold text-cyan-400">${s.val}</div>
                <div class="text-[10px] text-slate-400 uppercase tracking-wider">${s.label}</div>
              </div>
            `).join('')}
          </div>

          <div class="flex flex-wrap gap-1.5 mb-6">
            ${p.tech.map(t => `
              <span class="text-xs px-2.5 py-1 rounded-md bg-cyan-950/50 text-cyan-300 border border-cyan-800/40 font-mono">
                ${t}
              </span>
            `).join('')}
          </div>
        </div>

        <div class="flex items-center gap-3 pt-4 border-t border-slate-800/80">
          <a href="${p.url}" target="_blank" rel="noopener noreferrer" class="btn-cyber-primary flex-1 justify-center text-xs py-2.5" onclick="sfx.playClick()">
            <span>Visit Project</span>
            <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
          </a>
          <button class="btn-cyber-secondary text-xs py-2.5 px-3" onclick="openProjectModal('${p.id}')">
            <i data-lucide="eye" class="w-3.5 h-3.5"></i>
            <span>Preview</span>
          </button>
        </div>
      </div>
    </div>
  `).join('');

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// Render Tech Stack
function renderTechStack() {
  const container = document.getElementById('tech-stack-container');
  if (!container) return;

  const categories = [
    { key: 'frontend', title: 'Frontend Architecture', icon: 'monitor' },
    { key: 'backend', title: 'Backend & High-Throughput Engines', icon: 'server' },
    { key: 'mobile', title: 'Mobile & Native Ecosystems', icon: 'smartphone' },
    { key: 'ai_cloud', title: 'AI Models, Data Pipelines & Cloud', icon: 'cpu' }
  ];

  container.innerHTML = categories.map(cat => `
    <div class="tech-card p-6">
      <div class="flex items-center gap-3 mb-6 pb-3 border-b border-cyan-500/20">
        <div class="p-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
          <i data-lucide="${cat.icon}" class="w-5 h-5"></i>
        </div>
        <h4 class="font-heading font-bold text-white text-lg">${cat.title}</h4>
      </div>

      <div class="grid grid-cols-2 gap-3">
        ${techStackData[cat.key].map(item => `
          <div class="p-3 rounded-lg bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-800/80 transition-all flex items-center justify-between group">
            <span class="text-sm font-semibold text-slate-200 group-hover:text-cyan-300 transition-colors">
              ${item.name}
            </span>
            <span class="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950/60 text-cyan-400 border border-cyan-800/40">
              ${item.level}
            </span>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');

  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// Open Service Modal
window.openServiceModal = function(serviceId) {
  sfx.playClick();
  const service = servicesData.find(s => s.id === serviceId);
  if (!service) return;

  const modal = document.getElementById('generic-modal');
  const modalContent = document.getElementById('modal-content');
  if (!modal || !modalContent) return;

  modalContent.innerHTML = `
    <div class="p-8">
      <div class="flex items-center justify-between pb-6 border-b border-cyan-500/20 mb-6">
        <div class="flex items-center gap-4">
          <div class="w-14 h-14 rounded-2xl bg-cyan-500/10 border border-cyan-400/40 flex items-center justify-center text-cyan-400">
            <i data-lucide="${service.icon}" class="w-7 h-7"></i>
          </div>
          <div>
            <span class="text-xs font-mono uppercase tracking-wider text-cyan-400">${service.category}</span>
            <h3 class="text-2xl font-bold font-heading text-white">${service.title}</h3>
          </div>
        </div>
        <button onclick="closeModal()" class="w-10 h-10 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 flex items-center justify-center transition-colors">
          <i data-lucide="x" class="w-5 h-5"></i>
        </button>
      </div>

      <p class="text-base text-slate-300 leading-relaxed mb-6">
        ${service.desc}
      </p>

      <div class="grid md:grid-cols-2 gap-6 mb-6">
        <div class="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
          <h4 class="text-xs font-mono uppercase tracking-wider text-cyan-400 font-bold mb-3 flex items-center gap-2">
            <i data-lucide="check-circle-2" class="w-4 h-4 text-emerald-400"></i> Core Capabilities
          </h4>
          <ul class="space-y-2 text-sm text-slate-300">
            ${service.features.map(f => `
              <li class="flex items-center gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                <span>${f}</span>
              </li>
            `).join('')}
          </ul>
        </div>

        <div class="p-4 rounded-xl bg-slate-900/80 border border-slate-800">
          <h4 class="text-xs font-mono uppercase tracking-wider text-purple-400 font-bold mb-3 flex items-center gap-2">
            <i data-lucide="package-check" class="w-4 h-4 text-purple-400"></i> Key Deliverables
          </h4>
          <ul class="space-y-2 text-sm text-slate-300">
            ${service.deliverables.map(d => `
              <li class="flex items-center gap-2">
                <span class="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                <span>${d}</span>
              </li>
            `).join('')}
          </ul>
        </div>
      </div>

      <div class="mb-8">
        <h4 class="text-xs font-mono uppercase tracking-wider text-slate-400 font-bold mb-3">Tech Stack & Infrastructure</h4>
        <div class="flex flex-wrap gap-2">
          ${service.tech.map(t => `
            <span class="px-3 py-1 rounded-lg bg-slate-800 text-cyan-300 text-xs font-mono border border-cyan-800/50">
              ${t}
            </span>
          `).join('')}
        </div>
      </div>

      <div class="flex items-center justify-between pt-6 border-t border-slate-800">
        <div>
          <span class="text-xs text-slate-400 block">Questions or direct inquiry?</span>
          <span class="text-sm font-mono text-cyan-300 font-bold">intradayspell@gmail.com</span>
        </div>
        <button class="btn-cyber-primary" onclick="preselectServiceAndScroll('${service.title}')">
          <span>Book This Service</span>
          <i data-lucide="arrow-right" class="w-4 h-4"></i>
        </button>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  if (window.lucide) window.lucide.createIcons();
};

// Open Project Preview Modal
window.openProjectModal = function(projectId) {
  sfx.playClick();
  const project = projectsData.find(p => p.id === projectId);
  if (!project) return;

  const modal = document.getElementById('generic-modal');
  const modalContent = document.getElementById('modal-content');
  if (!modal || !modalContent) return;

  modalContent.innerHTML = `
    <div class="p-8">
      <div class="flex items-center justify-between pb-6 border-b border-cyan-500/20 mb-6">
        <div>
          <span class="text-xs font-mono uppercase tracking-wider text-cyan-400">${project.tag}</span>
          <h3 class="text-3xl font-bold font-heading text-white">${project.name}</h3>
        </div>
        <button onclick="closeModal()" class="w-10 h-10 rounded-full bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700 flex items-center justify-center transition-colors">
          <i data-lucide="x" class="w-5 h-5"></i>
        </button>
      </div>

      <div class="relative rounded-2xl overflow-hidden border border-cyan-500/30 mb-6 bg-slate-900 aspect-video">
        <img src="${project.previewImage}" alt="${project.name}" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
        <div class="absolute bottom-4 left-4 right-4 flex items-center justify-between">
          <span class="px-3 py-1 rounded-full text-xs font-mono bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 backdrop-blur-md">
            ${project.category}
          </span>
          <a href="${project.url}" target="_blank" rel="noopener noreferrer" class="btn-cyber-primary text-xs py-2 px-4">
            <span>Open Live Website</span>
            <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
          </a>
        </div>
      </div>

      <p class="text-base text-slate-300 leading-relaxed mb-6">
        ${project.desc}
      </p>

      <div class="p-4 rounded-xl bg-cyan-950/30 border border-cyan-500/30 mb-6">
        <div class="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">Verified Client Review</div>
        <blockquote class="text-sm italic text-slate-200 mb-2">"${project.testimonial}"</blockquote>
        <div class="text-xs font-bold text-cyan-300 font-mono">— ${project.client}</div>
      </div>

      <div class="flex flex-wrap gap-2 mb-8">
        ${project.tech.map(t => `
          <span class="px-3 py-1 rounded-md bg-slate-800 text-cyan-300 text-xs font-mono border border-slate-700">
            ${t}
          </span>
        `).join('')}
      </div>

      <div class="flex items-center justify-end gap-3 pt-4 border-t border-slate-800">
        <button onclick="closeModal()" class="btn-cyber-secondary text-xs">Close</button>
        <a href="${project.url}" target="_blank" rel="noopener noreferrer" class="btn-cyber-primary text-xs">
          <span>Launch Live URL</span>
          <i data-lucide="external-link" class="w-3.5 h-3.5"></i>
        </a>
      </div>
    </div>
  `;

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  if (window.lucide) window.lucide.createIcons();
};

window.closeModal = function() {
  sfx.playClick();
  const modal = document.getElementById('generic-modal');
  if (modal) modal.classList.add('hidden');
  document.body.style.overflow = 'auto';
};

window.preselectServiceAndScroll = function(serviceTitle) {
  closeModal();
  const select = document.getElementById('contact-service');
  if (select) {
    select.value = serviceTitle;
  }
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
};

// Interactive Project Cost Estimator Calculation
function updateEstimator() {
  const serviceSelect = document.getElementById('est-service');
  const scaleSelect = document.querySelector('input[name="est-scale"]:checked');
  const speedSelect = document.querySelector('input[name="est-speed"]:checked');
  const addOnCheckboxes = document.querySelectorAll('input[name="est-addon"]:checked');

  if (!serviceSelect || !scaleSelect || !speedSelect) return;

  const serviceKey = serviceSelect.value;
  const scaleKey = scaleSelect.value;
  const speedKey = speedSelect.value;

  const baseConfig = pricingConfig.services[serviceKey] || { base: 2000, weeks: 4 };
  const tierConfig = pricingConfig.tiers[scaleKey] || { multiplier: 1, weeksMult: 1 };
  const speedConfig = pricingConfig.speeds[speedKey] || { multiplier: 1 };

  let totalCost = baseConfig.base * tierConfig.multiplier * speedConfig.multiplier;
  let totalWeeks = Math.max(1, Math.round((baseConfig.weeks * tierConfig.weeksMult) / (speedKey === 'fast' ? 1.4 : speedKey === 'extreme' ? 2 : 1)));

  addOnCheckboxes.forEach(cb => {
    const addOn = pricingConfig.addons[cb.value];
    if (addOn) totalCost += addOn.price;
  });

  const lowEstimate = Math.round(totalCost * 0.9);
  const highEstimate = Math.round(totalCost * 1.15);

  const priceDisplay = document.getElementById('est-price-display');
  const timelineDisplay = document.getElementById('est-timeline-display');

  if (priceDisplay) {
    priceDisplay.textContent = `$${lowEstimate.toLocaleString()} - $${highEstimate.toLocaleString()}`;
  }
  if (timelineDisplay) {
    timelineDisplay.textContent = `${totalWeeks} - ${totalWeeks + 2} Weeks`;
  }
}

// Copy to Clipboard Utility with Toast
window.copyEmailToClipboard = function() {
  sfx.playSuccess();
  const email = 'intradayspell@gmail.com';
  navigator.clipboard.writeText(email).then(() => {
    showToast('Email copied to clipboard: ' + email);
  }).catch(() => {
    window.location.href = `mailto:${email}`;
  });
};

function showToast(message) {
  let toast = document.getElementById('cyber-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'cyber-toast';
    toast.className = 'fixed bottom-6 right-6 z-50 flex items-center gap-3 px-5 py-3 rounded-xl bg-slate-900 border border-cyan-400 text-cyan-300 font-mono text-xs shadow-2xl shadow-cyan-500/20 transform translate-y-10 opacity-0 transition-all duration-300';
    document.body.appendChild(toast);
  }

  toast.innerHTML = `<i data-lucide="check-circle" class="w-4 h-4 text-emerald-400"></i> <span>${message}</span>`;
  if (window.lucide) window.lucide.createIcons();

  toast.classList.remove('translate-y-10', 'opacity-0');
  setTimeout(() => {
    toast.classList.add('translate-y-10', 'opacity-0');
  }, 3500);
}

// Showreel Modal
window.openShowreelModal = function() {
  sfx.playClick();
  const modal = document.getElementById('generic-modal');
  const modalContent = document.getElementById('modal-content');
  if (!modal || !modalContent) return;

  modalContent.innerHTML = `
    <div class="p-8">
      <div class="flex items-center justify-between pb-4 border-b border-cyan-500/20 mb-6">
        <div>
          <span class="text-xs font-mono uppercase tracking-wider text-cyan-400">Vision 2026</span>
          <h3 class="text-2xl font-bold font-heading text-white">IntradaySpell Tech Showreel</h3>
        </div>
        <button onclick="closeModal()" class="w-10 h-10 rounded-full bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition-colors">
          <i data-lucide="x" class="w-5 h-5"></i>
        </button>
      </div>

      <div class="aspect-video rounded-xl bg-slate-950 border border-cyan-500/40 relative overflow-hidden flex flex-col items-center justify-center p-6 text-center mb-6">
        <div class="w-20 h-20 rounded-full bg-cyan-500/20 border-2 border-cyan-400 flex items-center justify-center text-cyan-400 mb-4 animate-pulse">
          <i data-lucide="play" class="w-8 h-8 ml-1"></i>
        </div>
        <h4 class="text-lg font-bold font-heading text-white mb-2">Architecting High-Frequency Digital Reality</h4>
        <p class="text-xs font-mono text-cyan-300 max-w-md mb-4">
          Featuring Datapur Analytics Engine, NITYOKART Hyperlocal Logistics, Cloud Architecture & Zero-Day Threat Mitigation.
        </p>
        <div class="flex items-center gap-3">
          <a href="https://ahammadali1607.github.io/datapur.com/" target="_blank" class="btn-cyber-primary text-xs py-2 px-3">View Datapur Demo</a>
          <a href="https://nityokart.ai.studio/" target="_blank" class="btn-cyber-secondary text-xs py-2 px-3">View NITYOKART Demo</a>
        </div>
      </div>

      <p class="text-xs text-slate-400 text-center font-mono">
        Direct partner meetings available via <a href="mailto:intradayspell@gmail.com" class="text-cyan-400 underline">intradayspell@gmail.com</a>
      </p>
    </div>
  `;

  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
  if (window.lucide) window.lucide.createIcons();
};

// FAQ Accordion
window.toggleFaq = function(button) {
  sfx.playClick();
  const content = button.nextElementSibling;
  const icon = button.querySelector('.faq-icon');
  
  if (content.classList.contains('hidden')) {
    content.classList.remove('hidden');
    icon.style.transform = 'rotate(180deg)';
  } else {
    content.classList.add('hidden');
    icon.style.transform = 'rotate(0deg)';
  }
};

// Contact Form Handling
function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    sfx.playSuccess();

    const name = document.getElementById('contact-name')?.value || '';
    const email = document.getElementById('contact-email')?.value || '';
    const phone = document.getElementById('contact-phone')?.value || 'Not provided';
    const service = document.getElementById('contact-service')?.value || 'General Inquiry';
    const budget = document.getElementById('contact-budget')?.value || 'Flexible';
    const message = document.getElementById('contact-message')?.value || '';

    // Generate formatted mailto
    const subject = encodeURIComponent(`[New Project Inquiry] ${service} - ${name}`);
    const body = encodeURIComponent(
      `Hello IntradaySpell Team,\n\n` +
      `I would like to initiate a project proposal with IntradaySpell:\n\n` +
      `• Name: ${name}\n` +
      `• Email: ${email}\n` +
      `• Phone/WhatsApp: ${phone}\n` +
      `• Service Needed: ${service}\n` +
      `• Estimated Budget: ${budget}\n\n` +
      `Project Brief / Details:\n${message}\n\n` +
      `Looking forward to hearing from your technical lead.\nBest regards,\n${name}`
    );

    const mailtoUrl = `mailto:intradayspell@gmail.com?subject=${subject}&body=${body}`;

    // Show Confirmation Modal
    const modal = document.getElementById('generic-modal');
    const modalContent = document.getElementById('modal-content');
    if (modal && modalContent) {
      modalContent.innerHTML = `
        <div class="p-8 text-center">
          <div class="w-16 h-16 rounded-2xl bg-emerald-500/20 border border-emerald-400 text-emerald-400 flex items-center justify-center mx-auto mb-4">
            <i data-lucide="check" class="w-8 h-8"></i>
          </div>
          <h3 class="text-2xl font-bold font-heading text-white mb-2">Proposal Brief Ready!</h3>
          <p class="text-sm text-slate-300 mb-6 max-w-md mx-auto">
            Thank you, <strong class="text-cyan-300">${name}</strong>. Your project brief has been formatted. Click below to launch your email client or copy our direct address.
          </p>

          <div class="p-4 rounded-xl bg-slate-900 border border-slate-800 text-left mb-6 font-mono text-xs text-slate-300 space-y-1">
            <div><span class="text-cyan-400 font-bold">Service:</span> ${service}</div>
            <div><span class="text-cyan-400 font-bold">Budget:</span> ${budget}</div>
            <div><span class="text-cyan-400 font-bold">Direct Dispatch:</span> intradayspell@gmail.com</div>
          </div>

          <div class="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="${mailtoUrl}" class="btn-cyber-primary w-full sm:w-auto justify-center" onclick="closeModal()">
              <i data-lucide="send" class="w-4 h-4"></i>
              <span>Open in Email App</span>
            </a>
            <button class="btn-cyber-secondary w-full sm:w-auto justify-center" onclick="copyEmailToClipboard(); closeModal()">
              <i data-lucide="copy" class="w-4 h-4"></i>
              <span>Copy Direct Email</span>
            </button>
          </div>
        </div>
      `;
      modal.classList.remove('hidden');
      document.body.style.overflow = 'hidden';
      if (window.lucide) window.lucide.createIcons();
    }

    form.reset();
  });
}

// Audio SFX Toggle
function initAudioToggle() {
  const toggleBtn = document.getElementById('sound-toggle-btn');
  if (!toggleBtn) return;

  toggleBtn.addEventListener('click', () => {
    sfx.enabled = !sfx.enabled;
    if (sfx.enabled) {
      sfx.init();
      sfx.playSuccess();
      toggleBtn.innerHTML = `<i data-lucide="volume-2" class="w-4 h-4 text-cyan-400"></i>`;
      showToast('Cyber UI Audio Enabled 🔊');
    } else {
      toggleBtn.innerHTML = `<i data-lucide="volume-x" class="w-4 h-4 text-slate-400"></i>`;
      showToast('Audio Muted 🔇');
    }
    if (window.lucide) window.lucide.createIcons();
  });
}

// Theme Toggle (Cyber Neon Dark vs High-Tech Light)
function initThemeToggle() {
  const themeBtn = document.getElementById('theme-toggle-btn');
  if (!themeBtn) return;

  themeBtn.addEventListener('click', () => {
    sfx.playClick();
    document.body.classList.toggle('theme-light');
    const isLight = document.body.classList.contains('theme-light');
    
    if (isLight) {
      themeBtn.innerHTML = `<i data-lucide="moon" class="w-4 h-4 text-slate-700"></i>`;
      showToast('Switched to Tech Studio Light Theme ☀️');
    } else {
      themeBtn.innerHTML = `<i data-lucide="sun" class="w-4 h-4 text-cyan-300"></i>`;
      showToast('Switched to Cyber Neon Dark Theme 🌙');
    }
    if (window.lucide) window.lucide.createIcons();
  });
}

// Mobile Menu Drawer
function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const drawer = document.getElementById('mobile-drawer');
  const closeBtn = document.getElementById('mobile-drawer-close');

  if (!menuBtn || !drawer) return;

  menuBtn.addEventListener('click', () => {
    sfx.playClick();
    drawer.classList.remove('translate-x-full');
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      sfx.playClick();
      drawer.classList.add('translate-x-full');
    });
  }

  // Close when clicking nav links inside drawer
  drawer.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      drawer.classList.add('translate-x-full');
    });
  });
}

// DOM Ready Initialization
document.addEventListener('DOMContentLoaded', () => {
  initParticleCanvas();
  renderServices('all');
  renderProjects('all');
  renderTechStack();
  initContactForm();
  initAudioToggle();
  initThemeToggle();
  initMobileMenu();

  // Attach filter buttons
  document.querySelectorAll('[data-service-filter]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      sfx.playClick();
      document.querySelectorAll('[data-service-filter]').forEach(b => {
        b.classList.remove('bg-cyan-500/20', 'text-cyan-300', 'border-cyan-400');
        b.classList.add('text-slate-400', 'border-slate-800');
      });
      btn.classList.add('bg-cyan-500/20', 'text-cyan-300', 'border-cyan-400');
      btn.classList.remove('text-slate-400', 'border-slate-800');
      const cat = btn.getAttribute('data-service-filter');
      renderServices(cat);
    });
  });

  document.querySelectorAll('[data-project-filter]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      sfx.playClick();
      document.querySelectorAll('[data-project-filter]').forEach(b => {
        b.classList.remove('bg-cyan-500/20', 'text-cyan-300', 'border-cyan-400');
        b.classList.add('text-slate-400', 'border-slate-800');
      });
      btn.classList.add('bg-cyan-500/20', 'text-cyan-300', 'border-cyan-400');
      btn.classList.remove('text-slate-400', 'border-slate-800');
      const filter = btn.getAttribute('data-project-filter');
      renderProjects(filter);
    });
  });

  // Attach Estimator Listeners
  const estService = document.getElementById('est-service');
  if (estService) estService.addEventListener('change', updateEstimator);
  document.querySelectorAll('input[name="est-scale"]').forEach(r => r.addEventListener('change', updateEstimator));
  document.querySelectorAll('input[name="est-speed"]').forEach(r => r.addEventListener('change', updateEstimator));
  document.querySelectorAll('input[name="est-addon"]').forEach(cb => cb.addEventListener('change', updateEstimator));
  updateEstimator();

  // Estimator CTA transfer to Contact Form
  const lockEstimateBtn = document.getElementById('lock-estimate-btn');
  if (lockEstimateBtn) {
    lockEstimateBtn.addEventListener('click', () => {
      sfx.playClick();
      const serviceVal = document.getElementById('est-service')?.value || 'Web & App Development';
      const priceVal = document.getElementById('est-price-display')?.textContent || '$2,500';
      const timelineVal = document.getElementById('est-timeline-display')?.textContent || '4 Weeks';
      
      const contactService = document.getElementById('contact-service');
      const contactMsg = document.getElementById('contact-message');

      if (contactService) {
        contactService.value = serviceVal === 'web-app' ? 'Web & App Development' : 'Custom Technology Solution';
      }
      if (contactMsg) {
        contactMsg.value = `I calculated an estimated project investment of ${priceVal} with a delivery timeline of ${timelineVal}. Please prepare an initial proposal milestone plan.`;
      }

      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      showToast('Estimator details transferred to contact form!');
    });
  }

  // Render Lucide Icons
  if (window.lucide) {
    window.lucide.createIcons();
  }
});
