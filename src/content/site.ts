// Datos del estudio. Todo lo marcado con TODO es placeholder: reemplazar con los datos reales del Drive.

export type Imagen = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export const site = {
  nombre: "Estudio Jurídico Colavita",
  url: "https://colavitaestudiojuridico.com",

  abogado: {
    nombre: "Dr. Francisco Valentín Colavita",
    matricula: "T° 68 F° 135 CALP",
    titulos: "Abogado y Lic. en Comunicación Social (UNLP)",
    foto: {
      src: "/images/dr-colavita-presentando.jpg",
      alt: "Dr. Francisco Valentín Colavita, abogado del Estudio Jurídico Colavita",
      width: 1500,
      height: 2000,
    } satisfies Imagen,
    // Retrato de cuerpo entero en el estudio (bloque del Dr. en el Home)
    fotoEstudio: {
      src: "/images/dr-colavita-estudio.jpeg",
      alt: "Dr. Francisco Valentín Colavita en su estudio jurídico de La Plata",
      width: 1024,
      height: 1536,
    } satisfies Imagen,
  },

  whatsapp: {
    // TODO: número real en formato internacional sin "+" ni espacios (ej. 549221XXXXXXX)
    numero: "5490000000000",
    // TODO: el brief no define mensaje para el Home; confirmar con el cliente
    mensajeGenerico: "Hola Estudio Colavita, quiero hacer una consulta.",
  },

  contacto: {
    direccion: "TODO: dirección del estudio", // TODO
    ciudad: "La Plata, Buenos Aires",
    horario: "TODO: horario de atención", // TODO
    email: "TODO@colavitaestudiojuridico.com", // TODO
    mapsUrl: "https://maps.google.com/", // TODO: link al perfil de Google Maps
  },

  redes: {
    instagram: "https://www.instagram.com/", // TODO: perfil real
  },

  // Valores REALES de Google Maps, cargados a mano. Mientras sean null, el badge no muestra números.
  googleReviews: {
    puntaje: null as number | null, // TODO
    cantidad: null as number | null, // TODO
    url: "https://maps.google.com/", // TODO: link a las reseñas
  },

  // Créditos que la licencia exige mostrar en el sitio (CC BY-SA). Detalle en docs/creditos-imagenes.md
  creditoPortada: {
    obra: "Plaza Moreno y Catedral de La Plata",
    obraUrl:
      "https://commons.wikimedia.org/wiki/File:La_Plata_-_Plaza_Moreno_-_20061207a.jpg",
    autor: "Barcex",
    licencia: "CC BY-SA 2.5",
    licenciaUrl: "https://creativecommons.org/licenses/by-sa/2.5/",
  },

  logo: {
    src: "/images/logo-colavita.png",
    alt: "Colavita, Estudio jurídico",
    width: 480,
    height: 360,
  } satisfies Imagen,

  // TODO: reemplazar por el SVG del logo cuando llegue
  logoIcono: {
    src: "/images/logo-balanza.png",
    alt: "",
    width: 200,
    height: 170,
  } satisfies Imagen,
};
