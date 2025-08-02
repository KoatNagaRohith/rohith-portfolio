// script.js
// Handles mobile navigation toggling and the contact form submission.

// Toggle the mobile navigation menu when the burger icon is clicked.
const burger = document.getElementById('burger');
const navLinks = document.getElementById('nav-links');

burger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Close the navigation when a link is clicked (mobile view)
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    if (navLinks.classList.contains('open')) {
      navLinks.classList.remove('open');
    }
  });
});

/**
 * Sends the contact form contents via the default mail client.
 * Prevents page reload and opens a mailto URL containing the
 * user‑entered values. Replace the placeholder email address
 * with your real contact address once deployed.
 *
 * @param {Event} event The form submission event
 * @returns {boolean} Always returns false to prevent default behaviour
 */
function sendEmail(event) {
  event.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  // Compose subject and body for the mailto link
  const subject = encodeURIComponent(`Portfolio Inquiry from ${name}`);
  const body = encodeURIComponent(`${message}\n\nContact email: ${email}`);
  // Replace 'your.email@example.com' with your actual email address
  window.location.href = `mailto:your.email@example.com?subject=${subject}&body=${body}`;
  return false;
}