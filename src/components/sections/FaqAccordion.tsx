import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
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
    <section aria-labelledby={id} className="bg-cream py-16 sm:py-20">
      <Container className="max-w-3xl">
        <SectionTitle id={id} emoji={seccion.emoji}>
          {seccion.titulo}
        </SectionTitle>

        <div className="divide-y divide-gold/30 border-y border-gold/30">
          {seccion.items.map((item) => (
            <details key={item.pregunta} className="group">
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-4 font-semibold [&::-webkit-details-marker]:hidden">
                <h3>{item.pregunta}</h3>
                <ChevronDown
                  className="size-5 shrink-0 text-gold-deep transition-transform group-open:rotate-180"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </summary>
              <p className="pb-5 text-muted">{item.respuesta}</p>
            </details>
          ))}
        </div>
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
