import Image from "next/image";
import { CircleCheck } from "lucide-react";
import { GoogleReviewsBadge } from "@/components/trust/GoogleReviewsBadge";
import { LawyerCard } from "@/components/trust/LawyerCard";
import { Container } from "@/components/ui/Container";
import { WhatsAppButton } from "@/components/whatsapp/WhatsAppButton";
import type { SeccionProps } from "./types";

export function Hero({ seccion, area }: SeccionProps<"hero">) {
  return (
    <section className="relative isolate overflow-hidden bg-navy text-white">
      {seccion.imagenFondo ? (
        <Image
          src={seccion.imagenFondo.src}
          alt=""
          fill
          sizes="100vw"
          loading="eager"
          fetchPriority="high"
          className="-z-20 object-cover opacity-25"
        />
      ) : (
        // TODO: reemplazar por la foto de la Catedral de La Plata (licencia libre, ver docs/creditos-imagenes.md)
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-20 bg-[radial-gradient(ellipse_at_top_right,var(--color-navy-soft),transparent_60%)]"
        />
      )}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-navy/70" />

      <Container className="grid items-center gap-12 py-10 sm:py-16 lg:grid-cols-[1fr_400px] lg:py-24">
        <div className="flex flex-col gap-6">
          <div className="lg:hidden">
            <LawyerCard variant="compact" />
          </div>

          <h1 className="font-serif text-3xl leading-tight text-balance sm:text-5xl">
            {seccion.titulo}
          </h1>
          <p className="max-w-2xl text-lg text-white/85">{seccion.subtitulo}</p>

          <ul className="flex flex-col gap-3">
            {seccion.beneficios.map((b) => (
              <li key={b.titulo} className="flex gap-3">
                <CircleCheck
                  className="mt-0.5 size-5 shrink-0 text-gold"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <span className="text-white/85">
                  <strong className="font-semibold text-white">
                    {b.titulo}:
                  </strong>{" "}
                  {b.texto}
                </span>
              </li>
            ))}
          </ul>

          <div className="flex flex-col items-start gap-4 pt-2">
            <WhatsAppButton
              mensaje={area.whatsappMensaje}
              area={area.slug}
              ubicacion="hero"
              className="w-full sm:w-auto"
            >
              {seccion.ctaTexto}
            </WhatsAppButton>
            <GoogleReviewsBadge />
          </div>
        </div>

        <div className="hidden pb-6 lg:block">
          <LawyerCard />
        </div>
      </Container>
    </section>
  );
}
