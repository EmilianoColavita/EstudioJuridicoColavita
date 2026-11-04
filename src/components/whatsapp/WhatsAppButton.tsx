import { WhatsAppIcon } from "@/components/ui/BrandIcons";
import type { UbicacionWhatsApp } from "@/lib/whatsapp";
import { WhatsAppLink } from "./WhatsAppLink";

const variantes = {
  // Texto navy sobre el verde: el blanco no llega al contraste mínimo
  verde: "bg-whatsapp text-navy hover:brightness-95",
  // Variante de marca (en prueba): dorado con texto navy
  dorado: "bg-gold text-navy hover:brightness-110",
};

export function WhatsAppButton({
  mensaje,
  area,
  ubicacion,
  children,
  variant = "verde",
  className = "",
}: {
  mensaje: string;
  area: string;
  ubicacion: UbicacionWhatsApp;
  children: React.ReactNode;
  variant?: keyof typeof variantes;
  className?: string;
}) {
  return (
    <WhatsAppLink
      mensaje={mensaje}
      area={area}
      ubicacion={ubicacion}
      className={`inline-flex min-h-14 items-center justify-center gap-3 rounded-full px-6 py-3 text-center text-base font-semibold transition ${variantes[variant]} ${className}`}
    >
      <WhatsAppIcon className="size-6 shrink-0" />
      <span className="text-balance">{children}</span>
    </WhatsAppLink>
  );
}
