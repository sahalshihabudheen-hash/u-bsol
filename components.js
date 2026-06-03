// ===== U-BSOL Shared Components =====

function getNavHTML(activePage) {
  const links = `
    <li><a href="index.html" class="nav-link ${activePage === 'home' ? 'active' : ''}">Home</a></li>
    <li><a href="products.html" class="nav-link ${['products', 'ecommerce', 'cms', 'hrms', 'lms'].includes(activePage) ? 'active' : ''}">Products</a></li>
    <li><a href="features.html" class="nav-link ${activePage === 'features' ? 'active' : ''}">Features</a></li>
    <li><a href="packages.html" class="nav-link ${activePage === 'packages' ? 'active' : ''}">Packages</a></li>
    <li><a href="contact.html" class="nav-link ${activePage === 'contact' ? 'active' : ''}">Contact</a></li>
    <li><a href="blog.html" class="nav-link ${activePage === 'blog' ? 'active' : ''}">Blog</a></li>
  `;
  
  const mobileLinks = `
    <a href="index.html" class="mob-link ${activePage === 'home' ? 'active' : ''}">Home</a>
    <a href="products.html" class="mob-link ${['products', 'ecommerce', 'cms', 'hrms', 'lms'].includes(activePage) ? 'active' : ''}">Products</a>
    <a href="features.html" class="mob-link ${activePage === 'features' ? 'active' : ''}">Features</a>
    <a href="packages.html" class="mob-link ${activePage === 'packages' ? 'active' : ''}">Packages</a>
    <a href="contact.html" class="mob-link ${activePage === 'contact' ? 'active' : ''}">Contact</a>
    <a href="blog.html" class="mob-link ${activePage === 'blog' ? 'active' : ''}">Blog</a>
  `;

  return `
  <nav class="navbar" id="mainNav">
    <div class="nav-container">
      <a href="index.html" class="nav-brand">
        <img src="https://u-bsol.com/assets/logo/16543974481.png" alt="U-BSOL Logo" class="nav-logo-img">
      </a>
      <ul class="nav-links">${links}</ul>
      <div class="nav-cta">
        <a href="https://u-bsol.com/login" class="btn-ghost" target="_blank">Sign In</a>
        <a href="contact.html" class="btn-primary magnetic">Book a Call</a>
      </div>
      <div class="hamburger" id="hamburger" onclick="toggleMobileNav()">
        <span></span><span></span><span></span>
      </div>
    </div>
  </nav>
  <div class="mobile-nav" id="mobileNav">
    <div class="mob-nav-content">
      ${mobileLinks}
      <div style="margin-top: 24px; display:flex; flex-direction:column; gap:16px;">
        <a href="https://u-bsol.com/login" class="btn-ghost" style="text-align:center;" target="_blank">Sign In</a>
        <a href="contact.html" class="btn-primary" style="text-align:center;">Book a Call</a>
      </div>
    </div>
  </div>`;
}

function toggleMobDropdown(header) {
  const submenu = header.nextElementSibling;
  const chevron = header.querySelector('.mob-chevron');
  if (submenu) {
    if (submenu.style.display === 'none' || submenu.style.display === '') {
      submenu.style.display = 'flex';
      chevron.style.transform = 'rotate(180deg)';
    } else {
      submenu.style.display = 'none';
      chevron.style.transform = 'rotate(0deg)';
    }
  }
}

