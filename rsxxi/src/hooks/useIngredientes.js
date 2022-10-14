import { useState } from "react";
import { useAuth } from ".";
import {
  getIngredientesApi,
  addIngredienteApi,
  updateIngredienteApi,
  deleteIngredienteApi,
  getIngredienteApi,
} from "../api/ingrediente";

export function useIngredientes() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [ingredientes, setIngredientes] = useState(null);
  const [ingrediente, setIngrediente] = useState(null);

  const { auth } = useAuth();

  const getIngredientes = async () => {
    try {
      setLoading(true);
      const response = await getIngredientesApi(auth.token);
      console.log(response);
      setLoading(false);
      setIngredientes(response);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  const addIngrediente = async (data) => {
    try {
      setLoading(true);
      await addIngredienteApi(data, auth.token);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  const updateIngrediente = async (id, data) => {
    try {
      setLoading(true);
      await updateIngredienteApi(id, data, auth.token);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  const deleteIngrediente = async (id) => {
    try {
      setLoading(true);
      await deleteIngredienteApi(id, auth.token);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  const getIngrediente = async (id) => {
    try {
      setLoading(true);
      const response = await getIngredienteApi(id);
      setLoading(false);
      setIngrediente(response);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };
  return {
    loading,
    error,
    ingredientes,
    getIngredientes,
    addIngrediente,
    updateIngrediente,
    deleteIngrediente,
    getIngrediente,
  };
}
