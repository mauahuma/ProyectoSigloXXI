import { useState } from "react";
import { getFinanzasApi, addFinanzasApi } from "../api/finanzas";
import { useAuth } from ".";

export function useFinanzas() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [finanzas, setFinanzas] = useState(null);
  const { auth } = useAuth();

  const getFinanzas = async () => {
    try {
      setLoading(true);
      const response = await getFinanzasApi();
      setLoading(false);
      setFinanzas(response);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };
  const addFinanzas = async (data) => {
    try {
      await addFinanzasApi(data, auth.token);
    } catch (error) {
      setError(error);
    }
  };
  return {
    error,
    loading,
    finanzas,
    getFinanzas,
    addFinanzas,
  };
}
