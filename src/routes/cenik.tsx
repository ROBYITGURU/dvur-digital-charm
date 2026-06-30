import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Pricing } from "@/components/site/Pricing";
import breakfast from "@/assets/breakfast.jpg";

export const Route = createFileRoute("/cenik")({
  /* head: () => ({
    meta: [
      { title: "Ceník ubytování — Malíkovský Dvůr" },
      {
        name: "description",
        content: "Aktuální ceník pokojů a apartmánů. Snídaně, povlečení, parkování a sportovní vybavení v ceně.",
      },
      { property: "og:title", content: "Ceník ubytování — Malíkovský Dvůr" },
      { property: "og:description", content: "Ceny pokojů a apartmánů včetně snídaně a kompletního servisu." },
      { property: "og:image", content: breakfast },
    ],
  }), */
  component: () => (
    <main>
      <PageHeader
        eyebrow="Ceník"
        title="Ceny pobytu."
        subtitle="Transparentní ceny včetně bohaté snídaně, povlečení, parkování i zapůjčení sportovního vybavení."
        image={breakfast}
        imageAlt="Snídaně v Malíkovském Dvoře"
      />
      <Pricing />
    </main>
  ),
});
