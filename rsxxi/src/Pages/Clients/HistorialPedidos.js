import React, { useState, useEffect } from "react";
import { Button } from "semantic-ui-react";
import { useParams } from "react-router-dom";
import { map, size, forEach } from "lodash";
import { ItemHistorialPedido } from "../../components/Clients";
import { ModalConfirm } from "../../components/Common";
import { usePedidos, useMesas, usePagos } from "../../hooks";

export function HistorialPedidos() {
  const [idMesa, setIdMesa] = useState(null);
  const [mostrarTipoPago, setMostrarTipoPago] = useState(false);
  const [isRequestAccount, setIsRequestAccount] = useState(false);
  const { loading, pedidos, getPedidosPorMesa, addPagoToPedido } = usePedidos();
  const { getMesaPorNumero } = useMesas();
  const { numero_mesa } = useParams();
  const { crearPagos, getPagosPorMesa } = usePagos();

  useEffect(() => {
    (async () => {
      const mesa = await getMesaPorNumero(numero_mesa);
      const idTableTemp = mesa[0].id;
      setIdMesa(idTableTemp);

      getPedidosPorMesa(idTableTemp, "", "ordering=-estado,-created_at");
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if (idMesa) {
        const response = await getPagosPorMesa(idMesa);
        setIsRequestAccount(response);
      }
    })();
  }, [idMesa]);

  const onCreatePayment = async (tipoPago) => {
    setMostrarTipoPago(false);

    let totalPayment = 0;
    forEach(pedidos, (pedido) => {
      totalPayment += Number(pedido.product_data.Valor);
    });

    const paymentData = {
      mesa: idMesa,
      total_Pago: totalPayment.toFixed(0),
      tipoPago,
      estadoPago: "PENDIENTE",
    };

    const pago = await crearPagos(paymentData);
    for await (const pedido of pedidos) {
      await addPagoToPedido(pedido.id, pago.id);
    }
    window.location.reload();
  };

  return (
    <div>
      <h1>Historial de pedidos</h1>

      {loading ? (
        <p>Cargando...</p>
      ) : (
        <>
          {size(pedidos) > 0 && (
            <Button
              primary
              fluid
              onClick={() =>
                size(isRequestAccount) === 0 && setMostrarTipoPago(true)
              }
            >
              {size(isRequestAccount) > 0
                ? "La cuenta ya esta pedida"
                : "Pedir la cuenta"}
            </Button>
          )}

          {map(pedidos, (pedido) => (
            <ItemHistorialPedido key={pedido.id} pedido={pedido} />
          ))}
        </>
      )}

      <ModalConfirm
        title="Pagar con tarjeta o efectivo"
        show={mostrarTipoPago}
        onCloseText="Efectivo"
        onClose={() => onCreatePayment("EFECTIVO")}
        onConfirmText="Tarjeta"
        onConfirm={() => onCreatePayment("TARJETA")}
      />
    </div>
  );
}
