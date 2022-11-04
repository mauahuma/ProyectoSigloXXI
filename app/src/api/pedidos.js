import { BASE_API, ORDER_STATUS } from "../utils/constants";

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

export async function checkPedidoEntregadoApi(id) {
  try {
    const url = `${BASE_API}/api/pedidos/${id}/`;
    const params = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        estado: ORDER_STATUS.ENTREGADO,
      }),
    };

    const response = await fetch(url, params);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}
export async function checkPedidoPreparadoApi(id) {
  try {
    const url = `${BASE_API}/api/pedidos/${id}/`;
    const params = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        estado: ORDER_STATUS.PREPARADO,
      }),
    };

    const response = await fetch(url, params);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}
export async function checkPedidoPreparandoApi(id) {
  try {
    const url = `${BASE_API}/api/pedidos/${id}/`;
    const params = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        estado: ORDER_STATUS.PREPARANDO,
      }),
    };

    const response = await fetch(url, params);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

export async function addPedidoaMesaapi(idMesa, idPreparacion) {
  try {
    const url = `${BASE_API}/api/pedidos/`;
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        estado: ORDER_STATUS.PENDIENTE,
        Mesa: idMesa,
        preparacion: idPreparacion,
      }),
    };
    await fetch(url, params);
  } catch (error) {
    throw error;
  }
}

export async function addPagoToPedidoApi(idPedido, idPago) {
  try {
    const url = `${BASE_API}/api/pedidos/${idPedido}/`;
    const params = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        pago: idPago,
      }),
    };
    await fetch(url, params);
  } catch (error) {
    throw error;
  }
}

export async function cerrarPedidoApi(idPedido) {
  try {
    const url = `${BASE_API}/api/pedidos/${idPedido}/`;
    const params = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        close: true,
      }),
    };
    await fetch(url, params);
  } catch (error) {
    throw error;
  }
}

export async function getPedidosbyPagoApi(idPago) {
  try {
    const pagoFilter = `pago=${idPago}`;

    const url = `${BASE_API}/api/pedidos/?${pagoFilter}`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}
export async function getPedidosApi(estado = "", ordering = "") {
  try {
    const estadoFilter = `estado=${estado}`;
    const closeFilter = "close=False";

    const url = `${BASE_API}/api/pedidos/?${estadoFilter}&${closeFilter}&${ordering}`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}
