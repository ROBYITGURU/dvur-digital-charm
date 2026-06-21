import { Phone, Mail, MapPin, CalendarCheck, ArrowUpRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { LocationMap } from "./LocationMap";

const BOOKING_URL = "https://book.trevlix.com/book/app/?cid=6759728&mode=window";

export function Contact() {
  return (
    <section id="kontakt" className="bg-background py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-accent">Kontakt</p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mt-4 max-w-3xl text-balance text-4xl md:text-5xl lg:text-6xl">
            Rezervujte si svůj pobyt.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-5">
          <Reveal className="lg:col-span-2 space-y-8">
            <p className="text-foreground/70 leading-relaxed max-w-md">
              Rezervujte si termín online přes náš rezervační systém, nebo nám
              zavolejte — vždy si rádi popovídáme a poradíme s výběrem pokoje.
            </p>

            <ul className="space-y-5">
              <li className="flex gap-4">
                <Phone className="text-accent shrink-0 mt-1" size={20} />
                <div>
                  <p className="text-xs uppercase tracking-widest text-foreground/50">Míša</p>
                  <a href="tel:+420777298506" className="text-lg hover:text-accent transition-colors">
                    +420 777 298 506
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <Phone className="text-accent shrink-0 mt-1" size={20} />
                <div>
                  <p className="text-xs uppercase tracking-widest text-foreground/50">Petr</p>
                  <a href="tel:+420602337836" className="text-lg hover:text-accent transition-colors">
                    +420 602 337 836
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <Mail className="text-accent shrink-0 mt-1" size={20} />
                <div>
                  <p className="text-xs uppercase tracking-widest text-foreground/50">Rezervace</p>
                  <a href="mailto:rezervace@malikovskydvur.cz" className="block text-lg hover:text-accent transition-colors">
                    rezervace@malikovskydvur.cz
                  </a>
                  <a href="mailto:pension@malikovskydvur.cz" className="block text-sm text-foreground/60 hover:text-accent transition-colors">
                    pension@malikovskydvur.cz
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <MapPin className="text-accent shrink-0 mt-1" size={20} />
                <div>
                  <p className="text-xs uppercase tracking-widest text-foreground/50">Adresa</p>
                  <p className="text-lg leading-snug">
                    Míša a Petr Perlovi<br />
                    Malíkov nad Nežárkou 6<br />
                    377 01 Jindřichův Hradec
                  </p>
                </div>
              </li>
            </ul>

            <p className="text-sm text-foreground/70 pt-2 border-t border-border">
              Standardní check-in od 15:30.
            </p>

            <LocationMap />
          </Reveal>

          <Reveal delay={150} className="lg:col-span-3">
            <div className="relative overflow-hidden rounded-sm border border-border bg-secondary p-8 md:p-12">
              <div className="flex flex-col h-full gap-8">
                <div className="inline-flex items-center gap-2 self-start rounded-full bg-accent/15 px-4 py-1.5 text-xs uppercase tracking-widest text-accent">
                  <CalendarCheck size={14} /> Online rezervace
                </div>
                <div>
                  <h3 className="text-3xl md:text-4xl leading-tight">
                    Rezervujte si pobyt online přes Trevlix.
                  </h3>
                  <p className="mt-5 text-foreground/70 leading-relaxed max-w-lg">
                    V rezervačním systému uvidíte aktuální dostupnost pokojů,
                    ceny a vyberete si termín přesně podle sebe. Potvrzení
                    rezervace obdržíte ihned na e-mail.
                  </p>
                </div>

                <ul className="grid gap-3 text-sm text-foreground/75">
                  <li className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    Okamžitá dostupnost a potvrzení
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    Bezpečná platba a transparentní ceny
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                    Možnost zrušení podle podmínek pobytu
                  </li>
                </ul>

                <div className="flex flex-col sm:flex-row gap-3 mt-2">
                  <a
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg"
                  >
                    Rezervovat přes Trevlix <ArrowUpRight size={16} />
                  </a>
                  <a
                    href="tel:+420777298506"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-input bg-background px-8 py-4 text-sm font-medium text-foreground transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    <Phone size={16} /> Zavolat
                  </a>
                </div>

                <p className="text-xs text-foreground/50">
                  Rezervační systém se otevře v novém okně.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
