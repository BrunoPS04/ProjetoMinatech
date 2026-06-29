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
  GraduationCap,
  Code2,
  Clock,
  FileText,
  Shield,
} from "lucide-react";

// ─── CONSTANTES ──────────────────────────────────────────────────────────────

const STEPS = [
  { id: 1,  label: "Dados pessoais",      sublabel: "Informações básicas",       icon: <User size={16} /> },
  { id: 2,  label: "Contato",                 sublabel: "Como te encontrar",        icon: <Phone size={16} /> },
  { id: 3,  label: "Diversidade e Inclusão",  sublabel: "Sobre você",                icon: <Heart size={16} /> },
  { id: 4,  label: "Situação familiar",        sublabel: "Contexto familiar",        icon: <Home size={16} /> },
  { id: 5,  label: "Acesso digital",           sublabel: "Recursos tecnológicos",    icon: <Monitor size={16} /> },
  { id: 6,  label: "Informações Acadêmicas",  sublabel: "Sua trajetória escolar",   icon: <GraduationCap size={16} /> },
  { id: 7,  label: "Interesse na Tecnologia",  sublabel: "Áreas de interesse",       icon: <Code2 size={16} /> },
  { id: 8,  label: "Disponibilidade",          sublabel: "Sua agenda",               icon: <Clock size={16} /> },
  { id: 9,  label: "Motivação",                sublabel: "Conte sobre você",         icon: <FileText size={16} /> },
  { id: 10, label: "Termos",                   sublabel: "Confirmação final",        icon: <Shield size={16} /> },
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

const ESTADOS = [
  "AC","AL","AP","AM","BA","CE","DF","ES","GO","MA","MT","MS","MG",
  "PA","PB","PR","PE","PI","RJ","RN","RS","RO","RR","SC","SP","SE","TO",
];

const SERIES = [
  "1º ano do Ensino Fundamental","2º ano","3º ano","4º ano","5º ano",
  "6º ano","7º ano","8º ano","9º ano",
  "1º ano do Ensino Médio","2º ano do Ensino Médio","3º ano do Ensino Médio",
  "1º semestre (Superior)","2º semestre","3º semestre","4º semestre",
  "5º semestre","6º semestre","7º semestre","8º semestre ou mais",
];

const HORAS_SEMANA = [
  "Menos de 5 horas",
  "5 a 10 horas",
  "10 a 15 horas",
  "Mais de 15 horas",
];

const AREAS_TECH = [
  "Desenvolvimento Web",
  "Desenvolvimento Mobile",
  "Inteligência Artificial",
  "Ciência de Dados",
  "Segurança da Informação",
  "UX/UI Design",
  "Robótica",
  "Jogos",
  "Outro",
];

const INITIAL_STATE = {
  nome: "", idade: "", escolaridade: "",
  telefone: "", email: "",
  neurodivergente: "", alergia: "",
  faixaSalarial: "", pessoasCasa: "",
  computador: { selected: false, qty: 0 },
  celular: { selected: false, qty: 0 },
  nenhum: false,
  escola: "", cidade: "", estado: "", serie: "", curso: "", turno: "", matriculada: "",
  estudouProgramacao: "", participouCurso: "", nomeCurso: "", areas: [], outraArea: "",
  horasDisponiveis: "", disponibilidadeSincrona: "",
  motivacao: "", expectativas: "",
  termoVeracidade: false,
  termoLGPD: false,
  termoNoticias: false
};

// ─── HELPERS COMPARTILHADOS ──────────────────────────────────────────────────
const gradientStyle = { background: "linear-gradient(135deg,#8B3DFF 0%,#D946EF 50%,#FF4D8D 100%)" };
const gradientText  = { background: "linear-gradient(90deg,#8B3DFF,#D946EF,#FF4D8D)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" };

// ─── BASE COMPONENTS ─────────────────────────────────────────────────────────
function StepIndicator({ current, total }) {
  const pct = Math.round(((current - 1) / (total - 1)) * 100);
  return (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-1.5">
        <span className="text-xs font-medium text-muted-foreground">Progresso</span>
        <span className="text-xs font-semibold" style={gradientText}>{pct}%</span>
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
  const pct = Math.round(((current - 1) / (STEPS.length - 1)) * 100);

  return (
    <>
      <header className="md:hidden w-full bg-white border-b border-slate-100 px-6 py-4 flex items-center justify-between sticky top-0 z-50 shadow-sm">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={gradientStyle}>
            <Cpu size={16} className="text-white" />
          </div>
          <span className="font-bold text-lg tracking-tight text-foreground">MinaTech</span>
        </div>
        
        <div className="flex items-center gap-2.5 bg-[#FAF7FF] px-3 py-1.5 rounded-full border border-[#EDE9F8]">
          <div className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs" style={gradientStyle}>
            {STEPS[current - 1]?.icon || current}
          </div>
          <span className="text-xs font-bold" style={gradientText}>{pct}%</span>
        </div>
      </header>

      <aside className="hidden md:flex w-72 shrink-0 flex-col px-6 py-8 overflow-y-auto max-h-screen border-r border-slate-100" style={{ scrollbarWidth: "none" }}>
        <div className="flex items-center gap-2.5 mb-10">
          <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={gradientStyle}>
            <Cpu size={18} className="text-white" />
          </div>
          <span className="font-bold text-xl tracking-tight text-foreground">MinaTech</span>
        </div>

        <StepIndicator current={current} total={STEPS.length} />

        <nav className="flex flex-col gap-0">
          {STEPS.map((step, idx) => {
            const isDone   = step.id < current;
            const isActive = step.id === current;
            return (
              <div key={step.id} className="flex gap-3">
                <div className="flex flex-col items-center">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-300"
                    style={isDone || isActive ? gradientStyle : { background: "#EDE9F8", border: "2px solid #D9D1F0" }}
                  >
                    {isDone ? (
                      <Check size={16} className="text-white" />
                    ) : (
                      <span className={isActive ? "text-white" : "text-[#B0A4D8]"}>{step.icon}</span>
                    )}
                  </div>
                  {idx < STEPS.length - 1 && (
                    <div
                      className="w-0.5 flex-1 my-1 rounded-full transition-all duration-500"
                      style={{ background: isDone ? "linear-gradient(180deg,#8B3DFF,#D946EF)" : "#E5DFF5", minHeight: 20 }}
                    />
                  )}
                </div>
                <div className="pb-5 pt-1">
                  <p className="text-sm font-semibold leading-tight" style={isActive ? gradientText : isDone ? { color: "#8B3DFF" } : { color: "#B0A4D8" }}>
                    {step.label}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">{step.sublabel}</p>
                </div>
              </div>
            );
          })}
        </nav>
      </aside>
    </>
  );
}

// Restante dos subcomponentes (InputField, SelectField, PillButton, Counter, etc.)

function InputField({ label, type = "text", placeholder, value, onChange }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-sm font-semibold text-foreground">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        value={value || ""}
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
        value={value || ""}
        onChange={(e) => onChange(e.target.value)}
        className="h-14 rounded-2xl border border-border bg-white px-4 text-sm text-foreground outline-none appearance-none transition-all duration-200 focus:border-[#8B3DFF] focus:ring-2 focus:ring-[#8B3DFF]/20 cursor-pointer"
        style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='%238B3DFF' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E\")", backgroundRepeat: "no-repeat", backgroundPosition: "right 16px center" }}
      >
        {placeholder && <option value="" disabled>{placeholder}</option>}
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
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
      style={selected
        ? { ...gradientStyle, color: "#fff", borderColor: "transparent", boxShadow: "0 4px 15px rgba(139,61,255,0.35)" }
        : { background: "#fff", color: "#7B6FA0", borderColor: "#E5DFF5" }
      }
    >
      {label}
    </button>
  );
}

