import React, { useEffect } from "react";
import {
  getPedidosPorProveedorApi,
  addPedidoProveedorApi,
} from "../api/pedidoProveedor";
export function usePedidoProveedor() {
  const [loading, setLoading] = useEffect(true);
  const [pedidos, setPedidos] = useEffect(null);
  const [error, setError] = useEffect(false);

  const getPedidosPorProveedor = async (proveedor) => {
    try {
      setLoading(true);
      const response = await getPedidosPorProveedorApi(proveedor);
      setLoading(false);
      setPedidos(response);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  const addPedidoProveedor = async (data) => {
    try {
      await addPedidoProveedorApi(data);
    } catch (error) {
      setError(error);
    }
  };

  return {
    loading,
    error,
    pedidos,
    getPedidosPorProveedor,
    addPedidoProveedor,
  };
}
