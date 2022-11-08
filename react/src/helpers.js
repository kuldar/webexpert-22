// Currency
export function eur(number) {
  return number.toLocaleString("et", { style: "currency", currency: "EUR" });
}
