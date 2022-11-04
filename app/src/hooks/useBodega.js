import { useState } from "react";
import { useAuth } from ".";
import {
  getProductosApi,
  addProductoApi,
  updateProductoApi,
  deleteProductoApi,
  getProductoApi,
  getProductosByProveedorApi,
} from "../api/bodega";

export function useBodega() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [productos, setProductos] = useState(null);
  const [producto, setProducto] = useState(null);

  const { auth } = useAuth();

  const getProductos = async () => {
    try {
      setLoading(true);
      const response = await getProductosApi(auth.token);
      console.log(response);
      setLoading(false);
      setProductos(response);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  const addProducto = async (data) => {
    try {
      setLoading(true);
      await addProductoApi(data, auth.token);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  const updateProducto = async (id, data) => {
    try {
      setLoading(true);
      await updateProductoApi(id, data, auth.token);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  const deleteProducto = async (id) => {
    try {
      setLoading(true);
      await deleteProductoApi(id, auth.token);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  const getProducto = async (id) => {
    try {
      const product = await getProductoApi(id);
      return product;
    } catch (error) {
      setError(error);
    }
  };
  const getProductosByProveedor = async (idproveedor) => {
    try {
      setLoading(true);
      const response = await getProductosByProveedorApi(idproveedor);
      setLoading(false);
      setProductos(response);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };
  return {
    loading,
    error,
    productos,
    getProductos,
    addProducto,
    updateProducto,
    deleteProducto,
    getProducto,
    producto,
    getProductosByProveedor,
  };
}
