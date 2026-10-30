import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SectionRenderer } from "@/components/sections/SectionRenderer";
import { WhatsAppFloating } from "@/components/whatsapp/WhatsAppFloating";
import { areas, getArea } from "@/content/areas";

// Con cacheComponents no existe `dynamicParams = false`: los slugs desconocidos se cortan con notFound()
export function generateStaticParams() {
  return areas.map((a) => ({ area: a.slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/[area]">): Promise<Metadata> {
  const area = getArea((await params).area);
  if (!area) return {};
  return {
    title: area.seo.title,
    description: area.seo.description,
    alternates: { canonical: `/${area.slug}` },
    openGraph: {
      title: area.seo.title,
      description: area.seo.description,
      url: `/${area.slug}`,
    },
  };
}

export default async function AreaPage({ params }: PageProps<"/[area]">) {
  const area = getArea((await params).area);
  if (!area) notFound();

  return (
    <>
      <SectionRenderer area={area} />
      <WhatsAppFloating mensaje={area.whatsappMensaje} area={area.slug} />
    </>
  );
}
