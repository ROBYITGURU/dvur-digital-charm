import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Surroundings } from "@/components/site/Surroundings";
import pond from "@/assets/pond.jpg";

export const Route = createFileRoute("/okoli")({
  head: () => ({
    meta: [
      { title: "Okolí — Česká Kanada | Malíkovský Dvůr" },
      {
        name: "description",
        content: "Hluboké lesy, rybníky, cyklotrasy, hrady a zámky. Tipy na výlety v okolí penzionu v České Kanadě.",
      },
      { property: "og:title", content: "Okolí penzionu — Česká Kanada" },
      { property: "og:description", content: "Co dělat v okolí Malíkovského Dvora — výlety, příroda, památky." },
      { property: "og:image", content: pond },
    ],
  }),
  component: () => (
    <main>
      <PageHeader
        eyebrow="Okolí"
        title="Česká Kanada."
        subtitle="Jeden z nejhezčích koutů Čech — hluboké lesy, rybníky s plážemi, lesní cyklotrasy a romantické hrady."
        image={pond}
        imageAlt="Rybník v okolí penzionu"
      />
      <Surroundings />
    </main>
  ),
});
