import Image from "next/image";
import { CircleCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { WhatsAppButton } from "@/components/whatsapp/WhatsAppButton";
import { retraso } from "@/lib/animaciones";
import { RevealOnView } from "./RevealOnView";
import type { SeccionProps } from "./types";

/*
  Cuadrícula de tarjetas (ej. "Especialistas en todo tipo de accidentes").
  Con imagen: la foto de fondo, teñida de navy, y el texto abajo sobre un degradado.
  Sin imagen: tarjeta navy con el ícono en un círculo dorado.
*/
export function FeatureGrid({
  seccion,
  area,
  id,
}: SeccionProps<"featureGrid">) {
  const dosColumnas = seccion.items.length === 4;
  return (
    <section
      aria-labelledby={id}
      className="border-t border-white/10 bg-navy py-16 text-white sm:py-24"
    >
      <Container>
        <RevealOnView>
          <div className="revelar">
            <SectionTitle id={id} tone="dark">
              {seccion.titulo}
            </SectionTitle>
          </div>

          {/* 4 tarjetas: 2×2 (en 3 columnas quedaría una sola abajo); el resto, 3 columnas */}
          <ul
            className={`grid gap-5 sm:grid-cols-2 ${dosColumnas ? "" : "lg:grid-cols-3"}`}
          >
            {seccion.items.map((item, i) => {
              const Icono = item.icono ?? CircleCheck;
              return (
                <li
                  key={item.titulo}
                  className="revelar group relative isolate flex min-h-84 flex-col overflow-hidden rounded-2xl border border-gold/40 bg-navy-soft/30 p-7 transition-colors hover:border-gold"
                  style={retraso(150 + i * 100)}
                >
                  {item.imagen ? (
                    <div aria-hidden="true" className="absolute inset-0 -z-10">
                      <Image
                        src={item.imagen.src}
                        alt=""
                        fill
                        quality={85}
                        // Ancho real de la tarjeta según las columnas (si se subestima, la foto se pixela)
                        sizes={
                          dosColumnas
                            ? "(min-width: 1024px) 560px, (min-width: 640px) 50vw, 100vw"
                            : "(min-width: 1024px) 384px, (min-width: 640px) 50vw, 100vw"
                        }
                        className={`object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${
                          seccion.atenuarImagenes
                            ? "brightness-95 saturate-[0.85]"
                            : "brightness-110 saturate-[0.9]"
                        }`}
                      />
                      {/* Tono navy parejo + degradado abajo para que el texto se lea */}
                      <div
                        className={`absolute inset-0 mix-blend-multiply ${seccion.atenuarImagenes ? "bg-navy/35" : "bg-navy/20"}`}
                      />
                      <div className="absolute inset-0 bg-linear-to-t from-navy via-navy/55 via-45% to-transparent" />
                    </div>
                  ) : (
                    <span className="flex size-14 items-center justify-center rounded-full border border-gold/40 bg-gold/5">
                      <Icono
                        className="size-7 text-gold"
                        strokeWidth={1.25}
                        aria-hidden="true"
                      />
                    </span>
                  )}

                  {/*
                    Bloque de texto de alto fijo y alineado arriba: en cada fila, la línea, el título y la
                    descripción arrancan a la misma altura aunque los textos tengan largos distintos.
                  */}
                  <div className="mt-auto flex min-h-52 flex-col gap-3 pt-6">
                    <span
                      aria-hidden="true"
                      className="block h-px w-10 bg-gold transition-all duration-500 group-hover:w-16"
                    />
                    <h3 className="font-serif text-2xl leading-tight text-balance">
                      {item.titulo}
                    </h3>
                    <p className="leading-relaxed text-white/80">
                      {item.texto}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>

          {seccion.ctaTexto && (
            <div
              className="revelar mt-12 flex justify-center"
              style={retraso(150 + seccion.items.length * 100)}
            >
              <WhatsAppButton
                mensaje={area.whatsappMensaje}
                area={area.slug}
                ubicacion="especialidades"
                className="w-full sm:w-auto"
              >
                {seccion.ctaTexto}
              </WhatsAppButton>
            </div>
          )}
        </RevealOnView>
      </Container>
    </section>
  );
}
