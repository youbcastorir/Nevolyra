// Nevolyra – Main Application Logic
// ============================================================

const WHATSAPP_URL = "https://wa.me/212602321305";
const EMAIL = "salatrir@gmail.com";
const PHONE = "+212602321305";

// ── State ────────────────────────────────────────────────────
let currentLang = localStorage.getItem("nv_lang") || "fr";
let currentPage = "home";

// ── Init ─────────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  applyLang(currentLang);
  router();
  initFloatingWhatsApp();
  initScrollHeader();
  initMobileMenu();
});

window.addEventListener("hashchange", router);
window.addEventListener("popstate", router);

// ── Router ───────────────────────────────────────────────────
function router() {
  const hash = window.location.hash.replace("#", "") || "home";
  const parts = hash.split("/");
  const page = parts[0];
  const param = parts[1] || null;

  document.querySelectorAll(".nav-link").forEach(l => l.classList.remove("active"));
  const activeLink = document.querySelector(`[data-page="${page}"]`);
  if (activeLink) activeLink.classList.add("active");

  const main = document.getElementById("main-content");
  main.className = `page-${page}`;

  switch (page) {
    case "home":      renderHome(main); break;
    case "services":  param ? renderServiceDetail(main, param) : renderServices(main); break;
    case "blog":      param ? renderArticle(main, param) : renderBlog(main); break;
    case "faq":       renderFAQ(main); break;
    case "testimonials": renderTestimonials(main); break;
    case "contact":   renderContact(main); break;
    default:          renderHome(main);
  }

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function navigate(page, param) {
  window.location.hash = param ? `${page}/${param}` : page;
}

// ── Language ─────────────────────────────────────────────────
function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem("nv_lang", lang);
  const t = window.translations[lang];
  document.documentElement.lang = lang;
  document.documentElement.dir = t.dir;
  document.body.dir = t.dir;

  // Update all data-i18n elements
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (t[key]) el.textContent = t[key];
  });

  // Update lang switcher active
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.lang === lang);
  });

  // Re-render current page
  const hash = window.location.hash.replace("#", "") || "home";
  const page = hash.split("/")[0];
  const main = document.getElementById("main-content");
  const param = hash.split("/")[1] || null;

  switch (page) {
    case "home":      renderHome(main); break;
    case "services":  param ? renderServiceDetail(main, param) : renderServices(main); break;
    case "blog":      param ? renderArticle(main, param) : renderBlog(main); break;
    case "faq":       renderFAQ(main); break;
    case "testimonials": renderTestimonials(main); break;
    case "contact":   renderContact(main); break;
  }
}

// ── Header / Nav ─────────────────────────────────────────────
function initScrollHeader() {
  const header = document.getElementById("site-header");
  window.addEventListener("scroll", () => {
    header.classList.toggle("scrolled", window.scrollY > 40);
  });
}

function initMobileMenu() {
  const toggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");
  if (!toggle) return;
  toggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    toggle.setAttribute("aria-expanded", navLinks.classList.contains("open"));
  });
  // Close on link click
  navLinks.addEventListener("click", () => navLinks.classList.remove("open"));
}

// ── WhatsApp Float ───────────────────────────────────────────
function initFloatingWhatsApp() {
  const btn = document.getElementById("whatsapp-float");
  if (!btn) return;
  btn.addEventListener("click", () => {
    window.open(WHATSAPP_URL, "_blank", "noopener,noreferrer");
  });
}

