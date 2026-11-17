import { home } from "@/content/home";
import { AreasBands } from "./AreasBands";
import type { SeccionProps } from "./types";

/*
  "Otras áreas" al pie de cada landing: mismo diseño que "Nuestros servicios" del Home (bandas
  horizontales con foto). El título, la intro y los textos de cada área son los de la landing (brief);
  la foto, su encuadre y el antetítulo dorado se toman de la misma área en el Home (home.ts),
  así una foto se cambia en un solo lugar.
*/
export function OtherAreas({ seccion, id }: SeccionProps<"otherAreas">) {
  const items = seccion.items.map((item) => {
    const delHome = home.servicios.items.find((s) => s.slug === item.slug);
    return {
      slug: item.slug,
      titulo: item.titulo,
      texto: item.texto,
      subtitulo: delHome?.subtitulo ?? "",
      imagen: delHome?.imagen,
      encuadre: delHome && "encuadre" in delHome ? delHome.encuadre : undefined,
    };
  });

  return (
    <AreasBands
      id={id}
      titulo={seccion.titulo}
      intro={seccion.intro}
      ctaTexto={home.servicios.ctaTexto}
      items={items}
      className="border-t border-white/10"
    />
  );
}
