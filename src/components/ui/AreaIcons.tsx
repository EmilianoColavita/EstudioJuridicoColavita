import type { AreaSlug } from "@/content/areas";

/*
  Íconos ilustrados de las 4 áreas, en dorado metálico.
  Los degradados se definen UNA vez en <AreaIconDefs /> y los íconos los referencian por id.
  Se usa userSpaceOnUse para que funcionen también en líneas rectas (con objectBoundingBox
  una línea vertical tiene ancho 0 y el degradado no se pinta).
*/

const oro = "url(#area-oro)";

export function AreaIconDefs() {
  return (
    <svg width="0" height="0" aria-hidden="true" className="absolute">
      <defs>
        <linearGradient
          id="area-oro"
          gradientUnits="userSpaceOnUse"
          x1="0"
          y1="0"
          x2="20"
          y2="72"
        >
          <stop offset="0" style={{ stopColor: "var(--color-gold-light)" }} />
          <stop offset="0.35" style={{ stopColor: "var(--color-gold)" }} />
          <stop offset="0.6" style={{ stopColor: "var(--color-gold-light)" }} />
          <stop offset="1" style={{ stopColor: "var(--color-gold-deep)" }} />
        </linearGradient>
        {/* Pliegues de las banderas: luces y sombras sobre el color plano */}
        <linearGradient id="area-pliegues" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="black" stopOpacity="0.05" />
          <stop offset="0.3" stopColor="black" stopOpacity="0.3" />
          <stop offset="0.55" stopColor="white" stopOpacity="0.18" />
          <stop offset="0.8" stopColor="black" stopOpacity="0.25" />
          <stop offset="1" stopColor="white" stopOpacity="0.1" />
        </linearGradient>
        <clipPath id="area-bandera-italia">
          <path d="M66 8 C74 3, 82 13, 92 8 L92 30 C82 35, 74 25, 66 30 Z" />
        </clipPath>
      </defs>
    </svg>
  );
}

const base = {
  fill: "none",
  stroke: oro,
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
} as const;

function AutoConEscudo() {
  return (
    <svg viewBox="0 0 64 64" className="size-24" {...base}>
      {/* Espejos */}
      <path d="M12 27 H6 V23.5 L11 24.5" />
      <path d="M52 27 H58 V23.5 L53 24.5" />
      {/* Techo y parabrisas */}
      <path d="M13 29 L18.5 17 Q20 14 23.5 14 H40.5 Q44 14 45.5 17 L51 29" />
      <path d="M18 28 L22 19 H42 L46 28 Z" strokeWidth={1.4} />
      {/* Carrocería */}
      <path d="M10 29 H54 Q57 29 57 32 V43 Q57 46 54 46 H10 Q7 46 7 43 V32 Q7 29 10 29 Z" />
      {/* Faros */}
      <ellipse cx="15" cy="35.5" rx="4" ry="2.4" fill={oro} stroke="none" />
      <ellipse cx="49" cy="35.5" rx="4" ry="2.4" fill={oro} stroke="none" />
      {/* Parrilla */}
      <rect x="23" y="33" width="18" height="6" rx="1.5" strokeWidth={1.4} />
      <path d="M26 36 H38" strokeWidth={1} />
      <path d="M14 41.5 H20 M44 41.5 H50" strokeWidth={1.4} />
      {/* Ruedas */}
      <path d="M11 46 V50.5 Q11 52 12.5 52 H17 Q18.5 52 18.5 50.5 V46" />
      <path d="M45.5 46 V50.5 Q45.5 52 47 52 H51.5 Q53 52 53 50.5 V46" />
      {/* Escudo (relleno navy para tapar el auto) */}
      <path
        d="M50 33 L60.5 37 V46 Q60.5 56.5 50 61.5 Q39.5 56.5 39.5 46 V37 Z"
        className="fill-navy"
        strokeWidth={2.2}
      />
      <path d="M44.5 47 L48.5 51 L55.5 43" strokeWidth={2.4} />
    </svg>
  );
}

