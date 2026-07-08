# camerounhistoire.org

A bilingual (English/French), collaboratively authored, open history of Cameroon — from the earliest peopling of the territory to the making of its present regions, departments, and arrondissements. Structurally inspired by open history texts such as *The American Yawp*; editorially centred on Cameroonian voices, sources, and questions.

Static site: plain HTML, CSS, and JavaScript. No build step, no server dependency, relative paths throughout. Open `camerounhistoire.html` directly in a browser, or host the folder as-is under `camerounhistoire.org` (an `index.html` redirect is included).

## Structure

```
C:\cameroon\
├── camerounhistoire.html   Main site (all sections, single page, hash routing)
├── index.html              Redirect to camerounhistoire.html for hosting
├── README.md               This file
├── GOVERNANCE.md           Editorial governance note
├── assets\
│   ├── logo.svg            Custom seal logo (also inlined in the header)
│   └── favicon.svg
├── data\                   ALL editable content lives here (bilingual)
│   ├── content.js          Interface strings + section prose (window.CH_CONTENT)
│   ├── chapters.js         The 12 chapters (window.CH_CHAPTERS)
│   ├── contributors.js     Contributor profiles (window.CH_CONTRIBUTORS)
│   └── updates.js          Revision/update log (window.CH_UPDATES)
├── styles\
│   └── main.css            Design system, light/dark themes, responsive layout
└── scripts\
    └── main.js             i18n rendering, theme, routing, mobile nav
```

## Editing bilingual content

Content is fully separated from layout. Every text field in `data/` is an object with two keys:

```js
title: {
  en: "German Kamerun",
  fr: "Le Kamerun allemand"
}
```

Edit the text, never the key names. The interface re-renders both languages from these objects; nothing in the HTML needs to change. Please write both languages as polished parallel prose — the project treats neither as a translation of the other.

## Adding a chapter

1. Open `data/chapters.js`.
2. Copy an existing chapter object and append it to the `CH_CHAPTERS` array.
3. Give it a unique `id` (used in the URL: `#chapter/<id>`), the next `num`, a `status` (`draft` | `review` | `reviewed` | `revision`), and a `version`.
4. Fill every field in both languages: `period`, `title`, `summary`, `keywords`, `subsections`, `questions`, `keyTerms`, `narrative`, `sidebar`, `pullQuote`, `sources`, `openIssues`, and the `contributor` block.

The chapter automatically appears in the chapter index, the timeline, and the previous/next chapter pager. No HTML or CSS edits are required.

## Adding contributors and updates

Same pattern: copy an object in `data/contributors.js` or `data/updates.js` and edit it. Updates are listed newest-first — prepend new entries.

## Design system

Defined in `styles/main.css` under `:root` (light) and `[data-theme="dark"]`. Palette: archival paper neutrals, deep forest green, river blue, with laterite red and gold used sparingly. Type: Fraunces (display serif) and Newsreader (reading serif) loaded from Google Fonts with system-serif fallbacks — the site remains fully legible offline.

## Accessibility

Skip link, semantic landmarks, single `h1` per view, keyboard-operable navigation and toggles, visible focus states, `aria-current` on active navigation, `prefers-reduced-motion` respected, and WCAG-conscious contrast in both themes. Please preserve these properties when contributing.

## Licence

Text is intended for publication under CC BY-SA unless otherwise noted. See the footer and `GOVERNANCE.md`.
