import {
  Bell,
  Bot,
  CalendarDays,
  Check,
  CheckCircle2,
  ChefHat,
  Clock3,
  MessageSquare,
  MoreHorizontal,
  Search,
  Sparkles,
  User,
  Zap,
} from "lucide-react";

export type ProductMockupType = "turnos" | "comandas" | "agentes-ia";

interface ProductMockupProps {
  product: ProductMockupType;
}

const WindowHeader = ({ title }: { title: string }) => (
  <div className="flex h-9 items-center border-b border-[#201d1a]/10 bg-white/75 px-3">
    <div className="flex gap-1.5">
      <span className="h-2 w-2 rounded-full bg-[#ff6b45]" />
      <span className="h-2 w-2 rounded-full bg-[#f4bd4f]" />
      <span className="h-2 w-2 rounded-full bg-[#b9df51]" />
    </div>
    <span className="mx-auto -translate-x-4 text-[8px] font-black uppercase tracking-[0.16em] text-[#716b64]">
      {title}
    </span>
  </div>
);

const AppointmentsMockup = () => (
  <div className="h-full bg-[#f4f1e9]">
    <WindowHeader title="Agenda" />
    <div className="grid h-[calc(100%_-_36px)] grid-cols-[72px_1fr]">
      <aside className="border-r border-[#201d1a]/10 bg-white/55 p-2.5">
        <div className="flex h-7 items-center justify-center rounded-lg bg-[#201d1a] text-[8px] font-black text-white">
          AGO
        </div>
        <div className="mt-3 space-y-2">
          {["26", "27", "28", "29"].map((day, index) => (
            <div
              key={day}
              className={`flex h-8 items-center justify-center rounded-lg text-[9px] font-extrabold ${
                index === 2
                  ? "bg-[#d9ff63] text-[#201d1a]"
                  : "text-[#8b857e]"
              }`}
            >
              {day}
            </div>
          ))}
        </div>
      </aside>
      <div className="p-3">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-[8px] font-bold text-[#8b857e]">Jueves</p>
            <p className="text-xs font-black tracking-[-0.03em] text-[#201d1a]">
              28 de agosto
            </p>
          </div>
          <div className="flex h-7 items-center gap-1 rounded-full bg-[#201d1a] px-2.5 text-[8px] font-black text-white">
            <CalendarDays className="h-2.5 w-2.5" />
            Nuevo turno
          </div>
        </div>
        <div className="relative mt-3 grid grid-cols-[30px_1fr] gap-x-2 gap-y-2">
          {["09:00", "10:00", "11:00", "12:00"].map((time, index) => (
            <div key={time} className="contents">
              <span className="pt-1 text-[7px] font-bold text-[#9a948d]">
                {time}
              </span>
              <div
                className={`relative h-7 overflow-hidden rounded-lg border px-2 py-1 text-[7px] font-extrabold ${
                  index === 1
                    ? "mockup-booking-slot border-[#9abd39] text-[#201d1a]"
                    : index === 3
                      ? "border-[#ffb39f] bg-[#ffe1d8] text-[#7b3826]"
                      : "border-[#201d1a]/8 bg-white/80 text-[#706a63]"
                }`}
              >
                {index === 1 ? (
                  <>
                    <span className="mockup-slot-available absolute inset-0 flex items-center px-2">
                      Disponible
                    </span>
                    <span className="mockup-slot-confirmed absolute inset-0 flex items-center px-2">
                      Consulta · Confirmada
                    </span>
                  </>
                ) : index === 3 ? (
                  "Control · Pendiente"
                ) : (
                  "Disponible"
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="mockup-confirmation absolute bottom-3 right-3 flex items-center gap-2 rounded-xl bg-[#201d1a] px-3 py-2 text-white shadow-[0_12px_30px_rgba(32,29,26,0.25)]">
      <CheckCircle2 className="h-3.5 w-3.5 text-[#d9ff63]" />
      <div>
        <p className="text-[7px] font-black">Turno confirmado</p>
        <p className="mt-0.5 text-[6px] text-white/55">Recordatorio programado</p>
      </div>
    </div>
  </div>
);

const orders = [
  {
    table: "Mesa 11",
    items: "3 platos",
    color: "bg-white",
    badge: "Nueva",
  },
  {
    table: "Mesa 11",
    items: "3 platos",
    color: "bg-[#fff0e9]",
    badge: "Preparando",
  },
  {
    table: "Mesa 11",
    items: "3 platos",
    color: "bg-[#efffc4]",
    badge: "Lista",
  },
];

const OrdersMockup = () => (
  <div className="h-full bg-[#f4f1e9]">
    <WindowHeader title="Comandas" />
    <div className="p-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-[#ff6b45] text-white">
            <ChefHat className="h-3.5 w-3.5" />
          </span>
          <div>
            <p className="text-[8px] font-bold text-[#8b857e]">Servicio</p>
            <p className="text-xs font-black text-[#201d1a]">Turno noche</p>
          </div>
        </div>
        <div className="flex items-center gap-1.5 rounded-full border border-[#201d1a]/10 bg-white px-2.5 py-1.5 text-[7px] font-black text-[#201d1a]">
          <span className="mockup-status-dot h-1.5 w-1.5 rounded-full bg-[#7fb200]" />
          Cocina conectada
        </div>
      </div>
      <div className="mt-3 grid grid-cols-3 gap-2">
        {["Nuevas", "En cocina", "Listas"].map((column, columnIndex) => (
          <div key={column}>
            <div className="mb-2 flex items-center justify-between px-0.5">
              <span className="text-[7px] font-black uppercase tracking-[0.08em] text-[#77716a]">
                {column}
              </span>
              <span className="text-[7px] font-bold text-[#aaa49d]">0{columnIndex + 1}</span>
            </div>
            <div
              className={`mockup-order-stage mockup-order-stage-${columnIndex + 1} min-h-[98px] rounded-xl border border-[#201d1a]/10 p-2.5 shadow-[0_8px_18px_rgba(40,34,29,0.06)] ${orders[columnIndex].color}`}
            >
              <div className="flex items-center justify-between gap-1">
                <span className="text-[8px] font-black text-[#201d1a]">
                  {orders[columnIndex].table}
                </span>
                <MoreHorizontal className="h-3 w-3 text-[#8b857e]" />
              </div>
              <p className="mt-2 text-[7px] font-bold text-[#817b75]">
                {orders[columnIndex].items}
              </p>
              <div className="mt-3 h-1 overflow-hidden rounded-full bg-[#201d1a]/8">
                <span
                  className={`block h-full rounded-full ${
                    columnIndex === 0
                      ? "w-1/4 bg-[#ff6b45]"
                      : columnIndex === 1
                        ? "mockup-order-progress bg-[#efad2f]"
                        : "w-full bg-[#8dbd18]"
                  }`}
                />
              </div>
              <div className="mt-2 flex items-center gap-1 text-[6px] font-extrabold text-[#6f6962]">
                {columnIndex === 2 ? (
                  <Check className="h-2.5 w-2.5 text-[#6b9300]" />
                ) : (
                  <Clock3 className="h-2.5 w-2.5" />
                )}
                {orders[columnIndex].badge}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mockup-ready-notice mt-3 flex items-center justify-between rounded-xl bg-[#201d1a] px-3 py-2.5 text-white">
        <div className="flex items-center gap-2">
          <Bell className="mockup-bell h-3.5 w-3.5 text-[#ff8a6c]" />
          <span className="text-[7px] font-extrabold">Pedido listo para entregar</span>
        </div>
        <span className="rounded-full bg-[#d9ff63] px-2 py-1 text-[6px] font-black text-[#201d1a]">
          Mesa 11
        </span>
      </div>
    </div>
  </div>
);

const AgentMockup = () => (
  <div className="h-full bg-[#f4f1e9]">
    <WindowHeader title="Agente comercial" />
    <div className="grid h-[calc(100%_-_36px)] grid-cols-[1.1fr_0.9fr]">
      <div className="border-r border-[#201d1a]/10 p-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#dbe7ff] text-[#31518d]">
              <Bot className="h-3.5 w-3.5" />
            </span>
            <div>
              <p className="text-[8px] font-black text-[#201d1a]">Agente Kiwi</p>
              <p className="text-[6px] font-bold text-[#6f9131]">Ventas · Activo</p>
            </div>
          </div>
          <Search className="h-3.5 w-3.5 text-[#8b857e]" />
        </div>
        <div className="mt-4 space-y-2.5">
          <div className="ml-auto max-w-[88%] rounded-xl rounded-br-sm bg-[#201d1a] px-3 py-2 text-[7px] font-semibold leading-[0.875rem] text-white">
            Quiero saber qué solución recomiendan para mi empresa.
          </div>
          <div className="mockup-agent-reply max-w-[92%] rounded-xl rounded-bl-sm border border-[#201d1a]/10 bg-white px-3 py-2 text-[7px] font-semibold leading-[0.875rem] text-[#4d4843]">
            Podemos ayudarte. ¿Cuántas personas forman el equipo y qué proceso quieren mejorar?
          </div>
          <div className="mockup-typing flex w-fit items-center gap-1 rounded-full border border-[#201d1a]/10 bg-white px-3 py-2">
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
      <div className="bg-[#eef3ff] p-3">
        <div className="flex items-center gap-1.5 text-[7px] font-black uppercase tracking-[0.08em] text-[#5a6380]">
          <Zap className="h-3 w-3 text-[#ff6b45]" />
          Venta asistida
        </div>
        <div className="mt-3 rounded-xl bg-white p-3 shadow-[0_8px_20px_rgba(54,65,100,0.08)]">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#d9ff63]">
            <User className="h-4 w-4 text-[#201d1a]" />
          </div>
          <p className="mt-3 text-[9px] font-black text-[#201d1a]">
            Nueva oportunidad
          </p>
          <p className="mt-1 text-[6px] font-semibold leading-3 text-[#817b75]">
            Interés comercial identificado y datos organizados.
          </p>
          <div className="mockup-agent-action mt-3 rounded-lg bg-[#201d1a] px-2 py-1.5 text-[6px] font-black text-white">
            <div className="flex items-center gap-1.5">
              <Sparkles className="h-2.5 w-2.5 text-[#d9ff63]" />
              Calificando consulta
            </div>
            <div className="mt-1.5 h-0.5 overflow-hidden rounded-full bg-white/15">
              <span className="mockup-agent-progress block h-full rounded-full bg-[#d9ff63]" />
            </div>
          </div>
          <div className="mockup-agent-result mt-2 flex items-center gap-1.5 rounded-lg bg-[#d9ff63] px-2 py-1.5 text-[6px] font-black text-[#201d1a]">
            <CheckCircle2 className="h-2.5 w-2.5" />
            Oportunidad registrada
          </div>
        </div>
        <div className="mt-2 grid grid-cols-2 gap-2">
          <div className="rounded-lg bg-white/70 p-2 text-center">
            <MessageSquare className="mx-auto h-3 w-3 text-[#31518d]" />
            <p className="mt-1 text-[6px] font-black text-[#59534d]">Consulta</p>
          </div>
          <div className="rounded-lg bg-white/70 p-2 text-center">
            <User className="mx-auto h-3 w-3 text-[#31518d]" />
            <p className="mt-1 text-[6px] font-black text-[#59534d]">Contacto</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const ProductMockup = ({ product }: ProductMockupProps) => (
  <div
    aria-hidden="true"
    className="product-mockup-shell relative aspect-[1.25/1] overflow-hidden rounded-[24px] border border-white/15 bg-white p-2 shadow-[0_28px_60px_rgba(0,0,0,0.24)] sm:aspect-[1.34/1]"
  >
    <div className="absolute inset-x-[14%] bottom-0 h-12 rounded-full bg-black/35 blur-2xl" />
    <div className="relative h-full overflow-hidden rounded-[18px] border border-[#201d1a]/15 bg-[#f4f1e9]">
      {product === "turnos" && <AppointmentsMockup />}
      {product === "comandas" && <OrdersMockup />}
      {product === "agentes-ia" && <AgentMockup />}
    </div>
  </div>
);