// ── HOME ─────────────────────────────────────────────────────
function renderHome(container) {
  const t = window.translations[currentLang];
  const isRtl = t.dir === "rtl";

  container.innerHTML = `
    <!-- HERO -->
    <section class="hero" aria-label="Hero">
      <div class="hero-bg">
        <div class="hero-overlay"></div>
        <div class="hero-pattern"></div>
      </div>
      <div class="hero-content container">
        <p class="hero-eyebrow">${t.hero_eyebrow}</p>
        <h1 class="hero-title">
          <span class="hero-title-name">${t.hero_title}</span>
        </h1>
        <p class="hero-subtitle">${t.hero_subtitle}</p>
        <p class="hero-desc">${t.hero_desc}</p>
        <div class="hero-actions">
          <a href="${WHATSAPP_URL}" target="_blank" rel="noopener" class="btn-primary btn-wa">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
            ${t.hero_cta_primary}
          </a>
          <button onclick="navigate('services')" class="btn-secondary">
            ${t.hero_cta_secondary}
          </button>
        </div>
        <div class="hero-badges">
          <div class="badge"><span class="badge-icon">⚡</span>${t.hero_badge1}</div>
          <div class="badge"><span class="badge-icon">🌍</span>${t.hero_badge2}</div>
          <div class="badge"><span class="badge-icon">🔒</span>${t.hero_badge3}</div>
        </div>
      </div>
      <div class="hero-scroll-indicator" aria-hidden="true">
        <div class="scroll-line"></div>
      </div>
    </section>

    <!-- TRUST BAR -->
    <section class="trust-bar">
      <div class="container trust-grid">
        <div class="trust-item"><strong>+500</strong><span>${currentLang === 'ar' ? 'عميل راضٍ' : currentLang === 'en' ? 'Happy Clients' : currentLang === 'es' ? 'Clientes Satisfechos' : currentLang === 'ru' ? 'Довольных клиентов' : currentLang === 'zh' ? '满意客户' : 'Clients Satisfaits'}</span></div>
        <div class="trust-item"><strong>6</strong><span>${currentLang === 'ar' ? 'لغات متاحة' : currentLang === 'en' ? 'Languages' : currentLang === 'es' ? 'Idiomas' : currentLang === 'ru' ? 'Языков' : currentLang === 'zh' ? '种语言' : 'Langues'}</span></div>
        <div class="trust-item"><strong>15+</strong><span>${currentLang === 'ar' ? 'نوع خدمة' : currentLang === 'en' ? 'Service Types' : currentLang === 'es' ? 'Tipos de Servicio' : currentLang === 'ru' ? 'Видов услуг' : currentLang === 'zh' ? '服务类型' : 'Types de Services'}</span></div>
        <div class="trust-item"><strong>7j/7</strong><span>${currentLang === 'ar' ? 'متاح' : currentLang === 'en' ? 'Available' : currentLang === 'es' ? 'Disponible' : currentLang === 'ru' ? 'Доступен' : currentLang === 'zh' ? '可用' : 'Disponible'}</span></div>
      </div>
    </section>

    <!-- SERVICES OVERVIEW -->
    <section class="section services-overview" id="services-overview">
      <div class="container">
        <div class="section-header">
          <p class="section-eyebrow">${currentLang === 'ar' ? 'ما نقدمه' : currentLang === 'en' ? 'What We Offer' : currentLang === 'es' ? 'Lo que ofrecemos' : currentLang === 'ru' ? 'Что мы предлагаем' : currentLang === 'zh' ? '我们提供的服务' : 'Ce que nous offrons'}</p>
          <h2>${t.services_title}</h2>
          <p class="section-desc">${t.services_subtitle}</p>
        </div>
        <div class="services-grid">
          ${window.services.slice(0, 6).map(s => `
            <article class="service-card" onclick="navigate('services','${s.slug}')" role="button" tabindex="0" aria-label="${s.titles[currentLang]}">
              <div class="service-icon">${s.icon}</div>
              <h3>${s.titles[currentLang]}</h3>
              <p>${s.descs[currentLang].substring(0, 100)}…</p>
              <span class="service-link">${currentLang === 'ar' ? 'المزيد ←' : currentLang === 'en' ? 'Learn more →' : currentLang === 'es' ? 'Más info →' : currentLang === 'ru' ? 'Подробнее →' : currentLang === 'zh' ? '了解更多 →' : 'En savoir plus →'}</span>
            </article>
          `).join("")}
        </div>
        <div class="section-cta">
          <button onclick="navigate('services')" class="btn-outline">
            ${currentLang === 'ar' ? 'عرض جميع الخدمات' : currentLang === 'en' ? 'View All Services' : currentLang === 'es' ? 'Ver todos los servicios' : currentLang === 'ru' ? 'Все услуги' : currentLang === 'zh' ? '查看所有服务' : 'Voir tous les services'}
          </button>
        </div>
      </div>
    </section>

    <!-- WHY US -->
    <section class="section why-us">
      <div class="container">
        <div class="why-grid">
          <div class="why-text">
            <p class="section-eyebrow">${currentLang === 'ar' ? 'لماذا نيفوليرا' : currentLang === 'en' ? 'Why Nevolyra' : currentLang === 'es' ? 'Por qué Nevolyra' : currentLang === 'ru' ? 'Почему Nevolyra' : currentLang === 'zh' ? '为什么选择Nevolyra' : 'Pourquoi Nevolyra'}</p>
            <h2>${currentLang === 'ar' ? 'خبرة وثقة في قلب مراكش' : currentLang === 'en' ? 'Expertise & Trust in the Heart of Marrakech' : currentLang === 'es' ? 'Experiencia y confianza en el corazón de Marrakech' : currentLang === 'ru' ? 'Экспертиза и доверие в сердце Марракеша' : currentLang === 'zh' ? '马拉喀什核心的专业与信任' : 'Expertise & confiance au cœur de Marrakech'}</h2>
            <ul class="why-list">
              ${[
                [currentLang === 'ar' ? 'متعدد اللغات' : currentLang === 'en' ? 'Multilingual' : currentLang === 'es' ? 'Multilingüe' : currentLang === 'ru' ? 'Многоязычный' : currentLang === 'zh' ? '多语言' : 'Multilingue', currentLang === 'ar' ? 'نتواصل بالعربية والفرنسية والإنجليزية والإسبانية والروسية والصينية' : currentLang === 'en' ? 'We communicate in Arabic, French, English, Spanish, Russian and Chinese' : currentLang === 'es' ? 'Comunicamos en árabe, francés, inglés, español, ruso y chino' : currentLang === 'ru' ? 'Общаемся на арабском, французском, английском, испанском, русском и китайском' : currentLang === 'zh' ? '使用阿拉伯语、法语、英语、西班牙语、俄语和中文沟通' : 'Nous communiquons en arabe, français, anglais, espagnol, russe et chinois'],
                [currentLang === 'ar' ? 'سري وموثوق' : currentLang === 'en' ? 'Confidential & Reliable' : currentLang === 'es' ? 'Confidencial y fiable' : currentLang === 'ru' ? 'Конфиденциально и надёжно' : currentLang === 'zh' ? '保密可靠' : 'Confidentiel & fiable', currentLang === 'ar' ? 'جميع ملفاتك تبقى سرية' : currentLang === 'en' ? 'All your files remain strictly confidential' : currentLang === 'es' ? 'Todos sus archivos permanecen estrictamente confidenciales' : currentLang === 'ru' ? 'Все ваши файлы строго конфиденциальны' : currentLang === 'zh' ? '您的所有文件严格保密' : 'Tous vos dossiers restent strictement confidentiels'],
                [currentLang === 'ar' ? 'استجابة سريعة' : currentLang === 'en' ? 'Fast Response' : currentLang === 'es' ? 'Respuesta rápida' : currentLang === 'ru' ? 'Быстрый ответ' : currentLang === 'zh' ? '快速响应' : 'Réponse rapide', currentLang === 'ar' ? 'رد مضمون في أقل من ساعتين' : currentLang === 'en' ? 'Guaranteed reply in under 2 hours' : currentLang === 'es' ? 'Respuesta garantizada en menos de 2 horas' : currentLang === 'ru' ? 'Гарантированный ответ менее чем за 2 часа' : currentLang === 'zh' ? '2小时内保证回复' : 'Réponse garantie en moins de 2 heures'],
                [currentLang === 'ar' ? 'في قلب جليز' : currentLang === 'en' ? 'In the Heart of Guéliz' : currentLang === 'es' ? 'En el corazón de Guéliz' : currentLang === 'ru' ? 'В сердце Гелиза' : currentLang === 'zh' ? '位于格利兹核心' : 'Au cœur de Guéliz', currentLang === 'ar' ? 'قريب من جميع الجهات الإدارية' : currentLang === 'en' ? 'Close to all administrative offices' : currentLang === 'es' ? 'Cerca de todas las oficinas administrativas' : currentLang === 'ru' ? 'Рядом со всеми административными учреждениями' : currentLang === 'zh' ? '毗邻所有行政机构' : 'À proximité de toutes les administrations'],
              ].map(([title, desc]) => `
                <li class="why-item">
                  <div class="why-check">✓</div>
                  <div>
                    <strong>${title}</strong>
                    <p>${desc}</p>
                  </div>
                </li>
              `).join("")}
            </ul>
            <a href="${WHATSAPP_URL}" target="_blank" rel="noopener" class="btn-primary btn-wa">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              ${t.hero_cta_primary}
            </a>
          </div>
          <div class="why-visual" aria-hidden="true">
            <div class="why-card-stack">
              <div class="why-card why-card--1">
                <div class="why-card-icon">✉️</div>
                <span>${currentLang === 'ar' ? 'رسائل رسمية' : currentLang === 'en' ? 'Official Letters' : currentLang === 'es' ? 'Cartas Oficiales' : currentLang === 'ru' ? 'Официальные письма' : currentLang === 'zh' ? '正式信函' : 'Lettres Officielles'}</span>
              </div>
              <div class="why-card why-card--2">
                <div class="why-card-icon">🌐</div>
                <span>${currentLang === 'ar' ? 'ترجمة' : currentLang === 'en' ? 'Translation' : currentLang === 'es' ? 'Traducción' : currentLang === 'ru' ? 'Перевод' : currentLang === 'zh' ? '翻译' : 'Traduction'}</span>
              </div>
              <div class="why-card why-card--3">
                <div class="why-card-icon">🛂</div>
                <span>${currentLang === 'ar' ? 'تأشيرات' : currentLang === 'en' ? 'Visas' : currentLang === 'es' ? 'Visados' : currentLang === 'ru' ? 'Визы' : currentLang === 'zh' ? '签证' : 'Visas'}</span>
              </div>
              <div class="why-card why-card--4">
                <div class="why-card-icon">📄</div>
                <span>CV</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- BLOG PREVIEW -->
    <section class="section blog-preview">
      <div class="container">
        <div class="section-header">
          <p class="section-eyebrow">${currentLang === 'ar' ? 'المدونة' : currentLang === 'en' ? 'Blog' : currentLang === 'es' ? 'Blog' : currentLang === 'ru' ? 'Блог' : currentLang === 'zh' ? '博客' : 'Blog'}</p>
          <h2>${t.blog_title}</h2>
        </div>
        <div class="blog-grid">
          ${window.blogArticles.filter(a => a.lang === currentLang).slice(0, 3).map(a => `
            <article class="blog-card" onclick="navigate('blog','${a.slug}')" role="button" tabindex="0">
              <div class="blog-card-cat">${a.category}</div>
              <h3>${a.title}</h3>
              <p>${a.excerpt}</p>
              <div class="blog-card-footer">
                <span class="blog-date">${formatDate(a.date, currentLang)}</span>
                <span class="blog-read-more">${t.blog_read} →</span>
              </div>
            </article>
          `).join("")}
        </div>
        <div class="section-cta">
          <button onclick="navigate('blog')" class="btn-outline">${currentLang === 'ar' ? 'عرض جميع المقالات' : currentLang === 'en' ? 'View All Articles' : currentLang === 'es' ? 'Ver todos los artículos' : currentLang === 'ru' ? 'Все статьи' : currentLang === 'zh' ? '查看所有文章' : 'Voir tous les articles'}</button>
        </div>
      </div>
    </section>

    <!-- HOME CTA BANNER -->
    <section class="cta-banner">
      <div class="container cta-banner-inner">
        <div class="cta-banner-text">
          <h2>${currentLang === 'ar' ? 'هل تحتاج مساعدة إدارية؟' : currentLang === 'en' ? 'Need administrative help?' : currentLang === 'es' ? '¿Necesita ayuda administrativa?' : currentLang === 'ru' ? 'Нужна административная помощь?' : currentLang === 'zh' ? '需要行政协助？' : 'Besoin d\'aide administrative ?'}</h2>
          <p>${currentLang === 'ar' ? 'تواصل معنا الآن عبر واتساب للحصول على مساعدة سريعة واحترافية.' : currentLang === 'en' ? 'Contact us now on WhatsApp for fast, professional assistance.' : currentLang === 'es' ? 'Contáctenos ahora por WhatsApp para asistencia rápida y profesional.' : currentLang === 'ru' ? 'Свяжитесь с нами в WhatsApp для быстрой профессиональной помощи.' : currentLang === 'zh' ? '立即通过WhatsApp联系我们，获得快速专业的帮助。' : 'Contactez-nous maintenant sur WhatsApp pour une assistance rapide et professionnelle.'}</p>
        </div>
        <a href="${WHATSAPP_URL}" target="_blank" rel="noopener" class="btn-primary btn-wa btn-large">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          ${t.cta_whatsapp}
        </a>
      </div>
    </section>
  `;
  addKeyboardNav();
}

