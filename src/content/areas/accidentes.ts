// Textos copiados del brief (docs/brief-cliente.md, sección 2). No reescribir sin consultar.
import {
  Bike,
  Bus,
  Car,
  Footprints,
  Gavel,
  Handshake,
  HardHat,
  Motorbike,
  Percent,
  Scale,
  Wallet,
  MessageCircle,
} from "lucide-react";
import type { Area } from "./index";

const cta = "Hablá ahora con un abogado especialista por WhatsApp";

export const accidentes: Area = {
  slug: "accidentes-de-transito",
  nombre: "Siniestros Viales y Accidentes de Tránsito",
  icono: Car,
  resumenHome:
    "Reclamos de indemnización integral frente a aseguradoras. Trabajo 100% a resultado.",
  // TODO paso 7: revisar title/description con el cliente (el brief no los define)
  seo: {
    title: "Abogado de accidentes de tránsito en La Plata",
    description:
      "Reclamá la indemnización completa que te corresponde por ley. Consulta inicial 100% gratuita y honorarios solo si cobrás. Estudio Jurídico Colavita, La Plata.",
  },
  whatsappMensaje:
    "Hola Estudio Colavita, tuve un accidente de tránsito y necesito asesoramiento jurídico sobre mi caso.",

  secciones: [
    {
      tipo: "hero",
      titulo:
        "¿Tuviste un accidente de tránsito? No dejes que la aseguradora decida cuánto vale tu tranquilidad.",
      subtitulo:
        "Reclamá la indemnización completa que te corresponde por ley. Nos encargamos de todo el trámite para que vos solo te enfoques en recuperarte.",
      beneficios: [
        {
          titulo: "Atención prioritaria 24/7",
          texto: "Respuesta inmediata ante emergencias.",
        },
        {
          titulo: "Sin trámites complejos",
          texto: "Nosotros gestionamos el reclamo de principio a fin.",
        },
        {
          titulo: "Cobertura nacional",
          texto: "Asesoramiento legal especializado en todo el país.",
        },
      ],
      ctaTexto: cta,
      // TODO: imagenFondo con la Catedral de La Plata (licencia libre)
    },
    {
      tipo: "featureGrid",
      emoji: "🚗",
      titulo: "Especialistas en todo tipo de accidentes en La Plata",
      items: [
        {
          titulo: "Motos",
          texto:
            "Asesoramiento y reclamos especializados en accidentes de motocicleta.",
          icono: Motorbike,
        },
        {
          titulo: "Autos",
          texto: "Indemnización integral por choques y daños en automóviles.",
          icono: Car,
        },
        {
          titulo: "Peatones",
          texto:
            "Defensa y reclamo de derechos por atropellamientos y lesiones en vía pública.",
          icono: Footprints,
        },
        {
          titulo: "Bicicletas",
          texto: "Patrocinio legal para ciclistas ante siniestros de tránsito.",
          icono: Bike,
        },
        {
          titulo: "Pasajeros / Transporte / Apps (Uber/Cabify)",
          texto:
            "Reclamos por accidentes durante viajes en transporte público o aplicaciones.",
          icono: Bus,
        },
        {
          titulo: "Accidentes Laborales (ART)",
          texto:
            "Cobertura e indemnizaciones por incapacidad y accidentes in itinere o en el lugar de trabajo.",
          icono: HardHat,
        },
      ],
      ctaTexto: cta,
    },
    {
      tipo: "hook",
      emoji: "💰",
      titulo: "Si vos no cobrás, nosotros no cobramos.",
      intro:
        "Sabemos el momento difícil que estás pasando. Por eso, en el Estudio Jurídico Colavita trabajamos **100% a resultado**:",
      items: [
        {
          titulo: "Consulta inicial 100% gratuita",
          texto: "Analizamos la viabilidad de tu reclamo sin ningún costo.",
          icono: MessageCircle,
        },
        {
          titulo: "Cero gastos de bolsillo",
          texto:
            "No tenés que adelantar dinero para iniciar tu reclamo o demanda.",
          icono: Wallet,
        },
        {
          titulo: "Solo cobramos un porcentaje si ganamos",
          texto:
            "Nuestros honorarios están directamente vinculados a que obtengas tu indemnización.",
          icono: Percent,
        },
      ],
    },
    {
      tipo: "authorityWall",
      emoji: "🏛️",
      titulo:
        "Conocemos cómo juegan las compañías de seguros. Y sabemos cómo ganarles.",
      intro:
        "El negocio de las aseguradoras es pagar lo menos posible o demorar tu cobro hasta que te canses. Nos enfrentamos a diario con las principales empresas del mercado para defender tus derechos:",
      items: [
        {
          titulo: "Especialización exclusiva",
          texto:
            "Años de experiencia dedicados al derecho de daños y siniestros viales.",
          icono: Scale,
        },
        {
          titulo: "Negociación firme",
          texto: "No aceptamos ofertas irrisorias en etapas administrativas.",
          icono: Handshake,
        },
        {
          titulo: "Estrategia judicial sólida",
          texto:
            "Si la aseguradora no paga lo justo, llevamos el reclamo a juicio sin dudarlo.",
          icono: Gavel,
        },
      ],
      aseguradoras: [
        "La Caja (Generali)",
        "Sancor Seguros",
        "Federación Patronal",
        "San Cristóbal",
        "Rivadavia",
        "Mercantil Andina",
      ],
      imagenLogos: {
        src: "/images/logos-aseguradoras.jpg",
        alt: "Logos de aseguradoras: La Caja (Generali), Sancor Seguros, Federación Patronal, San Cristóbal, Rivadavia y Mercantil Andina",
        width: 1400,
        height: 910,
      },
    },
    {
      tipo: "alert",
      titulo:
        "ALERTA IMPORTANTE: No firmes ningún acuerdo sin consultar a un abogado",
      intro:
        "Las compañías de seguros suelen aprovechar el estado de vulnerabilidad posterior a un choque para ofrecer montos rápidos pero infinitamente menores a los que te corresponden.",
      items: [
        {
          titulo: "No aceptes cheques ni transferencias express",
          texto: 'Suelen incluir cláusulas de "renuncia a reclamos futuros".',
        },
        {
          titulo: "No brindes declaraciones grabadas",
          texto:
            "La aseguradora puede usar cualquier dicho tuyo para librarse de la responsabilidad.",
        },
        {
          titulo: "No firmes recibos de indemnización",
          texto:
            "Una vez firmado el desistimiento, perdés el derecho a reclamar secuelas físicas o psicológicas posteriores.",
        },
      ],
    },
    {
      tipo: "steps",
      emoji: "📋",
      titulo: "¿Qué hacer después de un accidente? 3 pasos fundamentales",
      pasos: [
        {
          titulo: "Recopilá la información en el lugar",
          texto:
            "Tomá fotos de los vehículos, los daños, las patentes y la calle. Pedí los datos del otro conductor (licencia, seguro, DNI) y el contacto de testigos si los hubiera.",
        },
        {
          // TODO: confirmar con el cliente "Busca" → "Buscá" (voseo)
          titulo: "Busca atención médica de inmediato",
          texto:
            "Aunque sientas que no tenés nada grave, asistí a un centro de salud. El certificado médico e historia clínica son la prueba principal para el reclamo por lesiones.",
        },
        {
          titulo: "Contactanos antes de hablar con la aseguradora",
          texto:
            "Escribinos por WhatsApp. Nos ocupamos de hacer la denuncia del siniestro en tiempo y forma, protegiendo tus derechos desde el primer minuto.",
        },
      ],
    },
    {
      tipo: "faq",
      emoji: "❓",
      titulo: "Preguntas Frecuentes",
      items: [
        {
          pregunta: "¿Cuánto tiempo tengo para hacer el reclamo?",
          respuesta:
            "El plazo legal máximo para iniciar el reclamo es de 3 años desde el accidente. Sin embargo, es fundamental actuar dentro de las primeras 72 horas para realizar las denuncias correspondientes y resguardar pruebas clave.",
        },
        {
          pregunta:
            "¿Qué pasa si el que me chocó no tiene seguro o se dio a la fuga?",
          respuesta:
            "Existen mecanismos legales para reclamar aun si el responsable no tiene seguro o no pudo ser identificado. Analizamos tu caso particular para indicarte las alternativas disponibles.",
        },
        {
          pregunta: "¿Tengo que pagar algo para iniciar el trámite?",
          respuesta:
            "No. En el Estudio Colavita no cobramos nada por adelantado. La consulta es totalmente gratuita y nuestros honorarios se liquidan al final, únicamente si cobrás tu indemnización.",
        },
        {
          pregunta: "¿Qué rubros se pueden reclamar en la indemnización?",
          respuesta:
            "Podés reclamar por la reparación del vehículo, desvalorización del rodado, privación de uso, gastos médicos, incapacidad física y psicológica sobreviniente, y daño moral.",
        },
        {
          pregunta: "¿Cuánto tarda en resolverse un reclamo por accidente?",
          respuesta:
            "Un acuerdo extrajudicial con la aseguradora puede demorar entre 2 y 6 meses. Si el caso requiere ir a juicio por no llegar a un monto justo, el plazo se extiende, pero el monto reclamado se actualiza.",
        },
      ],
    },
    {
      tipo: "otherAreas",
      emoji: "⚖️",
      titulo:
        "Soluciones legales integrales para proteger tus derechos en todo momento",
      intro:
        "Además de nuestra especialización en accidentes de tránsito, en el Estudio Jurídico Colavita contamos con un equipo multidisciplinario listo para brindarte asesoramiento y representación personalizada en distintas áreas del derecho:",
      items: [
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
        {
          slug: "ciudadanias-italiana-y-espanola",
          titulo: "Ciudadanías Italiana y Española",
          texto:
            "Te acompañamos paso a paso en la obtención de tu ciudadanía europea, gestionando la búsqueda de actas, armado de carpeta, rectificaciones y representación en vía judicial o consular.",
        },
      ],
    },
    {
      tipo: "cta",
      ctaTexto: "¿Tuviste un accidente? Hablá con un abogado ahora mismo",
    },
  ],
};
