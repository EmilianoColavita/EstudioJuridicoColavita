import Image from "next/image";
import { site } from "@/content/site";

const { abogado } = site;

/*
  Retrato del Dr. (WebP recortado con transparencia).
  - "full": solo la persona, señalando hacia la izquierda (en las landings, hacia los logos de aseguradoras
    del muro de autoridad). La base se desvanece y ahí van el nombre y la matrícula.
  - "compact": avatar redondo con nombre y matrícula (hero de las landings).
*/
export function LawyerCard({
  variant = "full",
}: {
  variant?: "full" | "compact";
}) {
  const { retrato } = abogado;

  if (variant === "compact") {
    return (
      <div className="flex items-center gap-3">
        <span className="relative size-14 shrink-0 overflow-hidden rounded-full border-2 border-gold bg-navy-soft">
          <Image
            src={retrato.src}
            alt={retrato.alt}
            fill
            sizes="56px"
            loading="eager"
            className="origin-[78%_14%] scale-[2.6] object-cover object-[78%_10%]"
          />
        </span>
        <p className="text-sm leading-snug text-white/90">
          <span className="font-serif text-base text-white">
            {abogado.nombre}
          </span>
          <br />
          Abogado · <span className="text-gold">{abogado.matricula}</span>
        </p>
      </div>
    );
  }

  return (
    <figure
      className="relative mx-auto w-full max-w-md"
      style={{ aspectRatio: `${retrato.width} / ${retrato.height}` }}
    >
      {/* Solo la persona sobre el fondo del hero; la base se desvanece para que no corte en seco */}
      <Image
        src={retrato.src}
        alt={retrato.alt}
        fill
        quality={90}
        sizes="(min-width: 1024px) 448px, 100vw"
        className="[mask-image:linear-gradient(to_top,transparent_0%,black_28%)] object-contain object-bottom"
      />

      {/* Nombre y matrícula sobre la base, sin recuadro: una sombra navy suave asegura la lectura */}
      <figcaption className="absolute inset-x-0 bottom-0 px-4 pb-5 text-center [text-shadow:0_2px_14px_var(--color-navy),0_0_4px_var(--color-navy)]">
        <span
          aria-hidden="true"
          className="mx-auto mb-3 block h-px w-12 bg-gold"
        />
        <span className="block font-serif text-xl text-white">
          {abogado.nombre}
        </span>
        <span className="mt-1 block text-sm text-white/80">
          {abogado.titulos}
        </span>
        <span className="mt-1 block font-serif text-sm text-gold italic">
          {abogado.matricula}
        </span>
      </figcaption>
    </figure>
  );
}
