import Image from "next/image";
import {
  FacebookIcon,
  InstagramIcon,
  WhatsAppIcon,
} from "@/components/ui/BrandIcons";
import { Container } from "@/components/ui/Container";
import { WhatsAppLink } from "@/components/whatsapp/WhatsAppLink";
import { FondoLuz } from "@/components/ui/FondoLuz";
import { retraso } from "@/lib/animaciones";
import { site } from "@/content/site";

const { abogado } = site;

const cuadradito =
  "flex size-12 items-center justify-center rounded-lg border border-gold/60 text-gold transition-colors hover:border-gold hover:bg-gold hover:text-navy focus-visible:bg-gold focus-visible:text-navy";

/*
  Encabezado de "Quiénes somos": foto del Dr. en el estudio (marco dorado) + nombre (H1), títulos y bio.
  Está arriba de todo: animación solo con CSS (.hero-*), no espera a JS.
*/
export function PerfilHero({
  antetitulo,
  parrafos,
}: {
  antetitulo: string;
  parrafos: string[];
}) {
  return (
    <section className="relative isolate overflow-hidden border-b border-gold/40 text-white">
      <FondoLuz luz="izquierda" />
      <Container className="grid items-center gap-12 py-14 sm:py-20 lg:grid-cols-[5fr_7fr] lg:gap-16">
        <div
          className="hero-entrada mx-auto w-full max-w-sm overflow-hidden rounded-2xl border border-gold lg:max-w-none"
          style={retraso(100)}
        >
          <Image
            src={abogado.fotoEstudio.src}
            alt={abogado.fotoEstudio.alt}
            width={abogado.fotoEstudio.width}
            height={abogado.fotoEstudio.height}
            priority
            quality={90}
            sizes="(min-width: 1024px) 440px, (min-width: 640px) 384px, 100vw"
            className="aspect-[3/4] w-full object-cover object-[50%_15%]"
          />
        </div>

        <div>
          <span
            aria-hidden="true"
            className="hero-linea block h-px w-20 bg-gold"
            style={retraso(300)}
          />
          <p
            className="hero-entrada mt-5 text-xs font-semibold tracking-[0.16em] text-gold uppercase"
            style={retraso(350)}
          >
            {antetitulo}
          </p>
          <h1 className="hero-barrido mt-3 font-serif text-4xl leading-tight text-balance sm:text-5xl lg:text-6xl">
            {abogado.nombre}
          </h1>
          <p
            className="hero-entrada mt-4 font-serif text-lg text-gold italic sm:text-xl"
            style={retraso(800)}
          >
            {abogado.titulos} · {abogado.matricula}
          </p>
          <div
            className="hero-entrada mt-8 flex flex-col gap-4 text-lg leading-relaxed text-white/80"
            style={retraso(1000)}
          >
            {parrafos.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>

          {/* Redes: cuadraditos con borde dorado, se rellenan al pasar el mouse */}
          <ul
            className="hero-entrada mt-10 flex gap-3"
            style={retraso(1200)}
            aria-label="Redes y contacto"
          >
            <li>
              <a
                href={site.redes.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram del Estudio"
                className={cuadradito}
              >
                <InstagramIcon className="size-6" />
              </a>
            </li>
            <li>
              <a
                href={site.redes.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook del Estudio"
                className={cuadradito}
              >
                <FacebookIcon className="size-6" />
              </a>
            </li>
            <li>
              <WhatsAppLink
                mensaje={site.whatsapp.mensajeGenerico}
                area="general"
                ubicacion="perfil"
                aria-label="Escribinos por WhatsApp"
                className={cuadradito}
              >
                <WhatsAppIcon className="size-6" />
              </WhatsAppLink>
            </li>
          </ul>
        </div>
      </Container>
    </section>
  );
}
