import hero from "@/assets/hero.jpg";
import { Link } from "@tanstack/react-router";

export function Hero() {
  return (
    <section
      id="top"
      className="relative h-dvh min-h-[640px] w-full overflow-hidden bg-primary"
    >
      <img
        src={hero}
        alt="Malíkovský Dvůr — boutique penzion v hlubokých lesích České Kanady při západu slunce"
        width={1920}
        height={1280}
        className="absolute inset-0 h-full w-full object-cover scale-105 animate-fade-in"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/70" />

      <div className="relative z-10 mx-auto flex h-full max-w-5xl flex-col items-center justify-center px-6 text-center text-white">
        <p className="animate-fade-up text-xs uppercase tracking-[0.35em] text-accent/90">
          Boutique penzion · Česká Kanada
        </p>
        <h1
          className="mt-6 animate-fade-up text-balance text-5xl md:text-7xl lg:text-8xl leading-[1.05] font-serif"
          style={{ animationDelay: "120ms" }}
        >
          Místo, kde se čas
          <br />
          zpomalí.
        </h1>
        <p
          className="mt-8 max-w-2xl animate-fade-up text-base md:text-lg leading-relaxed text-white/85"
          style={{ animationDelay: "240ms" }}
        >
          Rodinný penzion uprostřed hlubokých lesů.
        </p>
        <p
          className="mt-4 max-w-2xl animate-fade-up text-base md:text-lg leading-relaxed text-white/85"
          style={{ animationDelay: "280ms" }}
        >
          Ranní pohled z okna, bohatá snídaně, voňavá káva, po výletě pivo
          jako křen a večer tolik hvězd, jako málokde.
        </p>

        <div
          className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-up"
          style={{ animationDelay: "360ms" }}
        >
          <a
            href="https://book.trevlix.com/book/app/?cid=6759728&mode=window"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-4 text-sm font-medium text-accent-foreground transition-all hover:scale-[1.02] hover:shadow-2xl"
          >
            Rezervovat pobyt
          </a>
          <Link
            to="/pokoje"
            className="inline-flex items-center justify-center rounded-full border border-white/40 bg-white/5 px-8 py-4 text-sm font-medium text-white backdrop-blur-sm transition-all hover:bg-white/15"
          >
            Prohlédnout penzion
          </Link>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-white/70 text-xs tracking-widest uppercase animate-fade-in">
        ↓ Posuňte níž
      </div>
    </section>
  );
}
