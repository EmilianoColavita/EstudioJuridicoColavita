import Image from "next/image";
import Link from "next/link";
import { Clock, Mail, MapPin } from "lucide-react";
import { InstagramIcon, WhatsAppIcon } from "@/components/ui/BrandIcons";
import { Container } from "@/components/ui/Container";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { site } from "@/content/site";
import { WhatsAppLink } from "@/components/whatsapp/WhatsAppLink";
import { navLinks } from "./navLinks";

export function Footer() {
  const { contacto, abogado } = site;
  return (
    // pb extra en celular para que el botón flotante no tape el contenido
    <footer className="border-t border-gold/20 bg-navy pt-14 pb-24 text-sm text-white/80 md:pb-10">
      <Container className="grid gap-10 md:grid-cols-3">
        <div className="flex flex-col items-start gap-4">
          <Image
            src={site.logo.src}
            alt={site.logo.alt}
            width={site.logo.width}
            height={site.logo.height}
            className="h-24 w-auto"
          />
          <p>
            {abogado.nombre}
            <br />
            <span className="text-gold">{abogado.matricula}</span>
          </p>
        </div>

        <div>
          <h2 className="mb-4 font-serif text-lg text-white">Contacto</h2>
          <ul className="flex flex-col gap-3">
            <li className="flex gap-3">
              <MapPin
                className="size-5 shrink-0 text-gold"
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <span>
                {contacto.direccion}
                <br />
                {contacto.ciudad}
              </span>
            </li>
            <li className="flex gap-3">
              <Clock
                className="size-5 shrink-0 text-gold"
                strokeWidth={1.5}
                aria-hidden="true"
              />
              {contacto.horario}
            </li>
            <li className="flex gap-3">
              <Mail
                className="size-5 shrink-0 text-gold"
                strokeWidth={1.5}
                aria-hidden="true"
              />
              <a href={`mailto:${contacto.email}`} className="hover:text-gold">
                {contacto.email}
              </a>
            </li>
            <li className="flex gap-3">
              <WhatsAppIcon className="size-5 shrink-0 text-gold" />
              <WhatsAppLink
                mensaje={site.whatsapp.mensajeGenerico}
                area="general"
                ubicacion="footer"
                className="hover:text-gold"
              >
                WhatsApp
              </WhatsAppLink>
            </li>
            <li className="flex gap-3">
              <InstagramIcon className="size-5 shrink-0 text-gold" />
              <a
                href={site.redes.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gold"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>

        <nav aria-label="Pie de página">
          <h2 className="mb-4 font-serif text-lg text-white">
            Áreas y secciones
          </h2>
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-gold">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>

      <Container className="mt-12">
        <GoldDivider className="w-full opacity-40" />
        <p className="mt-6 text-xs text-white/60">
          © {site.nombre} · {abogado.nombre} · {abogado.matricula}
        </p>
      </Container>
    </footer>
  );
}
