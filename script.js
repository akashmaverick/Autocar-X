const hamburger = document.getElementById('hamburgerToggle');
const sidebar = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  sidebar.classList.toggle('active');
  hamburger.classList.toggle('open');
});

document.querySelectorAll('.mobile-sidebar a').forEach(link => {
  link.addEventListener('click', () => {
    sidebar.classList.remove('active');
    hamburger.classList.remove('open');
  });
});

document.addEventListener('click', (e) => {
  if (
    sidebar.classList.contains('active') &&
    !sidebar.contains(e.target) &&
    !hamburger.contains(e.target)
  ) {
    sidebar.classList.remove('active');
    hamburger.classList.remove('open');
  }
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    sidebar.classList.remove('active');
    hamburger.classList.remove('open');
  }
});
