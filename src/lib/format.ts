export function formatPrice(cents: number, currency = "CHF") {
  return new Intl.NumberFormat("de-CH", {
    style: "currency",
    currency,
  }).format(cents / 100);
}