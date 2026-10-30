import Image from "next/image";
import { CircleCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import type { SeccionProps } from "./types";

export function AuthorityWall({ seccion, id }: SeccionProps<"authorityWall">) {
  return (
    <section aria-labelledby={id} className="bg-navy py-16 text-white sm:py-24">
      <Container>
        <SectionTitle id={id} emoji={seccion.emoji} tone="dark">
          {seccion.titulo}
        </SectionTitle>
        <p className="mx-auto max-w-3xl text-center text-lg text-white/80">
          {seccion.intro}
        </p>

        <ul className="mt-12 grid gap-6 md:grid-cols-3">
          {seccion.items.map((item) => {
            const Icono = item.icono ?? CircleCheck;
            return (
              <li
                key={item.titulo}
                className="flex flex-col gap-3 rounded-xl border border-gold/30 p-6"
              >
                <Icono
                  className="size-8 text-gold"
                  strokeWidth={1.25}
                  aria-hidden="true"
                />
                <h3 className="font-serif text-xl">{item.titulo}</h3>
                <p className="text-white/75">{item.texto}</p>
              </li>
            );
          })}
        </ul>

        {/* Acepta una imagen con los logos o, si no hay permiso de uso, los nombres en texto */}
        <div className="mt-12">
          {seccion.imagenLogos ? (
            <Image
              src={seccion.imagenLogos.src}
              alt={seccion.imagenLogos.alt}
              width={seccion.imagenLogos.width}
              height={seccion.imagenLogos.height}
              sizes="(min-width: 1024px) 896px, 100vw"
              className="mx-auto w-full max-w-4xl rounded-xl"
            />
          ) : (
            <ul className="flex flex-wrap justify-center gap-3">
              {seccion.aseguradoras.map((nombre) => (
                <li
                  key={nombre}
                  className="rounded-full border border-white/20 px-4 py-2 text-sm text-white/70"
                >
                  {nombre}
                </li>
              ))}
            </ul>
          )}
        </div>
      </Container>
    </section>
  );
}
