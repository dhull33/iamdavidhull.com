// Toggle Navbar
const mainNav = document.getElementById('js-menu');

const navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', () => {
  return mainNav.classList.toggle('active');
});

// Arrow Down on Mobile Screen
const downArrow = document.getElementById('down-arrow');

downArrow.addEventListener('click', () => {
  return downArrow.classList.toggle('not-active');
});
