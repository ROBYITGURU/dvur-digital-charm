import { useState } from "react";
import hero from "@/assets/hero.jpg";
import garden from "@/assets/garden.jpg";
import evening from "@/assets/evening.jpg";
import pond from "@/assets/pond.jpg";

import meadow from "@/assets/meadow.jpg";
import courtyard from "@/assets/courtyard.jpg";
import outbuilding from "@/assets/outbuilding.jpg";
import bedroom from "@/assets/dvur-bedroom.jpg";
import fireplace from "@/assets/dvur-fireplace.jpg";
import lounge from "@/assets/dvur-lounge.jpg";
import dvurExterior from "@/assets/dvur-exterior-1.jpg";
import dvurMeadow from "@/assets/dvur-meadow.jpg";
import apartma10 from "@/assets/apartma---studio-c.10---loznice-2.jpg.asset.json";
import brana from "@/assets/brana.jpg.asset.json";
import cyklofest from "@/assets/cyklofest-2.jpg.asset.json";
import cyklofest1 from "@/assets/cyklofest-1.jpg.asset.json";
import cyklofest3 from "@/assets/cyklofest-3.jpg.asset.json";
import cyklofest25_8 from "@/assets/cyklofest25-8.jpg.asset.json";
import cyklofest25_46 from "@/assets/cyklofest25-46.jpg.asset.json";
import dscf2274 from "@/assets/dscf2274.jpg.asset.json";
import dscf2295 from "@/assets/dscf2295-2.jpg.asset.json";
import dvur1 from "@/assets/dvur-1.jpg.asset.json";
import dvur3 from "@/assets/dvur-3.jpg.asset.json";
import malfest004 from "@/assets/malfest22-004.jpg.asset.json";
import malfest011 from "@/assets/malfest22-011.jpg.asset.json";
import snidaneDezert from "@/assets/of23-64.jpg.asset.json";
import snidaneBufet from "@/assets/pix-11-x5.jpg.asset.json";
import snidanePribornik from "@/assets/pribornik.jpg.asset.json";
import dvurVideo from "@/assets/malikovsky-dvur.mp4.asset.json";
import { Reveal } from "./Reveal";
import { X } from "lucide-react";

type Img = { src: string; alt: string; cls: string };
type GallerySection = { title: string; images: Img[] };

