import { WhatsAppIcon } from "@/components/ui/BrandIcons";
import type { UbicacionWhatsApp } from "@/lib/whatsapp";
import { WhatsAppLink } from "./WhatsAppLink";

export function WhatsAppButton({
  mensaje,
  area,
  ubicacion,
  children,
  className = "",
}: {
  mensaje: string;
  area: string;
  ubicacion: UbicacionWhatsApp;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <WhatsAppLink
      mensaje={mensaje}
      area={area}
      ubicacion={ubicacion}
      // Texto navy sobre el verde: el blanco no llega al contraste mínimo
      className={`inline-flex min-h-14 items-center justify-center gap-3 rounded-full bg-whatsapp px-6 py-3 text-center text-base font-semibold text-navy transition hover:brightness-95 ${className}`}
    >
      <WhatsAppIcon className="size-6 shrink-0" />
      <span className="text-balance">{children}</span>
    </WhatsAppLink>
  );
}
