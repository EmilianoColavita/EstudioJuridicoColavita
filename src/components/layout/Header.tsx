import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { site } from "@/content/site";
import { MobileNav } from "./MobileNav";
import { navLinks } from "./navLinks";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gold/30 bg-navy text-white">
      <Container className="flex h-16 items-center justify-between gap-6 lg:h-20">
        <Link
          href="/"
          className="flex items-center gap-3"
          aria-label={`${site.nombre}, inicio`}
        >
          <Image
            src={site.logoIcono.src}
            alt=""
            width={site.logoIcono.width}
            height={site.logoIcono.height}
            className="h-9 w-auto lg:h-11"
            loading="eager"
          />
          <span className="flex flex-col leading-none">
            <span className="font-serif text-xl tracking-[0.12em] lg:text-2xl">
              COLAVITA
            </span>
            <span className="mt-1 font-serif text-xs text-gold italic">
              Estudio jurídico
            </span>
          </span>
        </Link>

        <nav aria-label="Principal" className="hidden xl:block">
          <ul className="flex items-center gap-6 text-sm">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="py-2 text-white/85 transition-colors hover:text-gold"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <MobileNav links={navLinks} />
      </Container>
    </header>
  );
}
