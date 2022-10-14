import { BASE_API } from "../utils/constants";

export async function getPreparacionesApi(token) {
  try {
    const url = `${BASE_API}/api/preparaciones/`;
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

export async function addPreparacionApi(data, token) {
  try {
    const url = `${BASE_API}/api/preparaciones/`;
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

export async function updatePreparacionApi(id, data, token) {
  try {
    const url = `${BASE_API}/api/preparaciones/${id}/`;
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

export async function deletePreparacionApi(id, token) {
  try {
    const url = `${BASE_API}/api/preparaciones/${id}/`;
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

export async function getPreparacionApi(id) {
  try {
    const url = `${BASE_API}/api/preparaciones/${id}/`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}
