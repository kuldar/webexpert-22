import { useState } from "react";
import clsx from "clsx";

import { Input, Checkbox, Button } from "@/components/Inputs";
import { Results, Error } from "@/components/Results";

// Constants
const compensationPercentage = 0.7;
const unpaidSickDays = 3;
const maxEmployerSickDays = 5;
const maxSickDays = 182;
const maxTubercolosisSickDays = 240;

const maxInsuranceSickDays = maxSickDays - maxEmployerSickDays - unpaidSickDays;
const maxInsuranceTubercolosisSickDays =
  maxTubercolosisSickDays - maxEmployerSickDays - unpaidSickDays;

// Calculate compensation
function calculateCompensation(income, sickDays, hasTubercolosis) {
  let dailyIncome = (income * 12) / 365;
  let dailyCompensation = dailyIncome * compensationPercentage;
  let employerSickDays = 0;
  let insuranceSickDays = 0;

  if (sickDays > unpaidSickDays) {
    // Employer paid sick days
    employerSickDays = Math.min(sickDays - unpaidSickDays, maxEmployerSickDays);

    // Insurance paid sick days
    insuranceSickDays = Math.max(
      Math.min(
        sickDays - unpaidSickDays - maxEmployerSickDays,
        hasTubercolosis
          ? maxInsuranceTubercolosisSickDays
          : maxInsuranceSickDays
      ),
      0
    );
  }

  let employerCompensation = employerSickDays * dailyCompensation;
  let employerDailyCompensation = employerSickDays > 0 ? dailyCompensation : 0;

  let insuranceCompensation = insuranceSickDays * dailyCompensation;
  let insuranceDailyCompensation =
    insuranceSickDays > 0 ? dailyCompensation : 0;

  let totalSickDays = Math.min(
    sickDays,
    hasTubercolosis ? maxTubercolosisSickDays : maxSickDays
  );
  let totalCompensation = employerCompensation + insuranceCompensation;

  return {
    employerSickDays,
    employerCompensation,
    employerDailyCompensation,
    insuranceSickDays,
    insuranceCompensation,
    insuranceDailyCompensation,
    totalSickDays,
    totalCompensation,
  };
}

// Calculator
export default function Calculator() {
  const [income, setIncome] = useState(0);
  const [sickDays, setSickDays] = useState(0);
  const [hasTubercolosis, setHasTubercolosis] = useState(false);

  const [error, setError] = useState(null);
  const [results, setResults] = useState(null);

  // Handle button
  function handleButton() {
    // Input validation
    if (isNaN(parseFloat(income)) || parseFloat(income) < 0) {
      return setError("Please enter a valid income.");
    }

    if (isNaN(parseInt(sickDays)) || parseInt(sickDays) < 1) {
      return setError("Please enter a valid number of days on sick-leave.");
    }

    let calculatedResults = calculateCompensation(
      income,
      sickDays,
      hasTubercolosis
    );

    setError(null);
    setResults(calculatedResults);
  }

  // Top corner cuts
  const calculatorBeforeStyles = [
    "before:content-['']",
    "before:absolute",
    "before:left-0",
    "before:right-0",
    "before:border-x-[1.25rem]",
    "before:border-solid",
    "before:border-x-transparent",
    "before:bottom-full",
    "before:border-b-[1.25rem]",
    "before:border-b-white",
  ];

  // Bottom corner cuts
  const calculatorAfterStyles = [
    "after:content-['']",
    "after:absolute",
    "after:left-0",
    "after:right-0",
    "after:border-x-[1.25rem]",
    "after:border-solid",
    "after:border-transparent",
    "after:top-full",
    "after:border-t-[1.25rem]",
    "after:border-t-white",
  ];

  return (
    <div
      className={clsx(
        `relative mx-auto w-full max-w-xs py-[3.75rem] flex-shrink-0 text-metal-700 bg-white md:mx-0`,
        calculatorBeforeStyles,
        calculatorAfterStyles
      )}
    >
      <h4 className="px-5 text-2xl font-bold leading-[1.05em] tracking-[-0.02em]">
        Compensation Calculator
      </h4>

      <div className="flex flex-col p-5 gap-y-5">
        <Input
          handleChange={setIncome}
          id="monthly-income"
          label="Average income"
          suffix="€"
        />
        <Input
          handleChange={setSickDays}
          id="sick-days"
          label="Days on sick-leave"
          suffix="days"
        />
        <Checkbox
          handleChange={setHasTubercolosis}
          id="tubercolosis"
          label="I have tubercolosis"
        />
        <Button handleClick={handleButton} label="Calculate" />
      </div>

      {!error && results && <Results {...results} />}
      {error && <Error message={error} />}
    </div>
  );
}
