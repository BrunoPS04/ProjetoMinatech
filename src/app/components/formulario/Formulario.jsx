import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Phone,
  Heart,
  Home,
  Monitor,
  Check,
  ChevronRight,
  Laptop,
  Smartphone,
  Plus,
  Minus,
  Cpu,
} from "lucide-react";

// ─── CONSTANTES (Fora do componente) ─────────────────────────────────────────
const STEPS = [
  { id: 1, label: "Dados pessoais", sublabel: "Informações básicas", icon: <User size={16} /> },
  { id: 2, label: "Contato", sublabel: "Como te encontrar", icon: <Phone size={16} /> },
  { id: 3, label: "Diversidade e Inclusão", sublabel: "Sobre você", icon: <Heart size={16} /> },
  { id: 4, label: "Situação familiar", sublabel: "Contexto familiar", icon: <Home size={16} /> },
  { id: 5, label: "Acesso digital", sublabel: "Recursos tecnológicos", icon: <Monitor size={16} /> },
];

const ESCOLARIDADE = [
  "Ensino Fundamental incompleto",
  "Ensino Fundamental completo",
  "Ensino Médio incompleto",
  "Ensino Médio completo",
  "Ensino Superior incompleto",
  "Ensino Superior completo",
  "Pós-graduação",
];

const FAIXA_SALARIAL = [
  "Até R$ 1.412 (1 salário mínimo)",
  "De R$ 1.412 a R$ 2.824 (1 a 2 salários)",
  "De R$ 2.824 a R$ 5.648 (2 a 4 salários)",
  "De R$ 5.648 a R$ 11.296 (4 a 8 salários)",
  "Acima de R$ 11.296 (mais de 8 salários)",
  "Prefiro não informar",
];

const PESSOAS_CASA = ["1", "2", "3", "4", "5", "6 ou mais"];
const NEURODIVERGENTE_OPTIONS = ["Sim", "Não", "Não sei ao certo", "Prefiro não dizer"];

const getGradientText = (active) => ({
  background: active ? "linear-gradient(90deg, #8B3DFF, #D946EF, #FF4D8D)" : "transparent",
  WebkitBackgroundClip: active ? "text" : "none",
  WebkitTextFillColor: active ? "transparent" : "inherit",
});

// ─── SUB-COMPONENTES AUXILIARES ──────────────────────────────────────────────
function GradientIcon({ children }) {
  return (
    <div
      className="w-10 h-10 rounded-full flex items-center justify-center text-white shrink-0"
      style={{ background: "linear-gradient(135deg, #8B3DFF 0%, #D946EF 50%, #FF4D8D 100%)" }}
    >
      {children}
    </div>
  );
}

