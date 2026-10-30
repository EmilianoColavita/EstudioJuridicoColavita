import { CircleCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { WhatsAppButton } from "@/components/whatsapp/WhatsAppButton";
import type { SeccionProps } from "./types";

export function FeatureGrid({
  seccion,
  area,
  id,
}: SeccionProps<"featureGrid">) {
  return (
    <section aria-labelledby={id} className="bg-cream py-16 sm:py-20">
      <Container>
        <SectionTitle id={id} emoji={seccion.emoji}>
          {seccion.titulo}
        </SectionTitle>

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {seccion.items.map((item) => {
            const Icono = item.icono ?? CircleCheck;
            return (
              <li
                key={item.titulo}
                className="flex flex-col gap-3 rounded-xl border border-pearl bg-white p-6"
              >
                <Icono
                  className="size-8 text-gold"
                  strokeWidth={1.25}
                  aria-hidden="true"
                />
                <h3 className="font-serif text-xl">{item.titulo}</h3>
                <p className="text-muted">{item.texto}</p>
              </li>
            );
          })}
        </ul>

        {seccion.ctaTexto && (
          <div className="mt-10 flex justify-center">
            <WhatsAppButton
              mensaje={area.whatsappMensaje}
              area={area.slug}
              ubicacion="especialidades"
              className="w-full sm:w-auto"
            >
              {seccion.ctaTexto}
            </WhatsAppButton>
          </div>
        )}
      </Container>
    </section>
  );
}
