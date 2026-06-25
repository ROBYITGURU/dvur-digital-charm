import { Reveal } from "./Reveal";
import { Link } from "@tanstack/react-router";
import {
  
  Accessibility,
  Wifi,
  Car,
  Bike,
  Coffee,
  Flame,
  Wine,
  Baby,
  BookOpen,
  Tv,
  Clock,
  PawPrint,
  Bed,
  ChefHat,
  Home,
  Mountain,
  Trees,
  Users,
  Building2,
  ExternalLink,
} from "lucide-react";
import bedroom from "@/assets/dvur-bedroom.jpg";
import fireplace from "@/assets/dvur-fireplace.jpg";
import lounge from "@/assets/dvur-lounge.jpg";
import meadow from "@/assets/dvur-meadow.jpg";
import exterior from "@/assets/dvur-exterior-1.jpg";
import pokojLoznice1 from "@/assets/pokoj-loznice-1.jpg.asset.json";
import pokoj5 from "@/assets/pokoj-5.jpg.asset.json";
import virtualTour from "@/assets/virtual-tour.jpg";
import apartmaKoupelna1 from "@/assets/apartma-koupelna-1.jpg.asset.json";
import apartmaKoupelna2 from "@/assets/apartma-koupelna-2.jpg.asset.json";
import apartmaKuchynka from "@/assets/apartma-kuchynka.jpg.asset.json";
import apartmaLoznice from "@/assets/apartma---studio-c.10---loznice-2.jpg.asset.json";
import malfest014 from "@/assets/malfest22-014.jpg.asset.json";
import malfest015 from "@/assets/malfest22-015.jpg.asset.json";
import malfest016 from "@/assets/malfest22-016.jpg.asset.json";
import malfest017 from "@/assets/malfest22-017.jpg.asset.json";
import malfest020 from "@/assets/malfest22-020.jpg.asset.json";
import malfest022 from "@/assets/malfest22-022.jpg.asset.json";
import malfest028 from "@/assets/malfest22-028.jpg.asset.json";
import malfest031 from "@/assets/malfest22-031.jpg.asset.json";
import malik0616_36 from "@/assets/malik0616-36.jpg.asset.json";

function CTA({ children }: { children: React.ReactNode }) {
  return (
    <Link
      to="/kontakt"
      className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg"
    >
      {children}
    </Link>
  );
}

type Room = {
  number: string;
  name: string;
  desc: string;
  features: string[];
  capacity: number;
  level: string;
  levelIcon: typeof Home;
  accessible?: boolean;
  highlight?: boolean;
};

const rooms: Room[] = [
  {
    number: "č. 1 · č. 2",
    name: "Dvoulůžkové pokoje v přízemí",
    desc: "Klidné pokoje v přízemí stavení s možností přistýlky pro dítě. Pokoj č. 1 má bezbariérový přístup.",
    features: ["2 osoby + přistýlka", "Vlastní koupelna"],
    capacity: 2,
    level: "Přízemí",
    levelIcon: Home,
    accessible: true,
  },
  {
    number: "č. 3 · č. 4",
    name: "Třílůžkové podkrovní pokoje",
    desc: "Podkrovní pokoje s dřevěnými trámy a venkovským kouzlem. Možnost přistýlky pro platící dítě.",
    features: ["3 osoby + přistýlka", "Vlastní koupelna"],
    capacity: 3,
    level: "Podkroví",
    levelIcon: Mountain,
  },
  {
    number: "č. 5 · č. 6",
    name: "Dvoulůžkové pokoje v podkroví",
    desc: "Komorní pokoje pro páry, které hledají soukromí. Možnost dětské postýlky pro nejmenší.",
    features: ["2 osoby", "Vlastní koupelna", "Dětská postýlka"],
    capacity: 2,
    level: "Podkroví",
    levelIcon: Mountain,
  },
  {
    number: "č. 7",
    name: "Čtyřlůžkový apartmán",
    desc: "Rodinný apartmán v podkroví se dvěma ložnicemi (2 + 2 lůžka) a koupelnou s vanou.",
    features: ["4 osoby (2 + 2)", "2 ložnice", "Vlastní koupelna s vanou"],
    capacity: 4,
    level: "Apartmán",
    levelIcon: Users,
  },
  {
    number: "č. 8",
    name: "Čtyř/pětilůžkový apartmán",
    desc: "Prostorný apartmán v podkroví se dvěma ložnicemi (2 + 3 lůžka) — ideální pro rodiny s více dětmi.",
    features: ["4–5 osob (2 + 3)", "2 ložnice", "Vlastní koupelna s vanou"],
    capacity: 5,
    level: "Apartmán",
    levelIcon: Users,
  },
  {
    number: "č. 10",
    name: "Šestilůžkový apartmán-studio",
    desc: "V protější budově: dvě neprůchozí ložnice (4 + 2), chodba a malá vybavená kuchyňka. Maximum soukromí.",
    features: ["6 osob (4 + 2)", "Vlastní kuchyňka", "Protější budova"],
    capacity: 6,
    level: "Apartmán",
    levelIcon: Building2,
    highlight: true,
  },
];

