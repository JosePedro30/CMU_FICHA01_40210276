import React from "react";

export default function ResultDisplay({ result }) {
  if (!result)
    return <p>Preencha o formulário e clique em "Calcular" para ver o resultado.</p>;

  return (
    <div className="result-box">
      <h2>Resumo</h2>
      <table>
        <tbody>
          <tr><td>Vencimento Bruto:</td><td>€ {result.baseSalary.toFixed(2)}</td></tr>
          <tr><td>Subsídio Alimentação:</td><td>€ {result.subsidioAlimentacao.toFixed(2)}</td></tr>
          <tr><td>Segurança Social ({result.segurancaSocialPct}%):</td><td>€ {result.segurançaSocial.toFixed(2)}</td></tr>
          <tr><td>IRS ({result.irsRate}%):</td><td>€ {result.irsValue.toFixed(2)}</td></tr>
          <tr><td>Outros Descontos:</td><td>€ {result.otherDiscounts.toFixed(2)}</td></tr>
          <tr><td><strong>Total Descontos:</strong></td><td><strong>€ {result.totalDiscounts.toFixed(2)}</strong></td></tr>
          <tr><td><strong>Vencimento Líquido:</strong></td><td><strong>€ {result.netSalary.toFixed(2)}</strong></td></tr>
        </tbody>
      </table>
    </div>
  );
}
