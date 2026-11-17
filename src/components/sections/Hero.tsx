import Image from "next/image";
import { CircleCheck } from "lucide-react";
import { GoogleReviewsBadge } from "@/components/trust/GoogleReviewsBadge";
import { Container } from "@/components/ui/Container";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { WhatsAppButton } from "@/components/whatsapp/WhatsAppButton";
import { retraso } from "@/lib/animaciones";
import type { SeccionProps } from "./types";

/*
  Hero de las landings, con el mismo lenguaje que el Home:
  foto de fondo atenuada que arranca borrosa (.hero-fondo), título que se escribe de izquierda
  a derecha (.hero-barrido) y el resto entrando en cascada. Todo CSS: no espera a JS.
*/
export function Hero({ seccion, area }: SeccionProps<"hero">) {
  return (
    <section className="relative isolate overflow-hidden border-b border-gold/40 bg-navy text-white">
      {seccion.imagenFondo && (
        <div aria-hidden="true" className="hero-fondo absolute inset-0 -z-20">
          <Image
            src={seccion.imagenFondo.src}
            alt=""
            fill
            priority
            quality={85}
            sizes="100vw"
            className={`object-cover object-[75%_center] ${seccion.veloFuerte ? "saturate-50" : "brightness-110"}`}
          />
        </div>
      )}
      {/* Velo navy: oscuro detrás del texto (izquierda) y más suave a la derecha, donde se ve el choque */}
      <div
        aria-hidden="true"
        className={`absolute inset-0 -z-10 lg:bg-transparent lg:bg-linear-to-r ${
          seccion.veloFuerte
            ? "bg-navy/75 lg:from-navy lg:from-30% lg:via-navy/80 lg:via-60% lg:to-navy/35"
            : "bg-navy/60 lg:from-navy/95 lg:from-20% lg:via-navy/55 lg:via-50% lg:to-navy/5"
        }`}
      />

      <Container className="py-12 sm:py-16 lg:py-20">
        <div className="flex max-w-3xl flex-col gap-6">
          <h1 className="hero-barrido font-serif text-3xl leading-tight text-balance sm:text-5xl">
            {seccion.titulo}
          </h1>
          <GoldDivider className="hero-linea" style={retraso(700)} />
          <p
            className="hero-entrada max-w-2xl text-lg leading-relaxed text-white/85"
            style={retraso(800)}
          >
            {seccion.subtitulo}
          </p>

          <ul className="flex flex-col gap-3">
            {seccion.beneficios.map((b, i) => (
              <li
                key={b.titulo}
                className="hero-entrada flex gap-3"
                style={retraso(950 + i * 120)}
              >
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

          <div
            className="hero-entrada flex flex-col items-start gap-4 pt-2"
            style={retraso(1250)}
          >
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
      </Container>
    </section>
  );
}
