// Input
export function Input({ id, label, suffix, handleChange }) {
  return (
    <div>
      <label
        htmlFor={id}
        className="font-medium inline-block mb-[0.375rem] text-sm leading-[1.428em]"
      >
        {label}
      </label>
      <div className="relative">
        <span className="pointer-events-none absolute top-1/2 right-[0.625rem] leading-none font-bold text-lg -translate-y-1/2">
          {suffix}
        </span>
        <input
          className="placeholder:text-metal-400 shadow w-full text-lg leading-[1.667em] text-metal-700 font-medium p-[0.625rem] rounded border-transparent border-solid border-2 outline-none"
          id={id}
          pattern="[0-9]*"
          inputMode="numeric"
          min="0"
          placeholder="0"
          type="number"
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
    </div>
  );
}

// Checkbox
export function Checkbox({ id, label, handleChange }) {
  return (
    <div className="flex">
      <input
        className="relative w-5 h-5 m-0 bg-white border-2 border-transparent border-solid rounded shadow outline-none appearance-none text-metal-700"
        id={id}
        type="checkbox"
        onChange={(e) => handleChange(e.target.value)}
      />
      <label
        className="inline-block ml-[0.625rem] text-sm leading-[1.428em] font-medium"
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
}

// Button
export function Button({ label, handleClick }) {
  return (
    <button
      className="[text-shadow:2px_2px_0px_rgba(0,0,0,0.4)] self-start px-10 py-5 text-lg leading-[1.11em] font-bold text-white rounded-full bg-gradient-to-r from-red-600 to-red-500 outline-none focus:shadow-button hover:shadow-button active:shadow-button-active"
      onClick={handleClick}
    >
      {label}
    </button>
  );
}
