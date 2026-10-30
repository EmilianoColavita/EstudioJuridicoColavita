import { Fragment } from "react";
import type { Area, Seccion } from "@/content/areas";
import { AlertBox } from "./AlertBox";
import { AuthorityWall } from "./AuthorityWall";
import { CtaBanner } from "./CtaBanner";
import { FaqAccordion } from "./FaqAccordion";
import { FeatureGrid } from "./FeatureGrid";
import { HookBox } from "./HookBox";
import { Hero } from "./Hero";
import { OtherAreas } from "./OtherAreas";
import { StepsGuide } from "./StepsGuide";

function renderSeccion(seccion: Seccion, area: Area, id: string) {
  switch (seccion.tipo) {
    case "hero":
      return <Hero seccion={seccion} area={area} id={id} />;
    case "featureGrid":
      return <FeatureGrid seccion={seccion} area={area} id={id} />;
    case "hook":
      return <HookBox seccion={seccion} area={area} id={id} />;
    case "authorityWall":
      return <AuthorityWall seccion={seccion} area={area} id={id} />;
    case "alert":
      return <AlertBox seccion={seccion} area={area} id={id} />;
    case "steps":
      return <StepsGuide seccion={seccion} area={area} id={id} />;
    case "faq":
      return <FaqAccordion seccion={seccion} area={area} id={id} />;
    case "otherAreas":
      return <OtherAreas seccion={seccion} area={area} id={id} />;
    case "cta":
      return <CtaBanner seccion={seccion} area={area} id={id} />;
  }
}

export function SectionRenderer({ area }: { area: Area }) {
  return area.secciones.map((seccion, i) => {
    const id = `${seccion.tipo}-${i}`;
    return <Fragment key={id}>{renderSeccion(seccion, area, id)}</Fragment>;
  });
}
