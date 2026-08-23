# Master Web Créatif — vCard + Landing

Proyecto Astro (despliegue estático en Cloudflare Pages).

## Estructura

- `src/data/site.config.js` — contacto, redes, dominio (editar aquí)
- `src/data/packs.js` — precios y alcance de los 3 packs
- `src/data/i18n/` — diccionarios FR/EN/ES
- `src/styles/global.css` — tokens de color y tipografía (única fuente de verdad)
- `src/components/` — Header, Footer, Button, PackCard, WaveDivider, LanguageSwitch
- `src/layouts/BaseLayout.astro` — head compartido
- `src/pages/` — landing (`index.astro`) y vCard (`sail-g/index.astro`)

## Clonar para un cliente nuevo

1. Copiar el proyecto completo.
2. Editar `site.config.js` y `packs.js` (o eliminar packs si no aplica).
3. Reemplazar `public/logo.png` y ajustar `--color-navy` / `--color-turquoise` en `global.css`.
4. Reescribir copy de `src/pages/`.

## Desarrollo

```bash
npm install
npm run dev
```
# masterwebcreatif
# masterwebcreatif
