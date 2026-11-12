import Image from "next/image";
import { Scale } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { laPlata, mapaViewBox, pines, provincias } from "@/lib/geo/argentina";
import { RevealOnView } from "./RevealOnView";

// CABA queda pegada a La Plata en el mapa: se marca la sede y los pines van solo en las 23 provincias.
const pinesProvincias = pines.filter(
  (p) => p.nombre !== "Ciudad de Buenos Aires",
);

// Medidas del mapa y margen extra para el halo y el reflejo de luz
const [, , anchoMapa, altoMapa] = mapaViewBox.split(" ").map(Number);
const viewBox = `-20 -10 ${anchoMapa + 40} ${altoMapa + 30}`;
const tierraDelFuego = pines.find((p) => p.nombre === "Tierra del Fuego")!.xy;

// Pin con la punta en (0,0): así la animación escala desde la punta
const formaPin =
  "M0,0 C-1,-3 -4.6,-5.2 -4.6,-8.8 A4.6,4.6 0 1 1 4.6,-8.8 C4.6,-5.2 1,-3 0,0Z";

// Línea dorada que se desvanece en las puntas (detalle de los títulos del mockup)
function LineaDorada({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`block h-px bg-linear-to-r from-transparent via-gold to-transparent ${className}`}
    />
  );
}

