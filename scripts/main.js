/* =========================================================================
   camerounhistoire.org — Interface logic
   -------------------------------------------------------------------------
   Responsibilities:
   1. Bilingual rendering (EN/FR) from the content objects in /data
   2. Light/dark theme with system preference and persistence
   3. Hash-based section routing (#home, #chapters, #chapter/<id>, ...)
   4. Rendering of chapters, timeline, contributors, updates
   5. Accessible mobile navigation
   No frameworks, no build step. Content edits happen in /data only.
   ========================================================================= */

(function () {
  "use strict";

  var C = window.CH_CONTENT;
  var CHAPTERS = window.CH_CHAPTERS;
  var CONTRIBUTORS = window.CH_CONTRIBUTORS;
  var UPDATES = window.CH_UPDATES;

  /* ---------- State ---------- */
  var lang = readStore("ch-lang") || "en";
  var theme = readStore("ch-theme") ||
    (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");

  function readStore(k) {
    try { return localStorage.getItem(k); } catch (e) { return null; }
  }
  function writeStore(k, v) {
    try { localStorage.setItem(k, v); } catch (e) { /* private mode: ignore */ }
  }

  /* ---------- Helpers ---------- */
  function t(obj) { return obj && (obj[lang] != null ? obj[lang] : obj.en); }

  // Resolve a dot path like "home.heroTitle" inside CH_CONTENT,
  // falling back to window.I18N if the key isn't found in CH_CONTENT.
  function tPath(path) {
    var node = C;
    var parts = path.split(".");
    for (var i = 0; i < parts.length; i++) {
      node = node ? node[parts[i]] : null;
    }
    if (node) return t(node);

    // FIX: Fallback to window.I18N for keys that only exist in the
    // newer locale system (e.g. privacy.*).
    var dict = window.I18N && (window.I18N[lang] || window.I18N.en);
    if (dict) {
      var n = dict;
      for (var k = 0; k < parts.length; k++) {
        n = n ? n[parts[k]] : null;
      }
      if (typeof n === "string") return n;
    }
    return "";
  }

  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (ch) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[ch];
    });
  }

  function el(id) { return document.getElementById(id); }

  function formatDate(iso) {
    var d = new Date(iso + "T00:00:00");
    return d.toLocaleDateString(lang === "fr" ? "fr-FR" : "en-GB",
      { year: "numeric", month: "long", day: "numeric" });
  }

  /* ---------- Theme ---------- */
  function applyTheme() {
    document.documentElement.setAttribute("data-theme", theme);
    var btn = el("theme-toggle");
    var toDark = theme === "light";
    btn.setAttribute("aria-label", toDark ? t(C.nav.themeDark) : t(C.nav.themeLight));
    btn.title = btn.getAttribute("aria-label");
    el("theme-icon-moon").style.display = toDark ? "" : "none";
    el("theme-icon-sun").style.display = toDark ? "none" : "";
  }

  /* ---------- Language ---------- */
  function applyLanguage() {
    document.documentElement.lang = lang;
    document.title = lang === "fr"
      ? "Cameroun Histoire — L'histoire du Cameroun, racontée de l'intérieur"
      : "Cameroun Histoire — The history of Cameroon, told from within";

    // Static nodes marked with data-i18n
    var nodes = document.querySelectorAll("[data-i18n]");
    for (var i = 0; i < nodes.length; i++) {
      nodes[i].textContent = tPath(nodes[i].getAttribute("data-i18n"));
    }
    var attrNodes = document.querySelectorAll("[data-i18n-aria]");
    for (var j = 0; j < attrNodes.length; j++) {
      attrNodes[j].setAttribute("aria-label", tPath(attrNodes[j].getAttribute("data-i18n-aria")));
    }

    // Language button shows the language you would switch TO
    el("lang-toggle").innerHTML = lang === "en"
      ? '<span class="lang-active">EN</span>&thinsp;/&thinsp;FR'
      : 'EN&thinsp;/&thinsp;<span class="lang-active">FR</span>';
    el("lang-toggle").setAttribute("aria-label", t(C.nav.langLabel));

    renderDynamic();
    applyTheme(); // refresh button labels in the new language
  }

  /* ---------- Dynamic rendering ---------- */
  function statusBadge(s) {
    return '<span class="status status-' + s + '">' + esc(t(C.chapters.status[s])) + "</span>";
  }

  function chapterCard(ch) {
    return (
      '<a class="chapter-card" href="#chapter/' + ch.id + '">' +
        '<span class="chapter-num" aria-hidden="true">' + String(ch.num).padStart(2, "0") + "</span>" +
        '<span class="chapter-card-period">' + esc(t(ch.period)) + "</span>" +
        '<span class="chapter-card-title">' + esc(t(ch.title)) + "</span>" +
        '<p class="chapter-card-summary">' + esc(t(ch.summary)) + "</p>" +
        '<span class="chapter-card-foot">' +
          "<span>" + esc(ch.contributor.name) + "</span>" +
          statusBadge(ch.status) +
        "</span>" +
      "</a>"
    );
  }

  function renderFeatured() {
    var picks = [CHAPTERS[0], CHAPTERS[4], CHAPTERS[7], CHAPTERS[10]];
    el("featured-cards").innerHTML = picks.map(chapterCard).join("");
  }

  function renderChapterIndex() {
    el("chapter-index").innerHTML = CHAPTERS.map(chapterCard).join("");
  }

  function renderTimeline(containerId, preview) {
    var list = preview ? CHAPTERS.filter(function (c, i) { return i % 2 === 0; }) : CHAPTERS;
    el(containerId).innerHTML = list.map(function (ch) {
      return (
        "<li>" +
          '<span class="tl-period">' + esc(t(ch.period)) + "</span>" +
          "<h3><a href=\"#chapter/" + ch.id + '">' + esc(t(ch.title)) + "</a></h3>" +
          (preview ? "" :
            "<p>" + esc(t(ch.summary)) + "</p>" +
            '<a class="tl-link" href="#chapter/' + ch.id + '">' + esc(t(C.timeline.openChapter)) + " →</a>") +
        "</li>"
      );
    }).join("");
  }

  function renderChapterDetail(ch) {
    var i = CHAPTERS.indexOf(ch);
    var prev = CHAPTERS[i - 1];
    var next = CHAPTERS[i + 1];
    var kw = t(ch.keywords).map(function (k) { return "<li>" + esc(k) + "</li>"; }).join("");
    var terms = ch.keyTerms.map(function (k) { return "<li>" + esc(t(k)) + "</li>"; }).join("");

    el("chapter-detail").innerHTML =
      '<div class="wrap">' +
        '<nav aria-label="breadcrumb" class="mt-3"><a href="#chapters">← ' + esc(t(C.chapters.backToIndex)) + "</a></nav>" +
        '<header class="chapter-detail-head">' +
          '<span class="chapter-num" aria-hidden="true">' + String(ch.num).padStart(2, "0") + "</span>" +
          "<p class=\"kicker\">" + esc(t(ch.period)) + "</p>" +
          "<h1>" + esc(t(ch.title)) + "</h1>" +
          '<div class="chapter-meta">' +
            statusBadge(ch.status) +
            "<span>" + esc(t(C.chapters.coordinator)) + " : " + esc(ch.contributor.name) + " · " + esc(t(ch.contributor.affil)) + "</span>" +
            "<span>v" + esc(ch.version) + "</span>" +
          "</div>" +
        "</header>" +
        '<div class="chapter-body">' +
          '<div class="chapter-main prose">' +
            "<h3>" + esc(t(C.chapters.overview)) + "</h3>" +
            "<p class=\"lead\">" + esc(t(ch.summary)) + "</p>" +
            '<figure class="pullquote"><blockquote>' + esc(t(ch.pullQuote)) + "</blockquote>" +
              "<figcaption>" + esc(t(ch.title)) + " — camerounhistoire.org</figcaption></figure>" +
            "<h3>" + esc(t(C.chapters.narrative)) + "</h3>" +
            "<p>" + esc(t(ch.narrative)) + "</p>" +
            "<h3>" + esc(t(C.chapters.subsections)) + "</h3>" +
            '<ol class="subsection-list">' +
              ch.subsections.map(function (s) { return "<li>" + esc(t(s)) + "</li>"; }).join("") +
            "</ol>" +
            "<h3>" + esc(t(C.chapters.questions)) + "</h3>" +
            "<ul>" + ch.questions.map(function (q) { return "<li>" + esc(t(q)) + "</li>"; }).join("") + "</ul>" +
          "</div>" +
          '<aside class="chapter-side">' +
            '<div class="side-block note"><h4>' + esc(t(C.chapters.sidebarNote)) + "</h4><p>" + esc(t(ch.sidebar)) + "</p></div>" +
            '<div class="side-block"><h4>' + esc(t(C.chapters.keyTerms)) + '</h4><ul class="keyterms">' + terms + "</ul></div>" +
            '<div class="side-block"><h4>' + esc(t(C.chapters.themes)) + '</h4><ul class="keyterms">' + kw + "</ul></div>" +
            '<div class="side-block"><h4>' + esc(t(C.chapters.sources)) + "</h4><ul>" +
              ch.sources.map(function (s) { return "<li>" + esc(t(s)) + "</li>"; }).join("") + "</ul></div>" +
            '<div class="side-block"><h4>' + esc(t(C.chapters.openIssues)) + "</h4><ul>" +
              ch.openIssues.map(function (s) { return "<li>" + esc(t(s)) + "</li>"; }).join("") + "</ul></div>" +
          "</aside>" +
        "</div>" +
        '<nav class="chapter-pager" aria-label="Chapter navigation">' +
          (prev
            ? '<a href="#chapter/' + prev.id + '"><span class="pager-label">← ' + esc(t(C.chapters.prevChapter)) + '</span><span class="pager-title">' + esc(t(prev.title)) + "</span></a>"
            : "<span></span>") +
          (next
            ? '<a class="next" href="#chapter/' + next.id + '"><span class="pager-label">' + esc(t(C.chapters.nextChapter)) + ' →</span><span class="pager-title">' + esc(t(next.title)) + "</span></a>"
            : "") +
        "</nav>" +
      "</div>";
  }

  function renderPrinciples() {
    el("principles-list").innerHTML = C.home.principles.map(function (p) {
      return "<li><h3>" + esc(t(p.title)) + "</h3><p>" + esc(t(p.body)) + "</p></li>";
    }).join("");
  }

  function renderAbout() {
    el("about-body").innerHTML = C.about.body.map(function (s) {
      return "<h3>" + esc(t(s.heading)) + "</h3><p>" + esc(t(s.text)) + "</p>";
    }).join("");
  }

  function renderContributors() {
    el("contrib-grid").innerHTML = CONTRIBUTORS.map(function (p) {
      return (
        '<article class="contrib-card">' +
          '<div class="contrib-head">' +
            '<span class="monogram" aria-hidden="true">' + esc(p.initials) + "</span>" +
            "<div><h3>" + esc(p.name) + '</h3><span class="contrib-role">' + esc(t(p.role)) + "</span></div>" +
          "</div>" +
          "<p class=\"contrib-bio\">" + esc(t(p.bio)) + "</p>" +
          "<dl>" +
            "<dt>" + esc(t(C.contributors.profileRegions)) + "</dt><dd>" + esc(t(p.regions)) + "</dd>" +
            "<dt>" + esc(t(C.contributors.profileLangs)) + "</dt><dd>" + esc(p.langs.join(" · ")) + "</dd>" +
          "</dl>" +
        "</article>"
      );
    }).join("");

    el("workflow-list").innerHTML = C.contributors.workflow.map(function (w, i) {
      return (
        "<li>" +
          '<span class="step-num" aria-hidden="true">' + (i + 1) + "</span>" +
          "<h4>" + esc(t(w.step)) + "</h4>" +
          "<p>" + esc(t(w.text)) + "</p>" +
        "</li>"
      );
    }).join("");

    el("code-list").innerHTML = C.contributors.code.map(function (c) {
      return "<li><p>" + esc(t(c)) + "</p></li>";
    }).join("");
  }

  function renderMethod() {
    el("method-body").innerHTML = C.method.sections.map(function (s) {
      return '<div class="method-section"><h3>' + esc(t(s.heading)) + "</h3><p>" + esc(t(s.text)) + "</p></div>";
    }).join("");
  }

  function renderResources() {
    el("resource-grid").innerHTML = C.resources.groups.map(function (g) {
      return (
        '<div class="resource-group"><h3>' + esc(t(g.title)) + "</h3><ul>" +
          g.items.map(function (it) { return "<li>" + esc(t(it)) + "</li>"; }).join("") +
        "</ul></div>"
      );
    }).join("");
  }

  function renderUpdates() {
    el("update-log").innerHTML = UPDATES.map(function (u) {
      return (
        "<li>" +
          "<div>" +
            '<time class="update-date" datetime="' + esc(u.date) + '">' + esc(formatDate(u.date)) + "</time>" +
            '<span class="update-type">' + esc(u.type) + "</span>" +
          "</div>" +
          "<div><h3>" + esc(t(u.title)) + "</h3><p>" + esc(t(u.body)) + "</p></div>" +
        "</li>"
      );
    }).join("");
  }

  function renderDynamic() {
    renderFeatured();
    renderChapterIndex();
    renderTimeline("timeline-preview", true);
    renderTimeline("timeline-full", false);
    renderPrinciples();
    renderAbout();
    renderContributors();
    renderMethod();
    renderResources();
    renderUpdates();
    route(); // re-render open chapter, if any, in the new language
  }

  /* ---------- Routing ---------- */
  // FIX: Added "privacy" to the VIEWS array so the router recognises #privacy
  var VIEWS = ["home", "about", "timeline", "chapters", "contributors", "method", "resources", "updates", "privacy"];

  function route() {
    var hash = location.hash.replace(/^#\/?/, "") || "home";
    if (hash === "main") return; // skip-link target, not a view — keep browser's default focus jump
    var chapterMatch = hash.match(/^chapter\/([\w-]+)$/);
    var current = chapterMatch ? "chapters" : (VIEWS.indexOf(hash) !== -1 ? hash : "home");

    VIEWS.forEach(function (v) {
      var section = el("view-" + v);
      var active = v === current && !chapterMatch;
      section.classList.toggle("active", active);
    });

    var detail = el("chapter-detail");
    if (chapterMatch) {
      var ch = CHAPTERS.filter(function (c) { return c.id === chapterMatch[1]; })[0];
      if (ch) {
        renderChapterDetail(ch);
        detail.classList.add("active");
      } else {
        detail.classList.remove("active");
        el("view-chapters").classList.add("active");
      }
    } else {
      detail.classList.remove("active");
    }

    // aria-current on nav
    var links = document.querySelectorAll(".site-nav a");
    for (var i = 0; i < links.length; i++) {
      var target = links[i].getAttribute("href").slice(1);
      if (target === current || (chapterMatch && target === "chapters")) {
        links[i].setAttribute("aria-current", "page");
      } else {
        links[i].removeAttribute("aria-current");
      }
    }

    closeMobileNav();
    window.scrollTo(0, 0);
  }

  /* ---------- Mobile nav ---------- */
  function closeMobileNav() {
    el("site-nav").classList.remove("open");
    el("nav-toggle").setAttribute("aria-expanded", "false");
  }

  /* ---------- Wire up ---------- */
  document.addEventListener("DOMContentLoaded", function () {
    el("lang-toggle").addEventListener("click", function () {
      lang = lang === "en" ? "fr" : "en";
      writeStore("ch-lang", lang);
      applyLanguage();
    });

    el("theme-toggle").addEventListener("click", function () {
      theme = theme === "light" ? "dark" : "light";
      writeStore("ch-theme", theme);
      applyTheme();
    });

    el("nav-toggle").addEventListener("click", function () {
      var nav = el("site-nav");
      var open = nav.classList.toggle("open");
      this.setAttribute("aria-expanded", open ? "true" : "false");
    });

    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") closeMobileNav();
    });

    window.addEventListener("hashchange", route);

    document.documentElement.setAttribute("data-theme", theme);
    applyLanguage(); // renders everything, then routes
    el("year").textContent = new Date().getFullYear();
  });
})();
/* ---- i18n ---- */
(function () {
  const DEFAULT_LANG = 'en';
  let currentLang = localStorage.getItem('ch-lang') || DEFAULT_LANG;

  function resolveKey(obj, key) {
    return key.split('.').reduce((acc, part) => {
      return acc && typeof acc === 'object' ? acc[part] : undefined;
    }, obj);
  }

  function applyI18n(lang) {
    currentLang = lang;
    localStorage.setItem('ch-lang', lang);
    document.documentElement.lang = lang;

    const dict = window.I18N[lang] || window.I18N[DEFAULT_LANG];

    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = resolveKey(dict, key);
      if (val !== undefined) {
        el.textContent = val;
      }
    });

    // Also handle aria-label translations
    document.querySelectorAll('[data-i18n-aria-label]').forEach(el => {
      const key = el.getAttribute('data-i18n-aria-label');
      const val = resolveKey(dict, key);
      if (val !== undefined) {
        el.setAttribute('aria-label', val);
      }
    });
  }

  // Language toggle
  const langBtn = document.getElementById('lang-toggle');
  if (langBtn) {
    langBtn.addEventListener('click', () => {
      applyI18n(currentLang === 'en' ? 'fr' : 'en');
    });
  }

  // Apply on load
  applyI18n(currentLang);

  // Expose for other scripts
  window.__i18n = { applyI18n, get current() { return currentLang; } };
})();