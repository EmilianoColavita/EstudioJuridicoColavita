"use client";

import { useEffect, useRef } from "react";

/*
  Dispara una animación CSS UNA vez, cuando el bloque entra en pantalla.
  Estados (atributo data-revelar): sin atributo (sin JS) → todo visible;
  "esperando" → oculto hasta entrar en pantalla; "visible" → corre la animación.
  Con "reducir movimiento" pasa directo a "visible" y el CSS desactiva la animación.
*/
export function RevealOnView({
  className = "",
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      el.dataset.revelar = "visible";
      return;
    }

    el.dataset.revelar = "esperando";
    /*
      Se dispara apenas el borde del bloque entra en el 85% superior de la pantalla.
      No usar un umbral por porcentaje del bloque: en celular un bloque alto (tarjetas apiladas)
      nunca llega a verse en un 35% a la vez y quedaba invisible para siempre.
      Si el bloque ya quedó arriba (se entró a mitad de página o con un link), se muestra directo.
    */
    const observer = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting || entrada.boundingClientRect.bottom < 0) {
          el.dataset.revelar = "visible";
          observer.disconnect();
        }
      },
      { threshold: 0, rootMargin: "0px 0px -15% 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