// ── SERVICES LIST ─────────────────────────────────────────────
function renderServices(container) {
  const t = window.translations[currentLang];
  container.innerHTML = `
    <section class="page-hero page-hero--services">
      <div class="container">
        <h1>${t.services_title}</h1>
        <p>${t.services_subtitle}</p>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="services-grid services-grid--full">
          ${window.services.map(s => `
            <article class="service-card" onclick="navigate('services','${s.slug}')" role="button" tabindex="0" aria-label="${s.titles[currentLang]}">
              <div class="service-icon">${s.icon}</div>
              <h2>${s.titles[currentLang]}</h2>
              <p>${s.descs[currentLang]}</p>
              <div class="service-cta">
                <a href="${WHATSAPP_URL}" target="_blank" rel="noopener" class="btn-wa-small" onclick="event.stopPropagation()">
                  📱 WhatsApp
                </a>
                <span class="service-link">${currentLang === 'ar' ? 'المزيد →' : currentLang === 'en' ? 'More →' : currentLang === 'es' ? 'Más →' : currentLang === 'ru' ? 'Подробнее →' : currentLang === 'zh' ? '更多 →' : 'Détails →'}</span>
              </div>
            </article>
          `).join("")}
        </div>
      </div>
    </section>
    ${renderCtaBanner()}
  `;
  addKeyboardNav();
}

