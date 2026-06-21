import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { Features } from "@/components/site/Features";
import { Estate } from "@/components/site/Estate";
import { HomeTeaser } from "@/components/site/HomeTeaser";
import { Reveal } from "@/components/site/Reveal";
import { PageHeader } from "@/components/site/PageHeader";
import { About } from "@/components/site/About";
import { VideoIntro } from "@/components/site/VideoIntro";
import { Reviews } from "@/components/site/Reviews";
import { Link } from "@tanstack/react-router";
import courtyard from "@/assets/courtyard.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Malíkovský Dvůr — Boutique penzion v České Kanadě" },
      {
        name: "description",
        content:
          "Rodinný boutique penzion u Jindřichova Hradce. Hluboké lesy, voňavá snídaně, prémiová káva a hvězdná obloha. Rezervujte si pobyt.",
      },
      { property: "og:title", content: "Malíkovský Dvůr — Boutique penzion v České Kanadě" },
      {
        property: "og:description",
        content: "Klid hlubokých lesů, ranní mlha, snídaně na zahradě. Penzion v České Kanadě.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <Hero />
      <Features />
      <VideoIntro />
      <PageHeader
        eyebrow="O penzionu"
        title="Místo s duší."
        subtitle="Rodinný penzion, který Vás vrátí k tomu podstatnému — k tichu, vůni dřeva a pomalému ránu."
        image={courtyard}
        imageAlt="Dvůr Malíkovského Dvora"
      />
      <About />
      <Estate />
      <Reviews />
      <HomeTeaser />


      <section className="bg-primary text-primary-foreground py-24 md:py-32">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-accent">Rezervace</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-5 text-4xl md:text-5xl lg:text-6xl text-primary-foreground">
              Připraveni zpomalit?
            </h2>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-6 max-w-xl mx-auto text-primary-foreground/80 leading-relaxed">
              Napište nám termín pobytu a počet hostů — pošleme Vám přesnou kalkulaci
              a doporučíme nejvhodnější pokoj pro Vás.
            </p>
          </Reveal>
          <Reveal delay={260}>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://book.trevlix.com/book/app/?cid=6759728&mode=window"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-4 text-sm font-medium text-accent-foreground transition-all hover:scale-[1.02]"
              >
                Rezervovat pobyt
              </a>
              <Link
                to="/cenik"
                className="inline-flex items-center justify-center rounded-full border border-primary-foreground/30 px-8 py-4 text-sm font-medium text-primary-foreground hover:bg-primary-foreground/10 transition-all"
              >
                Zobrazit ceník
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