function Balanza() {
  return (
    <svg viewBox="0 0 64 64" className="size-24" {...base}>
      {/* Remate y columna */}
      <circle cx="32" cy="7.5" r="2.6" fill={oro} stroke="none" />
      <path d="M32 10 V53" strokeWidth={2.4} />
      <circle cx="32" cy="22" r="1.6" fill={oro} stroke="none" />
      {/* Cruz (brazo) */}
      <path d="M9 17 Q32 11 55 17" strokeWidth={2.2} />
      <circle cx="9" cy="17" r="1.5" fill={oro} stroke="none" />
      <circle cx="55" cy="17" r="1.5" fill={oro} stroke="none" />
      {/* Platillo izquierdo */}
      <path d="M9 17 L3 35 M9 17 L15 35" strokeWidth={1.2} />
      <path d="M2 35 H16 Q14.5 41.5 9 41.5 Q3.5 41.5 2 35 Z" fill={oro} />
      {/* Platillo derecho */}
      <path d="M55 17 L49 35 M55 17 L61 35" strokeWidth={1.2} />
      <path d="M48 35 H62 Q60.5 41.5 55 41.5 Q49.5 41.5 48 35 Z" fill={oro} />
      {/* Base escalonada */}
      <path d="M25 53 H39 L41.5 57 H22.5 Z" fill={oro} />
      <rect x="17" y="57" width="30" height="3.5" rx="1" fill={oro} />
    </svg>
  );
}

function Maletin() {
  return (
    <svg viewBox="0 0 64 64" className="size-24" {...base}>
      {/* Manija */}
      <path
        d="M23 18 V13 Q23 10 26 10 H38 Q41 10 41 13 V18"
        strokeWidth={2.4}
      />
      {/* Cuerpo */}
      <rect x="7" y="18" width="50" height="36" rx="4.5" strokeWidth={2.4} />
      {/* Solapa */}
      <path d="M7 29 Q32 38 57 29" />
      {/* Cierre */}
      <rect
        x="27.5"
        y="30"
        width="9"
        height="8"
        rx="1.8"
        className="fill-navy"
        strokeWidth={2}
      />
      <circle cx="32" cy="34" r="1.2" fill={oro} stroke="none" />
      {/* Costuras */}
      <path d="M12 50 H52" strokeWidth={0.9} strokeDasharray="2 2" />
    </svg>
  );
}

// Franja ondulada de bandera entre las alturas a y b (misma onda para todas las franjas).
const franjaEspana = (a: number, b: number) =>
  `M30 ${a} C22 ${a - 5}, 14 ${a + 5}, 4 ${a} L4 ${b} C14 ${b + 5}, 22 ${b - 5}, 30 ${b} Z`;

function BanderasCruzadas() {
  const formaEspana = franjaEspana(8, 30);
  const formaItalia = "M66 8 C74 3, 82 13, 92 8 L92 30 C82 35, 74 25, 66 30 Z";
  return (
    <svg viewBox="2 2 92 58" className="h-24 w-auto" aria-hidden="true">
      {/* España: rojo, amarillo (doble ancho), rojo */}
      <path d={franjaEspana(8, 13.5)} className="fill-flag-red" />
      <path d={franjaEspana(13.5, 24.5)} className="fill-flag-yellow" />
      <path d={franjaEspana(24.5, 30)} className="fill-flag-red" />
      <path d={formaEspana} fill="url(#area-pliegues)" />
      <path d={formaEspana} fill="none" stroke={oro} strokeWidth="0.8" />

      {/* Italia: verde, blanco, rojo */}
      <g clipPath="url(#area-bandera-italia)">
        <rect
          x="66"
          y="0"
          width="8.7"
          height="40"
          className="fill-flag-green"
        />
        <rect
          x="74.7"
          y="0"
          width="8.6"
          height="40"
          className="fill-flag-white"
        />
        <rect
          x="83.3"
          y="0"
          width="8.7"
          height="40"
          className="fill-flag-red"
        />
      </g>
      <path d={formaItalia} fill="url(#area-pliegues)" />
      <path d={formaItalia} fill="none" stroke={oro} strokeWidth="0.8" />

      {/* Mástiles cruzados con remates */}
      <g stroke={oro} strokeWidth="2.6" strokeLinecap="round">
        <line x1="30" y1="6" x2="51" y2="58" />
        <line x1="66" y1="6" x2="45" y2="58" />
      </g>
      <circle cx="30" cy="5" r="2.6" fill={oro} />
      <circle cx="66" cy="5" r="2.6" fill={oro} />
    </svg>
  );
}

export function AreaIcon({ slug }: { slug: AreaSlug }) {
  switch (slug) {
    case "accidentes-de-transito":
      return <AutoConEscudo />;
    case "derecho-civil-y-comercial":
      return <Balanza />;
    case "derecho-laboral":
      return <Maletin />;
    case "ciudadanias-italiana-y-espanola":
      return <BanderasCruzadas />;
  }
}
