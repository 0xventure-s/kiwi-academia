"use client";

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

const HERO_NEEDS: Array<{
  word: string;
  description: string;
}> = [
  {
    word: "Orden",
    description: "Procesos simples y prioridades visibles.",
  },
  {
    word: "Control",
    description: "Decisiones con información actualizada.",
  },
  {
    word: "Claridad",
    description: "Lo importante, siempre a la vista.",
  },
  {
    word: "Trazabilidad",
    description: "Cada paso conectado de principio a fin.",
  },
  {
    word: "IA",
    description: "Automatización con criterio y supervisión.",
  },
];

const ROTATION_TIME = 4400;

export const HeroNeedsShowcase = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const interval = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % HERO_NEEDS.length);
    }, ROTATION_TIME);

    return () => window.clearInterval(interval);
  }, []);

  const activeNeed = HERO_NEEDS[activeIndex];

  return (
    <section className="paper-grid relative border-b border-foreground/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_28%,rgba(217,255,99,0.48),transparent_29%),radial-gradient(circle_at_15%_88%,rgba(255,107,69,0.12),transparent_23%)]" />
      <div className="relative mx-auto flex min-h-[calc(100vh-76px)] max-w-[1440px] items-center justify-center px-5 py-16 sm:px-8 lg:px-12 lg:py-20">
        <div className="relative z-10 flex w-full max-w-[1120px] flex-col items-center text-center">
          <p className="landing-reveal inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-card/80 px-4 py-2 text-[11px] font-extrabold uppercase tracking-[0.16em] backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-accent" />
            Sistemas para operar mejor
          </p>

          <h1 className="landing-reveal landing-delay-1 mt-8 w-full font-display text-[clamp(4.2rem,10vw,9.6rem)] leading-[0.78] tracking-[-0.065em]">
            <span className="block">Tu negocio</span>
            <span className="block">necesita:</span>
            <span
              key={activeNeed.word}
              className={`hero-need-word mx-auto block min-h-[0.92em] italic text-accent ${
                activeNeed.word === "Trazabilidad"
                  ? "text-[0.76em] leading-[1.08]"
                  : ""
              }`}
            >
              {activeNeed.word}.
            </span>
          </h1>

          <p
            key={activeNeed.description}
            className="hero-need-copy mt-8 max-w-2xl text-lg font-semibold leading-8 text-muted-foreground sm:text-xl"
          >
            {activeNeed.description}
          </p>

          <div className="landing-reveal landing-delay-3 mt-10 flex w-full max-w-md flex-col justify-center gap-3 sm:w-auto sm:max-w-none sm:flex-row">
            <Link
              href="#contacto"
              className="inline-flex h-14 items-center justify-center rounded-full bg-foreground px-7 text-sm font-extrabold text-background transition hover:-translate-y-0.5 hover:bg-accent hover:text-foreground"
            >
              Conversemos
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="#soluciones"
              className="inline-flex h-14 items-center justify-center rounded-full border border-foreground/20 bg-card/75 px-7 text-sm font-extrabold backdrop-blur transition hover:-translate-y-0.5 hover:border-foreground"
            >
              Ver soluciones
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