function StepIndicator({ current, total }) {
  const pct = Math.round(((current - 1) / (total - 1)) * 100);
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-xs font-medium text-muted-foreground">Progresso</span>
        <span
          className="text-xs font-semibold"
          style={{ background: "linear-gradient(90deg,#8B3DFF,#FF4D8D)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}
        >
          {pct}%
        </span>
      </div>
      <div className="h-1.5 rounded-full bg-[#EDE9F8] overflow-hidden">
        <motion.div
          className="h-full rounded-full"
          style={{ background: "linear-gradient(90deg,#8B3DFF,#D946EF,#FF4D8D)" }}
          initial={false}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
}

function Sidebar({ current }) {
  return (
    <aside className="w-72 shrink-0 flex flex-col px-6 py-8 bg-white border-r border-[#EDE9F8]">
      {/* Logo */}
      <div className="flex items-center gap-2.5 mb-10">
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center"
          style={{ background: "linear-gradient(135deg,#8B3DFF,#FF4D8D)" }}
        >
          <Cpu size={18} className="text-white" />
        </div>
        <span className="font-bold text-xl tracking-tight text-foreground">MinaTech</span>
      </div>

      {/* Progress bar */}
      <StepIndicator current={current} total={STEPS.length} />

      {/* Stepper */}
      <nav className="flex flex-col gap-0">
        {STEPS.map((step, idx) => {
          const isDone = step.id < current;
          const isActive = step.id === current;
          return (
            <div key={step.id} className="flex gap-3">
              {/* Icon + connector */}
              <div className="flex flex-col items-center">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-300"
                  style={
                    isDone || isActive
                      ? { background: "linear-gradient(135deg,#8B3DFF,#D946EF,#FF4D8D)" }
                      : { background: "#EDE9F8", border: "2px solid #D9D1F0" }
                  }
                >
                  {isDone ? (
                    <Check size={16} className="text-white" />
                  ) : (
                    <span className={isActive ? "text-white" : "text-[#B0A4D8]"}>
                      {step.icon}
                    </span>
                  )}
                </div>
                {idx < STEPS.length - 1 && (
                  <div
                    className="w-0.5 flex-1 my-1 rounded-full transition-all duration-500"
                    style={{
                      background:
                        isDone
                          ? "linear-gradient(180deg,#8B3DFF,#D946EF)"
                          : "#E5DFF5",
                      minHeight: 28,
                    }}
                  />
                )}
              </div>

              {/* Label */}
              <div className="pb-7 pt-1">
                {/* CORREÇÃO AQUI: Trocado de className para style usando getGradientText */}
                <p
                  style={getGradientText(isActive)}
                  className={`text-sm font-semibold leading-tight ${
                    !isActive && isDone ? "text-[#8B3DFF]" : !isActive ? "text-[#B0A4D8]" : ""
                  }`}
                >
                  {step.label}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">{step.sublabel}</p>
              </div>
            </div>
          );
        })}
      </nav>
    </aside>
  );
}

function InputField({ label, type = "text", placeholder, value, onChange }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-semibold text-foreground">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-14 rounded-2xl border border-border bg-white px-4 text-sm text-foreground placeholder:text-[#C4BDD8] outline-none transition-all duration-200 focus:border-[#8B3DFF] focus:ring-2 focus:ring-[#8B3DFF]/20"
      />
    </div>
  );
}

function SelectField({ label, options, value, onChange, placeholder }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-semibold text-foreground">{label}</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="h-14 rounded-2xl border border-border bg-white px-4 text-sm text-foreground outline-none appearance-none transition-all duration-200 focus:border-[#8B3DFF] focus:ring-2 focus:ring-[#8B3DFF]/20 cursor-pointer"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%238B3DFF' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 16px center" }}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </div>
  );
}

function PillButton({ label, selected, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="px-5 py-2.5 rounded-full text-sm font-medium border transition-all duration-200"
      style={
        selected
          ? {
              background: "linear-gradient(135deg,#8B3DFF,#D946EF,#FF4D8D)",
              color: "#fff",
              borderColor: "transparent",
              boxShadow: "0 4px 15px rgba(139,61,255,0.35)",
            }
          : {
              background: "#fff",
              color: "#7B6FA0",
              borderColor: "#E5DFF5",
            }
      }
    >
      {label}
    </button>
  );
}

function Counter({ value, onChange }) {
  return (
    <div className="flex items-center gap-2">
      <button
        type="button"
        onClick={() => onChange(Math.max(0, value - 1))}
        className="w-7 h-7 rounded-full border border-[#E5DFF5] flex items-center justify-center text-[#8B3DFF] hover:bg-[#F3EEFF] transition-colors"
      >
        <Minus size={12} />
      </button>
      <span className="text-sm font-semibold text-foreground w-5 text-center">{value}</span>
      <button
        type="button"
        onClick={() => onChange(value + 1)}
        className="w-7 h-7 rounded-full flex items-center justify-center text-white transition-all"
        style={{ background: "linear-gradient(135deg,#8B3DFF,#D946EF)" }}
      >
        <Plus size={12} />
      </button>
    </div>
  );
}

// ─── STEP FORMS ───────────────────────────────────────────────────────────────
function Step1({ data, onChange }) {
  return (
    <div className="flex flex-col gap-5">
      <InputField
        label="Nome completo"
        placeholder="Digite seu nome completo"
        value={data.nome}
        onChange={(v) => onChange("nome", v)}
      />
      <div className="grid grid-cols-2 gap-4">
        <InputField
          label="Idade"
          type="number"
          placeholder="Quantos anos você tem?"
          value={data.idade}
          onChange={(v) => onChange("idade", v)}
        />
        <SelectField
          label="Escolaridade"
          options={ESCOLARIDADE}
          value={data.escolaridade}
          onChange={(v) => onChange("escolaridade", v)}
          placeholder="Selecione"
        />
      </div>
    </div>
  );
}

function Step2({ data, onChange }) {
  return (
    <div className="flex flex-col gap-5">
      <InputField
        label="Telefone"
        type="tel"
        placeholder="+55 (00) 00000-0000"
        value={data.telefone}
        onChange={(v) => onChange("telefone", v)}
      />
      <InputField
        label="E-mail"
        type="email"
        placeholder="Seu@email.com"
        value={data.email}
        onChange={(v) => onChange("email", v)}
      />
    </div>
  );
}

function Step3({ data, onChange }) {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className="text-sm font-semibold text-foreground mb-3">
          Você é neurodivergente?
        </p>
        <div className="flex flex-wrap gap-2.5">
          {NEURODIVERGENTE_OPTIONS.map((opt) => (
            <PillButton
              key={opt}
              label={opt}
              selected={data.neurodivergente === opt}
              onClick={() => onChange("neurodivergente", opt)}
            />
          ))}
        </div>
      </div>
      <InputField
        label="Possui alguma alergia?"
        placeholder="Ex: amendoim, glúten, nenhuma..."
        value={data.alergia}
        onChange={(v) => onChange("alergia", v)}
      />
    </div>
  );
}

