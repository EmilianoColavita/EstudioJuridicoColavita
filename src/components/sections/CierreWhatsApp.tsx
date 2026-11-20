import { LawyerCard } from "@/components/trust/LawyerCard";
import { Container } from "@/components/ui/Container";
import { FondoLuz } from "@/components/ui/FondoLuz";
import { WhatsAppButton } from "@/components/whatsapp/WhatsAppButton";
import { retraso } from "@/lib/animaciones";
import { site } from "@/content/site";
import { RevealOnView } from "./RevealOnView";

/*
  Cierre de página, centrado sobre fondo con luz:
  nombre del estudio entre líneas doradas → firma del Dr. (avatar + datos) → botón de WhatsApp.
  Lo usan las landings (vía CtaBanner) y las páginas institucionales.
*/
export function CierreWhatsApp({
  ctaTexto,
  mensaje,
  area,
}: {
  ctaTexto: string;
  mensaje: string;
  /** Para el evento whatsapp_click (slug del área o "general") */
  area: string;
}) {
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

          <div className="revelar" style={retraso(200)}>
            <LawyerCard variant="firma" />
          </div>

          <div className="revelar w-full max-w-xl" style={retraso(400)}>
            <WhatsAppButton
              mensaje={mensaje}
              area={area}
              ubicacion="cierre"
              className="w-full text-lg"
            >
              {ctaTexto}
            </WhatsAppButton>
          </div>
        </RevealOnView>
      </Container>
    </section>
  );
}
