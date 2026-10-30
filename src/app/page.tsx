import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { GoldDivider } from "@/components/ui/GoldDivider";
import { WhatsAppFloating } from "@/components/whatsapp/WhatsAppFloating";
import { areasMenu } from "@/content/areas";
import { site } from "@/content/site";

// TODO paso 5: Home completo (4 tarjetas de igual peso, bloque del Dr., Instagram, publicaciones)
export default function Home() {
  return (
    <>
      <section className="bg-navy py-20 text-white">
        <Container className="flex flex-col items-center gap-6 text-center">
          <h1 className="font-serif text-4xl sm:text-5xl">{site.nombre}</h1>
          <GoldDivider />
          <p className="max-w-2xl text-lg text-white/85">
            Bienvenido al Estudio Jurídico Colavita. Brindamos asesoramiento y
            representación legal integral en todo el país, defendiendo tus
            derechos con máxima dedicación, profesionalismo y transparencia.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {areasMenu.map((a) => (
              <Button key={a.slug} href={`/${a.slug}`} variant="outlineDark">
                {a.nombre}
              </Button>
            ))}
          </div>
        </Container>
      </section>
      <WhatsAppFloating
        mensaje={site.whatsapp.mensajeGenerico}
        area="general"
      />
    </>
  );
}
