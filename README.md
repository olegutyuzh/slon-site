# 🕊️ Ihor "Slon" Utyuzh — Memorial Website

A tribute to the life, courage, and memory of Ihor Utyuzh  
🇺🇦 Defender of Ukraine • Callsign "Slon" • 1996–2023

> 🇺🇦 [Українська](#українська) | 🇬🇧 [English](#english)

---

## Українська

### 💙 Присвята

Цей сайт створено на згадку про **Ігоря Утюжа** *(позивний «Слон», 1996–2023)*
— захисника України.

> *«Поки ми пам'ятаємо — вони з нами.»*

---

### 📁 Структура проєкту

```text
slon-site/
├── .vscode/                       # Налаштування VS Code (Live Server тощо)
│
├── css/                           # Стилі сайту
│   ├── style.css                  # Основні стилі
│   ├── biography.css              # Сторінка біографії
│   ├── candle.css                 # Віртуальна свічка пам'яті
│   ├── football.css               # Розділ про футбол
│   ├── fragments.css              # Фрагменти/уривки
│   ├── life-hero-styles.css       # Стилі головного блоку
│   ├── memories.css               # Книга спогадів
│   ├── menu.css                   # Головне меню
│   ├── bottom_menu.css            # Нижнє меню
│   ├── sub_menu.css               # Підменю
│   ├── share.css                  # Кнопки поширення
│   ├── stories.css                # Розділ історій
│   └── voices.css                 # Голосові спогади
│
├── img/                           # Зображення та графіка
│   ├── bio/                       # Фото для біографії
│   ├── football/                  # Фото з футбольної тематики
│   ├── life/                      # Життєві фотографії
│   ├── stories/                   # Зображення до історій
│   ├── SVG icons/                 # Векторні іконки
│   ├── hero-portrait.jpg          # Головний портрет
│   ├── hero-portrait2.jpg         # Альтернативний портрет
│   ├── igor-portrait-small.png    # Малий портрет
│   ├── elephant-bg.jpg            # Фонове зображення
│   ├── elephant.svg               # Символ «Слона»
│   ├── candle.svg                 # Іконка свічки
│   ├── shield.svg                 # Іконка щита
│   ├── map.svg                    # Карта
│   ├── message.svg                # Іконка повідомлення
│   ├── symbol-slon.jpg            # Символіка
│   ├── symbol-slon.png            # Символіка (PNG)
│   ├── life1.jpg, life2.JPG, …    # Життєві кадри
│   ├── war1.jpg, war2.jpg         # Воєнні фото
│   └── og-cover.png               # Прев'ю для соцмереж
│
├── stories/                       # Окремі історії та події
│   ├── concert-zhadana.html       # Концерт Жадана
│   ├── den-narodzhenia.html       # День народження
│   ├── football.html              # Футбольна історія
│   └── memorialna-doshka-shkola.html  # Меморіальна дошка у школі
│
├── index.html                     # Головна сторінка
├── biography.html                 # Біографія
├── memories.html                  # Книга спогадів
├── memory-new.html                # Нова форма спогаду
├── stories.html                   # Список історій
├── football.html                  # Футбольний розділ
├── fragments.html                 # Фрагменти
├── life-hero-preview.html         # Прев'ю героя
├── preview.html                   # Загальне прев'ю
│
├── memories.json                  # База спогадів
├── i18n.json                      # Переклади (мультимовність)
├── .hintrc                        # Конфіг HTMLHint
├── .markdownlint.json             # Конфіг Markdownlint
│
├── favicon.ico                    # Іконка сайту
├── robots.txt                     # Інструкції для пошукових ботів
├── sitemap.xml                    # Мапа сайту
└── README.md                      # Цей файл
```

---

### 💻 Локальний запуск та дебаг

Найпростіший спосіб запустити та дебажити проєкт локально — використати
розширення **Live Server** для Visual Studio Code. Воно запускає локальний
сервер з автоматичним перезавантаженням сторінки після кожного збереження 
файлу.

#### Передумови

- [Visual Studio Code](https://code.visualstudio.com/)
- [Git](https://git-scm.com/) (для клонування репозиторію)

#### Крок 1: Клонуйте репозиторій

```bash
git clone https://github.com/[username]/slon-site.git
cd slon-site
```

#### Крок 2: Встановіть розширення Live Server

1. Відкрийте VS Code
2. Перейдіть у вкладку **Extensions** (`Ctrl+Shift+X` / `Cmd+Shift+X`)
3. Знайдіть **`Live Server`** від Ritwick Dey
4. Натисніть **Install**

Або встановіть через термінал:

```bash
code --install-extension ritwickdey.LiveServer
```

#### Крок 3: Запустіть проєкт

1. Відкрийте папку проєкту у VS Code: **File → Open Folder...**
2. Відкрийте файл `index.html`
3. Запустіть Live Server одним зі способів:
   - Клік правою кнопкою миші на `index.html` → **"Open with Live Server"**
   - Натисніть **"Go Live"** у нижньому правому куті VS Code
   - Використайте шорткат `Alt+L Alt+O`

Сайт автоматично відкриється у браузері за адресою `http://127.0.0.1:5500`.

#### Крок 4: Дебаг

- **Авто-перезавантаження** — будь-яка зміна у HTML/CSS/JS перезавантажує сторінку
- **DevTools** — натисніть `F12` у браузері для відкриття інструментів розробника:
  - **Console** — JavaScript-помилки та `console.log()`
  - **Elements** — інспекція HTML/CSS у реальному часі
  - **Network** — перевірка завантаження зображень і ресурсів
  - **Lighthouse** — аудит продуктивності, SEO та доступності

#### Власні налаштування (опціонально)

Щоб змінити порт або браузер, створіть файл `.vscode/settings.json` у корені проєкту:

```jsonc
{
  // Порт локального сервера
  "liveServer.settings.port": 5500,
  // Браузер для відкриття (chrome, firefox, edge тощо)
  "liveServer.settings.CustomBrowser": "chrome",
  // true — не відкривати браузер автоматично
  "liveServer.settings.NoBrowser": false,
  // Файли, що не викликають перезавантаження
  "liveServer.settings.ignoreFiles": [
    ".vscode/**",
    "**/*.scss",
    "**/*.sass"
  ]
}
```

#### Усунення несправностей

- **«Port 5500 is already in use»** — змініть порт у налаштуваннях або зупиніть
 процес, що його займає
- **Браузер не відкривається** — перевірте налаштування `CustomBrowser` або
відкрийте `http://127.0.0.1:5500` вручну
- **Зміни не видно** — зробіть жорстке перезавантаження
(`Ctrl+Shift+R` / `Cmd+Shift+R`) для очищення кешу

---

### 🚀 Варіанти деплою

#### 🌱 Netlify

Перетягніть ZIP у [app.netlify.com/drop](https://app.netlify.com/drop) — готово.

#### 🐙 GitHub Pages

Push → Settings → Pages → root → live.

#### ⚡ Vercel

Upload → Deploy → instant.

---

### 🎨 Візуальні матеріали

- **favicon.ico** — іконка сайту  
- **og-image.jpg** — прев'ю для соцмереж  
- **img/** — усі фотографії, що використовуються на сайті  

---

### ❤️ Світла пам'ять

Усі матеріали належать родині Ігоря Утюжа.

---
---

## English

### 💙 In Memory Of

This website is dedicated to the memory of **Ihor Utyuzh**
*(callsign "Slon", 1996–2023)* — defender of Ukraine.

> *"As long as we remember, they are with us."*

---

### 📁 Project Structure

```text
slon-site/
├── .vscode/                       # VS Code settings (Live Server, etc.)
│
├── css/                           # Site stylesheets
│   ├── style.css                  # Main styles
│   ├── biography.css              # Biography page
│   ├── candle.css                 # Virtual memorial candle
│   ├── football.css               # Football section
│   ├── fragments.css              # Fragments/excerpts
│   ├── life-hero-styles.css       # Hero block styles
│   ├── memories.css               # Memories guestbook
│   ├── menu.css                   # Main menu
│   ├── bottom_menu.css            # Bottom menu
│   ├── sub_menu.css               # Submenu
│   ├── share.css                  # Share buttons
│   ├── stories.css                # Stories section
│   └── voices.css                 # Voice memories
│
├── img/                           # Images and graphics
│   ├── bio/                       # Biography photos
│   ├── football/                  # Football-related photos
│   ├── life/                      # Life photos
│   ├── stories/                   # Story images
│   ├── SVG icons/                 # Vector icons
│   ├── hero-portrait.jpg          # Main portrait
│   ├── hero-portrait2.jpg         # Alternative portrait
│   ├── igor-portrait-small.png    # Small portrait
│   ├── elephant-bg.jpg            # Background image
│   ├── elephant.svg               # "Slon" symbol
│   ├── candle.svg                 # Candle icon
│   ├── shield.svg                 # Shield icon
│   ├── map.svg                    # Map
│   ├── message.svg                # Message icon
│   ├── symbol-slon.jpg            # Symbolism
│   ├── symbol-slon.png            # Symbolism (PNG)
│   ├── life1.jpg, life2.JPG, …    # Life moments
│   ├── war1.jpg, war2.jpg         # Wartime photos
│   └── og-cover.png               # Social media preview
│
├── stories/                       # Individual stories and events
│   ├── concert-zhadana.html       # Zhadan's concert
│   ├── den-narodzhenia.html       # Birthday
│   ├── football.html              # Football story
│   └── memorialna-doshka-shkola.html  # Memorial plaque at school
│
├── index.html                     # Home page
├── biography.html                 # Biography
├── memories.html                  # Memories guestbook
├── memory-new.html                # New memory form
├── stories.html                   # Stories listing
├── football.html                  # Football section
├── fragments.html                 # Fragments
├── life-hero-preview.html         # Hero preview
├── preview.html                   # General preview
│
├── memories.json                  # Memories database
├── i18n.json                      # Translations (multilingual)
├── .hintrc                        # HTMLHint config
├── .markdownlint.json             # Markdownlint config
│
├── favicon.ico                    # Site icon
├── robots.txt                     # Search engine instructions
├── sitemap.xml                    # Sitemap
└── README.md                      # This file
```

---

### 💻 Local Development & Debugging

The easiest way to run and debug the project locally is with
the **Live Server** extension for Visual Studio Code. It launches a
local development server with automatic reload on every save —
perfect for static HTML/CSS sites.

#### Prerequisites

- [Visual Studio Code](https://code.visualstudio.com/)
- [Git](https://git-scm.com/) (to clone the repository)

#### Step 1: Clone the repository

```bash
git clone https://github.com/[username]/slon-site.git
cd slon-site
```

#### Step 2: Install the Live Server extension

1. Open VS Code
2. Go to the **Extensions** tab (`Ctrl+Shift+X` / `Cmd+Shift+X`)
3. Search for **`Live Server`** by Ritwick Dey
4. Click **Install**

Or install via the command line:

```bash
code --install-extension ritwickdey.LiveServer
```

#### Step 3: Launch the project

1. Open the project folder in VS Code: **File → Open Folder...**
2. Open `index.html`
3. Launch Live Server one of these ways:
   - Right-click on `index.html` → **"Open with Live Server"**
   - Click **"Go Live"** in the bottom-right status bar of VS Code
   - Use the shortcut `Alt+L Alt+O`

The site will automatically open in your default browser at `http://127.0.0.1:5500`.

#### Step 4: Debugging

- **Auto-reload** — any change to HTML/CSS/JS files reloads the browser automatically
- **DevTools** — press `F12` in the browser to open Developer Tools:
  - **Console** — for JavaScript errors and `console.log()` output
  - **Elements** — to inspect HTML/CSS in real time
  - **Network** — to check loading of images and other resources
  - **Lighthouse** — to audit performance, SEO, and accessibility

#### Custom Settings (optional)

To change the default port or browser, create a `.vscode/settings.json`
file in the project root:

```jsonc
{
  // Port for the local server
  "liveServer.settings.port": 5500,
  // Browser to open (chrome, firefox, edge, etc.)
  "liveServer.settings.CustomBrowser": "chrome",
  // Set to true to disable auto-opening the browser
  "liveServer.settings.NoBrowser": false,
  // Files that should not trigger a reload
  "liveServer.settings.ignoreFiles": [
    ".vscode/**",
    "**/*.scss",
    "**/*.sass"
  ]
}
```

#### Troubleshooting

- **"Port 5500 is already in use"** — change the port in settings or stop
the process using it
- **Browser doesn't open** — check `CustomBrowser` settings or open
`http://127.0.0.1:5500` manually
- **Changes are not visible** — perform a hard reload
(`Ctrl+Shift+R` / `Cmd+Shift+R`) to clear cache

---

### 🚀 Deployment Options

#### 🌱 Netlify

Drag & drop the ZIP to [app.netlify.com/drop](https://app.netlify.com/drop) — done.

#### 🐙 GitHub Pages

Push → Settings → Pages → root → live.

#### ⚡ Vercel

Upload → Deploy → instant.

---

### 🎨 Visual Assets

- **favicon.ico** — site icon  
- **og-image.jpg** — social preview  
- **img/** — all photos used on the website  

---

### ❤️ In Memory

All materials belong to the family of Ihor Utyuzh.
