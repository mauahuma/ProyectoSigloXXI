import React from "react";
import { Header, Segment, Form, Button, Checkbox } from "semantic-ui-react";
import "./FormatoL.scss";

export function FormatoL() {
  return (
    <div className="FormatoL">
      <Header textAlign="center">
        <h1>Registrarse</h1>
      </Header>
      <Segment raised>
        <Form>
          <Form.Field>
            <label>Nombres</label>
            <input placeholder="Nombres" />
          </Form.Field>
          <Form.Field>
            <label>Apellido</label>
            <input placeholder="Apellido" />
          </Form.Field>
          <Form.Field>
            <label>Teléfono</label>
            <input placeholder="+56912345678" />
          </Form.Field>
          <Form.Field>
            <label>Correo electrónico</label>
            <input placeholder="Ejemplo@ejemplo.com" />
          </Form.Field>
          <Form.Field>
            <label pointing="right">Crear Contraseña</label>
            <input type="password" placeholder="Contraseña" />
          </Form.Field>
          <Form.Field>
            <label pointing="right">Repetir Contraseña</label>
            <input type="password" placeholder="Repetir Contraseña" />
          </Form.Field>
          <Form.Field>
            <Checkbox label="Acepto ser cliente de SigloXXI" />
          </Form.Field>
          <Button type="submit">Registrarse</Button>
        </Form>
      </Segment>
    </div>
  );
}
