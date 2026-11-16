import type { CSSProperties } from "react";

/**
 * Retraso de una animación de entrada (.revelar, .revelar-izq, .hero-entrada, etc.), en ms.
 * Uso: <li className="revelar" style={retraso(150 + i * 100)}>
 */
export function retraso(ms: number): CSSProperties {
  return { "--retraso": `${ms}ms` } as CSSProperties;
}
