import React, { useState, useEffect } from "react";
import { HeaderPage } from "../../components/Workers";
import { DetallePago, ListaPedidos } from "../../components/Workers/Cocina";
import { usePedidos, useMesas, useAuth } from "../../hooks";
import { Loader } from "semantic-ui-react";

export function CocinaWorker() {
  const { auth } = useAuth();

  const [reloadPedidos, setReloadPedidos] = useState(false);
  const { loading, pedidos, getPedidos } = usePedidos();
  const { mesa, getMesa } = useMesas();

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    getPedidos("", "ordering=-estado,created_at");
  }, [reloadPedidos]);

  const onReloadPedidos = () => setReloadPedidos((prev) => !prev);
  const openCloseModal = () => setShowModal((prev) => !prev);

  switch (auth.me.cargo) {
    case "Administrador":
    case "Garzon":
      return (
        <>
          {loading ? (
            <Loader active inline="centered">
              Cargando...
            </Loader>
          ) : (
            <ListaPedidos pedidos={pedidos} onReloadPedidos={onReloadPedidos} />
          )}
        </>
      );
    default:
      return <h1>404</h1>;
  }
}
