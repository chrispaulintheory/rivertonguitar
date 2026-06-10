(function () {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.noValidate = true;

  const messages = {
    parent_name: 'Please enter your name.',
    phone: 'Please enter a phone number.',
    email: 'Please enter your email address.',
    student_age: 'Please select an age range.'
  };

  function getError(el) {
    if (el.required && !el.value.trim()) {
      return messages[el.name] || 'This field is required.';
    }
    if (el.type === 'email' && el.value && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(el.value)) {
      return 'Please enter a valid email address.';
    }
    if (el.type === 'tel' && el.value && !/[\d()\-\s+.]{7,}/.test(el.value)) {
      return 'Please enter a valid phone number.';
    }
    return '';
  }

  function setError(el, msg) {
    el.classList.toggle('invalid', !!msg);
    let errorEl = el.parentElement.querySelector('.field-error');
    if (!errorEl) {
      errorEl = document.createElement('span');
      errorEl.className = 'field-error';
      el.insertAdjacentElement('afterend', errorEl);
    }
    errorEl.textContent = msg;
  }

  form.addEventListener('blur', function (e) {
    const el = e.target;
    if (el.tagName !== 'INPUT' && el.tagName !== 'SELECT') return;
    if (el.required || el.type === 'email' || el.type === 'tel') {
      setError(el, getError(el));
    }
  }, true);

  form.addEventListener('input', function (e) {
    const el = e.target;
    if (el.tagName !== 'INPUT' && el.tagName !== 'SELECT') return;
    setError(el, '');
  });

  form.addEventListener('submit', function (e) {
    const fields = form.querySelectorAll('input, select');
    let first = null;
    fields.forEach(function (el) {
      if (el.required || el.type === 'email' || el.type === 'tel') {
        const msg = getError(el);
        setError(el, msg);
        if (msg && !first) first = el;
      }
    });
    if (first) {
      e.preventDefault();
      first.focus();
    }
  });
}());
