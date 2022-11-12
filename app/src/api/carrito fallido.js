import { BASE_API } from "../utils/constants";

const PREPARATIONS_CART = "prepsCart";

export async function getCarritoApi(idMesa) {
  try {
    const tableFilter = `mesa=${idMesa}`;

    const url = `${BASE_API}/api/pagos/?${tableFilter}`;
    const params = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const response = await fetch(url, params);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

export async function agregarACarrito(idProd, idMesa, token) {
  try {
    const url = `${BASE_API}/api/carrito/`;
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        idprep: idProd,
        mesa: idMesa,
      }),
    };
    await fetch(url, params);
  } catch (error) {
    throw error;
  }
}

export async function eliminarProductoApi(id, token) {
  try {
    const url = `${BASE_API}/api/carrito/${id}/`;
    const params = {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const response = await fetch(url, params);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}
