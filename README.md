# Estudio Jurídico Colavita — Sitio web

Sitio de [colavitaestudiojuridico.com](https://colavitaestudiojuridico.com): Next.js 16 (App Router) + TypeScript + Tailwind CSS v4, todo generado estático.

- Contexto, arquitectura y plan de trabajo: [`CLAUDE.md`](CLAUDE.md)
- Textos definitivos del cliente: [`docs/brief-cliente.md`](docs/brief-cliente.md)

## Requisitos

- **Node.js 20.9 o superior** (recomendado 22, ver `.nvmrc`). Descarga: <https://nodejs.org>
- **pnpm 12** (la versión exacta está fijada en `package.json` → `packageManager`).
- Git.

Para instalar pnpm, cualquiera de estas dos:

```bash
npm install -g pnpm@12.16.1
# o, si corepack tiene permisos (en Windows suele requerir terminal como administrador):
corepack enable
```

## Primer arranque en una PC nueva

```bash
git clone https://github.com/EmilianoColavita/EstudioJuridicoColavita.git
cd EstudioJuridicoColavita
pnpm install
pnpm dev
```

Abrir <http://localhost:3000/accidentes-de-transito>

> `pnpm install` compila `sharp` (optimización de imágenes); el permiso ya está dado en `pnpm-workspace.yaml`, no hace falta aprobar nada.

## Scripts

| Comando             | Qué hace                                     |
| ------------------- | -------------------------------------------- |
| `pnpm dev`          | Servidor de desarrollo en el puerto 3000     |
| `pnpm build`        | Build de producción (`output: "standalone"`) |
| `pnpm start`        | Sirve el build de producción                 |
| `pnpm lint`         | ESLint                                       |
| `pnpm format`       | Formatea todo con Prettier                   |
| `pnpm format:check` | Verifica el formato sin modificar            |

Antes de dar un cambio por terminado: `pnpm lint` y `pnpm build` sin errores, y revisar la página a 375px de ancho.

## Dónde está cada cosa

- `src/content/site.ts`: datos del estudio (WhatsApp, dirección, reseñas…). Los `TODO` son placeholders pendientes.
- `src/content/areas/`: una landing por archivo; la página `[area]` las arma a partir de sus `secciones`.
- `src/components/`: layout, UI base, WhatsApp, confianza y secciones.
- `public/images/`: imágenes optimizadas. Los originales (HEIC, logo en 2000px) **no** se suben al repo: están en el Drive.

## Variables de entorno

Por ahora no hay ninguna. Cuando se sume GTM (paso 8) se documentarán acá y en un `.env.example`.
