import { Reveal } from "./Reveal";
import { Check } from "lucide-react";
import { Link } from "@tanstack/react-router";

function PricingCta() {
  return (
    <Link
      to="/kontakt"
      className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg"
    >
      Poptat termín a cenu
    </Link>
  );
}

const rows = [
  {
    name: "Dvoulůžkový pokoj č. 1 a 2",
    note: "Přistýlka pro platící dítě (je-li požadována) 450 Kč",
    price: "1 900 Kč",
  },
  {
    name: "Třílůžkový pokoj č. 3 a 4",
    note: "Přistýlka pro platící dítě (je-li požadována) 450 Kč",
    price: "2 375 Kč",
  },
  {
    name: "Dvoulůžkový pokoj č. 5 a 6 — pro 1 osobu",
    note: "Při obsazení pouze jednou plně platící dospělou osobou",
    price: "1 290 Kč",
  },
  {
    name: "Dvoulůžkový pokoj č. 5 a 6 — pro 2 osoby",
    note: "Vhodná pouze dětská postýlka",
    price: "1 900 Kč",
  },
];

const apartments = [
  {
    name: "Čtyřlůžkový apartmán č. 7 a 8",
    note: "2 dospělí + 2 platící děti (4–13 let)",
    price: "2 740 Kč",
  },
  {
    name: "Pětilůžkový apartmán č. 8",
    note: "2 dospělí + 3 platící děti (4–13 let)",
    price: "3 200 Kč",
  },
  {
    name: "Šestilůžkový apartmán-studio č. 10",
    note: "2 dospělí + 2 platící děti (4–13 let)",
    price: "2 940 Kč",
  },
  {
    name: "Šestilůžkový apartmán-studio č. 10",
    note: "2 dospělí + 3 platící děti (4–13 let)",
    price: "3 390 Kč",
  },
  {
    name: "Šestilůžkový apartmán-studio č. 10",
    note: "2 dospělí + 4 platící děti (4–13 let)",
    price: "3 840 Kč",
  },
];

const included = [
  "Bohatá snídaně formou švédského stolu",
  "Kvalitní ložní prádlo, ručníky a osušky",
  "Využití všech sportovních potřeb",
  "Parkování aut a kolárna s nabíjením elektrokol",
  "Společná plně vybavená kuchyně",
  "Wi-Fi v celém penzionu zdarma",
  "Závěrečný úklid",
];

const children = [
  "Děti do 3 let včetně mají ubytování zdarma — platí se pouze 250 Kč za postel/postýlku a ložní prádlo na celý pobyt.",
  "Děti 4–13 let mají 50% slevu (již promítnuta v cenách jednotlivých pokojů, resp. v ceně přistýlek).",
  "Snídaně pro neplatící děti v případě zájmu 50 Kč.",
  "Dětskou postýlku včetně ložního prádla rádi přichystáme na kterýkoli pokoj (po předchozí rezervaci, 250 Kč na celý pobyt).",
  "Pro Vaše nejmenší máme dětské židličky, dětské nádobí a příbory, nočníky, vaničky, schůdky k umyvadlu, dětskou chůvičku, sedačku na kolo — vše zdarma.",
];

const goodToKnow = [
  "Postele jsou vybaveny kvalitními zdravotními matracemi od renomovaných českých výrobců Natur matrace a Purtex.",
  "Všechny pokoje mají vlastní koupelnu se sprchovým koutem nebo vanou a toaletou.",
  "Ve všech koupelnách jsou fény, ručníky, osušky a kvalitní toaletní papír.",
  "Všechny ceny jsou za jednu noc včetně všech služeb — ložní prádlo, snídaně formou bohatého švédského stolu, využití sportovních potřeb, parkování, kolárna s nabíjením, kuchyně, Wi-Fi a závěrečný úklid.",
  "V době letních prázdnin (červenec, srpen) poskytujeme pouze týdenní ubytování sobota–sobota a počítá se vždy cena za celý týden.",
  "Na jednu noc neubytováváme přes víkendy a k cenám se připočítává 25 % z jejich výše.",
  "V případě svátků navazujících na víkendy nabízíme pobyty vždy na všechny volné dny.",
  "Rekreačně-pobytový poplatek obci činí 10 Kč za noc pro dospělou osobu.",
  "Zvířata bohužel neubytováváme.\n• Příjezd od 15:30, odjezd do 10:00, mimo prázdniny je možno domluvit.",
];

const cancellation = [
  "Při objednání pobytu prosíme o počty osob a věk dětí — obratem Vám zašleme přesnou kalkulaci a poprosíme o závaznou rezervaci.",
  "Následně Vás požádáme o zálohu ve výši 30 % z ceny ubytování. Pokud nebylo dohodnuto jinak, prosíme o zaslání zálohy do 15 dní od potvrzení rezervace. Doplatek se platí v hotovosti při začátku, resp. konci pobytu společně s případnou spotřebou.",
  "Zrušení více než 60 dní před termínem ubytování — vracíme 100 % zálohy (záloha činí 30 % z ceny ubytování).",
  "Zrušení 30–60 dní před termínem — storno poplatek 50 % ze zálohy.",
  "Zrušení 10–29 dní před termínem — storno poplatek 100 % zálohy.",
  "Pozdější zrušení pobytu, pozdější příjezd či dřívější odjezd bez včasné dohody — účtujeme celkovou částku rezervovaného pobytu, pokud pokoj zůstane neobsazený.",
  "Zrušení prosíme pouze písemnou (e-mailovou) formou.",
];

