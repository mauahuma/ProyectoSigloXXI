import React, { useEffect } from "react";
import { SideA, SideB } from "../../components/Clients";
import "./PedidosLayout.scss";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useMesas } from "../../hooks";

export function PedidosLayout(props) {
  const { children } = props;
  const { isExistMesa } = useMesas();
  const { numero_mesa } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const exist = await isExistMesa(numero_mesa);
      if (!exist) closeTable();
    })();
  }, [numero_mesa]);
  const closeTable = () => {
    navigate("/");
  };

  const goToCart = () => {
    navigate(`/client/${numero_mesa}/carrito`);
  };

  const goToOrders = () => {
    navigate(`/client/${numero_mesa}/pedidos`);
  };

  return (
    <div className="Pedidos-layout">
      <div className="Pedidos-layout__menu">
        <SideA
          closeTable={closeTable}
          goToCart={goToCart}
          goToOrders={goToOrders}
          numero_mesa={numero_mesa}
        />
      </div>
      <div className="Pedidos-layout__main-content">{children}</div>
    </div>
  );
}
