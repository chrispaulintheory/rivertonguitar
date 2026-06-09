(function () {
  var toggle = document.getElementById('nav-toggle');
  var nav    = document.getElementById('mobile-nav');

  if (!toggle || !nav) return;

  function openNav() {
    nav.classList.add('is-open');
    toggle.setAttribute('aria-expanded', 'true');
  }

  function closeNav() {
    nav.classList.remove('is-open');
    toggle.setAttribute('aria-expanded', 'false');
  }

  toggle.addEventListener('click', function () {
    if (toggle.getAttribute('aria-expanded') === 'true') {
      closeNav();
    } else {
      openNav();
    }
  });

  // Escape key closes
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeNav();
  });

  // click outside closes
  document.addEventListener('click', function (e) {
    if (!nav.contains(e.target) && !toggle.contains(e.target)) {
      closeNav();
    }
  });

  // clicking a nav link closes the drawer
  nav.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', closeNav);
  });
}());
