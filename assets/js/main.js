const currentPath = window.location.pathname.split('/').pop() || 'index.html';
const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  const href = link.getAttribute('href');
  if ((currentPath === '' && href === 'index.html') || href === currentPath) {
    link.classList.add('active');
  }
});

const yearSpan = document.querySelector('[data-year]');
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}
