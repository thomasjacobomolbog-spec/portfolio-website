// Simple script for form submission (example only)
document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Thank you! Your message has been sent.");
  this.reset();
});

const typed = new Typed('.multiple-text', {
      strings: ['Fontend Developer', 'backend Developer','blockchain Developer','Web Designer'],
      typeSpeed: 80,
      backspeed: 80,
      backDelay: 1200,
      loop: true,
    });