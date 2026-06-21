import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground/80">
      <div className="mx-auto max-w-7xl px-6 pt-16 pb-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-2">
            <p className="font-serif text-3xl tracking-wide text-primary-foreground">
              Malíkovský Dvůr
            </p>
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-primary-foreground/70">
              Boutique penzion v srdci České Kanady. Klidné místo s dřevěnými trámy,
              domácí snídaní a opravdovou pohostinností.
            </p>
            <p className="mt-6 text-xs uppercase tracking-[0.2em] text-primary-foreground/50">
              Míša &amp; Petr Perlovi
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-primary-foreground">
              Navigace
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li><Link to="/o-nas" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">O penzionu</Link></li>
              <li><Link to="/pokoje" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Pokoje</Link></li>
              <li><Link to="/cenik" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Ceník</Link></li>
              <li><Link to="/okoli" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Okolí</Link></li>
              <li><Link to="/galerie" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Galerie</Link></li>
              <li><Link to="/kontakt" className="text-primary-foreground/70 hover:text-primary-foreground transition-colors">Kontakt</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-xs uppercase tracking-[0.2em] text-primary-foreground">
              Kontakt
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              <li className="flex items-start gap-2.5 text-primary-foreground/70">
                <MapPin size={16} className="mt-0.5 shrink-0 text-accent" />
                <span>Malíkov nad Nežárkou 6<br />377 01 Jindřichův Hradec</span>
              </li>
              <li>
                <a href="tel:+420777298506" className="flex items-center gap-2.5 text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  <Phone size={16} className="shrink-0 text-accent" />+420 777 298 506
                </a>
              </li>
              <li>
                <a href="tel:+420602337836" className="flex items-center gap-2.5 text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                  <Phone size={16} className="shrink-0 text-accent" />+420 602 337 836
                </a>
              </li>
              <li>
                <a href="mailto:rezervace@malikovskydvur.cz" className="flex items-center gap-2.5 text-primary-foreground/70 hover:text-primary-foreground transition-colors break-all">
                  <Mail size={16} className="shrink-0 text-accent" />rezervace@malikovskydvur.cz
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="mx-auto max-w-7xl px-6 py-5 flex flex-col md:flex-row gap-2 items-center justify-between">
          <p className="text-xs text-primary-foreground/60">
            © {new Date().getFullYear()} Malíkovský Dvůr. Všechna práva vyhrazena.
          </p>
          <p className="text-xs text-primary-foreground/60">
            Boutique penzion v České Kanadě
          </p>
        </div>
      </div>
    </footer>
  );
}
