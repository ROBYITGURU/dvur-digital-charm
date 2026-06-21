import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Contact } from "@/components/site/Contact";
import { Faq } from "@/components/site/Faq";
import stars from "@/assets/stars.jpg";

export const Route = createFileRoute("/kontakt")({
  head: () => ({
    meta: [
      { title: "Kontakt a rezervace — Malíkovský Dvůr" },
      {
        name: "description",
        content: "Poptat termín pobytu, telefon, e-mail a adresa penzionu Malíkovský Dvůr v České Kanadě.",
      },
      { property: "og:title", content: "Kontakt a rezervace — Malíkovský Dvůr" },
      { property: "og:description", content: "Rezervujte si pobyt v boutique penzionu v České Kanadě." },
    ],
  }),
  component: () => (
    <main>
      <PageHeader
        eyebrow="Kontakt"
        title="Rezervujte si pobyt."
        subtitle="Napište nám termín a počet hostů — odpovíme do několika hodin s přesnou kalkulací."
        image={stars}
        imageAlt="Hvězdná obloha nad penzionem"
      />
      <Contact />
      <Faq />
    </main>
  ),
});
