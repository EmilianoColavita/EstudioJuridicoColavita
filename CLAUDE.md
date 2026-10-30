# Estudio Jurídico Colavita — Sitio web

Rediseño del sitio de **colavitaestudiojuridico.com** (Dr. Francisco Valentín Colavita, abogado en La Plata, T° 68 F° 135 CALP).
Desarrollador: Emiliano (experiencia en React/Next.js y Java). Idioma del proyecto: **español rioplatense** (voseo: "Hablá", "Reclamá"), tanto en la UI como en los commits y comentarios.

El brief completo del cliente, con **todos los textos definitivos** y las notas de diseño sección por sección, está en `docs/brief-cliente.md`. **Es la fuente de verdad del contenido:** los textos se copian de ahí y no se inventan ni se reescriben. Si algo falta o es ambiguo, se deja un `TODO` y se pregunta.

## Por qué se rehace

- El sitio actual es una exportación de un constructor visual que renderiza todo con JavaScript del lado del cliente. El HTML que recibe Google está vacío (sin texto, sin meta description, sin headings), y por eso **no aparece en el buscador**.
- El cliente quiere un diseño moderno y va a correr **campañas de Google Ads**: cada área de práctica tiene una landing propia, y el tráfico orgánico entra por el Home.
- Prioridades, en orden: **1) que Google lo indexe bien (HTML estático real), 2) que convierta (clics a WhatsApp), 3) que se vea sobrio y profesional, 4) que cargue rápido en celular.**

## Stack

- **Next.js (última estable, App Router) + TypeScript + Tailwind CSS v4.** No hay backend: todas las páginas se generan estáticas (SSG).
- El único canal de contacto es **WhatsApp** (links `wa.me` con mensaje predeterminado). No hay formulario.
- **Fuentes** con `next/font/google`: **Playfair Display** para títulos e **Inter** para el cuerpo.
- **Íconos:** `lucide-react`, con trazo fino, en dorado o azul marino.
- **Artículos y publicaciones:** MDX dentro del repo (`@next/mdx` o `next-mdx-remote`). Está pendiente decidir si más adelante se suma un CMS para que el cliente publique solo. Diseñar la carga de contenido para que ese cambio sea fácil, detrás de una función tipo `getPosts()`.
- **Deploy:** VPS propio con **Dokploy**, usando `output: "standalone"` y un Dockerfile. No usar Vercel Hobby, porque es un sitio comercial.
- **Medición:** Google Tag Manager, con GA4 y la conversión de Google Ads dentro de GTM. El código solo hace `dataLayer.push`.
- **Gestor de paquetes:** pnpm (o npm, según lo que use Emiliano; preguntar si no hay lockfile).

## Identidad visual (del brief)

| Token | Hex | Uso |
|---|---|---|
| `navy` | `#1A1D2E` | Encabezados, header, footer, fondos oscuros del hero |
| `gold` | `#C5A059` | Detalles, líneas divisorias, íconos, estrellas |
| `cream` | `#F9F8F5` | Fondo principal |
| `pearl` | `#F1EFEA` | Fondo de secciones alternadas y cajas destacadas |
| `whatsapp` | `#25D366` | **Solo** en botones CTA de WhatsApp |
| `alert` | rojo oscuro y tenue (definir, ej. `#8B2E2E` y fondo `#FBF1F0`) | Solo en el bloque "No firmes nada" |

- Estilo sobrio y elegante: mucho espacio en blanco, sin colores estridentes, sin sombras pesadas. Separadores con líneas finas doradas.
- Tarjetas con ícono minimalista. Los títulos de sección pueden llevar un emoji, como indica el brief.
- **Mobile-first.** La mayoría del tráfico de Ads llega desde el celular.
- Definir los colores como tokens de Tailwind v4 (`@theme` en `globals.css`) y nunca usar hex sueltos en los componentes.

## Mapa del sitio

