import { Star } from "lucide-react";
import { GoogleIcon } from "@/components/ui/BrandIcons";
import { site } from "@/content/site";

export function GoogleReviewsBadge() {
  const { puntaje, cantidad, url } = site.googleReviews;
  // Solo muestra números si están cargados los valores reales
  const detalle =
    puntaje != null && cantidad != null
      ? `${puntaje.toLocaleString("es-AR", { minimumFractionDigits: 1 })} · ${cantidad} opiniones en La Plata`
      : "Opiniones en La Plata";

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Ver opiniones del estudio en Google Maps: ${detalle}`}
      className="inline-flex items-center gap-3 rounded-full bg-white px-4 py-2 text-sm text-navy shadow-sm transition hover:shadow-md"
    >
      <GoogleIcon className="size-5" />
      <span className="flex gap-0.5" aria-hidden="true">
        {Array.from({ length: 5 }, (_, i) => (
          <Star
            key={i}
            className="size-4 fill-gold text-gold"
            strokeWidth={1}
          />
        ))}
      </span>
      <span className="font-medium">{detalle}</span>
    </a>
  );
}
