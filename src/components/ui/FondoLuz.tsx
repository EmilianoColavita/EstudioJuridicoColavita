/*
  Fondo con efecto de luz para secciones oscuras: un resplandor cálido que se va apagando
  hacia la zona opuesta, más oscura (navy-deep). Va dentro de una <section> con
  `relative isolate overflow-hidden` y se ubica detrás del contenido (-z-10).
*/
const variantes = {
  // Luz arriba a la izquierda, sombra abajo a la derecha (bloque del Dr. en el Home)
  izquierda: {
    base: "bg-linear-to-br from-navy-soft via-navy to-navy-deep",
    halo: "bg-[radial-gradient(ellipse_60%_55%_at_22%_40%,color-mix(in_srgb,var(--color-gold)_16%,transparent),transparent_70%)]",
    foco: "bg-[radial-gradient(ellipse_45%_35%_at_30%_0%,color-mix(in_srgb,white_8%,transparent),transparent_75%)]",
  },
  // Luz arriba a la derecha, sombra abajo a la izquierda
  derecha: {
    base: "bg-linear-to-bl from-navy-soft via-navy to-navy-deep",
    halo: "bg-[radial-gradient(ellipse_60%_55%_at_78%_40%,color-mix(in_srgb,var(--color-gold)_14%,transparent),transparent_70%)]",
    foco: "bg-[radial-gradient(ellipse_45%_35%_at_70%_0%,color-mix(in_srgb,white_8%,transparent),transparent_75%)]",
  },
  // Luz centrada desde arriba, bordes oscuros (bloques destacados y cierres)
  centro: {
    base: "bg-linear-to-b from-navy-soft via-navy to-navy-deep",
    halo: "bg-[radial-gradient(ellipse_55%_60%_at_50%_45%,color-mix(in_srgb,var(--color-gold)_14%,transparent),transparent_70%)]",
    foco: "bg-[radial-gradient(ellipse_50%_30%_at_50%_0%,color-mix(in_srgb,white_8%,transparent),transparent_75%)]",
  },
};

export function FondoLuz({
  luz = "izquierda",
}: {
  luz?: keyof typeof variantes;
}) {
  const v = variantes[luz];
  return (
    <div aria-hidden="true" className="absolute inset-0 -z-10">
      <div className={`absolute inset-0 ${v.base}`} />
      <div className={`absolute inset-0 ${v.halo}`} />
      <div className={`absolute inset-0 ${v.foco}`} />
    </div>
  );
}
