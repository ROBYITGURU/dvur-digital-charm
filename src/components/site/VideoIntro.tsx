import { Reveal } from "./Reveal";
import video from "@/assets/malikov-1920.mp4.asset.json";
import poster from "@/assets/hero.jpg";

export function VideoIntro() {
  return (
    <section className="bg-secondary py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6">
        <div className="max-w-3xl">
          <Reveal>
            <p className="text-xs uppercase tracking-[0.3em] text-accent">Video</p>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-4 text-balance text-4xl md:text-5xl lg:text-6xl">
              Malíkovský Dvůr v pohybu.
            </h2>
          </Reveal>
          <Reveal delay={180}>
            <p className="mt-6 max-w-xl text-muted-foreground leading-relaxed">
              Krátké představení penzionu — atmosféra dvora, pokojů a okolí
              České Kanady tak, jak ji u nás zažijete.
            </p>
          </Reveal>
        </div>

        <Reveal delay={240} className="mt-12">
          <div className="relative overflow-hidden rounded-sm shadow-elegant">
            <video
              src={video.url}
              className="aspect-video w-full object-cover"
              controls
              playsInline
              preload="metadata"
              poster={poster}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
