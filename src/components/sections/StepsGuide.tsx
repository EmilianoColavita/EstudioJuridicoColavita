import { Container } from "@/components/ui/Container";
import { FondoLuz } from "@/components/ui/FondoLuz";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { retraso } from "@/lib/animaciones";
import { RevealOnView } from "./RevealOnView";
import type { SeccionProps } from "./types";

// Guía de pasos: números grandes en círculos dorados, unidos por una línea en escritorio.
export function StepsGuide({ seccion, id }: SeccionProps<"steps">) {
  return (
    <section
      aria-labelledby={id}
      className="relative isolate overflow-hidden border-t border-white/10 py-16 text-white sm:py-24"
    >
      <FondoLuz luz="derecha" />
      <Container>
        <RevealOnView>
          <div className="revelar">
            <SectionTitle id={id} tone="dark">
              {seccion.titulo}
            </SectionTitle>
          </div>

          <ol className="relative grid gap-12 md:grid-cols-3 md:gap-8">
            {/* Línea que une los pasos (solo escritorio) */}
            <span
              aria-hidden="true"
              className="revelar-linea absolute top-10 right-[16%] left-[16%] hidden h-px bg-gold/40 md:block"
              style={retraso(300)}
            />
            {seccion.pasos.map((paso, i) => (
              <li
                key={paso.titulo}
                className="revelar relative flex flex-col items-center gap-4 text-center"
                style={retraso(200 + i * 250)}
              >
                <span
                  aria-hidden="true"
                  className="flex size-20 items-center justify-center rounded-full border border-gold bg-navy font-serif text-4xl text-gold lining-nums"
                >
                  {i + 1}
                </span>
                <h3 className="font-serif text-xl text-balance">
                  <span className="sr-only">Paso {i + 1}: </span>
                  {paso.titulo}
                </h3>
                <p className="max-w-sm leading-relaxed text-white/70">
                  {paso.texto}
                </p>
              </li>
            ))}
          </ol>
        </RevealOnView>
      </Container>
    </section>
  );
}
