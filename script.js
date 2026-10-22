
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const id = link.getAttribute('href');
    if (!id || id === '#') return;
    const el = document.querySelector(id);
    if (!el) return;
    event.preventDefault();
    el.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
    if (history.replaceState) history.replaceState(null, '', id);
  });
});

document.querySelectorAll('.bundle-btn').forEach((btn) => {
  btn.addEventListener('click', () => {
    const parent = btn.closest('.bundle-card');
    document.querySelectorAll('.bundle-card').forEach(card => card.classList.remove('active-choice'));
    if (parent) parent.classList.add('active-choice');
  });
});