function getFooterHTML() {
  return `
  <footer class="enterprise-footer">
    <div class="footer-glow-bg"></div>
    <div class="footer-container">
      <div class="footer-grid">
        
        <!-- Left Column -->
        <div class="footer-col footer-brand-col">
          <a href="index.html" class="nav-brand" style="text-decoration:none; margin-bottom:20px; display:inline-block;">
            <img src="https://u-bsol.com/assets/logo/16543974481.png" alt="U-BSOL Logo" class="nav-logo-img">
          </a>
          <p class="footer-desc" style="line-height: 1.8; margin-top: 15px; font-size: 14px; color: var(--text-secondary); text-align: left;">
            U-BSOL - LLP<br>
            Malappuram-Manjeri Road,<br>
            Panayi,<br>
            Perimbalam[Po],<br>
            Malappuram [Dst],<br>
            Kerala , India -<br>
            676509
          </p>
        </div>

        <!-- Learn More -->
        <div class="footer-col">
          <h4 class="footer-heading">Learn More</h4>
          <ul class="footer-links">
            <li><a href="about.html">About-us</a></li>
            <li><a href="templates.html">Templates</a></li>
            <li><a href="https://u-bsol.com/blogs" target="_blank">Blogs</a></li>
            <li><a href="affiliate-program.html">Affiliate Program</a></li>
            <li><a href="additional-addons.html">Additional Add-ons</a></li>
          </ul>
        </div>

        <!-- Need Help -->
        <div class="footer-col">
          <h4 class="footer-heading">Need help ?</h4>
          <ul class="footer-links">
            <li><a href="faq.html">FAQ</a></li>
            <li><a href="terms-conditions.html">Terms & Conditions</a></li>
            <li><a href="privacy-policy.html">Privacy Policy</a></li>
            <li><a href="contact.html">Contact-us</a></li>
            <li><a href="packages.html">Packages</a></li>
          </ul>
        </div>

        <!-- Get in Touch -->
        <div class="footer-col">
          <h4 class="footer-heading">Get in Touch</h4>
          <ul class="footer-links" style="display:flex; flex-direction:column; gap:12px;">
            <li>
              <a href="mailto:info@u-bsol.com" style="display:flex; align-items:center; gap:8px;">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                info@u-bsol.com
              </a>
            </li>
            <li>
              <a href="tel:+918330011641" style="display:flex; align-items:center; gap:8px;">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
                +91 8330011641
              </a>
            </li>
            <li>
              <a href="tel:+919746026547" style="display:flex; align-items:center; gap:8px;">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                +91 9746026547
              </a>
            </li>
            <li>
              <a href="https://wa.me/+918330011641" target="_blank" style="display:flex; align-items:center; gap:8px;">
                <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24"><path d="M12.012 2C6.49 2 2.008 6.48 2.008 12.003c0 1.764.464 3.483 1.345 5.002L2 22l5.127-1.345a9.975 9.975 0 0 0 4.885 1.272c5.52 0 10.002-4.481 10.002-10.005C22.014 6.48 17.532 2 12.012 2zm5.405 14.475c-.23.647-1.328 1.238-1.848 1.353-.52.115-1.22.185-3.528-.77-2.793-1.157-4.595-4.01-4.733-4.195-.138-.185-1.128-1.503-1.128-2.868 0-1.365.71-2.038.963-2.313.253-.275.553-.345.738-.345.184 0 .368.005.53.012.167.008.39-.067.61.465.23.553.783 1.914.852 2.052.07.138.115.3.023.484-.092.184-.138.3-.276.46-.138.162-.288.356-.415.495-.138.138-.283.29-.126.565.155.275.69 1.15 1.48 1.854.912.815 1.774 1.07 2.05 1.208.275.138.437.115.6-.07.16-.184.69-.805.874-1.08.184-.276.368-.23.62-.138.253.092 1.59.75 1.866.888.276.138.46.208.53.323.07.115.07.668-.16 1.315z"/></svg>
                +91 8330011641
              </a>
            </li>
          </ul>
        </div>

        <!-- Our Newsletter -->
        <div class="footer-col">
          <h4 class="footer-heading">Our Newsletter</h4>
          <p class="footer-desc" style="font-size:14px; color:var(--text-secondary); margin-bottom: 20px; text-align: left;">Subscribe to our newsletter to get our regular latest news and updates.</p>
          <form style="display:flex; gap:0; border: 1px solid var(--border); border-radius:12px; overflow:hidden; background:rgba(255,255,255,0.02);" onsubmit="event.preventDefault(); alert('Subscribed successfully!');">
            <input type="email" placeholder="Email Address" required style="flex:1; border:none; padding:12px 16px; background:transparent; color:var(--text-primary); font-size:14px; min-width:0; outline:none;">
            <button type="submit" style="background:var(--primary); color:#fff; border:none; padding:12px 20px; font-weight:700; font-size:14px; cursor:pointer; transition:var(--transition);">Join</button>
          </form>
        </div>

      </div>
      
      <div class="footer-divider"></div>
      
      <div class="footer-bottom">
        <div class="footer-copy">© 2026 U-BSOL. All rights reserved.</div>
        <div class="footer-copy">Made with <span style="color:#ff4444;">❤️</span> in Kerala, India</div>
      </div>
    </div>
  </footer>`;
}

