import { useState } from "react";
import {
  getProveedoresApi,
  addProveedoresApi,
  updateProveedoresApi,
  deleteProveedoresApi,
} from "../api/proveedores";
import { useAuth } from ".";

export function useProveedores() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [proveedores, setProveedores] = useState(null);
  const { auth } = useAuth();

  

  const getProveedores = async () => {
    try {
      setLoading(true);
      const response = await getProveedoresApi(auth.token);
      setLoading(false);
      setProveedores(response);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  const addProveedores = async (data) => {
    try {
      setLoading(true);
      await addProveedoresApi(data, auth.token);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  const updateProveedores = async (id, data) => {
    try {
      setLoading(true);
      await updateProveedoresApi(id, data, auth.token);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  const deleteProveedores = async (id) => {
    try {
      setLoading(true);
      await deleteProveedoresApi(id, auth.token);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };
  return {
    loading,
    error,
    proveedores,
    getProveedores,
    addProveedores,
    updateProveedores,
    deleteProveedores,
  };
}
