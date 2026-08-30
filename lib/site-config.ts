const productionUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : "https://kiwi-academia.vercel.app";

const siteName = process.env.NEXT_PUBLIC_SITE_NAME || "Kiwi Hub";

const whatsappNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(
  /\D/g,
  "",
);

export const siteConfig = {
  name: siteName,
  defaultTitle: `${siteName} | Transformación digital para empresas`,
  description:
    process.env.NEXT_PUBLIC_SITE_DESCRIPTION ||
    "Transformación digital para pymes y empresas con sistemas de turnos, comandas y agentes de inteligencia artificial.",
  shortDescription: "Sistemas e inteligencia artificial para pymes y empresas.",
  url: (process.env.NEXT_PUBLIC_APP_URL || productionUrl).replace(/\/$/, ""),
  locale: "es_AR",
  language: "es-AR",
  logo: "/thiings/kiwi.png",
  icons: {
    favicon: "/icons/kiwi-32.png",
    app: "/icons/kiwi-192.png",
    large: "/icons/kiwi-512.png",
    apple: "/icons/apple-touch-icon.png",
  },
  ogImage: "/og/kiwi-hub-og.png",
  ogImageAlt:
    "Kiwi Hub: sistemas e inteligencia artificial para empresas",
  contactPhone: whatsappNumber ? `+${whatsappNumber}` : undefined,
  keywords: [
    "transformación digital",
    "sistemas para empresas",
    "automatización de procesos",
    "inteligencia artificial para empresas",
    "sistema de turnos",
    "sistema de comandas",
    "agentes de inteligencia artificial",
    "software para pymes",
  ],
  services: [
    {
      name: "Sistema de turnos",
      description:
        "Reservas, disponibilidad, recordatorios y seguimiento en un flujo claro para el negocio y sus clientes.",
    },
    {
      name: "Sistema de comandas",
      description:
        "Mesas, pedidos y estados de preparación conectados para coordinar salón y cocina.",
    },
    {
      name: "Agentes de inteligencia artificial",
      description:
        "Agentes preparados para responder, clasificar solicitudes y ejecutar tareas dentro de procesos definidos.",
    },
  ],
} as const;

export const absoluteUrl = (path = "/") =>
  new URL(path, `${siteConfig.url}/`).toString();
