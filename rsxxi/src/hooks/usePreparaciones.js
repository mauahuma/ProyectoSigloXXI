import { useState } from "react";
import { useAuth } from ".";
import {
  getPreparacionesApi,
  addPreparacionApi,
  updatePreparacionApi,
  deletePreparacionApi,
  getPreparacionApi,
} from "../api/preparacion";

export function usePreparaciones() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [preparaciones, setPreparaciones] = useState(null);
  const [preparacion, setPreparacion] = useState(null);

  const { auth } = useAuth();

  const getPreparaciones = async () => {
    try {
      setLoading(true);
      const response = await getPreparacionesApi(auth.token);
      console.log(response);
      setLoading(false);
      setPreparaciones(response);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  const addPreparacion = async (data) => {
    try {
      setLoading(true);
      await addPreparacionApi(data, auth.token);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  const updatePreparacion = async (id, data) => {
    try {
      setLoading(true);
      await updatePreparacionApi(id, data, auth.token);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  const deletePreparacion = async (id) => {
    try {
      setLoading(true);
      await deletePreparacionApi(id, auth.token);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  const getPreparacion = async (id) => {
    try {
      setLoading(true);
      const response = await getPreparacionApi(id);
      setLoading(false);
      setPreparacion(response);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };
  const getPreparacionById = async (id) => {
    try {
      const product = await getPreparacionApi(id);
      return product;
    } catch (error) {
      setError(error);
    }
  };
  return {
    loading,
    error,
    preparaciones,
    getPreparaciones,
    addPreparacion,
    updatePreparacion,
    deletePreparacion,
    getPreparacion,
    getPreparacionById,
  };
}