/*
  "Atendemos en todo el país" (mockup de Emiliano): título centrado, mapa con bordes dorados
  luminosos al centro, lema con balanza a la izquierda y el edificio de fondo a la derecha.
  Al entrar en pantalla, los pines aparecen solos uno tras otro (ver .mapa-pin en globals.css).
*/
export function CoverageMap({
  id,
  contenido,
}: {
  id: string;
  contenido: {
    antetitulo: string;
    titulo: string;
    texto: string;
    lema: string;
    sedeTexto: string;
    fondo: { src: string; alt: string; width: number; height: number };
  };
}) {
  return (
    <section
      aria-labelledby={id}
      className="relative isolate overflow-hidden border-t border-white/10 bg-navy pt-12 pb-16 text-white sm:pt-14 lg:pb-24"
    >
      {/*
        Fondo: la imagen es una franja ancha (lado izquierdo oscuro, edificio a la derecha).
        - Escritorio: casi toda la altura de la sección, para que el cielo quede detrás del título y el edificio a la derecha del mapa.
        - Celular: cubre toda la sección con un velo navy fuerte.
        Arriba se funde con el navy de la sección.
      */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 lg:top-auto lg:h-[94%]"
      >
        <Image
          src={contenido.fondo.src}
          alt=""
          fill
          quality={90}
          sizes="100vw"
          className="object-cover object-[80%_center] lg:object-right-bottom"
        />
        <div className="absolute inset-0 bg-navy/60 lg:bg-navy/5" />
        <div className="absolute inset-0 bg-linear-to-b from-navy/80 via-transparent via-35% to-navy/50" />
      </div>

      <Container>
        {/* Encabezado: aparece de a partes, de abajo hacia arriba (ver .revelar en globals.css) */}
        <RevealOnView className="flex flex-col items-center text-center">
          {/* Antetítulo entre líneas doradas */}
          <div className="revelar flex w-full max-w-3xl items-center gap-4 sm:gap-8">
            <LineaDorada className="flex-1" />
            <p className="font-serif text-xs tracking-[0.25em] text-gold uppercase sm:text-sm">
              {contenido.antetitulo}
            </p>
            <LineaDorada className="flex-1" />
          </div>
          <h2
            id={id}
            className="revelar mt-3 font-serif text-4xl leading-tight text-balance [--retraso:200ms] sm:text-5xl lg:text-6xl"
          >
            {contenido.titulo}
          </h2>
          <p className="revelar mt-3 max-w-xl leading-relaxed text-white/85 [--retraso:500ms] sm:text-lg">
            {contenido.texto}
          </p>
          <span
            aria-hidden="true"
            className="revelar-linea mt-5 block h-px w-20 bg-gold [--retraso:800ms]"
          />
        </RevealOnView>
      </Container>

      <Container className="mt-6">
        <RevealOnView className="grid items-center gap-8 lg:grid-cols-[1fr_auto_1fr]">
          {/* Mapa (columna central) */}
          <div className="lg:col-start-2">
            <svg
              viewBox={viewBox}
              role="img"
              aria-label="Mapa de la República Argentina con sus 23 provincias, la Ciudad Autónoma de Buenos Aires y las Islas Malvinas, con la sede del estudio en La Plata"
              className="mapa-zoom mx-auto h-[min(68svh,40rem)] w-auto max-w-full overflow-visible [--zoom-mapa:1.05] lg:[--zoom-mapa:1.12]"
            >
              <defs>
                <filter
                  id="mapa-brillo"
                  x="-20%"
                  y="-20%"
                  width="140%"
                  height="140%"
                >
                  <feGaussianBlur stdDeviation="3" />
                </filter>
                <linearGradient id="mapa-relleno" x1="0" y1="0" x2="0" y2="1">
                  <stop
                    offset="0"
                    style={{ stopColor: "var(--color-navy-soft)" }}
                  />
                  <stop offset="1" style={{ stopColor: "var(--color-navy)" }} />
                </linearGradient>
                <radialGradient id="mapa-reflejo">
                  <stop
                    offset="0"
                    style={{
                      stopColor: "var(--color-gold-light)",
                      stopOpacity: 0.9,
                    }}
                  />
                  <stop
                    offset="0.4"
                    style={{
                      stopColor: "var(--color-gold)",
                      stopOpacity: 0.35,
                    }}
                  />
                  <stop
                    offset="1"
                    style={{ stopColor: "var(--color-gold)", stopOpacity: 0 }}
                  />
                </radialGradient>
              </defs>

              {/* Halo dorado detrás del contorno */}
              <g
                filter="url(#mapa-brillo)"
                className="fill-none stroke-gold/70"
                strokeWidth="3"
              >
                {provincias.map((p) => (
                  <path key={p.nombre} d={p.d} />
                ))}
              </g>

              {/* Provincias */}
              <g
                fill="url(#mapa-relleno)"
                className="stroke-gold/55"
                strokeWidth="0.6"
              >
                {provincias.map((p) => (
                  <path key={p.nombre} d={p.d}>
                    <title>{p.nombre}</title>
                  </path>
                ))}
              </g>

              {/* Reflejo de luz al pie del mapa */}
              <ellipse
                cx={tierraDelFuego[0]}
                cy={altoMapa}
                rx="70"
                ry="6"
                fill="url(#mapa-reflejo)"
              />

              {pinesProvincias.map((pin, i) => (
                <g
                  key={pin.nombre}
                  transform={`translate(${pin.xy[0]} ${pin.xy[1]})`}
                >
                  <g
                    className="mapa-pin"
                    style={{ "--i": i } as React.CSSProperties}
                  >
                    <path d={formaPin} className="fill-gold" />
                    <circle cy="-8.8" r="1.8" className="fill-gold-light" />
                  </g>
                </g>
              ))}

              {/* Sede: La Plata, pin grande con etiqueta */}
              <g transform={`translate(${laPlata[0]} ${laPlata[1]})`}>
                <circle r="10" className="mapa-pulso fill-gold/30" />
                <g className="mapa-pin-sede" transform="scale(1.9)">
                  <path d={formaPin} className="fill-gold" />
                  <circle cy="-8.8" r="2" className="fill-navy" />
                </g>
                <g transform="translate(14 -22)">
                  <rect
                    width="56"
                    height="20"
                    rx="10"
                    className="fill-navy stroke-gold"
                    strokeWidth="0.8"
                  />
                  <text
                    x="28"
                    y="13.5"
                    textAnchor="middle"
                    className="fill-white font-sans text-[9.5px] font-medium"
                  >
                    {contenido.sedeTexto}
                  </text>
                </g>
              </g>
            </svg>
          </div>

          {/* Lema con balanza (columna izquierda), aparece mientras caen los pines */}
          <div className="revelar flex flex-col items-center gap-4 text-center [--retraso:900ms] lg:col-start-1 lg:row-start-1">
            <div className="flex w-full max-w-xs items-center gap-4">
              <LineaDorada className="flex-1" />
              <Scale
                className="size-10 shrink-0 text-gold"
                strokeWidth={1}
                aria-hidden="true"
              />
              <LineaDorada className="flex-1" />
            </div>
            <p className="max-w-xs font-serif text-base leading-relaxed tracking-[0.2em] text-white/90 uppercase sm:text-lg">
              {contenido.lema}
            </p>
            <LineaDorada className="w-full max-w-xs" />
          </div>
        </RevealOnView>
      </Container>
    </section>
  );
}
