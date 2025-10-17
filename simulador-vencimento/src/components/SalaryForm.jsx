import React, { useState } from "react";
import { calculateNetSalary } from "../utils/calculations";

export default function SalaryForm({ onCalculate }) {
  const [form, setForm] = useState({
    studentNumber: "",
    studentName: "",
    baseSalary: 1200,
    irsBracket: "auto",
    customIrsRate: 0,
    numTitulares: 1,
    numDependents: 0,
    subsidioAlimentacao: 0,
    segurancaSocialPct: 11,
    otherDiscounts: 0,
  });

  function update(field, value) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const studentInfo = { number: form.studentNumber, name: form.studentName };
    const result = calculateNetSalary({
      baseSalary: Number(form.baseSalary),
      irsBracket: form.irsBracket,
      customIrsRate: Number(form.customIrsRate),
      numTitulares: Number(form.numTitulares),
      numDependents: Number(form.numDependents),
      subsidioAlimentacao: Number(form.subsidioAlimentacao),
      segurancaSocialPct: Number(form.segurancaSocialPct),
      otherDiscounts: Number(form.otherDiscounts),
    });
    onCalculate(result, studentInfo);
  }

  return (
    <form className="salary-form" onSubmit={handleSubmit}>
      <h2>Dados do Aluno</h2>
      <label>Número:</label>
      <input
        required
        value={form.studentNumber}
        onChange={(e) => update("studentNumber", e.target.value)}
      />

      <label>Nome:</label>
      <input
        required
        value={form.studentName}
        onChange={(e) => update("studentName", e.target.value)}
      />

      <h2>Dados Salariais</h2>
      <label>Vencimento Base (€):</label>
      <input
        type="number"
        value={form.baseSalary}
        onChange={(e) => update("baseSalary", e.target.value)}
      />

      <label>Subsídio de Alimentação (€):</label>
      <input
        type="number"
        value={form.subsidioAlimentacao}
        onChange={(e) => update("subsidioAlimentacao", e.target.value)}
      />

      <label>Segurança Social (%):</label>
      <input
        type="number"
        value={form.segurancaSocialPct}
        onChange={(e) => update("segurancaSocialPct", e.target.value)}
      />

      <label>Outros Descontos (€):</label>
      <input
        type="number"
        value={form.otherDiscounts}
        onChange={(e) => update("otherDiscounts", e.target.value)}
      />

      <label>Nº de Titulares:</label>
      <input
        type="number"
        value={form.numTitulares}
        onChange={(e) => update("numTitulares", e.target.value)}
      />

      <label>Nº de Dependentes:</label>
      <input
        type="number"
        value={form.numDependents}
        onChange={(e) => update("numDependents", e.target.value)}
      />

      <label>IRS:</label>
      <select
        value={form.irsBracket}
        onChange={(e) => update("irsBracket", e.target.value)}
      >
        <option value="auto">Escalão automático</option>
        <option value="custom">Taxa personalizada</option>
      </select>

      {form.irsBracket === "custom" && (
        <>
          <label>Taxa IRS (%):</label>
          <input
            type="number"
            value={form.customIrsRate}
            onChange={(e) => update("customIrsRate", e.target.value)}
          />
        </>
      )}

      <button type="submit">Calcular</button>
    </form>
  );
}
