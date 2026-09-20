/* KuneLab hub
   Three jobs: language, theme, and the two demos in the entries. No dependencies. */
(function () {
  "use strict";

  /* ---------------- copy ---------------- */
  var COPY = {
    en: {
      skip: "Skip to content",
      navIndex: "Index", navElsewhere: "Elsewhere",
      navGames: "Web Games",
      kindWeb: "Web", kindAndroid: "Android", kindAndroid2: "Android",
      playGames: "Play the games", language: "Language", theme: "Theme",
      heroEyebrow: "Three projects", heroEyebrow2: "all self-hosted",
      heroTitle: "Small things that do one thing properly.",
      heroSub: "A party game you play from the sofa, a reader that feeds you one word at a time, and a phone that pretends to be a keyboard.",

      kuneKind: "Web · party quizzes",
      kuneThesis: "Quiz games for a room full of friends.",
      kuneDesc: "Add songs from a YouTube link, build playlists, then let everyone race to name the track. Each player buzzes in from their own phone, so the only screen that matters is the one already in the room.",
      kuneF1: "Blind test with a live buzzer",
      kuneF2: "Pixel puzzle: an image de-pixelates as they guess",
      kuneF3: "Le Panel (in progress)",
      kuneSpec1: "Any browser", kuneSpec3: "Live, self-hosted", kuneCta: "Play the games",
      sourceFront: "Front", sourceBack: "Back",

      demoPause: "Pause", demoPlay: "Play",
      a11yPauseReader: "Pause the reading demonstration",
      a11yPlayReader: "Play the reading demonstration",
      a11yPausePad: "Pause the remote-control demonstration",
      a11yPlayPad: "Play the remote-control demonstration",

      readerKind: "Android · reading",
      readerThesis: "Read a book one word at a time.",
      readerDesc: "An EPUB reader built on RSVP: words appear one after another in the same spot, so your eyes stop travelling across the line. The optimal recognition point in each word is marked in red. The panel below runs that loop.",
      readerF1: "50 to 1500 words per minute",
      readerF2: "Pauses that lengthen on punctuation",
      readerF3: "Dark and AMOLED themes, four languages",
      demoReaderBar: "RSVP, running",
      demoReaderNote: "The same engine as the app: one word, one fixation point, punctuation held a beat longer.",
      /* What the loop reads. Short on purpose: it has to come round again. */
      readerPassage: "He read the way other people walk: one step, then the next, never the whole road at once. The words came to him one at a time, and they stayed still, and that was enough.",

      kontrollerKind: "Android · control",
      kontrollerThesis: "Your phone is the keyboard and the mouse.",
      kontrollerDesc: "The phone registers itself as a Bluetooth HID device, so the PC, Mac or TV sees a plain keyboard and mouse. Nothing to install on the other end: no companion app, no driver, no dongle.",
      kontrollerF1: "Trackpad with drag, scroll and double-tap",
      kontrollerF2: "Gyroscope air mouse: tilt to aim",
      kontrollerF3: "Media keys, and your clipboard typed across",
      kontrollerSpec1: "Android 9+ · any BT host",
      demoPadBar: "Bluetooth HID",
      demoPadNote: "Nothing runs on the far side: the screen sees a plain Bluetooth mouse and keyboard, and is typed into by one.",
      demoPadHint: "trackpad",
      padAsMouse: "mouse", padAsKeys: "keyboard",
      repMove: "move", repClick: "click", repKey: "key", repEnter: "enter",

      specPlatform: "Platform", specPlatform2: "Platform", specPlatform3: "Platform",
      specBuilt: "Built with", specBuilt2: "Built with",
      specStatus: "Status", specLicence: "Licence", specLicence2: "Licence",
      specSize: "Size", noDeps: ", no dependencies",
      viewSource: "View the source", viewSource2: "View the source",
      footNote: "Everything here runs on a Debian box at home, behind Apache. No trackers, no analytics.",
      backToHub: "KuneLab",
      navAbout: "About", navBug: "Report a bug",
      navPrivacy: "Privacy", navMentions: "Legal notice"
    },
    fr: {
      skip: "Aller au contenu",
      navIndex: "Index", navElsewhere: "Ailleurs",
      navGames: "Jeux web",
      kindWeb: "Web", kindAndroid: "Android", kindAndroid2: "Android",
      playGames: "Jouer aux jeux", language: "Langue", theme: "Thème",
      heroEyebrow: "Trois projets", heroEyebrow2: "tous auto-hébergés",
      heroTitle: "De petites choses qui font bien une seule chose.",
      heroSub: "Un jeu à jouer depuis le canapé, un lecteur qui vous sert un mot à la fois, et un téléphone qui se fait passer pour un clavier.",

      kuneKind: "Web · quiz entre amis",
      kuneThesis: "Des quiz pour toute une pièce d'amis.",
      kuneDesc: "Ajoutez des chansons depuis un lien YouTube, composez des playlists, puis laissez tout le monde se battre pour trouver le titre. Chacun buzze depuis son téléphone : le seul écran qui compte est déjà dans la pièce.",
      kuneF1: "Blind test avec buzzer en direct",
      kuneF2: "Puzzle Pixel : l'image se dépixelise à mesure qu'ils devinent",
      kuneF3: "Le Panel (en cours)",
      kuneSpec1: "N'importe quel navigateur", kuneSpec3: "En ligne, auto-hébergé", kuneCta: "Jouer aux jeux",
      sourceFront: "Front", sourceBack: "Back",

      demoPause: "Pause", demoPlay: "Lecture",
      a11yPauseReader: "Mettre en pause la démonstration de lecture",
      a11yPlayReader: "Lancer la démonstration de lecture",
      a11yPausePad: "Mettre en pause la démonstration de télécommande",
      a11yPlayPad: "Lancer la démonstration de télécommande",

      readerKind: "Android · lecture",
      readerThesis: "Lire un livre un mot à la fois.",
      readerDesc: "Un lecteur EPUB fondé sur la RSVP : les mots apparaissent l'un après l'autre au même endroit, vos yeux cessent de parcourir la ligne. Le point de reconnaissance optimal de chaque mot est marqué en rouge. Le panneau ci-dessous fait tourner cette boucle.",
      readerF1: "De 50 à 1500 mots par minute",
      readerF2: "Des pauses qui s'allongent à la ponctuation",
      readerF3: "Thèmes sombre et AMOLED, quatre langues",
      demoReaderBar: "RSVP, en marche",
      demoReaderNote: "Le moteur de l'application : un mot, un point de fixation, et la ponctuation tenue un temps de plus.",
      readerPassage: "Il lisait comme d'autres marchent : un pas, puis le suivant, jamais toute la route d'un coup. Les mots lui venaient un à un, ils restaient immobiles, et cela suffisait.",

      kontrollerKind: "Android · contrôle",
      kontrollerThesis: "Votre téléphone est le clavier et la souris.",
      kontrollerDesc: "Le téléphone s'enregistre comme périphérique Bluetooth HID : le PC, le Mac ou la TV voit un simple clavier et une souris. Rien à installer en face : ni application, ni pilote, ni dongle.",
      kontrollerF1: "Trackpad avec glisser, défilement et double tape",
      kontrollerF2: "Souris gyroscopique : inclinez pour viser",
      kontrollerF3: "Touches multimédia, et votre presse-papiers tapé à distance",
      kontrollerSpec1: "Android 9+ · tout hôte Bluetooth",
      demoPadBar: "Bluetooth HID",
      demoPadNote: "Rien ne tourne en face : l'écran voit une simple souris Bluetooth et un simple clavier, et c'est l'un d'eux qui écrit.",
      demoPadHint: "pavé tactile",
      padAsMouse: "souris", padAsKeys: "clavier",
      repMove: "dépl.", repClick: "clic", repKey: "touche", repEnter: "entrée",

      specPlatform: "Plateforme", specPlatform2: "Plateforme", specPlatform3: "Plateforme",
      specBuilt: "Construit avec", specBuilt2: "Construit avec",
      specStatus: "État", specLicence: "Licence", specLicence2: "Licence",
      specSize: "Taille", noDeps: ", aucune dépendance",
      viewSource: "Voir le code", viewSource2: "Voir le code",
      footNote: "Tout ici tourne sur une machine Debian à la maison, derrière Apache. Aucun traceur, aucune mesure d'audience.",
      backToHub: "KuneLab",
      navAbout: "À propos", navBug: "Signaler un bug",
      navPrivacy: "Confidentialité", navMentions: "Mentions légales"
    }
  };

  var root = document.documentElement;
  var store = {
    get: function (k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set: function (k, v) { try { localStorage.setItem(k, v); } catch (e) { /* private mode */ } }
  };

  /* ---------------- language ---------------- */
  /* ?lang= and ?theme= win over stored preference, handy for sharing a look */
  var params = new URLSearchParams(location.search);

  var lang = params.get("lang") || store.get("hub.lang");
  if (lang !== "fr" && lang !== "en") {
    lang = (navigator.language || "en").toLowerCase().indexOf("fr") === 0 ? "fr" : "en";
  }

  /* The long-form pages (about, legal, privacy) keep their copy in pages.js so
     this file stays about behaviour. It is loaded before this one and leaves the
     strings here; merged rather than replaced so the rail and footer keep working. */
  if (window.HUB_COPY_EXTRA) {
    ["en", "fr"].forEach(function (code) {
      var extra = window.HUB_COPY_EXTRA[code] || {};
      Object.keys(extra).forEach(function (key) { COPY[code][key] = extra[key]; });
    });
  }

  /* Things that have to be redone when the language changes and that are not a
     plain string swap: the demo toggles, and the passage the reader is reading. */
  var onLang = [];

  function applyLang(next) {
    lang = next;
    var dict = COPY[next];
    root.setAttribute("lang", next);
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var val = dict[el.getAttribute("data-i18n")];
      if (val) { el.textContent = val; }
    });

    /* Copy that contains a link or an <em>. innerHTML is safe here and only
       here: every one of these strings is authored in pages.js and shipped with
       the site. Nothing a visitor can influence ever reaches this. */
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var val = dict[el.getAttribute("data-i18n-html")];
      if (val) { el.innerHTML = val; }
    });
    document.querySelectorAll("[data-lang]").forEach(function (btn) {
      btn.setAttribute("aria-pressed", String(btn.getAttribute("data-lang") === next));
    });
    store.set("hub.lang", next);
    onLang.forEach(function (fn) { fn(); });
  }

  document.querySelectorAll("[data-lang]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      applyLang(btn.getAttribute("data-lang"));
    });
  });

  /* ---------------- theme ---------------- */
  var THEMES = ["console", "paper", "kune", "dusk"];
  var darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

  function markTheme(name) {
    document.querySelectorAll("[data-set-theme]").forEach(function (btn) {
      btn.setAttribute("aria-pressed", String(btn.getAttribute("data-set-theme") === name));
    });
  }

  function systemTheme() { return darkQuery.matches ? "console" : "paper"; }

  var saved = params.get("theme") || store.get("hub.theme");
  if (THEMES.indexOf(saved) !== -1) {
    root.setAttribute("data-hub-theme", saved);
    markTheme(saved);
  } else {
    markTheme(systemTheme());          // follow the OS until a choice is made
    darkQuery.addEventListener("change", function () {
      if (!root.hasAttribute("data-hub-theme")) { markTheme(systemTheme()); }
    });
  }

  document.querySelectorAll("[data-set-theme]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var name = btn.getAttribute("data-set-theme");
      root.setAttribute("data-hub-theme", name);
      store.set("hub.theme", name);
      markTheme(name);
    });
  });

  applyLang(lang);

  /* ---------------- demos ----------------
     Two loops that show instead of telling: the reader reading, and the phone
     driving a screen it is not wired to. Both are decorative, so the moving
     parts are aria-hidden, and both can be stopped: something that moves for
     ever needs a way out (WCAG 2.2.2). Each also stops when it scrolls out of
     view, because a timer four screens away is just a warm battery. */
  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

  /* Under prefers-reduced-motion nothing starts by itself, but the visitor can
     still press play. The transitions these demos need are set from here with
     priority, so that opting in actually overrides the blanket rule in the
     stylesheet rather than snapping through the whole script in a frame. */
  function glideFor(el, ms) {
    el.style.setProperty("transition-duration", ms + "ms", "important");
  }

  /* Freezing where it stands beats snapping home: the visitor asked for a
     pause, not for a rewind. The run always restarts from the top afterwards. */
  function freeze(el) {
    var now = getComputedStyle(el);
    glideFor(el, 0);
    el.style.left = now.left;
    el.style.top = now.top;
  }

  /* A demo runs only when the visitor wants it and it is on screen; either one
     going false stops the timers. */
  function mount(root, impl) {
    if (!root) { return; }
    var toggle = root.querySelector("[data-toggle]");
    var wanted = !reduced.matches;
    var seen = false;
    var running = false;

    function sync() {
      root.setAttribute("data-paused", wanted ? "false" : "true");
      var go = wanted && seen;
      if (go === running) { return; }
      running = go;
      if (go) { impl.start(); } else { impl.stop(); }
    }

    function relabel() {
      var dict = COPY[lang];
      if (toggle) {
        toggle.textContent = wanted ? dict.demoPause : dict.demoPlay;
        toggle.setAttribute("aria-label", dict[(wanted ? "a11yPause" : "a11yPlay") + impl.key]);
      }
      impl.label();
    }

    if (toggle) {
      toggle.addEventListener("click", function () {
        wanted = !wanted;
        relabel();
        sync();
      });
    }

    onLang.push(function () {
      relabel();
      if (running) { impl.stop(); impl.start(); }   // the copy it plays changed
    });

    if (window.IntersectionObserver) {
      new IntersectionObserver(function (entries) {
        seen = entries[0].isIntersecting;
        sync();
      }, { rootMargin: "100px" }).observe(root);
    } else {
      seen = true;
    }

    impl.rest();
    relabel();
    sync();
  }

  /* ---------------- reader: RSVP, on a loop ----------------
     The same mechanic as the app: one word at a time, the optimal recognition
     point pinned to a fixed x-position and tinted. */
  var readerRoot = document.querySelector(".demo--reader");
  if (readerRoot) {
    var rsvp = readerRoot.querySelector(".rsvp");
    var pre = readerRoot.querySelector(".rsvp__pre");
    var orp = readerRoot.querySelector(".rsvp__orp");
    var post = readerRoot.querySelector(".rsvp__post");
    var fill = readerRoot.querySelector(".rsvp__fill");
    var wpmOut = readerRoot.querySelector("[data-wpm]");
    var rsvpTimer = null;
    var words = [];
    var at = 0;

    function orpIndex(word) {
      var n = word.length;
      if (n <= 1) { return 0; }
      if (n <= 5) { return 1; }
      if (n <= 9) { return 2; }
      return 3;
    }

    function holdFor(word) {
      var ms = 150 + word.length * 16;
      if (/[,;:]$/.test(word)) { ms += 130; }
      if (/[.!?]$/.test(word)) { ms += 260; }
      return ms;
    }

    function passage() { return COPY[lang].readerPassage.split(/\s+/); }

    /* The speed on the bar is measured, not decided: the same timing function
       drives the display, so the number cannot drift away from what you see. */
    function paintWpm(list) {
      if (!wpmOut) { return; }
      var total = 0;
      list.forEach(function (w) { total += holdFor(w); });
      wpmOut.textContent = Math.round(list.length / (total / 60000) / 10) * 10 + " wpm";
    }

    function show(word) {
      var k = orpIndex(word);
      pre.textContent = word.slice(0, k);
      orp.textContent = word.charAt(k);
      post.textContent = word.slice(k + 1);
    }

    function rsvpStep() {
      if (at >= words.length) {
        at = 0;
        pre.textContent = orp.textContent = post.textContent = "";
        fill.style.width = "0%";
        rsvpTimer = setTimeout(rsvpStep, 850);    // a breath between passes
        return;
      }
      var w = words[at++];
      show(w);
      fill.style.width = (at / words.length) * 100 + "%";
      rsvpTimer = setTimeout(rsvpStep, holdFor(w));
    }

    mount(readerRoot, {
      key: "Reader",
      start: function () {
        words = passage();
        at = 0;
        paintWpm(words);
        rsvpStep();
      },
      stop: function () {
        if (rsvpTimer) { clearTimeout(rsvpTimer); rsvpTimer = null; }
      },
      /* Still frame: the first word, sitting on its guide. */
      rest: function () {
        var list = passage();
        paintWpm(list);
        show(list[0]);
        fill.style.width = "0%";
      },
      label: function () {}
    });
  }

  /* ---------------- kontroller: phone drives a screen ----------------
     One scenario, on a loop: drag the pointer to the search field, tap to
     focus it, then the pad becomes a keyboard and types into a screen that has
     nothing of ours installed on it. The pad is a trackpad, so the pointer
     only follows while a finger is down. */
  var padRoot = document.querySelector(".demo--pad");
  if (padRoot) {
    var face = {
      pad: padRoot.querySelector('[data-face="pad"]'),
      keys: padRoot.querySelector('[data-face="keys"]')
    };
    var touch = padRoot.querySelector(".pad__touch");
    var ripple = padRoot.querySelector(".pad__ripple");
    var cursor = padRoot.querySelector(".pad__cursor");
    var search = padRoot.querySelector(".pad__search");
    var queryOut = padRoot.querySelector(".pad__query");
    var hits = padRoot.querySelector(".pad__hits");
    var hidOut = padRoot.querySelector("[data-hid]");
    var modeOut = padRoot.querySelector("[data-mode]");
    var padTimers = [];
    var typed = "";
    var QUERY = "kunelab";

    function later(fn, ms) { padTimers.push(setTimeout(fn, ms)); }
    function clearTimers() {
      padTimers.forEach(clearTimeout);
      padTimers = [];
    }

    function put(el, x, y) { el.style.left = x + "%"; el.style.top = y + "%"; }
    function report(kind) { if (hidOut) { hidOut.textContent = kind; } }

    function showFace(which) {
      var keys = which === "keys";
      face.pad.setAttribute("data-live", "true");   // it stays, it only dims
      face.pad.setAttribute("data-dim", String(keys));
      face.keys.setAttribute("data-live", String(keys));
      if (modeOut) {
        modeOut.textContent = which === "pad" ? COPY[lang].padAsMouse : COPY[lang].padAsKeys;
      }
    }

    function press(ch) {
      var key = face.keys.querySelector('[data-k="' + ch + '"]');
      if (!key) { return; }
      key.setAttribute("data-hit", "true");
      later(function () { key.removeAttribute("data-hit"); }, 110);
    }

    function restPad() {
      clearTimers();
      typed = "";
      if (queryOut) { queryOut.textContent = ""; }
      if (search) { search.setAttribute("data-focus", "false"); }
      if (hits) { hits.setAttribute("data-on", "false"); }
      face.keys.querySelectorAll("[data-hit]").forEach(function (k) {
        k.removeAttribute("data-hit");
      });
      ripple.removeAttribute("data-tap");
      touch.removeAttribute("data-on");
      glideFor(touch, 0);
      glideFor(cursor, 0);
      put(touch, 62, 72);
      put(cursor, 58, 74);
      showFace("pad");
      report("");
    }

    /* The run, as a list of moments. Each entry does something and says how
       long the demo waits before the next one. */
    function beats() {
      var dict = COPY[lang];
      return [
        { run: restPad, wait: 700 },
        { run: function () {                      // a finger lands on the pad
            touch.setAttribute("data-on", "true");
          }, wait: 380 },
        { run: function () {                      // drag: the pointer follows
            report(dict.repMove);
            glideFor(touch, 1000);
            glideFor(cursor, 1000);
            put(touch, 30, 26);
            put(cursor, 24, 9);
          }, wait: 1150 },
        { run: function () {                      // tap: the field takes focus
            report(dict.repClick);
            ripple.style.left = touch.style.left;
            ripple.style.top = touch.style.top;
            ripple.setAttribute("data-tap", "true");
            later(function () { ripple.removeAttribute("data-tap"); }, 460);
            if (search) { search.setAttribute("data-focus", "true"); }
          }, wait: 480 },
        { run: function () {                      // finger up
            touch.removeAttribute("data-on");
          }, wait: 260 },
        { run: function () {                      // the pad becomes a keyboard
            showFace("keys");
          }, wait: 460 }
      ]
        .concat(QUERY.split("").map(function (ch) {
          return {
            run: function () {
              press(ch);
              typed += ch;
              if (queryOut) { queryOut.textContent = typed; }
              report(dict.repKey + " " + ch);
            },
            wait: 165
          };
        }))
        .concat([
          { run: function () {
              press("enter");
              report(dict.repEnter);
            }, wait: 280 },
          { run: function () {
              if (hits) { hits.setAttribute("data-on", "true"); }
              report("");
            }, wait: 1700 },
          { run: function () { showFace("pad"); }, wait: 600 }
        ]);
    }

    var padRunning = false;

    function padLoop() {
      var script = beats();
      var i = 0;
      (function next() {
        if (!padRunning) { return; }
        if (i >= script.length) { i = 0; }
        var beat = script[i++];
        beat.run();
        later(next, beat.wait);
      })();
    }

    mount(padRoot, {
      key: "Pad",
      start: function () { padRunning = true; padLoop(); },
      stop: function () {
        padRunning = false;
        clearTimers();
        freeze(touch);
        freeze(cursor);
      },
      rest: restPad,
      /* The bar says what the host currently thinks it is talking to. */
      label: function () {
        if (!modeOut) { return; }
        var keys = face.keys.getAttribute("data-live") === "true";
        modeOut.textContent = keys ? COPY[lang].padAsKeys : COPY[lang].padAsMouse;
      }
    });
  }
})();
