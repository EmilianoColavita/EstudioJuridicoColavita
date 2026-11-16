import { Container } from "@/components/ui/Container";
import { FondoLuz } from "@/components/ui/FondoLuz";
import { WhatsAppButton } from "@/components/whatsapp/WhatsAppButton";
import { retraso } from "@/lib/animaciones";
import { site } from "@/content/site";
import { RevealOnView } from "./RevealOnView";
import type { SeccionProps } from "./types";

// Cierre de la landing: el CTA de WhatsApp como protagonista, con luz centrada detrás.
export function CtaBanner({ seccion, area }: SeccionProps<"cta">) {
  return (
    <section
      aria-label="Contacto por WhatsApp"
      className="relative isolate overflow-hidden border-t border-white/10 py-20 text-white sm:py-28"
    >
      <FondoLuz luz="centro" />
      <Container>
        <RevealOnView className="flex flex-col items-center gap-8 text-center">
          <div className="revelar flex w-full max-w-md items-center gap-4">
            <span
              aria-hidden="true"
              className="h-px flex-1 bg-linear-to-r from-transparent to-gold"
            />
            <span className="font-serif text-sm tracking-[0.25em] text-gold uppercase">
              {site.nombre}
            </span>
            <span
              aria-hidden="true"
              className="h-px flex-1 bg-linear-to-l from-transparent to-gold"
            />
          </div>
          <div className="revelar w-full max-w-xl" style={retraso(200)}>
            <WhatsAppButton
              mensaje={area.whatsappMensaje}
              area={area.slug}
              ubicacion="cierre"
              className="w-full text-lg"
            >
              {seccion.ctaTexto}
            </WhatsAppButton>
          </div>
          <p
            className="revelar font-serif text-white/80 italic"
            style={retraso(400)}
          >
            {site.abogado.nombre} ·{" "}
            <span className="text-gold">{site.abogado.matricula}</span>
          </p>
        </RevealOnView>
      </Container>
    </section>
  );
}
