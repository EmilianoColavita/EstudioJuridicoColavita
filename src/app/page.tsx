import Image from "next/image";
import { AreasBands } from "@/components/sections/AreasBands";
import { LawyerBlock } from "@/components/sections/LawyerBlock";
import { Container } from "@/components/ui/Container";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { WhatsAppButton } from "@/components/whatsapp/WhatsAppButton";
import { WhatsAppFloating } from "@/components/whatsapp/WhatsAppFloating";
import { home } from "@/content/home";
import { site } from "@/content/site";
import fondoCatedral from "../../public/images/background-catedral.png";

// TODO paso 5: falta Instagram y últimas publicaciones
export default function Home() {
  return (
    <>
      <section className="relative isolate overflow-hidden border-b border-gold/40 bg-navy text-white">
        {/*
          Equivalente optimizado a background-size: cover.
          - Celular/tablet: la foto ocupa todo y el texto va encima con un velo navy.
          - Escritorio (xl+): la foto arranca más a la derecha y se ancla a la derecha,
            así la Catedral queda siempre a la derecha del texto y nunca debajo.
        */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-20 xl:left-[18%]"
        >
          <Image
            src={fondoCatedral}
            alt=""
            fill
            priority
            quality={90}
            sizes="(min-width: 1280px) 82vw, 100vw"
            placeholder="blur"
            className="object-cover object-[72%_center] xl:object-right"
          />
        </div>
        {/* Degradado oscuro: velo parejo en celular; en escritorio, solo del lado izquierdo */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-navy/75 xl:bg-transparent xl:bg-linear-to-r xl:from-navy xl:from-20% xl:via-navy/60 xl:via-40% xl:to-transparent xl:to-60%"
        />

        <Container className="flex min-h-[32rem] flex-col justify-center py-16 sm:min-h-[36rem] lg:py-24">
          <div className="flex flex-col gap-6 xl:max-w-[32rem] 2xl:max-w-3xl">
            <h1 className="font-serif text-4xl leading-tight text-balance sm:text-5xl 2xl:text-6xl">
              {site.nombre}
            </h1>
            <GoldDivider />
            <p className="max-w-2xl text-lg leading-relaxed text-white/85">
              {home.hero.texto}
            </p>
            <div className="pt-2">
              <WhatsAppButton
                mensaje={site.whatsapp.mensajeGenerico}
                area="general"
                ubicacion="hero"
                variant="dorado"
                className="w-full sm:w-auto"
              >
                {home.hero.ctaTexto}
              </WhatsAppButton>
            </div>
          </div>
        </Container>
      </section>
      <AreasBands
        id="servicios"
        titulo={home.servicios.titulo}
        ctaTexto={home.servicios.ctaTexto}
        items={home.servicios.items}
      />
      <LawyerBlock id="dr-colavita" contenido={home.drColavita} />
      <WhatsAppFloating
        mensaje={site.whatsapp.mensajeGenerico}
        area="general"
      />
    </>
  );
}
