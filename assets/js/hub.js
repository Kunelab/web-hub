/* KuneLab hub
   Three jobs: language, theme, and the RSVP headline. No dependencies. */
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

      readerKind: "Android · reading",
      readerThesis: "Read a book one word at a time.",
      readerDesc: "An EPUB reader built on RSVP: words appear one after another in the same spot, so your eyes stop travelling across the line. The optimal recognition point in each word is marked in red, the same trick running in the headline above.",
      readerF1: "50 to 1500 words per minute",
      readerF2: "Pauses that lengthen on punctuation",
      readerF3: "Dark and AMOLED themes, four languages",

      kontrollerKind: "Android · control",
      kontrollerThesis: "Your phone is the keyboard and the mouse.",
      kontrollerDesc: "The phone registers itself as a Bluetooth HID device, so the PC, Mac or TV sees a plain keyboard and mouse. Nothing to install on the other end: no companion app, no driver, no dongle.",
      kontrollerF1: "Trackpad with drag, scroll and double-tap",
      kontrollerF2: "Gyroscope air mouse: tilt to aim",
      kontrollerF3: "Media keys, and your clipboard typed across",
      kontrollerSpec1: "Android 9+ · any BT host",

      specPlatform: "Platform", specPlatform2: "Platform", specPlatform3: "Platform",
      specBuilt: "Built with", specBuilt2: "Built with",
      specStatus: "Status", specLicence: "Licence", specLicence2: "Licence",
      specSize: "Size", noDeps: ", no dependencies",
      viewSource: "View the source", viewSource2: "View the source",
      footNote: "Everything here runs on a Debian box at home, behind Apache. No trackers, no analytics."
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

      readerKind: "Android · lecture",
      readerThesis: "Lire un livre un mot à la fois.",
      readerDesc: "Un lecteur EPUB fondé sur la RSVP : les mots apparaissent l'un après l'autre au même endroit, vos yeux cessent de parcourir la ligne. Le point de reconnaissance optimal de chaque mot est marqué en rouge, le même procédé que dans le titre ci-dessus.",
      readerF1: "De 50 à 1500 mots par minute",
      readerF2: "Des pauses qui s'allongent à la ponctuation",
      readerF3: "Thèmes sombre et AMOLED, quatre langues",

      kontrollerKind: "Android · contrôle",
      kontrollerThesis: "Votre téléphone est le clavier et la souris.",
      kontrollerDesc: "Le téléphone s'enregistre comme périphérique Bluetooth HID : le PC, le Mac ou la TV voit un simple clavier et une souris. Rien à installer en face : ni application, ni pilote, ni dongle.",
      kontrollerF1: "Trackpad avec glisser, défilement et double tape",
      kontrollerF2: "Souris gyroscopique : inclinez pour viser",
      kontrollerF3: "Touches multimédia, et votre presse-papiers tapé à distance",
      kontrollerSpec1: "Android 9+ · tout hôte Bluetooth",

      specPlatform: "Plateforme", specPlatform2: "Plateforme", specPlatform3: "Plateforme",
      specBuilt: "Construit avec", specBuilt2: "Construit avec",
      specStatus: "État", specLicence: "Licence", specLicence2: "Licence",
      specSize: "Taille", noDeps: ", aucune dépendance",
      viewSource: "Voir le code", viewSource2: "Voir le code",
      footNote: "Tout ici tourne sur une machine Debian à la maison, derrière Apache. Aucun traceur, aucune mesure d'audience."
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

  function applyLang(next) {
    lang = next;
    var dict = COPY[next];
    root.setAttribute("lang", next);
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var val = dict[el.getAttribute("data-i18n")];
      if (val) { el.textContent = val; }
    });
    document.querySelectorAll("[data-lang]").forEach(function (btn) {
      btn.setAttribute("aria-pressed", String(btn.getAttribute("data-lang") === next));
    });
    store.set("hub.lang", next);
  }

  document.querySelectorAll("[data-lang]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      applyLang(btn.getAttribute("data-lang"));
      restartRsvp();
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

  /* ---------------- RSVP headline ----------------
     Same mechanic as MaxReader: one word at a time, the optimal recognition
     point pinned to a fixed x-position and tinted. */
  var rsvp = document.querySelector(".rsvp");
  var title = document.querySelector(".hero__title");
  var pre = document.querySelector(".rsvp__pre");
  var orp = document.querySelector(".rsvp__orp");
  var post = document.querySelector(".rsvp__post");
  var timer = null;

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

  function stopRsvp() {
    if (timer) { clearTimeout(timer); timer = null; }
  }

  function finish() {
    rsvp.setAttribute("data-done", "true");
    title.style.opacity = "1";
    title.style.transform = "none";
  }

  function playRsvp() {
    var words = COPY[lang].heroTitle.split(/\s+/);
    var i = 0;
    rsvp.removeAttribute("data-done");
    rsvp.style.display = "grid";
    title.style.opacity = "0";
    title.style.transform = "translateY(6px)";

    (function step() {
      if (i >= words.length) {
        timer = setTimeout(finish, 260);
        return;
      }
      var w = words[i++];
      var k = orpIndex(w);
      pre.textContent = w.slice(0, k);
      orp.textContent = w.charAt(k);
      post.textContent = w.slice(k + 1);
      timer = setTimeout(step, holdFor(w));
    })();
  }

  function restartRsvp() {
    if (!rsvp || reduced.matches) { return; }
    stopRsvp();
    playRsvp();
  }

  var reduced = window.matchMedia("(prefers-reduced-motion: reduce)");

  applyLang(lang);

  if (rsvp && title && !reduced.matches) {
    title.style.transition = "opacity .5s ease, transform .5s ease";
    playRsvp();
  }
})();
