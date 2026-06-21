import cycling from "@/assets/cycling.jpg";
import pond from "@/assets/pond.jpg";
import stars from "@/assets/stars.jpg";
import { Reveal } from "./Reveal";
import { ExternalLink } from "lucide-react";

const items = [
  {
    img: cycling,
    title: "Cyklistika a túry",
    text: "Greenway Praha–Vídeň (cyklotrasa č. 32) prochází přímo Malíkovem. Okolí je protkáno trasami všech stupňů náročnosti — kombinujte je s úzkorozchodkou do Nové Bystřice nebo Kamenice nad Lipou.",
  },
  {
    img: pond,
    title: "Rybníky a koupání",
    text: "Pískovny s malými plážemi, stovky třeboňských rybníků, Staňkovský rybník. Rybaření na Nežárce na povolenku. Klid u vody, který v Čechách nemá obdoby.",
  },
  {
    img: stars,
    title: "Hrady, zámky a kultura",
    text: "Zámek Jindřichův Hradec s Rondelem a Černou věží, hrad Landštejn, romantická Červená Lhota, Telč, Dačice i Třeboň se Schwarzenberskou hrobkou — vše v dosahu.",
  },
];

const tips = [
  { title: "Jindřichův Hradec", text: "Zámek, Národní muzeum fotografie, Krýzovy jesličky (zápis v Guinessově knize rekordů) a Dům gobelínů.", url: "https://www.jh.cz" },
  { title: "Česká Kanada", text: "Hluboké lesy, starý klášter se zázračnou studánkou, čisté rybníky a panenská příroda.", url: "https://www.ceska-kanada.info" },
  { title: "Úzkorozchodná železnice", text: "Vlakem z Jindřichova Hradce do Nové Bystřice — nezapomeňte na pomník Járy Cimrmana v Kaprounu.", url: "https://www.jhmd.cz" },
  { title: "Hrad Landštejn a Mařížský zámek", text: "Vyhlídka po kraji, vlastní hrníček v Maříži a Trojmezí Čech, Moravy a Rakouska.", url: "https://www.hrad-landstejn.cz" },
  { title: "Slavonické podzemí", text: "Pro dobrodružnější povahy — historické chodby a zpřístupněné bunkry první linie podél hranic.", url: "https://www.slavonice-mesto.cz" },
  { title: "Červená Lhota a Telč", text: "Romantický vodní zámek a UNESCO náměstí — výletní klasika, která nikdy nezklame.", url: "https://www.zamek-cervenalhota.cz" },
  { title: "Golf", text: "Dvě hřiště na dosah: Club Mnich (18 jamek) a Golf Resort Haugschlag u rakouských hranic.", url: "https://www.golfmnich.cz" },
  { title: "Aquapark a bazén", text: "Místní bazén s aqua parkem v Jindřichově Hradci potěší především děti.", url: "https://www.tsjh.cz" },
  { title: "Tenis, koně a alpaky", text: "Antukový kurt v Horní Pěně, jezdecká stáj v Rodvínově, farma Alpaka v Dobré Vodě." },
  { title: "Tip na výlet", text: "Text doplníme." },
  { title: "Tip na výlet", text: "Text doplníme." },
  { title: "Tip na výlet", text: "Text doplníme." },
];

export function Surroundings() {
  return (
    <section id="okoli" className="bg-background py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-accent">
            Okolí a aktivity
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mt-4 max-w-3xl text-balance text-4xl md:text-5xl lg:text-6xl">
            Jedno z nejhezčích míst v Čechách.
          </h2>
        </Reveal>
        <Reveal delay={150}>
          <p className="mt-6 max-w-2xl text-foreground/70 leading-relaxed">
            Ať vyrazíte na kolo, na túru, za prohlídkou hradů či historií měst —
            vždy budete mile překvapeni malebností a čistotou přírody i nádherou
            vesniček a měst České Kanady.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {items.map((it, i) => (
            <Reveal key={it.title} delay={i * 80}>
              <article className="group">
                <div className="overflow-hidden rounded-sm">
                  <img
                    src={it.img}
                    alt={it.title}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                  />
                </div>
                <h3 className="mt-6 text-2xl">{it.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-foreground/70">
                  {it.text}
                </p>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-24">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-accent">Tipy na výlety</p>
          </Reveal>
          <Reveal delay={100}>
            <h3 className="mt-4 max-w-3xl text-balance text-3xl md:text-4xl">
              Na jednu dovolenou je toho docela dost.
            </h3>
          </Reveal>

          <div className="mt-12 grid gap-px bg-border/60 sm:grid-cols-2 lg:grid-cols-3 border border-border/60">
            {tips.map((t, i) => (
              <Reveal key={t.title} delay={i * 40}>
                <div className="bg-background p-8 h-full transition-colors hover:bg-secondary">
                  <h4 className="text-xl">{t.title}</h4>
                  <p className="mt-3 text-sm leading-relaxed text-foreground/70">{t.text}</p>
                  {t.url && (
                    <a
                      href={t.url}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-4 inline-flex items-center gap-1.5 text-xs uppercase tracking-widest text-accent hover:underline"
                    >
                      {new URL(t.url).host.replace("www.", "")} <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
