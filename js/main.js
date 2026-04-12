// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
  navToggle.classList.toggle('active');
});

// Close mobile nav on link click
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    navToggle.classList.remove('active');
  });
});

// Navbar background on scroll
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Scroll-triggered fade-in animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.animate-on-scroll').forEach(el => {
  observer.observe(el);
});

// Book Call Modal
const bookModal = document.getElementById('bookModal');
const bookModalClose = document.getElementById('bookModalClose');

document.querySelectorAll('.book-call-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    bookModal.classList.add('active');
    navLinks.classList.remove('active');
    navToggle.classList.remove('active');
  });
});

bookModalClose.addEventListener('click', () => {
  bookModal.classList.remove('active');
});

bookModal.addEventListener('click', (e) => {
  if (e.target === bookModal) {
    bookModal.classList.remove('active');
  }
});
