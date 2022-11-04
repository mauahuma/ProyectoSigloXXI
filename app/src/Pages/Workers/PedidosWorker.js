import React, { useEffect } from "react";
import { Loader } from "semantic-ui-react";
import { HeaderPage, TableListMesas } from "../../components/Workers";
import { useMesas, useAuth } from "../../hooks";
export function PedidosWorker() {
  const { loading, mesas, getMesas } = useMesas();
  const { auth } = useAuth();

  useEffect(() => getMesas(), []);
  switch (auth.me.cargo) {
    case "Administrador":
    case "Garzon":
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
    default:
      return <h1>Error 404</h1>;
  }
}
