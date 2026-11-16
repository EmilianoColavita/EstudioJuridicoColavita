import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { retraso } from "@/lib/animaciones";
import { RevealOnView } from "./RevealOnView";
import type { SeccionProps } from "./types";

// <details>/<summary>: accesible y funciona sin JS. Incluye el JSON-LD FAQPage.
export function FaqAccordion({ seccion, id }: SeccionProps<"faq">) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: seccion.items.map((item) => ({
      "@type": "Question",
      name: item.pregunta,
      acceptedAnswer: { "@type": "Answer", text: item.respuesta },
    })),
  };

  return (
    <section
      aria-labelledby={id}
      className="border-t border-white/10 bg-navy py-16 text-white sm:py-24"
    >
      <Container className="max-w-3xl">
        <RevealOnView>
          <div className="revelar">
            <SectionTitle id={id} tone="dark">
              {seccion.titulo}
            </SectionTitle>
          </div>

          <div className="divide-y divide-gold/25 border-y border-gold/25">
            {seccion.items.map((item, i) => (
              <details
                key={item.pregunta}
                className="revelar group"
                style={retraso(150 + i * 80)}
              >
                <summary className="flex min-h-16 cursor-pointer list-none items-center justify-between gap-4 py-5 [&::-webkit-details-marker]:hidden">
                  <h3 className="font-serif text-lg transition-colors group-open:text-gold group-hover:text-gold sm:text-xl">
                    {item.pregunta}
                  </h3>
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full border border-gold/40 transition-colors group-open:border-gold">
                    <ChevronDown
                      className="size-4 text-gold transition-transform group-open:rotate-180"
                      strokeWidth={1.5}
                      aria-hidden="true"
                    />
                  </span>
                </summary>
                <p className="pr-12 pb-6 leading-relaxed text-white/75">
                  {item.respuesta}
                </p>
              </details>
            ))}
          </div>
        </RevealOnView>
      </Container>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
        }}
      />
    </section>
  );
}