// ── SERVICE DETAIL ────────────────────────────────────────────
function renderServiceDetail(container, slug) {
  const t = window.translations[currentLang];
  const service = window.services.find(s => s.slug === slug);
  if (!service) { renderServices(container); return; }

  const relatedArticles = window.blogArticles.filter(a => a.lang === currentLang).slice(0, 3);
  const otherServices = window.services.filter(s => s.slug !== slug).slice(0, 4);

  container.innerHTML = `
    <article class="service-detail" itemscope itemtype="https://schema.org/Service">
      <div class="service-detail-hero">
        <div class="container">
          <nav class="breadcrumb" aria-label="Breadcrumb">
            <button onclick="navigate('home')">${t.nav_home}</button>
            <span aria-hidden="true">›</span>
            <button onclick="navigate('services')">${t.nav_services}</button>
            <span aria-hidden="true">›</span>
            <span itemprop="name">${service.titles[currentLang]}</span>
          </nav>
          <div class="service-detail-icon">${service.icon}</div>
          <h1 itemprop="name">${service.titles[currentLang]}</h1>
          <p class="service-detail-lead" itemprop="description">${service.descs[currentLang]}</p>
          <div class="service-detail-actions">
            <a href="${WHATSAPP_URL}" target="_blank" rel="noopener" class="btn-primary btn-wa">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
              ${t.cta_whatsapp}
            </a>
            <a href="mailto:${EMAIL}" class="btn-secondary">${t.contact_email}</a>
          </div>
        </div>
      </div>
      <div class="service-detail-body">
        <div class="container service-detail-layout">
          <div class="service-detail-content">
            <div class="service-keywords">
              ${(service.keywords_fr || []).map(k => `<span class="keyword-tag">${k}</span>`).join("")}
            </div>
            <div class="service-detail-info">
              <div class="info-card"><span class="info-icon">⚡</span><strong>${currentLang === 'ar' ? 'سرعة التنفيذ' : currentLang === 'en' ? 'Turnaround' : currentLang === 'es' ? 'Tiempo de entrega' : currentLang === 'ru' ? 'Срок выполнения' : currentLang === 'zh' ? '完成时间' : 'Délai'}</strong><span>${currentLang === 'ar' ? '24-48 ساعة' : '24-48h'}</span></div>
              <div class="info-card"><span class="info-icon">🔒</span><strong>${currentLang === 'ar' ? 'السرية' : currentLang === 'en' ? 'Confidentiality' : currentLang === 'es' ? 'Confidencialidad' : currentLang === 'ru' ? 'Конфиденциальность' : currentLang === 'zh' ? '保密性' : 'Confidentialité'}</strong><span>100%</span></div>
              <div class="info-card"><span class="info-icon">🌍</span><strong>${currentLang === 'ar' ? 'اللغات' : currentLang === 'en' ? 'Languages' : currentLang === 'es' ? 'Idiomas' : currentLang === 'ru' ? 'Языки' : currentLang === 'zh' ? '语言' : 'Langues'}</strong><span>6</span></div>
            </div>
          </div>
          <aside class="service-detail-sidebar">
            <div class="sidebar-cta-card">
              <h3>${currentLang === 'ar' ? 'تواصل معنا' : currentLang === 'en' ? 'Get in Touch' : currentLang === 'es' ? 'Contáctenos' : currentLang === 'ru' ? 'Связаться' : currentLang === 'zh' ? '联系我们' : 'Nous contacter'}</h3>
              <a href="${WHATSAPP_URL}" target="_blank" rel="noopener" class="btn-primary btn-wa btn-block">📱 WhatsApp</a>
              <a href="mailto:${EMAIL}" class="btn-secondary btn-block">✉️ Email</a>
              <div class="sidebar-hours">
                <p>📅 ${t.contact_hours}</p>
                <p>📅 ${t.contact_sunday}</p>
              </div>
            </div>
            <div class="sidebar-other-services">
              <h4>${currentLang === 'ar' ? 'خدمات أخرى' : currentLang === 'en' ? 'Other Services' : currentLang === 'es' ? 'Otros servicios' : currentLang === 'ru' ? 'Другие услуги' : currentLang === 'zh' ? '其他服务' : 'Autres services'}</h4>
              ${otherServices.map(s => `
                <button class="sidebar-service-link" onclick="navigate('services','${s.slug}')">${s.icon} ${s.titles[currentLang]}</button>
              `).join("")}
            </div>
          </aside>
        </div>
      </div>
    </article>
  `;
}

// ── BLOG LIST ─────────────────────────────────────────────────
function renderBlog(container) {
  const t = window.translations[currentLang];
  const articles = window.blogArticles.filter(a => a.lang === currentLang);
  const categories = [...new Set(articles.map(a => a.category))];

  container.innerHTML = `
    <section class="page-hero page-hero--blog">
      <div class="container">
        <h1>${t.blog_title}</h1>
        <p>${t.blog_subtitle}</p>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="blog-filters">
          <button class="filter-btn active" data-cat="all" onclick="filterBlog(this,'all')">${currentLang === 'ar' ? 'الكل' : currentLang === 'en' ? 'All' : currentLang === 'es' ? 'Todo' : currentLang === 'ru' ? 'Все' : currentLang === 'zh' ? '全部' : 'Tous'}</button>
          ${categories.map(c => `<button class="filter-btn" data-cat="${c}" onclick="filterBlog(this,'${c}')">${c}</button>`).join("")}
        </div>
        <div class="blog-grid blog-grid--full" id="blog-articles-grid">
          ${articles.map(a => `
            <article class="blog-card" data-cat="${a.category}" onclick="navigate('blog','${a.slug}')" role="button" tabindex="0">
              <div class="blog-card-cat">${a.category}</div>
              <h2>${a.title}</h2>
              <p>${a.excerpt}</p>
              <div class="blog-card-footer">
                <span class="blog-date">${formatDate(a.date, currentLang)}</span>
                <span class="blog-read-more">${t.blog_read} →</span>
              </div>
            </article>
          `).join("")}
        </div>
      </div>
    </section>
  `;
  addKeyboardNav();
}

window.filterBlog = function(btn, cat) {
  document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
  btn.classList.add("active");
  document.querySelectorAll("#blog-articles-grid .blog-card").forEach(card => {
    card.style.display = (cat === "all" || card.dataset.cat === cat) ? "" : "none";
  });
};

