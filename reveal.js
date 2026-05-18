/* Reveal-on-scroll: додає клас is-visible коли блок входить у viewport */
(function () {
  const items = document.querySelectorAll('.reveal-on-scroll');
  if (!items.length) return;

  // Якщо браузер не підтримує IntersectionObserver — просто показуємо все
  if (!('IntersectionObserver' in window)) {
    items.forEach(el => el.classList.add('is-visible'));
    return;
  }

  const io = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        io.unobserve(entry.target); // після появи більше не стежимо
      }
    });
  }, {
    rootMargin: '0px 0px -10% 0px', // спрацьовує трохи раніше, ніж блок повністю у вікні
    threshold: 0.05                  // достатньо ~5% видимого щоб запустити
  });

  items.forEach(el => io.observe(el));
})();