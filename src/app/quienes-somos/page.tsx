import type { Metadata } from "next";
import { CierreWhatsApp } from "@/components/sections/CierreWhatsApp";
import { EspecialidadesGrid } from "@/components/sections/EspecialidadesGrid";
import { PerfilHero } from "@/components/sections/PerfilHero";
import { WhatsAppFloating } from "@/components/whatsapp/WhatsAppFloating";
import { quienesSomos } from "@/content/quienes-somos";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: quienesSomos.seo.title,
  description: quienesSomos.seo.description,
  alternates: { canonical: "/quienes-somos" },
  openGraph: {
    title: quienesSomos.seo.title,
    description: quienesSomos.seo.description,
    url: "/quienes-somos",
    type: "profile",
  },
};

// JSON-LD Person (CLAUDE.md): el titular del estudio, con su formación y el estudio donde trabaja
const personaJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.abogado.nombre,
  jobTitle: "Abogado",
  description: quienesSomos.parrafos[0],
  image: new URL(site.abogado.fotoEstudio.src, site.url).toString(),
  url: new URL("/quienes-somos", site.url).toString(),
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Universidad Nacional de La Plata",
  },
  knowsAbout: quienesSomos.especialidades.map((e) => e.texto),
  worksFor: {
    "@type": "LegalService",
    name: site.nombre,
    url: site.url,
    address: {
      "@type": "PostalAddress",
      addressLocality: "La Plata",
      addressRegion: "Buenos Aires",
      addressCountry: "AR",
    },
  },
};

export default function QuienesSomosPage() {
  return (
    <>
      <PerfilHero
        antetitulo={quienesSomos.antetitulo}
        parrafos={quienesSomos.parrafos}
      />
      <EspecialidadesGrid
        id="especialidades"
        titulo={quienesSomos.especialidadesTitulo}
        items={quienesSomos.especialidades}
      />
      <CierreWhatsApp
        ctaTexto={quienesSomos.ctaTexto}
        mensaje={site.whatsapp.mensajeGenerico}
        area="general"
      />
      <WhatsAppFloating
        mensaje={site.whatsapp.mensajeGenerico}
        area="general"
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personaJsonLd).replace(/</g, "\\u003c"),
        }}
      />
    </>
  );
}
