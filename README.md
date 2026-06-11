# Vertical Latency

Personal portfolio site for Keith Ort — a Geocities throwback built with [Astro](https://astro.build).

## Stack

- **Astro 6** — static output, single page
- **Vanilla CSS** — neon theme (cyan/magenta/yellow/lime on deep navy), Monoton + VT323 fonts, starfield background
- **Tailwind CSS v4** — available via Vite plugin (design is hand-rolled CSS)

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
