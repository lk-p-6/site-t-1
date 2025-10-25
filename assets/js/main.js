const nav = document.querySelector('nav');
const toggle = document.querySelector('.menu-toggle');
const backToTop = document.querySelector('.back-to-top');

if (toggle) {
  toggle.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
}

document.querySelectorAll('nav ul a').forEach(link => {
  link.addEventListener('click', () => nav.classList.remove('open'));
});

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll('[data-animate]').forEach(el => {
  observer.observe(el);
});

window.addEventListener('scroll', () => {
  if (!backToTop) return;
  if (window.scrollY > 320) {
    backToTop.classList.add('visible');
  } else {
    backToTop.classList.remove('visible');
  }
});

if (backToTop) {
  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
