import { BASE_API, MESA_STATUS } from "../utils/constants";

export async function getMesasApi(token) {
  try {
    const url = `${BASE_API}/api/mesas/`;
    const params = {
      headers: {
        Authorization: `${token}`,
      },
    };
    const response = await fetch(url, params);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

export async function addMesaApi(data, token) {
  try {
    const url = `${BASE_API}/api/mesas/`;
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
    return result;
  } catch (error) {
    throw error;
  }
}

export async function updateMesaApi(id, data, token) {
  try {
    const url = `${BASE_API}/api/mesas/${id}/`;
    const params = {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    const response = await fetch(url, params);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

export async function deleteMesaApi(id, token) {
  try {
    const url = `${BASE_API}/api/mesas/${id}/`;
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

export async function getMesaApi(id) {
  try {
    const url = `${BASE_API}/api/mesas/${id}/`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

export async function getMesaByNumeroApi(numeroMesa) {
  try {
    const tableFilter = `numero_mesa=${numeroMesa}`;

    const url = `${BASE_API}/api/mesas/?${tableFilter}`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

export async function setMesaDisponibleApi(id, token) {
  try {
    const url = `${BASE_API}/api/mesas/${id}/`;
    const params = {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ estado: MESA_STATUS.DISPONIBLE }),
    };

    const response = await fetch(url, params);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}
