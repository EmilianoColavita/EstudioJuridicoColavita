import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AreaIcon, AreaIconDefs } from "@/components/ui/AreaIcons";
import { Container } from "@/components/ui/Container";
import { FondoLuz } from "@/components/ui/FondoLuz";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { retraso } from "@/lib/animaciones";
import { RevealOnView } from "./RevealOnView";
import type { SeccionProps } from "./types";

// Otras áreas del estudio: tarjetas con los íconos dorados del Home.
export function OtherAreas({ seccion, id }: SeccionProps<"otherAreas">) {
  return (
    <section
      aria-labelledby={id}
      className="relative isolate overflow-hidden border-t border-white/10 py-16 text-white sm:py-24"
    >
      <FondoLuz luz="izquierda" />
      <AreaIconDefs />
      <Container>
        <RevealOnView>
          <div className="revelar">
            <SectionTitle id={id} tone="dark">
              {seccion.titulo}
            </SectionTitle>
          </div>
          <p
            className="revelar mx-auto mb-12 max-w-3xl text-center text-lg leading-relaxed text-white/75"
            style={retraso(200)}
          >
            {seccion.intro}
          </p>

          <ul className="grid gap-6 md:grid-cols-3">
            {seccion.items.map((item, i) => (
              <li
                key={item.slug}
                className="revelar"
                style={retraso(350 + i * 120)}
              >
                <Link
                  href={`/${item.slug}`}
                  className="group flex h-full flex-col items-center gap-4 rounded-2xl border border-gold/40 bg-navy-soft/30 px-6 py-8 text-center transition hover:border-gold hover:bg-navy-soft/50"
                >
                  <span className="flex h-24 items-center justify-center">
                    <AreaIcon slug={item.slug} />
                  </span>
                  <GoldDivider className="w-20 bg-gold/60" />
                  <h3 className="font-serif text-2xl leading-tight text-balance">
                    {item.titulo}
                  </h3>
                  <p className="leading-relaxed text-white/70">{item.texto}</p>
                  <span className="mt-auto inline-flex min-h-11 items-center gap-2 rounded-full border border-gold px-7 text-sm font-medium text-gold transition group-hover:bg-gold group-hover:text-navy">
                    Ver más
                    <ArrowRight
                      className="size-4 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </RevealOnView>
      </Container>
    </section>
  );
}