function Counter({ value, onChange }) {
  return (
    <div className="flex items-center gap-2" onClick={(e) => e.stopPropagation()}>
      <button type="button" onClick={() => onChange(Math.max(0, value - 1))} className="w-7 h-7 rounded-full border border-[#E5DFF5] flex items-center justify-center text-[#8B3DFF] hover:bg-[#F3EEFF] transition-colors">
        <Minus size={12} />
      </button>
      <span className="text-sm font-semibold text-foreground w-5 text-center">{value}</span>
      <button type="button" onClick={() => onChange(value + 1)} className="w-7 h-7 rounded-full flex items-center justify-center text-white" style={gradientStyle}>
        <Plus size={12} />
      </button>
    </div>
  );
}

function GradientCheckbox({ checked, onChange }) {
  return (
    <button
      type="button"
      onClick={onChange}
      className="w-5 h-5 rounded-md border-2 flex items-center justify-center shrink-0 transition-all duration-200"
      style={checked ? { ...gradientStyle, borderColor: "transparent" } : { borderColor: "#D1C8EC", background: "#fff" }}
    >
      {checked && <Check size={11} className="text-white" strokeWidth={3} />}
    </button>
  );
}

function CheckboxRow({ label, checked, onChange }) {
  return (
    <div
      className="flex items-center gap-3 p-4 rounded-2xl border transition-all duration-200 cursor-pointer"
      style={checked ? { borderColor: "#8B3DFF", background: "#FAF7FF" } : { borderColor: "#E5E7EB", background: "#fff" }}
      onClick={onChange}
    >
      <GradientCheckbox checked={checked} onChange={onChange} />
      <span className="text-sm font-medium text-foreground select-none">{label}</span>
    </div>
  );
}