function getProductsSuiteHTML(activePage) {
  const products = [
    {
      id: 'ecommerce',
      title: 'U-BSOL E-Commerce',
      desc: 'A high-performance modern commerce engine built for global scale. Empower unified omnichannel sales, localized multi-currencies, and hyper-scalable inventory grids.',
      link: 'ecommerce.html',
      tag: 'SaaS Platform',
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>`,
      features: [
        'Ultra-fast API-first Headless Engine',
        'Integrated AI Order Dispatch & Routing',
        'Unified Dashboard & Multi-Warehouse'
      ]
    },
    {
      id: 'cms',
      title: 'U-BSOL CMS',
      desc: 'Intuitive, decoupled Content Management System for managing complex digital media across mobile apps, websites, smart channels, and global endpoints.',
      link: 'cms.html',
      tag: 'Media & content',
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>`,
      features: [
        'Real-time Collaborative Editing Suite',
        'Automated Multilingual Translations',
        'Advanced Access Control & Live Workflows'
      ]
    },
    {
      id: 'hrms',
      title: 'U-BSOL HRMS',
      desc: 'Intelligent Human Resource & Office Management System. Manage all physical assets, seat/desk planning, visitor logs, attendance tracking, and payroll auto-settlement, keeping the whole office perfectly in sync.',
      link: 'hrms.html',
      tag: 'Office & Payroll',
      icon: `<svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>`,
      features: [
        'Unified Desk, Visitors & Workspace Booking',
        'Biometric Terminal Sync & Geotracked Logs',
        'Direct Bank Payouts & Automated Payroll'
      ]
    },
    {
      id: 'lms',
      title: 'U-BSOL LMS 360',
      desc: 'The complete school and institute automation engine. LMS 360 manages all single minute school activities—timetables, exams, lectures, parent-teacher alerts, and reports—to make every school operation automated and hands-free.',
      link: 'lms.html',
      tag: 'School Automation',
      icon: `<svg viewBox="0 0 150 120" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 36px; height: 36px; display: block;">
        <!-- Left page base -->
        <path d="M 72 89 C 46 84 26 68 26 45 C 26 41 27 37 29 33 C 43 42 60 48 72 50 Z" fill="var(--text-primary)" stroke="var(--text-muted)" stroke-width="1.5" />
        <!-- Left orange accent -->
        <path d="M 24 70 C 24 75 36 98 72 103 C 72 97 72 92 72 89 C 46 84 26 68 26 45 C 26 43 26 42 26 40 C 26 45 24 65 24 70 Z" fill="#FF6600" />
        <!-- Right page base -->
        <path d="M 76 89 C 102 84 122 68 122 45 C 122 41 121 37 119 33 C 105 42 88 48 76 50 Z" fill="var(--text-primary)" stroke="var(--text-muted)" stroke-width="1.5" />
        <!-- Right orange accent -->
        <path d="M 124 70 C 124 75 112 98 76 103 C 76 97 76 92 76 89 C 102 84 122 68 122 45 C 122 43 122 42 122 40 C 122 45 124 65 124 70 Z" fill="#FF6600" />
      </svg>`,
      features: [
        'Minute-by-Minute Micro-Attendance Tracking',
        'Automated School Timetables & Exam Schedulers',
        '360° Automated Student, Parent & Teacher Sync Portal'
      ]
    }
  ];

  // Exclude current page if needed
  const filteredProducts = products.filter(p => p.id !== activePage);

  let cardsHTML = '';
  filteredProducts.forEach(p => {
    let featuresHTML = '';
    p.features.forEach(f => {
      featuresHTML += `
        <li style="display: flex; align-items: center; gap: 10px; font-size: 13.5px; color: var(--text-secondary); margin-bottom: 8px;">
          <svg style="color: var(--orange); flex-shrink: 0;" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
          <span>${f}</span>
        </li>
      `;
    });

    let imageHTML = '';
    if (p.id === 'ecommerce') {
      imageHTML = `
        <div style="margin: 0 0 20px 0; border-radius: 12px; overflow: hidden; border: 1px solid var(--glass-border); line-height: 0;">
          <img src="assets/img/ecommerce_ecosystem.png" alt="E-Commerce Ecosystem Overview" style="width: 100%; height: auto; display: block;" referrerPolicy="no-referrer" />
        </div>
      `;
    } else if (p.id === 'cms') {
      imageHTML = `
        <div style="margin: 0 0 20px 0; border-radius: 12px; overflow: hidden; border: 1px solid var(--glass-border); line-height: 0;">
          <img src="assets/img/cms_ecosystem.png" alt="CMS Ecosystem Overview" style="width: 100%; height: auto; display: block;" referrerPolicy="no-referrer" />
        </div>
      `;
    } else if (p.id === 'hrms') {
      imageHTML = `
        <div style="margin: 0 0 20px 0; border-radius: 12px; overflow: hidden; border: 1px solid var(--glass-border); line-height: 0;">
          <img src="assets/img/hrms_ecosystem.png" alt="HRMS Ecosystem Overview Diagram" style="width: 100%; height: auto; display: block;" referrerPolicy="no-referrer" />
        </div>
      `;
    } else if (p.id === 'lms') {
      imageHTML = `
        <div style="margin: 0 0 20px 0; border-radius: 12px; overflow: hidden; border: 1px solid var(--glass-border); line-height: 0;">
          <img src="assets/img/lms_ecosystem.png" alt="LMS 360 Ecosystem Overview" style="width: 100%; height: auto; display: block;" referrerPolicy="no-referrer" />
        </div>
      `;
    }

    let footerButtonsHTML = `
      <a href="${p.id}.html" class="btn-packages magnetic" style="padding: 10px 22px; font-size: 14px; text-decoration: none; display: inline-flex; align-items: center;">
        View Details
        <svg class="btn-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin-left: 4px; display: inline-block; vertical-align: middle;"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
      </a>
    `;

    let cardHeaderHTML = '';
    if (p.id === 'lms') {
      cardHeaderHTML = `
        <div style="margin-bottom: 24px; background: rgba(255,102,0,0.03); padding: 16px; border-radius: 20px; border: 1px solid rgba(255,102,0,0.25); display: inline-block; max-width: 100%;">
          <img src="assets/img/lms_logo.png" alt="U-BSOL LMS 360" style="height: 48px; max-width: 100%; display: block;" referrerPolicy="no-referrer" />
        </div>
      `;
    } else {
      cardHeaderHTML = `
        <div class="prod-icon" style="background: transparent; border: none; padding: 0; min-height: unset; height: unset; margin-bottom: 24px;">
          ${p.icon}
        </div>
        <h3 class="prod-title">${p.title}</h3>
      `;
    }

    cardsHTML += `
      <div class="prod-card hover-glow reveal-up" style="display: flex; flex-direction: column; justify-content: space-between;">
        <div>
          ${cardHeaderHTML}
          <p class="prod-desc">${p.desc}</p>
          ${imageHTML}
          <ul style="list-style: none; padding: 0; margin: 0 0 28px 0; display: flex; flex-direction: column; gap: 8px;">
            ${featuresHTML}
          </ul>
        </div>
        <div class="prod-footer" style="gap: 12px;">
          ${footerButtonsHTML}
          <span style="font-size:12px; font-weight:700; color:var(--text-muted); text-transform:uppercase; letter-spacing:0.05em; margin-left: auto;">${p.tag}</span>
        </div>
      </div>
    `;
  });

  return `
    <section class="page-section" style="padding: 90px 0; border-top: 1px solid var(--glass-border); background: linear-gradient(180deg, rgba(255,102,0,0.01) 0%, transparent 100%);">
      <div class="container" style="max-width: 1200px; margin: 0 auto;">
        <div class="reveal-up" style="margin-bottom: 56px; text-align: center;">
          <div class="products-badge">
            <span class="products-badge-dot"></span>
            U-BSOL Suite
          </div>
          <h2 style="font-size: clamp(30px, 4.5vw, 48px); font-family: 'Space Grotesk', sans-serif; font-weight: 800; margin-bottom: 20px; color: var(--text-primary); letter-spacing: -1px;">
            Explore Our <span style="background: linear-gradient(135deg, #ff6600, #ffaa00); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">Enterprise Ecosystem</span>
          </h2>
          <p style="color: var(--text-secondary); max-width: 600px; margin: 0 auto; font-size: 16.5px; line-height: 1.8;">
            Check out other modular SaaS & business automation systems built for effortless scaling.
          </p>
        </div>
        <div class="products-grid">
          ${cardsHTML}
        </div>
      </div>
    </section>
  `;
}

