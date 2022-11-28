import { BASE_API } from "../utils/constants";

export async function addReservaApi(data, token) {
  try {
    const url = `${BASE_API}/api/reservas/`;

    const params = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,

        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    const response = await fetch(url, params);
    const result = await response.json();
    console.log(data);
    console.log(result);

    return result;
  } catch (error) {
    throw error;
  }
}
export async function getReservasApi(fecha = "", ordering = "") {
  try {
    const mesaFilter = `active=true`;
    const estadoFilter = `fecha=${fecha}`;

    const url = `${BASE_API}/api/reservas/?${mesaFilter}&${estadoFilter}&${ordering}`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

export async function updateStatusReservaApi(idReserva) {
  try {
    const url = `${BASE_API}/api/reservas/${idReserva}/`;
    const params = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        active: false,
      }),
    };
    await fetch(url, params);
  } catch (error) {
    throw error;
  }
}
