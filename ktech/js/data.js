/* Site content rendered from script. Every text has uz / ru / en. */
window.KT_DATA = {

  /* Contact form. Put the URL of your backend (or a Telegram-bot webhook) here.
     The form sends a JSON POST: { name, org, contact, type, message, lang }.
     While this is empty nothing is sent anywhere: on a test address the success
     message is shown as a preview, on k-tech.uz visitors are asked to call instead. */
  formEndpoint: "",
  productionHost: "k-tech.uz",

  /* Social links. An empty value shows the icon without a link. */
  social: {
    linkedin: "",
    telegram: "",
    instagram: "https://www.instagram.com/k.tech.official/",
    youtube: ""
  },

  tech: [
    { n: "Java", ic: "java" }, { n: "Spring Boot", ic: "spring" }, { n: "Go", ic: "go" }, { n: "Python", ic: "python" },
    { n: "PostgreSQL", ic: "postgres" }, { n: "Kafka", ic: "kafka" }, { n: "Redis", ic: "redis" }, { n: "React", ic: "react" },
    { n: "TypeScript", ic: "typescript" }, { n: "Flutter", ic: "flutter" }, { n: "Tauri", ic: "tauri" }, { n: "Rust", ic: "rust" },
    { n: "Telegram Bot API", ic: "telegram" }, { n: "Docker", ic: "docker" }, { n: "Kubernetes", ic: "kubernetes" }, { n: "GitLab CI", ic: "gitlab" }
  ],

  stack: [
    { k: { uz: "Backend", ru: "Backend", en: "Backend" }, v: "Java, Spring Boot, Go, Python" },
    { k: { uz: "Frontend", ru: "Frontend", en: "Frontend" }, v: "React, TypeScript" },
    { k: { uz: "Mobil", ru: "Мобайл", en: "Mobile" }, v: "Flutter, Android, iOS" },
    { k: { uz: "Desktop", ru: "Десктоп", en: "Desktop" }, v: "Tauri (Rust), Windows, macOS, Linux" },
    { k: { uz: "Ma’lumotlar", ru: "Данные", en: "Data" }, v: "PostgreSQL, Redis, Kafka" },
    { k: { uz: "Infratuzilma", ru: "Инфраструктура", en: "Infrastructure" }, v: "Docker, Kubernetes, GitLab CI" }
  ],

  services: [
    {
      ic: "building-2",
      t: { uz: "Korporativ boshqaruv tizimlari", ru: "Корпоративные системы управления", en: "Enterprise management systems" },
      d: { uz: "ERP, CRM va hisob tizimlari. Tashkilotingiz jarayonlariga moslab noldan quramiz.", ru: "ERP, CRM и учётные системы. Строим с нуля под процессы вашей организации.", en: "ERP, CRM and accounting systems, built from scratch around how your organisation works." },
      i: { uz: ["Jarayonlarni tahlil qilish va modellashtirish", "Rollar, huquqlar va audit jurnali", "Hisobotlar va boshqaruv paneli"], ru: ["Анализ и моделирование процессов", "Роли, права доступа и журнал аудита", "Отчёты и панель руководителя"], en: ["Process analysis and modelling", "Roles, permissions and audit log", "Reports and management dashboards"] }
    },
    {
      ic: "credit-card",
      t: { uz: "Billing va to‘lov tizimlari", ru: "Биллинг и платёжные системы", en: "Billing and payment systems" },
      d: { uz: "Abonentlar, tariflar va hisob-kitobni avtomatlashtiramiz, to‘lov tizimlari bilan bog‘laymiz.", ru: "Автоматизируем абонентов, тарифы и расчёты, подключаем платёжные системы.", en: "We automate subscribers, tariffs and settlements, and connect payment providers." },
      i: { uz: ["Tariflar va hisob-fakturalar", "Mahalliy to‘lov tizimlari bilan integratsiya", "Qarzdorlik nazorati va bildirishnomalar"], ru: ["Тарифы и счета", "Интеграция с местными платёжными системами", "Контроль задолженности и уведомления"], en: ["Tariffs and invoicing", "Integration with local payment systems", "Debt control and notifications"] }
    },
    {
      ic: "globe",
      t: { uz: "Veb ilovalar va portallar", ru: "Веб-приложения и порталы", en: "Web applications and portals" },
      d: { uz: "Brauzerda ishlaydigan xizmatlar, shaxsiy kabinetlar va ma’muriy panellar.", ru: "Сервисы в браузере, личные кабинеты и административные панели.", en: "Browser-based services, customer accounts and admin panels." },
      i: { uz: ["Ko‘p foydalanuvchili SaaS arxitektura", "Uch tilli interfeys", "Yuqori yuklamaga tayyor backend"], ru: ["Мультитенантная SaaS-архитектура", "Интерфейс на трёх языках", "Backend, готовый к высокой нагрузке"], en: ["Multi-tenant SaaS architecture", "Three-language interfaces", "Backends ready for heavy load"] }
    },
    {
      ic: "smartphone",
      t: { uz: "Mobil ilovalar", ru: "Мобильные приложения", en: "Mobile applications" },
      d: { uz: "Android va iOS uchun ilovalar. Play Market va App Store’ga chiqarishgacha olib boramiz.", ru: "Приложения для Android и iOS. Доводим до публикации в Play Market и App Store.", en: "Apps for Android and iOS, taken all the way to release on Google Play and the App Store." },
      i: { uz: ["Mijozlar va xodimlar uchun ilovalar", "Internetsiz ishlash rejimi", "Push-bildirishnomalar"], ru: ["Приложения для клиентов и сотрудников", "Режим работы без интернета", "Push-уведомления"], en: ["Apps for customers and for staff", "Offline mode", "Push notifications"] }
    },
    {
      ic: "send",
      t: { uz: "Telegram botlar", ru: "Telegram-боты", en: "Telegram bots" },
      d: { uz: "Buyurtma, to‘lov, bildirishnoma va ichki jarayonlar uchun botlar va mini-ilovalar.", ru: "Боты и мини-приложения для заказов, оплаты, уведомлений и внутренних процессов.", en: "Bots and mini apps for orders, payments, notifications and internal workflows." },
      i: { uz: ["Mijozlarga xizmat ko‘rsatish botlari", "Tizimlaringiz bilan integratsiya", "Telegram Mini App"], ru: ["Боты клиентского сервиса", "Интеграция с вашими системами", "Telegram Mini App"], en: ["Customer service bots", "Integration with your systems", "Telegram Mini Apps"] }
    },
    {
      ic: "monitor",
      t: { uz: "Desktop ilovalar", ru: "Десктопные приложения", en: "Desktop applications" },
      d: { uz: "Kassa, ombor va ishlab chiqarish uchun dasturlar. Internet uzilganda ham ishlaydi.", ru: "Программы для кассы, склада и производства. Работают и без интернета.", en: "Software for tills, warehouses and production floors that keeps working offline." },
      i: { uz: ["Windows, macOS va Linux", "Printer, skaner va boshqa qurilmalar bilan ishlash", "Bulut bilan sinxronizatsiya"], ru: ["Windows, macOS и Linux", "Работа с принтерами, сканерами и другим оборудованием", "Синхронизация с облаком"], en: ["Windows, macOS and Linux", "Printers, scanners and other hardware", "Cloud synchronisation"] }
    },
    {
      ic: "pen-tool",
      t: { uz: "Biznes tahlil va UI/UX", ru: "Бизнес-анализ и UI/UX", en: "Business analysis and UI/UX" },
      d: { uz: "Talablarni yig‘amiz, texnik topshiriq yozamiz va interfeysni loyihalaymiz.", ru: "Собираем требования, пишем техническое задание и проектируем интерфейс.", en: "We gather requirements, write the specification and design the interface." },
      i: { uz: ["Texnik topshiriq va jarayon sxemalari", "Prototip va dizayn-maket", "Foydalanuvchilar bilan sinov"], ru: ["Техническое задание и схемы процессов", "Прототип и дизайн-макет", "Проверка на пользователях"], en: ["Specifications and process maps", "Prototypes and design mockups", "Testing with users"] }
    },
    {
      ic: "workflow",
      t: { uz: "Integratsiya, DevOps va qo‘llab-quvvatlash", ru: "Интеграция, DevOps и поддержка", en: "Integration, DevOps and support" },
      d: { uz: "Tizimlarni o‘zaro bog‘laymiz, serverga joylaymiz va ishga tushgandan keyin kuzatib boramiz.", ru: "Связываем системы между собой, разворачиваем на серверах и сопровождаем после запуска.", en: "We connect systems to each other, deploy them and look after them once they are live." },
      i: { uz: ["API va tashqi xizmatlar bilan integratsiya", "CI/CD, monitoring va zaxira nusxalar", "Yangilanishlar va texnik yordam"], ru: ["Интеграция с API и внешними сервисами", "CI/CD, мониторинг и резервные копии", "Обновления и техническая поддержка"], en: ["API and third-party integrations", "CI/CD, monitoring and backups", "Updates and technical support"] }
    }
  ],

  /* Products page tabs */
  platforms: {
    all: { ic: "layout-grid", t: { uz: "Hammasi", ru: "Все", en: "All" } },
    web: { ic: "globe", t: { uz: "Veb", ru: "Веб", en: "Web" } },
    mobile: { ic: "smartphone", t: { uz: "Mobil", ru: "Мобайл", en: "Mobile" } },
    desktop: { ic: "monitor", t: { uz: "Desktop", ru: "Десктоп", en: "Desktop" } }
  },

  /* Products, in display order. The home page shows the first `homeProducts`.
     img: put each product's own picture in assets/img/ and change the path. */
  homeProducts: 6,
  products: [
    {
      n: "Insight360", p: ["web", "mobile"], img: "assets/img/product-default.webp",
      d: { uz: "Tashkilot ma’lumotlarini bitta panelga jamlaydigan tahlil platformasi. Ko‘rsatkichlar, grafiklar va hududlar kesimidagi hisobotlar veb-panel va mobil ilovada ko‘rinadi.", ru: "Аналитическая платформа, которая собирает данные организации в одной панели. Показатели, графики и отчёты по регионам доступны в веб-панели и мобильном приложении.", en: "An analytics platform that brings an organisation’s data into one dashboard. Indicators, charts and regional reports are available on the web and in a mobile app." }
    },
    {
      n: "SmartX360", p: ["web", "mobile"], img: "assets/img/product-default.webp",
      d: { uz: "IoT qurilmalarni masofadan kuzatish va boshqarish platformasi. Datchiklar ma’lumoti veb-panel va mobil ilovaga uzluksiz kelib turadi.", ru: "Платформа удалённого мониторинга и управления IoT-устройствами. Данные датчиков непрерывно поступают в веб-панель и мобильное приложение.", en: "A platform for remote monitoring and control of IoT devices. Sensor data flows continuously to a web dashboard and a mobile app." }
    },
    {
      n: "StatInspector-AI", p: ["web"], img: "assets/img/product-default.webp",
      d: { uz: "Statistik hisobotlarni sun’iy intellekt yordamida tekshiradigan veb-tizim. Xato va nomuvofiqliklarni topib, mas’ul xodimga ko‘rsatadi. Davlat sektori uchun ishlab chiqilgan.", ru: "Веб-система проверки статистических отчётов с помощью искусственного интеллекта. Находит ошибки и несоответствия и показывает их ответственному сотруднику. Разработана для госсектора.", en: "A web system that inspects statistical reports with the help of AI. It finds errors and inconsistencies and shows them to the responsible officer. Built for the public sector." }
    },
    {
      n: "K-Connect", p: ["web"], img: "assets/img/product-default.webp",
      d: { uz: "Kontakt-markaz va CRM platformasi. Qo‘ng‘iroqlar, navbatlar, operatorlar va hisobotlar bitta veb-tizimda boshqariladi.", ru: "Платформа контакт-центра и CRM. Звонки, очереди, операторы и отчёты управляются в одной веб-системе.", en: "A contact centre and CRM platform. Calls, queues, operators and reporting are managed in one web system." }
    },
    {
      n: "K-Tech POS", p: ["web", "desktop"], img: "assets/img/product-default.webp", url: "https://pos.k-tech.uz",
      d: { uz: "Do‘kon va savdo nuqtalari uchun kassa, ombor va savdo hisobi. Veb va desktop ilovada ishlaydi, sotuv, qoldiq va tushum bitta oynada ko‘rinadi.", ru: "Касса, склад и учёт продаж для магазинов и торговых точек. Работает в вебе и на десктопе, продажи, остатки и выручка видны в одном окне.", en: "Point of sale, stock and sales accounting for shops. It runs on the web and on the desktop, with sales, stock levels and revenue in one window." }
    },
    {
      n: "K-Tech Distro", p: ["web", "mobile"], img: "assets/img/product-default.webp",
      d: { uz: "Distribyutorlik kompaniyalari uchun tizim: buyurtmalar, savdo agentlari, ombor va yetkazib berish. Agentlar mobil ilovada, ofis esa veb-panelda ishlaydi.", ru: "Система для дистрибьюторских компаний: заказы, торговые агенты, склад и доставка. Агенты работают в мобильном приложении, офис в веб-панели.", en: "A system for distribution companies: orders, sales agents, warehouse and delivery. Agents work in a mobile app and the office in a web dashboard." }
    },
    {
      n: "Smart-Davomat", p: ["web", "mobile"], img: "assets/img/product-default.webp",
      d: { uz: "QR kod orqali davomat tizimi. Xodim yoki o‘quvchi kodni telefonda skanerlaydi, rahbar esa kelish va ketish vaqtini veb-panelda darhol ko‘radi.", ru: "Система учёта посещаемости по QR-коду. Сотрудник или ученик сканирует код телефоном, а руководитель сразу видит время прихода и ухода в веб-панели.", en: "Attendance by QR code. An employee or student scans the code with a phone and the manager sees arrival and departure times in the web dashboard at once." }
    },
    {
      n: "Faktura-Marketplace", p: ["web"], img: "assets/img/product-default.webp",
      d: { uz: "Korxonalar uchun veb savdo maydoni. Yetkazib beruvchilar tovarlarini joylaydi, xaridorlar buyurtma beradi, hisob-fakturalar esa elektron shaklda rasmiylashtiriladi.", ru: "Торговая веб-площадка для предприятий. Поставщики размещают товары, покупатели оформляют заказы, а счета-фактуры выставляются в электронном виде.", en: "A web marketplace for businesses. Suppliers list their goods, buyers place orders, and invoices are issued electronically." }
    }
  ],

  audience: [
    {
      img: "assets/img/process.webp", pos: "50% 75%",
      t: { uz: "Tadbirkorlar", ru: "Предприниматели", en: "Businesses" },
      d: { uz: "Savdo, xizmat ko‘rsatish va ishlab chiqarishdagi kundalik ishni tartibga soladigan tizimlar.", ru: "Системы, которые наводят порядок в ежедневной работе торговли, услуг и производства.", en: "Systems that bring order to daily work in retail, services and manufacturing." },
      i: { uz: ["Kassa va ombor", "Mijozlar bilan ishlash", "To‘lov va hisob-kitob"], ru: ["Касса и склад", "Работа с клиентами", "Платежи и расчёты"], en: ["Tills and stock", "Customer management", "Payments and settlements"] }
    },
    {
      img: "assets/img/hero.webp", pos: "38% 78%",
      t: { uz: "Davlat tashkilotlari", ru: "Государственные организации", en: "Government organisations" },
      d: { uz: "Idoraviy axborot tizimlari. Xavfsizlik, hujjatlashtirish va idora tartiblariga rioya qilamiz.", ru: "Ведомственные информационные системы. Соблюдаем требования безопасности, документирования и регламенты ведомства.", en: "Departmental information systems, built to the agency’s security, documentation and procedural requirements." },
      i: { uz: ["Hisobot va nazorat tizimlari", "Ichki jarayonlarni raqamlashtirish", "Mavjud tizimlar bilan integratsiya"], ru: ["Системы отчётности и контроля", "Цифровизация внутренних процессов", "Интеграция с действующими системами"], en: ["Reporting and oversight systems", "Digitising internal processes", "Integration with existing systems"] }
    },
    {
      img: "assets/img/team.webp", pos: "80% 30%",
      t: { uz: "Xorijiy buyurtmachilar", ru: "Зарубежные заказчики", en: "Clients abroad" },
      d: { uz: "Dasturiy mahsulotlar va ishlab chiqish xizmatlarini eksport qilamiz. Ingliz va rus tillarida ishlaymiz.", ru: "Экспортируем программные продукты и услуги разработки. Работаем на английском и русском языках.", en: "We export software products and development services, and we work in English and Russian." },
      i: { uz: ["To‘liq loyiha jamoasi", "Bosqichma-bosqich topshirish", "Masofaviy hamkorlik"], ru: ["Полная проектная команда", "Поэтапная сдача", "Удалённое сотрудничество"], en: ["A complete project team", "Delivery in stages", "Remote collaboration"] }
    }
  ],

  process: [
    { t: { uz: "Tahlil", ru: "Анализ", en: "Analysis" }, d: { uz: "Biznes tahlilchi jarayonlaringizni o‘rganadi va talablarni yozib chiqadi.", ru: "Бизнес-аналитик изучает ваши процессы и фиксирует требования.", en: "A business analyst studies your processes and writes down the requirements." } },
    { t: { uz: "Loyihalash", ru: "Проектирование", en: "Design" }, d: { uz: "Texnik topshiriq, arxitektura va interfeys maketi tayyorlanadi. Muddat va narx shu bosqichda aniq bo‘ladi.", ru: "Готовим техническое задание, архитектуру и макет интерфейса. На этом этапе становятся ясны сроки и стоимость.", en: "We prepare the specification, the architecture and the interface mockup. Schedule and cost become clear here." } },
    { t: { uz: "Ishlab chiqish", ru: "Разработка", en: "Development" }, d: { uz: "Jamoa qisqa bosqichlarda ishlaydi. Har bosqich oxirida ishlaydigan versiyani ko‘rasiz.", ru: "Команда работает короткими этапами. В конце каждого вы видите работающую версию.", en: "The team works in short stages. At the end of each you see a working version." } },
    { t: { uz: "Sinov", ru: "Тестирование", en: "Testing" }, d: { uz: "QA mutaxassislari funksiyalar, yuklama va xavfsizlikni tekshiradi.", ru: "QA-специалисты проверяют функции, нагрузку и безопасность.", en: "QA engineers test functionality, load and security." } },
    { t: { uz: "Ishga tushirish", ru: "Запуск", en: "Launch" }, d: { uz: "Tizimni serverga, Play Marketga yoki Telegramga chiqaramiz va xodimlaringizni o‘qitamiz.", ru: "Разворачиваем систему на сервере, публикуем в Play Market или Telegram и обучаем ваших сотрудников.", en: "We deploy to servers, publish on Google Play or Telegram, and train your staff." } },
    { t: { uz: "Qo‘llab-quvvatlash", ru: "Поддержка", en: "Support" }, d: { uz: "Ishlashini kuzatamiz, yangilaymiz va yangi talablar bo‘yicha rivojlantiramiz.", ru: "Следим за работой, обновляем и развиваем систему под новые требования.", en: "We monitor the system, update it and extend it as new requirements appear." } }
  ],

  values: [
    { t: { uz: "Avval tahlil", ru: "Сначала анализ", en: "Analysis first" }, d: { uz: "Kod yozishdan oldin vazifani to‘liq tushunib olamiz.", ru: "Прежде чем писать код, полностью разбираемся в задаче.", en: "We understand the task fully before writing code." } },
    { t: { uz: "Ochiq jarayon", ru: "Открытый процесс", en: "An open process" }, d: { uz: "Reja, holat va muammolar buyurtmachiga doim ko‘rinib turadi.", ru: "План, статус и проблемы всегда видны заказчику.", en: "The plan, the status and the problems are always visible to the client." } },
    { t: { uz: "Uzoq muddatli javobgarlik", ru: "Долгая ответственность", en: "Long-term responsibility" }, d: { uz: "Topshirgan tizimimizni yillar davomida yuritamiz va rivojlantiramiz.", ru: "Сданную систему мы сопровождаем и развиваем годами.", en: "We run and develop the systems we deliver for years." } },
    { t: { uz: "Sinalgan yechimlar", ru: "Проверенные решения", en: "Proven solutions" }, d: { uz: "Taklif qilayotgan yondashuvlarimizni o‘z mahsulotlarimizda sinab ko‘rganmiz.", ru: "Подходы, которые мы предлагаем, проверены на собственных продуктах.", en: "The approaches we propose have been tested on our own products." } }
  ],

  /* Positions: used by the roles grid, the team table and its filter. */
  roles: {
    pm: { t: { uz: "Loyiha menejeri", ru: "Менеджер проекта", en: "Project manager" }, d: { uz: "Muddat, tarkib va buyurtmachi bilan aloqa", ru: "Сроки, состав работ и связь с заказчиком", en: "Schedule, scope and client communication" } },
    lead: { t: { uz: "Team Lead", ru: "Тимлид", en: "Team lead" }, d: { uz: "Arxitektura va kod sifati", ru: "Архитектура и качество кода", en: "Architecture and code quality" } },
    ba: { t: { uz: "Biznes tahlilchi", ru: "Бизнес-аналитик", en: "Business analyst" }, d: { uz: "Talablar va texnik topshiriq", ru: "Требования и техническое задание", en: "Requirements and specifications" } },
    design: { t: { uz: "UI/UX dizayner", ru: "UI/UX-дизайнер", en: "UI/UX designer" }, d: { uz: "Interfeys va foydalanish qulayligi", ru: "Интерфейс и удобство использования", en: "Interface and usability" } },
    backend: { t: { uz: "Backend dasturchi", ru: "Backend-разработчик", en: "Backend developer" }, d: { uz: "Server qismi, ma’lumotlar bazasi, API", ru: "Серверная часть, базы данных, API", en: "Server side, databases, APIs" } },
    frontend: { t: { uz: "Frontend dasturchi", ru: "Frontend-разработчик", en: "Frontend developer" }, d: { uz: "Veb interfeyslar", ru: "Веб-интерфейсы", en: "Web interfaces" } },
    mobile: { t: { uz: "Mobil va Telegram bot dasturchi", ru: "Разработчик мобильных приложений и ботов", en: "Mobile and Telegram bot developer" }, d: { uz: "Android, iOS va botlar", ru: "Android, iOS и боты", en: "Android, iOS and bots" } },
    desktop: { t: { uz: "Desktop dasturchi", ru: "Десктоп-разработчик", en: "Desktop developer" }, d: { uz: "Kompyuter uchun ilovalar", ru: "Приложения для компьютера", en: "Applications for the computer" } },
    qa: { t: { uz: "QA muhandis", ru: "QA-инженер", en: "QA engineer" }, d: { uz: "Sinov va sifat nazorati", ru: "Тестирование и контроль качества", en: "Testing and quality control" } },
    devops: { t: { uz: "DevOps muhandis", ru: "DevOps-инженер", en: "DevOps engineer" }, d: { uz: "Serverlar, CI/CD va monitoring", ru: "Серверы, CI/CD и мониторинг", en: "Servers, CI/CD and monitoring" } }
  },

  /* ------------------------------------------------------------------------
     NAMUNA MA’LUMOT / SAMPLE DATA
     The people below are placeholders so that the table, filter and pagination
     can be seen working. Replace them with the real team before publishing.
       n     name in Latin script        nr    name in Cyrillic (Russian page)
       r     position key from `roles`   lv    Lead | Senior | Middle | Junior
       a     one line about the person   photo e.g. "assets/img/team/name.webp"
     ------------------------------------------------------------------------ */
  team: [
    { n: "Sardor Matyoqubov", nr: "Сардор Матякубов", r: "pm", lv: "Senior", photo: "", a: { uz: "Davlat va korporativ loyihalar", ru: "Государственные и корпоративные проекты", en: "Government and enterprise projects" } },
    { n: "Dilnoza Rahimova", nr: "Дильноза Рахимова", r: "pm", lv: "Middle", photo: "", a: { uz: "Mahsulot loyihalari va relizlar", ru: "Продуктовые проекты и релизы", en: "Product projects and releases" } },
    { n: "Jasur Otajonov", nr: "Жасур Отажонов", r: "lead", lv: "Lead", photo: "", a: { uz: "Backend arxitekturasi, mikroservislar", ru: "Архитектура backend, микросервисы", en: "Backend architecture, microservices" } },
    { n: "Bekzod Sobirov", nr: "Бекзод Собиров", r: "lead", lv: "Lead", photo: "", a: { uz: "Frontend arxitekturasi, kod sifati", ru: "Архитектура frontend, качество кода", en: "Frontend architecture, code quality" } },
    { n: "Malika Yusupova", nr: "Малика Юсупова", r: "ba", lv: "Senior", photo: "", a: { uz: "Talablar tahlili, texnik topshiriq", ru: "Анализ требований, техническое задание", en: "Requirements analysis, specifications" } },
    { n: "Shohruh Qurbonov", nr: "Шохрух Курбанов", r: "ba", lv: "Middle", photo: "", a: { uz: "Jarayon sxemalari, integratsiya talablari", ru: "Схемы процессов, требования к интеграциям", en: "Process maps, integration requirements" } },
    { n: "Nigora Ismoilova", nr: "Нигора Исмаилова", r: "design", lv: "Senior", photo: "", a: { uz: "Veb va mobil interfeyslar, dizayn tizimi", ru: "Веб- и мобильные интерфейсы, дизайн-система", en: "Web and mobile interfaces, design system" } },
    { n: "Azizbek Karimov", nr: "Азизбек Каримов", r: "design", lv: "Middle", photo: "", a: { uz: "Prototiplar va foydalanuvchi sinovlari", ru: "Прототипы и пользовательские тесты", en: "Prototypes and user testing" } },
    { n: "Otabek Ro‘zmetov", nr: "Отабек Рузметов", r: "backend", lv: "Senior", photo: "", a: { uz: "Java, Spring Boot, mikroservislar", ru: "Java, Spring Boot, микросервисы", en: "Java, Spring Boot, microservices" } },
    { n: "Ulug‘bek Jumaniyozov", nr: "Улугбек Джуманиязов", r: "backend", lv: "Senior", photo: "", a: { uz: "Go, yuqori yuklamali xizmatlar", ru: "Go, высоконагруженные сервисы", en: "Go, high-load services" } },
    { n: "Farrux Bobojonov", nr: "Фаррух Бабаджанов", r: "backend", lv: "Middle", photo: "", a: { uz: "PostgreSQL, Kafka, integratsiyalar", ru: "PostgreSQL, Kafka, интеграции", en: "PostgreSQL, Kafka, integrations" } },
    { n: "Islom Xudoyberganov", nr: "Ислам Худайберганов", r: "backend", lv: "Middle", photo: "", a: { uz: "Billing va to‘lov integratsiyalari", ru: "Биллинг и платёжные интеграции", en: "Billing and payment integrations" } },
    { n: "Doston Sultonov", nr: "Достон Султанов", r: "backend", lv: "Middle", photo: "", a: { uz: "Python, ma’lumotlar tahlili va AI", ru: "Python, анализ данных и ИИ", en: "Python, data analysis and AI" } },
    { n: "Javohir Ollaberganov", nr: "Жавохир Аллаберганов", r: "backend", lv: "Junior", photo: "", a: { uz: "Java, Spring Boot, mikroservislar", ru: "Java, Spring Boot, микросервисы", en: "Java, Spring Boot, microservices" } },
    { n: "Sherzod Normatov", nr: "Шерзод Норматов", r: "backend", lv: "Junior", photo: "", a: { uz: "PostgreSQL, Kafka, integratsiyalar", ru: "PostgreSQL, Kafka, интеграции", en: "PostgreSQL, Kafka, integrations" } },
    { n: "Akmal Davletov", nr: "Акмал Давлетов", r: "backend", lv: "Junior", photo: "", a: { uz: "Go, yuqori yuklamali xizmatlar", ru: "Go, высоконагруженные сервисы", en: "Go, high-load services" } },
    { n: "Umidjon Sapayev", nr: "Умиджон Сапаев", r: "frontend", lv: "Senior", photo: "", a: { uz: "React, TypeScript, murakkab panellar", ru: "React, TypeScript, сложные панели", en: "React, TypeScript, complex dashboards" } },
    { n: "Laylo Abdullayeva", nr: "Лайло Абдуллаева", r: "frontend", lv: "Senior", photo: "", a: { uz: "Dizayn tizimi va komponentlar", ru: "Дизайн-система и компоненты", en: "Design system and components" } },
    { n: "Temur Yoqubov", nr: "Темур Якубов", r: "frontend", lv: "Middle", photo: "", a: { uz: "Grafiklar va hisobot sahifalari", ru: "Графики и страницы отчётов", en: "Charts and reporting pages" } },
    { n: "Sevara Matkarimova", nr: "Севара Маткаримова", r: "frontend", lv: "Middle", photo: "", a: { uz: "Ko‘p tilli interfeyslar", ru: "Многоязычные интерфейсы", en: "Multilingual interfaces" } },
    { n: "Asadbek Rajabov", nr: "Асадбек Раджабов", r: "frontend", lv: "Middle", photo: "", a: { uz: "React, TypeScript, murakkab panellar", ru: "React, TypeScript, сложные панели", en: "React, TypeScript, complex dashboards" } },
    { n: "Mohira Eshchanova", nr: "Мохира Эшчанова", r: "frontend", lv: "Junior", photo: "", a: { uz: "Dizayn tizimi va komponentlar", ru: "Дизайн-система и компоненты", en: "Design system and components" } },
    { n: "Oybek Qodirov", nr: "Ойбек Кадыров", r: "frontend", lv: "Junior", photo: "", a: { uz: "Ko‘p tilli interfeyslar", ru: "Многоязычные интерфейсы", en: "Multilingual interfaces" } },
    { n: "Rustam Yo‘ldoshev", nr: "Рустам Юлдашев", r: "mobile", lv: "Senior", photo: "", a: { uz: "Flutter, Android va iOS", ru: "Flutter, Android и iOS", en: "Flutter, Android and iOS" } },
    { n: "Zafar Bekchanov", nr: "Зафар Бекчанов", r: "mobile", lv: "Middle", photo: "", a: { uz: "Telegram botlar va Mini App", ru: "Telegram-боты и Mini App", en: "Telegram bots and Mini Apps" } },
    { n: "Shahzoda Ortiqova", nr: "Шахзода Артыкова", r: "mobile", lv: "Junior", photo: "", a: { uz: "Mobil ilovalar, oflayn rejim", ru: "Мобильные приложения, офлайн-режим", en: "Mobile apps, offline mode" } },
    { n: "Anvar Masharipov", nr: "Анвар Машарипов", r: "desktop", lv: "Senior", photo: "", a: { uz: "Tauri, Rust, kassa ilovalari", ru: "Tauri, Rust, кассовые приложения", en: "Tauri, Rust, point-of-sale apps" } },
    { n: "Elyor Hasanov", nr: "Элёр Хасанов", r: "desktop", lv: "Middle", photo: "", a: { uz: "Qurilmalar bilan integratsiya", ru: "Интеграция с оборудованием", en: "Hardware integration" } },
    { n: "Gulnoza Tojiboyeva", nr: "Гульноза Таджибаева", r: "qa", lv: "Senior", photo: "", a: { uz: "Test rejalari, avtomatlashtirilgan testlar", ru: "Тест-планы, автоматизированные тесты", en: "Test plans, automated tests" } },
    { n: "Sanjar Avazov", nr: "Санжар Авазов", r: "qa", lv: "Middle", photo: "", a: { uz: "API va yuklama testlari", ru: "Тестирование API и нагрузки", en: "API and load testing" } },
    { n: "Madina Sharipova", nr: "Мадина Шарипова", r: "qa", lv: "Junior", photo: "", a: { uz: "Qo‘lda sinov, regressiya", ru: "Ручное тестирование, регресс", en: "Manual testing, regression" } },
    { n: "Baxtiyor Nurmetov", nr: "Бахтиёр Нурметов", r: "devops", lv: "Senior", photo: "", a: { uz: "Kubernetes, CI/CD, monitoring", ru: "Kubernetes, CI/CD, мониторинг", en: "Kubernetes, CI/CD, monitoring" } }
  ],
  teamPageSize: 10,

  /* Company details. Rows with an empty value are not shown: fill in STIR,
     bank details and the director's name to make them appear. */
  requisites: [
    { k: { uz: "To‘liq nomi", ru: "Полное название", en: "Legal name" }, v: { uz: "“Kharezmi-Tech” mas’uliyati cheklangan jamiyati", ru: "Общество с ограниченной ответственностью «Kharezmi-Tech»", en: "Kharezmi-Tech Limited Liability Company" } },
    { k: { uz: "Brend", ru: "Бренд", en: "Brand" }, v: "K-TECH, Innovative Software Solutions" },
    { k: { uz: "Faoliyat turi", ru: "Вид деятельности", en: "Activity" }, v: { uz: "Dasturiy ta’minot ishlab chiqish va eksport qilish", ru: "Разработка и экспорт программного обеспечения", en: "Software development and export" } },
    { k: { uz: "Yuridik manzil", ru: "Юридический адрес", en: "Registered address" }, v: { uz: "O‘zbekiston, Xorazm viloyati, Urganch shahri, Tinchlik ko‘chasi, 6", ru: "Узбекистан, Хорезмская область, г. Ургенч, ул. Тинчлик, 6", en: "6 Tinchlik Street, Urgench, Khorezm region, Uzbekistan" } },
    { k: { uz: "Telefon", ru: "Телефон", en: "Phone" }, v: "+998 94 239 15 18" },
    { k: { uz: "Elektron pochta", ru: "Электронная почта", en: "Email" }, v: "info@k-tech.uz" },
    { k: { uz: "Veb-sayt", ru: "Веб-сайт", en: "Website" }, v: "k-tech.uz" },
    { k: { uz: "STIR", ru: "ИНН", en: "Taxpayer ID (STIR)" }, v: "" },
    { k: { uz: "Bank", ru: "Банк", en: "Bank" }, v: "" },
    { k: { uz: "Hisob raqami", ru: "Расчётный счёт", en: "Account number" }, v: "" },
    { k: { uz: "MFO", ru: "МФО", en: "Bank code (MFO)" }, v: "" },
    { k: { uz: "Direktor", ru: "Директор", en: "Director" }, v: "" }
  ]
};
