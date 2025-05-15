document.addEventListener('DOMContentLoaded', function() {
  const burger = document.getElementById('hamburger');
  const nav = document.querySelector('.main-nav');
  burger.addEventListener('click', () => {
    nav.classList.toggle('open');
  });
});