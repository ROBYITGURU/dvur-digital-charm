import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Gallery } from "@/components/site/Gallery";
import garden from "@/assets/garden.jpg";

export const Route = createFileRoute("/galerie")({
  head: () => ({
    meta: [
      { title: "Galerie — Malíkovský Dvůr" },
      {
        name: "description",
        content: "Atmosféra penzionu v obrazech — pokoje, zahrada, snídaně, večery u ohně a hvězdná obloha.",
      },
      { property: "og:title", content: "Galerie — Malíkovský Dvůr" },
      { property: "og:description", content: "Atmosféra boutique penzionu v České Kanadě v obrazech." },
      { property: "og:image", content: garden },
    ],
  }),
  component: () => (
    <main>
      <PageHeader
        eyebrow="Galerie"
        title="Atmosféra v obrazech."
        subtitle="Ranní mlha, voňavá snídaně, večery na dvorku — náhled toho, co Vás na Malíkovském Dvoře čeká."
        image={garden}
        imageAlt="Zahrada Malíkovského Dvora"
      />
      <Gallery />
    </main>
  ),
});
