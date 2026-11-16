import Image from "next/image";
import { CircleCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { LawyerCard } from "@/components/trust/LawyerCard";
import { retraso } from "@/lib/animaciones";
import { RevealOnView } from "./RevealOnView";
import type { SeccionProps } from "./types";

const fondo = "/images/fondo-edificio-tribunales.jpg";

// Muro de autoridad: fondo con el edificio de tribunales, tarjetas y logos de aseguradoras en escala de grises.
export function AuthorityWall({ seccion, id }: SeccionProps<"authorityWall">) {
  return (
    <section
      aria-labelledby={id}
      className="relative isolate overflow-hidden border-t border-white/10 bg-navy py-16 text-white sm:py-24"
    >
      <div aria-hidden="true" className="absolute inset-0 -z-10">
        <Image
          src={fondo}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-right"
        />
        <div className="absolute inset-0 bg-navy/80" />
        <div className="absolute inset-0 bg-linear-to-b from-navy via-transparent to-navy" />
      </div>

      <Container>
        <RevealOnView>
          <div className="revelar">
            <SectionTitle id={id} tone="dark">
              {seccion.titulo}
            </SectionTitle>
          </div>
          <p
            className="revelar mx-auto max-w-3xl text-center text-lg leading-relaxed text-white/80"
            style={retraso(200)}
          >
            {seccion.intro}
          </p>

          <ul className="mt-12 grid gap-5 md:grid-cols-3">
            {seccion.items.map((item, i) => {
              const Icono = item.icono ?? CircleCheck;
              return (
                <li
                  key={item.titulo}
                  className="revelar flex flex-col gap-4 rounded-2xl border border-gold/40 bg-navy/60 p-7"
                  style={retraso(350 + i * 120)}
                >
                  <span className="flex size-14 items-center justify-center rounded-full border border-gold/40 bg-gold/5">
                    <Icono
                      className="size-7 text-gold"
                      strokeWidth={1.25}
                      aria-hidden="true"
                    />
                  </span>
                  <h3 className="font-serif text-xl">{item.titulo}</h3>
                  <p className="leading-relaxed text-white/75">{item.texto}</p>
                </li>
              );
            })}
          </ul>

          {/* Logos a la izquierda y el Dr. a la derecha, señalándolos ("nos enfrentamos a ellas") */}
          <div className="mt-14 grid items-center gap-10 lg:grid-cols-[1fr_360px] lg:gap-6">
            {/* Acepta una imagen con los logos o, si no hay permiso de uso, los nombres en texto */}
            <div className="revelar" style={retraso(800)}>
              {seccion.imagenLogos ? (
                // Versión con fondo transparente y logos claros (generada desde logos-aseguradoras.jpg)
                <Image
                  src={seccion.imagenLogos.src}
                  alt={seccion.imagenLogos.alt}
                  width={seccion.imagenLogos.width}
                  height={seccion.imagenLogos.height}
                  sizes="(min-width: 1024px) 672px, 100vw"
                  className="mx-auto w-full max-w-2xl opacity-85 lg:mx-0 lg:ml-auto"
                />
              ) : (
                <ul className="flex flex-wrap justify-center gap-3">
                  {seccion.aseguradoras.map((nombre) => (
                    <li
                      key={nombre}
                      className="rounded-full border border-white/20 px-4 py-2 text-sm text-white/70"
                    >
                      {nombre}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Apoyado en la base de la sección (compensa el padding inferior); solo escritorio */}
            <div
              className="revelar-der hidden lg:-mb-24 lg:block lg:self-end"
              style={retraso(600)}
            >
              <LawyerCard />
            </div>
          </div>
        </RevealOnView>
      </Container>
    </section>
  );
}
