import type { Metadata } from "next";
import {
  ArrowDownRight,
  ArrowRight,
  Bot,
  CalendarDays,
  Check,
  ChefHat,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";

import { ContactForm } from "@/components/marketing/contact-form";
import { HeroNeedsShowcase } from "@/components/marketing/hero-needs-showcase";
import {
  ProductMockup,
  type ProductMockupType,
} from "@/components/marketing/product-mockup";
import { SiteLogo } from "@/components/site-logo";
import { WhatsAppButton } from "@/components/whatsapp-button";

export const metadata: Metadata = {
  title: "Transformación digital para empresas",
  description:
    "Transformación digital para pymes y empresas con sistemas de turnos, comandas y agentes de inteligencia artificial.",
};

const solutions: Array<{
  number: string;
  title: string;
  headline: string;
  description: string;
  mockup: ProductMockupType;
  tone: string;
  Icon: typeof CalendarDays;
}> = [
  {
    number: "01",
    title: "Sistema de turnos",
    headline: "Una agenda que trabaja con tu equipo.",
    description:
      "Reservas, disponibilidad, recordatorios y seguimiento reunidos en un flujo claro para tu negocio y tus clientes.",
    mockup: "turnos",
    tone: "bg-secondary",
    Icon: CalendarDays,
  },
  {
    number: "02",
    title: "Sistema de comandas",
    headline: "Cada pedido llega donde tiene que llegar.",
    description:
      "Mesas, pedidos y estados de preparación conectados para que salón y cocina trabajen con la misma información.",
    mockup: "comandas",
    tone: "bg-[#ffd8c9]",
    Icon: ChefHat,
  },
  {
    number: "03",
    title: "Agentes de inteligencia artificial",
    headline: "Automatización con un objetivo concreto.",
    description:
      "Agentes preparados para responder, clasificar solicitudes y ejecutar tareas dentro de procesos definidos.",
    mockup: "agentes-ia",
    tone: "bg-[#dbe7ff]",
    Icon: Bot,
  },
];

const processSteps = [
  {
    number: "01",
    stage: "Diagnóstico",
    title: "Leemos la operación.",
    description:
      "Relevamos cómo circulan las tareas, la información y las decisiones. El foco queda puesto en el problema real.",
    result: "Problema definido",
    tone: "bg-[#ffd8c9]",
  },
  {
    number: "02",
    stage: "Diseño",
    title: "Ordenamos el flujo.",
    description:
      "Definimos pasos, responsables y estados antes de elegir la tecnología o la automatización necesaria.",
    result: "Solución clara",
    tone: "bg-[#dbe7ff]",
  },
  {
    number: "03",
    stage: "Implementación",
    title: "Lo ponemos en marcha.",
    description:
      "Implementamos el sistema, probamos el recorrido completo y ajustamos lo necesario para el uso diario.",
    result: "Flujo operativo",
    tone: "bg-secondary",
  },
];

export default function HomePage() {
  const hasWhatsApp = Boolean(
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, ""),
  );

  return (
    <main id="top" className="overflow-hidden">
      <header className="relative z-50 border-b border-foreground/10 bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex h-[76px] max-w-[1440px] items-center gap-6 px-5 sm:px-8 lg:px-12">
          <SiteLogo className="[&>span:last-child>span:last-child]:hidden sm:[&>span:last-child>span:last-child]:block" />
          <nav
            aria-label="Navegación principal"
            className="ml-auto hidden items-center gap-8 text-sm font-extrabold md:flex"
          >
            <Link className="transition-colors hover:text-accent" href="#soluciones">
              Soluciones
            </Link>
            <Link className="transition-colors hover:text-accent" href="#enfoque">
              Cómo trabajamos
            </Link>
          </nav>
          <Link
            href="#contacto"
            className="ml-auto inline-flex h-11 items-center justify-center rounded-full bg-foreground px-5 text-sm font-extrabold text-background transition hover:-translate-y-0.5 hover:bg-accent hover:text-foreground md:ml-2"
          >
            Contactar
            <ArrowDownRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </header>

      <HeroNeedsShowcase />

      <section
        id="soluciones"
        className="scroll-mt-8 border-b border-foreground/10 bg-foreground text-background"
      >
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="grid gap-7 lg:grid-cols-[0.75fr_1.25fr] lg:items-end">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-secondary">
                Tres soluciones, una misma lógica
              </p>
              <h2 className="mt-5 font-display text-5xl leading-[0.92] tracking-[-0.045em] sm:text-7xl">
                Tecnología que se integra al trabajo real.
              </h2>
            </div>
            <p className="max-w-2xl text-lg leading-8 text-background/65 lg:ml-auto">
              Cada implementación parte de una necesidad concreta. Sin sumar complejidad innecesaria ni forzar al equipo a trabajar alrededor del sistema.
            </p>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-3">
            {solutions.map((solution) => (
              <article
                key={solution.number}
                className="group flex min-h-[660px] flex-col rounded-[32px] border border-background/15 bg-[#24211e] p-5 transition duration-300 hover:-translate-y-1 hover:border-background/35 sm:p-6"
              >
                <div className="flex items-start justify-between gap-6">
                  <span className="text-xs font-black tracking-[0.18em] text-background/45">
                    / {solution.number}
                  </span>
                  <div
                    className={`flex h-9 w-9 items-center justify-center rounded-xl text-foreground ${solution.tone}`}
                  >
                    <solution.Icon className="h-4 w-4" />
                  </div>
                </div>
                <div className="mt-5">
                  <ProductMockup product={solution.mockup} />
                </div>
                <div className="mt-auto px-1 pt-10">
                  <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.14em] text-secondary">
                    {solution.title}
                  </div>
                  <h3 className="mt-5 text-3xl font-extrabold leading-[1.08] tracking-[-0.04em]">
                    {solution.headline}
                  </h3>
                  <p className="mt-5 text-sm leading-7 text-background/60">
                    {solution.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="enfoque"
        className="paper-grid scroll-mt-8 border-b border-foreground/10 bg-[#ede8de]"
      >
        <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-accent">
                Cómo trabajamos
              </p>
              <h2 className="mt-5 max-w-4xl font-display text-5xl leading-[0.9] tracking-[-0.05em] sm:text-7xl lg:text-8xl">
                Del problema cotidiano a un sistema que funciona.
              </h2>
            </div>
            <p className="max-w-xl text-lg font-semibold leading-8 text-muted-foreground lg:ml-auto">
              No empezamos por una herramienta. Empezamos por entender qué frena la operación y qué cambio tendría valor real para el equipo.
            </p>
          </div>

          <div className="mt-14 grid overflow-hidden rounded-[32px] border border-foreground/15 bg-card shadow-[0_24px_70px_rgba(35,29,20,0.08)] lg:grid-cols-[1fr_auto_1fr]">
            <div className="bg-foreground p-7 text-background sm:p-9">
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-background/45">
                Punto de partida
              </p>
              <p className="mt-4 max-w-lg text-2xl font-extrabold leading-tight tracking-[-0.035em] sm:text-3xl">
                Una tarea que consume tiempo, pierde información o depende demasiado de lo manual.
              </p>
              <div className="mt-7 flex flex-wrap gap-2 text-[11px] font-extrabold text-background/70">
                {["Pasos dispersos", "Seguimiento manual", "Información difícil de encontrar"].map(
                  (item) => (
                    <span key={item} className="rounded-full border border-background/15 px-3 py-2">
                      {item}
                    </span>
                  ),
                )}
              </div>
            </div>

            <div className="relative flex items-center justify-center bg-card px-7 py-5 lg:px-5">
              <span className="absolute h-px w-full bg-foreground/10 lg:h-full lg:w-px" />
              <span className="process-arrow relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-foreground/15 bg-accent shadow-[0_8px_24px_rgba(255,92,53,0.25)]">
                <ArrowRight className="h-5 w-5 rotate-90 lg:rotate-0" />
              </span>
            </div>

            <div className="bg-secondary p-7 sm:p-9">
              <p className="text-[10px] font-black uppercase tracking-[0.18em] text-foreground/55">
                Punto de llegada
              </p>
              <p className="mt-4 max-w-lg text-2xl font-extrabold leading-tight tracking-[-0.035em] sm:text-3xl">
                Un flujo claro, con responsables, estados visibles y acciones automatizadas donde aportan valor.
              </p>
              <div className="mt-7 flex flex-wrap gap-2 text-[11px] font-extrabold">
                {["Menos pasos manuales", "Información ordenada", "Procesos más claros"].map(
                  (item) => (
                    <span key={item} className="inline-flex items-center gap-1.5 rounded-full bg-foreground px-3 py-2 text-background">
                      <Check className="h-3 w-3 text-secondary" />
                      {item}
                    </span>
                  ),
                )}
              </div>
            </div>
          </div>

          <div className="relative mt-14">
            <div className="absolute left-[16.66%] right-[16.66%] top-[35px] hidden h-px overflow-hidden bg-foreground/15 lg:block">
              <span className="process-progress-line block h-full bg-accent" />
            </div>
            <div className="relative grid gap-5 lg:grid-cols-3">
              {processSteps.map((item) => (
                <article
                  key={item.number}
                  className="group flex min-h-[360px] flex-col rounded-[30px] border border-foreground/15 bg-card p-6 transition duration-300 hover:-translate-y-1 hover:border-foreground/35 hover:shadow-[0_24px_60px_rgba(35,29,20,0.1)] sm:p-8"
                >
                  <div className="flex items-center justify-between gap-4">
                    <span className={`relative z-10 flex h-[70px] w-[70px] items-center justify-center rounded-full border border-foreground/10 text-sm font-black ${item.tone}`}>
                      {item.number}
                    </span>
                    <span className="text-[10px] font-black uppercase tracking-[0.16em] text-muted-foreground">
                      {item.stage}
                    </span>
                  </div>
                  <h3 className="mt-10 text-3xl font-extrabold leading-[1.05] tracking-[-0.04em]">
                    {item.title}
                  </h3>
                  <p className="mt-5 text-sm leading-7 text-muted-foreground">
                    {item.description}
                  </p>
                  <div className="mt-auto flex items-center justify-between border-t border-foreground/10 pt-6 text-xs font-extrabold">
                    <span className="text-muted-foreground">Resultado</span>
                    <span className="inline-flex items-center gap-1.5">
                      <Check className="h-3.5 w-3.5 text-accent" />
                      {item.result}
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contacto" className="scroll-mt-8 bg-accent">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-20 sm:px-8 lg:grid-cols-[0.85fr_1.15fr] lg:px-12 lg:py-28">
          <div className="flex flex-col">
            <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-foreground/65">
              Hablemos
            </p>
            <h2 className="mt-5 max-w-2xl font-display text-6xl leading-[0.86] tracking-[-0.055em] sm:text-8xl">
              Contanos qué querés ordenar.
            </h2>
            <p className="mt-7 max-w-lg text-lg font-semibold leading-8 text-foreground/70">
              Compartí el desafío, el proceso o la idea. Te respondemos con una primera orientación clara.
            </p>
            <div className="mt-10 flex items-center gap-3 text-sm font-extrabold lg:mt-auto">
              <MessageCircle className="h-5 w-5" />
              Una conversación, sin compromiso.
            </div>
          </div>

          <div className="rounded-[34px] border border-foreground/15 bg-background p-5 shadow-[0_30px_80px_rgba(40,23,15,0.16)] sm:p-8 lg:p-10">
            <ContactForm />
            {hasWhatsApp && (
              <>
                <div className="my-7 flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.16em] text-muted-foreground">
                  <span className="h-px flex-1 bg-foreground/10" />
                  o por WhatsApp
                  <span className="h-px flex-1 bg-foreground/10" />
                </div>
                <WhatsAppButton className="h-14 w-full" />
              </>
            )}
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-background">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-8 px-5 py-10 sm:px-8 md:flex-row md:items-end md:justify-between lg:px-12">
          <div>
            <SiteLogo className="[&_span]:text-background" />
            <p className="mt-5 max-w-sm text-sm leading-6 text-background/55">
              Sistemas digitales para empresas que quieren trabajar con más claridad.
            </p>
          </div>
          <Link
            href="#top"
            className="inline-flex items-center gap-2 text-sm font-extrabold text-background/70 transition hover:text-secondary"
          >
            Volver arriba
            <ArrowRight className="h-4 w-4 -rotate-90" />
          </Link>
        </div>
      </footer>
    </main>
  );
}
