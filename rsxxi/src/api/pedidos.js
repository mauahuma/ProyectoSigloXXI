import { BASE_API } from "../utils/constants";

export async function getPedidoPorMesaApi(idMesa, estado = "", ordering = "") {
  try {
    const mesaFilter = `Mesa=${idMesa}`;
    const estadoFilter = `estado=${estado}`;
    const closeFilter = "close=False";

    const url = `${BASE_API}/api/pedidos/?${mesaFilter}&${estadoFilter}&${closeFilter}&${ordering}`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}
