  // <!-- ===== JS: Навігація (скрол) по роках ===== -->    
    (function() {
      const yearNav = document.querySelector('.year-nav');
      const grid = document.querySelector('.media-grid');
      if (!grid) return;

      // Плавний скрол до року
      if (yearNav) {
        yearNav.querySelectorAll('a[href^="#year-"]').forEach(link => {
          link.addEventListener('click', (e) => {
            e.preventDefault();
            const id = link.getAttribute('href').slice(1);
            const target = document.getElementById(id);
            if (!target) return;
            const offset = 80;
            const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top, behavior: 'smooth' });
          });
        });

        // Підсвічування активного року під час скролу
        const dividers = Array.from(document.querySelectorAll('.year-divider[id^="year-"]'));
        const navLinks = yearNav.querySelectorAll('a[data-year-jump]');

        // Поріг від верху viewport, нижче якого вважаємо рік "активним".
        // 140px = трохи нижче за header, щоб рік ставав активним, коли його
        // дивайдер реально опускається в зону читання.
        const ACTIVATE_OFFSET = 140;

        function highlightCurrentYear() {
          // Беремо НАЙНИЖЧИЙ дивайдер, верх якого вже перетнув поріг ACTIVATE_OFFSET
          // (тобто вже видимий або трохи вище екрана). Використовуємо
          // getBoundingClientRect — координати відносно viewport, тож вкладеність
          // у .media-grid / .media-inner не впливає.
          let currentYear = null;
          for (const div of dividers) {
            const top = div.getBoundingClientRect().top;
            if (top <= ACTIVATE_OFFSET) {
              currentYear = div.id.replace('year-', '');
            } else {
              break; // дивайдери йдуть у DOM-порядку зверху вниз
            }
          }

          // Якщо жоден ще не перетнув поріг (ми вище за перший рік) —
          // підсвічуємо найперший, але тільки коли секція .media вже у viewport.
          if (!currentYear) {
            const mediaSection = document.getElementById('media');
            if (mediaSection && mediaSection.getBoundingClientRect().top <= ACTIVATE_OFFSET) {
              currentYear = dividers[0]?.id.replace('year-', '');
            }
          }

          navLinks.forEach(link => {
            link.classList.toggle('is-current', link.dataset.yearJump === currentYear);
          });
        }

        let ticking = false;
        window.addEventListener('scroll', () => {
          if (!ticking) {
            window.requestAnimationFrame(() => {
              highlightCurrentYear();
              ticking = false;
            });
            ticking = true;
          }
        }, { passive: true });
        highlightCurrentYear();
      }

      // Повернення до переліку років
      const backToTopLinks = document.querySelectorAll('.year-back-to-top');
      if (backToTopLinks.length && yearNav) {
        backToTopLinks.forEach(link => {
          link.addEventListener('click', (e) => {
            e.preventDefault();
            const offset = 80;
            const top = yearNav.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top, behavior: 'smooth' });
          });
        });
      }
    })();