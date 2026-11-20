import { Briefcase, Car, Globe, Laptop, Scale } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { AreaSlug } from "./areas";
import type { Imagen } from "./site";

// Textos de "Quiénes somos" (brief, sección 6 "Quiénes somos / Sobre el titular").
// El Home (bloque del Dr.) lee la bio y las especialidades de acá: un solo lugar para editarlas.
export const quienesSomos = {
  seo: {
    title: "Quiénes somos: Dr. Francisco Valentín Colavita",
    description:
      "Abogado y Licenciado en Comunicación Social (UNLP), al frente del Estudio Jurídico Colavita en La Plata. Derecho civil y comercial, siniestros viales, laboral y ciudadanías.",
  },
  antetitulo: "Liderazgo Jurídico, Estrategia y Compromiso en La Plata",
  parrafos: [
    "Nacido y criado en Ayacucho (Provincia de Buenos Aires), el Dr. Francisco Valentín Colavita se formó en la Universidad Nacional de La Plata (UNLP), donde se graduó como Abogado y Licenciado en Comunicación Social. Actualmente combina el ejercicio libre de la profesión al frente del Estudio Jurídico Colavita.",
    "Más de diez años de trayectoria en comunicación estratégica, medios y entorno digital aplicados a la litigación moderna.",
  ],
  especialidadesTitulo: "Especialista en",
  // slug: la landing del área (si existe); IA y Derecho Digital no tiene página propia.
  // Fotos: las mismas de las bandas del Home (fuentes en docs/creditos-imagenes.md).
  especialidades: [
    {
      texto: "Derecho Civil y Comercial",
      icono: Scale,
      slug: "derecho-civil-y-comercial",
      imagen: {
        src: "/images/areas/derecho-civil-y-comercial.jpg",
        alt: "Martillo de juez de madera junto a un libro sobre un escritorio oscuro",
        width: 1600,
        height: 1067,
      },
    },
    {
      texto: "Siniestros Viales",
      icono: Car,
      slug: "accidentes-de-transito",
      imagen: {
        src: "/images/areas/auto-chocado-ia-oscura.jpg",
        alt: "Auto con el frente dañado tras un choque en la calle",
        width: 1920,
        height: 1072,
      },
    },
    {
      texto: "Derecho Laboral",
      icono: Briefcase,
      slug: "derecho-laboral",
      imagen: {
        src: "/images/areas/derecho-laboral.jpg",
        alt: "Trabajador con casco y protección auditiva en una obra en construcción",
        width: 1600,
        height: 1067,
      },
    },
    {
      texto: "Derecho de Extranjería (Ciudadanías)",
      icono: Globe,
      slug: "ciudadanias-italiana-y-espanola",
      imagen: {
        src: "/images/areas/banderas-italia-espana-ia.jpg",
        alt: "Banderas de España e Italia flameando contra el cielo",
        width: 2048,
        height: 768,
      },
      encuadre: "25% center",
    },
    {
      texto: "Inteligencia Artificial y Derecho Digital",
      icono: Laptop,
      imagen: {
        src: "/images/areas/ia-derecho-digital.jpg",
        alt: "Las letras AI en relieve sobre una placa de circuito",
        width: 1200,
        height: 675,
      },
    },
  ] satisfies {
    texto: string;
    icono: LucideIcon;
    slug?: AreaSlug;
    imagen: Imagen;
    encuadre?: string;
  }[],
  // TODO: el brief no define un CTA para esta página; se usa el del Home
  ctaTexto: "Iniciá el análisis de tu caso hoy mismo",
};
