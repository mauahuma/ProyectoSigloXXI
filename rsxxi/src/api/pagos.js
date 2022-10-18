import { BASE_API, PAYMENT_STATUS } from "../utils/constants";

export async function crearPagosApi(pagoData) {
  try {
    const url = `${BASE_API}/api/pagos/`;
    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(pagoData),
    };

    const response = await fetch(url, params);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

export async function getPagosPorMesaApi(idMesa) {
  try {
    const tableFilter = `mesa=${idMesa}`;
    const statusFilter = `estadoPago=${PAYMENT_STATUS.PENDIENTE}`;

    const url = `${BASE_API}/api/pagos/?${tableFilter}&${statusFilter}`;
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

export async function cerrarPagosApi(idPago) {
  try {
    const url = `${BASE_API}/api/pagos/${idPago}/`;
    const params = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        statusPayment: PAYMENT_STATUS.PAGADO,
      }),
    };
    await fetch(url, params);
  } catch (error) {
    throw error;
  }
}

export async function getPagosApi() {
  try {
    const paymentFilter = `estadoPago=${PAYMENT_STATUS.PAGADO}`;
    const orderingFilter = "ordering=created_at";

    const url = `${BASE_API}/api/pagos/?${paymentFilter}&${orderingFilter}`;

    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}
