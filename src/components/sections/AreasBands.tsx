import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AreaIcon, AreaIconDefs } from "@/components/ui/AreaIcons";
import { Container } from "@/components/ui/Container";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { SectionTitle } from "@/components/ui/SectionTitle";
import type { AreaSlug } from "@/content/areas";
import type { Imagen } from "@/content/site";

type ItemArea = {
  slug: AreaSlug;
  titulo: string;
  subtitulo: string;
  texto: string;
  imagen?: Imagen;
  /** Encuadre de la foto (CSS object-position), por defecto centrado */
  encuadre?: string;
};

/*
  Las 4 áreas del Home en bandas a todo el ancho: foto con corte diagonal de un lado y texto del otro,
  alternando lados. Todas las bandas tienen la misma altura y estructura (igual peso visual, pedido del brief).
  Lado del texto en navy con texto blanco; la foto lleva un velo navy para unificar el tono con la paleta.
  Sin foto cargada, el lado de la imagen muestra el ícono dorado del área.
*/
export function AreasBands({
  id,
  titulo,
  ctaTexto,
  items,
}: {
  id: string;
  titulo: string;
  ctaTexto: string;
  items: ItemArea[];
}) {
  return (
    <section aria-labelledby={id} className="bg-navy pt-16 text-white sm:pt-20">
      <AreaIconDefs />
      <Container>
        <SectionTitle id={id} tone="dark">
          {titulo}
        </SectionTitle>
      </Container>

      <ul>
        {items.map((item, i) => {
          const fotoALaDerecha = i % 2 === 1;
          return (
            <li
              key={item.slug}
              className={`flex flex-col ${fotoALaDerecha ? "bg-navy-soft/35 lg:flex-row-reverse" : "bg-navy lg:flex-row"}`}
            >
              {/* Lado de la foto: diagonal hacia el texto (abajo en celular, al costado en escritorio) */}
              <div
                className={`relative h-56 shrink-0 overflow-hidden [clip-path:polygon(0_0,100%_0,100%_85%,0_100%)] sm:h-72 lg:h-auto lg:min-h-[24rem] lg:w-[55%] ${
                  fotoALaDerecha
                    ? "lg:[clip-path:polygon(18%_0,100%_0,100%_100%,0_100%)]"
                    : "lg:[clip-path:polygon(0_0,100%_0,82%_100%,0_100%)]"
                }`}
              >
                {item.imagen ? (
                  <>
                    <Image
                      src={item.imagen.src}
                      alt={item.imagen.alt}
                      fill
                      sizes="(min-width: 1024px) 55vw, 100vw"
                      className="object-cover saturate-[0.8]"
                      style={{ objectPosition: item.encuadre }}
                    />
                    {/* Velo navy: tiñe la foto de azul */}
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-navy/45 mix-blend-multiply"
                    />
                    <div
                      aria-hidden="true"
                      className="absolute inset-0 bg-navy/15"
                    />
                  </>
                ) : (
                  // TODO: reemplazar por la foto del área cuando llegue (ver home.ts)
                  <div
                    className={`flex h-full items-center justify-center bg-navy bg-[radial-gradient(circle_at_center,var(--color-navy-soft),transparent_70%)] pb-6 lg:pb-0 [&_svg]:h-32 [&_svg]:w-auto lg:[&_svg]:h-40 ${
                      fotoALaDerecha ? "lg:pl-[12%]" : "lg:pr-[12%]"
                    }`}
                  >
                    <AreaIcon slug={item.slug} />
                  </div>
                )}
              </div>

              {/* Lado del texto */}
              <div className="flex flex-1 items-center px-4 py-10 sm:px-10 lg:px-16 lg:py-16">
                <div className="flex max-w-lg flex-col items-start gap-4">
                  <p className="text-sm font-semibold tracking-[0.12em] text-gold uppercase">
                    {item.subtitulo}
                  </p>
                  <h3 className="font-serif text-3xl leading-tight text-balance text-white sm:text-4xl">
                    {item.titulo}
                  </h3>
                  <GoldDivider />
                  <p className="text-lg leading-relaxed text-white/75">
                    {item.texto}
                  </p>
                  <Link
                    href={`/${item.slug}`}
                    className="group mt-2 inline-flex min-h-12 items-center gap-3 rounded-full border border-gold px-7 text-sm font-medium text-gold transition-colors hover:bg-gold hover:text-navy"
                  >
                    {ctaTexto}
                    <span className="sr-only">sobre {item.titulo}</span>
                    <ArrowRight
                      className="size-4 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
