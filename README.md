# KuneLabHub

The landing page that sits in front of everything: an index of the KuneLab projects, namely
Web Games, KuneLab Reader and KuneLab Kontroller. No framework, no build step, no dependencies. Apache
serves the folder as-is.

```
index.html
assets/css/hub.css     all styling + the four theme palettes
assets/js/hub.js       language, theme, the reader and kontroller demos
assets/fonts/*.woff2   Archivo + IBM Plex Sans/Mono, self-hosted (216 KB)
```

## Themes

Four palettes are defined as token blocks at the top of `hub.css` and applied with
`data-hub-theme` on `<html>`:

| name      | direction                                                 |
|-----------|-----------------------------------------------------------|
| `console` | dark, cyan-biased neutrals, one accent per project         |
| `paper`   | light, cool grey, the same accents darkened for contrast   |
| `kune`    | black + `#F47521`, continuous with the Web Games app       |
| `dusk`    | warm plum dark, softened accents                           |

With no choice stored the page follows the visitor's OS setting: `paper` in light,
`console` in dark. A pick is remembered in `localStorage`.

Once you settle on one, delete the other three token blocks and the `.themes` block in the
rail; nothing else references them.

## Language

Every translatable string carries `data-i18n="key"`, and both dictionaries live in the
`COPY` object at the top of `hub.js`. To edit copy, edit that object, not the HTML.
Default language follows the browser, then `localStorage`.

## Query parameters

`?theme=console|paper|kune|dusk` and `?lang=en|fr` override the stored preference, so you
can link someone straight to a specific look.

## Adding a project

Copy an `<article class="entry">` block, give it a new modifier class, add the accent to
each theme block, and add the strings to both dictionaries.

## Local preview

```sh
python3 -m http.server 8899     # or any static server
```

Opening `index.html` via `file://` works too, apart from the fonts.
