import { defineConfig } from 'astro/config';

// Configuración pensada para despliegue estático en Cloudflare Pages.
// output: 'static' porque no necesitamos servidor (formulario de contacto
// se gestiona vía servicio externo tipo Formspree/Web3Forms — ver Paso 6).
export default defineConfig({
  site: 'https://studiocreativosg.com',
  output: 'static',
  compressHTML: true,
  build: {
    inlineStylesheets: 'always',
  },
});
