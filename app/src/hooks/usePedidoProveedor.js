import React, { useState } from "react";
import {
  getPedidosPorProveedorApi,
  addPedidoProveedorApi,
  updatePedidoProveedorApi,
} from "../api/pedidoProveedor";
export function usePedidoProveedor() {
  const [loading, setLoading] = useState(true);
  const [pedidos, setPedidos] = useState(null);
  const [error, setError] = useState(false);

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

  const addPedidoProveedor = async (idprod, idprov, cant, val) => {
    try {
      await addPedidoProveedorApi(idprod, idprov, cant, val);
    } catch (error) {
      setError(error);
    }
  };

  const updatePedidoProveedor = async (idpedido, data) => {
    try {
      await updatePedidoProveedorApi(idpedido, data);
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
    updatePedidoProveedor,
  };
}
