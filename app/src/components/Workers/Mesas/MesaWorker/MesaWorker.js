import React, { useState, useEffect } from "react";
import { size } from "lodash";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { Label } from "semantic-ui-react";
import { getPedidoPorMesaApi } from "../../../../api/pedidos";
import { ReactComponent as ImTable } from "../../../../assets/table.svg";
import "./MesaWorker.scss";
import { ORDER_STATUS } from "../../../../utils/constants";
export function MesaWorker(props) {
  const { mesa, reload } = props;
  const [ordersPending, setOrdersPending] = useState([]);
  const [ordersPreparing, setordersPreparing] = useState([]);

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
      setOrdersPending(response1);
      setordersPreparing(response2);
    })();
  }, [reload]);

  return (
    <Link className="mesa-worker" to={`/Workers/Mesa/${mesa.id}`}>
      {size(ordersPending) > 0 ? (
        <Label circular color="orange" className="mesa-worker__pending">
          {size(ordersPending)}
        </Label>
      ) : null}
      {size(ordersPreparing) > 0 ? (
        <Label circular color="green" className="mesa-worker__preparing">
          {size(ordersPreparing)}
        </Label>
      ) : null}
      <ImTable
        className={classNames({
          ocupada: mesa.estado === "Ocupado",
          pending: size(ordersPending) > 0,
          preparing: size(ordersPreparing) > 0,
        })}
      />
      <p>mesa {mesa.numero_mesa}</p>
    </Link>
  );
}
