import { Star, Quote } from "lucide-react";
import { Reveal } from "./Reveal";

const reviews = [
  {
    name: "Jana Peclová",
    text: "Ráda bych vřele doporučila úžasnou péči manželů Perlových v penzionu Malíkovský Dvůr všem, kteří oceňujete individuální, lidský a přitom profesionální přístup. Dokázali vytvořit překrásné kultivované prostředí, ve kterém samotný pobyt přináší duši klid a pohodu. O přírodě a okolí nebudu psát, je to jedno z nejhezčích míst v Čechách.",
  },
  {
    name: "Pavel K.",
    text: "Snídaně podávaná na překrásném servisu, výborná káva, úžasné pokrmy na grilu. Místo, které tak citlivě udržují, je opravdu výjimečné. Vrátíme se.",
  },
  {
    name: "Lucie M.",
    text: "Klid, příroda, profesionální péče. Po pár dnech jsem se nechtěla vracet domů. Děkuji za nádherný pobyt.",
  },
];

export function Reviews() {
  return (
    <section id="recenze" className="bg-primary text-primary-foreground py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-accent">
            Co o nás říkají hosté
          </p>
        </Reveal>
        <Reveal delay={100}>
          <div className="mt-4 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="max-w-3xl">
              <h2 className="text-balance text-4xl md:text-5xl lg:text-6xl">
                Pět hvězdiček z opravdové péče.
              </h2>
              <p className="mt-5 text-base md:text-lg text-primary-foreground/75">
                Pět hvězdiček od Vás nás těší a zavazují.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex gap-1 text-accent">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} fill="currentColor" strokeWidth={0} />
                ))}
              </div>
              <span className="text-sm text-primary-foreground/80">
                Hodnocení hostů na Google
              </span>
            </div>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal key={i} delay={i * 100}>
              <figure className="h-full rounded-sm border border-primary-foreground/10 bg-primary-foreground/[0.03] p-8 backdrop-blur-sm">
                <Quote size={24} className="text-accent" />
                <blockquote className="mt-4 text-sm leading-relaxed text-primary-foreground/85">
                  „{r.text}"
                </blockquote>
                <figcaption className="mt-6 pt-6 border-t border-primary-foreground/10 font-serif text-lg">
                  {r.name}
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        <Reveal delay={150}>
          <div className="mt-16 rounded-sm border border-primary-foreground/10 bg-primary-foreground/[0.04] p-8 md:p-10 backdrop-blur-sm">
            <div className="grid gap-10 md:grid-cols-[1fr_auto] md:items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-accent">
                  Doporučení a ocenění
                </p>
                <h3 className="mt-3 font-serif text-2xl md:text-3xl">
                  Ohodnoťte nás na Mapy.com
                </h3>
                <p className="mt-3 text-sm md:text-base leading-relaxed text-primary-foreground/75 max-w-xl">
                  Vaše zpětná vazba nám pomáhá zlepšovat se a ostatním hostům
                  najít místo s duší. Děkujeme za každou hvězdičku.
                </p>

                <div className="mt-6 flex flex-wrap items-center gap-5">
                  <a
                    href="https://mapy.com/cs/?source=firm&id=2210631&firmBadge=1&variant=2"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block transition-opacity hover:opacity-90"
                    aria-label="Ohodnoťte nás na Mapy.com"
                  >
                    <img
                      src="https://mapy.com/firm-badge.svg?id=2210631&source=firm&variant=2"
                      alt="Ohodnoťte nás na Mapy.com"
                      width={257}
                      loading="lazy"
                    />
                  </a>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-start md:justify-end gap-6">
                <a
                  href="https://mapy.com/cs/?source=firm&id=2210631&firmBadge=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block transition-opacity hover:opacity-90"
                  aria-label="Malíkovský Dvůr na Mapy.com"
                >
                  <img
                    src="https://mapy.com/firm-badge.svg?id=2210631&source=firm&dark=1"
                    alt="Malíkovský Dvůr — profil na Mapy.com"
                    loading="lazy"
                  />
                </a>
                <a
                  href="https://www.firmy.cz/detail/2210631-malikovsky-dvur-horni-pena.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block transition-opacity hover:opacity-90"
                  aria-label="TOP firma 2025 — Firmy.cz"
                >
                  <img
                    src="https://www.firmy.cz/top-firma/2025.svg"
                    alt="TOP firma 2025 — Firmy.cz"
                    width={120}
                    height={104}
                    loading="lazy"
                  />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
