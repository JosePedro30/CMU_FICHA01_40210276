import React from "react";
import { jsPDF } from "jspdf";

export default function PdfGenerator({ result, student }) {
  function generatePDF() {
    if (!result) {
      alert("Calcula primeiro o vencimento antes de gerar o PDF.");
      return;
    }

    const doc = new jsPDF();
    doc.setFontSize(12);
    doc.text(`Número: ${student.number}`, 10, 10);
    doc.text(`Nome: ${student.name}`, 10, 20);
    doc.text("Simulação de Vencimento Líquido", 10, 35);

    const lines = [
      `Vencimento Bruto: € ${result.baseSalary.toFixed(2)}`,
      `Subsídio Alimentação: € ${result.subsidioAlimentacao.toFixed(2)}`,
      `Segurança Social (${result.segurancaSocialPct}%): € ${result.segurançaSocial.toFixed(2)}`,
      `IRS (${result.irsRate}%): € ${result.irsValue.toFixed(2)}`,
      `Outros Descontos: € ${result.otherDiscounts.toFixed(2)}`,
      `Total Descontos: € ${result.totalDiscounts.toFixed(2)}`,
      `Vencimento Líquido: € ${result.netSalary.toFixed(2)}`,
    ];

    let y = 50;
    lines.forEach((line) => {
      doc.text(line, 10, y);
      y += 10;
    });

    const fileName = `Simulacao_${student.number}.pdf`;
    doc.save(fileName);
  }

  return <button onClick={generatePDF}>Gerar PDF</button>;
}