// ─── FORM STEP COMPONENTS ─────────────────────────────────────────────────────
function Step1({ data, onChange }) {
  return (
    <div className="flex flex-col gap-5">
      <InputField label="Nome completo" placeholder="Digite seu nome completo" value={data.nome} onChange={(v) => onChange("nome", v)} />
      <div className="grid grid-cols-2 gap-4">
        <InputField label="Idade" type="number" placeholder="Quantos anos você tem?" value={data.idade} onChange={(v) => onChange("idade", v)} />
        <SelectField label="Escolaridade" options={ESCOLARIDADE} value={data.escolaridade} onChange={(v) => onChange("escolaridade", v)} placeholder="Selecione" />
      </div>
    </div>
  );
}

function Step2({ data, onChange }) {
  return (
    <div className="flex flex-col gap-5">
      <InputField label="Telefone" type="tel" placeholder="+55 (00) 00000-0000" value={data.telefone} onChange={(v) => onChange("telefone", v)} />
      <InputField label="E-mail" type="email" placeholder="Seu@email.com" value={data.email} onChange={(v) => onChange("email", v)} />
    </div>
  );
}

function Step3({ data, onChange }) {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className="text-sm font-semibold text-foreground mb-3">Você é neurodivergente?</p>
        <div className="flex flex-wrap gap-2.5">
          {NEURODIVERGENTE_OPTIONS.map((opt) => (
            <PillButton key={opt} label={opt} selected={data.neurodivergente === opt} onClick={() => onChange("neurodivergente", opt)} />
          ))}
        </div>
      </div>
      <InputField label="Possui alguma alergia?" placeholder="Ex: amendoim, glúten, nenhuma..." value={data.alergia} onChange={(v) => onChange("alergia", v)} />
    </div>
  );
}

function Step4({ data, onChange }) {
  return (
    <div className="flex flex-col gap-5">
      <SelectField label="Faixa salarial familiar" options={FAIXA_SALARIAL} value={data.faixaSalarial} onChange={(v) => onChange("faixaSalarial", v)} placeholder="Selecione a faixa" />
      <SelectField label="Quantas pessoas moram na sua casa?" options={PESSOAS_CASA} value={data.pessoasCasa} onChange={(v) => onChange("pessoasCasa", v)} placeholder="Selecione" />
    </div>
  );
}

