// Textos copiados del brief (docs/brief-cliente.md, sección 4). No reescribir sin consultar.
// El título de "featureGrid" sale del rótulo de sección del brief (el brief no trae un H2 propio).
import {
  Banknote,
  ClipboardCheck,
  CreditCard,
  FileText,
  Handshake,
  House,
  Landmark,
  Receipt,
} from "lucide-react";
import type { Area } from "./index";

const cta = "Hablá con un especialista en Derecho Civil";

export const civil: Area = {
  slug: "derecho-civil-y-comercial",
  nombre: "Derecho Civil y Comercial",
  icono: Landmark,
  resumenHome:
    "Sucesiones, contratos, desalojos, reclamos por incumplimiento y defensa del consumidor.",
  // TODO paso 7: revisar title/description con el cliente (el brief no los define)
  seo: {
    title: "Abogado civil y comercial en La Plata",
    description:
      "Sucesiones, contratos, daños y perjuicios, reclamos de deudas y conflictos comerciales. Presupuesto cerrado por etapas y facilidades de pago. Estudio Jurídico Colavita, La Plata.",
  },
  whatsappMensaje:
    "Hola Estudio Colavita, necesito hacer una consulta sobre un tema civil/comercial.",

  secciones: [
    {
      tipo: "hero",
      titulo:
        "Protegé tu patrimonio y resolvé tus conflictos legales con expertos",
      subtitulo:
        "Sucesiones rápidas, contratos seguros, reclamos económicos, deudas y problemas comerciales. Respuestas ágiles y soluciones definitivas: priorizamos soluciones extrajudiciales cuando son posibles. Si el conflicto lo requiere, iniciamos la acción judicial.",
      beneficios: [
        {
          titulo: "Trámites simplificados",
          texto: "Nos ocupamos de toda la gestión judicial y extrajudicial.",
        },
        {
          titulo: "Atención personalizada",
          texto: "Asesoramiento claro y en lenguaje accesible.",
        },
        {
          titulo: "Planes de pago flexibles",
          texto: "Presupuestos transparentes y acordes a cada etapa.",
        },
      ],
      ctaTexto: cta,
      // Biblioteca en penumbra: "fondo sobrio institucional" (Unsplash, ver docs/creditos-imagenes.md)
      imagenFondo: {
        src: "/images/civil/hero-biblioteca.jpg",
        alt: "",
        width: 1920,
        height: 1080,
      },
      veloFuerte: true,
    },
    {
      tipo: "hook",
      titulo: "Defendemos tu patrimonio con la firmeza que tu caso exige",
      // Edificio de tribunales, desenfocado detrás del panel
      imagenFondo: {
        src: "/images/fondo-edificio-tribunales.jpg",
        alt: "",
        width: 2048,
        height: 768,
      },
      intro:
        "Sabemos que un problema familiar, comercial o contractual requiere rapidez y previsibilidad económica. Priorizamos soluciones extrajudiciales cuando son posibles, y si el conflicto lo requiere, iniciamos la acción judicial. Te ofrecemos:",
      items: [
        {
          titulo: "Evaluación técnica sin sorpresas",
          texto: "Te explicamos el camino legal antes de iniciar.",
          icono: ClipboardCheck,
        },
        {
          titulo: "Presupuesto cerrado por etapas",
          texto: "Sabés desde el primer día qué costo tiene tu proceso.",
          icono: Receipt,
        },
        {
          titulo: "Facilidades de pago",
          texto:
            "Planes adaptados a la naturaleza del trámite y tus posibilidades.",
          icono: CreditCard,
        },
      ],
    },
    {
      tipo: "featureGrid",
      titulo: "Áreas de especialización civil y comercial",
      items: [
        {
          titulo: "Daños y Perjuicios e Incumplimientos Contractuales",
          texto:
            "Exigí el cumplimiento de contratos o la indemnización integral por daños y perjuicios ocasionados.",
          icono: FileText,
          imagen: {
            src: "/images/civil/danos-y-contratos.jpg",
            alt: "Persona firmando un documento con una lapicera",
            width: 1400,
            height: 1050,
          },
        },
        {
          titulo: "Reclamos Económicos y Reclamos de Deudas",
          texto:
            "Ejecución de deudas, cobros judiciales y extrajudiciales y recupero de créditos.",
          icono: Banknote,
          imagen: {
            src: "/images/civil/reclamos-economicos.jpg",
            alt: "Calculadora sobre billetes y documentos financieros",
            width: 1400,
            height: 1050,
          },
        },
        {
          titulo: "Problemas Comerciales y Societarios",
          texto:
            "Asesoramiento integral ante conflictos entre socios, acuerdos comerciales y defensa de empresas.",
          icono: Handshake,
          imagen: {
            src: "/images/civil/comerciales-societarios.jpg",
            alt: "Dos personas de traje dándose la mano",
            width: 1400,
            height: 1050,
          },
        },
        {
          titulo: "Sucesiones y Contratos",
          texto:
            "Sucesiones ab intestato y testamentarias, revisión/redacción de contratos y desalojos.",
          icono: House,
          imagen: {
            src: "/images/civil/sucesiones.jpg",
            alt: "Mano sosteniendo las llaves de una casa",
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
            "¿Cómo resuelven los reclamos de deudas o disputas comerciales?",
          respuesta:
            "Priorizamos soluciones extrajudiciales cuando son posibles para ahorrar tiempo y costos. Si la contraparte no responde, iniciamos la acción judicial correspondiente para ejecutar la deuda o reparar el daño.",
        },
        {
          pregunta: "¿Cuánto tarda en tramitarse una sucesión?",
          respuesta:
            "Una declaratoria de herederos sin conflictos suele demorar entre 3 y 8 meses. Además, mediante tracto abreviado se puede vender un inmueble directamente al finalizar la declaratoria.",
        },
        {
          pregunta:
            "¿Qué hago ante un incumplimiento contractual o reclamo de daños?",
          respuesta:
            "Enviamos una carta documento de intimación formal y evaluamos la viabilidad económica del reclamo antes de promover la demanda judicial.",
        },
      ],
    },
    // "Otras áreas" y el cierre no están en la sección civil del brief: se suman por navegación y
    // conversión, con textos del brief (Home y "Otras Áreas de Práctica" de Accidentes).
    {
      tipo: "otherAreas",
      titulo: "También te asesoramos en",
      // Intro adaptada del brief: "accidentes de tránsito" → "derecho civil y comercial"
      intro:
        "Además de nuestra especialización en derecho civil y comercial, en el Estudio Jurídico Colavita contamos con un equipo multidisciplinario listo para brindarte asesoramiento y representación personalizada en distintas áreas del derecho:",
      items: [
        {
          slug: "accidentes-de-transito",
          titulo: "Siniestros Viales y Accidentes de Tránsito",
          texto:
            "Reclamos de indemnización integral frente a aseguradoras. Trabajo 100% a resultado.",
        },
        {
          slug: "derecho-laboral",
          titulo: "Derecho Laboral",
          // TODO: confirmar con el cliente "despidos incautados" (¿"injustificados"?)
          texto:
            'Defendemos tus derechos ante despidos incautados, trabajo no registrado ("en negro"), accidentes de trabajo (ART) y diferencias salariales, asegurando la indemnización justa que te corresponde.',
        },
        {
          slug: "ciudadanias-italiana-y-espanola",
          titulo: "Ciudadanías Italiana y Española",
          texto:
            "Te acompañamos paso a paso en la obtención de tu ciudadanía europea, gestionando la búsqueda de actas, armado de carpeta, rectificaciones y representación en vía judicial o consular.",
        },
      ],
    },
    { tipo: "cta", ctaTexto: cta },
  ],
};
