export function calculateNetSalary({
  baseSalary,
  irsBracket,
  customIrsRate,
  numTitulares,
  numDependents,
  subsidioAlimentacao,
  segurancaSocialPct,
  otherDiscounts,
}) {
  const segurancaSocial = (segurancaSocialPct / 100) * baseSalary;

  let irsRate = 0;
  if (irsBracket === "custom") {
    irsRate = customIrsRate;
  } else {
    if (baseSalary <= 800) irsRate = 10;
    else if (baseSalary <= 1400) irsRate = 20;
    else if (baseSalary <= 2500) irsRate = 28;
    else irsRate = 35;

    irsRate -= numDependents * 0.5;
    if (numTitulares > 1) irsRate -= 1;
    if (irsRate < 0) irsRate = 0;
  }

  const irsValue = (irsRate / 100) * baseSalary;
  const totalDiscounts = segurancaSocial + irsValue + otherDiscounts;
  const netSalary = baseSalary - totalDiscounts + subsidioAlimentacao;

  return {
    baseSalary,
    subsidioAlimentacao,
    segurancaSocialPct,
    segurançaSocial: segurancaSocial,
    irsRate,
    irsValue,
    otherDiscounts,
    totalDiscounts,
    netSalary,
  };
}
