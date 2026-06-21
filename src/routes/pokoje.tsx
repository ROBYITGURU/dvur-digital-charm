import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Rooms } from "@/components/site/Rooms";
import exterior from "@/assets/dvur-exterior-1.jpg";

export const Route = createFileRoute("/pokoje")({
  head: () => ({
    meta: [
      { title: "Pokoje a apartmány — Malíkovský Dvůr" },
      {
        name: "description",
        content: "Šest pokojů a apartmánů s dřevěnými trámy, přírodními materiály a klidným výhledem. Pro páry i rodiny.",
      },
      { property: "og:title", content: "Pokoje a apartmány — Malíkovský Dvůr" },
      { property: "og:description", content: "Boutique pokoje s dřevěnými trámy v srdci České Kanady." },
      { property: "og:image", content: exterior },
    ],
  }),
  component: () => (
    <main>
      <PageHeader
        eyebrow="Ubytování"
        title="Pokoje a apartmány."
        subtitle="Šest jedinečných pokojů — od dvoulůžkového hnízda až po prostorný studio-apartmán pro celou rodinu."
        image={exterior}
        imageAlt="Stavení Malíkovského Dvora s červenou střechou"
      />
      <Rooms />
    </main>
  ),
});
