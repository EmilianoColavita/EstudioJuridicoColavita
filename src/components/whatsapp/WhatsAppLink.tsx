"use client";

import {
  buildWhatsAppUrl,
  trackWhatsAppClick,
  type UbicacionWhatsApp,
} from "@/lib/whatsapp";

// Único punto de salida a WhatsApp: todo clic pasa por acá para que la conversión se mida.
export function WhatsAppLink({
  mensaje,
  area,
  ubicacion,
  children,
  ...props
}: {
  mensaje: string;
  area: string;
  ubicacion: UbicacionWhatsApp;
  children: React.ReactNode;
  className?: string;
  "aria-label"?: string;
}) {
  return (
    <a
      href={buildWhatsAppUrl(mensaje)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackWhatsAppClick(area, ubicacion)}
      {...props}
    >
      {children}
    </a>
  );
}
