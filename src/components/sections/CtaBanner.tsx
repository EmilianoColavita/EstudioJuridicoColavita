import { Container } from "@/components/ui/Container";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { WhatsAppButton } from "@/components/whatsapp/WhatsAppButton";
import { site } from "@/content/site";
import type { SeccionProps } from "./types";

export function CtaBanner({ seccion, area }: SeccionProps<"cta">) {
  return (
    <section
      aria-label="Contacto por WhatsApp"
      className="bg-navy py-16 text-white sm:py-20"
    >
      <Container className="flex flex-col items-center gap-6 text-center">
        <GoldDivider />
        <WhatsAppButton
          mensaje={area.whatsappMensaje}
          area={area.slug}
          ubicacion="cierre"
          className="w-full max-w-xl text-lg"
        >
          {seccion.ctaTexto}
        </WhatsAppButton>
        <p className="text-sm text-white/70">
          {site.abogado.nombre} ·{" "}
          <span className="text-gold">{site.abogado.matricula}</span>
        </p>
      </Container>
    </section>
  );
}