/* Continuado do passo 4 e 5 sem alterações estruturais prejudiciais */
function Step4({ data, onChange }) {
  return (
    <div className="flex flex-col gap-5">
      <SelectField
        label="Faixa salarial familiar"
        options={FAIXA_SALARIAL}
        value={data.faixaSalarial}
        onChange={(v) => onChange("faixaSalarial", v)}
        placeholder="Selecione a faixa"
      />
      <SelectField
        label="Quantas pessoas moram na sua casa?"
        options={PESSOAS_CASA}
        value={data.pessoasCasa}
        onChange={(v) => onChange("pessoasCasa", v)}
        placeholder="Selecione"
      />
    </div>
  );
}

function GradientCheckbox({ checked, onChange }) {
  return (
    <button
      type="button"
      onClick={onChange}
      className="w-5 h-5 rounded-md border-2 flex items-center justify-center shrink-0 transition-all duration-200"
      style={
        checked
          ? {
              background: "linear-gradient(135deg,#8B3DFF,#D946EF)",
              borderColor: "transparent",
            }
          : { borderColor: "#D1C8EC", background: "#fff" }
      }
    >
      {checked && <Check size={11} className="text-white" strokeWidth={3} />}
    </button>
  );
}

function Step5({ data, onChange }) {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm font-semibold text-foreground">
        Quais dispositivos você tem em casa?
      </p>

      {/* Computador */}
      <div
        className="flex items-center gap-4 p-4 rounded-2xl border transition-all duration-200"
        style={data.computador.selected ? { borderColor: "#8B3DFF", background: "#FAF7FF" } : { borderColor: "#E5E7EB", background: "#fff" }}
      >
        <GradientCheckbox
          checked={data.computador.selected}
          onChange={() =>
            onChange("computador", {
              ...data.computador,
              selected: !data.computador.selected,
              qty: data.computador.selected ? 0 : 1,
            })
          }
        />
        <div className="flex-1 flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg,#8B3DFF20,#D946EF20)" }}>
            <Laptop size={15} className="text-[#8B3DFF]" />
          </div>
          <span className="text-sm font-medium text-foreground">Computador / notebook</span>
        </div>
        {data.computador.selected && (
          <Counter
            value={data.computador.qty}
            onChange={(v) => onChange("computador", { ...data.computador, qty: v })}
          />
        )}
      </div>

      {/* Celular */}
      <div
        className="flex items-center gap-4 p-4 rounded-2xl border transition-all duration-200"
        style={data.celular.selected ? { borderColor: "#8B3DFF", background: "#FAF7FF" } : { borderColor: "#E5E7EB", background: "#fff" }}
      >
        <GradientCheckbox
          checked={data.celular.selected}
          onChange={() =>
            onChange("celular", {
              ...data.celular,
              selected: !data.celular.selected,
              qty: data.celular.selected ? 0 : 1,
            })
          }
        />
        <div className="flex-1 flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg,#D946EF20,#FF4D8D20)" }}>
            <Smartphone size={15} className="text-[#D946EF]" />
          </div>
          <span className="text-sm font-medium text-foreground">Celular / Tablet</span>
        </div>
        {data.celular.selected && (
          <Counter
            value={data.celular.qty}
            onChange={(v) => onChange("celular", { ...data.celular, qty: v })}
          />
        )}
      </div>

      {/* Nenhum */}
      <div
        className="flex items-center gap-4 p-4 rounded-2xl border transition-all duration-200"
        style={data.nenhum ? { borderColor: "#8B3DFF", background: "#FAF7FF" } : { borderColor: "#E5E7EB", background: "#fff" }}
      >
        <GradientCheckbox
          checked={data.nenhum}
          onChange={() => onChange("nenhum", !data.nenhum)}
        />
        <span className="text-sm font-medium text-foreground">Nenhum dos acima</span>
      </div>
    </div>
  );
}

