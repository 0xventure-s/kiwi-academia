import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";

import { SiteLogo } from "@/components/site-logo";
import { siteConfig } from "@/lib/site-config";

const termsDescription = `Condiciones de uso y contratación de ${siteConfig.name}.`;

export const metadata: Metadata = {
  title: "Términos y condiciones",
  description: termsDescription,
  alternates: {
    canonical: "/terminos",
  },
  openGraph: {
    title: `Términos y condiciones | ${siteConfig.name}`,
    description: termsDescription,
    url: "/terminos",
    siteName: siteConfig.name,
    locale: siteConfig.locale,
    type: "website",
    images: [
      {
        url: siteConfig.ogImage,
        width: 1200,
        height: 630,
        alt: siteConfig.ogImageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `Términos y condiciones | ${siteConfig.name}`,
    description: termsDescription,
    images: [{ url: siteConfig.ogImage, alt: siteConfig.ogImageAlt }],
  },
};

const sections = [
  {
    title: "Alcance y aceptación",
    paragraphs: [
      `Estos términos regulan el acceso al sitio de ${siteConfig.name}, el uso de sus contenidos y las condiciones generales aplicables a sus servicios digitales. Al navegar, crear una cuenta o contratar un servicio, aceptás estas condiciones en la medida en que resulten aplicables.`,
      "Cuando exista una propuesta comercial, orden de trabajo, contrato o condición particular aceptada, ese documento prevalecerá respecto del alcance, los plazos, el precio, las entregas y las responsabilidades específicas del proyecto.",
    ],
  },
  {
    title: "Uso del sitio",
    paragraphs: [
      "El sitio debe utilizarse de forma lícita y sin afectar su seguridad, disponibilidad o funcionamiento. No está permitido intentar acceder a cuentas, datos o áreas restringidas sin autorización, interferir con la infraestructura ni utilizar los contenidos para engañar, perjudicar o vulnerar derechos de terceros.",
    ],
  },
  {
    title: "Cuentas y acceso",
    paragraphs: [
      "La información de registro debe ser exacta y mantenerse actualizada. Cada persona es responsable de proteger sus credenciales y de informar cualquier acceso no autorizado. Las cuentas son personales, salvo que una condición comercial permita expresamente otro esquema de uso.",
    ],
  },
  {
    title: "Servicios y proyectos",
    paragraphs: [
      "Las descripciones publicadas presentan líneas generales de trabajo y no reemplazan una propuesta específica. Antes de comenzar un proyecto se definirán el objetivo, el alcance, las responsabilidades, los entregables, los plazos y las condiciones económicas correspondientes.",
      "Los cambios solicitados fuera del alcance acordado podrán requerir una nueva estimación y aprobación. La colaboración del cliente, el acceso a información y las validaciones necesarias pueden afectar los plazos previstos.",
    ],
  },
  {
    title: "Cursos, contenidos y pagos",
    paragraphs: [
      "Cuando se ofrezcan cursos o contenidos pagos, el precio, la modalidad de acceso y las condiciones vigentes se informarán antes de confirmar la compra. Los pagos pueden ser procesados por proveedores externos y también quedan sujetos a las condiciones de esos servicios.",
      "Los derechos obligatorios que correspondan a consumidores y usuarios se mantienen vigentes y no quedan limitados por estos términos.",
    ],
  },
  {
    title: "Propiedad intelectual",
    paragraphs: [
      `Los contenidos, marcas, interfaces, diseños y materiales propios publicados en el sitio están protegidos por la normativa aplicable. No pueden copiarse, redistribuirse, venderse ni explotarse sin autorización. La titularidad y los permisos de uso de los desarrollos realizados para clientes se definirán en cada propuesta o contrato.`,
    ],
  },
  {
    title: "Servicios de terceros",
    paragraphs: [
      "Algunas funciones pueden depender de plataformas de pago, alojamiento, mensajería, video u otras integraciones externas. Su disponibilidad y tratamiento de información se rigen también por las condiciones y políticas de cada proveedor.",
    ],
  },
  {
    title: "Datos personales",
    paragraphs: [
      "Los datos enviados al crear una cuenta, realizar una compra o comunicarse por los canales disponibles se utilizan para gestionar el acceso, responder solicitudes, prestar los servicios contratados y cumplir obligaciones aplicables.",
      "Podés solicitar información, acceso, actualización, rectificación o supresión de tus datos mediante los canales de contacto publicados, de acuerdo con la normativa vigente.",
    ],
  },
  {
    title: "Disponibilidad y responsabilidad",
    paragraphs: [
      "Trabajamos para mantener el sitio y los servicios disponibles, aunque pueden existir tareas de mantenimiento, actualizaciones, incidentes técnicos o interrupciones de terceros. Cuando corresponda, las condiciones particulares definirán niveles de soporte y continuidad.",
      "Nada de lo indicado en estos términos excluye responsabilidades ni derechos que no puedan limitarse conforme a la legislación aplicable.",
    ],
  },
  {
    title: "Cambios y contacto",
    paragraphs: [
      "Estos términos pueden actualizarse para reflejar cambios en los servicios o en la normativa. La versión vigente se publicará en esta página con su fecha de actualización.",
      "Para realizar una consulta sobre estas condiciones, utilizá el canal de contacto disponible en el sitio.",
    ],
  },
];

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="border-b border-foreground/10 bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex h-[76px] max-w-[1200px] items-center justify-between gap-6 px-5 sm:px-8">
          <SiteLogo />
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm font-extrabold transition hover:text-accent"
          >
            <ArrowLeft className="h-4 w-4" />
            Volver al inicio
          </Link>
        </div>
      </header>

      <section className="paper-grid border-b border-foreground/10">
        <div className="mx-auto max-w-[1200px] px-5 py-16 sm:px-8 lg:py-24">
          <p className="text-xs font-extrabold uppercase tracking-[0.18em] text-accent">
            Información legal
          </p>
          <h1 className="mt-5 max-w-4xl font-display text-6xl leading-[0.88] tracking-[-0.055em] sm:text-8xl">
            Términos y condiciones
          </h1>
          <p className="mt-7 max-w-2xl text-lg font-semibold leading-8 text-muted-foreground">
            Condiciones claras para usar el sitio, acceder a contenidos y contratar servicios digitales.
          </p>
          <p className="mt-8 text-xs font-extrabold uppercase tracking-[0.14em] text-muted-foreground">
            Vigentes desde el 28 de agosto de 2026
          </p>
        </div>
      </section>

      <div className="mx-auto grid max-w-[1200px] gap-12 px-5 py-16 sm:px-8 lg:grid-cols-[260px_1fr] lg:py-24">
        <aside className="lg:sticky lg:top-8 lg:self-start">
          <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-muted-foreground">
            Lectura rápida
          </p>
          <p className="mt-4 max-w-xs text-sm leading-7 text-muted-foreground">
            Las condiciones específicas de cada servicio se confirman antes de comenzar y prevalecen sobre estas reglas generales.
          </p>
          <Link
            href="/#contacto"
            className="mt-6 inline-flex items-center gap-2 text-sm font-extrabold transition hover:text-accent"
          >
            Hacer una consulta
            <ArrowRight className="h-4 w-4" />
          </Link>
        </aside>

        <article className="border-t border-foreground/15">
          {sections.map((section, index) => (
            <section
              key={section.title}
              className="grid gap-4 border-b border-foreground/15 py-8 sm:grid-cols-[64px_1fr] sm:gap-7 sm:py-10"
            >
              <span className="text-xs font-black tracking-[0.16em] text-accent">
                {String(index + 1).padStart(2, "0")}
              </span>
              <div>
                <h2 className="text-2xl font-extrabold tracking-[-0.035em]">
                  {section.title}
                </h2>
                <div className="mt-4 space-y-4 text-[15px] leading-7 text-muted-foreground">
                  {section.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </section>
          ))}

          <section className="mt-10 rounded-[28px] bg-secondary p-7 sm:p-9">
            <p className="text-xs font-black uppercase tracking-[0.16em] text-foreground/60">
              Marco de referencia
            </p>
            <div className="mt-5 flex flex-col gap-3">
              <a
                href="https://www.argentina.gob.ar/normativa/nacional/ley-24240-638/actualizacion"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-extrabold transition hover:text-accent"
              >
                Ley de Defensa del Consumidor
                <ExternalLink className="h-4 w-4" />
              </a>
              <a
                href="https://www.argentina.gob.ar/aaip/datospersonales/derechos"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-extrabold transition hover:text-accent"
              >
                Derechos sobre datos personales
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>
          </section>
        </article>
      </div>

      <footer className="bg-foreground text-background">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-6 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between">
          <SiteLogo className="[&_span]:text-background" />
          <Link
            href="/"
            className="text-sm font-extrabold text-background/70 transition hover:text-secondary"
          >
            Volver al inicio
          </Link>
        </div>
      </footer>
    </main>
  );
}
