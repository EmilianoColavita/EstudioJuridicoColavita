import { Briefcase, Car, Globe, Laptop, Scale } from "lucide-react";
import type { AreaSlug } from "./areas";
import type { Imagen } from "./site";

// Textos del Home.
// - Hero: versión abreviada del brief, acordada con Emiliano.
// - Servicios: textos del mockup de tarjetas que pasó Emiliano (reemplazan a los del brief).
// - Dr. Colavita: textual del brief, sección 6 "Quiénes somos / Sobre el titular".
export const home = {
  drColavita: {
    antetitulo: "Liderazgo Jurídico, Estrategia y Compromiso en La Plata",
    parrafos: [
      "Nacido y criado en Ayacucho (Provincia de Buenos Aires), el Dr. Francisco Valentín Colavita se formó en la Universidad Nacional de La Plata (UNLP), donde se graduó como Abogado y Licenciado en Comunicación Social. Actualmente combina el ejercicio libre de la profesión al frente del Estudio Jurídico Colavita.",
      "Más de diez años de trayectoria en comunicación estratégica, medios y entorno digital aplicados a la litigación moderna.",
    ],
    especialidadesTitulo: "Especialista en",
    especialidades: [
      { texto: "Derecho Civil y Comercial", icono: Scale },
      { texto: "Siniestros Viales", icono: Car },
      { texto: "Derecho Laboral", icono: Briefcase },
      { texto: "Derecho de Extranjería (Ciudadanías)", icono: Globe },
      { texto: "Inteligencia Artificial y Derecho Digital", icono: Laptop },
    ],
    ctaTexto: "Conocé más sobre el Dr. Colavita",
    ctaHref: "/quienes-somos",
  },

  hero: {
    texto:
      "Asesoramiento y representación legal integral, con dedicación, profesionalismo y transparencia. Desde La Plata y con alcance en todo el país: estés donde estés, tu caso queda en manos de especialistas.",
    ctaTexto: "Iniciá el análisis de tu caso hoy mismo",
  },

  // Fotos: Unsplash License (fuentes en docs/creditos-imagenes.md). Sin `imagen`, la banda muestra el ícono del área.
  servicios: {
    titulo: "Nuestros servicios principales",
    ctaTexto: "Leer más",
    items: [
      {
        slug: "accidentes-de-transito",
        titulo: "Siniestros",
        subtitulo: "Abogado de Accidentes de Tránsito en La Plata",
        texto: "Reclamos contra aseguradoras e indemnización por siniestros.",
        imagen: {
          src: "/images/areas/auto-chocado-ia.jpg",
          alt: "Auto con el frente dañado tras un choque en la calle",
          width: 1920,
          height: 1072,
        },
      },
      {
        slug: "derecho-civil-y-comercial",
        titulo: "Civil y Comercial",
        subtitulo: "Abogado Civil y Comercial en La Plata",
        texto:
          "Daños y perjuicios – Incumplimientos contractuales – Reclamos económicos.",
        imagen: {
          src: "/images/areas/derecho-civil-y-comercial.jpg",
          alt: "Martillo de juez de madera junto a un libro sobre un escritorio oscuro",
          width: 1600,
          height: 1067,
        },
      },
      {
        slug: "derecho-laboral",
        titulo: "Laboral",
        subtitulo: "Abogado Laboral en La Plata",
        texto: "Reclamos por despido e indemnización laboral.",
        imagen: {
          src: "/images/areas/derecho-laboral.jpg",
          alt: "Trabajador con casco y protección auditiva en una obra en construcción",
          width: 1600,
          height: 1067,
        },
      },
      {
        slug: "ciudadanias-italiana-y-espanola",
        titulo: "Ciudadanía Española e Italiana",
        subtitulo: "Ciudadanía Española e Italiana en La Plata",
        texto: "Te acompañamos en el camino para obtener tu ciudadanía.",
        imagen: {
          src: "/images/areas/banderas-italia-espana-ia.jpg",
          alt: "Banderas de España e Italia flameando contra el cielo",
          width: 2048,
          height: 768,
        },
        // Corrido a la izquierda para que se vea la bandera de Italia completa
        encuadre: "25% center",
      },
    ] satisfies {
      slug: AreaSlug;
      titulo: string;
      subtitulo: string;
      texto: string;
      imagen?: Imagen;
      encuadre?: string;
    }[],
  },
};
