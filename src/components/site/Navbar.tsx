import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, Phone } from "lucide-react";

const links = [
  { to: "/o-nas", label: "O penzionu" },
  { to: "/pokoje", label: "Pokoje" },
  { to: "/galerie", label: "Galerie" },
  { to: "/okoli", label: "Okolí" },
  { to: "/cenik", label: "Ceník" },
  { to: "/kontakt", label: "Kontakt" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const isHome = pathname === "/";
  // On sub-pages we have no full-bleed hero image behind navbar — use solid look immediately.
  const solid = scrolled || !isHome;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        solid
          ? "bg-background backdrop-blur-md border-b border-border/60 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
        <Link
          to="/"
          className={`font-serif text-2xl md:text-3xl tracking-wide ${
            solid ? "text-foreground" : "text-white drop-shadow"
          }`}
        >
          Malíkovský Dvůr
        </Link>

        <nav className="hidden md:flex items-center gap-7">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeProps={{ className: "text-accent" }}
              className={`text-sm tracking-wide transition-colors hover:text-accent ${
                solid ? "text-foreground/80" : "text-white/90"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://book.trevlix.com/book/app/?cid=6759728&mode=window"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-2 inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg"
          >
            Rezervovat pobyt
          </a>
        </nav>

        <button
          aria-label={open ? "Zavřít menu" : "Otevřít menu"}
          onClick={() => setOpen((v) => !v)}
          className={`md:hidden p-2 rounded-md ${
            solid ? "text-foreground" : "text-white"
          }`}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-background border-t border-border animate-fade-in">
          <nav className="px-6 py-6 flex flex-col gap-4">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="text-foreground/80 hover:text-accent text-base"
                activeProps={{ className: "text-accent" }}
              >
                {l.label}
              </Link>
            ))}
            <a
              href="tel:+420777298506"
              className="inline-flex items-center gap-2 text-foreground/80"
            >
              <Phone size={16} /> +420 777 298 506
            </a>
            <a
              href="https://book.trevlix.com/book/app/?cid=6759728&mode=window"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex justify-center rounded-full bg-primary px-5 py-3 text-sm font-medium text-primary-foreground"
            >
              Rezervovat pobyt
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