// ── ARTICLE ───────────────────────────────────────────────────
function renderArticle(container, slug) {
  const t = window.translations[currentLang];
  const article = window.blogArticles.find(a => a.slug === slug);
  if (!article) { renderBlog(container); return; }

  const related = window.blogArticles.filter(a => a.lang === currentLang && a.slug !== slug).slice(0, 3);

  container.innerHTML = `
    <article class="article-full" itemscope itemtype="https://schema.org/Article">
      <div class="article-hero">
        <div class="container">
          <nav class="breadcrumb">
            <button onclick="navigate('home')">${t.nav_home}</button>
            <span>›</span>
            <button onclick="navigate('blog')">${t.nav_blog}</button>
            <span>›</span>
            <span>${article.title}</span>
          </nav>
          <div class="article-cat">${article.category}</div>
          <h1 itemprop="headline">${article.title}</h1>
          <div class="article-meta">
            <time itemprop="datePublished" datetime="${article.date}">${formatDate(article.date, currentLang)}</time>
            <span class="article-meta-sep">·</span>
            <span itemprop="author">Nevolyra</span>
          </div>
        </div>
      </div>
      <div class="article-body container">
        <div class="article-layout">
          <div class="article-content" itemprop="articleBody">
            <p class="article-lead">${article.excerpt}</p>
            ${article.body}
            <div class="article-tags">
              ${(article.keywords || []).map(k => `<span class="keyword-tag">${k}</span>`).join("")}
            </div>
            <div class="article-whatsapp-banner">
              <div class="whatsapp-banner-text">
                <strong>📱 ${t.blog_whatsapp_cta}</strong>
              </div>
              <a href="${WHATSAPP_URL}" target="_blank" rel="noopener" class="btn-primary btn-wa">${t.cta_whatsapp}</a>
            </div>
          </div>
          <aside class="article-sidebar">
            <div class="sidebar-cta-card">
              <h3>Nevolyra</h3>
              <p>${currentLang === 'ar' ? 'كاتب عمومي في مراكش جليز' : currentLang === 'en' ? 'Public Writer in Marrakech Guéliz' : currentLang === 'es' ? 'Escritor Público en Marrakech Guéliz' : currentLang === 'ru' ? 'Публичный писарь в Марракеш Гелиз' : currentLang === 'zh' ? '马拉喀什格利兹公共文书员' : 'Écrivain Public à Marrakech Guéliz'}</p>
              <a href="${WHATSAPP_URL}" target="_blank" rel="noopener" class="btn-primary btn-wa btn-block">📱 WhatsApp</a>
              <a href="mailto:${EMAIL}" class="btn-secondary btn-block">✉️ Email</a>
            </div>
            <div class="sidebar-related">
              <h4>${currentLang === 'ar' ? 'مقالات ذات صلة' : currentLang === 'en' ? 'Related Articles' : currentLang === 'es' ? 'Artículos relacionados' : currentLang === 'ru' ? 'Похожие статьи' : currentLang === 'zh' ? '相关文章' : 'Articles liés'}</h4>
              ${related.map(a => `<button class="sidebar-article-link" onclick="navigate('blog','${a.slug}')">${a.title}</button>`).join("")}
            </div>
          </aside>
        </div>
      </div>
      <div class="article-nav container">
        <button onclick="navigate('blog')" class="btn-outline">${t.blog_back}</button>
      </div>
    </article>
  `;
}

// ── FAQ ───────────────────────────────────────────────────────
function renderFAQ(container) {
  const t = window.translations[currentLang];
  const faqs = getFAQs(currentLang);

  container.innerHTML = `
    <section class="page-hero page-hero--faq">
      <div class="container">
        <h1>${t.faq_title}</h1>
        <p>${t.faq_subtitle}</p>
      </div>
    </section>
    <section class="section">
      <div class="container faq-container">
        ${faqs.map((f, i) => `
          <div class="faq-item" id="faq-${i}">
            <button class="faq-question" onclick="toggleFAQ(${i})" aria-expanded="false" aria-controls="faq-answer-${i}">
              <span>${f.q}</span>
              <span class="faq-icon" aria-hidden="true">+</span>
            </button>
            <div class="faq-answer" id="faq-answer-${i}" hidden>
              <p>${f.a}</p>
            </div>
          </div>
        `).join("")}
      </div>
    </section>
    ${renderCtaBanner()}
  `;
}

window.toggleFAQ = function(i) {
  const item = document.getElementById(`faq-${i}`);
  const btn = item.querySelector(".faq-question");
  const answer = document.getElementById(`faq-answer-${i}`);
  const icon = item.querySelector(".faq-icon");
  const isOpen = !answer.hidden;
  answer.hidden = isOpen;
  btn.setAttribute("aria-expanded", !isOpen);
  icon.textContent = isOpen ? "+" : "−";
  item.classList.toggle("faq-item--open", !isOpen);
};

