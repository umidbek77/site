/* K-TECH site behaviour: language, theme, routing, rendering, motion, form. */
(function () {
  "use strict";

  var root = document.documentElement;
  var D = window.KT_DATA, I = window.KT_I18N, IC = window.KT_ICONS;
  var PAGES = ["home", "company", "services", "products", "contact"];
  var LANGS = ["uz", "ru", "en"];
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };

  var store = {
    get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) {} }
  };

  root.classList.add("js");

  /* ================= icons ================= */
  function icon(name, size) {
    size = size || 20;
    return '<svg viewBox="0 0 24 24" width="' + size + '" height="' + size + '" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + IC.line[name] + "</svg>";
  }
  function brand(name, size, mono) {
    var b = IC.brand[name];
    size = size || 20;
    return '<svg viewBox="0 0 24 24" width="' + size + '" height="' + size + '" fill="' + (mono ? "currentColor" : b.c) + '" aria-hidden="true"><path fill-rule="evenodd" d="' + b.p + '"/></svg>';
  }
  var FLAGS = {
    uz: '<svg viewBox="0 0 30 20"><rect width="30" height="20" fill="#1EB53A"/><rect width="30" height="13.6" fill="#CE1126"/><rect width="30" height="13.2" fill="#fff"/><rect width="30" height="6.8" fill="#CE1126"/><rect width="30" height="6.4" fill="#0099B5"/><circle cx="5.6" cy="3.2" r="2" fill="#fff"/><circle cx="6.5" cy="3.2" r="2" fill="#0099B5"/><g fill="#fff"><circle cx="9.4" cy="1.6" r=".42"/><circle cx="11" cy="1.6" r=".42"/><circle cx="12.6" cy="1.6" r=".42"/><circle cx="9.4" cy="3.2" r=".42"/><circle cx="11" cy="3.2" r=".42"/><circle cx="12.6" cy="3.2" r=".42"/><circle cx="11" cy="4.8" r=".42"/><circle cx="12.6" cy="4.8" r=".42"/></g></svg>',
    ru: '<svg viewBox="0 0 30 20"><rect width="30" height="20" fill="#D52B1E"/><rect width="30" height="13.34" fill="#0039A6"/><rect width="30" height="6.67" fill="#fff"/></svg>',
    en: '<svg viewBox="0 0 30 20"><rect width="30" height="20" fill="#012169"/><path d="M0 0l30 20M30 0L0 20" stroke="#fff" stroke-width="4"/><path d="M0 0l30 20M30 0L0 20" stroke="#C8102E" stroke-width="1.6"/><path d="M15 0v20M0 10h30" stroke="#fff" stroke-width="6.6"/><path d="M15 0v20M0 10h30" stroke="#C8102E" stroke-width="4"/></svg>'
  };

  $$("[data-ic]").forEach(function (el) { el.innerHTML = icon(el.dataset.ic, +el.dataset.size || 20); });

  /* ================= language ================= */
  // Uzbek text is authored in the HTML; collect it once so we can switch back.
  $$("[data-i18n]").forEach(function (el) {
    var k = el.getAttribute("data-i18n");
    if (!(k in I.uz)) I.uz[k] = el.textContent;
  });
  $$("[data-i18n-aria]").forEach(function (el) {
    var k = el.getAttribute("data-i18n-aria");
    if (!(k in I.uz)) I.uz[k] = el.getAttribute("aria-label");
  });

  var lang = store.get("kt-lang");
  if (LANGS.indexOf(lang) < 0) lang = "uz";
  var page = "home";

  function t(k) { return (I[lang] && I[lang][k]) || I.uz[k] || ""; }
  function L(o) { return typeof o === "string" ? o : (o[lang] || o.uz); }
  function esc(s) { return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; }); }

  var langBtn = $("#langBtn"), langMenu = $("#langMenu");

  function setLang(l) {
    lang = l;
    store.set("kt-lang", l);
    root.lang = l;
    $$("[data-i18n]").forEach(function (el) { el.textContent = t(el.getAttribute("data-i18n")); });
    $$("[data-i18n-aria]").forEach(function (el) { el.setAttribute("aria-label", t(el.getAttribute("data-i18n-aria"))); });
    $$("[data-i18n-ph]").forEach(function (el) { el.setAttribute("placeholder", t(el.getAttribute("data-i18n-ph"))); });
    $("#langFlag").innerHTML = FLAGS[l];
    langMenu.innerHTML = LANGS.map(function (k) {
      return '<li role="none"><button type="button" role="option" data-lang="' + k + '" aria-selected="' + (k === l) + '"><span class="flag">' + FLAGS[k] + "</span>" + I.langs[k] + "</button></li>";
    }).join("");
    renderAll();
    document.title = I.titles[lang][page];
  }

  function toggleLangMenu(open) {
    langMenu.hidden = !open;
    langBtn.setAttribute("aria-expanded", String(open));
  }
  langBtn.addEventListener("click", function (e) { e.stopPropagation(); toggleLangMenu(langMenu.hidden); });
  langMenu.addEventListener("click", function (e) {
    var b = e.target.closest("button"); if (!b) return;
    toggleLangMenu(false);
    setLang(b.dataset.lang);
    langBtn.focus();
  });
  document.addEventListener("click", function (e) { if (!e.target.closest("#lang")) toggleLangMenu(false); });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape") { toggleLangMenu(false); closeMenu(); } });

  /* ================= theme ================= */
  var mqDark = window.matchMedia("(prefers-color-scheme: dark)");
  function isDark() {
    var a = root.getAttribute("data-theme");
    return a ? a === "dark" : mqDark.matches;
  }
  function syncTheme() { root.classList.toggle("is-dark", isDark()); }
  var savedTheme = store.get("kt-theme");
  if (savedTheme === "dark" || savedTheme === "light") root.setAttribute("data-theme", savedTheme);
  $("#themeBtn").addEventListener("click", function () {
    var next = isDark() ? "light" : "dark";
    root.setAttribute("data-theme", next);
    store.set("kt-theme", next);
  });
  new MutationObserver(syncTheme).observe(root, { attributes: true, attributeFilter: ["data-theme"] });
  if (mqDark.addEventListener) mqDark.addEventListener("change", syncTheme);
  syncTheme();

  /* ================= rendering ================= */
  var filter = "all";
  var team = { q: "", role: "all", page: 1 };

  function li(a) { return "<ul>" + a.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") + "</ul>"; }

  function renderHome() {
    $("#homeServices").innerHTML = D.services.map(function (s) {
      return '<a href="#services"><h3>' + esc(L(s.t)) + "</h3><p>" + esc(L(s.d)) + "</p></a>";
    }).join("");

    $("#homeProducts").innerHTML = D.products.slice(0, D.homeProducts).map(function (p) {
      return '<a class="pc" href="#products"><div class="pc-img"><img src="' + p.img + '" alt="" loading="lazy" width="960" height="540"></div>' +
        '<div class="pc-b"><h3>' + esc(p.n) + "</h3><p>" + esc(L(p.d)) + "</p></div></a>";
    }).join("");

    $("#audience").innerHTML = D.audience.map(function (a) {
      return '<article><div class="aud-img"><img src="' + a.img + '" alt="" loading="lazy" style="object-position:' + a.pos + '"></div>' +
        '<div class="aud-b"><h3>' + esc(L(a.t)) + "</h3><p>" + esc(L(a.d)) + "</p>" + li(L(a.i)) + "</div></article>";
    }).join("");

    $("#process").innerHTML = D.process.map(function (s) {
      return "<li><h3>" + esc(L(s.t)) + "</h3><p>" + esc(L(s.d)) + "</p></li>";
    }).join("");
  }

  function renderServices() {
    $("#servicesFull").innerHTML = D.services.map(function (s) {
      return '<article><span class="ic sv-ic">' + icon(s.ic, 24) + "</span><h2>" + esc(L(s.t)) + "</h2><p>" + esc(L(s.d)) + "</p>" + li(L(s.i)) + "</article>";
    }).join("");
    $("#stack").innerHTML = D.stack.map(function (s) {
      return "<div><dt>" + esc(L(s.k)) + "</dt><dd>" + esc(s.v) + "</dd></div>";
    }).join("");
  }

  function renderProducts() {
    $("#filters").innerHTML = Object.keys(D.platforms).map(function (k) {
      var n = k === "all" ? D.products.length : D.products.filter(function (p) { return p.p.indexOf(k) > -1; }).length;
      return '<button type="button" data-f="' + k + '" aria-pressed="' + (k === filter) + '">' + icon(D.platforms[k].ic, 18) + esc(L(D.platforms[k].t)) + "<em>" + n + "</em></button>";
    }).join("");
    $("#productList").innerHTML = D.products.map(function (p) {
      return '<article class="pl" data-p="' + p.p.join(" ") + '"' + (filter !== "all" && p.p.indexOf(filter) < 0 ? " hidden" : "") + '>' +
        '<div class="pl-img"><img src="' + p.img + '" alt="" loading="lazy" width="960" height="540"></div>' +
        '<div class="pl-b"><h2>' + esc(p.n) + "</h2><p>" + esc(L(p.d)) + "</p>" +
        (p.url ? '<a class="lnk" href="' + p.url + '" target="_blank" rel="noopener">' + esc(t("pr.open")) + "</a>" : "") + "</div></article>";
    }).join("");
  }

  function renderCompany() {
    $("#values").innerHTML = D.values.map(function (v) { return "<div><h3>" + esc(L(v.t)) + "</h3><p>" + esc(L(v.d)) + "</p></div>"; }).join("");
    $("#roles").innerHTML = Object.keys(D.roles).map(function (k) {
      return "<div><h3>" + esc(L(D.roles[k].t)) + "</h3><p>" + esc(L(D.roles[k].d)) + "</p></div>";
    }).join("");
    $("#tmRole").innerHTML = '<option value="all">' + esc(t("tm.all")) + "</option>" + Object.keys(D.roles).map(function (k) {
      return '<option value="' + k + '">' + esc(L(D.roles[k].t)) + "</option>";
    }).join("");
    $("#tmRole").value = team.role;
    $("#req").innerHTML = D.requisites.filter(function (r) { return L(r.v); }).map(function (r) {
      return "<div><dt>" + esc(L(r.k)) + "</dt><dd>" + esc(L(r.v)) + "</dd></div>";
    }).join("");
    renderTeam();
  }

  function norm(s) { return s.toLowerCase().replace(/[‘’ʻ'`]/g, ""); }

  function renderTeam() {
    var q = norm(team.q.trim());
    var list = D.team.filter(function (m) {
      return (team.role === "all" || m.r === team.role) && (!q || norm(m.n).indexOf(q) > -1 || norm(m.nr).indexOf(q) > -1);
    });
    var size = D.teamPageSize, pages = Math.max(1, Math.ceil(list.length / size));
    if (team.page > pages) team.page = pages;
    var from = (team.page - 1) * size, rows = list.slice(from, from + size);

    $("#tmBody").innerHTML = rows.length ? rows.map(function (m) {
      var name = lang === "ru" ? m.nr : m.n;
      var ini = name.split(" ").map(function (w) { return w.charAt(0); }).join("").slice(0, 2);
      return '<div class="tm-row" role="row"><span class="tm-who" role="cell"><span class="tm-av">' +
        (m.photo ? '<img src="' + m.photo + '" alt="" loading="lazy">' : esc(ini)) + "</span><b>" + esc(name) + "</b></span>" +
        '<span class="tm-pos" role="cell">' + esc(L(D.roles[m.r].t)) + "</span>" +
        '<span role="cell"><span class="lvl lvl-' + m.lv.toLowerCase() + '">' + esc(m.lv) + "</span></span>" +
        '<span class="tm-about" role="cell">' + esc(L(m.a)) + "</span></div>";
    }).join("") : '<p class="tm-empty">' + esc(t("tm.empty")) + "</p>";

    $("#tmCount").textContent = list.length ? t("tm.count").replace("{a}", from + 1).replace("{b}", from + rows.length).replace("{n}", list.length) : "";

    var h = '<button type="button" data-pg="' + (team.page - 1) + '" aria-label="' + esc(t("tm.prev")) + '"' + (team.page === 1 ? " disabled" : "") + ">" + icon("chevron-left", 18) + "</button>";
    for (var i = 1; i <= pages; i++) h += '<button type="button" data-pg="' + i + '"' + (i === team.page ? ' aria-current="page"' : "") + ">" + i + "</button>";
    h += '<button type="button" data-pg="' + (team.page + 1) + '" aria-label="' + esc(t("tm.next")) + '"' + (team.page === pages ? " disabled" : "") + ">" + icon("chevron-right", 18) + "</button>";
    $("#tmPages").innerHTML = h;
  }

  function renderShared() {
    var sel = $("#f-type"), cur = sel.selectedIndex;
    sel.innerHTML = D.services.map(function (s) { return "<option>" + esc(L(s.t)) + "</option>"; }).join("") + "<option>" + esc(t("other")) + "</option>";
    if (cur > -1) sel.selectedIndex = cur;

    var names = { linkedin: "LinkedIn", telegram: "Telegram", instagram: "Instagram", youtube: "YouTube" };
    var soc = Object.keys(names).map(function (k) {
      var url = D.social[k], svg = brand(k, 18, true);
      return url ? '<a href="' + url + '" target="_blank" rel="noopener" aria-label="' + names[k] + '" title="' + names[k] + '">' + svg + "</a>"
        : '<span role="img" aria-label="' + names[k] + '" title="' + names[k] + '">' + svg + "</span>";
    }).join("");
    $$("[data-soc]").forEach(function (el) { el.innerHTML = soc; });
  }

  function renderAll() {
    renderHome(); renderServices(); renderProducts(); renderCompany(); renderShared();
    onScroll();
  }

  /* technology strip: language-neutral, rendered once */
  var mq = D.tech.map(function (x) { return "<span>" + brand(x.ic, 22) + x.n + "</span>"; }).join("");
  $("#marq").innerHTML = mq + mq;

  /* ================= products filter, team controls ================= */
  $("#filters").addEventListener("click", function (e) {
    var b = e.target.closest("button"); if (!b) return;
    filter = b.dataset.f;
    $$("#filters button").forEach(function (x) { x.setAttribute("aria-pressed", String(x === b)); });
    $$("#productList .pl").forEach(function (a) {
      a.hidden = filter !== "all" && a.dataset.p.split(" ").indexOf(filter) < 0;
    });
  });
  $("#tmSearch").addEventListener("input", function () { team.q = this.value; team.page = 1; renderTeam(); });
  $("#tmRole").addEventListener("change", function () { team.role = this.value; team.page = 1; renderTeam(); });
  $("#tmPages").addEventListener("click", function (e) {
    var b = e.target.closest("button"); if (!b || b.disabled) return;
    team.page = +b.dataset.pg; renderTeam();
  });

  /* ================= router ================= */
  var nav = $("#nav"), burger = $("#burger");
  function closeMenu() { nav.classList.remove("is-open"); burger.setAttribute("aria-expanded", "false"); }
  burger.addEventListener("click", function () {
    burger.setAttribute("aria-expanded", String(nav.classList.toggle("is-open")));
  });
  nav.addEventListener("click", function (e) { if (e.target.closest("a")) closeMenu(); });

  function route() {
    var h = location.hash.replace("#", "");
    if (h === "main") { $("#main").setAttribute("tabindex", "-1"); $("#main").focus(); return; }
    var next = PAGES.indexOf(h) > -1 ? h : "home";
    var changed = next !== page;
    page = next;
    $$(".page").forEach(function (p) { p.hidden = p.dataset.page !== page; });
    $$("[data-route]").forEach(function (a) {
      var on = a.dataset.route === page;
      a.classList.toggle("is-on", on);
      if (on) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
    });
    document.title = I.titles[lang][page];
    closeMenu();
    if (changed) window.scrollTo(0, 0);
    if (pattern) pattern.toggle(page === "home");
    onScroll();
  }
  window.addEventListener("hashchange", route);
  // A click on the link of the page you are already on goes back to the top.
  document.addEventListener("click", function (e) {
    var a = e.target.closest('a[href^="#"]');
    if (a && a.getAttribute("href") === "#" + page) window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
  });

  /* ================= scroll: header, reveal, parallax, stepper ================= */
  var hdr = $("#hdr"), ticking = false;
  var pars = $$("[data-par]");

  var io = "IntersectionObserver" in window ? new IntersectionObserver(function (es) {
    es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } });
  }, { rootMargin: "0px 0px -8% 0px" }) : null;
  $$(".rv").forEach(function (el) { io ? io.observe(el) : el.classList.add("in"); });

  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () {
      ticking = false;
      var vh = window.innerHeight;
      hdr.classList.toggle("is-stuck", window.scrollY > 8);

      if (!reduce) pars.forEach(function (el) {
        if (!el.offsetParent) return;
        var r = el.parentNode.getBoundingClientRect();
        if (r.bottom < -100 || r.top > vh + 100) return;
        var off = (r.top + r.height / 2 - vh / 2) * parseFloat(el.dataset.par);
        el.style.transform = "translate3d(0," + (-off).toFixed(1) + "px,0)";
      });

      var proc = $("#process");
      if (proc && proc.offsetParent) {
        var pr = proc.getBoundingClientRect();
        proc.style.setProperty("--p", Math.max(0, Math.min(1, (vh * 0.62 - pr.top) / pr.height)).toFixed(3));
        for (var i = 0; i < proc.children.length; i++) {
          proc.children[i].classList.toggle("is-on", proc.children[i].getBoundingClientRect().top < vh * 0.62);
        }
      }
    });
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll);

  /* ================= Khiva star-and-cross tiling, drawn live ================= */
  function Pattern(cv) {
    var ctx = cv.getContext("2d"), w = 0, h = 0, S = 104, stars = [], raf = 0, on = false, seen = false, t0 = 0;
    var mouse = { x: -9999, y: -9999 };
    var LINE = "rgba(255,255,255,.15)", FILLS = ["124,196,255", "74,140,255", "255,255,255"];
    var unit = [], per = 0, k;
    for (k = 0; k < 16; k++) {
      var a = k * Math.PI / 8, r = k % 2 ? 0.7654 : 1;
      unit.push([Math.cos(a) * r, Math.sin(a) * r]);
    }
    for (k = 0; k < 16; k++) {
      var n = unit[(k + 1) % 16];
      per += Math.hypot(n[0] - unit[k][0], n[1] - unit[k][1]);
    }

    function size() {
      var r = cv.getBoundingClientRect(), dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = r.width; h = r.height;
      if (!w || !h) return;
      cv.width = w * dpr; cv.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      S = w < 600 ? 80 : 104;
      stars = [];
      var cols = Math.ceil(w / S) + 1, rows = Math.ceil(h / S) + 1, seed = 11;
      function rnd() { seed = (seed * 16807) % 2147483647; return seed / 2147483647; }
      for (var j = 0; j < rows; j++) for (var i = 0; i < cols; i++) {
        stars.push({ x: w - i * S - S * 0.2, y: j * S + S * 0.35, delay: Math.hypot(i, j) * 80, tone: Math.floor(rnd() * 3), lit: rnd() < 0.3, ph: rnd() * 6.28, sp: 0.5 + rnd() * 0.8, hov: 0 });
      }
      if (reduce) draw(1e9);
    }

    function draw(t) {
      ctx.clearRect(0, 0, w, h);
      ctx.lineWidth = 1;
      var len = per * S / 2, R = S / 2;
      for (var i = 0; i < stars.length; i++) {
        var s = stars[i], p = Math.max(0, Math.min(1, (t - s.delay) / 1100));
        if (p <= 0) continue;
        p = 1 - Math.pow(1 - p, 3);
        var d = Math.hypot(mouse.x - s.x, mouse.y - s.y), target = d < S * 1.6 ? 1 - d / (S * 1.6) : 0;
        s.hov += (target - s.hov) * 0.08;
        var al = (s.lit ? 0.05 + 0.1 * (0.5 + 0.5 * Math.sin(t / 1000 * s.sp + s.ph)) : 0) * p + s.hov * 0.3;
        ctx.beginPath();
        for (var k = 0; k < 16; k++) {
          var px = s.x + unit[k][0] * R, py = s.y + unit[k][1] * R;
          k ? ctx.lineTo(px, py) : ctx.moveTo(px, py);
        }
        ctx.closePath();
        if (al > 0.004) { ctx.fillStyle = "rgba(" + FILLS[s.tone] + "," + al.toFixed(3) + ")"; ctx.fill(); }
        ctx.setLineDash(p < 1 ? [len * p, len] : []);
        ctx.strokeStyle = LINE;
        ctx.stroke();
      }
      ctx.setLineDash([]);
    }

    function loop(now) {
      if (!t0) t0 = now;
      draw(now - t0);
      raf = on ? requestAnimationFrame(loop) : 0;
    }
    function toggle(v) {
      on = v && seen && !document.hidden;
      if (!reduce && on && !raf) raf = requestAnimationFrame(loop);
    }

    window.addEventListener("pointermove", function (e) {
      if (!on) return;
      var r = cv.getBoundingClientRect();
      mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top;
    }, { passive: true });
    window.addEventListener("resize", size);
    document.addEventListener("visibilitychange", function () { toggle(page === "home"); });
    if ("IntersectionObserver" in window) {
      new IntersectionObserver(function (es) { seen = es[0].isIntersecting; if (seen && !w) size(); toggle(page === "home"); }).observe(cv);
    } else { seen = true; }

    size();
    return { toggle: function (v) { if (v) setTimeout(size, 0); toggle(v); } };
  }

  /* ================= toast ================= */
  var toast = $("#toast"), toastTimer = 0;
  function showToast(text, isErr) {
    clearTimeout(toastTimer);
    toast.hidden = true;
    toast.classList.toggle("is-err", !!isErr);
    $("#toastIc").innerHTML = icon(isErr ? "circle-alert" : "circle-check", 22);
    $("#toastText").textContent = text;
    void toast.offsetWidth;            // restart the entrance animation
    toast.hidden = false;
    toastTimer = setTimeout(function () { toast.hidden = true; }, 5500);
  }
  toast.addEventListener("click", function () { toast.hidden = true; });

  /* ================= contact form ================= */
  var form = $("#form"), err = $("#f-err");
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var f = form.elements;
    var ok = f.name.value.trim() && f.tel.value.trim() && f.msg.value.trim();
    err.hidden = !!ok;
    if (!ok) return;

    if (!D.formEndpoint) {
      // No endpoint yet. Never tell a real visitor that a message went out.
      var live = location.hostname === D.productionHost || location.hostname.slice(-D.productionHost.length - 1) === "." + D.productionHost;
      if (live) { showToast(t("f.fail"), true); return; }
      console.info("K-TECH: formEndpoint is empty (js/data.js). Success message shown as a preview; nothing was sent.");
      showToast(t("f.sent"));
      form.reset();
      return;
    }

    var btn = $("#f-submit");
    btn.disabled = true;
    fetch(D.formEndpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: f.name.value, org: f.org.value, contact: f.tel.value, type: f.type.value, message: f.msg.value, lang: lang })
    }).then(function (r) {
      if (!r.ok) throw new Error(r.status);
      showToast(t("f.sent"));
      form.reset();
    }).catch(function () {
      showToast(t("f.fail"), true);
    }).then(function () { btn.disabled = false; });
  });

  /* ================= start ================= */
  $("#year").textContent = new Date().getFullYear();

  var pattern = null;
  setLang(lang);
  pattern = Pattern($("#herCv"));
  route();
})();
