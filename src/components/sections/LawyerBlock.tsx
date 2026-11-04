import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { ArrowRight, Scale } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { site } from "@/content/site";

const { abogado } = site;

// Bloque del Dr. Colavita en el Home: foto + bio en dos columnas, sobre navy (mockup de Emiliano).
export function LawyerBlock({
  id,
  contenido,
}: {
  id: string;
  contenido: {
    antetitulo: string;
    parrafos: string[];
    especialidadesTitulo: string;
    especialidades: { texto: string; icono: LucideIcon }[];
    ctaTexto: string;
    ctaHref: string;
  };
}) {
  return (
    <section
      aria-labelledby={id}
      className="relative isolate overflow-hidden bg-navy text-white"
    >
      {/* Balanza de marca de agua, solo decorativa */}
      <Scale
        aria-hidden="true"
        strokeWidth={0.6}
        className="pointer-events-none absolute top-1/2 -right-24 -z-10 hidden size-[30rem] -translate-y-1/2 text-white/[0.04] lg:block"
      />

      <Container>
        <div className="grid items-center gap-12 border-t border-white/10 py-16 sm:py-24 lg:grid-cols-[5fr_7fr] lg:gap-16">
          {/* Foto con borde dorado fino */}
          <div className="mx-auto w-full max-w-sm overflow-hidden rounded-2xl border border-gold lg:max-w-none">
            <Image
              src={abogado.fotoEstudio.src}
              alt={abogado.fotoEstudio.alt}
              width={abogado.fotoEstudio.width}
              height={abogado.fotoEstudio.height}
              quality={90}
              sizes="(min-width: 1024px) 440px, (min-width: 640px) 384px, 100vw"
              className="aspect-[3/4] w-full object-cover object-[50%_15%]"
            />
          </div>

          <div>
            <span aria-hidden="true" className="block h-px w-20 bg-gold" />
            <p className="mt-5 text-xs font-semibold tracking-[0.16em] text-gold uppercase">
              {contenido.antetitulo}
            </p>
            <h2
              id={id}
              className="mt-3 font-serif text-3xl leading-tight text-balance sm:text-4xl lg:text-5xl"
            >
              {abogado.nombre}
            </h2>
            <p className="mt-3 font-serif text-lg text-gold italic sm:text-xl">
              {abogado.titulos} · {abogado.matricula}
            </p>

            <div className="mt-7 flex flex-col gap-4 leading-relaxed text-white/80">
              {contenido.parrafos.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>

            {/* "Especialista en" entre líneas doradas */}
            <div className="mt-10 mb-5 flex items-center gap-4">
              <span aria-hidden="true" className="h-px w-10 bg-gold/70" />
              <h3 className="font-serif text-2xl text-gold">
                {contenido.especialidadesTitulo}
              </h3>
              <span aria-hidden="true" className="h-px flex-1 bg-gold/30" />
            </div>
            <ul className="flex flex-wrap gap-2.5">
              {contenido.especialidades.map(({ texto, icono: Icono }) => (
                <li
                  key={texto}
                  className="inline-flex items-center gap-2 rounded-full border border-gold/45 bg-white/[0.03] py-1.5 pr-4 pl-3 text-sm text-white/90"
                >
                  <Icono
                    className="size-4 shrink-0 text-gold"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                  {texto}
                </li>
              ))}
            </ul>

            <Link
              href={contenido.ctaHref}
              className="group mt-10 inline-flex min-h-12 items-center gap-3 rounded-full border border-gold px-7 text-sm font-medium text-gold transition hover:bg-gold hover:text-navy"
            >
              {contenido.ctaTexto}
              <ArrowRight
                className="size-4 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
