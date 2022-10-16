const PREPARATIONS_CART = "prepsCart";

export function getPrepraracionesCart() {
  const response = localStorage.getItem(PREPARATIONS_CART);
  return JSON.parse(response || "[]");
}

export function addProductCart(id) {
  const preparations = getPrepraracionesCart();
  preparations.push(id);
  localStorage.setItem(PREPARATIONS_CART, JSON.stringify(preparations));
}

export function removeProductCartApi(index) {
  const idPreparations = getPrepraracionesCart();
  idPreparations.splice(index, 1);
  localStorage.setItem(PREPARATIONS_CART, JSON.stringify(idPreparations));
}

export function cleanProductCartApi() {
  localStorage.removeItem(PREPARATIONS_CART);
}
