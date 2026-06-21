import { Reveal } from "./Reveal";
import exterior from "@/assets/exterior.jpg";
import meadow from "@/assets/meadow.jpg";
import courtyard from "@/assets/courtyard.jpg";
import garden from "@/assets/garden.jpg";
import outbuilding from "@/assets/outbuilding.jpg";

export function Estate() {
  return (
    <section className="bg-background py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-end">
          <div className="md:col-span-5">
            <Reveal>
              <p className="text-xs uppercase tracking-[0.3em] text-accent">Statek a zahrada</p>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-4 text-balance text-4xl md:text-5xl lg:text-6xl">
                Místo, kde se kámen potkává s loukou.
              </h2>
            </Reveal>
            <Reveal delay={180}>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground">
                Citlivě obnovený selský statek s rozlehlou zahradou, dvorem
                s posezením ve stínu starého ořešáku a výhledem na okolní
                pole a lesy. Každý kout má svůj příběh.
              </p>
            </Reveal>
          </div>

          <Reveal delay={120} className="md:col-span-7">
            <div className="overflow-hidden rounded-sm">
              <img
                src={garden}
                alt="Letecký pohled na statek a zahradu Malíkovského Dvora"
                loading="lazy"
                className="w-full h-[420px] md:h-[520px] object-cover transition-transform duration-[1400ms] hover:scale-[1.03]"
              />
            </div>
          </Reveal>
        </div>

        {/* Bento grid s reálnými fotkami */}
        <div className="mt-10 grid grid-cols-2 md:grid-cols-12 md:auto-rows-[160px] gap-4 md:gap-5">
          <Reveal className="md:col-span-5 md:row-span-2 aspect-[4/5] md:aspect-auto">
            <figure className="group relative w-full h-full overflow-hidden rounded-sm">
              <img
                src={exterior}
                alt="Hlavní stavení s kamennou stěnou a červenou střechou"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-105"
              />
              <figcaption className="absolute bottom-0 inset-x-0 p-5 text-white text-sm bg-gradient-to-t from-black/60 to-transparent">
                Hlavní stavení
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={80} className="md:col-span-4 md:row-span-2 aspect-square md:aspect-auto">
            <figure className="group relative w-full h-full overflow-hidden rounded-sm">
              <img
                src={courtyard}
                alt="Dvůr s ořešákem a posezením"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-105"
              />
              <figcaption className="absolute bottom-0 inset-x-0 p-5 text-white text-sm bg-gradient-to-t from-black/60 to-transparent">
                Dvůr pod ořešákem
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={160} className="md:col-span-3 md:row-span-1 aspect-[4/3] md:aspect-auto">
            <figure className="group relative w-full h-full overflow-hidden rounded-sm">
              <img
                src={outbuilding}
                alt="Vedlejší hospodářské stavení"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-105"
              />
            </figure>
          </Reveal>

          <Reveal delay={220} className="md:col-span-3 md:row-span-1 aspect-[4/3] md:aspect-auto">
            <figure className="group relative w-full h-full overflow-hidden rounded-sm">
              <img
                src={meadow}
                alt="Louka s lučními květy před statkem"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1400ms] group-hover:scale-105"
              />
              <figcaption className="absolute bottom-0 inset-x-0 p-4 text-white text-xs bg-gradient-to-t from-black/60 to-transparent">
                Letní louka
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
