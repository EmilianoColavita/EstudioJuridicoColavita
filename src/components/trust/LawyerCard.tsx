import Image from "next/image";
import { site } from "@/content/site";

const { abogado } = site;

// Versión grande (hero en escritorio, lazy porque en celular está oculta) o compacta (avatar del hero en celular)
export function LawyerCard({
  variant = "full",
}: {
  variant?: "full" | "compact";
}) {
  if (variant === "compact") {
    return (
      <div className="flex items-center gap-3">
        <Image
          src={abogado.foto.src}
          alt={abogado.foto.alt}
          width={112}
          height={112}
          sizes="56px"
          className="size-14 rounded-full border-2 border-gold object-cover object-[50%_15%]"
          loading="eager"
        />
        <p className="text-sm leading-snug text-white/90">
          <span className="font-semibold text-white">{abogado.nombre}</span>
          <br />
          Abogado · {abogado.matricula}
        </p>
      </div>
    );
  }

  return (
    <figure className="relative">
      <div className="overflow-hidden rounded-2xl border border-gold/40">
        <Image
          src={abogado.foto.src}
          alt={abogado.foto.alt}
          width={abogado.foto.width}
          height={abogado.foto.height}
          sizes="(min-width: 1024px) 400px, 100vw"
          className="aspect-[4/5] w-full object-cover object-top"
        />
      </div>
      <figcaption className="absolute inset-x-4 -bottom-6 rounded-xl border border-gold/30 bg-navy px-5 py-3 text-sm text-white/85 shadow-lg">
        <span className="block font-serif text-base text-white">
          {abogado.nombre}
        </span>
        {abogado.titulos} ·{" "}
        <span className="text-gold">{abogado.matricula}</span>
      </figcaption>
    </figure>
  );
}
