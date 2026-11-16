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

          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {seccion.items.map((item, i) => {
              const Icono = item.icono ?? CircleCheck;
              return (
                <li
                  key={item.titulo}
                  className="revelar group relative isolate flex min-h-72 flex-col justify-end gap-3 overflow-hidden rounded-2xl border border-gold/40 bg-navy-soft/30 p-7 transition-colors hover:border-gold"
                  style={retraso(150 + i * 100)}
                >
                  {item.imagen ? (
                    <div aria-hidden="true" className="absolute inset-0 -z-10">
                      <Image
                        src={item.imagen.src}
                        alt=""
                        fill
                        sizes="(min-width: 1024px) 384px, (min-width: 640px) 50vw, 100vw"
                        className="object-cover saturate-[0.75] transition-transform duration-700 ease-out group-hover:scale-105"
                      />
                      {/* Tono navy parejo + degradado abajo para que el texto se lea */}
                      <div className="absolute inset-0 bg-navy/45 mix-blend-multiply" />
                      <div className="absolute inset-0 bg-linear-to-t from-navy via-navy/75 to-navy/10" />
                    </div>
                  ) : (
                    <span className="mb-auto flex size-14 items-center justify-center rounded-full border border-gold/40 bg-gold/5">
                      <Icono
                        className="size-7 text-gold"
                        strokeWidth={1.25}
                        aria-hidden="true"
                      />
                    </span>
                  )}

                  <span
                    aria-hidden="true"
                    className="block h-px w-10 bg-gold transition-all duration-500 group-hover:w-16"
                  />
                  <h3 className="font-serif text-2xl leading-tight text-balance">
                    {item.titulo}
                  </h3>
                  <p className="leading-relaxed text-white/80">{item.texto}</p>
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