function getFAQs(lang) {
  const faqs = {
    fr: [
      { q: "Qu'est-ce qu'un écrivain public ?", a: "Un écrivain public est un professionnel qui aide les particuliers et les entreprises à rédiger des documents officiels, des lettres administratives, des demandes et toute correspondance nécessitant un style formel et précis." },
      { q: "Quels sont vos délais de livraison ?", a: "Pour la plupart des documents, nous livrons dans les 24 à 48 heures. Les documents urgents peuvent être traités le jour même moyennant un supplément." },
      { q: "Proposez-vous des traductions certifiées ?", a: "Oui, nous proposons des traductions certifiées (assermentées) acceptées par la plupart des administrations marocaines et étrangères." },
      { q: "Comment vous contacter ?", a: "Vous pouvez nous joindre via WhatsApp au +212602321305, par email à salatrir@gmail.com, ou en nous rendant visite à notre bureau à Guéliz, Marrakech." },
      { q: "Travaillez-vous avec des clients étrangers ?", a: "Absolument ! Nous accompagnons régulièrement des expatriés, des touristes et des clients internationaux. Notre service est disponible en 6 langues." },
      { q: "Est-ce que mes informations sont confidentielles ?", a: "Oui, la confidentialité est notre priorité absolue. Tous vos documents et informations personnelles sont traités avec la plus grande discrétion." },
      { q: "Combien coûte la rédaction d'une lettre administrative ?", a: "Nos tarifs varient selon la complexité du document. Contactez-nous sur WhatsApp pour un devis personnalisé et gratuit." },
      { q: "Pouvez-vous m'aider pour un dossier de visa ?", a: "Oui, nous aidons nos clients à préparer des dossiers de visa complets, notamment la lettre de motivation, et à vérifier la conformité des documents." },
      { q: "Travaillez-vous le week-end ?", a: "Oui, nous sommes disponibles du lundi au samedi de 8h à 20h, et le dimanche de 9h à 18h." },
      { q: "Puis-je vous envoyer mes documents par WhatsApp ?", a: "Absolument ! Vous pouvez nous envoyer vos documents, photos ou informations directement par WhatsApp ou par email pour que nous puissions vous préparer un devis." },
    ],
    ar: [
      { q: "ما هو الكاتب العمومي؟", a: "الكاتب العمومي متخصص يساعد الأفراد والمؤسسات في تحرير الوثائق الرسمية والرسائل الإدارية والطلبات التي تتطلب أسلوباً رسمياً ودقيقاً." },
      { q: "ما هي مدد التسليم لديكم؟", a: "لمعظم الوثائق، نسلم خلال 24 إلى 48 ساعة. يمكن معالجة الوثائق العاجلة في نفس اليوم مقابل رسوم إضافية." },
      { q: "هل تقدمون ترجمات معتمدة؟", a: "نعم، نقدم ترجمات معتمدة مقبولة من قبل معظم الإدارات المغربية والأجنبية." },
      { q: "كيف يمكن التواصل معكم؟", a: "يمكنكم التواصل معنا عبر واتساب على الرقم +212602321305، أو عبر البريد الإلكتروني salatrir@gmail.com." },
      { q: "هل تعملون مع عملاء أجانب؟", a: "بالتأكيد! نرافق بانتظام المغتربين والسياح والعملاء الدوليين. خدمتنا متاحة بـ6 لغات." },
      { q: "هل معلوماتي سرية؟", a: "نعم، السرية أولويتنا القصوى. تُعالج جميع وثائقك ومعلوماتك الشخصية بأقصى درجات التكتم." },
      { q: "كم تكلف كتابة رسالة إدارية؟", a: "تتفاوت أسعارنا حسب تعقيد الوثيقة. تواصل معنا عبر واتساب للحصول على عرض أسعار مخصص ومجاني." },
      { q: "هل يمكنكم مساعدتي في ملف التأشيرة؟", a: "نعم، نساعد عملاءنا في إعداد ملفات التأشيرة الكاملة، بما في ذلك رسالة الدوافع، والتحقق من مطابقة الوثائق." },
    ],
    en: [
      { q: "What is a public writer?", a: "A public writer is a professional who helps individuals and businesses draft official documents, administrative letters, and any correspondence requiring a formal and precise style." },
      { q: "What are your turnaround times?", a: "For most documents, we deliver within 24 to 48 hours. Urgent documents can be processed the same day for an additional fee." },
      { q: "Do you offer certified translations?", a: "Yes, we offer certified translations accepted by most Moroccan and foreign administrations." },
      { q: "How do I contact you?", a: "You can reach us via WhatsApp at +212602321305, by email at salatrir@gmail.com, or by visiting our office in Guéliz, Marrakech." },
      { q: "Do you work with foreign clients?", a: "Absolutely! We regularly assist expats, tourists and international clients. Our service is available in 6 languages." },
      { q: "Is my information confidential?", a: "Yes, confidentiality is our top priority. All your documents and personal information are handled with the utmost discretion." },
      { q: "Can you help me with a visa application?", a: "Yes, we help clients prepare complete visa files, including the cover letter, and verify document compliance." },
      { q: "Do you work on weekends?", a: "Yes, we're available Monday to Saturday 8AM–8PM, and Sunday 9AM–6PM." },
    ],
    es: [
      { q: "¿Qué es un escritor público?", a: "Un escritor público es un profesional que ayuda a particulares y empresas a redactar documentos oficiales, cartas administrativas y cualquier correspondencia que requiera un estilo formal y preciso." },
      { q: "¿Cuáles son sus plazos de entrega?", a: "Para la mayoría de los documentos, entregamos en 24 a 48 horas. Los documentos urgentes pueden procesarse el mismo día." },
      { q: "¿Ofrecen traducciones certificadas?", a: "Sí, ofrecemos traducciones certificadas aceptadas por la mayoría de las administraciones marroquíes y extranjeras." },
      { q: "¿Cómo puedo contactarles?", a: "Puede contactarnos por WhatsApp al +212602321305, por email a salatrir@gmail.com." },
    ],
    ru: [
      { q: "Что такое публичный писарь?", a: "Публичный писарь — профессионал, помогающий физическим лицам и компаниям составлять официальные документы, административные письма и любую корреспонденцию, требующую формального и точного стиля." },
      { q: "Каковы сроки выполнения?", a: "Для большинства документов мы доставляем в течение 24–48 часов. Срочные документы могут быть обработаны в тот же день." },
      { q: "Предлагаете ли вы заверенные переводы?", a: "Да, мы предлагаем заверенные переводы, принимаемые большинством марокканских и иностранных администраций." },
      { q: "Как с вами связаться?", a: "Вы можете связаться с нами через WhatsApp по номеру +212602321305 или по электронной почте salatrir@gmail.com." },
    ],
    zh: [
      { q: "什么是公共文书员？", a: "公共文书员是帮助个人和企业起草正式文件、行政信函及任何需要正式精确风格的信函的专业人员。" },
      { q: "您的交付时间是多久？", a: "对于大多数文件，我们在24至48小时内交付。加急文件可当天处理，需额外费用。" },
      { q: "您提供认证翻译吗？", a: "是的，我们提供被大多数摩洛哥和外国行政机关接受的认证翻译。" },
      { q: "如何联系您？", a: "您可以通过WhatsApp +212602321305或电子邮件salatrir@gmail.com联系我们。" },
    ],
  };
  return faqs[lang] || faqs.fr;
}

