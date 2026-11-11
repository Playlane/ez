// Mobile menu
const menuBtn = document.querySelector('.menu-btn');
const menu = document.getElementById('menu');
if (menuBtn && menu) {
  menuBtn.addEventListener('click', () => {
    const open = menu.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(open));
  });
}

// Footer year
document.querySelectorAll('.yr').forEach(el => { el.textContent = new Date().getFullYear(); });

// Contact form (Formspree). Replace YOUR_FORM_ID in contact.html with your form ID.
const form = document.getElementById('contact-form');
if (form) {
  const status = form.querySelector('.form-status');
  const show = (msg) => { status.textContent = msg; status.classList.add('show'); };
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (form.action.includes('YOUR_FORM_ID')) {
      show('Online requests aren\'t set up yet. Please call 227-259-9679 to book.');
      return;
    }
    const btn = form.querySelector('button[type="submit"]');
    btn.disabled = true; btn.textContent = 'Sending…';
    try {
      const res = await fetch(form.action, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } });
      if (!res.ok) throw new Error();
      form.reset();
      show('Request sent. We\'ll contact you to confirm a time.');
    } catch {
      show('Your request didn\'t send. Check your connection and try again, or call 227-259-9679.');
    } finally {
      btn.disabled = false; btn.textContent = 'Send request';
    }
  });
}
