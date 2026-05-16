/* ============================================================
   PRIORITY 1 — Subnav condensed-стан при скролі
   Підключати в кінці <body> або з defer
   ============================================================ */

(function () {
  'use strict';

  const subnav = document.querySelector('.subnav');
  if (!subnav) return; // на сторінках без subnav нічого не робимо

  const body = document.body;
  const THRESHOLD = 120;     // px скролу для активації
  const HYSTERESIS = 40;     // зона нечутливості, щоб не «мерехтіло» на межі

  let isCondensed = false;
  let ticking = false;

  function update() {
    const y = window.scrollY || window.pageYOffset;

    // Гістерезис: вмикаємо при >120, вимикаємо тільки при <80.
    // Так уникаємо постійних toggle, якщо користувач завис на межі.
    if (!isCondensed && y > THRESHOLD) {
      isCondensed = true;
      subnav.classList.add('is-condensed');
      body.classList.add('subnav-condensed');
    } else if (isCondensed && y < THRESHOLD - HYSTERESIS) {
      isCondensed = false;
      subnav.classList.remove('is-condensed');
      body.classList.remove('subnav-condensed');
    }

    ticking = false;
  }

  function onScroll() {
    if (!ticking) {
      window.requestAnimationFrame(update);
      ticking = true;
    }
  }

  // Початковий стан (якщо сторінка завантажилась з прокрутом)
  update();

  window.addEventListener('scroll', onScroll, { passive: true });
})();
