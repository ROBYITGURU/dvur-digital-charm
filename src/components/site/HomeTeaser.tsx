import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./Reveal";
import garden from "@/assets/garden.jpg";
import room1 from "@/assets/room-1.jpg";
import pond from "@/assets/pond.jpg";

const cards = [
  {
    to: "/pokoje" as const,
    img: room1,
    eyebrow: "Ubytování",
    title: "Pokoje a apartmány",
    text: "Šest jedinečných pokojů s dřevěnými trámy, přírodními materiály a výhledem do zahrady či polí.",
  },
  {
    to: "/okoli" as const,
    img: pond,
    eyebrow: "Okolí",
    title: "Česká Kanada",
    text: "Hluboké lesy, rybníky s plážemi, cyklotrasy a hrady — jeden z nejhezčích koutů Čech máte za dveřmi.",
  },
  {
    to: "/galerie" as const,
    img: garden,
    eyebrow: "Atmosféra",
    title: "Galerie",
    text: "Snídaně na zahradě, večery u ohně, ranní mlha nad lesem — podívejte se na atmosféru penzionu.",
  },
];

export function HomeTeaser() {
  return (
    <section className="bg-background py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-end justify-between gap-8 flex-wrap">
          <div>
            <Reveal>
              <p className="text-xs uppercase tracking-[0.3em] text-accent">Prozkoumat</p>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-4 max-w-2xl text-balance text-4xl md:text-5xl lg:text-6xl">
                Vše, co Malíkovský Dvůr nabízí.
              </h2>
            </Reveal>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {cards.map((c, i) => (
            <Reveal key={c.to} delay={i * 80}>
              <Link
                to={c.to}
                className="group block overflow-hidden rounded-sm bg-background"
              >
                <div className="overflow-hidden aspect-[4/5]">
                  <img
                    src={c.img}
                    alt={c.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-[1400ms] group-hover:scale-105"
                  />
                </div>
                <div className="p-7">
                  <p className="text-[11px] uppercase tracking-[0.3em] text-accent">{c.eyebrow}</p>
                  <h3 className="mt-3 text-2xl md:text-3xl">{c.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm text-foreground/80 group-hover:text-accent transition-colors">
                    Více <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
