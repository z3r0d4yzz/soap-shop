export type CartItem = {
  id: string;
  qty: number;
};

const CART_KEY = "soap-shop-cart";

export function getCart(): CartItem[] {
  if (typeof localStorage === "undefined") return [];
  const raw = localStorage.getItem(CART_KEY);
  return raw ? JSON.parse(raw) : [];
}

export function saveCart(cart: CartItem[]) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

export function addToCart(id: string, qty = 1) {
  const cart = getCart();
  const existing = cart.find((item) => item.id === id);

  if (existing) {
    existing.qty += qty;
  } else {
    cart.push({ id, qty });
  }

  saveCart(cart);
}

export function updateQty(id: string, qty: number) {
  const cart = getCart()
    .map((item) => (item.id === id ? { ...item, qty } : item))
    .filter((item) => item.qty > 0);

  saveCart(cart);
}

export function removeFromCart(id: string) {
  saveCart(getCart().filter((item) => item.id !== id));
}

export function clearCart() {
  localStorage.removeItem(CART_KEY);
}