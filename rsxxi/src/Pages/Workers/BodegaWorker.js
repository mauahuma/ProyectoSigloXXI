import React, { useState, useEffect } from "react";
import { useBodega, useAuth } from "../../hooks";
import { Loader } from "semantic-ui-react";
import {
  HeaderPage,
  TableBodega,
  AddEditBodegaForm,
} from "../../components/Workers";
import { ModalBasic } from "../../components/Common";

export function BodegaWorker() {
  const [showModal, setShowModal] = useState(false);
  const [titleModal, setTitleModal] = useState(null);
  const [contentModal, setContentModal] = useState(null);
  const [refetch, setRefetch] = useState(false);
  const { loading, productos, getProductos, deleteProducto } = useBodega();
  const { auth } = useAuth();
  useEffect(() => getProductos(), [refetch]);

  const openCloseModal = () => setShowModal((prev) => !prev);
  const onRefetch = () => setRefetch((prev) => !prev);

  const addProducto = () => {
    setTitleModal("Nuevo Producto");
    setContentModal(
      <AddEditBodegaForm onClose={openCloseModal} onRefetch={onRefetch} />
    );
    openCloseModal();
  };

  const updateProducto = (data) => {
    setTitleModal("Actualizar Producto");
    setContentModal(
      <AddEditBodegaForm
        onRefetch={onRefetch}
        onClose={openCloseModal}
        producto={data}
      />
    );
    openCloseModal();
  };

  const onDeleteProducto = async (data) => {
    const result = window.confirm(`¿Eliminar Producto ${data.id}`);
    if (result) {
      try {
        await deleteProducto(data.id);
        onRefetch();
      } catch (error) {
        console.error(error);
      }
    }
  };

  switch (auth.me.cargo) {
    case "Administrador":
    case "Bodega":
      return (
        <>
          <HeaderPage
            title="Productos"
            btnTitle="Nuevo Producto"
            btnClick={addProducto}
          />
          {loading ? (
            <Loader active inline="centered">
              Cargando...
            </Loader>
          ) : (
            <TableBodega
              productos={productos}
              updateProducto={updateProducto}
              onDeleteProducto={onDeleteProducto}
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
      return <h1>404</h1>;
  }
}
