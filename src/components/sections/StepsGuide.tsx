import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import type { SeccionProps } from "./types";

export function StepsGuide({ seccion, id }: SeccionProps<"steps">) {
  return (
    <section aria-labelledby={id} className="bg-pearl py-16 sm:py-20">
      <Container>
        <SectionTitle id={id} emoji={seccion.emoji}>
          {seccion.titulo}
        </SectionTitle>

        <ol className="grid gap-6 md:grid-cols-3">
          {seccion.pasos.map((paso, i) => (
            <li
              key={paso.titulo}
              className="flex flex-col gap-3 rounded-xl bg-white p-6 sm:p-8"
            >
              <span
                aria-hidden="true"
                className="font-serif text-6xl leading-none text-gold"
              >
                {i + 1}
              </span>
              <h3 className="font-serif text-xl">
                <span className="sr-only">Paso {i + 1}: </span>
                {paso.titulo}
              </h3>
              <p className="text-muted">{paso.texto}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
