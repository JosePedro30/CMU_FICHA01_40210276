import React, { useState } from "react";
import SalaryForm from "./components/SalaryForm";
import ResultDisplay from "./components/ResultDisplay";
import PdfGenerator from "./components/PdfGenerator";
import "./App.css";

export default function App() {
  const [result, setResult] = useState(null);
  const [student, setStudent] = useState({ number: "", name: "" });

  function handleCalculation(res, studentInfo) {
    setResult(res);
    setStudent(studentInfo);
  }

  return (
    <div className="app-container">
      <h1>Simulador de Vencimento Líquido</h1>
      <p className="subtitle">FT#01 - Computação Móvel e Ubíqua</p>

      <div className="content">
        <div className="form-section">
          <SalaryForm onCalculate={handleCalculation} />
        </div>

        <div className="result-section">
          <ResultDisplay result={result} />
          <PdfGenerator result={result} student={student} />
        </div>
      </div>

      <footer>
        <p>© 2025 ESMAD | Trabalho Individual</p>
      </footer>
    </div>
  );
}
