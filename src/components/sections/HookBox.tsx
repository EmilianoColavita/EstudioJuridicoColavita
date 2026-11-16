import { CircleCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FondoLuz } from "@/components/ui/FondoLuz";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { retraso } from "@/lib/animaciones";
import { RichText } from "@/lib/rich-text";
import { RevealOnView } from "./RevealOnView";
import type { SeccionProps } from "./types";

// Gancho destacado (ej. "Si vos no cobrás, nosotros no cobramos"): panel con borde dorado sobre fondo con luz.
export function HookBox({ seccion, id }: SeccionProps<"hook">) {
  return (
    <section
      aria-labelledby={id}
      className="relative isolate overflow-hidden border-t border-white/10 py-16 text-white sm:py-24"
    >
      <FondoLuz luz="centro" />
      <Container>
        <RevealOnView className="mx-auto max-w-5xl rounded-3xl border border-gold/40 bg-navy/50 px-6 py-10 text-center sm:px-14 sm:py-14">
          <h2
            id={id}
            className="revelar font-serif text-3xl leading-tight text-balance sm:text-5xl"
          >
            {seccion.titulo}
          </h2>
          <GoldDivider
            className="revelar-linea mx-auto my-7"
            style={retraso(250)}
          />
          {seccion.intro && (
            <p
              className="revelar mx-auto max-w-2xl text-lg leading-relaxed text-white/80 [&_strong]:text-gold"
              style={retraso(350)}
            >
              <RichText text={seccion.intro} />
            </p>
          )}

          <ul className="mt-12 grid gap-8 md:grid-cols-3 md:gap-6">
            {seccion.items.map((item, i) => {
              const Icono = item.icono ?? CircleCheck;
              return (
                <li
                  key={item.titulo}
                  className="revelar flex flex-col items-center gap-3"
                  style={retraso(500 + i * 150)}
                >
                  <span className="flex size-16 items-center justify-center rounded-full border border-gold/50 bg-gold/10">
                    <Icono
                      className="size-7 text-gold"
                      strokeWidth={1.25}
                      aria-hidden="true"
                    />
                  </span>
                  <h3 className="font-serif text-xl text-balance">
                    {item.titulo}
                  </h3>
                  <p className="max-w-xs leading-relaxed text-white/70">
                    {item.texto}
                  </p>
                </li>
              );
            })}
          </ul>
        </RevealOnView>
      </Container>
    </section>
  );
}
