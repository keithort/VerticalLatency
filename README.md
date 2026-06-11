# Vertical Latency

Personal portfolio site for Keith Ort — a single-page, retro-neon throwback built with [Astro](https://astro.build). Zero JavaScript shipped except the WCAG motion-pause toggle.

## Stack

- **Astro 6** — static output, single page
- **Vanilla CSS** — neon theme (cyan/magenta/yellow/lime on deep navy), Monoton + VT323 fonts, starfield background
- **Tailwind CSS v4** — available via Vite plugin (design is hand-rolled CSS)

## Sections

Hero with animated logo and CSS marquee · About Me · Useless Information (hobbies, favorites, video games) · Work History timeline · Contact · footer with obligatory LED hit counter and Netscape badge.

## Development

```sh
npm install
npm run dev      # dev server at localhost:4321
npm run build    # static build to ./dist
npm run preview  # serve the build
```

## Accessibility

- Motion pause/play toggle (persisted in localStorage)
- `prefers-reduced-motion` disables all animation; marquee falls back to static text
- Visible keyboard focus styles
