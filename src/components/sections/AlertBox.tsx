import { OctagonAlert, TriangleAlert } from "lucide-react";
import { Container } from "@/components/ui/Container";
import type { SeccionProps } from "./types";

export function AlertBox({ seccion, id }: SeccionProps<"alert">) {
  return (
    <section aria-labelledby={id} className="bg-cream py-16 sm:py-20">
      <Container>
        <div
          role="note"
          className="mx-auto max-w-4xl rounded-2xl border-t-4 border-alert bg-alert-bg p-6 sm:p-12"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
            <TriangleAlert
              className="size-10 shrink-0 text-alert"
              strokeWidth={1.5}
              aria-hidden="true"
            />
            <div>
              <h2
                id={id}
                className="font-serif text-2xl leading-tight text-alert sm:text-3xl"
              >
                {seccion.emoji && (
                  <span aria-hidden="true" className="mr-2">
                    {seccion.emoji}
                  </span>
                )}
                {seccion.titulo}
              </h2>
              <p className="mt-4 text-lg">{seccion.intro}</p>
            </div>
          </div>

          <ul className="mt-8 flex flex-col gap-5">
            {seccion.items.map((item) => (
              <li key={item.titulo} className="flex gap-3">
                <OctagonAlert
                  className="mt-0.5 size-5 shrink-0 text-alert"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <p>
                  <strong className="font-semibold text-alert">
                    {item.titulo}:
                  </strong>{" "}
                  {item.texto}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