function Step5({ data, onChange }) {
  return (
    <div className="flex flex-col gap-4">
      <p className="text-sm font-semibold text-foreground">Quais dispositivos você tem em casa?</p>
      <div className="flex items-center gap-4 p-4 rounded-2xl border transition-all duration-200" style={data.computador.selected ? { borderColor: "#8B3DFF", background: "#FAF7FF" } : { borderColor: "#E5E7EB", background: "#fff" }} onClick={() => onChange("computador", { ...data.computador, selected: !data.computador.selected, qty: data.computador.selected ? 0 : 1 })}>
        <GradientCheckbox checked={data.computador.selected} onChange={() => {}} />
        <div className="flex-1 flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg,#8B3DFF20,#D946EF20)" }}>
            <Laptop size={15} className="text-[#8B3DFF]" />
          </div>
          <span className="text-sm font-medium text-foreground">Computador / notebook</span>
        </div>
        {data.computador.selected && <Counter value={data.computador.qty} onChange={(v) => onChange("computador", { ...data.computador, qty: v })} />}
      </div>
      <div className="flex items-center gap-4 p-4 rounded-2xl border transition-all duration-200" style={data.celular.selected ? { borderColor: "#8B3DFF", background: "#FAF7FF" } : { borderColor: "#E5E7EB", background: "#fff" }} onClick={() => onChange("celular", { ...data.celular, selected: !data.celular.selected, qty: data.celular.selected ? 0 : 1 })}>
        <GradientCheckbox checked={data.celular.selected} onChange={() => {}} />
        <div className="flex-1 flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg,#D946EF20,#FF4D8D20)" }}>
            <Smartphone size={15} className="text-[#D946EF]" />
          </div>
          <span className="text-sm font-medium text-foreground">Celular / Tablet</span>
        </div>
        {data.celular.selected && <Counter value={data.celular.qty} onChange={(v) => onChange("celular", { ...data.celular, qty: v })} />}
      </div>
      <div className="flex items-center gap-4 p-4 rounded-2xl border transition-all duration-200" style={data.nenhum ? { borderColor: "#8B3DFF", background: "#FAF7FF" } : { borderColor: "#E5E7EB", background: "#fff" }} onClick={() => onChange("nenhum", !data.nenhum)}>
        <GradientCheckbox checked={data.nenhum} onChange={() => {}} />
        <span className="text-sm font-medium text-foreground">Nenhum dos acima</span>
      </div>
    </div>
  );
}

