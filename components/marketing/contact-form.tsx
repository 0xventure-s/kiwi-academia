"use client";

import { ArrowRight, Loader2 } from "lucide-react";
import { FormEvent, useState } from "react";

type FormStatus =
  | { type: "idle"; message: "" }
  | { type: "success" | "error"; message: string };

const initialStatus: FormStatus = { type: "idle", message: "" };

export const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<FormStatus>(initialStatus);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus(initialStatus);

    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(formData.entries())),
      });
      const data = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(data.message || "No pudimos enviar tu consulta.");
      }

      form.reset();
      setStatus({
        type: "success",
        message: "Recibimos tu consulta. Te responderemos a la brevedad.",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error instanceof Error
            ? error.message
            : "No pudimos enviar tu consulta. Intentá nuevamente.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-xs font-extrabold uppercase tracking-[0.12em]">
            Nombre
          </span>
          <input
            required
            name="name"
            autoComplete="name"
            maxLength={100}
            placeholder="Tu nombre"
            className="h-[52px] w-full rounded-2xl border border-foreground/15 bg-card px-4 text-sm font-semibold outline-none transition placeholder:text-muted-foreground/70 focus:border-foreground focus:ring-2 focus:ring-secondary"
          />
        </label>
        <label className="block">
          <span className="mb-2 block text-xs font-extrabold uppercase tracking-[0.12em]">
            Empresa
          </span>
          <input
            name="company"
            autoComplete="organization"
            maxLength={120}
            placeholder="Nombre de la empresa"
            className="h-[52px] w-full rounded-2xl border border-foreground/15 bg-card px-4 text-sm font-semibold outline-none transition placeholder:text-muted-foreground/70 focus:border-foreground focus:ring-2 focus:ring-secondary"
          />
        </label>
      </div>

      <label className="block">
        <span className="mb-2 block text-xs font-extrabold uppercase tracking-[0.12em]">
          Correo electrónico
        </span>
        <input
          required
          type="email"
          name="email"
          autoComplete="email"
          maxLength={180}
          placeholder="nombre@empresa.com"
          className="h-[52px] w-full rounded-2xl border border-foreground/15 bg-card px-4 text-sm font-semibold outline-none transition placeholder:text-muted-foreground/70 focus:border-foreground focus:ring-2 focus:ring-secondary"
        />
      </label>

      <label className="block">
        <span className="mb-2 block text-xs font-extrabold uppercase tracking-[0.12em]">
          Me interesa
        </span>
        <select
          required
          name="interest"
          defaultValue=""
          className="h-[52px] w-full rounded-2xl border border-foreground/15 bg-card px-4 text-sm font-semibold outline-none transition focus:border-foreground focus:ring-2 focus:ring-secondary"
        >
          <option value="" disabled>
            Seleccioná una opción
          </option>
          <option value="turnos">Sistema de turnos</option>
          <option value="comandas">Sistema de comandas</option>
          <option value="agentes-ia">Agentes de inteligencia artificial</option>
          <option value="otro">Otro desafío</option>
        </select>
      </label>

      <label className="block">
        <span className="mb-2 block text-xs font-extrabold uppercase tracking-[0.12em]">
          ¿Qué necesitás resolver?
        </span>
        <textarea
          required
          name="message"
          minLength={10}
          maxLength={2000}
          rows={5}
          placeholder="Contanos brevemente cómo trabajan hoy y qué les gustaría mejorar."
          className="w-full resize-none rounded-2xl border border-foreground/15 bg-card px-4 py-3 text-sm font-semibold leading-6 outline-none transition placeholder:text-muted-foreground/70 focus:border-foreground focus:ring-2 focus:ring-secondary"
        />
      </label>

      <div
        className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden"
        aria-hidden="true"
      >
        <label>
          Sitio web
          <input name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex h-14 w-full items-center justify-center rounded-full bg-foreground px-6 text-sm font-extrabold text-background transition hover:-translate-y-0.5 hover:bg-accent disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Enviando
          </>
        ) : (
          <>
            Enviar consulta
            <ArrowRight className="ml-2 h-4 w-4" />
          </>
        )}
      </button>

      <p
        aria-live="polite"
        className={`min-h-5 text-sm font-bold ${
          status.type === "success"
            ? "text-emerald-700"
            : status.type === "error"
              ? "text-red-600"
              : ""
        }`}
      >
        {status.message}
      </p>
    </form>
  );
};