function injectComponents(activePage) {
  // Inject Navbar
  const navContainer = document.getElementById('nav-container');
  if (navContainer) navContainer.innerHTML = getNavHTML(activePage);

  // Inject Footer
  const footerContainer = document.getElementById('footer-container');
  if (footerContainer) footerContainer.innerHTML = getFooterHTML();

  // Inject Products Suite if container exists
  const suiteContainer = document.getElementById('products-suite-container');
  if (suiteContainer) {
    suiteContainer.innerHTML = getProductsSuiteHTML(activePage);
  }

  // Inject Floating Theme Toggle
  if (!document.getElementById('floating-theme-toggle')) {
    const toggle = document.createElement('div');
    toggle.id = 'floating-theme-toggle';
    toggle.className = 'theme-toggle-floating';
    toggle.onclick = toggleTheme;
    toggle.innerHTML = `
      <div class="icon-sun">☀️</div>
      <div class="icon-moon">🌙</div>
    `;
    document.body.appendChild(toggle);
  }

  // Scroll effect on navbar
  const nav = document.getElementById('mainNav');
  window.addEventListener('scroll', () => {
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 30);
  });

  // Init features
  initTilt();
  initCustomCursor();
  initMagneticButtons();
  initParticles();
}

function initCustomCursor() {
  if (window.innerWidth < 768) return;
  
  const cursor = document.createElement('div');
  cursor.className = 'custom-cursor';
  document.body.appendChild(cursor);
  
  const cursorDot = document.createElement('div');
  cursorDot.className = 'custom-cursor-dot';
  document.body.appendChild(cursorDot);
  
  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    cursorDot.style.left = e.clientX + 'px';
    cursorDot.style.top = e.clientY + 'px';
    
    if (!cursor.classList.contains('visible')) {
      cursor.classList.add('visible');
      cursorDot.classList.add('visible');
    }
  });
  
  document.querySelectorAll('a, button, .social-btn, .accordion-header, .theme-toggle-floating').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('active'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('active'));
  });
}


