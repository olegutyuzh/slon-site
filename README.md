# Memorial Website / Меморіальний сайт

> 🇺🇦 [Українська](#українська) | 🇬🇧 [English](#english)

---

## Українська

### 💙 Присвята

Цей сайт створено на згадку про **Ігор Утюж** *(18.04.1996 — 07.12.2023)*.

> *«Поки ми пам'ятаємо — вони з нами.»*

[Кілька слів про людину: ким була, чим займалася, що любила, що залишила по
собі. Цей розділ — серце сайту, тож напишіть від щирого серця.]

---

### 📖 Про проєкт

**slon.life** — це меморіальний вебсайт, створений для збереження пам'яті,
історій, фотографій і спогадів. Сайт є цифровим простором, де родина, друзі та
всі небайдужі можуть вшанувати пам'ять та поділитися своїми спогадами.

#### Можливості

- 📷 Галерея фотографій
- 📜 Біографія та життєвий шлях
- 💬 Книга спогадів та співчуттів
- 🕯️ Віртуальна свічка пам'яті
- 📅 Хронологія важливих подій
- 📱 Адаптивний дизайн для всіх пристроїв

---

### 🛠️ Технології

- **HTML5** — структура та семантична розмітка
- **CSS3** — стилізація, анімації, адаптивність
- **JavaScript** — інтерактивність та динамічний контент

---

### 🚀 Встановлення

#### Передумови

Вам знадобиться лише сучасний браузер (Chrome, Firefox, Safari, Edge).
Для локальної розробки бажано встановити [Git](https://git-scm.com/).

#### Кроки

1. Клонуйте репозиторій:

   ```bash
   git clone https://github.com/[username]/[repo-name].git
   ```

2. Перейдіть у папку проєкту:

   ```bash
   cd [repo-name]
   ```

3. Відкрийте `index.html` у браузері:

   ```bash
   open index.html
   ```

   Або запустіть локальний сервер (рекомендовано):

   ```bash
   # Python 3
   python -m http.server 8000

   # Node.js (за наявності npx)
   npx serve
   ```

4. Відкрийте у браузері: `http://localhost:8000`

---

### 📂 Структура проєкту

```text
[repo-name]/
├── index.html          # Головна сторінка
├── pages/              # Додаткові сторінки
│   ├── biography.html
│   ├── gallery.html
│   └── memories.html
├── assets/
│   ├── css/            # Стилі
│   ├── js/             # Скрипти
│   ├── images/         # Фотографії
│   └── fonts/          # Шрифти
└── README.md
```

---

### 💡 Використання

Сайт є статичним і не потребує бекенду. Щоб додати або змінити контент:

- **Фотографії** — додавайте у `assets/images/` та оновіть `gallery.html`
- **Спогади** — редагуйте відповідні HTML-файли у папці `pages/`
- **Стилі** — змінюйте у `assets/css/style.css`

---

### 🌐 Деплой на Netlify

Netlify — це безкоштовний хостинг для статичних сайтів з автоматичним деплоєм з
 GitHub.

#### Спосіб 1: Через інтерфейс Netlify (найпростіший)

1. Зареєструйтеся на [netlify.com](https://www.netlify.com/) (можна через GitHub-акаунт)
2. Натисніть **"Add new site"** → **"Import an existing project"**
3. Оберіть **GitHub** та авторизуйтеся
4. Виберіть ваш репозиторій зі списку
5. Налаштування білду залиште порожніми (для статичного сайту):
   - **Build command:** *(залишити порожнім)*
   - **Publish directory:** `.` *(або вкажіть папку, якщо `index.html` не в корені)*
6. Натисніть **"Deploy site"**

Через 30–60 секунд сайт буде доступний за адресою типу `https://random-name-12345.netlify.app`.

#### Спосіб 2: Через Netlify CLI

1. Встановіть Netlify CLI:

   ```bash
   npm install -g netlify-cli
   ```

2. Авторизуйтеся:

   ```bash
   netlify login
   ```

3. У папці проєкту виконайте:

   ```bash
   netlify deploy --prod
   ```

4. Дотримуйтесь інструкцій у терміналі.

#### Спосіб 3: Drag & Drop

Найшвидший спосіб без Git: просто перетягніть папку проєкту на сторінку [app.netlify.com/drop](https://app.netlify.com/drop).

#### Власний домен

Щоб під'єднати власний домен (наприклад, `memory-of-name.com`):

1. У панелі Netlify відкрийте ваш сайт
2. Перейдіть у **Domain settings** → **Add custom domain**
3. Введіть домен та слідуйте інструкціям щодо налаштування DNS-записів

#### Файл конфігурації (опціонально)

Для додаткових налаштувань створіть файл `netlify.toml` у корені проєкту:

```toml
[build]
  publish = "."

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
```

---

### 🤝 Внесок у проєкт (Contributing)

Якщо ви хочете поділитися спогадами, фотографіями або допомогти з розробкою —
будь ласка, зробіть це з повагою до пам'яті.

1. Зробіть форк репозиторію
2. Створіть гілку для вашої правки (`git checkout -b feature/your-contribution`)
3. Зробіть коміт (`git commit -m 'Додано спогад від...'`)
4. Запуште у вашу гілку (`git push origin feature/your-contribution`)
5. Створіть Pull Request

Для надсилання особистих спогадів напишіть на: **[email@example.com]**

---

### 📄 Ліцензія

Цей проєкт поширюється під ліцензією **MIT** — деталі у файлі [LICENSE](LICENSE).

Фотографії, особисті тексти та спогади є власністю родини і не можуть
використовуватися без дозволу.

---

### 🙏 Подяки

Дякуємо всім, хто допоміг створити цей сайт, поділився спогадами та зберігає
світлу пам'ять.

---
---

## English

### 💙 In Memory Of

This website is dedicated to the memory of **Ihor Utiuzh**
*(April 18, 1996 — December 08, 2023)*.

> *"As long as we remember, they are with us."*

[A few words about the person: who they were, what they loved, what they left
behind. This section is the heart of the site, so write from the heart.]

---

### 📖 About

**slon.life** is a memorial website created to preserve memories, stories,
photographs, and tributes. It serves as a digital space where family, friends,
and everyone who cared can honor the memory and share their recollections.

#### Features

- 📷 Photo gallery
- 📜 Biography and life journey
- 💬 Guestbook for memories and condolences
- 🕯️ Virtual memorial candle
- 📅 Timeline of significant events
- 📱 Responsive design for all devices

---

### 🛠️ Built With

- **HTML5** — structure and semantic markup
- **CSS3** — styling, animations, responsiveness
- **JavaScript** — interactivity and dynamic content

---

### 🚀 Installation

#### Prerequisites

All you need is a modern browser (Chrome, Firefox, Safari, Edge). For local
development, [Git](https://git-scm.com/) is recommended.

#### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/[username]/[repo-name].git
   ```

2. Navigate to the project folder:

   ```bash
   cd [repo-name]
   ```

3. Open `index.html` in your browser:

   ```bash
   open index.html
   ```

   Or run a local server (recommended):

   ```bash
   # Python 3
   python -m http.server 8000

   # Node.js (if npx is available)
   npx serve
   ```

4. Open in browser: `http://localhost:8000`

---

### 📂 Project Structure

```text
[repo-name]/
├── index.html          # Home page
├── pages/              # Additional pages
│   ├── biography.html
│   ├── gallery.html
│   └── memories.html
├── assets/
│   ├── css/            # Styles
│   ├── js/             # Scripts
│   ├── images/         # Photographs
│   └── fonts/          # Fonts
└── README.md
```

---

### 💡 Usage

The site is fully static and requires no backend. To add or update content:

- **Photos** — add to `assets/images/` and update `gallery.html`
- **Memories** — edit the corresponding HTML files in the `pages/` folder
- **Styles** — modify `assets/css/style.css`

---

### 🌐 Deploy to Netlify

Netlify is a free hosting service for static sites with automatic deployment
from GitHub.

#### Option 1: Through Netlify UI (easiest)

1. Sign up at [netlify.com](https://www.netlify.com/) (you can use your GitHub account)
2. Click **"Add new site"** → **"Import an existing project"**
3. Choose **GitHub** and authorize
4. Select your repository from the list
5. Leave build settings empty (for a static site):
   - **Build command:** *(leave empty)*
   - **Publish directory:** `.` *(or specify a folder if `index.html` is not
   in the root)*
6. Click **"Deploy site"**

After 30–60 seconds, your site will be available at a URL like `https://random-name-12345.netlify.app`.

#### Option 2: Netlify CLI

1. Install Netlify CLI:

   ```bash
   npm install -g netlify-cli
   ```

2. Log in:

   ```bash
   netlify login
   ```

3. In the project folder, run:

   ```bash
   netlify deploy --prod
   ```

4. Follow the terminal prompts.

#### Option 3: Drag & Drop

The fastest way without Git: simply drag your project folder onto [app.netlify.com/drop](https://app.netlify.com/drop).

#### Custom Domain

To connect a custom domain (e.g. `memory-of-name.com`):

1. In the Netlify dashboard, open your site
2. Go to **Domain settings** → **Add custom domain**
3. Enter your domain and follow the DNS configuration instructions

#### Configuration File (optional)

For additional settings, create a `netlify.toml` file in the project root:

```toml
[build]
  publish = "."

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-Content-Type-Options = "nosniff"
```

---

### 🤝 Contributing

If you would like to share memories, photographs, or help with development —
please do so with respect for the memory.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/your-contribution`)
3. Commit your changes (`git commit -m 'Added memory from...'`)
4. Push to the branch (`git push origin feature/your-contribution`)
5. Open a Pull Request

To submit personal memories privately, please email: **[email@example.com]**

---

### 📄 License

This project is distributed under the **MIT License** — see the
[LICENSE](LICENSE) file for details.

Photographs, personal texts, and memories are the property of the family and
may not be used without permission.

---

### 🙏 Acknowledgments

Thank you to everyone who helped create this site, shared their memories, and
keeps the bright memory alive.

---

<div align="center">

*Зроблено з ❤️ та теплою пам'яттю / Made with ❤️ and warm memory*

</div>
