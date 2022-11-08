window.onload = function () {
  // Constants
  const compensationPercentage = 0.7;
  const unpaidSickDays = 3;
  const maxEmployerSickDays = 5;
  const maxSickDays = 182;
  const maxTubercolosisSickDays = 240;
  const maxInsuranceSickDays =
    maxSickDays - maxEmployerSickDays - unpaidSickDays;
  const maxInsuranceTubercolosisSickDays =
    maxTubercolosisSickDays - maxEmployerSickDays - unpaidSickDays;

  // Input elements
  let incomeInput = document.getElementById("monthly-income");
  let sickDaysInput = document.getElementById("sick-days");
  let tubercolosisInput = document.getElementById("tubercolosis");
  let button = document.getElementById("calculate-button");

  // Output elements
  let resultsEl = document.getElementById("results");
  let employerSickDaysEl = document.getElementById("employer-days");
  let employerCompensationEl = document.getElementById("employer-compensation");
  let employerDailyCompensationEl = document.getElementById(
    "employer-daily-compensation"
  );
  let insuranceSickDaysEl = document.getElementById("insurance-days");
  let insuranceCompensationEl = document.getElementById(
    "insurance-compensation"
  );
  let insuranceDailyCompensationEl = document.getElementById(
    "insurance-daily-compensation"
  );
  let totalDaysEl = document.getElementById("total-days");
  let totalCompensationEl = document.getElementById("total-compensation");
  let errorEl = document.getElementById("error");

  /////////////////////
  // Format currency //
  /////////////////////
  function eur(number) {
    return number.toLocaleString("et", { style: "currency", currency: "EUR" });
  }

  /////////////////
  // Print error //
  /////////////////
  function error(message) {
    errorEl.innerHTML = message;
    errorEl.style.display = "block";
    resultsEl.style.display = "none";
  }

  ////////////////////////////
  // Calculate compensation //
  ////////////////////////////
  function calculateCompensation(income, sickDays, hasTubercolosis) {
    let dailyIncome = (income * 12) / 365;
    let dailyCompensation = dailyIncome * compensationPercentage;
    let employerSickDays = 0;
    let insuranceSickDays = 0;

    if (sickDays > unpaidSickDays) {
      // Employer paid sick days
      employerSickDays = Math.min(
        sickDays - unpaidSickDays,
        maxEmployerSickDays
      );

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
    let insuranceCompensation = insuranceSickDays * dailyCompensation;

    return {
      dailyCompensation,
      employerSickDays,
      employerCompensation,
      insuranceSickDays,
      insuranceCompensation,
    };
  }

  /////////////////////////
  // Handle button click //
  /////////////////////////
  button.addEventListener("click", () => {
    // Get values
    let income = incomeInput.value;
    let sickDays = sickDaysInput.value;
    let hasTubercolosis = tubercolosisInput.checked;

    // Input validation
    if (isNaN(parseFloat(income)) || parseFloat(income) < 0) {
      return error("Please enter a valid income.");
    }

    if (isNaN(parseInt(sickDays)) || parseInt(sickDays) < 1) {
      return error("Please enter a valid number of days on sick-leave.");
    }

    // Calculate compensation
    let {
      dailyCompensation,
      employerSickDays,
      employerCompensation,
      insuranceSickDays,
      insuranceCompensation,
    } = calculateCompensation(income, sickDays, hasTubercolosis);

    // Update DOM
    employerSickDaysEl.innerHTML = `${employerSickDays} days`;
    employerCompensationEl.innerHTML = eur(employerCompensation);
    employerDailyCompensationEl.innerHTML = employerSickDays
      ? eur(dailyCompensation)
      : eur(0);

    insuranceSickDaysEl.innerHTML = `${insuranceSickDays} days`;
    insuranceCompensationEl.innerHTML = eur(insuranceCompensation);
    insuranceDailyCompensationEl.innerHTML = insuranceSickDays
      ? eur(dailyCompensation)
      : eur(0);

    totalDaysEl.innerHTML = Math.min(
      sickDays,
      hasTubercolosis ? maxTubercolosisSickDays : maxSickDays
    );

    totalCompensationEl.innerHTML = eur(
      employerCompensation + insuranceCompensation
    );

    errorEl.style.display = "none";
    resultsEl.style.display = "block";
  });
};
