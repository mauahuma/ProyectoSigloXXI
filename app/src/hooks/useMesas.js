import { useState } from "react";
import {
  getMesasApi,
  getMesasDisponiblesApi,
  addMesaApi,
  updateMesaApi,
  deleteMesaApi,
  getMesaApi,
  getMesaByNumeroApi,
  setMesaDisponibleApi,
} from "../api/mesas";
import { useAuth } from ".";
import { size } from "lodash";

export function useMesas() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [mesas, setMesas] = useState(null);
  const [mesa, setMesa] = useState(null);
  const [mesaId, setMesaId] = useState(null);
  const [response, setResponse] = useState(null);
  const { auth } = useAuth();

  const getMesas = async () => {
    try {
      setLoading(true);
      const response = await getMesasApi(auth.token);
      setLoading(false);
      setMesas(response);
      return response;
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };
  const getMesasDisponibles = async () => {
    try {
      setLoading(true);
      const response = await getMesasDisponiblesApi(auth.token);
      setLoading(false);
      setMesas(response);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };
  const addMesa = async (data) => {
    try {
      setLoading(true);
      const response = await addMesaApi(data, auth.token);
      setLoading(false);
      return response;
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  const updateMesa = async (id, data) => {
    try {
      setLoading(true);
      const response = await updateMesaApi(id, data, auth.token);
      setLoading(false);
      return response;
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  const deleteMesa = async (id) => {
    try {
      setLoading(true);
      await deleteMesaApi(id, auth.token);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  const getMesa = async (id) => {
    try {
      setLoading(true);
      const response = await getMesaApi(id);
      setLoading(false);
      setMesa(response);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  const isExistMesa = async (numeroMesa) => {
    try {
      const response = await getMesaByNumeroApi(numeroMesa);
      if (size(response) === 0) throw Error();
      return true;
    } catch (error) {
      setError(error);
    }
  };

  const getMesaPorNumero = async (numeromesa) => {
    try {
      const response = await getMesaByNumeroApi(numeromesa);
      setMesaId(response);
      return response;
    } catch (error) {
      setError(error);
    }
  };

  const setMesaDisponible = async (id) => {
    try {
      const response = await setMesaDisponibleApi(id, auth.token);
      return response;
    } catch (error) {
      setError(error);
    }
  };
  return {
    loading,
    error,
    mesas,
    mesa,
    getMesas,
    addMesa,
    updateMesa,
    deleteMesa,
    getMesa,
    isExistMesa,
    getMesaPorNumero,
    setMesaDisponible,
    getMesasDisponibles,
    mesaId,
  };
}
