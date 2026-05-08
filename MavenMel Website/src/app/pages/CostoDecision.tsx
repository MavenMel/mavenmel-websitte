
import { useMemo, useState } from "react";
export function CostoDecision() {
  return <Index />;
}

/* ------------------------- TYPES ------------------------- */

const ROLE_OPTIONS = [
  "Analista",
  "Analista Senior",
  "Coordinador",
  "Director",
  "Gerente",
  "Operativo",
  "Administrativo",
  "BI",
  "Otro",
] as const;

type RoleName = (typeof ROLE_OPTIONS)[number];

type Role = {
  id: string;
  role: RoleName;
  customRole: string;
  salary: number;
  hours: number;
};

type Operation = {
  errors: 0 | 1 | 2 | 3;
  decision: 0 | 1 | 2 | 3;
  manual: number; // 0-100
};

const STRATEGIC_ROLES: RoleName[] = ["Coordinador", "Director", "Gerente"];
const OPERATIVE_ROLES: RoleName[] = ["Operativo", "Administrativo", "Analista"];

const ERROR_LABELS = ["Casi nunca", "A veces", "Frecuente", "Constante"];
const DECISION_LABELS = ["Inmediata", "Algunos días", "1–2 semanas", "Mucho tiempo"];

const newRole = (): Role => ({
  id: crypto.randomUUID(),
  role: "Analista",
  customRole: "",
  salary: 3500000,
  hours: 8,
});

type Step = 0 | 1 | 2 | 3 | 4 | 5 | 6;

/* ------------------------- COMPONENT ------------------------- */

function Index() {
  const [step, setStep] = useState<Step>(0);
  const [roleCount, setRoleCount] = useState<number>(0);
  const [roles, setRoles] = useState<Role[]>([]);
  const [op, setOp] = useState<Operation>({ errors: 1, decision: 1, manual: 50 });
  const [leadForm, setLeadForm] = useState({ nombre: "", email: "", telefono: "", empresa: "" });
  const [leadSubmitted, setLeadSubmitted] = useState(
    () => localStorage.getItem("mavenmel_lead_captured") === "true"
  );
  const [isSubmittingLead, setIsSubmittingLead] = useState(false);
  const [leadError, setLeadError] = useState("");

  const alreadyCaptured = leadSubmitted;
  const totalSteps = alreadyCaptured ? 6 : 7;

  const next = () => setStep((s) => {
    const n = Math.min(6, s + 1) as Step;
    if (n === 4 && alreadyCaptured) return 5 as Step;
    return n;
  });
  const back = () => setStep((s) => {
    const n = Math.max(0, s - 1) as Step;
    if (n === 4 && alreadyCaptured) return 3 as Step;
    return n;
  });

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmittingLead(true);
    setLeadError("");
    try {
      const res = await fetch("/.netlify/functions/calculadora-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(leadForm),
      });
      if (res.ok) {
        localStorage.setItem("mavenmel_lead_captured", "true");
        setLeadSubmitted(true);
        setStep(5 as Step);
      } else {
        const data = await res.json();
        setLeadError(data.error || "Ocurrió un error. Intenta de nuevo.");
      }
    } catch {
      setLeadError("No se pudo conectar. Intenta de nuevo.");
    } finally {
      setIsSubmittingLead(false);
    }
  };

  const setCount = (n: number) => {
    setRoleCount(n);
    setRoles((prev) => {
      const arr = [...prev];
      while (arr.length < n) arr.push(newRole());
      arr.length = n;
      return arr;
    });
  };

  const updateRole = (id: string, patch: Partial<Role>) =>
    setRoles((rs) => rs.map((r) => (r.id === id ? { ...r, ...patch } : r)));

  const restart = () => {
    setRoles([]);
    setRoleCount(0);
    setOp({ errors: 1, decision: 1, manual: 50 });
    setLeadForm({ nombre: "", email: "", telefono: "", empresa: "" });
    setLeadSubmitted(false);
    setLeadError("");
    setStep(0);
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <header className="mx-auto flex w-full max-w-3xl items-center justify-between px-6 pt-8">
        <div className="flex items-center gap-2">
          <div className="h-2.5 w-2.5 rounded-full bg-[#7f77dd]" />
          <span className="text-sm font-medium tracking-tight text-[#26215c]/80">
            Maven Mel
          </span>
        </div>
        <span className="text-xs font-medium text-muted-foreground">
          {step + 1} / {totalSteps}
        </span>
      </header>

      <div className="mx-auto mt-6 w-full max-w-3xl px-6">
        <div className="h-[3px] w-full overflow-hidden rounded-full bg-[#EEEDFE]">
          <div
            className="h-full rounded-full bg-[#7f77dd] transition-all duration-700 ease-out"
            style={{ width: `${((step + 1) / totalSteps) * 100}%` }}
          />
        </div>
      </div>

      <section className="mx-auto w-full max-w-3xl px-6 pb-24 pt-12 sm:pt-20">
        {step === 0 && <StepIntro onNext={next} />}
        {step === 1 && (
          <StepOperation op={op} setOp={setOp} onNext={next} onBack={back} />
        )}
        {step === 2 && (
          <StepRoles
            roleCount={roleCount}
            setCount={setCount}
            roles={roles}
            updateRole={updateRole}
            onNext={next}
            onBack={back}
          />
        )}
        {step === 3 && (
          <StepFriction roles={roles} op={op} onNext={next} onBack={back} />
        )}
        {step === 4 && (
          <StepLeadCapture
            leadForm={leadForm}
            setLeadForm={setLeadForm}
            onSubmit={handleLeadSubmit}
            onBack={back}
            isSubmitting={isSubmittingLead}
            error={leadError}
          />
        )}
        {step === 5 && (
          <StepOpportunity roles={roles} op={op} onNext={next} onBack={back} />
        )}
        {step === 6 && (
          <StepSummary roles={roles} op={op} onBack={back} onRestart={restart} />
        )}
      </section>

      <footer className="mx-auto w-full max-w-3xl px-6 pb-10">
        <p className="text-center text-xs text-[#6b7280]">
          Una herramienta de Maven Mel · Estimaciones aproximadas con fines ejecutivos
        </p>
      </footer>
    </main>
  );
}

