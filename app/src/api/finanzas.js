import { BASE_API } from "../utils/constants";
export async function getFinanzasApi() {
  try {
    const url = `${BASE_API}/api/finanzas/`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

export async function addFinanzasApi(data, token) {
  try {
    const url = `${BASE_API}/api/finanzas/`;
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
