import "server-only";

interface PasswordResetEmailInput {
  email: string;
  name: string;
  url: string;
}

interface ContactInquiryEmailInput {
  name: string;
  company?: string;
  email: string;
  interest: "turnos" | "comandas" | "agentes-ia" | "otro";
  message: string;
}

const escapeHtml = (value: string) =>
  value.replace(/[&<>'"]/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "'": "&#39;",
      '"': "&quot;",
    };

    return entities[character];
  });

export const sendPasswordResetEmail = async ({
  email,
  name,
  url,
}: PasswordResetEmailInput) => {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.AUTH_EMAIL_FROM;

  if (!apiKey || !from) {
    throw new Error("Falta configurar el correo de recuperación de acceso");
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [email],
      subject: "Recuperá tu acceso a Kiwi Hub",
      html: `
        <div style="font-family:Arial,sans-serif;color:#1d1a18;line-height:1.6">
          <h1 style="font-size:24px">Elegí una nueva contraseña</h1>
          <p>Hola${name ? ` ${escapeHtml(name)}` : ""}. Recibimos una solicitud para recuperar tu acceso.</p>
          <p><a href="${url}" style="display:inline-block;padding:12px 20px;border-radius:999px;background:#1d1a18;color:#fff;text-decoration:none;font-weight:700">Crear nueva contraseña</a></p>
          <p style="color:#6f6964">Si no hiciste esta solicitud, no necesitás realizar ninguna acción.</p>
        </div>
      `,
    }),
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("No pudimos enviar el correo de recuperación");
  }
};

const interestLabels: Record<ContactInquiryEmailInput["interest"], string> = {
  turnos: "Sistema de turnos",
  comandas: "Sistema de comandas",
  "agentes-ia": "Agentes de inteligencia artificial",
  otro: "Otro desafío",
};

export const sendContactInquiryEmail = async ({
  name,
  company,
  email,
  interest,
  message,
}: ContactInquiryEmailInput) => {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_EMAIL_FROM || process.env.AUTH_EMAIL_FROM;
  const to = process.env.CONTACT_EMAIL || process.env.ADMIN_EMAIL;

  if (!apiKey || !from || !to) {
    throw new Error("Falta configurar el correo de contacto");
  }

  const safeName = escapeHtml(name);
  const safeCompany = company ? escapeHtml(company) : "No indicada";
  const safeEmail = escapeHtml(email);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: `Nueva consulta: ${interestLabels[interest]}`,
      html: `
        <div style="font-family:Arial,sans-serif;color:#1d1a18;line-height:1.6">
          <h1 style="font-size:24px">Nueva consulta desde Kiwi Hub</h1>
          <p><strong>Nombre:</strong> ${safeName}</p>
          <p><strong>Empresa:</strong> ${safeCompany}</p>
          <p><strong>Correo:</strong> ${safeEmail}</p>
          <p><strong>Interés:</strong> ${interestLabels[interest]}</p>
          <div style="margin-top:24px;padding:20px;border-radius:16px;background:#f5f1e8">
            ${safeMessage}
          </div>
        </div>
      `,
    }),
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("No pudimos enviar la consulta");
  }
};