function initMagneticButtons() {
  const buttons = document.querySelectorAll('.btn-primary, .btn-outline-large, .theme-toggle-floating, .magnetic');
  buttons.forEach(btn => {
    btn.addEventListener('mousemove', (e) => {
      const rect = btn.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      btn.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px) scale(1.05)`;
    });
    btn.addEventListener('mouseleave', () => {
      btn.style.transform = `translate(0, 0) scale(1)`;
    });
  });
}

function initParticles() {
  const canvas = document.getElementById('hero-particles');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let particles = [];
  function resize() {
    canvas.width = canvas.parentElement.offsetWidth;
    canvas.height = canvas.parentElement.offsetHeight;
  }
  window.addEventListener('resize', resize);
  resize();
  class Particle {
    constructor() { this.reset(); }
    reset() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.vx = (Math.random() - 0.5) * 0.5;
      this.vy = (Math.random() - 0.5) * 0.5;
      this.size = Math.random() * 2 + 1;
    }
    update() {
      this.x += this.vx; this.y += this.vy;
      if (this.x < 0 || this.x > canvas.width || this.y < 0 || this.y > canvas.height) this.reset();
    }
    draw() {
      ctx.fillStyle = 'rgba(255, 102, 0, 0.3)';
      ctx.beginPath(); ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2); ctx.fill();
    }
  }
  for (let i = 0; i < 50; i++) particles.push(new Particle());
  function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => { p.update(); p.draw(); });
    requestAnimationFrame(animate);
  }
  animate();
}

function initTilt() {
  const tiltElements = document.querySelectorAll('.tilt-3d');
  tiltElements.forEach(el => {
    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -15;
      const rotateY = ((x - centerX) / centerX) * 15;
      el.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    });
    el.addEventListener('mouseleave', () => {
      el.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`;
    });
  });
}

function toggleMobileNav() {
  const mobileNav = document.getElementById('mobileNav');
  const hamburger = document.getElementById('hamburger');
  if (mobileNav) mobileNav.classList.toggle('open');
  if (hamburger) hamburger.classList.toggle('open');
}

function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  updateThemeIcon(newTheme);
}

function updateThemeIcon(theme) {
  document.querySelectorAll('.icon-sun').forEach(el => el.style.display = theme === 'light' ? 'block' : 'none');
  document.querySelectorAll('.icon-moon').forEach(el => el.style.display = theme === 'light' ? 'none' : 'block');
}

