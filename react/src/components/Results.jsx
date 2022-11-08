import { eur } from "@/helpers";

// Results
export function Results({
  employerSickDays,
  employerCompensation,
  employerDailyCompensation,
  insuranceSickDays,
  insuranceCompensation,
  insuranceDailyCompensation,
  totalSickDays,
  totalCompensation,
}) {
  return (
    <div>
      <div className="flex flex-col p-5 text-center border-t gap-y-5 gap-x-0 border-metal-100 xs:flex-row">
        <div className="w-full gap-y-0 gap-x-5 xs:w-1/2">
          <div className="text-sm leading-[1.075em]">
            <div>The employer compensates</div>
            <strong className="font-bold">{employerSickDays} days</strong>
          </div>

          <div className="text-lg leading-[1.11em] mt-[0.625rem] font-bold">
            {eur(employerCompensation)}
          </div>

          <div className="text-xs font-medium leading-tight text-metal-400">
            Daily allowance
            <div>{eur(employerDailyCompensation)}</div>
          </div>
        </div>

        <div className="w-full gap-y-0 gap-x-5 xs:w-1/2">
          <div className="text-sm leading-[1.075em]">
            <div>Health insurance compensates</div>
            <strong className="font-bold">{insuranceSickDays} days</strong>
          </div>

          <div className="text-lg leading-[1.11em] mt-[0.625rem] font-bold">
            {eur(insuranceCompensation)}
          </div>

          <div className="text-xs font-medium leading-tight text-metal-400">
            Daily allowance
            <div>{eur(insuranceDailyCompensation)}</div>
          </div>
        </div>
      </div>

      <div className="p-5 pb-0 text-center border-t border-metal-100">
        <div className="text-sm leading-[1.075em] mb-[0.3125rem] font-medium">
          Compensation total for <span>{totalSickDays}</span> days (net)
        </div>
        <div className="text-2xl font-bold leading-tight">
          {eur(totalCompensation)}
        </div>
      </div>
    </div>
  );
}

export function Error({ message }) {
  return (
    <div className="text-sm px-5 leading-[1.075em] font-medium">{message}</div>
  );
}
