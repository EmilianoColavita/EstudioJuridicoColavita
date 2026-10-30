import type { LucideIcon } from "lucide-react";
import { Briefcase, Car, Globe, Landmark } from "lucide-react";
import type { Imagen } from "../site";
import { accidentes } from "./accidentes";

export type Item = { titulo: string; texto: string; icono?: LucideIcon };

// Cada landing es una lista de secciones; [area]/page.tsx renderiza el componente según `tipo`.
export type Seccion =
  | {
      tipo: "hero";
      titulo: string;
      subtitulo: string;
      beneficios: Item[];
      ctaTexto: string;
      imagenFondo?: Imagen;
    }
  | {
      tipo: "featureGrid";
      titulo: string;
      emoji?: string;
      items: Item[];
      ctaTexto?: string;
    }
  | {
      tipo: "hook";
      titulo: string;
      emoji?: string;
      intro?: string;
      items: Item[];
    }
  | {
      tipo: "authorityWall";
      titulo: string;
      emoji?: string;
      intro: string;
      items: Item[];
      aseguradoras: string[];
      imagenLogos?: Imagen;
    }
  | {
      tipo: "alert";
      titulo: string;
      emoji?: string;
      intro: string;
      items: Item[];
    }
  | { tipo: "steps"; titulo: string; emoji?: string; pasos: Item[] }
  | {
      tipo: "faq";
      titulo: string;
      emoji?: string;
      items: { pregunta: string; respuesta: string }[];
    }
  | {
      tipo: "otherAreas";
      titulo: string;
      emoji?: string;
      intro: string;
      items: { slug: AreaSlug; titulo: string; texto: string }[];
    }
  | { tipo: "cta"; ctaTexto: string };

export type Area = {
  slug: AreaSlug;
  nombre: string;
  icono: LucideIcon;
  resumenHome: string;
  seo: { title: string; description: string };
  whatsappMensaje: string;
  secciones: Seccion[];
};

// Menú y links entre áreas. Existe aparte del registro porque las otras 3 landings llegan en el paso 4.
export const areasMenu = [
  {
    slug: "accidentes-de-transito",
    nombre: "Accidentes de tránsito",
    icono: Car,
  },
  { slug: "derecho-laboral", nombre: "Derecho laboral", icono: Briefcase },
  {
    slug: "derecho-civil-y-comercial",
    nombre: "Civil y comercial",
    icono: Landmark,
  },
  {
    slug: "ciudadanias-italiana-y-espanola",
    nombre: "Ciudadanías",
    icono: Globe,
  },
] as const;

export type AreaSlug = (typeof areasMenu)[number]["slug"];

// TODO paso 4: sumar laboral, civil y ciudadanías
export const areas: Area[] = [accidentes];

export function getArea(slug: string) {
  return areas.find((a) => a.slug === slug);
}
