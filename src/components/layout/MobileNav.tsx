"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export function MobileNav({
  links,
}: {
  links: { href: string; label: string }[];
}) {
  const [abierto, setAbierto] = useState(false);

  useEffect(() => {
    if (!abierto) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setAbierto(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [abierto]);

  return (
    <div className="xl:hidden">
      <button
        type="button"
        onClick={() => setAbierto((v) => !v)}
        aria-expanded={abierto}
        aria-controls="menu-movil"
        aria-label={abierto ? "Cerrar menú" : "Abrir menú"}
        className="-mr-2 flex size-11 items-center justify-center rounded-md text-white"
      >
        {abierto ? (
          <X className="size-6" strokeWidth={1.5} />
        ) : (
          <Menu className="size-6" strokeWidth={1.5} />
        )}
      </button>

      <nav
        id="menu-movil"
        aria-label="Principal"
        hidden={!abierto}
        className="absolute inset-x-0 top-full border-b border-gold/30 bg-navy"
      >
        <ul className="mx-auto flex max-w-6xl flex-col px-4 py-2 sm:px-6">
          {links.map((link) => (
            <li
              key={link.href}
              className="border-b border-white/10 last:border-0"
            >
              <Link
                href={link.href}
                onClick={() => setAbierto(false)}
                className="block py-4 text-base text-white/90 hover:text-gold"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
