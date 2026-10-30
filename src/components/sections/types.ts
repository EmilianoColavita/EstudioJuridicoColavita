import type { Area, Seccion } from "@/content/areas";

// Props comunes: los datos de la sección + el área (para el mensaje de WhatsApp y el tracking)
export type SeccionProps<T extends Seccion["tipo"]> = {
  seccion: Extract<Seccion, { tipo: T }>;
  area: Area;
  id: string;
};