// ── TESTIMONIALS ──────────────────────────────────────────────
function renderTestimonials(container) {
  const t = window.translations[currentLang];
  const testimonials = getTestimonials(currentLang);

  container.innerHTML = `
    <section class="page-hero page-hero--testimonials">
      <div class="container">
        <h1>${t.test_title}</h1>
        <p>${t.test_subtitle}</p>
      </div>
    </section>
    <section class="section">
      <div class="container">
        <div class="testimonials-grid">
          ${testimonials.map(tm => `
            <div class="testimonial-card" itemscope itemtype="https://schema.org/Review">
              <div class="testimonial-stars" aria-label="5 étoiles">★★★★★</div>
              <blockquote itemprop="reviewBody">"${tm.text}"</blockquote>
              <div class="testimonial-author" itemprop="author">${tm.name}</div>
              <div class="testimonial-role">${tm.role}</div>
            </div>
          `).join("")}
        </div>
      </div>
    </section>
    ${renderCtaBanner()}
  `;
}

function getTestimonials(lang) {
  const all = {
    fr: [
      { name: "Sophie M.", role: "Expatriée française à Marrakech", text: "Nevolyra m'a aidée à préparer mon dossier de carte de séjour en un temps record. Service impeccable, professionnel et très réactif sur WhatsApp. Je recommande vivement !" },
      { name: "Ahmed B.", role: "Entrepreneur, Guéliz", text: "J'avais besoin de plusieurs lettres officielles pour mon entreprise. La qualité de rédaction est excellente et les délais sont respectés. Mon écrivain public de confiance à Marrakech." },
      { name: "Carlos R.", role: "Touriste espagnol", text: "En tant qu'étranger ne parlant pas arabe, Nevolyra a été indispensable pour mes démarches administratives. Ils m'ont tout expliqué et rédigé mes documents en espagnol et en arabe." },
      { name: "Fatima O.", role: "Enseignante, Médina", text: "Excellent service pour la préparation de mon dossier de visa Canada. La lettre de motivation rédigée était parfaite et mon visa a été accordé. Merci Nevolyra !" },
      { name: "Anna K.", role: "Résidente russe, Hivernage", text: "Very professional service. They helped me with all my documents in Russian, French and Arabic. The team is responsive and trustworthy. Highly recommended for foreigners in Marrakech." },
      { name: "Marie-Claire D.", role: "Retraitée française", text: "J'ai utilisé le service de Nevolyra pour mon mariage mixte. Toute la paperasse a été gérée avec une efficacité remarquable. Un service cinq étoiles." },
      { name: "Mehdi A.", role: "Demandeur d'emploi, Marrakech", text: "Mon CV et ma lettre de motivation ont été refaits de A à Z. Deux semaines après, j'avais mon premier entretien. Merci pour ce travail de qualité !" },
      { name: "David L.", role: "Investisseur britannique", text: "Nevolyra assisted me with all administrative procedures for setting up my business in Marrakech. Excellent multilingual service, very professional team." },
      { name: "Yasmine T.", role: "Étudiante, Marrakech", text: "Service rapide et efficace pour ma demande de bourse. Les documents étaient parfaitement rédigés et mon dossier a été accepté. Merci beaucoup !" },
      { name: "Li Wei", role: "Touriste chinois", text: "非常专业的服务！他们用中文帮助我处理了在摩洛哥的所有行政手续。强烈推荐！" },
      { name: "Roberto F.", role: "Expatrié italien, Sidi Ghanem", text: "Ho utilizzato i servizi di Nevolyra per vari documenti amministrativi. Servizio eccellente, professionale e multilingue. Lo consiglio vivamente a tutti gli stranieri a Marrakech." },
      { name: "Nour H.", role: "Commerçante, Médina", text: "خدمة ممتازة وسريعة. ساعدوني في كتابة شكاية رسمية واحترفوا في تقديمها. النتيجة كانت إيجابية. أنصح بهم بشدة." },
    ],
    ar: [
      { name: "نور ه.", role: "تاجرة، المدينة القديمة", text: "خدمة ممتازة وسريعة. ساعدوني في كتابة شكاية رسمية وأحسنوا في تقديمها. النتيجة كانت إيجابية. أنصح بهم بشدة." },
      { name: "أحمد ب.", role: "رجل أعمال، جليز", text: "احتجت لعدة رسائل رسمية لشركتي. جودة الكتابة ممتازة والمواعيد محترمة. كاتبي العمومي الموثوق في مراكش." },
      { name: "فاطمة أ.", role: "أستاذة، المدينة", text: "خدمة رائعة لإعداد ملف تأشيرتي. الرسالة كانت مثالية وتم قبول تأشيرتي. شكراً نيفوليرا!" },
    ],
    en: [
      { name: "Sophie M.", role: "French expat in Marrakech", text: "Nevolyra helped me prepare my residence card file in record time. Impeccable, professional and very responsive on WhatsApp. Highly recommended!" },
      { name: "Carlos R.", role: "Spanish tourist", text: "As a foreigner who doesn't speak Arabic, Nevolyra was indispensable for my administrative formalities. They explained everything and drafted my documents in Spanish and Arabic." },
      { name: "Anna K.", role: "Russian resident, Hivernage", text: "Very professional service. They helped me with all my documents in Russian, French and Arabic. Highly recommended for foreigners in Marrakech." },
      { name: "David L.", role: "British investor", text: "Nevolyra assisted me with all administrative procedures for setting up my business in Marrakech. Excellent multilingual service, very professional team." },
    ],
    es: [
      { name: "Carlos R.", role: "Turista español", text: "Como extranjero que no habla árabe, Nevolyra fue imprescindible para mis gestiones administrativas. Lo explicaron todo y redactaron mis documentos en español y árabe." },
      { name: "Sophie M.", role: "Expatriada francesa en Marrakech", text: "Nevolyra me ayudó a preparar mi expediente de permiso de residencia en tiempo récord. Servicio impecable y muy reactivo por WhatsApp." },
    ],
    ru: [
      { name: "Анна К.", role: "Российский резидент, Иверназ", text: "Очень профессиональный сервис. Они помогли мне со всеми документами на русском, французском и арабском языках. Настоятельно рекомендую иностранцам в Марракеше." },
    ],
    zh: [
      { name: "李伟", role: "中国游客", text: "非常专业的服务！他们用中文帮助我处理了在摩洛哥的所有行政手续。强烈推荐！" },
    ],
  };
  return all[lang] || all.fr;
}

