
// Mobile menu
const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.site-nav');
navToggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', String(open));
});

// Active link logic: About + Contact highlighted. Work optional.
const path = location.pathname.replace(/\/+$/, '');
document.querySelectorAll('.nav-link').forEach(a => {
  const href = a.getAttribute('href').replace(/\/+$/, '');
  if (href && path.endsWith(href) && /about|contact/i.test(href)) {
    a.classList.add('is-active');
  }
});

// Theme toggle
const toggle = document.querySelector('.theme-toggle');
const setTheme = (mode) => {
  document.documentElement.dataset.theme = mode;
  localStorage.setItem('theme', mode);
};
const saved = localStorage.getItem('theme');
if (saved) setTheme(saved);
toggle?.addEventListener('click', () => {
  const next = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
  setTheme(next);
});

// Accessibility: reduce motion prefers
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Fade-in on scroll
if (!prefersReduced) {
  const io = new IntersectionObserver((entries)=>{
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('is-visible');
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-in, .card, .overview-card, .img-ph').forEach(el => io.observe(el));
}