/* ------------------------- STEP INTRO ------------------------- */

function StepIntro({ onNext }: { onNext: () => void }) {
  return (
    <div className="animate-rise">
      <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#d4537e]">
        Costo de Esperar Información
      </p>
      <h1 className="mt-6 text-balance text-4xl font-semibold leading-[1.1] tracking-tight text-[#26215c] sm:text-5xl">
        Las empresas rara vez pierden dinero por falta de herramientas.
        <span className="block text-[#26215c]/60">
          Lo pierden por esperar información, corregir errores y tomar decisiones tarde.
        </span>
      </h1>
      <p className="mt-8 max-w-xl text-lg text-[#6b7280]">
        En menos de 3 minutos identifica cuánto tiempo, capacidad y dinero se pierden esperando información.
      </p>

      <div className="mt-12">
        <PrimaryButton onClick={onNext}>Comenzar</PrimaryButton>
      </div>

      <div className="mt-16 flex items-center gap-3 text-sm text-[#6b7280]">
        <span className="h-px w-8 bg-border" />
        Sin registro · sin envío de datos
      </div>
    </div>
  );
}

/* ------------------------- STEP OPERATION ------------------------- */

function StepOperation({
  op,
  setOp,
  onNext,
  onBack,
}: {
  op: Operation;
  setOp: (o: Operation) => void;
  onNext: () => void;
  onBack: () => void;
}) {
  return (
    <div className="animate-rise space-y-12">
      <div>
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#d4537e]">
          Cómo opera tu organización
        </p>
        <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-[#26215c] sm:text-4xl">
          Tres preguntas rápidas sobre el día a día.
        </h2>
      </div>

      <div className="space-y-8">
        <Field label="¿Con qué frecuencia ocurren errores o retrabajos en la operación?">
          <Choices
            value={op.errors}
            options={ERROR_LABELS}
            onChange={(v) => setOp({ ...op, errors: v as Operation["errors"] })}
          />
        </Field>

        <Field label="¿Qué tan rápido se toman decisiones cuando se necesita información?">
          <Choices
            value={op.decision}
            options={DECISION_LABELS}
            onChange={(v) => setOp({ ...op, decision: v as Operation["decision"] })}
          />
        </Field>

        <Field label="¿Qué porcentaje del trabajo es manual o repetitivo?">
          <div className="flex items-baseline justify-between">
            <span className="text-xs text-muted-foreground">0%</span>
            <span className="text-2xl font-semibold tabular-nums text-[#7f77dd]">
              {op.manual}%
            </span>
            <span className="text-xs text-muted-foreground">100%</span>
          </div>
          <input
            type="range"
            min={0}
            max={100}
            step={5}
            value={op.manual}
            onChange={(e) => setOp({ ...op, manual: Number(e.target.value) })}
            className="brand-slider mt-4 w-full"
          />
        </Field>
      </div>

      <NavButtons onBack={onBack} onNext={onNext} nextLabel="Continuar" />
    </div>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-[#d9d9e8] bg-white p-6 shadow-soft sm:p-7">
      <p className="text-base font-medium text-[#26215c]">{label}</p>
      <div className="mt-5">{children}</div>
    </div>
  );
}

function Choices({
  value,
  options,
  onChange,
}: {
  value: number;
  options: string[];
  onChange: (v: number) => void;
}) {
  return (
    <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
      {options.map((label, i) => {
        const active = value === i;
        return (
          <button
            key={label}
            onClick={() => onChange(i)}
            className={[
              "rounded-xl border px-3 py-3 text-sm font-medium transition-all",
              active
                ? "border-primary bg-[#7f77dd] text-white shadow-soft"
                : "border-[#d9d9e8] bg-background text-[#26215c] hover:border-primary/40 hover:bg-[#EEEDFE]",
            ].join(" ")}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}

/* ------------------------- STEP ROLES ------------------------- */

function StepRoles({
  roleCount,
  setCount,
  roles,
  updateRole,
  onNext,
  onBack,
}: {
  roleCount: number;
  setCount: (n: number) => void;
  roles: Role[];
  updateRole: (id: string, patch: Partial<Role>) => void;
  onNext: () => void;
  onBack: () => void;
}) {
  const countOptions = [1, 2, 3, 4, 5];
  const canContinue =
    roleCount > 0 &&
    roles.every(
      (r) =>
        r.salary > 0 &&
        r.hours >= 0 &&
        (r.role !== "Otro" || r.customRole.trim().length > 0),
    );

  return (
    <div className="animate-rise space-y-12">
      <div>
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#d4537e]">
          Tu equipo
        </p>
        <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-[#26215c] sm:text-4xl">
          ¿Cuántos tipos de roles participan normalmente en este proceso?
        </h2>
        <p className="mt-3 text-sm text-muted-foreground">
          Esto nos ayuda a estimar el impacto económico, no a hacer un análisis de nómina.
        </p>
      </div>

      <div className="grid grid-cols-5 gap-3">
        {countOptions.map((n) => {
          const active = roleCount === n;
          return (
            <button
              key={n}
              onClick={() => setCount(n)}
              className={[
                "rounded-2xl border py-6 text-2xl font-semibold transition-all",
                active
                  ? "border-primary bg-[#7f77dd] text-white shadow-soft"
                  : "border-[#d9d9e8] bg-white text-[#26215c] hover:border-primary/40 hover:bg-[#EEEDFE]",
              ].join(" ")}
            >
              {n === 5 ? "5+" : n}
            </button>
          );
        })}
      </div>

      {roles.length > 0 && (
        <div className="space-y-5">
          {roles.map((r, idx) => (
            <RoleCard
              key={r.id}
              index={idx}
              role={r}
              onChange={(patch) => updateRole(r.id, patch)}
            />
          ))}
        </div>
      )}

      <div className="flex items-center justify-between pt-2">
        <SecondaryButton onClick={onBack}>Atrás</SecondaryButton>
        <button
          onClick={onNext}
          disabled={!canContinue}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-[#26215c] px-7 py-4 text-base font-medium text-white shadow-soft transition-all hover:translate-y-[-1px] hover:shadow-[0_18px_40px_-12px_rgba(38,33,92,0.45)] disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0"
        >
          Ver hallazgos
          <span aria-hidden>→</span>
        </button>
      </div>
    </div>
  );
}

function RoleCard({
  index,
  role,
  onChange,
}: {
  index: number;
  role: Role;
  onChange: (patch: Partial<Role>) => void;
}) {
  const m = roleMetrics(role);

  return (
    <div className="animate-rise rounded-2xl border border-[#d9d9e8] bg-white p-6 shadow-soft sm:p-7">
      <div className="flex items-center justify-between">
        <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
          Rol {index + 1}
        </p>
        <span className="text-xs font-medium text-[#7f77dd]">
          {role.role === "Otro" ? role.customRole || "Personalizado" : role.role}
        </span>
      </div>

      <div className="mt-5 grid gap-5 sm:grid-cols-2">
        <div>
          <label className="text-sm font-medium text-[#26215c]">Tipo de rol</label>
          <select
            value={role.role}
            onChange={(e) => onChange({ role: e.target.value as RoleName })}
            className="mt-2 w-full rounded-xl border border-[#d9d9e8] bg-background px-4 py-3 text-sm text-[#26215c] outline-none transition-colors focus:border-primary"
          >
            {ROLE_OPTIONS.map((o) => (
              <option key={o} value={o}>
                {o}
              </option>
            ))}
          </select>
          {role.role === "Otro" && (
            <input
              type="text"
              placeholder="Nombre del rol"
              value={role.customRole}
              onChange={(e) => onChange({ customRole: e.target.value })}
              className="mt-2 w-full rounded-xl border border-[#d9d9e8] bg-background px-4 py-3 text-sm text-[#26215c] outline-none transition-colors focus:border-primary"
            />
          )}
        </div>

        <div>
          <label className="text-sm font-medium text-[#26215c]">Salario mensual (COP)</label>
          <input
            type="number"
            min={0}
            step={100000}
            placeholder="Ejemplo: 3500000"
            value={role.salary || ""}
            onChange={(e) => onChange({ salary: Number(e.target.value) })}
            className="mt-2 w-full rounded-xl border border-[#d9d9e8] bg-background px-4 py-3 text-sm tabular-nums text-[#26215c] outline-none transition-colors focus:border-primary"
          />
          <p className="mt-1.5 text-xs text-muted-foreground">
            No necesitas un valor exacto. Una aproximación es suficiente.
          </p>
        </div>
      </div>

      <div className="mt-6">
        <div className="flex items-baseline justify-between">
          <label className="text-sm font-medium text-[#26215c]">
            Horas semanales en consolidar, revisar o preparar información
          </label>
          <span className="text-base font-semibold tabular-nums text-[#7f77dd]">
            {role.hours} h
          </span>
        </div>
        <input
          type="range"
          min={0}
          max={40}
          value={role.hours}
          onChange={(e) => onChange({ hours: Number(e.target.value) })}
          className="brand-slider mt-4"
        />
      </div>

      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
        <Mini label="Costo empresa" value={formatCOP(m.companyMonthly)} sub="mensual" />
        <Mini label="Tiempo invertido" value={`${formatNum(m.monthlyHours)} h`} sub="al mes" />
        <Mini label="Costo asociado" value={formatCOP(m.monthlyAssoc)} sub="mensual" />
        <Mini
          label="Costo anual"
          value={formatCOP(m.yearlyAssoc)}
          sub="estimado"
          accent
        />
      </div>
    </div>
  );
}

function Mini({
  label,
  value,
  sub,
  accent,
}: {
  label: string;
  value: string;
  sub: string;
  accent?: boolean;
}) {
  return (
    <div
      className={[
        "rounded-xl border p-3",
        accent
          ? "border-transparent bg-[#EEEDFE] text-[#26215c]"
          : "border-[#d9d9e8] bg-background text-[#26215c]",
      ].join(" ")}
    >
      <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-muted-foreground">
        {label}
      </p>
      <p className="mt-1.5 text-base font-semibold tabular-nums tracking-tight">
        {value}
      </p>
      <p className="text-[11px] text-muted-foreground">{sub}</p>
    </div>
  );
}

/* ------------------------- METRICS ------------------------- */

function roleMetrics(r: Role) {
  const companyMonthly = r.salary * 1.6;
  const hourlyCost = companyMonthly / 192;
  const monthlyHours = r.hours * 4.3;
  const monthlyAssoc = r.hours * hourlyCost * 4.3;
  const yearlyAssoc = monthlyAssoc * 12;
  return { companyMonthly, hourlyCost, monthlyHours, monthlyAssoc, yearlyAssoc };
}

function useGlobal(roles: Role[], op: Operation) {
  return useMemo(() => {
    const per = roles.map((r) => ({ r, m: roleMetrics(r) }));
    const baseMonthlyHours = per.reduce((s, x) => s + x.m.monthlyHours, 0);
    const baseMonthlyCost = per.reduce((s, x) => s + x.m.monthlyAssoc, 0);

    // Friction multipliers from operation answers
    const frictionImpact =
  op.errors * 0.12 +
  op.decision * 0.08 +
  op.manual / 250;

const totalMult = 1 + frictionImpact;
    const monthlyHours = baseMonthlyHours * totalMult;
    const monthlyCost = baseMonthlyCost * totalMult;
    const yearlyCost = monthlyCost * 12;

    // Friction score 0-100
    const frictionScore = Math.min(
      100,
      Math.round(
        (op.errors / 3) * 30 + (op.decision / 3) * 30 + (op.manual / 100) * 40,
      ),
    );

    const hasStrategic = roles.some(
      (r) => STRATEGIC_ROLES.includes(r.role) && r.hours >= 4,
    );
    const hasOperative = roles.some((r) => OPERATIVE_ROLES.includes(r.role));
    const multipleAreas = roles.length >= 3;
    const heavyHours = baseMonthlyHours >= 80;

    return {
      monthlyHours,
      monthlyCost,
      yearlyCost,
      frictionScore,
      hasStrategic,
      hasOperative,
      multipleAreas,
      heavyHours,
      per,
      op,
      totalMult,
    };
  }, [roles, op]);
}

const formatCOP = (n: number) =>
  new Intl.NumberFormat("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  }).format(Math.round(n));

const formatNum = (n: number) =>
  new Intl.NumberFormat("es-CO", { maximumFractionDigits: 0 }).format(Math.round(n));

/* ------------------------- STEP LEAD CAPTURE ------------------------- */

function StepLeadCapture({
  leadForm,
  setLeadForm,
  onSubmit,
  onBack,
  isSubmitting,
  error,
}: {
  leadForm: { nombre: string; email: string; telefono: string; empresa: string };
  setLeadForm: (f: { nombre: string; email: string; telefono: string; empresa: string }) => void;
  onSubmit: (e: React.FormEvent) => void;
  onBack: () => void;
  isSubmitting: boolean;
  error: string;
}) {
  return (
    <div className="animate-rise space-y-10">
      <div>
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#d4537e]">
          Ya tienes tu diagnóstico
        </p>
        <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-[#26215c] sm:text-4xl">
          ¿A quién le enviamos los resultados?
          <span className="block text-[#26215c]/60">
            Ingresa tus datos para ver la oportunidad de mejora y el resumen ejecutivo.
          </span>
        </h2>
      </div>

      <form onSubmit={onSubmit} className="space-y-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className="text-sm font-medium text-[#26215c]">
              Nombre completo <span className="text-[#d4537e]">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="Ej. María González"
              value={leadForm.nombre}
              onChange={(e) => setLeadForm({ ...leadForm, nombre: e.target.value })}
              className="mt-2 w-full rounded-xl border border-[#d9d9e8] bg-background px-4 py-3 text-sm text-[#26215c] outline-none transition-colors focus:border-[#7f77dd]"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-[#26215c]">
              Correo electrónico <span className="text-[#d4537e]">*</span>
            </label>
            <input
              type="email"
              required
              placeholder="Ej. maria@empresa.com"
              value={leadForm.email}
              onChange={(e) => setLeadForm({ ...leadForm, email: e.target.value })}
              className="mt-2 w-full rounded-xl border border-[#d9d9e8] bg-background px-4 py-3 text-sm text-[#26215c] outline-none transition-colors focus:border-[#7f77dd]"
            />
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label className="text-sm font-medium text-[#26215c]">Teléfono</label>
            <input
              type="tel"
              placeholder="Ej. +57 310 000 0000"
              value={leadForm.telefono}
              onChange={(e) => setLeadForm({ ...leadForm, telefono: e.target.value })}
              className="mt-2 w-full rounded-xl border border-[#d9d9e8] bg-background px-4 py-3 text-sm text-[#26215c] outline-none transition-colors focus:border-[#7f77dd]"
            />
          </div>
          <div>
            <label className="text-sm font-medium text-[#26215c]">Empresa</label>
            <input
              type="text"
              placeholder="Ej. Acme Corp"
              value={leadForm.empresa}
              onChange={(e) => setLeadForm({ ...leadForm, empresa: e.target.value })}
              className="mt-2 w-full rounded-xl border border-[#d9d9e8] bg-background px-4 py-3 text-sm text-[#26215c] outline-none transition-colors focus:border-[#7f77dd]"
            />
          </div>
        </div>

        {error && (
          <p className="text-sm text-[#d4537e]">{error}</p>
        )}

        <p className="text-xs text-[#6b7280]">
          Tu información es confidencial. No compartimos tus datos con terceros.
        </p>

        <div className="flex items-center justify-between pt-2">
          <SecondaryButton onClick={onBack}>Atrás</SecondaryButton>
          <button
            type="submit"
            disabled={isSubmitting}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#26215c] px-7 py-4 text-base font-medium text-white shadow-soft transition-all hover:translate-y-[-1px] hover:shadow-[0_18px_40px_-12px_rgba(38,33,92,0.45)] disabled:cursor-not-allowed disabled:opacity-40"
          >
            {isSubmitting ? "Enviando..." : "Ver mis resultados"}
            <span aria-hidden>→</span>
          </button>
        </div>
      </form>
    </div>
  );
}

/* ------------------------- STEP FRICTION ------------------------- */

function StepFriction({
  roles,
  op,
  onNext,
  onBack,
}: {
  roles: Role[];
  op: Operation;
  onNext: () => void;
  onBack: () => void;
}) {
  const g = useGlobal(roles, op);

  const insights: string[] = [];
  if (op.errors >= 2)
    insights.push(
      "Parte del costo de perfiles estratégicos se está consumiendo en tareas operativas.",
    );
  if (op.decision >= 2)
    insights.push(
      "Las decisiones tardan porque la información no está consolidada cuando se necesita.",
    );
  if (op.manual >= 60)
    insights.push(
      "Más de la mitad del trabajo es manual: hay un techo claro de productividad.",
    );
  if (g.hasStrategic)
    insights.push("Perfiles estratégicos están dedicando tiempo a tareas operativas.");
  if (g.hasOperative && g.multipleAreas)
    insights.push("La consolidación manual parece depender de múltiples áreas.");
  if (g.hasStrategic && op.manual >= 50)
    insights.push(
      "Parte del tiempo ejecutivo se está consumiendo en tareas que podrían automatizarse.",
    );
  if (insights.length === 0)
    insights.push(
      "Aun en operaciones eficientes, suele existir un costo invisible no dimensionado.",
    );

  return (
    <div className="animate-rise space-y-10">
      <div>
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#d4537e]">
          Ineficiencia detectada
        </p>
        <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-[#26215c] sm:text-4xl">
          Parte del gasto administrativo no está generando valor proporcional.
          <span className="block text-[#26215c]/60">
            La operación está absorbiendo tiempo y costo en tareas manuales, coordinación y retrabajos.
          </span>
        </h2>
      </div>

      <FrictionMeter score={g.frictionScore} />

      <div className="space-y-3">
        {insights.map((t) => (
          <div
            key={t}
            className="rounded-2xl border border-[#d9d9e8] bg-[#EEEDFE]/60 p-5 text-base text-[#26215c]"
          >
            {t}
          </div>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <MetricCard
          label="Horas mensuales"
          value={formatNum(g.monthlyHours)}
          unit="aprox. desperdiciadas"
        />
        <MetricCard
          label="Costo mensual"
          value={formatCOP(g.monthlyCost)}
          unit="estimado"
        />
        <MetricCard
          label="Costo anual"
          value={formatCOP(g.yearlyCost)}
          unit="estimado"
          accent
        />
      </div>

      <div className="rounded-2xl border border-[#d9d9e8] bg-white p-6 shadow-soft">
        <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
          Distribución por rol
        </p>
        <ul className="mt-4 space-y-3">
          {g.per.map(({ r, m }) => {
            const adjusted = m.monthlyAssoc * g.totalMult;
            const pct = g.monthlyCost
              ? Math.round((adjusted / g.monthlyCost) * 100)
              : 0;
            return (
              <li key={r.id}>
                <div className="flex items-baseline justify-between text-sm">
                  <span className="font-medium text-[#26215c]">
                    {r.role === "Otro" ? r.customRole || "Personalizado" : r.role}
                  </span>
                  <span className="tabular-nums text-muted-foreground">
                    {formatCOP(adjusted)} · {pct}%
                  </span>
                </div>
                <div className="mt-1.5 h-1.5 w-full overflow-hidden rounded-full bg-[#EEEDFE]">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-[#7f77dd] to-[#d4537e] transition-all duration-700"
                    style={{ width: `${pct}%` }}
                  />
                </div>
              </li>
            );
          })}
        </ul>
      </div>

      <NavButtons onBack={onBack} onNext={onNext} nextLabel="Ver oportunidad" />
    </div>
  );
}

function FrictionMeter({ score }: { score: number }) {
  const level =
    score < 30
      ? "Controlado"
      : score < 55
        ? "Creciente"
        : score < 80
          ? "Elevado"
          : "Crítico";
  return (
    <div className="rounded-2xl border border-[#d9d9e8] bg-white p-6 shadow-soft sm:p-7">
      <div className="flex items-baseline justify-between">
        <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
          Costo administrativo invisible
        </p>
        <p className="text-sm font-semibold text-[#7f77dd]">{level}</p>
      </div>
      <div className="mt-4">
  <p className="text-5xl font-semibold tracking-tight text-[#26215c]">
    {level}
  </p>

  <p className="mt-2 text-sm text-muted-foreground">
    Índice estimado: {score}/100
  </p>
</div>
      <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-[#EEEDFE]">
        <div
          className="h-full rounded-full bg-gradient-to-r from-[#7f77dd] to-[#d4537e] transition-all duration-700"
          style={{ width: `${score}%` }}
        />
      </div>
    </div>
  );
}

function MetricCard({
  label,
  value,
  unit,
  accent,
}: {
  label: string;
  value: string;
  unit?: string;
  accent?: boolean;
}) {
  return (
    <div
      className={[
        "rounded-2xl border p-6 shadow-soft",
        accent
          ? "border-transparent bg-[#26215c] text-white"
          : "border-[#d9d9e8] bg-white text-[#26215c]",
      ].join(" ")}
    >
      <p
        className={[
          "text-xs font-medium uppercase tracking-[0.14em]",
          accent ? "text-white/60" : "text-muted-foreground",
        ].join(" ")}
      >
        {label}
      </p>
      <p className="mt-3 text-3xl font-semibold tabular-nums tracking-tight sm:text-4xl">
        {value}
      </p>
      {unit && (
        <p
          className={[
            "mt-1 text-sm",
            accent ? "text-white/70" : "text-muted-foreground",
          ].join(" ")}
        >
          {unit}
        </p>
      )}
    </div>
  );
}

/* ------------------------- STEP OPPORTUNITY ------------------------- */

function StepOpportunity({
  roles,
  op,
  onNext,
  onBack,
}: {
  roles: Role[];
  op: Operation;
  onNext: () => void;
  onBack: () => void;
}) {
  const g = useGlobal(roles, op);
  const savedHoursYear = g.monthlyHours * 12 * 0.2;
  const savedCost = g.yearlyCost * 0.2;

  return (
    <div className="animate-rise space-y-10">
      <div>
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#d4537e]">
          La oportunidad
        </p>
        <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-[#26215c] sm:text-4xl">
          Reducir solo un 20% de fricción podría representar:
        </h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <OpportunityCard
          title="Tiempo recuperado"
          value={`${formatNum(savedHoursYear)} h`}
          detail="al año"
        />
        <OpportunityCard
          title="Menos retrabajos"
          value="−20%"
          detail="errores y reprocesos"
        />
        <OpportunityCard
          title="Decisiones más rápidas"
          value="+ velocidad"
          detail="con información consolidada"
        />
        <OpportunityCard
          title="Impacto operativo"
          value={formatCOP(savedCost)}
          detail="estimado anual"
          highlight
        />
      </div>

      <p className="text-sm leading-relaxed text-[#6b7280]">
        Estas cifras son aproximaciones diseñadas para abrir una conversación, no para
        sustituir un análisis profundo. La magnitud real suele ser mayor cuando se
        consideran efectos en clientes, reputación y velocidad de mercado.
      </p>

      <NavButtons onBack={onBack} onNext={onNext} nextLabel="Ver resumen" />
    </div>
  );
}

function OpportunityCard({
  title,
  value,
  detail,
  highlight,
}: {
  title: string;
  value: string;
  detail: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={[
        "rounded-2xl border p-6 shadow-soft",
        highlight
          ? "border-transparent bg-gradient-to-br from-[#7f77dd] to-[#9a90eb] text-white"
          : "border-[#d9d9e8] bg-white text-[#26215c]",
      ].join(" ")}
    >
      <p
        className={[
          "text-xs font-medium uppercase tracking-[0.14em]",
          highlight ? "text-white/70" : "text-[#6b7280]",
        ].join(" ")}
      >
        {title}
      </p>
      <p className="mt-3 text-4xl font-semibold tabular-nums tracking-tight">
        {value}
      </p>
      <p
        className={[
          "mt-1 text-sm",
          highlight ? "text-white/80" : "text-[#6b7280]",
        ].join(" ")}
      >
        {detail}
      </p>
    </div>
  );
}

/* ------------------------- STEP SUMMARY ------------------------- */

function StepSummary({
  roles,
  op,
  onBack,
  onRestart,
}: {
  roles: Role[];
  op: Operation;
  onBack: () => void;
  onRestart: () => void;
}) {
  const g = useGlobal(roles, op);

  const issues: string[] = [];
  if (op.errors >= 2) issues.push("Errores y retrabajos recurrentes");
  if (op.decision >= 2) issues.push("Decisiones lentas por falta de información");
  if (op.manual >= 60) issues.push("Alto porcentaje de trabajo manual");
  if (g.hasStrategic) issues.push("Perfiles estratégicos en tareas operativas");
  if (g.multipleAreas) issues.push("Dependencia entre múltiples áreas");
  issues.push("Costo invisible no dimensionado");

  const opps: string[] = [];

if (op.manual >= 60)
  opps.push("Reducir carga manual y tareas repetitivas");

if (op.errors >= 2)
  opps.push("Disminuir retrabajos y errores operativos");

if (op.decision >= 2)
  opps.push("Acelerar decisiones con información consolidada");

if (g.hasStrategic)
  opps.push("Liberar tiempo de perfiles estratégicos");

if (g.multipleAreas)
  opps.push("Centralizar información entre áreas");

if (g.heavyHours)
  opps.push("Reducir tiempo invertido en consolidación operativa");

if (op.manual >= 70 && g.hasStrategic)
  opps.push("Automatizar procesos de alto costo administrativo");

if (opps.length < 4)
  opps.push("Mejorar visibilidad operativa en tiempo real");

  return (
    <div className="animate-rise space-y-12">
      <div>
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-[#d4537e]">
          Resumen ejecutivo
        </p>
        <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight text-[#26215c] sm:text-4xl">
          Una estimación del costo administrativo que hoy no está generando suficiente valor.
        </h2>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <MetricCard
          label="Costo invisible"
          value={`${g.frictionScore}/100`}
          unit="impacto administrativo"
        />
        <MetricCard
          label="Costo mensual"
          value={formatCOP(g.monthlyCost)}
          unit="estimado"
        />
        <MetricCard
          label="Costo anual"
          value={formatCOP(g.yearlyCost)}
          unit="estimado"
          accent
        />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <ListCard title="Lo que probablemente está ocurriendo" items={issues} tone="ink" />
        <ListCard title="Dónde podría recuperarse más valor operativo" items={opps} tone="primary" />
      </div>

      <div className="rounded-3xl bg-[#26215c] p-8 text-white shadow-glow sm:p-12">
        <p className="text-sm font-medium uppercase tracking-[0.18em] text-white/60">
          Siguiente paso
        </p>
        <h3 className="mt-4 text-balance text-2xl font-semibold leading-tight sm:text-3xl">
          Convirtamos estas estimaciones en una hoja de ruta concreta para tu operación.
        </h3>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href="https://wa.me/573004824207?text=Hola%2C%20acabo%20de%20usar%20la%20calculadora%20de%20ineficiencia%20de%20Maven%20Mel%20y%20me%20gustar%C3%ADa%20saber%20c%C3%B3mo%20reducir%20ese%20costo%20en%20mi%20operaci%C3%B3n."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-white shadow-soft transition-transform hover:translate-y-[-1px] hover:shadow-[0_18px_40px_-12px_rgba(212,83,126,0.55)]"
          >
            Hablar con Melisa por WhatsApp
          </a>
          <button
            onClick={onRestart}
            className="inline-flex items-center justify-center rounded-full border border-white/15 px-6 py-3.5 text-sm font-medium text-white/80 transition-colors hover:bg-white/5"
          >
            Recalcular
          </button>
        </div>
      </div>

      <div className="flex">
        <SecondaryButton onClick={onBack}>Atrás</SecondaryButton>
      </div>
    </div>
  );
}

function ListCard({
  title,
  items,
  tone,
}: {
  title: string;
  items: string[];
  tone: "ink" | "primary";
}) {
  return (
    <div className="rounded-2xl border border-[#d9d9e8] bg-white p-6 shadow-soft">
      <p className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
        {title}
      </p>
      <ul className="mt-5 space-y-3">
        {items.map((it) => (
          <li key={it} className="flex items-start gap-3 text-base text-[#26215c]">
            <span
              className={[
                "mt-2 h-1.5 w-1.5 shrink-0 rounded-full",
                tone === "ink" ? "bg-accent" : "bg-[#7f77dd]",
              ].join(" ")}
            />
            <span>{it}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ------------------------- BUTTONS ------------------------- */

function PrimaryButton({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center justify-center gap-2 rounded-full bg-[#26215c] px-7 py-4 text-base font-medium text-white shadow-soft transition-all hover:translate-y-[-1px] hover:shadow-[0_18px_40px_-12px_rgba(38,33,92,0.45)]"
    >
      {children}
      <span aria-hidden>→</span>
    </button>
  );
}

function SecondaryButton({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="inline-flex items-center justify-center rounded-full border border-[#d9d9e8] bg-background px-6 py-3 text-sm font-medium text-[#26215c] transition-colors hover:bg-[#EEEDFE]"
    >
      {children}
    </button>
  );
}

function NavButtons({
  onBack,
  onNext,
  nextLabel,
}: {
  onBack: () => void;
  onNext: () => void;
  nextLabel: string;
}) {
  return (
    <div className="flex items-center justify-between pt-2">
      <SecondaryButton onClick={onBack}>Atrás</SecondaryButton>
      <PrimaryButton onClick={onNext}>{nextLabel}</PrimaryButton>
    </div>
  );
}
