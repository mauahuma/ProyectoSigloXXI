import { useState } from "react";
import {
  crearPagosApi,
  getPagosPorMesaApi,
  cerrarPagosApi,
  getPagosApi,
} from "../api/pagos";

export function usePagos() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [pagos, setPagos] = useState(null);

  const crearPagos = async (dataPago) => {
    try {
      return await crearPagosApi(dataPago);
    } catch (error) {
      setError(error);
    }
  };

  const getPagosPorMesa = async (idMesa) => {
    try {
      return await getPagosPorMesaApi(idMesa);
    } catch (error) {
      setError(error);
    }
  };

  const cerrarPagos = async (idPago) => {
    try {
      await cerrarPagosApi(idPago);
    } catch (error) {
      setError(error);
    }
  };

  const getPagos = async () => {
    try {
      setLoading(true);
      const response = await getPagosApi();
      setLoading(false);
      setPagos(response);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  return {
    error,
    loading,
    pagos,
    crearPagos,
    getPagosPorMesa,
    cerrarPagos,
    getPagos,
  };
}
