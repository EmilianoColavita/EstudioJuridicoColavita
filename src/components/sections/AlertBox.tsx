import { OctagonAlert, TriangleAlert } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { retraso } from "@/lib/animaciones";
import { RevealOnView } from "./RevealOnView";
import type { SeccionProps } from "./types";

// Alerta "No firmes nada": la única caja clara sobre el fondo oscuro, para que corte la lectura.
export function AlertBox({ seccion, id }: SeccionProps<"alert">) {
  return (
    <section
      aria-labelledby={id}
      className="border-t border-white/10 bg-navy py-16 sm:py-24"
    >
      <Container>
        <RevealOnView>
          <div
            role="note"
            className="revelar mx-auto max-w-4xl rounded-3xl border-t-4 border-alert bg-alert-bg p-6 text-navy sm:p-12"
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
              <span className="flex size-14 shrink-0 items-center justify-center rounded-full bg-alert/10">
                <TriangleAlert
                  className="size-8 text-alert"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </span>
              <div>
                <h2
                  id={id}
                  className="font-serif text-2xl leading-tight text-balance text-alert sm:text-3xl"
                >
                  {seccion.titulo}
                </h2>
                <p className="mt-4 text-lg leading-relaxed">{seccion.intro}</p>
              </div>
            </div>

            <ul className="mt-8 flex flex-col gap-5 sm:pl-[4.5rem]">
              {seccion.items.map((item, i) => (
                <li
                  key={item.titulo}
                  className="revelar flex gap-3"
                  style={retraso(300 + i * 150)}
                >
                  <OctagonAlert
                    className="mt-0.5 size-5 shrink-0 text-alert"
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                  <p className="leading-relaxed">
                    <strong className="font-semibold text-alert">
                      {item.titulo}:
                    </strong>{" "}
                    {item.texto}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </RevealOnView>
      </Container>
    </section>
  );
}
