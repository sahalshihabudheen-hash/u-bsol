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
          <a href="#" class="social-btn" title="Facebook">📘</a>
          <a href="#" class="social-btn" title="Twitter">🐦</a>
          <a href="#" class="social-btn" title="LinkedIn">💼</a>
          <a href="https://wa.me/+918330011641" class="social-btn" title="WhatsApp" target="_blank">💬</a>
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

  // Scroll effect on navbar
  const nav = document.getElementById('mainNav');
  window.addEventListener('scroll', () => {
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 30);
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
