import { BASE_API } from "../utils/constants";

export async function getProveedoresApi(token) {
    try {
      const url = `${BASE_API}/api/proveedores/`;
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
  
  export async function addProveedoresApi(data, token) {
    try {
      const url = `${BASE_API}/api/proveedores/`;
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
  
  export async function updateProveedoresApi(id, data, token) {
    try {
      const url = `${BASE_API}/api/proveedores/${id}/`;
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
  
  export async function deleteProveedoresApi(id, token) {
    try {
      const url = `${BASE_API}/api/proveedores/${id}/`;
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
  