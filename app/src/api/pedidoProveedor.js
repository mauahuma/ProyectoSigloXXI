import { BASE_API } from "../utils/constants";

export async function getPedidosPorProveedorApi(proveedor) {
  try {
    const proveedorFilter = `idProveedor=${proveedor}`;

    const url = `${BASE_API}/api/pedidosProveedor/?${proveedorFilter}`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

export async function addPedidoProveedorApi(data) {
  try {
    const url = `${BASE_API}/api/pedidosProveedor/`;

    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    await fetch(url, params);
  } catch (error) {
    throw error;
  }
}
