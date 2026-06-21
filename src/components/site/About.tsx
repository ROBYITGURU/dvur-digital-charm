import garden from "@/assets/garden.jpg";
import breakfast from "@/assets/breakfast.jpg";
import { Reveal } from "./Reveal";

export function About() {
  return (
    <section id="o-penzionu" className="bg-background py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-accent">
            O penzionu
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mt-4 max-w-3xl text-balance text-4xl md:text-5xl lg:text-6xl">
            Dvacet sezon péče, klidu a opravdové pohostinnosti.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-20 items-center">
          <Reveal>
            <div className="relative">
              <img
                src={garden}
                alt="Zahrada Malíkovského Dvora s jabloněmi a houpací sítí"
                width={1280}
                height={960}
                loading="lazy"
                className="rounded-sm shadow-xl aspect-[4/3] object-cover w-full"
              />
              <img
                src={breakfast}
                alt="Snídaně v Malíkovském Dvoře — voňavé pečivo a prémiová káva"
                width={1280}
                height={960}
                loading="lazy"
                className="hidden md:block absolute -bottom-10 -right-10 w-2/3 rounded-sm shadow-2xl border-8 border-background aspect-[4/3] object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={150} className="space-y-6 text-foreground/80 leading-relaxed">
            <p className="text-lg">
              Je nám ctí přivítat Vás v našem penzionu již dvacátou sezonu.
              Vytvořili jsme místo, kam se hosté vracejí — pro jeho klid,
              autenticitu a péči, kterou není možné předstírat.
            </p>
            <p>
              Uvolněte se v krásném prostředí hlubokých lesů České Kanady
              v těsné blízkosti malebného Jindřichova Hradce. Nechte se
              okouzlit klidnými loukami a pastvinami, nedotčenou přírodou
              a mystickými místy. Večer u sklenky vína či vychlazeného piva
              můžete vybírat z lákavé nabídky výletů.
            </p>
            <p>
              A večer uvidíte tolik hvězd, jako málokde jinde.
            </p>

            <div className="pt-6 border-t border-border">
              <p className="font-serif text-2xl text-foreground">Míša &amp; Petr</p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
