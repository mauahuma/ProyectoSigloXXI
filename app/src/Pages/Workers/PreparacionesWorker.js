import React, { useState, useEffect } from "react";
import { usePreparaciones, useAuth } from "../../hooks";
import { Loader } from "semantic-ui-react";
import {
  HeaderPage,
  TablePreparaciones,
  AddEditPreparacionesForm,
  ShowPreparaciones,
  AddIngredienteForm,
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
    setTitleModal("Nueva preparación");
    setContentModal(
      <AddEditPreparacionesForm
        onClose={openCloseModal}
        onRefetch={onRefetch}
      />
    );
    openCloseModal();
  };

  const updatePreparacion = (data) => {
    setTitleModal("Actualizar preparación");
    setContentModal(
      <AddEditPreparacionesForm
        onRefetch={onRefetch}
        onClose={openCloseModal}
        preparacion={data}
      />
    );
    openCloseModal();
  };
  const addIngredient = (data) => {
    setTitleModal("Agregar ingredientes");
    setContentModal(
      <AddIngredienteForm
        onRefetch={onRefetch}
        onClose={openCloseModal}
        preparacion={data}
      />
    );
    openCloseModal();
  };

  const onDeletePreparaciones = async (data) => {
    const result = window.confirm(`¿Eliminar preparación ${data.id}`);
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
    case "Cocina":
      return (
        <>
          <HeaderPage
            title="Preparaciones"
            btnTitle="Nueva preparación"
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
              addIngredient={addIngredient}
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
      return <h1>Error 404</h1>;
  }
}
