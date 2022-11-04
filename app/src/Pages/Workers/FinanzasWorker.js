import React, { useState, useEffect } from "react";
import { useFinanzas, useAuth } from "../../hooks";
import { Loader } from "semantic-ui-react";
import { HeaderPage, TableFinanzas } from "../../components/Workers";
import { ModalBasic } from "../../components/Common";

export function FinanzasWorker() {
  const [showModal, setShowModal] = useState(false);
  const [titleModal, setTitleModal] = useState(null);
  const [contentModal, setContentModal] = useState(null);
  const [refetch, setRefetch] = useState(false);
  const { loading, finanzas, getFinanzas } = useFinanzas();
  const { auth } = useAuth();
  useEffect(() => getFinanzas(), [refetch]);

  const openCloseModal = () => setShowModal((prev) => !prev);
  const onRefetch = () => setRefetch((prev) => !prev);

  //   const addProducto = () => {
  //     setTitleModal("Nuevo producto");
  //     setContentModal(
  //       <AddEditBodegaForm onClose={openCloseModal} onRefetch={onRefetch} />
  //     );
  //     openCloseModal();
  //   };

  //   const updateProducto = (data) => {
  //     setTitleModal("Actualizar producto");
  //     setContentModal(
  //       <AddEditBodegaForm
  //         onRefetch={onRefetch}
  //         onClose={openCloseModal}
  //         producto={data}
  //       />
  //     );
  //     openCloseModal();
  //   };

  //   const onDeleteProducto = async (data) => {
  //     const result = window.confirm(`¿Eliminar producto ${data.id}`);
  //     if (result) {
  //       try {
  //         await deleteProducto(data.id);
  //         onRefetch();
  //       } catch (error) {
  //         console.error(error);
  //       }
  //     }
  //   };

  switch (auth.me.cargo) {
    case "Administrador":
    case "Bodega":
      return (
        <>
          <HeaderPage
            title="Productos"
            // btnTitle="Nuevo producto"
            // btnClick={addProducto}
          />
          {loading ? (
            <Loader active inline="centered">
              Cargando...
            </Loader>
          ) : (
            <TableFinanzas
              finanzas={finanzas}
              //   updateProducto={updateProducto}
              //   onDeleteProducto={onDeleteProducto}
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