function SuccessScreen() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="flex flex-col items-center justify-center text-center py-10 gap-5"
    >
      <div
        className="w-20 h-20 rounded-full flex items-center justify-center"
        style={{ background: "linear-gradient(135deg,#8B3DFF,#D946EF,#FF4D8D)" }}
      >
        <Check size={36} className="text-white" strokeWidth={2.5} />
      </div>
      <div>
        <h3 className="text-2xl font-bold text-foreground mb-2">Inscrição enviada!</h3>
        <p className="text-muted-foreground text-sm max-w-xs">
          Obrigada por se inscrever no MinaTech. Em breve entraremos em contato com as próximas etapas.
        </p>
      </div>
      <div
        className="mt-2 inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-sm font-medium"
        style={{ background: "linear-gradient(135deg,#8B3DFF,#D946EF,#FF4D8D)" }}
      >
        <Heart size={15} fill="white" />
        Boa sorte na sua jornada!
      </div>
    </motion.div>
  );
}

// ─── MAIN FORM COMPONENT ──────────────────────────────────────────────────────
export default function Formulario() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const [step1, setStep1] = useState({ nome: "", idade: "", escolaridade: "" });
  const [step2, setStep2] = useState({ telefone: "", email: "" });
  const [step3, setStep3] = useState({ neurodivergente: "", alergia: "" });
  const [step4, setStep4] = useState({ faixaSalarial: "", pessoasCasa: "" });
  const [step5, setStep5] = useState({
    computador: { selected: false, qty: 0 },
    celular: { selected: false, qty: 0 },
    nenhum: false,
  });

  function handleNext() {
    if (step < STEPS.length) setStep((s) => s + 1);
    else setSubmitted(true);
  }

  function handleBack() {
    if (step > 1) setStep((s) => s - 1);
  }

  // CORREÇÃO AUXILIAR: Evita que estoure erro ao acessar índice fora do array pós-submissão
  const currentStepInfo = STEPS[step - 1] || STEPS[STEPS.length - 1];

  return (
    <div className="min-h-screen flex" style={{ fontFamily: "'Poppins', sans-serif", background: "#FAF7FF" }}>
      <Sidebar current={submitted ? STEPS.length + 1 : step} />

      <main className="flex-1 flex flex-col items-center justify-center py-10 px-6 lg:px-16">
        <div className="w-full max-w-xl mb-8">
          <h1 className="text-2xl lg:text-3xl font-bold text-foreground leading-tight">
            Inscreva-se para transformar
            <br />
            <span style={{ background: "linear-gradient(90deg,#8B3DFF,#D946EF,#FF4D8D)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
              seu futuro através da tecnologia
            </span>
          </h1>
          <p className="text-sm text-muted-foreground mt-2.5">
            Preencha o questionário abaixo para concorrer a uma vaga no programa MinaTech de formação em tecnologia.
          </p>
        </div>

        <div className="w-full max-w-xl bg-white rounded-3xl p-8 shadow-sm" style={{ boxShadow: "0 8px 40px rgba(139,61,255,0.08)" }}>
          {submitted ? (
            <SuccessScreen />
          ) : (
            <>
              <div className="flex items-center gap-3 mb-7">
                <GradientIcon>{currentStepInfo.icon}</GradientIcon>
                <div>
                  <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    Etapa {step} de {STEPS.length}
                  </p>
                  <h2 className="text-lg font-bold text-foreground leading-tight">
                    {currentStepInfo.label}
                  </h2>
                </div>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                >
                  {step === 1 && <Step1 data={step1} onChange={(k, v) => setStep1((p) => ({ ...p, [k]: v }))} />}
                  {step === 2 && <Step2 data={step2} onChange={(k, v) => setStep2((p) => ({ ...p, [k]: v }))} />}
                  {step === 3 && <Step3 data={step3} onChange={(k, v) => setStep3((p) => ({ ...p, [k]: v }))} />}
                  {step === 4 && <Step4 data={step4} onChange={(k, v) => setStep4((p) => ({ ...p, [k]: v }))} />}
                  {step === 5 && (
                    <Step5
                      data={step5}
                      // CORREÇÃO AQUI: Simplificado o manipulador dinâmico de estados para evitar conflitos de união de tipos
                      onChange={(k, v) => setStep5((p) => ({ ...p, [k]: v }))}
                    />
                  )}
                </motion.div>
              </AnimatePresence>

              <div className="flex gap-3 mt-8">
                {step > 1 && (
                  <button
                    type="button"
                    onClick={handleBack}
                    className="h-14 px-6 rounded-2xl border border-[#E5DFF5] text-sm font-semibold text-[#8B3DFF] bg-white hover:bg-[#F3EEFF] transition-colors"
                  >
                    Voltar
                  </button>
                )}
                <button
                  type="button"
                  onClick={handleNext}
                  className="flex-1 h-16 rounded-2xl text-white font-semibold text-base flex items-center justify-center gap-2 transition-all duration-200 hover:opacity-90 hover:shadow-lg active:scale-[0.98]"
                  style={{
                    background: "linear-gradient(135deg,#8B3DFF 0%,#D946EF 50%,#FF4D8D 100%)",
                    boxShadow: "0 6px 24px rgba(139,61,255,0.3)",
                  }}
                >
                  {step === STEPS.length ? (
                    <>
                      Inscreva-se já
                      <Heart size={18} fill="white" />
                    </>
                  ) : (
                    <>
                      Continuar
                      <ChevronRight size={18} />
                    </>
                  )}
                </button>
              </div>
            </>
          )}
        </div>

        {!submitted && (
          <div className="flex gap-2 mt-6">
            {STEPS.map((s) => (
              <div
                key={s.id}
                className="transition-all duration-300 rounded-full"
                style={{
                  width: s.id === step ? 24 : 8,
                  height: 8,
                  background:
                    s.id === step
                      ? "linear-gradient(90deg,#8B3DFF,#FF4D8D)"
                      : s.id < step
                      ? "#C4B3F5"
                      : "#E5DFF5",
                }}
              />
            ))}
          </div>
        )}
      </main>
    </div>
  );
}