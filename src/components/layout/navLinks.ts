import { areasMenu } from "@/content/areas";

export const navLinks = [
  ...areasMenu.map((a) => ({ href: `/${a.slug}`, label: a.nombre })),
  { href: "/quienes-somos", label: "Quiénes somos" },
  { href: "/publicaciones", label: "Publicaciones" },
];
