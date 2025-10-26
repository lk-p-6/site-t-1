const currentPath = window.location.pathname.split('/').pop() || 'index.html';
const navLinks = document.querySelectorAll('[data-nav-menu] a');

navLinks.forEach(link => {
  const href = link.getAttribute('href');
  if ((currentPath === '' && href === 'index.html') || href === currentPath) {
    link.classList.add('active');
  }
});

const navToggle = document.querySelector('[data-nav-toggle]');
const navMenu = document.querySelector('[data-nav-menu]');
const navOverlay = document.querySelector('[data-nav-overlay]');

const closeNav = () => {
  if (!navMenu) return;
  navMenu.classList.remove('open');
  document.body.classList.remove('nav-open');
  if (navToggle) {
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', 'Открыть меню');
  }
};

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const isOpen = navMenu.classList.toggle('open');
    document.body.classList.toggle('nav-open', isOpen);
    navToggle.setAttribute('aria-expanded', String(isOpen));
    navToggle.setAttribute('aria-label', isOpen ? 'Закрыть меню' : 'Открыть меню');
  });
}

if (navOverlay) {
  navOverlay.addEventListener('click', closeNav);
}

navLinks.forEach(link => {
  link.addEventListener('click', closeNav);
});

const yearSpan = document.querySelector('[data-year]');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
