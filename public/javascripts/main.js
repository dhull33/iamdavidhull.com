const mainNav = document.getElementById('js-menu');

const navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', () => {
  return mainNav.classList.toggle('active');
});
