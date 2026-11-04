import { CircleCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { RichText } from "@/lib/rich-text";
import type { SeccionProps } from "./types";

export function HookBox({ seccion, id }: SeccionProps<"hook">) {
  return (
    <section aria-labelledby={id} className="bg-cream py-16 sm:py-20">
      <Container>
        <div className="mx-auto max-w-4xl rounded-2xl border-l-4 border-gold bg-pearl p-6 sm:p-12">
          <h2
            id={id}
            className="font-serif text-3xl leading-tight text-balance sm:text-4xl"
          >
            {seccion.emoji && (
              <span aria-hidden="true" className="mr-2">
                {seccion.emoji}
              </span>
            )}
            {seccion.titulo}
          </h2>
          <GoldDivider className="my-6" />
          {seccion.intro && (
            <p className="text-lg">
              <RichText text={seccion.intro} />
            </p>
          )}

          <ul className="mt-8 grid gap-6 md:grid-cols-3">
            {seccion.items.map((item) => {
              const Icono = item.icono ?? CircleCheck;
              return (
                <li key={item.titulo} className="flex flex-col gap-2">
                  <Icono
                    className="size-7 text-gold-deep"
                    strokeWidth={1.25}
                    aria-hidden="true"
                  />
                  <h3 className="font-serif text-lg">{item.titulo}</h3>
                  <p className="text-muted">{item.texto}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </Container>
    </section>
  );
}
