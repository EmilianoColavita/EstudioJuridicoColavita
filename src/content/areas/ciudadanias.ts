// Textos copiados del brief (docs/brief-cliente.md, sección 5). No reescribir sin consultar.
// El título de "featureGrid" sale del rótulo de sección del brief (el brief no trae un H2 propio).
import {
  FilePen,
  Gavel,
  Globe,
  Network,
  Receipt,
  Search,
  Stamp,
} from "lucide-react";
import type { Area } from "./index";

const cta = "Iniciá la evaluación de tu carpeta por WhatsApp";

export const ciudadanias: Area = {
  slug: "ciudadanias-italiana-y-espanola",
  nombre: "Ciudadanías Italiana y Española",
  icono: Globe,
  resumenHome:
    "Búsqueda de actas, armado de carpeta, rectificaciones y representación judicial o consular.",
  // TODO paso 7: revisar title/description con el cliente (el brief no los define)
  seo: {
    title: "Ciudadanía italiana y española en La Plata",
    description:
      "Reconstrucción genealógica, armado de carpeta verificado, rectificaciones y vía judicial o consular sin viajar. Estudio Jurídico Colavita, La Plata.",
  },
  whatsappMensaje:
    "Hola Estudio Colavita, quiero consultar por el trámite de mi ciudadanía europea.",

  secciones: [
    {
      tipo: "hero",
      titulo: "Tu pasaporte europeo más cerca: Ciudadanías Española e Italiana",
      subtitulo:
        "Verificamos la línea de ascendencia y tramitamos partidas, actas y datos familiares que nos permitan reconstruir el árbol genealógico. Te acompañamos desde la búsqueda documental hasta la carpeta final, rectificaciones y representación judicial o consular.",
      beneficios: [
        {
          titulo: "Reconstrucción genealógica",
          texto:
            "Verificamos la línea de ascendencia y rastreamos partidas, actas y datos familiares.",
        },
        {
          titulo: "Ciudadanía Española e Italiana",
          texto:
            "Tramitación por vía consular o judicial (falta de turnos / vía materna) sin viajar.",
        },
        {
          titulo: "Armado de carpeta 100% verificado",
          texto: "Evitá rebotes por errores en nombres o fechas.",
        },
      ],
      ctaTexto: cta,
      // Cúpula de San Pedro al atardecer: "imagen inspiradora (Europa)" (Unsplash, ver docs/creditos-imagenes.md)
      imagenFondo: {
        src: "/images/ciudadanias/hero-roma.jpg",
        alt: "",
        width: 1920,
        height: 1080,
      },
    },
    {
      tipo: "hook",
      titulo:
        "Expertos en extranjería: un mapa de ruta claro para tu ciudadanía",
      // Gran Vía de Madrid al atardecer, desenfocada detrás del panel
      imagenFondo: {
        src: "/images/ciudadanias/fondo-madrid.jpg",
        alt: "",
        width: 1920,
        height: 1080,
      },
      intro:
        "Armar la carpeta para la ciudadanía Española e Italiana requiere precisión técnica. Verificamos la línea de ascendencia y gestionamos las partidas, actas y datos familiares para reconstruir el árbol genealógico sin errores. Te brindamos:",
      items: [
        {
          titulo: "Análisis de viabilidad documental",
          texto:
            "Verificamos la línea de ascendencia antes de que inviertas dinero.",
          icono: Search,
        },
        {
          // TODO: confirmar con el cliente "etapabilizado" (¿"por etapas"?)
          titulo: "Presupuesto integral y etapabilizado",
          texto:
            "Sabés exactamente el costo de cada acta, traducción y apostillado.",
          icono: Receipt,
        },
        {
          titulo: "Representación letrada directa",
          texto:
            "En caso de rectificaciones judiciales o demandas contra consulados por falta de turnos.",
          icono: Gavel,
        },
      ],
    },
    {
      tipo: "featureGrid",
      titulo: "Servicios integrales para ciudadanías",
      items: [
        {
          titulo: "Ciudadanía Española e Italiana",
          texto:
            "Búsqueda de partidas, actas y datos familiares para reconstruir el árbol genealógico, armado de carpeta consular y juicios por falta de turno o vía materna.",
          icono: Globe,
          imagen: {
            src: "/images/ciudadanias/pasaporte.jpg",
            alt: "Pasaporte abierto con sellos de viaje",
            width: 1400,
            height: 1050,
          },
        },
        {
          titulo: "Verificación de Línea de Ascendencia",
          texto:
            "Control minucioso de no naturalización y análisis de viabilidad legal.",
          icono: Network,
          imagen: {
            src: "/images/ciudadanias/ascendencia.jpg",
            alt: "Álbum de fotos familiares antiguas en blanco y negro",
            width: 1400,
            height: 1050,
          },
        },
        {
          titulo: "Rectificaciones Judiciales y Sumarias",
          texto:
            "Corregimos errores de nombres, apellidos, fechas y lugares en actas registradas en Argentina.",
          icono: FilePen,
          imagen: {
            src: "/images/ciudadanias/rectificaciones.jpg",
            alt: "Documentos antiguos atados junto a una lapicera",
            width: 1400,
            height: 1050,
          },
        },
        {
          titulo: "Traducciones juradas y Apostillados",
          texto:
            "Gestión completa del circuito de legalización ante Cancillería o Colegio de Traductores.",
          icono: Stamp,
          imagen: {
            src: "/images/ciudadanias/apostillados.jpg",
            alt: "Cartas y documentos antiguos con sellos postales",
            width: 1400,
            height: 1050,
          },
        },
      ],
      ctaTexto: cta,
    },
    {
      tipo: "faq",
      titulo: "Preguntas Frecuentes",
      items: [
        {
          pregunta:
            "¿Cómo inician el proceso de las Ciudadanías Española e Italiana?",
          respuesta:
            "Verificamos la línea de ascendencia y buscamos las partidas, actas y datos familiares requeridos para reconstruir el árbol genealógico con absoluta precisión.",
        },
        {
          pregunta:
            "¿Puedo tramitar la ciudadanía por vía judicial desde Argentina?",
          respuesta:
            "Sí. Si no conseguís turno consular o tenés una línea materna anterior a 1948 (en el caso italiano), podés iniciar el juicio correspondiente mediante nuestro equipo letrado sin necesidad de viajar.",
        },
        {
          pregunta: "¿Es obligatorio rectificar actas si hay errores?",
          respuesta:
            "Sí, las variaciones en datos familiares suelen causar rechazos. Nos encargamos de realizar las rectificaciones sumarias o judiciales necesarias en Argentina.",
        },
      ],
    },
    // "Otras áreas" y el cierre no están en la sección de ciudadanías del brief: se suman por
    // navegación y conversión, con textos del brief (Home y "Otras Áreas de Práctica" de Accidentes).
    {
      tipo: "otherAreas",
      titulo:
        "Soluciones legales integrales para proteger tus derechos en todo momento",
      // Intro adaptada del brief: "accidentes de tránsito" → "ciudadanías europeas"
      intro:
        "Además de nuestra especialización en ciudadanías europeas, en el Estudio Jurídico Colavita contamos con un equipo multidisciplinario listo para brindarte asesoramiento y representación personalizada en distintas áreas del derecho:",
      items: [
        {
          slug: "accidentes-de-transito",
          titulo: "Siniestros Viales y Accidentes de Tránsito",
          texto:
            "Reclamos de indemnización integral frente a aseguradoras. Trabajo 100% a resultado.",
        },
        {
          slug: "derecho-civil-y-comercial",
          titulo: "Derecho Civil y Comercial",
          texto:
            "Protegemos tu patrimonio y tus intereses en contratos, sucesiones, desalojos, reclamos por incumplimientos contractuales y defensas del consumidor.",
        },
        {
          slug: "derecho-laboral",
          titulo: "Derecho Laboral",
          // TODO: confirmar con el cliente "despidos incautados" (¿"injustificados"?)
          texto:
            'Defendemos tus derechos ante despidos incautados, trabajo no registrado ("en negro"), accidentes de trabajo (ART) y diferencias salariales, asegurando la indemnización justa que te corresponde.',
        },
      ],
    },
    { tipo: "cta", ctaTexto: cta },
  ],
};