function Step6({ data, onChange }) {
  const TURNOS = ["Manhã", "Tarde", "Noite", "Integral"];
  return (
    <div className="flex flex-col gap-5">
      <InputField label="Nome da escola / instituição" placeholder="Ex: ETEC Maria José, UNICAMP..." value={data.escola} onChange={(v) => onChange("escola", v)} />
      <div className="grid grid-cols-2 gap-4">
        <InputField label="Cidade" placeholder="Ex: São Paulo" value={data.cidade} onChange={(v) => onChange("cidade", v)} />
        <SelectField label="Estado" options={ESTADOS} value={data.estado} onChange={(v) => onChange("estado", v)} placeholder="Selecione" />
      </div>
      <SelectField label="Série ou semestre atual" options={SERIES} value={data.serie} onChange={(v) => onChange("serie", v)} placeholder="Selecione" />
      <InputField label="Curso (caso ensino superior)" placeholder="Ex: Análise e Desenvolvimento de Sistemas" value={data.curso} onChange={(v) => onChange("curso", v)} />
      <div>
        <p className="text-sm font-semibold text-foreground mb-3">Turno</p>
        <div className="flex flex-wrap gap-2.5">
          {TURNOS.map((t) => (
            <PillButton key={t} label={t} selected={data.turno === t} onClick={() => onChange("turno", t)} />
          ))}
        </div>
      </div>
      <div>
        <p className="text-sm font-semibold text-foreground mb-3">Você está matriculada atualmente?</p>
        <div className="flex flex-wrap gap-2.5">
          {["Sim", "Não"].map((opt) => (
            <PillButton key={opt} label={opt} selected={data.matriculada === opt} onClick={() => onChange("matriculada", opt)} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Step7({ data, onChange }) {
  function toggleArea(area) {
    if (data.areas.includes(area)) {
      onChange("areas", data.areas.filter((a) => a !== area));
    } else {
      onChange("areas", [...data.areas, area]);
    }
  }
  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className="text-sm font-semibold text-foreground mb-3">Você já estudou programação?</p>
        <div className="flex flex-wrap gap-2.5">
          {["Nunca", "Um pouco", "Sim"].map((opt) => (
            <PillButton key={opt} label={opt} selected={data.estudouProgramacao === opt} onClick={() => onChange("estudouProgramacao", opt)} />
          ))}
        </div>
      </div>
      <div>
        <p className="text-sm font-semibold text-foreground mb-3">Já participou de algum curso de tecnologia?</p>
        <div className="flex flex-wrap gap-2.5">
          {["Não", "Sim"].map((opt) => (
            <PillButton key={opt} label={opt} selected={data.participouCurso === opt} onClick={() => onChange("participouCurso", opt)} />
          ))}
        </div>
      </div>
      {data.participouCurso === "Sim" && (
        <InputField label="Qual curso?" placeholder="Nome do curso ou projeto" value={data.nomeCurso} onChange={(v) => onChange("nomeCurso", v)} />
      )}
      <div>
        <p className="text-sm font-semibold text-foreground mb-3">Quais áreas mais te chamam atenção?</p>
        <div className="grid grid-cols-2 gap-3">
          {AREAS_TECH.map((area) => (
            <CheckboxRow key={area} label={area} checked={data.areas.includes(area)} onChange={() => toggleArea(area)} />
          ))}
        </div>
      </div>
      {data.areas.includes("Outro") && (
        <InputField label="Especifique a outra área" placeholder="Ex: Hardware, Redes..." value={data.outraArea} onChange={(v) => onChange("outraArea", v)} />
      )}
    </div>
  );
}

function Step8({ data, onChange }) {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <p className="text-sm font-semibold text-foreground mb-3">Quantas horas por semana você pode se dedicar?</p>
        <div className="flex flex-wrap gap-2.5">
          {HORAS_SEMANA.map((h) => (
            <PillButton key={h} label={h} selected={data.horasDisponiveis === h} onClick={() => onChange("horasDisponiveis", h)} />
          ))}
        </div>
      </div>
      <div>
        <p className="text-sm font-semibold text-foreground mb-3">Você possui disponibilidade para encontros síncronos?</p>
        <div className="flex flex-wrap gap-2.5">
          {["Sim", "Não", "Parcialmente"].map((opt) => (
            <PillButton key={opt} label={opt} selected={data.disponibilidadeSincrona === opt} onClick={() => onChange("disponibilidadeSincrona", opt)} />
          ))}
        </div>
      </div>
    </div>
  );
}

function Step9({ data, onChange }) {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-semibold text-foreground">Por que você quer participar do projeto?</label>
        <textarea
          rows={4}
          placeholder="Conte um pouco sobre sua motivação..."
          value={data.motivacao || ""}
          onChange={(e) => onChange("motivacao", e.target.value)}
          className="rounded-2xl border border-border bg-white p-4 text-sm text-foreground placeholder:text-[#C4BDD8] outline-none transition-all duration-200 focus:border-[#8B3DFF] focus:ring-2 focus:ring-[#8B3DFF]/20 resize-none"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-sm font-semibold text-foreground">O que você espera aprender ou alcançar?</label>
        <textarea
          rows={4}
          placeholder="Suas expectativas..."
          value={data.expectativas || ""}
          onChange={(e) => onChange("expectativas", e.target.value)}
          className="rounded-2xl border border-border bg-white p-4 text-sm text-foreground placeholder:text-[#C4BDD8] outline-none transition-all duration-200 focus:border-[#8B3DFF] focus:ring-2 focus:ring-[#8B3DFF]/20 resize-none"
        />
      </div>
    </div>
  );
}

function Step10({ data, onChange }) {
  return (
    <div className="flex flex-col gap-4">
      <div
        className="flex items-start gap-3 p-4 rounded-2xl border transition-all duration-200 cursor-pointer"
        style={data.termoVeracidade ? { borderColor: "#8B3DFF", background: "#FAF7FF" } : { borderColor: "#E5E7EB", background: "#fff" }}
        onClick={() => onChange("termoVeracidade", !data.termoVeracidade)}
      >
        <div className="mt-0.5">
          <GradientCheckbox checked={data.termoVeracidade} onChange={() => {}} />
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">Declaro que todas as informações fornecidas são verdadeiras.</p>
          <p className="text-xs text-muted-foreground mt-0.5">Obrigatório para participação no programa.</p>
        </div>
      </div>

      <div
        className="flex items-start gap-3 p-4 rounded-2xl border transition-all duration-200 cursor-pointer"
        style={data.termoLGPD ? { borderColor: "#8B3DFF", background: "#FAF7FF" } : { borderColor: "#E5E7EB", background: "#fff" }}
        onClick={() => onChange("termoLGPD", !data.termoLGPD)}
      >
        <div className="mt-0.5">
          <GradientCheckbox checked={data.termoLGPD} onChange={() => {}} />
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">Autorizo o uso dos meus dados conforme a Lei Geral de Proteção de Dados (LGPD).</p>
          <p className="text-xs text-muted-foreground mt-0.5">Seus dados serão usados exclusivamente para fins do programa.</p>
        </div>
      </div>

      <div
        className="flex items-start gap-3 p-4 rounded-2xl border transition-all duration-200 cursor-pointer"
        style={data.termoNoticias ? { borderColor: "#8B3DFF", background: "#FAF7FF" } : { borderColor: "#E5E7EB", background: "#fff" }}
        onClick={() => onChange("termoNoticias", !data.termoNoticias)}
      >
        <div className="mt-0.5">
          <GradientCheckbox checked={data.termoNoticias} onChange={() => {}} />
        </div>
        <div>
          <p className="text-sm font-semibold text-foreground">Desejo receber novidades sobre futuros cursos e projetos.</p>
          <p className="text-xs text-muted-foreground mt-0.5">Opcional — você pode cancelar a qualquer momento.</p>
        </div>
      </div>

      {(!data.termoVeracidade || !data.termoLGPD) && (
        <p className="text-xs text-[#FF4D8D] flex items-center gap-1.5 px-1 mt-2">
          <Shield size={12} />
          Os dois primeiros termos são obrigatórios para enviar a inscrição.
        </p>
      )}
    </div>
  );
}

function SuccessScreen({ onReset }) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }} 
      animate={{ opacity: 1, scale: 1 }} 
      className="flex flex-col items-center justify-center text-center py-4 gap-5"
    >
      <div className="w-20 h-20 rounded-full flex items-center justify-center shadow-lg shadow-[#8B3DFF]/20" style={gradientStyle}>
        <Check size={36} className="text-white" strokeWidth={2.5} />
      </div>
      
      <div>
        <h3 className="text-2xl font-bold text-[#1E1B24] mb-2">Inscrição enviada!</h3>
        <p className="text-slate-500 text-sm max-w-xs mx-auto leading-relaxed">
          Obrigada por se inscrever no MinaTech. Em breve entraremos em contato com as próximas etapas.
        </p>
      </div>
      
      <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-white text-sm font-medium shadow-md" style={gradientStyle}>
        <Heart size={15} fill="white" />
        Boa sorte na sua jornada!
      </div>

      <button
        type="button"
        onClick={onReset}
        className="mt-4 text-sm font-semibold text-[#8B3DFF] hover:text-[#7A2EE5] transition-all bg-[#FAF7FF] hover:bg-[#F3EDFF] px-6 py-2.5 rounded-xl border border-[#EDE9F8] w-full sm:w-auto"
      >
        ← Voltar ao Início
      </button>
    </motion.div>
  );
}

