import { Coffee, TreePine, Bike, Stars, Wine, Heart } from "lucide-react";
import { Reveal } from "./Reveal";

const items = [
  {
    icon: Coffee,
    title: "Voňavá snídaně",
    text: "Domácí snídaně servírovaná na krásném anglickém porcelánu, čerstvě pražená káva z pražírny Buna café a křupavé pečivo z místní pekárny.",
  },
  {
    icon: TreePine,
    title: "Hluboké lesy",
    text: "Penzion stojí v srdci České Kanady. Čistý vzduch, ticho a nekonečné lesní cesty začínají hned za prahem.",
  },
  {
    icon: Bike,
    title: "Greenway Praha–Vídeň",
    text: "Světově známá cyklotrasa č. 32 prochází přímo Malíkovem. Okolí je protkané trasami všech stupňů náročnosti.",
  },
  {
    icon: Wine,
    title: "Samoobslužná pípa",
    text: "Vychlazené prémiové pivo z Kamenického pivovaru, moravská vína, madeira a vybrané rumy — vše ve vaší režii.",
  },
  {
    icon: Stars,
    title: "Hvězdná obloha",
    text: "Daleko od světelného smogu měst. Večery, kdy se chce zůstat venku jen kvůli pohledu vzhůru.",
  },
  {
    icon: Heart,
    title: "Lidský přístup",
    text: "Individuální, rodinná a profesionální péče, vřelá a bez kompromisů. Tak, jak se to dnes už málokde najde.",
  },
];

export function Features() {
  return (
    <section className="bg-background py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-accent">
            Proč Malíkovský Dvůr
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mt-4 max-w-3xl text-balance text-4xl md:text-5xl lg:text-6xl">
            Detaily, kvůli kterým se hosté vracejí.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-px bg-border/60 sm:grid-cols-2 lg:grid-cols-3 border border-border/60">
          {items.map(({ icon: Icon, title, text }, i) => (
            <Reveal key={title} delay={i * 60}>
              <div className="bg-background p-8 md:p-10 h-full transition-colors hover:bg-secondary">
                <Icon className="text-accent" size={28} strokeWidth={1.4} />
                <h3 className="mt-6 text-2xl">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                  {text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