const stats = [
  { label: "Pokojů", value: "9" },
  { label: "Bezbariérový pokoj", value: "01" },
  { label: "Vlastní koupelna", value: "100%" },
  { label: "Bed & Breakfast", value: "✓" },
];

const dining = [
  {
    icon: Coffee,
    title: "Samoobslužný bufet",
    text: "Bohatá snídaně formou švédského stolu — spousta sladkostí i slaností, Petrovické nakládané hermelíny a utopenci.",
  },
  {
    icon: Flame,
    title: "Večerní grilování",
    text: "Specialita: steaky z masa místního chovatele a nejčerstvější pstruzi.",
  },
  {
    icon: Wine,
    title: "Moravská vína & pípa",
    text: "Dobrá moravská vína, čepované pivo z Kamenice nad Lipou a točená bezinková limonáda.",
  {
    icon: Trees,
    title: "Vše na krásném místě",
    text: "Snídaně i večery u grilu si vychutnáte na našem dvoře a v zahradě — uprostřed klidu České Kanady, mezi stromy a loukami.",
  },
];


const amenities = [
  { icon: ChefHat, title: "Společná kuchyň", text: "Celý den k dispozici — lednice, sporák, mikrovlnka, kávovar." },
  { icon: Baby, title: "Herna pro děti", text: "Stolní fotbálek, knížky, hračky. Venku pískoviště, skluzavka a houpačky." },
  { icon: Tv, title: "Galerie s TV a DVD", text: "Místo pro líné večery — společenská místnost, krb a klidné atrium." },
  { icon: BookOpen, title: "Knihovna a noviny", text: "Malá knihovna, čerstvé noviny a spousta časopisů pro všechny." },
  { icon: Wifi, title: "Wi-Fi zdarma", text: "Spojení se světem v celém objektu, bez omezení." },
  { icon: Bike, title: "Kolárna s nabíjením", text: "Uzamykatelná kolárna pro kola, kočárky a nabíjení elektrokol." },
];

const policies = [
  { icon: Clock, title: "Příjezd", text: "Od 15:30. Mimo hlavní sezonu lze domluvit individuálně." },
  { icon: Clock, title: "Odjezd", text: "Uvolnění pokoje do 10:00. Po dohodě lze upravit." },
  { icon: Car, title: "Parkování", text: "Zdarma na zadní zahradě, bezpečně přímo u penzionu." },
  { icon: PawPrint, title: "Zvířata", text: "Bohužel zvířata neubytováváme. Omlouváme se všem němým tvářím." },
];

function BedRow({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-1.5 text-foreground/70">
      {Array.from({ length: count }).map((_, i) => (
        <Bed key={i} size={18} strokeWidth={1.4} />
      ))}
    </div>
  );
}

export function Rooms() {
  return (
    <div id="ubytovani">
      {/* Intro */}
      <section className="bg-background py-28 md:py-36">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <Reveal>
                <p className="text-xs uppercase tracking-[0.3em] text-accent">
                  Ubytování
                </p>
              </Reveal>
              <Reveal delay={100}>
                <h2 className="mt-4 text-balance text-4xl md:text-5xl lg:text-6xl">
                  Devět pokojů v duchu českého venkova.
                </h2>
              </Reveal>
              <Reveal delay={150}>
                <p className="mt-8 max-w-xl text-lg leading-relaxed text-foreground/75">
                  Všech devět pokojů je vybaveno{" "}
                  <span className="text-foreground">kompletním sociálním zařízením</span>{" "}
                  se sprchou nebo vanou, individuálně dekorováno v tradičním
                  stylu s dotykem českého venkova. Po celkové rekonstrukci se
                  stavení stává plným venkovského klidu k zajištění vašeho
                  úplného pohodlí.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-foreground/70">
                  Jsme připraveni na jednotlivce, páry i celé rodiny —
                  dvoulůžkové a třílůžkové pokoje s možností přistýlky,
                  čtyřlůžkové apartmány a jeden šestilůžkový dvoupokojový
                  apartmán-studio v protější budově.
                </p>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal delay={150}>
                <div className="grid grid-cols-2 gap-px bg-border/60 border border-border/60 rounded-sm overflow-hidden">
                  {stats.map((s) => (
                    <div key={s.label} className="bg-secondary p-6 md:p-8">
                      <p className="font-serif text-3xl md:text-4xl text-foreground">
                        {s.value}
                      </p>
                      <p className="mt-2 text-xs uppercase tracking-widest text-foreground/60">
                        {s.label}
                      </p>
                    </div>
                  ))}
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Decorative photo collage — editorial asymmetric layout */}
      <div className="border-y border-border bg-secondary py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <div className="grid grid-cols-12 grid-rows-2 gap-3 md:gap-4 h-[420px] md:h-[560px]">
            {/* Hero shot — meadow (cottage in flowers), spans 8 cols × 1 row */}
            <Reveal className="col-span-8 row-span-1">
              <figure className="h-full overflow-hidden rounded-sm shadow-sm">
                <img
                  src={pokojLoznice1.url}
                  alt="Podkrovní ložnice s květinovou tapetou"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />

              </figure>
            </Reveal>

            {/* Tall portrait — bedroom, spans 4 cols × 2 rows */}
            <Reveal delay={120} className="col-span-4 row-span-2">
              <figure className="h-full overflow-hidden rounded-sm shadow-sm">
                <img
                  src={bedroom}
                  alt="Podkrovní ložnice v Malíkovském Dvoře"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </figure>
            </Reveal>

            {/* Bottom left pair: fireplace + exterior */}
            <Reveal delay={200} className="col-span-4 row-span-1">
              <figure className="h-full overflow-hidden rounded-sm shadow-sm">
                <img
                  src={fireplace}
                  alt="Krb a kamenná zeď"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </figure>
            </Reveal>
            <Reveal delay={280} className="col-span-4 row-span-1">
              <figure className="h-full overflow-hidden rounded-sm shadow-sm">
                <img
                  src={pokoj5.url}
                  alt="Pokoj č. 5 — podkrovní dvoulůžkový pokoj"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />

              </figure>
            </Reveal>
          </div>
        </div>
      </div>




      {/* Rooms grid — bez fotek */}
      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-accent">
              Pokoje a apartmány
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h3 className="mt-4 max-w-2xl text-balance text-3xl md:text-4xl lg:text-5xl">
              Devět jedinečných pokojů, od dvoulůžkových až po prostorný studio-apartmán pro velkou rodinu.
            </h3>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-6 max-w-2xl text-foreground/70 leading-relaxed">
              Každý pokoj má vlastní charakter. Níže najdete přehled jednotlivých
              typů — pro fotografie skutečných interiérů se podívejte do{" "}
              <Link to="/galerie" className="text-accent underline-offset-4 hover:underline">
                galerie
              </Link>
              .
            </p>
          </Reveal>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rooms.map((room, i) => {
              const LevelIcon = room.levelIcon;
              const capacityLabel =
                room.number === "08" ? "4–5 lůžek" : `${room.capacity} ${room.capacity === 1 ? "lůžko" : room.capacity < 5 ? "lůžka" : "lůžek"}`;
              return (
                <Reveal key={room.number} delay={i * 70}>
                  <article
                    className={`group relative flex h-full flex-col rounded-sm border bg-background p-8 transition-all duration-500 ${
                      room.highlight
                        ? "border-accent/60 shadow-md"
                        : "border-border hover:border-accent/40 hover:shadow-md"
                    }`}
                  >
                    {/* Accent vertical bar on hover */}
                    <span
                      aria-hidden
                      className="pointer-events-none absolute left-0 top-8 bottom-8 w-px bg-accent/0 transition-all duration-500 group-hover:bg-accent/60"
                    />

                    {/* Header: serif number + name inline, arrow on right */}
                    <div className="flex items-start justify-between gap-5">
                      <div className="min-w-0">
                        <p className="font-serif text-3xl md:text-4xl leading-none text-accent">
                          {room.number}
                        </p>
                        <h4 className="mt-4 text-xl leading-snug text-foreground">
                          {room.name}
                        </h4>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="mt-5 text-sm leading-relaxed text-foreground/70">
                      {room.desc}
                    </p>

                    {/* Meta row: beds + level + optional flags */}
                    <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-2 text-xs text-foreground/60">
                      <span className="inline-flex items-center gap-2">
                        <BedRow count={room.capacity} />
                        <span className="uppercase tracking-widest">{capacityLabel}</span>
                      </span>
                      <span className="inline-flex items-center gap-1.5">
                        <LevelIcon size={14} strokeWidth={1.6} />
                        <span className="uppercase tracking-widest">{room.level}</span>
                      </span>
                      {room.accessible && (
                        <span className="inline-flex items-center gap-1.5 text-accent">
                          <Accessibility size={14} strokeWidth={1.6} />
                          <span className="uppercase tracking-widest">Bezbariérový</span>
                        </span>
                      )}
                      {room.highlight && (
                        <span className="inline-flex items-center gap-1.5 text-accent">
                          <span className="uppercase tracking-widest">Apartmán</span>
                        </span>
                      )}
                    </div>

                    {/* Divider + features */}
                    <div className="mt-6 border-t border-border pt-5">
                      <ul className="flex flex-wrap gap-x-4 gap-y-1.5">
                        {room.features.map((f) => (
                          <li
                            key={f}
                            className="text-[12px] text-foreground/65 before:mr-2 before:text-accent/70 before:content-['—']"
                          >
                            {f}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>

        </div>
      </section>

      {/* Ukázky pokojů — fotogalerie */}
      <section className="bg-secondary py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-accent">
              Ukázky pokojů
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h3 className="mt-4 max-w-2xl text-balance text-3xl md:text-4xl">
              Podkrovní pokoje s dřevěnými trámy a venkovským kouzlem.
            </h3>
          </Reveal>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              { src: malfest014.url, alt: "Podkrovní ložnice s květinovou tapetou a kovovou postelí" },
              { src: malfest015.url, alt: "Třílůžkový podkrovní pokoj s dřevěnými trámy" },
              { src: malfest016.url, alt: "Podkrovní pokoj se starožitnou dřevěnou postelí" },
              { src: malfest017.url, alt: "Podkrovní pokoj s trámovým stropem a křeslem u okna" },
              { src: malfest022.url, alt: "Dvoulůžkový pokoj s otevřenými okny a výhledem do zahrady" },
              { src: malfest028.url, alt: "Prostorný podkrovní pokoj s dřevěnými postelemi a šatní skříní" },
              { src: malik0616_36.url, alt: "Křeslo u okna s výhledem do krajiny" },
            ].map((img, i) => (
              <Reveal key={img.src} delay={i * 80}>
                <figure className="overflow-hidden rounded-sm shadow-sm">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-[1200ms] hover:scale-105"
                  />
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Společné prostory */}
      <section className="bg-background pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-accent">
              Společné prostory
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h3 className="mt-4 max-w-2xl text-balance text-3xl md:text-4xl">
              Místa pro odpočinek, posezení a společné chvíle.
            </h3>
          </Reveal>

          <div className="mt-12 grid gap-4 md:grid-cols-2">
            {[
              { src: malfest020.url, alt: "Posezení u francouzských dveří s výhledem na terasu" },
              { src: malfest031.url, alt: "Velká společenská místnost se schodištěm a posezením" },
            ].map((img, i) => (
              <Reveal key={img.src} delay={i * 80}>
                <figure className="overflow-hidden rounded-sm shadow-sm">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-[1200ms] hover:scale-105"
                  />
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Apartmán č. 10 — fotogalerie */}
      <section className="bg-background pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-6">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-accent">
              Apartmán č. 10
            </p>
          </Reveal>
          <Reveal delay={100}>
            <h3 className="mt-4 max-w-2xl text-balance text-3xl md:text-4xl">
              Šestilůžkový apartmán-studio s vlastní kuchyňkou a koupelnou.
            </h3>
          </Reveal>

          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              { src: apartmaLoznice.url, alt: "Apartmán č. 10 — ložnice se žlutou postelí a trámy" },
              { src: apartmaKoupelna1.url, alt: "Apartmán č. 10 — koupelna s vanou" },
              { src: apartmaKoupelna2.url, alt: "Apartmán č. 10 — koupelna s umyvadlem a WC" },
              { src: apartmaKuchynka.url, alt: "Apartmán č. 10 — vybavená kuchyňka" },
            ].map((img, i) => (
              <Reveal key={img.src} delay={i * 80}>
                <figure className="overflow-hidden rounded-sm shadow-sm">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-[1200ms] hover:scale-105"
                  />
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Virtuální prohlídka */}
      <section className="bg-secondary py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="text-xs uppercase tracking-[0.3em] text-accent">
                  Prohlídka
                </p>
              </Reveal>
              <Reveal delay={100}>
                <h3 className="mt-4 text-balance text-3xl md:text-4xl lg:text-5xl">
                  Projdete se Dvorem ještě před příjezdem.
                </h3>
              </Reveal>
              <Reveal delay={150}>
                <p className="mt-6 max-w-md text-foreground/75 leading-relaxed">
                  Nahlédněte pod pokličku Malíkovského Dvora — projděte se
                  interiérem i exteriérem v interaktivní 360° prohlídce.
                </p>
              </Reveal>
              <Reveal delay={200}>
                <a
                  href="https://www.google.com/maps/@49.0940461,15.0134406,3a,75y,124.61h,79.29t/data=!3m8!1e1!3m6!1sAF1QipP06x47APktsUoiMJ50RWtZwoj3574aw4iQF8S5!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fp%2FAF1QipP06x47APktsUoiMJ50RWtZwoj3574aw4iQF8S5%3Dw900-h600-k-no-pi10.709999999999994-ya180.1542810058594-ro0-fo100!7i11000!8i5500?entry=ttu&g_ep=EgoyMDI1MTIwMS4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg"
                >
                  Spustit virtuální prohlídku
                  <ExternalLink size={16} strokeWidth={1.5} />
                </a>
              </Reveal>
            </div>

            <Reveal delay={120} className="lg:col-span-7">
              <a
                href="https://www.google.com/maps/@49.0940461,15.0134406,3a,75y,124.61h,79.29t/data=!3m8!1e1!3m6!1sAF1QipP06x47APktsUoiMJ50RWtZwoj3574aw4iQF8S5!2e10!3e12!6shttps:%2F%2Flh3.googleusercontent.com%2Fp%2FAF1QipP06x47APktsUoiMJ50RWtZwoj3574aw4iQF8S5%3Dw900-h600-k-no-pi10.709999999999994-ya180.1542810058594-ro0-fo100!7i11000!8i5500?entry=ttu&g_ep=EgoyMDI1MTIwMS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noreferrer"
                className="group relative block overflow-hidden rounded-sm shadow-md"
              >
                <img
                  src={virtualTour}
                  alt="Virtuální prohlídka Malíkovského Dvora — Street View"
                  loading="lazy"
                  className="aspect-video w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors group-hover:bg-black/30">
                  <div className="flex items-center gap-2 rounded-full bg-background/90 px-5 py-2.5 text-sm font-medium text-foreground backdrop-blur-sm transition-all group-hover:bg-background">
                    <ExternalLink size={14} strokeWidth={1.5} />
                    Otevřít virtuální prohlídku
                  </div>
                </div>
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Stravování / Gril — s reálnou fotkou */}
      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-12 lg:items-center">
            <Reveal className="lg:col-span-5">
              <figure className="overflow-hidden rounded-sm shadow-md">
                <img
                  src={lounge}
                  alt="Společenská místnost s pohovkou v Malíkovském Dvoře"
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
                <figcaption className="bg-secondary px-5 py-3 text-xs uppercase tracking-widest text-foreground/55">
                  Společenská místnost
                </figcaption>
              </figure>
            </Reveal>


            <div className="lg:col-span-7 lg:pl-8">
              <Reveal>
                <p className="text-xs uppercase tracking-[0.3em] text-accent">
                  Stravování
                </p>
              </Reveal>
              <Reveal delay={100}>
                <h3 className="mt-4 text-balance text-3xl md:text-4xl lg:text-5xl">
                  Bed &amp; Breakfast — a večery u grilu.
                </h3>
              </Reveal>
              <Reveal delay={150}>
                <p className="mt-6 max-w-xl text-foreground/75 leading-relaxed">
                  V blízkém okolí najdete restaurace a hospůdky s dobrou domácí
                  kuchyní. U nás na dvoře po domluvě grilujeme — druhý gril
                  i ohniště jsou pro vaše kulinářské radosti vždy připravené.
                </p>
              </Reveal>

              <div className="mt-10 grid gap-px bg-border/60 sm:grid-cols-2 border border-border/60 rounded-sm overflow-hidden">
                {dining.map(({ icon: Icon, title, text }, i) => (
                  <Reveal key={title} delay={i * 60}>
                    <div className="bg-background p-6 h-full">
                      <Icon className="text-accent" size={22} strokeWidth={1.4} />
                      <h4 className="mt-4 text-base">{title}</h4>
                      <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                        {text}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Zařízení a vybavení */}
      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <Reveal>
                <p className="text-xs uppercase tracking-[0.3em] text-accent">
                  Zařízení a vybavení
                </p>
              </Reveal>
              <Reveal delay={100}>
                <h3 className="mt-4 max-w-2xl text-balance text-3xl md:text-4xl lg:text-5xl">
                  Vše, co potřebujete pro skutečný odpočinek.
                </h3>
              </Reveal>
            </div>
            <Reveal delay={150}>
              <p className="max-w-md text-foreground/70 leading-relaxed">
                Pro vaše děti máme spoustu možností na hraní v prostorné herně
                i na velké zahradě. Pro dospělé klidné atrium, krb a knížky.
              </p>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-px bg-border/60 sm:grid-cols-2 lg:grid-cols-3 border border-border/60 rounded-sm overflow-hidden">
            {amenities.map(({ icon: Icon, title, text }, i) => (
              <Reveal key={title} delay={i * 60}>
                <div className="bg-background p-8 h-full transition-colors hover:bg-secondary">
                  <Icon className="text-accent" size={26} strokeWidth={1.4} />
                  <h4 className="mt-5 text-xl">{title}</h4>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                    {text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Praktické info — s reálnou fotkou krbu */}
      <section className="bg-background py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="text-xs uppercase tracking-[0.3em] text-accent">
                  Příjezd a odjezd
                </p>
              </Reveal>
              <Reveal delay={100}>
                <h3 className="mt-4 text-balance text-3xl md:text-4xl">
                  Praktické informace pro váš pobyt.
                </h3>
              </Reveal>
              <Reveal delay={150}>
                <p className="mt-6 max-w-md text-foreground/70 leading-relaxed">
                  Pár jednoduchých pravidel, abyste se cítili jako doma a my mohli
                  všechno připravit tak, jak má být.
                </p>
              </Reveal>

            </div>

            <div className="lg:col-span-7 lg:pl-8 divide-y divide-border">
              {policies.map(({ icon: Icon, title, text }, i) => (
                <Reveal key={title} delay={i * 80}>
                  <div className="py-6 first:pt-0 flex gap-6 items-start">
                    <Icon className="text-accent shrink-0 mt-1" size={26} strokeWidth={1.4} />
                    <div>
                      <h4 className="text-xl">{title}</h4>
                      <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                        {text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="border-t border-border bg-secondary py-20">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <Reveal>
            <Bed className="text-accent mx-auto" size={32} strokeWidth={1.2} />
          </Reveal>
          <Reveal delay={100}>
            <h3 className="mt-6 text-balance text-3xl md:text-4xl">
              Pošleme vám přesnou kalkulaci na míru.
            </h3>
          </Reveal>
          <Reveal delay={150}>
            <p className="mt-4 text-foreground/70 leading-relaxed">
              Napište nám počet osob a věk dětí — obratem se ozveme s nabídkou
              a potvrzením dostupnosti.
            </p>
          </Reveal>
          <Reveal delay={200}>
            <div className="mt-10">
              <CTA>Poptat termín a cenu</CTA>
            </div>
          </Reveal>
        </div>
      </div>
    </div>
  );
}
