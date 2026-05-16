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
    `<li><a href="${p.href}" class="${activePage === p.id ? 'active' : ''}">${p.label}</a></li>`
  ).join('');
  const mobileLinks = pages.map(p =>
    `<a href="${p.href}" class="${activePage === p.id ? 'active' : ''}">${p.label}</a>`
  ).join('');

  return `
  <nav class="navbar" id="mainNav">
    <a href="index.html" class="nav-brand">
      <div class="nav-logo-icon">UB</div>
      <span class="nav-brand-text">U-<span>BSOL</span></span>
    </a>
    <ul class="nav-links">${links}</ul>
    <div class="nav-cta">
      <a href="https://u-bsol.com/login" class="btn-ghost" target="_blank">Sign In</a>
      <a href="packages.html" class="btn-primary">Get Started</a>
    </div>
    <div class="hamburger" id="hamburger" onclick="toggleMobileNav()">
      <span></span><span></span><span></span>
    </div>
  </nav>
  <div class="mobile-nav" id="mobileNav">
    ${mobileLinks}
    <a href="https://u-bsol.com/login" class="btn-ghost" target="_blank">Sign In</a>
    <a href="packages.html" class="btn-primary mobile-only">Get Started</a>
  </div>`;
}

function getFooterHTML() {
  return `
  <footer class="footer">
    <div class="footer-grid">
      <div>
        <a href="index.html" class="nav-brand" style="text-decoration:none;">
          <div class="nav-logo-icon">UB</div>
          <span class="nav-brand-text" style="font-size:20px;">U-<span>BSOL</span></span>
        </a>
        <p class="footer-brand-desc">A smarter way to create, manage and grow your business through a complete cloud-based digital platform.</p>
        <div class="footer-socials">
          <a href="#" class="social-btn" title="Facebook"><svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.312h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg></a>
          <a href="#" class="social-btn" title="Twitter"><svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></a>
          <a href="#" class="social-btn" title="LinkedIn"><svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></a>
          <a href="https://wa.me/+918330011641" class="social-btn" title="WhatsApp" target="_blank"><svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12.012 2C6.49 2 2.008 6.48 2.008 12.003c0 1.764.464 3.483 1.345 5.002L2 22l5.127-1.345a9.975 9.975 0 0 0 4.885 1.272c5.52 0 10.002-4.481 10.002-10.005C22.014 6.48 17.532 2 12.012 2zm5.405 14.475c-.23.647-1.328 1.238-1.848 1.353-.52.115-1.22.185-3.528-.77-2.793-1.157-4.595-4.01-4.733-4.195-.138-.185-1.128-1.503-1.128-2.868 0-1.365.71-2.038.963-2.313.253-.275.553-.345.738-.345.184 0 .368.005.53.012.167.008.39-.067.61.465.23.553.783 1.914.852 2.052.07.138.115.3.023.484-.092.184-.138.3-.276.46-.138.162-.288.356-.415.495-.138.138-.283.29-.126.565.155.275.69 1.15 1.48 1.854.912.815 1.774 1.07 2.05 1.208.275.138.437.115.6-.07.16-.184.69-.805.874-1.08.184-.276.368-.23.62-.138.253.092 1.59.75 1.866.888.276.138.46.208.53.323.07.115.07.668-.16 1.315z"/></svg></a>
        </div>
      </div>
      <div>
        <p class="footer-heading">Learn More</p>
        <ul class="footer-links">
          <li><a href="about.html">About Us</a></li>
          <li><a href="features.html">Features</a></li>
          <li><a href="packages.html">Packages</a></li>
          <li><a href="https://u-bsol.com/blogs" target="_blank">Blog</a></li>
          <li><a href="https://u-bsol.com/affiliate-program" target="_blank">Affiliate Program</a></li>
        </ul>
      </div>
      <div>
        <p class="footer-heading">Need Help?</p>
        <ul class="footer-links">
          <li><a href="https://u-bsol.com/faq" target="_blank">FAQ</a></li>
          <li><a href="https://u-bsol.com/terms-conditions" target="_blank">Terms & Conditions</a></li>
          <li><a href="https://u-bsol.com/privacy-policy" target="_blank">Privacy Policy</a></li>
          <li><a href="contact.html">Contact Us</a></li>
        </ul>
      </div>
      <div>
        <p class="footer-heading">Get in Touch</p>
        <ul class="footer-links">
          <li><a href="mailto:info@u-bsol.com">info@u-bsol.com</a></li>
          <li><a href="tel:+914832944414">+91 4832944414</a></li>
          <li><a href="tel:+918330011641">+91 8330011641</a></li>
          <li><a href="https://wa.me/+918330011641" target="_blank">WhatsApp Us</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span class="footer-copy">© 2026 U-BSOL. All rights reserved.</span>
      <span class="footer-copy">Made with ❤️ in Kerala, India</span>
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

  // Init Tilt effect
  initTilt();
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
      
      const rotateX = ((y - centerY) / centerY) * -15; // Max 15 deg
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
  
  // Add animation class to body
  document.body.classList.add('theme-toggling');
  setTimeout(() => document.body.classList.remove('theme-toggling'), 600);
  
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
    typeSpeed = 2000; // Pause at end
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    wordIndex = (wordIndex + 1) % words.length;
    typeSpeed = 500; // Pause before new word
  }

  typeTimer = setTimeout(typeEffect, typeSpeed);
}

// ===== VIDEO MODAL =====
function openVideoModal() {
  const modal = document.getElementById('videoModal');
  const iframe = document.getElementById('videoIframe');
  // Sample video URL (YouTube embed)
  iframe.src = "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1";
  if(modal) modal.classList.add('active');
}

function closeVideoModal() {
  const modal = document.getElementById('videoModal');
  const iframe = document.getElementById('videoIframe');
  if(modal) modal.classList.remove('active');
  if(iframe) iframe.src = ""; // Stop video
}

document.addEventListener('DOMContentLoaded', () => {
  // Init typing effect
  if (document.querySelector('.typing-text')) {
    setTimeout(typeEffect, 1000);
  }
});

// ===== SCROLL OBSERVER =====
document.addEventListener('DOMContentLoaded', () => {
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.animate-on-scroll').forEach(el => {
    observer.observe(el);
  });
});

// ===== ACCORDION TOGGLE =====
function toggleAccordion(element) {
  const item = element.parentElement;
  const isActive = item.classList.contains('active');
  
  // Close all other items
  document.querySelectorAll('.accordion-item').forEach(i => i.classList.remove('active'));
  
  // Toggle current item
  if (!isActive) {
    item.classList.add('active');
  }
}