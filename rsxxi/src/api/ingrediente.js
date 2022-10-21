import { BASE_API } from "../utils/constants";

export async function getIngredientesApi(token) {
  try {
    const url = `${BASE_API}/api/ingredientespreparacion/`;
    const params = {
      headers: {
        Authorization: `${token}`,
      },
    };
    const response = await fetch(url, params);
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    throw error;
  }
}

export async function addIngredientesApi(data, token) {
  try {
    const url = `${BASE_API}/api/ingredientespreparacion/`;
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

export async function updateIngredienteApi(id, data, token) {
  try {
    const url = `${BASE_API}/api/ingredientespreparacion/${id}/`;
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

export async function deleteIngredienteApi(id, token) {
  try {
    const url = `${BASE_API}/api/ingredientespreparacion/${id}/`;
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

export async function getIngredienteApi(id) {
  try {
    const url = `${BASE_API}/api/ingredientespreparacion/${id}/`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

export async function getIngredientesByPreparacionApi(preparacion) {
  try {
    const tableFilter = `Preparacion=${preparacion}`;

    const url = `${BASE_API}/api/ingredientespreparacion/?${tableFilter}`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}
