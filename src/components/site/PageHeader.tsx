import { Reveal } from "./Reveal";

type Props = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  image: string;
  imageAlt: string;
};

export function PageHeader({ eyebrow, title, subtitle, image, imageAlt }: Props) {
  return (
    <section className="relative h-[62vh] min-h-[440px] w-full overflow-hidden bg-primary">
      <img
        src={image}
        alt={imageAlt}
        className="absolute inset-0 h-full w-full object-cover scale-105 animate-fade-in"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/35 to-black/70" />
      <div className="relative z-10 mx-auto flex h-full max-w-5xl flex-col items-center justify-end pb-20 md:pb-24 px-6 text-center text-white">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.35em] text-accent/90">{eyebrow}</p>
        </Reveal>
        <Reveal delay={100}>
          <h1 className="mt-5 text-balance text-5xl md:text-6xl lg:text-7xl leading-[1.05] font-serif">
            {title}
          </h1>
        </Reveal>
        {subtitle && (
          <Reveal delay={180}>
            <p className="mt-6 max-w-2xl text-base md:text-lg leading-relaxed text-white/85">
              {subtitle}
            </p>
          </Reveal>
        )}
      </div>
    </section>
  );
}
