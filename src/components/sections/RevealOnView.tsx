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
    const observer = new IntersectionObserver(
      ([entrada]) => {
        if (entrada.isIntersecting) {
          el.dataset.revelar = "visible";
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
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
