import { useState } from "react";
import {
  getPedidoPorMesaApi,
  checkPedidoEntregadoApi,
  addPedidoaMesaapi,
  addPagoToPedidoApi,
  cerrarPedidoApi,
  getPedidosbyPagoApi,
  getPedidosApi,
  checkPedidoPreparandoApi,
  checkPedidoPreparadoApi,
} from "../api/pedidos";

export function usePedidos() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [pedidos, setPedidos] = useState(null);

  const getPedidosPorMesa = async (idMesa, estado, orden) => {
    try {
      setLoading(true);
      const response = await getPedidoPorMesaApi(idMesa, estado, orden);
      setLoading(false);
      setPedidos(response);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  const checkPedidoEntregado = async (idPedido) => {
    try {
      await checkPedidoEntregadoApi(idPedido);
    } catch (error) {
      setError(error);
    }
  };
  const checkPedidoPreparando = async (idPedido) => {
    try {
      await checkPedidoPreparandoApi(idPedido);
    } catch (error) {
      setError(error);
    }
  };
  const checkPedidoPreparado = async (idPedido) => {
    try {
      await checkPedidoPreparadoApi(idPedido);
    } catch (error) {
      setError(error);
    }
  };
  const addPedidoaMesa = async (idMesa, idPreparacion) => {
    try {
      await addPedidoaMesaapi(idMesa, idPreparacion);
    } catch (error) {
      setError(error);
    }
  };

  const addPagoToPedido = async (idPedido, idPago) => {
    try {
      await addPagoToPedidoApi(idPedido, idPago);
    } catch (error) {
      // console.log(error)
      setError(error);
    }
  };

  const cerrarPedido = async (idPedido) => {
    try {
      await cerrarPedidoApi(idPedido);
    } catch (error) {
      setError(error);
    }
  };

  const getPedidosbyPago = async (idPago) => {
    try {
      return await getPedidosbyPagoApi(idPago);
    } catch (error) {
      setError(error);
    }
  };
  const getPedidos = async (estado, orden) => {
    try {
      setLoading(true);
      const response = await getPedidosApi(estado, orden);
      setLoading(false);
      setPedidos(response);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  return {
    loading,
    error,
    pedidos,
    getPedidosPorMesa,
    checkPedidoEntregado,
    addPedidoaMesa,
    addPagoToPedido,
    cerrarPedido,
    getPedidosbyPago,
    getPedidos,
    checkPedidoPreparando,
    checkPedidoPreparado,
  };
}