const sections: GallerySection[] = [
  {
    title: "Malíkovský Dvůr",
    images: [
      { src: hero,           alt: "Statek z výšky při západu slunce", cls: "aspect-[4/3]" },
      { src: bedroom,        alt: "Podkrovní ložnice s dřevěnými trámy", cls: "aspect-[4/3]" },
      { src: brana.url,      alt: "Vstupní brána s růžemi do dvora",  cls: "aspect-[4/3]" },
      { src: dvur1.url,      alt: "Dvůr s posezením pod ořešákem",   cls: "aspect-[4/3]" },
      { src: dvur3.url,      alt: "Hlavní stavení s květinami na dvoře", cls: "aspect-[4/3]" },
      { src: malfest004.url, alt: "Štít hlavního stavení s modře orámovanými okny", cls: "aspect-[4/3]" },
      { src: malfest011.url, alt: "Louka s kopretinami před stavením",   cls: "aspect-[4/3]" },
      { src: apartma10.url,  alt: "Apartmán č. 10 — žlutá ložnice s trámy", cls: "aspect-[4/3]" },
      { src: dscf2274.url,   alt: "Podkrovní ložnice s květinovou tapetou", cls: "aspect-[4/3]" },
      { src: dscf2295.url,   alt: "Společenský kout s proutěným nábytkem", cls: "aspect-[4/3]" },
      { src: lounge,         alt: "Společenská místnost s pohovkou",  cls: "aspect-[4/3]" },
      { src: fireplace,      alt: "Krb v obývací části",              cls: "aspect-[4/3]" },
      { src: dvurExterior,   alt: "Bílé stavení s červenou střechou", cls: "aspect-[4/3]" },
      { src: garden,         alt: "Letecký pohled na zahradu a dvůr", cls: "aspect-[4/3]" },
      { src: courtyard,      alt: "Dvůr pod ořešákem se stoly",       cls: "aspect-[4/3]" },
      { src: dvurMeadow,     alt: "Louka s lučními květy před statkem", cls: "aspect-[4/3]" },
      { src: evening,        alt: "Posezení před stavením",           cls: "aspect-[4/3]" },
      { src: meadow,         alt: "Letní louka s lučními květy",      cls: "aspect-[4/3]" },
      { src: pond,           alt: "Rybník v okolí penzionu",          cls: "aspect-[4/3]" },
      { src: outbuilding,    alt: "Vedlejší hospodářské stavení",     cls: "aspect-[4/3]" },
    ],
  },
  {
    title: "Snídaně",
    images: [
      { src: snidaneBufet.url,     alt: "Bohatý švédský stůl se snídaní — pečivo, sýry, uzeniny, čerstvý džus a káva", cls: "aspect-[4/3]" },
      { src: snidaneDezert.url,    alt: "Domácí ovocný dezert s malinami a ostružinami", cls: "aspect-[4/3]" },
      { src: snidanePribornik.url, alt: "Příborník s ručně malovanými modrobílými talíři",  cls: "aspect-[4/3]" },
    ],
  },
  {
    title: "Cyklofest",
    images: [
      { src: cyklofest.url,      alt: "Zahrada s ovocnými stromy a keři", cls: "aspect-[4/3]" },
      { src: cyklofest1.url,     alt: "Výhled z okna do zahrady během Cyklofestu", cls: "aspect-[4/3]" },
      { src: cyklofest3.url,     alt: "Pohled do zahrady a dvora z výšky", cls: "aspect-[4/3]" },
      { src: cyklofest25_8.url,  alt: "Rozkvetlá zahrada během Cyklofestu", cls: "aspect-[4/3]" },
      { src: cyklofest25_46.url, alt: "Příprava ryb během Cyklofestu", cls: "aspect-[4/3]" },
    ],
  },
];

const images = sections.flatMap((section) => section.images);


export function Gallery() {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section id="galerie" className="bg-background py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-accent">Galerie</p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mt-4 max-w-3xl text-balance text-4xl md:text-5xl lg:text-6xl">
            Atmosféra v obrazech.
          </h2>
        </Reveal>

        <div className="mt-16 space-y-16">
          {sections.map((section, sectionIndex) => {
            const startIndex = sections
              .slice(0, sectionIndex)
              .reduce((sum, current) => sum + current.images.length, 0);

            return (
              <div key={section.title}>
                <Reveal>
                  <h3 className="text-2xl md:text-3xl">{section.title}</h3>
                </Reveal>
                <div className="mt-6 grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
                  {section.images.map((img, i) => (
                    <Reveal key={img.src} delay={i * 40} className={img.cls}>
                      <button
                        onClick={() => setActive(startIndex + i)}
                        className="group relative block h-full w-full overflow-hidden rounded-sm"
                        aria-label={`Zobrazit fotografii: ${img.alt}`}
                      >
                        <img
                          src={img.src}
                          alt={img.alt}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
                      </button>
                    </Reveal>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <Reveal delay={150} className="mt-16">
          <div className="relative overflow-hidden rounded-sm shadow-elegant">
            <video
              src={dvurVideo.url}
              className="aspect-video w-full object-cover"
              controls
              playsInline
              preload="metadata"
              poster={hero}
            />
          </div>
        </Reveal>
      </div>

      {active !== null && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[60] bg-black/90 flex items-center justify-center p-6 animate-fade-in"
          onClick={() => setActive(null)}
        >
          <button
            aria-label="Zavřít galerii"
            className="absolute top-6 right-6 text-white/80 hover:text-white"
            onClick={() => setActive(null)}
          >
            <X size={28} />
          </button>
          <img
            src={images[active].src}
            alt={images[active].alt}
            className="max-h-[88vh] max-w-[95vw] object-contain"
          />
        </div>
      )}
    </section>
  );
}
