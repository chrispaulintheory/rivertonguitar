(function () {
  var list = document.querySelector('.faq-list');
  if (!list) return;

  // panels are open by default in the HTML so the page works without JS;
  // collapse everything on load so sighted users get the accordion
  list.querySelectorAll('.faq-trigger').forEach(function (btn) {
    btn.setAttribute('aria-expanded', 'false');
    btn.nextElementSibling.classList.add('is-closed');
  });

  // toggle via event delegation — one listener for the whole list
  list.addEventListener('click', function (e) {
    var btn = e.target.closest('.faq-trigger');
    if (!btn) return;

    var panel = btn.nextElementSibling;
    var isOpen = btn.getAttribute('aria-expanded') === 'true';

    if (isOpen) {
      btn.setAttribute('aria-expanded', 'false');
      panel.classList.add('is-closed');
    } else {
      btn.setAttribute('aria-expanded', 'true');
      panel.classList.remove('is-closed');
    }
  });
}());