// ─── COMPONENTE PRINCIPAL (CONTAINER DO FORMULÁRIO) ──────────────────────────
export default function MinaTechForm() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleFieldChange = (key, value) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  const nextStep = () => {
    if (currentStep < STEPS.length) setCurrentStep((prev) => prev + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep((prev) => prev - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.termoVeracidade && formData.termoLGPD) {
      console.log("Dados enviados:", formData);
      setIsSubmitted(true);
    }
  };

  const renderActiveStep = () => {
    switch (currentStep) {
      case 1:  return <Step1 data={formData} onChange={handleFieldChange} />;
      case 2:  return <Step2 data={formData} onChange={handleFieldChange} />;
      case 3:  return <Step3 data={formData} onChange={handleFieldChange} />;
      case 4:  return <Step4 data={formData} onChange={handleFieldChange} />;
      case 5:  return <Step5 data={formData} onChange={handleFieldChange} />;
      case 6:  return <Step6 data={formData} onChange={handleFieldChange} />;
      case 7:  return <Step7 data={formData} onChange={handleFieldChange} />;
      case 8:  return <Step8 data={formData} onChange={handleFieldChange} />;
      case 9:  return <Step9 data={formData} onChange={handleFieldChange} />;
      case 10: return <Step10 data={formData} onChange={handleFieldChange} />;
      default: return null;
    }
  };

  const isSubmitDisabled = currentStep === 10 && (!formData.termoVeracidade || !formData.termoLGPD);

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-[#FDFBFF] text-[#1E1B24]">
      <Sidebar current={isSubmitted ? STEPS.length : currentStep} />
      
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-8 md:px-6 md:py-12 bg-[#F6F2FF]/40">
        {isSubmitted ? (
          <div className="w-full max-w-xl bg-white rounded-3xl p-6 md:p-10 shadow-xl shadow-[#8B3DFF]/5 border border-slate-100">
            <SuccessScreen 
              onReset={() => {
                setIsSubmitted(false);
                setCurrentStep(1);
                setFormData(INITIAL_STATE);
              }} 
            />
          </div>
        ) : (
          <div className="w-full max-w-2xl flex flex-col gap-6 md:gap-8">
            <div className="text-center max-w-xl mx-auto px-2">
              <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight text-slate-900 leading-tight">
                Inscreva-se para transformar{" "}
                <span style={gradientText}>seu futuro através da tecnologia</span>
              </h2>
              <p className="text-xs md:text-sm text-slate-500 mt-2 md:mt-3">
                Preencha o questionário abaixo para concorrer a uma vaga no programa MinaTech de formação em tecnologia.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="w-full bg-white rounded-3xl p-6 md:p-10 shadow-xl shadow-[#8B3DFF]/5 border border-slate-50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold" style={gradientStyle}>
                  {currentStep}
                </div>
                <div>
                  <span className="text-[10px] font-bold text-[#8B3DFF] uppercase tracking-wider block">
                    Etapa {currentStep} de {STEPS.length}
                  </span>
                  <h3 className="text-lg md:text-xl font-bold text-slate-900 leading-tight">
                    {STEPS[currentStep - 1].label}
                  </h3>
                </div>
              </div>

              <div className="min-h-[220px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {renderActiveStep()}
                  </motion.div>
                </AnimatePresence>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col gap-3">
                {currentStep < STEPS.length ? (
                  <button
                    type="button"
                    onClick={nextStep}
                    className="w-full h-14 text-base font-semibold text-white rounded-2xl flex items-center justify-center gap-2 shadow-lg shadow-[#D946EF]/20 transition-all active:scale-[0.99] hover:opacity-95"
                    style={gradientStyle}
                  >
                    Continuar <ChevronRight size={18} />
                  </button>
                ) : (
                  <button
                    type="submit"
                    disabled={isSubmitDisabled}
                    className="w-full h-14 text-base font-bold text-white rounded-2xl flex items-center justify-center shadow-lg transition-all active:scale-[0.99] disabled:opacity-40 disabled:cursor-not-allowed disabled:shadow-none"
                    style={isSubmitDisabled ? { background: "#E5DFF5" } : gradientStyle}
                  >
                    Enviar Inscrição
                  </button>
                )}

                {currentStep > 1 && (
                  <button
                    type="button"
                    onClick={prevStep}
                    className="w-full py-3 text-sm md:text-xs font-semibold rounded-xl text-slate-400 hover:text-slate-600 hover:bg-slate-50 transition-all text-center block"
                  >
                    Voltar para a etapa anterior
                  </button>
                )}
              </div>
            </form>

            <div className="flex justify-center gap-1.5 mt-2">
              {STEPS.map((step) => (
                <div
                  key={step.id}
                  className="h-1.5 rounded-full transition-all duration-300"
                  style={{
                    width: currentStep === step.id ? "24px" : "6px",
                    background: currentStep === step.id 
                      ? "linear-gradient(90deg,#8B3DFF,#D946EF)" 
                      : currentStep > step.id ? "#8B3DFF" : "#E5DFF5"
                  }}
                />
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}