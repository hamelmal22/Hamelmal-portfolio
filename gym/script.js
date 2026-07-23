// --- Mobile Menu Toggle ---
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const navToggleLabel = document.querySelector('.nav-toggle-label');
const iconOpen = document.querySelector('.icon-open');
const iconClose = document.querySelector('.icon-close');

// If using a checkbox toggle method or standard button click:
if (navToggle) {
  navToggle.addEventListener('change', () => {
    if (navToggle.checked) {
      iconOpen.style.display = 'none';
      iconClose.style.display = 'block';
    } else {
      iconOpen.style.display = 'block';
      iconClose.style.display = 'none';
    }
  });
}

// --- Close mobile menu when a link is clicked ---
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    if (navToggle && navToggle.checked) {
      navToggle.checked = false;
      iconOpen.style.display = 'block';
     iconClose.style.display = 'none';
    }
  });
});

// --- Simple Form Submission Handling ---
const enrollmentForm = document.querySelector('.form-container');
if (enrollmentForm) {
  enrollmentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for registering with Hami Gym! We will contact you shortly.');
    enrollmentForm.reset();
  });
}

const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Your message has been sent successfully. Thank you!');
    contactForm.reset();
  });
}