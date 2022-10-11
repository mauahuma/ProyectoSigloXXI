import React, { useState, useEffect } from "react";
import { usePreparaciones, useAuth } from "../../hooks";
import { Loader } from "semantic-ui-react";
import {
  HeaderPage,
  TablePreparaciones,
  AddEditPreparacionesForm,
  ShowPreparaciones,
} from "../../components/Workers";
import { ModalBasic } from "../../components/Common";

export function PreparacionesWorker() {
  const [showModal, setShowModal] = useState(false);
  const [titleModal, setTitleModal] = useState(null);
  const [contentModal, setContentModal] = useState(null);
  const [refetch, setRefetch] = useState(false);
  const { loading, preparaciones, getPreparaciones, deletePreparacion } =
    usePreparaciones();
  const { auth } = useAuth();
  useEffect(() => getPreparaciones(), [refetch]);

  const openCloseModal = () => setShowModal((prev) => !prev);
  const onRefetch = () => setRefetch((prev) => !prev);

  const addPreparacion = () => {
    setTitleModal("Nueva Preparación");
    setContentModal(
      <AddEditPreparacionesForm
        onClose={openCloseModal}
        onRefetch={onRefetch}
      />
    );
    openCloseModal();
  };

  const updatePreparacion = (data) => {
    setTitleModal("Actualizar Preparación");
    setContentModal(
      <AddEditPreparacionesForm
        onRefetch={onRefetch}
        onClose={openCloseModal}
        preparaciones={data}
      />
    );
    openCloseModal();
  };

  const onDeletePreparaciones = async (data) => {
    const result = window.confirm(
      `¿Eliminar Preparación ${data.id_preparacion}`
    );
    if (result) {
      try {
        await deletePreparacion(data.id);
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
          <HeaderPage
            title="Preparaciones"
            btnTitle="Nueva Preparación"
            btnClick={addPreparacion}
          />
          {loading ? (
            <Loader active inline="centered">
              Cargando...
            </Loader>
          ) : (
            <TablePreparaciones
              preparaciones={preparaciones}
              updatePreparacion={updatePreparacion}
              onDeletePreparaciones={onDeletePreparaciones}
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

    default:
      return <ShowPreparaciones preparaciones={preparaciones} />;
  }
}
