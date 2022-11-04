import { useState } from "react";
import {
  getFinanzasApi,

} from "../api/finanzas";

export  function useFinanzas() {

  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [finanzas, setFinanzas] = useState(null);





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

  return {
    error,
    loading,
    finanzas,
    getFinanzas
  };
}
