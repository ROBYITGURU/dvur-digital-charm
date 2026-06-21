import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { Reveal } from "./Reveal";

const faqs = [
  {
    q: "Jak probíhá rezervace?",
    a: "Rezervaci si u nás zařídíte telefonicky nebo přes kontaktní formulář. Ozveme se obratem s potvrzením dostupnosti a cenovou nabídkou podle vámi vybraného termínu.",
  },
  {
    q: "Je v ceně snídaně?",
    a: "Ano. Domácí snídaně se podává na krásném porcelánu a je nedílnou součástí pobytu. Káva z pražírny Buna je k dispozici po celý den.",
  },
  {
    q: "Můžeme přijet s dětmi?",
    a: "Samozřejmě. Pro děti je v zahradě pískoviště, houpačka i skluzavka. K dispozici je ping pong, speedminton i koloběžka kolobka.",
  },
  {
    q: "Jsou možné aktivity v okolí?",
    a: "V okolí najdete cyklotrasy včetně Greenway Praha–Vídeň, dvě golfová hřiště, antukový tenisový kurt v Horní Pěně, rybaření na Nežárce i jízdu na konících.",
  },
  {
    q: "Jaký je check-in a check-out?",
    a: "Standardní check-in od 15:30, check-out do 10:00. Po domluvě lze čas přizpůsobit vašemu programu.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-background py-28 md:py-36">
      <div className="mx-auto max-w-4xl px-6">
        <Reveal>
          <p className="text-xs uppercase tracking-[0.3em] text-accent text-center">
            Časté dotazy
          </p>
        </Reveal>
        <Reveal delay={100}>
          <h2 className="mt-4 text-balance text-center text-4xl md:text-5xl lg:text-6xl">
            Co byste mohli chtít vědět.
          </h2>
        </Reveal>

        <div className="mt-16 divide-y divide-border border-y border-border">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={i} delay={i * 50}>
                <div>
                  <button
                    className="flex w-full items-center justify-between gap-6 py-6 text-left"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                  >
                    <span className="font-serif text-xl md:text-2xl">{f.q}</span>
                    {isOpen ? (
                      <Minus size={20} className="shrink-0 text-accent" />
                    ) : (
                      <Plus size={20} className="shrink-0 text-foreground/60" />
                    )}
                  </button>
                  <div
                    className={`grid transition-all duration-500 ease-out ${
                      isOpen ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-foreground/70 leading-relaxed max-w-2xl">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
