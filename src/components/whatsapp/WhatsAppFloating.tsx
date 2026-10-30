import { WhatsAppIcon } from "@/components/ui/BrandIcons";
import { WhatsAppLink } from "./WhatsAppLink";

// Solo en celular: en escritorio el CTA ya está visible en el hero.
// Va en cada página (no en el layout) porque el mensaje depende del área.
export function WhatsAppFloating({
  mensaje,
  area,
}: {
  mensaje: string;
  area: string;
}) {
  return (
    <WhatsAppLink
      mensaje={mensaje}
      area={area}
      ubicacion="flotante"
      aria-label="Escribinos por WhatsApp"
      className="fixed right-4 bottom-4 z-40 flex size-14 items-center justify-center rounded-full bg-whatsapp text-navy shadow-lg shadow-navy/20 md:hidden"
    >
      <WhatsAppIcon className="size-7" />
    </WhatsAppLink>
  );
}
