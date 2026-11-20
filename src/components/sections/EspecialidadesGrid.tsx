import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import type { AreaSlug } from "@/content/areas";
import type { Imagen } from "@/content/site";
import { retraso } from "@/lib/animaciones";
import { RevealOnView } from "./RevealOnView";

type Especialidad = {
  texto: string;
  icono: LucideIcon;
  slug?: AreaSlug;
  imagen: Imagen;
  encuadre?: string;
};

/*
  Especialidades del Dr. como tarjetas con foto de fondo (velo navy de abajo hacia arriba),
  ícono dorado y título. Las que tienen landing son links ("Ver el área →").
  Centradas: 3 arriba y 2 abajo en escritorio.
*/
export function EspecialidadesGrid({
  id,
  titulo,
  items,
}: {
  id: string;
  titulo: string;
  items: Especialidad[];
}) {
  return (
    <section
      aria-labelledby={id}
      className="border-t border-white/10 bg-navy py-16 text-white sm:py-24"
    >
      <Container>
        <RevealOnView>
          <div className="revelar">
            <SectionTitle id={id} tone="dark">
              {titulo}
            </SectionTitle>
          </div>

          <ul className="flex flex-wrap justify-center gap-5">
            {items.map(({ texto, icono: Icono, slug, imagen, encuadre }, i) => {
              const interior = (
                <>
                  <Image
                    src={imagen.src}
                    alt=""
                    fill
                    sizes="(min-width: 1024px) 380px, (min-width: 640px) 50vw, 100vw"
                    className="-z-20 object-cover opacity-70 transition duration-700 group-hover:scale-105 group-hover:opacity-85"
                    style={encuadre ? { objectPosition: encuadre } : undefined}
                  />
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 -z-10 bg-linear-to-t from-navy-deep via-navy-deep/70 to-navy-deep/10"
                  />
                  <span className="flex size-12 items-center justify-center rounded-full border border-gold/60 bg-navy-deep/60 backdrop-blur-sm transition-colors group-hover:border-gold">
                    <Icono
                      className="size-6 text-gold"
                      strokeWidth={1.25}
                      aria-hidden="true"
                    />
                  </span>
                  <h3 className="font-serif text-xl text-balance sm:text-2xl">
                    {texto}
                  </h3>
                  {slug && (
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-gold">
                      Ver el área
                      <ArrowRight
                        className="size-4 transition-transform group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </span>
                  )}
                </>
              );
              const clases =
                "group relative isolate flex aspect-[4/3] h-full flex-col items-start justify-end gap-3 overflow-hidden rounded-2xl border border-gold/40 p-6";
              return (
                <li
                  key={texto}
                  className="revelar w-full sm:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-0.834rem)]"
                  style={retraso(150 + i * 100)}
                >
                  {slug ? (
                    <Link
                      href={`/${slug}`}
                      className={`${clases} transition-colors hover:border-gold`}
                    >
                      {interior}
                    </Link>
                  ) : (
                    <div className={clases}>{interior}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </RevealOnView>
      </Container>
    </section>
  );
}
