import React, { useEffect } from "react";
import { Loader } from "semantic-ui-react";
import { HeaderPage, TablaPagos } from "../../components/Workers";
import { usePagos } from "../../hooks";

export function PagosWorker() {
  const { loading, pagos, getPagos, getPagosFiltered, pagosFiltered } =
    usePagos();

  useEffect(() => getPagos(), []);
  useEffect(() => getPagosFiltered(), []);

  return (
    <>
      <HeaderPage title="Historial de pagos" />
      {loading ? (
        <Loader active inline="centered">
          Cargando...
        </Loader>
      ) : (
        <TablaPagos pagos={pagos} />
      )}
    </>
  );
}