export function Pricing() {
  return (
    <section id="cenik" className="bg-background py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <Reveal>
              <p className="text-xs uppercase tracking-[0.3em] text-accent">Ceník 2026</p>
            </Reveal>
            <Reveal delay={100}>
              <h2 className="mt-4 max-w-2xl text-balance text-4xl md:text-5xl lg:text-6xl">
                Ceny pobytu. Transparentní ceny včetně bohaté snídaně.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={150}>
            <div className="max-w-md space-y-4">
              <p className="text-foreground/70 leading-relaxed whitespace-pre-line">
                Všechny ceny jsou za jednu noc a zahrnují snídani formou švédského stolu a všechny
                nabízené služby penzionu. Platnost: 1. 1.–31. 12. 2026.{"\n"}
                Last minute{"\u00A0"}
              </p>
              <div className="text-accent font-medium leading-relaxed whitespace-pre-line">
                Last minute sleva v týdnu 11.-18.7.2026, ubytování{"\n"}
                je možné minimálně{"\u00A0"}na pět nocí se slevou 15%.
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          <Reveal className="h-full">
            <div className="rounded-sm border border-border bg-background p-8 md:p-10 h-full">
              <h3 className="font-serif text-2xl">Pokoje</h3>
              <p className="mt-2 text-sm text-foreground/60">Cena za pokoj a noc</p>
              <ul className="mt-8 divide-y divide-border">
                {rows.map((r, i) => (
                  <li key={i} className="py-5 flex items-start justify-between gap-6">
                    <div>
                      <p className="text-base">{r.name}</p>
                      <p className="mt-1 text-xs text-foreground/60 leading-relaxed">{r.note}</p>
                    </div>
                    <span className="font-serif text-xl text-accent whitespace-nowrap">
                      {r.price}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={100} className="h-full">
            <div className="rounded-sm border border-border bg-background p-8 md:p-10 h-full">
              <h3 className="font-serif text-2xl">Apartmány a rodinné ubytování</h3>
              <p className="mt-2 text-sm text-foreground/60">Cena za apartmán a noc</p>
              <ul className="mt-8 divide-y divide-border">
                {apartments.map((r, i) => (
                  <li key={i} className="py-5 flex items-start justify-between gap-6">
                    <div>
                      <p className="text-base">{r.name}</p>
                      <p className="mt-1 text-xs text-foreground/60 leading-relaxed">{r.note}</p>
                    </div>
                    <span className="font-serif text-xl text-accent whitespace-nowrap">
                      {r.price}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-xs text-foreground/60 leading-relaxed">
                Cena lůžka při plné obsazenosti dospělou osobou: 915 Kč (4–5 lůžk. apartmán) /
                790 Kč (6lůžk. studio). Za každé lůžko obsazené platícím dítětem se odečítá
                460 Kč, resp. 450 Kč.
              </p>
            </div>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <Reveal className="h-full">
            <div className="rounded-sm border border-border bg-background p-8 md:p-10 h-full">
              <h3 className="font-serif text-2xl">V ceně je zahrnuto</h3>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {included.map((i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-foreground/80">
                    <Check size={16} className="mt-1 text-accent shrink-0" />
                    {i}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={100} className="h-full">
            <div className="rounded-sm border border-border bg-background p-8 md:p-10 h-full">
              <h3 className="font-serif text-2xl">Děti</h3>
              <ul className="mt-6 space-y-3 text-sm leading-relaxed text-foreground/75">
                {children.map((c, i) => (
                  <li key={i}>• {c}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <Reveal className="h-full">
            <div className="rounded-sm border border-border bg-background p-8 md:p-10 h-full">
              <h3 className="font-serif text-2xl">Dobré vědět</h3>
              <ul className="mt-6 space-y-3 text-sm leading-relaxed text-foreground/75">
                {goodToKnow.map((g, i) => (
                  <li key={i}>• {g}</li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={100} className="h-full">
            <div className="rounded-sm border border-border bg-background p-8 md:p-10 h-full">
              <h3 className="font-serif text-2xl">Storno podmínky</h3>
              <ul className="mt-6 space-y-3 text-sm leading-relaxed text-foreground/75">
                {cancellation.map((c, i) => (
                  <li key={i}>• {c}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <div className="mt-16 flex flex-col items-center gap-4">
            <p className="text-sm text-foreground/60">
              Pošleme Vám přesnou kalkulaci na míru podle počtu osob a věku dětí.
            </p>
            <PricingCta />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
