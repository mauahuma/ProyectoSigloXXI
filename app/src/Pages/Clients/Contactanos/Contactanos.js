import React from "react";
import { Header, Icon, Form, Button, Segment } from "semantic-ui-react";
import { FinalP } from "../../../components/Clients";
import "./Contactanos.scss";

export function Contactanos() {
  return (
    <div className="Contactanos">
      <div className="Contactanos__Header">
        <Header as="h1">
          <Icon name="settings" />
          <Header.Content>
            Contactanos
            <Header.Subheader>Deja aquí tus comentarios</Header.Subheader>
          </Header.Content>
        </Header>
      </div>
      <div className="Contactanos__Content">
        <Segment>
          <h4>
            Deja aquí tus comentarios para saber tu experiencia con Siglo XXI, te
            enviaremos los comentarios correspondientes, con esto nos ayudas a
            obtener otra perspectiva para mejorar los servicios.
          </h4>
        </Segment>
        <Form reply>
          <Form.TextArea />
          <Button
            content="Add Reply"
            labelPosition="left"
            icon="edit"
            primary
          />
        </Form>
      </div>
      <div className="Contactanos__Final">
        <FinalP />
      </div>
    </div>
  );
}
