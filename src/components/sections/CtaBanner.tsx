import { CierreWhatsApp } from "./CierreWhatsApp";
import type { SeccionProps } from "./types";

// Cierre de las landings: firma del Dr. + botón de WhatsApp con el mensaje del área.
export function CtaBanner({ seccion, area }: SeccionProps<"cta">) {
  return (
    <CierreWhatsApp
      ctaTexto={seccion.ctaTexto}
      mensaje={area.whatsappMensaje}
      area={area.slug}
    />
  );
}
