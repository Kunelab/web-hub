/* KuneLab hub: copy for the long-form pages.
   Kept out of hub.js so that file stays about behaviour. Loaded before it and
   merged into its COPY object; see the merge block there.

   Keys ending in nothing special are plain text. Anything containing a tag is
   read with data-i18n-html, which is safe because every string here ships with
   the site and none of it can be influenced by a visitor.

   French is the reference version for the legal pages. Where the two disagree,
   the French text is the one that binds, and that is said on the pages. */
window.HUB_COPY_EXTRA = {
  en: {
    updated: "Last updated 20 September 2026",
    frenchBinds:
      "This is a courtesy translation. The French version is the one that binds.",

    /* ------------------------------- about -------------------------------- */
    aboutTitle: "About KuneLab",
    aboutLede: "One person, a few small programs, and a computer in a cupboard.",
    aboutWhoH: "Who is behind this",
    aboutWho:
      "KuneLab is what Maxime Pinard calls the things he builds outside work. It is not a company, it sells nothing, it carries no advertising and it has no investors to answer to. There is no team: when something breaks, one person fixes it, usually in an evening.",
    aboutWhyH: "Why it exists",
    aboutWhy:
      "Every project here started because the existing answer was annoying. The party games came out of wanting a blind test that friends could play from their own phones without installing anything. The reader came out of wanting to read on a phone without moving your eyes across a line. The remote came out of not wanting to install a companion app on a television.",
    aboutHowH: "How it is run",
    aboutHow:
      "Everything runs on a small Debian machine at home, behind Apache. That is a deliberate choice rather than a shortcut: nothing is measured, nothing is profiled, and there is no third party sitting between you and the games collecting anything on the way past. The cost of that honesty is that the box occasionally goes down, and when it does, it comes back when somebody notices.",
    aboutOpenH: "It is open source",
    aboutOpen:
      'Every project is published on GitHub, licence included. If you want to know exactly what the server does with what you type, the answer is readable rather than promised: <a href="https://github.com/Kunelab" rel="noopener">github.com/Kunelab</a>.',
    aboutContactH: "Getting in touch",
    aboutContact:
      'Bugs, questions, or anything about your data: <a href="mailto:kunelabcontact@duck.com">kunelabcontact@duck.com</a>. It is read by a person, so give it a day or two.',

    /* ---------------------------- legal notice ---------------------------- */
    mentionsTitle: "Legal notice",
    mentionsEditorH: "Publisher",
    mentionsEditor:
      "Maxime Pinard, publishing on a non-professional basis, with no commercial activity and no revenue from these sites. Contact: kunelabcontact@duck.com.",
    mentionsEditorNote:
      "Under article 6 III 2 of the French LCEN, a non-professional publisher may withhold their postal address from the public. Identification details are provided to the competent authorities on a lawful request.",
    mentionsDirectorH: "Publication director",
    mentionsDirector: "Maxime Pinard.",
    mentionsHostH: "Hosting",
    mentionsHost:
      "These sites are self-hosted in France on a private machine operated by the publisher. There is no third-party hosting provider. Requests concerning content should go to the contact address above.",
    mentionsIpH: "Intellectual property",
    mentionsIp:
      'The source code of the KuneLab projects is published on <a href="https://github.com/Kunelab" rel="noopener">GitHub</a>, each under its own licence. Content added by users to Web Games, such as playlists and questions, remains theirs. Music, video and images played through the games come from third-party services and belong to their own rights holders; nothing is hosted here.',
    mentionsLiabilityH: "Liability",
    mentionsLiability:
      "These are hobby projects offered free of charge, with no guarantee of availability, and provided as they are. The publisher cannot be held liable for a service interruption, a loss of data, or the content of pages reached through external links.",
    mentionsLawH: "Applicable law",
    mentionsLaw: "French law applies. The French courts have jurisdiction.",
    mentionsPrivacyLink:
      'Personal data is covered separately, on the <a href="confidentialite.html">privacy page</a>.',

    /* ------------------------------- privacy ------------------------------ */
    privTitle: "Privacy",
    privLede:
      "The short version: accounts and games are kept so the site works. There are no analytics, no advertising, no trackers, and nothing is sold or shared for marketing. Ever.",
    privControllerH: "Who is responsible",
    privController:
      'Maxime Pinard is the data controller. For anything on this page, including exercising your rights: <a href="mailto:kunelabcontact@duck.com">kunelabcontact@duck.com</a>.',
    privWhatH: "What is collected, and why",
    privWhatLede:
      "Only Web Games collects anything. The hub you are reading, MaxReader and MaxKontroller collect nothing at all.",
    privAccountH: "Your account",
    privAccount:
      "Username, email address, and your password stored as an argon2id hash, which means the password itself is never kept and cannot be recovered. Plus the dates the account was created and last used. This exists so you can sign in and so a forgotten password can be reset. Legal basis: performance of the contract, article 6(1)(b).",
    privContentH: "What you create",
    privContent:
      "The questions, media and playlists you build in the library, which are yours and are what the games are played from. Legal basis: performance of the contract.",
    privGamesH: "Games played",
    privGames:
      "Nicknames, scores and per-game statistics from finished games, which is what the history and the leaderboards are made of. Note that a nickname is whatever somebody types at the join screen and is not tied to an account. Legal basis: performance of the contract.",
    privTraceH: "Game recordings",
    privTrace:
      "The server keeps a recording of recent games, including chat messages, so a game that went wrong can be explained afterwards. Only the ten most recent games per game type are kept; older ones are deleted automatically. Legal basis: legitimate interest in fixing the software, article 6(1)(f).",
    privBugH: "Bug reports",
    privBug:
      "If you send a bug report: what you wrote, the page you came from, your browser's user agent, the game code if there was one, and your username if you were signed in. Legal basis: legitimate interest in fixing the software.",
    privLogsH: "Server logs",
    privLogs:
      "Like every web server, this one records IP addresses and requests, which is what makes it possible to notice an attack or debug an outage. Legal basis: legitimate interest in keeping the service running and secure.",
    privThirdH: "Who else sees anything",
    privThirdLede:
      "Nothing is sold, rented or handed over for marketing, by anybody, ever. Three technical exceptions are worth stating plainly:",
    privYoutubeH: "YouTube, for playing music and video",
    privYoutube:
      "The blind test plays clips from YouTube. The player is loaded from youtube-nocookie.com, Google's privacy-enhanced domain, so Google's advertising cookies are not set. Google still receives your IP address and the identifier of the clip, because that is how a video reaches your browser at all. This cannot be avoided while the games play YouTube clips.",
    privLlmH: "The Mafia bots",
    privLlm:
      "When a Mafia game includes computer players, the chat messages and nicknames at that table are sent to a language model so the bots can answer. Depending on how the server is configured that model may run locally, in which case nothing leaves the machine, or it may be a provider such as Groq or Anthropic in the United States, in which case it does. If you would rather nothing you type leaves the server, do not play Mafia with bots.",
    privWikiH: "Wikipedia images",
    privWiki:
      "Pictures from Wikimedia are fetched by the server and passed on to you, rather than loaded by your browser. Wikimedia therefore sees the server's address and never yours. This is the good case, and it is deliberate.",
    privCookiesH: "Cookies",
    privCookies:
      "There is no cookie banner because there is nothing to ask permission for. One cookie is set, named kune.sid, which keeps you signed in and expires after seven days. It is strictly necessary for a service you asked for, which is the exemption that means no consent is required. There is no analytics cookie, no advertising cookie and no third-party tracker.",
    privStorageH: "Browser storage",
    privStorage:
      "Your theme and language choices are kept in your browser's local storage, and the host key for a game you opened is kept for the length of the tab. Neither ever reaches the server, and clearing your browser data removes both.",
    privKeepH: "How long things are kept",
    privKeepAccount: "Account and what you created: until you delete the account.",
    privKeepGames: "Finished games and leaderboards: kept, since they are other players' history too.",
    privKeepTrace: "Game recordings: the ten most recent per game type, then deleted automatically.",
    privKeepSession: "Sign-in sessions: seven days.",
    privKeepReset: "Password reset links: one hour, and single use.",
    privKeepBug: "Bug reports: until the bug is dealt with, then deleted.",
    privRightsH: "Your rights",
    privRightsLede:
      "Under the GDPR you may ask for a copy of your data, correct it, have it deleted, restrict or object to its use, and receive it in a portable form. Write to kunelabcontact@duck.com and it will be handled within one month.",
    privRightsErase:
      "On deletion specifically: your account, your library and your playlists go. Games you hosted are kept but stop naming you, because a finished game is also the history of the four other people who played it.",
    privComplainH: "If you are unhappy",
    privComplain:
      'You can complain to the CNIL, the French data protection authority: <a href="https://www.cnil.fr/fr/plaintes" rel="noopener">cnil.fr/fr/plaintes</a>.',
    privMinorsH: "Children",
    privMinors:
      "This service is not aimed at children under 15. If you believe a child has created an account, write to the contact address and it will be deleted.",
    privChangesH: "Changes",
    privChanges:
      "If this page changes in a way that matters, the date at the top changes with it. There is no mailing list to notify, because there is no mailing list.",

    /* ------------------------------ report a bug -------------------------- */
    bugTitle: "Report a bug",
    bugLede: "Something broken? There are two ways to say so, and both are read.",
    bugFormH: "From inside the games",
    bugForm:
      'The quickest route is the form in Web Games itself, because it attaches the page you were on and the game code without you having to copy anything: <a href="https://games.kunelab.duckdns.org/signaler-un-bug" rel="noopener">games.kunelab.duckdns.org/signaler-un-bug</a>. No account needed.',
    bugGithubH: "On GitHub",
    bugGithub:
      'If you are comfortable there, an issue is the best possible bug report because the conversation stays attached to the fix: <a href="https://github.com/Kunelab/web-games/issues" rel="noopener">github.com/Kunelab/web-games/issues</a>.',
    bugGoodH: "What makes a report useful",
    bugGood1: "What you were doing, in one sentence.",
    bugGood2: "What you expected to happen, and what happened instead.",
    bugGood3: "The game code, if it happened during a game.",
    bugGood4: "Your browser, and whether it was a phone or a computer.",
    bugNoReplyH: "Do not expect an email",
    bugNoReply:
      'Nothing leaves this server by mail yet, so a report filed through the form gets no acknowledgement. It is read. If you want an answer, write to <a href="mailto:kunelabcontact@duck.com">kunelabcontact@duck.com</a> instead.'
  },

  fr: {
    updated: "Dernière mise à jour le 20 septembre 2026",
    frenchBinds: "Version de référence.",

    /* ------------------------------- à propos ----------------------------- */
    aboutTitle: "À propos de KuneLab",
    aboutLede: "Une personne, quelques petits programmes, et un ordinateur dans un placard.",
    aboutWhoH: "Qui est derrière",
    aboutWho:
      "KuneLab, c’est le nom que Maxime Pinard donne à ce qu’il fabrique en dehors du travail. Ce n’est pas une entreprise, rien n’est vendu, il n’y a ni publicité ni investisseurs à satisfaire. Il n’y a pas d’équipe : quand quelque chose casse, une seule personne le répare, en général le soir.",
    aboutWhyH: "Pourquoi ça existe",
    aboutWhy:
      "Chaque projet est né parce que la solution existante était agaçante. Les jeux de soirée viennent de l’envie d’un blind test que des amis puissent jouer depuis leur propre téléphone sans rien installer. Le lecteur vient de l’envie de lire sur un téléphone sans promener les yeux d’un bout à l’autre de la ligne. La télécommande vient du refus d’installer une application compagnon sur une télévision.",
    aboutHowH: "Comment c’est tenu",
    aboutHow:
      "Tout tourne sur une petite machine Debian à la maison, derrière Apache. C’est un choix, pas un raccourci : rien n’est mesuré, rien n’est profilé, et aucun tiers ne s’intercale entre vous et les jeux pour récolter quoi que ce soit au passage. Le prix de cette honnêteté, c’est que la machine tombe parfois, et qu’elle revient quand quelqu’un s’en aperçoit.",
    aboutOpenH: "C’est du logiciel libre",
    aboutOpen:
      'Chaque projet est publié sur GitHub, licence comprise. Pour savoir exactement ce que le serveur fait de ce que vous tapez, la réponse se lit plutôt qu’elle ne se promet : <a href="https://github.com/Kunelab" rel="noopener">github.com/Kunelab</a>.',
    aboutContactH: "Nous écrire",
    aboutContact:
      'Bugs, questions, ou tout ce qui concerne vos données : <a href="mailto:kunelabcontact@duck.com">kunelabcontact@duck.com</a>. C’est une personne qui lit, laissez-lui un jour ou deux.',

    /* --------------------------- mentions légales ------------------------- */
    mentionsTitle: "Mentions légales",
    mentionsEditorH: "Éditeur",
    mentionsEditor:
      "Maxime Pinard, éditant à titre non professionnel, sans activité commerciale et sans aucun revenu tiré de ces sites. Contact : kunelabcontact@duck.com.",
    mentionsEditorNote:
      "Conformément à l’article 6 III 2 de la LCEN, un éditeur non professionnel peut ne pas rendre publique son adresse postale. Les éléments d’identification sont communiqués aux autorités compétentes sur réquisition légale.",
    mentionsDirectorH: "Directeur de la publication",
    mentionsDirector: "Maxime Pinard.",
    mentionsHostH: "Hébergement",
    mentionsHost:
      "Ces sites sont auto-hébergés en France sur une machine privée exploitée par l’éditeur. Il n’y a pas d’hébergeur tiers. Toute demande relative à un contenu est à adresser au contact ci-dessus.",
    mentionsIpH: "Propriété intellectuelle",
    mentionsIp:
      'Le code source des projets KuneLab est publié sur <a href="https://github.com/Kunelab" rel="noopener">GitHub</a>, chacun sous sa propre licence. Les contenus ajoutés par les utilisateurs de Web Games, playlists et questions, restent les leurs. La musique, les vidéos et les images jouées dans les jeux proviennent de services tiers et appartiennent à leurs ayants droit ; rien n’est hébergé ici.',
    mentionsLiabilityH: "Responsabilité",
    mentionsLiability:
      "Il s’agit de projets personnels proposés gratuitement, sans garantie de disponibilité, et fournis en l’état. L’éditeur ne saurait être tenu responsable d’une interruption de service, d’une perte de données, ni du contenu des pages atteintes par des liens externes.",
    mentionsLawH: "Droit applicable",
    mentionsLaw: "Le droit français s’applique. Les tribunaux français sont compétents.",
    mentionsPrivacyLink:
      'Les données personnelles font l’objet d’une page distincte : la <a href="confidentialite.html">politique de confidentialité</a>.',

    /* ------------------------------ confidentialité ----------------------- */
    privTitle: "Confidentialité",
    privLede:
      "En résumé : les comptes et les parties sont conservés pour que le site fonctionne. Il n’y a aucune mesure d’audience, aucune publicité, aucun traceur, et rien n’est vendu ni partagé à des fins marketing. Jamais.",
    privControllerH: "Qui est responsable",
    privController:
      'Maxime Pinard est le responsable de traitement. Pour tout ce qui figure sur cette page, y compris l’exercice de vos droits : <a href="mailto:kunelabcontact@duck.com">kunelabcontact@duck.com</a>.',
    privWhatH: "Ce qui est collecté, et pourquoi",
    privWhatLede:
      "Seul Web Games collecte quelque chose. Le hub que vous lisez, MaxReader et MaxKontroller ne collectent rien du tout.",
    privAccountH: "Votre compte",
    privAccount:
      "Pseudo, adresse email, et votre mot de passe sous forme d’empreinte argon2id, ce qui signifie que le mot de passe lui-même n’est jamais conservé et ne peut pas être retrouvé. Plus les dates de création et de dernière connexion. Tout cela existe pour que vous puissiez vous connecter et réinitialiser un mot de passe oublié. Base légale : exécution du contrat, article 6.1.b.",
    privContentH: "Ce que vous créez",
    privContent:
      "Les questions, médias et playlists que vous construisez dans la bibliothèque, qui vous appartiennent et à partir desquels les parties se jouent. Base légale : exécution du contrat.",
    privGamesH: "Les parties jouées",
    privGames:
      "Pseudos, scores et statistiques des parties terminées, dont sont faits l’historique et les classements. À noter : un pseudo est ce que quelqu’un tape à l’écran d’accueil et n’est rattaché à aucun compte. Base légale : exécution du contrat.",
    privTraceH: "Les enregistrements de parties",
    privTrace:
      "Le serveur conserve un enregistrement des parties récentes, messages de chat compris, afin de pouvoir expliquer après coup une partie qui a mal tourné. Seules les dix parties les plus récentes par jeu sont gardées ; les plus anciennes sont supprimées automatiquement. Base légale : intérêt légitime à corriger le logiciel, article 6.1.f.",
    privBugH: "Les rapports de bug",
    privBug:
      "Si vous envoyez un rapport de bug : ce que vous avez écrit, la page d’où vous veniez, l’identifiant de votre navigateur, le code de partie s’il y en avait un, et votre pseudo si vous étiez connecté. Base légale : intérêt légitime à corriger le logiciel.",
    privLogsH: "Les journaux du serveur",
    privLogs:
      "Comme tout serveur web, celui-ci enregistre les adresses IP et les requêtes, ce qui permet de repérer une attaque ou de comprendre une panne. Base légale : intérêt légitime à maintenir le service en état de marche et sécurisé.",
    privThirdH: "Qui d’autre voit quelque chose",
    privThirdLede:
      "Rien n’est vendu, loué ni transmis à des fins marketing, à personne, jamais. Trois exceptions techniques méritent d’être dites clairement :",
    privYoutubeH: "YouTube, pour la musique et la vidéo",
    privYoutube:
      "Le blind test joue des extraits depuis YouTube. Le lecteur est chargé depuis youtube-nocookie.com, le domaine sans cookies publicitaires de Google, de sorte que ces cookies ne sont pas déposés. Google reçoit tout de même votre adresse IP et l’identifiant de l’extrait, car c’est ainsi qu’une vidéo parvient à votre navigateur. C’est inévitable tant que les jeux lisent des extraits YouTube.",
    privLlmH: "Les bots de Mafia",
    privLlm:
      "Quand une partie de Mafia comporte des joueurs automatiques, les messages de chat et les pseudos de cette table sont envoyés à un modèle de langage pour que les bots puissent répondre. Selon la configuration du serveur, ce modèle tourne localement, et alors rien ne quitte la machine, ou bien il s’agit d’un prestataire comme Groq ou Anthropic aux États-Unis, et alors si. Si vous préférez que rien de ce que vous tapez ne sorte du serveur, ne jouez pas à Mafia avec des bots.",
    privWikiH: "Les images de Wikipédia",
    privWiki:
      "Les images issues de Wikimedia sont récupérées par le serveur puis transmises, plutôt que chargées par votre navigateur. Wikimedia voit donc l’adresse du serveur et jamais la vôtre. C’est le bon cas, et c’est voulu.",
    privCookiesH: "Les cookies",
    privCookies:
      "Il n’y a pas de bandeau cookies parce qu’il n’y a rien à faire accepter. Un seul cookie est déposé, nommé kune.sid, qui vous garde connecté et expire au bout de sept jours. Il est strictement nécessaire à un service que vous avez demandé, ce qui est précisément l’exemption qui dispense de consentement. Aucun cookie de mesure d’audience, aucun cookie publicitaire, aucun traceur tiers.",
    privStorageH: "Le stockage du navigateur",
    privStorage:
      "Vos choix de thème et de langue sont conservés dans le stockage local de votre navigateur, et la clé d’animateur d’une partie que vous avez ouverte le temps de l’onglet. Ni l’un ni l’autre n’atteint le serveur, et vider les données de votre navigateur les efface.",
    privKeepH: "Combien de temps",
    privKeepAccount: "Compte et contenus créés : jusqu’à la suppression du compte.",
    privKeepGames:
      "Parties terminées et classements : conservés, car ils sont aussi l’historique des autres joueurs.",
    privKeepTrace:
      "Enregistrements de parties : les dix plus récents par jeu, puis suppression automatique.",
    privKeepSession: "Sessions de connexion : sept jours.",
    privKeepReset: "Liens de réinitialisation : une heure, et à usage unique.",
    privKeepBug: "Rapports de bug : jusqu’au traitement du bug, puis suppression.",
    privRightsH: "Vos droits",
    privRightsLede:
      "Le RGPD vous permet de demander une copie de vos données, de les corriger, de les faire supprimer, d’en limiter ou d’en refuser l’usage, et de les recevoir dans un format portable. Écrivez à kunelabcontact@duck.com et la demande sera traitée sous un mois.",
    privRightsErase:
      "Sur la suppression en particulier : votre compte, votre bibliothèque et vos playlists disparaissent. Les parties que vous avez animées sont conservées mais cessent de vous nommer, parce qu’une partie terminée est aussi l’histoire des quatre autres personnes qui l’ont jouée.",
    privComplainH: "En cas de désaccord",
    privComplain:
      'Vous pouvez saisir la CNIL, l’autorité française de protection des données : <a href="https://www.cnil.fr/fr/plaintes" rel="noopener">cnil.fr/fr/plaintes</a>.',
    privMinorsH: "Les mineurs",
    privMinors:
      "Ce service ne s’adresse pas aux enfants de moins de 15 ans. Si vous pensez qu’un enfant a créé un compte, écrivez à l’adresse de contact et il sera supprimé.",
    privChangesH: "Modifications",
    privChanges:
      "Si cette page change de façon significative, la date en haut change avec elle. Il n’y a pas de liste de diffusion pour vous prévenir, parce qu’il n’y a pas de liste de diffusion.",

    /* ---------------------------- signaler un bug ------------------------- */
    bugTitle: "Signaler un bug",
    bugLede: "Quelque chose ne marche pas ? Il y a deux façons de le dire, et les deux sont lues.",
    bugFormH: "Depuis les jeux",
    bugForm:
      'Le plus rapide est le formulaire dans Web Games lui-même, parce qu’il joint la page où vous étiez et le code de partie sans que vous ayez à recopier quoi que ce soit : <a href="https://games.kunelab.duckdns.org/signaler-un-bug" rel="noopener">games.kunelab.duckdns.org/signaler-un-bug</a>. Aucun compte nécessaire.',
    bugGithubH: "Sur GitHub",
    bugGithub:
      'Si vous y êtes à l’aise, une issue est le meilleur rapport de bug possible, parce que la discussion reste attachée au correctif : <a href="https://github.com/Kunelab/web-games/issues" rel="noopener">github.com/Kunelab/web-games/issues</a>.',
    bugGoodH: "Ce qui rend un rapport utile",
    bugGood1: "Ce que vous faisiez, en une phrase.",
    bugGood2: "Ce que vous attendiez, et ce qui est arrivé à la place.",
    bugGood3: "Le code de partie, si c’est arrivé pendant une partie.",
    bugGood4: "Votre navigateur, et s’il s’agissait d’un téléphone ou d’un ordinateur.",
    bugNoReplyH: "N’attendez pas d’email",
    bugNoReply:
      'Rien ne part encore de ce serveur par courrier, donc un rapport envoyé via le formulaire ne reçoit pas d’accusé de réception. Il est lu. Si vous voulez une réponse, écrivez plutôt à <a href="mailto:kunelabcontact@duck.com">kunelabcontact@duck.com</a>.'
  }
};
