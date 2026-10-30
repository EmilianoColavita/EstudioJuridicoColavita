import { site } from "@/content/site";

export type UbicacionWhatsApp =
  "hero" | "flotante" | "especialidades" | "cierre" | "footer";

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function buildWhatsAppUrl(mensaje: string) {
  return `https://wa.me/${site.whatsapp.numero}?text=${encodeURIComponent(mensaje)}`;
}

// Conversión de Google Ads: GTM escucha este evento (paso 8)
export function trackWhatsAppClick(area: string, ubicacion: UbicacionWhatsApp) {
  window.dataLayer?.push({ event: "whatsapp_click", area, ubicacion });
}