// ── CONTACT ───────────────────────────────────────────────────
function renderContact(container) {
  const t = window.translations[currentLang];
  container.innerHTML = `
    <section class="page-hero page-hero--contact">
      <div class="container">
        <h1>${t.contact_title}</h1>
        <p>${t.contact_subtitle}</p>
      </div>
    </section>
    <section class="section">
      <div class="container contact-layout">
        <div class="contact-info">
          <div class="contact-card">
            <div class="contact-card-icon">💬</div>
            <h3>WhatsApp</h3>
            <p>${PHONE}</p>
            <a href="${WHATSAPP_URL}" target="_blank" rel="noopener" class="btn-primary btn-wa">${t.contact_whatsapp}</a>
          </div>
          <div class="contact-card">
            <div class="contact-card-icon">✉️</div>
            <h3>Email</h3>
            <p>${EMAIL}</p>
            <a href="mailto:${EMAIL}" class="btn-secondary">${t.contact_email}</a>
          </div>
          <div class="contact-card">
            <div class="contact-card-icon">📍</div>
            <h3>${currentLang === 'ar' ? 'الموقع' : currentLang === 'en' ? 'Location' : currentLang === 'es' ? 'Ubicación' : currentLang === 'ru' ? 'Адрес' : currentLang === 'zh' ? '地址' : 'Adresse'}</h3>
            <p>Guéliz, Marrakech, Maroc</p>
            <a href="https://maps.google.com/?q=Gueliz+Marrakech" target="_blank" rel="noopener" class="btn-secondary">Google Maps</a>
          </div>
          <div class="contact-card">
            <div class="contact-card-icon">🕐</div>
            <h3>${currentLang === 'ar' ? 'ساعات العمل' : currentLang === 'en' ? 'Hours' : currentLang === 'es' ? 'Horario' : currentLang === 'ru' ? 'Часы работы' : currentLang === 'zh' ? '营业时间' : 'Horaires'}</h3>
            <p>${t.contact_hours}</p>
            <p>${t.contact_sunday}</p>
          </div>
        </div>
        <div class="contact-form-wrap">
          <h2>${currentLang === 'ar' ? 'أرسل رسالة' : currentLang === 'en' ? 'Send a Message' : currentLang === 'es' ? 'Enviar un mensaje' : currentLang === 'ru' ? 'Отправить сообщение' : currentLang === 'zh' ? '发送消息' : 'Envoyer un message'}</h2>
          <div class="contact-form">
            <div class="form-group">
              <label for="contact-name">${t.contact_form_name}</label>
              <input type="text" id="contact-name" placeholder="${t.contact_form_name}" autocomplete="name">
            </div>
            <div class="form-group">
              <label for="contact-email">${t.contact_form_email}</label>
              <input type="email" id="contact-email" placeholder="${t.contact_form_email}" autocomplete="email">
            </div>
            <div class="form-group">
              <label for="contact-message">${t.contact_form_message}</label>
              <textarea id="contact-message" rows="5" placeholder="${t.contact_form_message}"></textarea>
            </div>
            <button class="btn-primary btn-wa" onclick="sendContactForm()">${t.contact_form_send}</button>
          </div>
          <div class="map-placeholder" aria-label="Carte Google Maps - Guéliz, Marrakech">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27046.52!2d-8.01!3d31.64!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xdafee8d96179e51%3A0x3f1a838c589ebe50!2sGu%C3%A9liz%2C%20Marrakech!5e0!3m2!1sfr!2sma!4v1700000000000"
              width="100%" height="300" style="border:0;border-radius:12px;" allowfullscreen loading="lazy"
              referrerpolicy="no-referrer-when-downgrade" title="Nevolyra - Guéliz Marrakech"></iframe>
          </div>
        </div>
      </div>
    </section>
  `;
}

window.sendContactForm = function() {
  const name = document.getElementById("contact-name").value.trim();
  const email = document.getElementById("contact-email").value.trim();
  const msg = document.getElementById("contact-message").value.trim();
  if (!name || !msg) return;
  const text = encodeURIComponent(`Bonjour Nevolyra,\n\nNom: ${name}\nEmail: ${email}\n\nMessage: ${msg}`);
  window.open(`${WHATSAPP_URL}?text=${text}`, "_blank", "noopener,noreferrer");
};

// ── CTA BANNER ────────────────────────────────────────────────
function renderCtaBanner() {
  const t = window.translations[currentLang];
  return `
    <section class="cta-banner">
      <div class="container cta-banner-inner">
        <div class="cta-banner-text">
          <h2>${currentLang === 'ar' ? 'هل تحتاج مساعدة؟' : currentLang === 'en' ? 'Need Help?' : currentLang === 'es' ? '¿Necesita ayuda?' : currentLang === 'ru' ? 'Нужна помощь?' : currentLang === 'zh' ? '需要帮助？' : 'Besoin d\'aide ?'}</h2>
          <p>${currentLang === 'ar' ? 'تواصل معنا عبر واتساب الآن' : currentLang === 'en' ? 'Contact us on WhatsApp now' : currentLang === 'es' ? 'Contáctenos por WhatsApp ahora' : currentLang === 'ru' ? 'Свяжитесь с нами в WhatsApp сейчас' : currentLang === 'zh' ? '立即通过WhatsApp联系我们' : 'Contactez-nous sur WhatsApp maintenant'}</p>
        </div>
        <a href="${WHATSAPP_URL}" target="_blank" rel="noopener" class="btn-primary btn-wa btn-large">${t.cta_whatsapp}</a>
      </div>
    </section>
  `;
}

// ── HELPERS ───────────────────────────────────────────────────
function formatDate(dateStr, lang) {
  const d = new Date(dateStr);
  const locales = { fr: "fr-FR", ar: "ar-MA", en: "en-US", es: "es-ES", ru: "ru-RU", zh: "zh-CN" };
  return d.toLocaleDateString(locales[lang] || "fr-FR", { year: "numeric", month: "long", day: "numeric" });
}

function addKeyboardNav() {
  document.querySelectorAll("[role='button'][tabindex='0']").forEach(el => {
    el.addEventListener("keydown", e => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); el.click(); }
    });
  });
}
