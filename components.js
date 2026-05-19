// ===== U-BSOL Shared Components =====

function getNavHTML(activePage) {
  const pages = [
    { href: 'index.html', label: 'Home', id: 'home' },
    { href: 'features.html', label: 'Features', id: 'features' },
    { href: 'packages.html', label: 'Packages', id: 'packages' },
    { href: 'about.html', label: 'About', id: 'about' },
    { href: 'contact.html', label: 'Contact', id: 'contact' },
  ];
  const links = pages.map(p =>
    `<li><a href="${p.href}" class="nav-link ${activePage === p.id ? 'active' : ''}">${p.label}</a></li>`
  ).join('');
  
  const mobileLinks = pages.map(p =>
    `<a href="${p.href}" class="mob-link ${activePage === p.id ? 'active' : ''}">${p.label}</a>`
  ).join('');

  return `
  <nav class="navbar" id="mainNav">
    <div class="nav-container">
      <a href="index.html" class="nav-brand">
        <img src="https://u-bsol.com/assets/logo/16543974481.png" alt="U-BSOL Logo" class="nav-logo-img">
      </a>
      <ul class="nav-links">${links}</ul>
      <div class="nav-cta">
        <a href="https://u-bsol.com/login" class="btn-ghost" target="_blank">Sign In</a>
        <a href="packages.html" class="btn-primary magnetic">Get Started</a>
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
        <a href="packages.html" class="btn-primary" style="text-align:center;">Get Started</a>
      </div>
    </div>
  </div>`;
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
            <li><a href="https://u-bsol.com/templates" target="_blank">Templates</a></li>
            <li><a href="https://u-bsol.com/blogs" target="_blank">Blogs</a></li>
            <li><a href="https://u-bsol.com/affiliate-program" target="_blank">Affiliate Program</a></li>
            <li><a href="https://u-bsol.com/additional-addons" target="_blank">Additional Add-ons</a></li>
          </ul>
        </div>

        <!-- Need Help -->
        <div class="footer-col">
          <h4 class="footer-heading">Need help ?</h4>
          <ul class="footer-links">
            <li><a href="https://u-bsol.com/faq" target="_blank">FAQ</a></li>
            <li><a href="https://u-bsol.com/terms-conditions" target="_blank">Terms & Conditions</a></li>
            <li><a href="https://u-bsol.com/privacy-policy" target="_blank">Privacy Policy</a></li>
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

function injectComponents(activePage) {
  // Inject Navbar
  const navContainer = document.getElementById('nav-container');
  if (navContainer) navContainer.innerHTML = getNavHTML(activePage);

  // Inject Footer
  const footerContainer = document.getElementById('footer-container');
  if (footerContainer) footerContainer.innerHTML = getFooterHTML();

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
  });
  
  document.querySelectorAll('a, button, .social-btn, .accordion-header, .theme-toggle-floating').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('active'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('active'));
  });
}

function initMagneticButtons() {
  const buttons = document.querySelectorAll('.btn-primary, .btn-outline-large, .theme-toggle-floating');
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
const words = ["Market Place", "Corporate Identity", "E-Commerce System", "Billing System"];
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