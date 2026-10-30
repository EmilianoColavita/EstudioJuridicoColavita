import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { areasMenu } from "@/content/areas";
import type { SeccionProps } from "./types";

export function OtherAreas({ seccion, id }: SeccionProps<"otherAreas">) {
  return (
    <section aria-labelledby={id} className="bg-pearl py-16 sm:py-20">
      <Container>
        <SectionTitle id={id} emoji={seccion.emoji}>
          {seccion.titulo}
        </SectionTitle>
        <p className="mx-auto mb-10 max-w-3xl text-center text-lg text-muted">
          {seccion.intro}
        </p>

        <ul className="grid gap-6 md:grid-cols-3">
          {seccion.items.map((item) => {
            const Icono = areasMenu.find((a) => a.slug === item.slug)!.icono;
            return (
              <li key={item.slug}>
                <Link
                  href={`/${item.slug}`}
                  className="group flex h-full flex-col gap-3 rounded-xl border border-transparent bg-white p-6 transition hover:border-gold"
                >
                  <Icono
                    className="size-8 text-gold"
                    strokeWidth={1.25}
                    aria-hidden="true"
                  />
                  <h3 className="font-serif text-xl">{item.titulo}</h3>
                  <p className="flex-1 text-muted">{item.texto}</p>
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-gold-deep">
                    Ver más
                    <ArrowRight
                      className="size-4 transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    />
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