document.addEventListener('DOMContentLoaded', () => {
  const savedTheme = localStorage.getItem('theme') || 'dark';
  document.documentElement.setAttribute('data-theme', savedTheme);
  setTimeout(() => updateThemeIcon(savedTheme), 50);
});

// ===== TYPING ANIMATION =====
const words = ["Digital Experiences", "SaaS Platforms", "AI Solutions", "Software Architectures"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typeTimer;

function typeEffect() {
  const typingElement = document.querySelector('.typing-text');
  if (!typingElement) return;
  const currentWord = words[wordIndex];
  if (isDeleting) {
    typingElement.textContent = currentWord.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typingElement.textContent = currentWord.substring(0, charIndex + 1);
    charIndex++;
  }
  let typeSpeed = isDeleting ? 50 : 100;
  if (!isDeleting && charIndex === currentWord.length) {
    typeSpeed = 2000; isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false; wordIndex = (wordIndex + 1) % words.length; typeSpeed = 500;
  }
  typeTimer = setTimeout(typeEffect, typeSpeed);
}

// ===== VIDEO MODAL =====
function openVideoModal() {
  const modal = document.getElementById('videoModal');
  const iframe = document.getElementById('videoIframe');
  iframe.src = "https://www.youtube.com/embed/vDNPcdE5iWQ?autoplay=1";
  if(modal) modal.classList.add('active');
}

function closeVideoModal() {
  const modal = document.getElementById('videoModal');
  const iframe = document.getElementById('videoIframe');
  if(modal) modal.classList.remove('active');
  if(iframe) iframe.src = "";
}

document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector('.typing-text')) setTimeout(typeEffect, 1000);
});

// ===== SCROLL OBSERVER =====
document.addEventListener('DOMContentLoaded', () => {
  const observerOptions = { root: null, rootMargin: '0px', threshold: 0.15 };
  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  document.querySelectorAll('.animate-on-scroll').forEach(el => { observer.observe(el); });
});

// ===== ACCORDION TOGGLE =====
function toggleAccordion(element) {
  const item = element.parentElement;
  const isActive = item.classList.contains('active');
  document.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('active'));
  if (!isActive) item.classList.add('active');
}

// ===== PLATFORM CALLOUT TOAST =====
function showPlatformComingSoon(event, platformName) {
  if (event) event.preventDefault();
  
  const existing = document.getElementById('ubsol-toast');
  if (existing) existing.remove();
  
  const toast = document.createElement('div');
  toast.id = 'ubsol-toast';
  toast.style.cssText = `
    position: fixed;
    bottom: 30px;
    right: 30px;
    background: rgba(15, 15, 18, 0.95);
    border: 1.5px solid rgba(255, 102, 0, 0.4);
    box-shadow: 0 10px 40px rgba(255,102,0,0.2), 0 0 20px rgba(0,0,0,0.8);
    padding: 16px 24px;
    border-radius: 12px;
    color: #fff;
    font-family: inherit;
    font-size: 14px;
    z-index: 999999;
    display: flex;
    align-items: center;
    gap: 12px;
    backdrop-filter: blur(12px);
    transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
    transform: translateY(20px);
    opacity: 0;
  `;
  
  toast.innerHTML = `
    <span style="color: #ff6600; display: inline-flex; align-items: center;">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
    </span>
    <div>
      <strong style="display:block; font-family:'Space Grotesk',sans-serif; margin-bottom: 2px; color: #fff; font-size:14.5px;">Portal Link Coming Soon</strong>
      <span style="color: #a1a1aa; font-size: 12.5px;">The live platform portal for <strong>${platformName || 'this service'}</strong> will be published shortly.</span>
    </div>
  `;
  
  document.body.appendChild(toast);
  
  // Force reflow
  toast.offsetHeight;
  
  toast.style.transform = 'translateY(0)';
  toast.style.opacity = '1';
  
  setTimeout(() => {
    toast.style.transform = 'translateY(20px)';
    toast.style.opacity = '0';
    setTimeout(() => {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 400);
  }, 4500);
}

// Expose functions to the global scope for inline HTML handlers and script tags
window.injectComponents = injectComponents;
window.toggleMobileNav = toggleMobileNav;
window.toggleTheme = toggleTheme;
window.toggleMobDropdown = toggleMobDropdown;
window.showPlatformComingSoon = showPlatformComingSoon;
window.openVideoModal = openVideoModal;
window.closeVideoModal = closeVideoModal;
window.toggleAccordion = toggleAccordion;