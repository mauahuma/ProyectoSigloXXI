import { toast } from "react-toastify";
const INGREDIENTS_PREPS = "ingredientsPreps";

export function getIngrPrep() {
  const response = localStorage.getItem(INGREDIENTS_PREPS);
  return JSON.parse(response || "[]");
}
export function addingrPrep(id) {
  const ingredients = getIngrPrep();
  if (ingredients.indexOf(id) > -1) {
    toast.error("producto ya agregado");
  } else {
    ingredients.push(id);
    localStorage.setItem(INGREDIENTS_PREPS, JSON.stringify(ingredients));
    toast.done("producto agregado");
  }
}

export function remnoveIngrPrep(index) {
  const idIngredients = getIngrPrep();
  idIngredients.splice(index, 1);
  localStorage.setItem(INGREDIENTS_PREPS, JSON.stringify(idIngredients));
}
export function cleanIngrPrep() {
  localStorage.removeItem(INGREDIENTS_PREPS);
}
