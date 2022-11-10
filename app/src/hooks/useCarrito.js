import { useState } from "react";
import {
  getCarritoApi,
  agregarACarrito,
  eliminarProductoApi,
} from "../api/carrito fallido";
import { useAuth } from ".";

export function useCarrito() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [carro, setCarro] = useState(null);
  const { auth } = useAuth();

  const getCarrito = async (idMesa) => {
    try {
      setLoading(true);
      const response = await getCarritoApi(idMesa);
      setLoading(false);
      setCarro(response);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };
  const addCarro = async (idProd, idMesa) => {
    try {
      await agregarACarrito(idProd, idMesa, auth.token);
    } catch (error) {
      setError(error);
    }
  };

  const eliminarProducto = async (id) => {
    try {
      await eliminarProductoApi(id, auth.token);
    } catch (error) {
      setError(error);
    }
  };
  return {
    error,
    loading,
    carro,
    getCarrito,
    addCarro,
    eliminarProducto,
  };
}