```
/                                  Home: bienvenida, 4 tarjetas de áreas de IGUAL tamaño, bloque del Dr. Colavita, Instagram, últimas publicaciones
/accidentes-de-transito            Landing Ads (la más completa)
/derecho-laboral                   Landing Ads
/derecho-civil-y-comercial         Landing Ads
/ciudadanias-italiana-y-espanola   Landing Ads
/quienes-somos                     Bio del Dr. Colavita
/publicaciones                     Listado de artículos y jurisprudencia
/publicaciones/[slug]              Artículo (el primero es el caso "Violación a la Intimidad por WhatsApp")
/publicaciones/farandulitica       Libro: portada + descarga o lectura del PDF
```

## Arquitectura

Las 4 landings comparten una plantilla. Cada una es **datos + una lista de secciones**, no una página escrita a mano.

```
src/
  app/
    layout.tsx                  fuentes, Header, Footer, WhatsApp flotante, GTM
    page.tsx                    Home
    [area]/page.tsx             generateStaticParams sobre las 4 áreas, dynamicParams = false
    quienes-somos/page.tsx
    publicaciones/page.tsx
    publicaciones/[slug]/page.tsx
    sitemap.ts  robots.ts
  content/
    site.ts                     datos del estudio: teléfono WA, dirección, horario, email, Maps, Instagram, matrícula, rating de Google
    areas/
      index.ts                  registro de áreas y tipos
      accidentes.ts  laboral.ts  civil.ts  ciudadanias.ts
    publicaciones/*.mdx
  components/
    layout/      Header, Footer, MobileNav
    ui/          Button, Card, Container, SectionTitle, GoldDivider
    whatsapp/    WhatsAppButton (inline), WhatsAppFloating
    trust/       GoogleReviewsBadge, LawyerCard
    sections/    Hero, BenefitList, FeatureGrid, HookBox, AuthorityWall, AlertBox,
                 StepsGuide, FaqAccordion, OtherAreas, CtaBanner, InstagramFeed
  lib/
    whatsapp.ts                 buildWhatsAppUrl(message) + trackWhatsAppClick(area, ubicacion)
    seo.ts                      helpers de metadata y JSON-LD
```

**Modelo de un área** (orientativo):

```ts
type Area = {
  slug: string;
  nombre: string;
  icono: LucideIcon;
  resumenHome: string;            // texto de la tarjeta del Home
  seo: { title: string; description: string };
  whatsappMensaje: string;        // mensaje predeterminado, textual del brief
  secciones: Seccion[];           // unión discriminada: { tipo: "hero", ... } | { tipo: "faq", items } | ...
};
```

La página `[area]` recorre `secciones` y renderiza el componente que corresponde. Accidentes suma `authorityWall`, `alert` y `steps`. Las demás áreas usan hero, hook, featureGrid y faq.

## Requisitos funcionales

**WhatsApp**
- `lib/whatsapp.ts` arma `https://wa.me/<numero>?text=<encodeURIComponent(mensaje)>`. El número sale de `content/site.ts`.
- Cada área tiene su mensaje predeterminado, textual del brief. El Home usa un mensaje genérico.
- En el celular hay un botón flotante fijo (abajo a la derecha). En escritorio, el CTA es visible en el hero.
- **Cada clic** hace `window.dataLayer?.push({ event: "whatsapp_click", area, ubicacion })`, donde `ubicacion` es `hero`, `flotante`, `cierre`, etc. Esto es crítico, porque es la conversión de Google Ads.

**Hero de cada landing (above the fold, en este orden):** título (H1), subtítulo, bullets de beneficios, CTA de WhatsApp, **badge de Google** justo debajo y foto del Dr. Colavita. El fondo es una imagen atenuada (en Home y Accidentes, referencia a La Plata) con overlay navy.

**GoogleReviewsBadge:** una píldora blanca con la "G" de Google, 5 estrellas doradas y el texto. El puntaje y la cantidad de reseñas se leen de `site.ts` (se cargan a mano con los valores **reales**, nunca inventados) y la píldora enlaza al perfil de Google Maps.

**FAQ:** un acordeón accesible (`<details>/<summary>` o un botón con `aria-expanded`) que funcione sin JS. Genera JSON-LD `FAQPage`.

**Instagram:** al principio, un placeholder o embeds de posts elegidos, con carga diferida. Nada que bloquee el render.

