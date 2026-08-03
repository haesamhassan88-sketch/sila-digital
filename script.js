
const menuBtn = document.querySelector('.menu-btn');
const navLinks = document.querySelector('.nav-links');
if (menuBtn && navLinks) {
  menuBtn.addEventListener('click', () => navLinks.classList.toggle('open'));
  navLinks.querySelectorAll('a').forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));
}
const year = document.querySelector('[data-year]');
if (year) year.textContent = new Date().getFullYear();

const form = document.querySelector('#contactForm');
if (form) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.querySelector('#name').value.trim();
    const service = document.querySelector('#service').value.trim();
    const message = document.querySelector('#message').value.trim();
    const text = `Hello Sila Digital,%0AName: ${encodeURIComponent(name)}%0AService: ${encodeURIComponent(service)}%0AMessage: ${encodeURIComponent(message)}`;
    window.open(`https://wa.me/201117667992?text=${text}`, '_blank');
  });
}
