import Image from "next/image";
import { site } from "@/content/site";

const { abogado } = site;

/*
  Retrato del Dr. (WebP recortado con transparencia).
  - "full": solo la persona, señalando hacia la izquierda (en las landings, hacia los logos de aseguradoras
    del muro de autoridad). La base se desvanece y ahí van el nombre y la matrícula.
  - "firma": avatar redondo con borde dorado + nombre, títulos y matrícula (cierre de las landings).
*/
export function LawyerCard({
  variant = "full",
}: {
  variant?: "full" | "firma";
}) {
  const { retrato } = abogado;

  if (variant === "firma") {
    return (
      <div className="flex items-center gap-4 text-left sm:gap-5">
        <span className="relative size-20 shrink-0 overflow-hidden rounded-full border-2 border-gold bg-navy-soft ring-4 ring-gold/15 sm:size-24">
          <Image
            src={abogado.avatar.src}
            alt={abogado.avatar.alt}
            fill
            sizes="96px"
            quality={90}
            className="object-cover"
          />
        </span>
        <p className="flex flex-col gap-0.5">
          <span className="font-serif text-xl text-white sm:text-2xl">
            {abogado.nombre}
          </span>
          <span className="text-sm text-white/75">{abogado.titulos}</span>
          <span className="font-serif text-sm text-gold italic">
            {abogado.matricula}
          </span>
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
