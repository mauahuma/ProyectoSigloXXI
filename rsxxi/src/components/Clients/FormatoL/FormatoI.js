import React from "react";
import { Header, Segment, Form, Button, Checkbox } from "semantic-ui-react";
import "./FormatoL.scss";

export function FormatoI() {
  return (
    <div className="FormatoL">
      <Header textAlign="center">
        <h1>Ingresar</h1>
      </Header>
      <Segment raised>
        <Form>
          <Form.Field>
            <label>Correo electrónico</label>
            <input placeholder="Ejemplo@ejemplo.com" />
          </Form.Field>
          <Form.Field>
            <label pointing="right">Contraseña</label>
            <input type="password" placeholder="Contraseña" />
          </Form.Field>
          <Button type="submit">Ingresar</Button>
        </Form>
      </Segment>
    </div>
  );
}
