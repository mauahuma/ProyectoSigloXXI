import React, { useState, useEffect } from "react";
import { useMesas, useAuth } from "../../hooks";
import { Loader } from "semantic-ui-react";
import {
  HeaderPage,
  TableMesas,
  AddEditMesasForm,
  ShowMesas,
} from "../../components/Workers";
import { ModalBasic } from "../../components/Common";

export function MesasWorker() {
  const [showModal, setShowModal] = useState(false);
  const [titleModal, setTitleModal] = useState(null);
  const [contentModal, setContentModal] = useState(null);
  const [refetch, setRefetch] = useState(false);
  const { loading, mesas, getMesas, deleteMesa } = useMesas();
  const { auth } = useAuth();
  useEffect(() => getMesas(), [refetch]);

  const openCloseModal = () => setShowModal((prev) => !prev);
  const onRefetch = () => setRefetch((prev) => !prev);

  const addMesa = () => {
    setTitleModal("Nueva Mesa");
    setContentModal(
      <AddEditMesasForm onClose={openCloseModal} onRefetch={onRefetch} />
    );
    openCloseModal();
  };

  const updateMesa = (data) => {
    setTitleModal(`Actualizar mesa ${data.numero_mesa}`);
    setContentModal(
      <AddEditMesasForm
        onRefetch={onRefetch}
        onClose={openCloseModal}
        mesa={data}
      />
    );
    openCloseModal();
  };

  const onDeleteMesas = async (data) => {
    const result = window.confirm(`¿Eliminar Mesa ${data.numero_mesa}`);
    if (result) {
      try {
        await deleteMesa(data.id);
        onRefetch();
      } catch (error) {
        console.error(error);
      }
    }
  };

  switch (auth.me.cargo) {
    case "Administrador":
      return (
        <>
          <HeaderPage title="Mesas" btnTitle="Nueva Mesa" btnClick={addMesa} />
          {loading ? (
            <Loader active inline="centered">
              Cargando...
            </Loader>
          ) : (
            <TableMesas
              mesas={mesas}
              updateMesa={updateMesa}
              onDeleteMesa={onDeleteMesas}
            />
          )}

          <ModalBasic
            show={showModal}
            onClose={openCloseModal}
            title={titleModal}
            children={contentModal}
          />
        </>
      );
    case "Recepcion":
      return <ShowMesas mesas={mesas} onRefetch={onRefetch} />;

    default:
      return <h1>Error 404</h1>;
  }
}
