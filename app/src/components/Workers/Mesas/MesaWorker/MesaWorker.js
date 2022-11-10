import React, { useState, useEffect } from "react";
import { size } from "lodash";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { Label } from "semantic-ui-react";
import { getPedidoPorMesaApi } from "../../../../api/pedidos";
import { ReactComponent as ImTable } from "../../../../assets/table.svg";
import "./MesaWorker.scss";
import { ORDER_STATUS } from "../../../../utils/constants";
import { usePagos } from "../../../../hooks";
export function MesaWorker(props) {
  const { mesa, reload } = props;
  const [ordersPending, setOrdersPending] = useState([]);
  const [ordersPreparing, setordersPreparing] = useState([]);
  const [pagoPendiente, setPagoPendiente] = useState(false);
  const [ordersPrepared, setOrdersPrepared] = useState([]);

  const { getPagosPorMesa } = usePagos();

  useEffect(() => {
    (async () => {
      const response1 = await getPedidoPorMesaApi(
        mesa.id,
        ORDER_STATUS.PENDIENTE
      );
      const response2 = await getPedidoPorMesaApi(
        mesa.id,
        ORDER_STATUS.PREPARANDO
      );
      const response3 = await getPedidoPorMesaApi(
        mesa.id,
        ORDER_STATUS.PREPARADO
      );
      setOrdersPending(response1);
      setordersPreparing(response2);
      setOrdersPrepared(response3);
    })();
  }, [reload]);
  useEffect(() => {
    (async () => {
      const response = await getPagosPorMesa(mesa.id);
      if (size(response) > 0) setPagoPendiente(true);
      else setPagoPendiente(false);
    })();
  }, [reload]);
  return (
    <Link className="mesa-worker" to={`/Workers/Mesa/${mesa.id}`}>
      {size(ordersPending) > 0 ? (
        <Label circular color="orange" className="mesa-worker__pending">
          {size(ordersPending)}
        </Label>
      ) : null}
      {size(ordersPrepared) > 0 ? (
        <Label circular color="yellow" className="mesa-worker__preparing">
          {size(ordersPrepared)}
        </Label>
      ) : null}
      {pagoPendiente && (
        <Label circular color="orange">
          Cuenta
        </Label>
      )}
      <ImTable
        className={classNames({
          ocupada: mesa.estado === "Ocupado",
          prepared: size(ordersPrepared) > 0,

          pending: size(ordersPending) > 0,

          "pending-payment": pagoPendiente,
        })}
      />
      <p>mesa {mesa.numero_mesa}</p>
    </Link>
  );
}
