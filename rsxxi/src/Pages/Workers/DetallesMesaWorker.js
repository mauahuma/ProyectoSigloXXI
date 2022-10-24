import React, { useState, useEffect } from "react";
import { Loader } from "semantic-ui-react";
import { useParams } from "react-router-dom";
import { forEach, size } from "lodash";
import { HeaderPage, AddPedidoForm } from "../../components/Workers";
import { ModalBasic } from "../../components/Common";
import {
  DetallePago,
  ListaPedidos,
} from "../../components/Workers/DetallesMesa";
import { usePedidos, useMesas, usePagos, useAuth } from "../../hooks";

export function DetallesMesaWorker() {
  const { auth } = useAuth();

  const [reloadPedidos, setReloadPedidos] = useState(false);
  const [paymentData, setPaymentData] = useState(null);
  const { id } = useParams();
  const { loading, pedidos, getPedidosPorMesa, addPagoToPedido } = usePedidos();
  const { mesa, getMesa } = useMesas();
  const { crearPagos, getPagosPorMesa } = usePagos();

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    getPedidosPorMesa(id, "", "ordering=-estado,created_at");
  }, [id, reloadPedidos]);

  useEffect(() => getMesa(id), [id]);

  useEffect(() => {
    (async () => {
      const response = await getPagosPorMesa(id);
      if (size(response) > 0) setPaymentData(response[0]);
    })();
  }, [reloadPedidos]);

  const onReloadPedidos = () => setReloadPedidos((prev) => !prev);
  const openCloseModal = () => setShowModal((prev) => !prev);

  const onCreatePayment = async () => {
    const result = window.confirm(
      "¿Estas seguro de generar la cuenta de la mesa?"
    );

    if (result) {
      let totalPayment = 0;
      forEach(pedidos, (pedido) => {
        totalPayment += Number(pedido.product_Data.Valor);
      });

      const resultTypePayment = window.confirm(
        "¿Pago con tarjeta pusa ACEPTAR con efectivo pusa CANCELAR"
      );

      const paymentData = {
        mesa: id,
        total_Pago: totalPayment.toFixed(0),
        tipoPago: resultTypePayment ? "TARJETA" : "EFECTIVO",
        estadoPago: "PENDIENTE",
      };

      const payment = await crearPagos(paymentData);

      for await (const pedido of pedidos) {
        await addPagoToPedido(pedido.id, payment.id);
      }
      onReloadPedidos();
    }
  };
  switch (auth.me.cargo) {
    case "Administrador":
    case "Garzon":
      return (
        <>
          <HeaderPage
            title={`Mesa ${mesa?.numero_mesa || ""}`}
            btnTitle={paymentData ? "Ver cuenta" : "Añadir pedido"}
            btnClick={openCloseModal}
            btnTitleTwo={!paymentData ? "Generar cuenta" : null}
            btnClickTwo={onCreatePayment}
          />
          {loading ? (
            <Loader active inline="centered">
              Cargando...
            </Loader>
          ) : (
            <ListaPedidos pedidos={pedidos} onReloadPedidos={onReloadPedidos} />
          )}

          <ModalBasic
            show={showModal}
            onClose={openCloseModal}
            title="Generar pedido"
          >
            {paymentData ? (
              <DetallePago
                pago={paymentData}
                pedidos={pedidos}
                openCloseModal={openCloseModal}
                onReloadPedidos={onReloadPedidos}
              />
            ) : (
              <AddPedidoForm
                idMesa={id}
                openCloseModal={openCloseModal}
                onReloadOrders={onReloadPedidos}
              />
            )}
          </ModalBasic>
        </>
      );
    default:
      return <h1>404</h1>;
  }
}
