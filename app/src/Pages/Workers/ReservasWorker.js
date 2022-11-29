import React, { useState, useEffect } from "react";
import { useReservas, useAuth } from "../../hooks";
import { Loader } from "semantic-ui-react";
import { HeaderPage, TableReservas } from "../../components/Workers";
import { ModalBasic } from "../../components/Common";

export function ReservasWorker() {
  const [showModal, setShowModal] = useState(false);
  const [titleModal, setTitleModal] = useState(null);
  const [contentModal, setContentModal] = useState(null);
  const [refetch, setRefetch] = useState(false);
  const { loading, getReservas, reservas, updateStatusReserva } = useReservas();
  const { auth } = useAuth();
  useEffect(() => getReservas("", "ordering=+fecha,+hora"), [refetch]);
  const openCloseModal = () => setShowModal((prev) => !prev);
  const onRefetch = () => setRefetch((prev) => !prev);

  const cerrarReserva = async (id) => {
    try {
      await updateStatusReserva(id);
      onRefetch();
    } catch (error) {
      console.log(error);
    }
  };
  switch (auth.me.cargo) {
    case "Administrador":
    case "Recepcion":
      return (
        <>
          <HeaderPage title="Reservas" />
          {loading ? (
            <Loader active inline="centered">
              Cargando...
            </Loader>
          ) : (
            <TableReservas reservas={reservas} cerrarReserva={cerrarReserva} />
          )}

          <ModalBasic
            show={showModal}
            onClose={openCloseModal}
            title={titleModal}
            children={contentModal}
          />
        </>
      );

    default:
      return <h1>404</h1>;
  }
}
