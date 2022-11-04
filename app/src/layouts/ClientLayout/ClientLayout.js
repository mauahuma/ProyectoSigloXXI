import React, { useEffect } from "react";
import { Container, Button, Icon } from "semantic-ui-react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useMesas } from "../../hooks";
import "./ClientLayout.scss";

export function ClientLayout(props) {
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
    <div className="client-layout-bg">
      <Container className="client-layout">
        <div className="client-layout__header">
          <Link to={`/client/${numero_mesa}`}>
            <h1>RSXXI</h1>
          </Link>
          <span>Mesa {numero_mesa}</span>

          <div>
            <Button icon onClick={goToCart}>
              <Icon name="shop" />
            </Button>
            <Button icon onClick={goToOrders}>
              <Icon name="list" />
            </Button>
            <Button icon onClick={closeTable}>
              <Icon name="sign-out" />
            </Button>
          </div>
        </div>

        <div className="client-layout__content">{children}</div>
      </Container>
    </div>
  );
}
