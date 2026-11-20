// Textos copiados del brief (docs/brief-cliente.md, sección 3). No reescribir sin consultar.
// Los títulos de "hook" y "featureGrid" salen de los rótulos de sección del brief (el brief no trae un H2 propio).
import {
  Briefcase,
  Calculator,
  EyeOff,
  HardHat,
  Mail,
  MessageCircle,
  Percent,
  UserX,
} from "lucide-react";
import type { Area } from "./index";

const cta = "Consultá gratis tu caso laboral por WhatsApp";

export const laboral: Area = {
  slug: "derecho-laboral",
  nombre: "Derecho Laboral",
  icono: Briefcase,
  resumenHome:
    "Defensas por despidos, trabajo no registrado, accidentes laborales (ART) y diferencias salariales.",
  // TODO paso 7: revisar title/description con el cliente (el brief no los define)
  seo: {
    title: "Abogado laboral en La Plata",
    description:
      "Despidos, trabajo en negro, accidentes laborales (ART) y diferencias salariales. Consulta inicial gratuita y honorarios a resultado. Estudio Jurídico Colavita, La Plata.",
  },
  whatsappMensaje:
    "Hola Estudio Colavita, necesito asesoramiento por un caso laboral.",

  secciones: [
    {
      tipo: "hero",
      titulo:
        "¿Tuviste un problema en tu trabajo? Hacé valer tus derechos laborales sin pagar por adelantado.",
      subtitulo:
        "Si sufriste un despido, trabajás en negro o tuviste un accidente laboral, te ayudamos a conseguir la indemnización justa. Calculamos la liquidación correspondiente según la Ley de Contrato de Trabajo y gestionamos la instancia administrativa obligatoria.",
      beneficios: [
        {
          titulo: "Asesoramiento inmediato",
          texto: "Analizamos tu telegrama o situación sin cargo.",
        },
        {
          titulo: "Gestión integral",
          texto:
            "Intercambio telegráfico, instancia administrativa obligatoria y juicio laboral.",
        },
        {
          titulo: "Resguardo total",
          texto: "Protegemos tu tranquilidad en cada etapa del proceso.",
        },
      ],
      ctaTexto: cta,
      // Interior de fábrica en penumbra (Unsplash, ver docs/creditos-imagenes.md)
      imagenFondo: {
        src: "/images/laboral/hero-fabrica.jpg",
        alt: "",
        width: 1920,
        height: 1080,
      },
    },
    {
      tipo: "hook",
      titulo: "100% a resultado",
      // Catedral de La Plata, desenfocada detrás del panel (crédito CC BY-SA en el footer)
      imagenFondo: {
        src: "/images/background-catedral.jpg",
        alt: "",
        width: 2048,
        height: 768,
      },
      intro:
        "Sabemos la incertidumbre que genera perder el empleo o trabajar sin registración. Por eso, en Estudio Jurídico Colavita asumimos el compromiso junto a vos:",
      items: [
        {
          titulo: "Consulta inicial gratuita",
          texto: "Evaluamos la viabilidad legal de tu reclamo laboral.",
          icono: MessageCircle,
        },
        {
          titulo: "Telegramas sin costo",
          texto:
            "El envío de telegramas laborales es gratuito para el trabajador por ley.",
          icono: Mail,
        },
        {
          titulo: "Honorarios a resultado",
          texto:
            "Solo percibimos un porcentaje de tu indemnización cuando vos la cobrás.",
          icono: Percent,
        },
      ],
    },
    {
      tipo: "featureGrid",
      titulo: "Servicios y casos que resolvemos",
      items: [
        {
          titulo: "Despido sin causa y despido indirecto",
          texto:
            "Reclamo de indemnización por antigüedad, preaviso y rubros adeudados.",
          icono: UserX,
          imagen: {
            src: "/images/laboral/despido.jpg",
            alt: "Empleado saliendo de la oficina con una caja con sus pertenencias",
            width: 1400,
            height: 900,
          },
        },
        {
          titulo: "Trabajo no registrado (en negro)",
          texto:
            "Intimación para correcta registración o despido indirecto con multas a tu favor.",
          icono: EyeOff,
          imagen: {
            src: "/images/laboral/trabajo-no-registrado.jpg",
            alt: "Silueta de un trabajador en un galpón en penumbra",
            width: 1400,
            height: 1050,
          },
        },
        {
          titulo: "Accidentes laborales y ART",
          texto:
            "Reclamá la indemnización justa por incapacidad física o enfermedad profesional.",
          icono: HardHat,
          imagen: {
            src: "/images/laboral/art.jpg",
            alt: "Obreros con casco trabajando en una planta industrial",
            width: 1400,
            height: 1050,
          },
        },
        {
          titulo: "Diferencias salariales y conflictos laborales",
          texto:
            "Cobro de haberes mal liquidados, horas extras y asesoramiento ante conflictos durante la relación de trabajo.",
          icono: Calculator,
          imagen: {
            src: "/images/laboral/diferencias-salariales.jpg",
            alt: "Formularios y calculadora sobre un escritorio oscuro",
            width: 1400,
            height: 1050,
          },
        },
      ],
      ctaTexto: cta,
      atenuarImagenes: true,
    },
    {
      tipo: "faq",
      titulo: "Preguntas Frecuentes",
      items: [
        {
          pregunta: "¿Cuánto tiempo tengo para reclamar tras un despido?",
          respuesta:
            "Tenés un plazo prescripcional de 2 años desde que finalizó la relación laboral. Sin embargo, te recomendamos consultar de inmediato para enviar los telegramas a tiempo y calcular la liquidación correspondiente según la Ley de Contrato de Trabajo.",
        },
        {
          pregunta: "¿Qué pasa si trabajo en negro y me despiden?",
          respuesta:
            "La ley protege al trabajador no registrado y contempla multas agravadas a tu favor que incrementan de forma notable la indemnización final ante un despido indirecto o sin causa.",
        },
        {
          pregunta:
            "¿Tengo que pagar para mandar un telegrama o iniciar el reclamo?",
          respuesta:
            "No. El envío de telegramas laborales por parte del trabajador es un derecho absolutamente gratuito. Además, gestionamos la instancia administrativa obligatoria sin que tengas que adelantar dinero.",
        },
      ],
    },
    // "Otras áreas" y el cierre no están en la sección laboral del brief: se suman por navegación y
    // conversión, con textos del brief (Home y "Otras Áreas de Práctica" de Accidentes).
    {
      tipo: "otherAreas",
      titulo: "También te asesoramos en",
      // Intro adaptada del brief: "accidentes de tránsito" → "derecho laboral"
      intro:
        "Además de nuestra especialización en derecho laboral, en el Estudio Jurídico Colavita contamos con un equipo multidisciplinario listo para brindarte asesoramiento y representación personalizada en distintas áreas del derecho:",
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
