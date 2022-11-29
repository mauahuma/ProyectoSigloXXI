import { useState } from "react";
import {
  addReservaApi,
  getReservasApi,
  updateStatusReservaApi,
} from "../api/reservas";
import { useAuth } from ".";

export function useReservas() {
  const { auth } = useAuth();
  const [reservas, setReservas] = useState(null);

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const addReserva = async (data) => {
    try {
      setLoading(true);
      await addReservaApi(data, auth.token);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  const getReservas = async (fecha, ordering) => {
    try {
      setLoading(true);
      const response = await getReservasApi(fecha, ordering);
      setLoading(false);
      setReservas(response);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  const updateStatusReserva = async (id) => {
    try {
      await updateStatusReservaApi(id);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };
  return { addReserva, updateStatusReserva, getReservas, reservas };
}
