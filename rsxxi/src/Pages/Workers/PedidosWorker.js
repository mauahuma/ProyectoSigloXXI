import React, { useEffect } from "react";
import { Loader } from "semantic-ui-react";
import { HeaderPage, TableListMesas } from "../../components/Workers";
import { useMesas } from "../../hooks";
export function PedidosWorker() {
  const { loading, mesas, getMesas } = useMesas();
  useEffect(() => getMesas(), []);

  return (
    <>
      <HeaderPage title="Pedidos" />
      {loading ? (
        <Loader active inline="centered">
          Cargando...
        </Loader>
      ) : (
        <TableListMesas mesas={mesas} />
      )}
    </>
  );
}