**Libro:** el PDF se sirve desde `/public/docs/`, con su portada y un botón "Descargar / Leer".

## SEO (obligatorio en cada página)

- `export const metadata` o `generateMetadata`: title único, description, canonical, Open Graph y `lang="es-AR"`.
- **Un solo H1 por página** y jerarquía correcta de H2 y H3. El brief usa "#" de forma inconsistente: no copiar su jerarquía de markdown, sino respetar la semántica.
- JSON-LD:
  - `LegalService` (con dirección, teléfono, horario, `areaServed` y `geo` de La Plata) en el layout.
  - `Person`/`Attorney` en Quiénes somos.
  - `FAQPage` en cada landing.
  - `Article` en las publicaciones.
  - No marcar reseñas propias con `AggregateRating`, porque Google no lo admite para LocalBusiness y puede penalizar.
- `sitemap.ts` y `robots.ts`.
- Imágenes con `next/image` y `alt` descriptivo. La del hero, con `priority`.
- Objetivo: **Lighthouse ≥ 95** en Performance, SEO y Accessibility (mobile).

## Pendientes y cuidados del contenido

- Los datos reales (número de WhatsApp, dirección, horario, rating, links, fotos, logo SVG, PDF) los tiene Emiliano en un Drive. Hasta tenerlos, se usan **placeholders marcados con `TODO`** en `content/site.ts` y en `/public`, nunca datos inventados que parezcan reales.
- Confirmar con el cliente estos errores de tipeo del brief: "despidos **incautados**" (probablemente "injustificados") y "presupuesto **etapabilizado**". Mientras tanto, dejar el texto original con un `TODO`.
- **Logos de aseguradoras** (muro de autoridad): son marcas de terceros y está pendiente que el cliente lo confirme. Construir el componente para que acepte logos o nombres en texto.
- **Foto de la Catedral de La Plata:** tiene que ser propia o con licencia libre (Unsplash o Wikimedia CC). Registrar la fuente en `docs/creditos-imagenes.md`.

## Plan de trabajo (paso a paso)

1. **Setup:** `create-next-app` (TS, App Router, Tailwind, ESLint, `src/`), Prettier, tokens de color y fuentes, `next.config` con `output: "standalone"`.
2. **Base:** Container, Button, SectionTitle, GoldDivider, Header (logo, navegación con las 4 áreas y Quiénes somos/Publicaciones, menú móvil), Footer (navy, datos, matrícula, redes), WhatsAppFloating y `content/site.ts` con placeholders.
3. **Landing de Accidentes completa** (el mockup principal), con los 7 bloques del brief en orden: Hero, especialidades (6 tarjetas), gancho "Si vos no cobrás…", muro de autoridad, alerta "No firmes nada", guía de 3 pasos, FAQ, otras áreas y CTA de cierre. **Revisar con Emiliano antes de seguir.**
4. Las otras 3 landings, que pasan a ser solo archivos de contenido.
5. **Home** con 4 tarjetas de igual peso, bloque del Dr. Colavita, Instagram y últimas publicaciones.
6. Quiénes somos, Publicaciones (MDX), el artículo del caso WhatsApp y la página del libro.
7. SEO técnico: metadata, JSON-LD, sitemap, robots y OG images.
8. GTM y el evento `whatsapp_click`.
9. Dockerfile y deploy en Dokploy, más una checklist de lanzamiento (DNS, HTTPS, Search Console, sitemap, redirects 301 si cambian URLs).

## Convenciones

- Componentes en PascalCase, una carpeta por dominio, Server Components por defecto. Usar `"use client"` solo donde haga falta (menú móvil y tracking de clics).
- Nada de textos hardcodeados en los componentes de sección: todo el contenido vive en `src/content/`.
- Accesibilidad: buen contraste (ojo con el dorado sobre crema en texto chico), foco visible, `aria-label` en los botones solo-ícono.
- Antes de dar un paso por terminado: `pnpm lint`, `pnpm build` sin errores y revisar la página en el ancho de un celular (375px).
- Commits chicos y descriptivos, en español.
