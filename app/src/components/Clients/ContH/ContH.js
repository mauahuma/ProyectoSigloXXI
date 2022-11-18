import React, { useState, useEffect } from "react";
import {
  Segment,
  Grid,
  Button,
  Image,
  Container,
  Header,
  Divider,
  Icon,
  Label,
} from "semantic-ui-react";
import { ModalBasic } from "../../Common/ModalBasic";
import { usePreparaciones } from "../../../hooks";
export function ContH(props) {
  const { preparaciones, getPreparacionesOrderedStock } = usePreparaciones();
  const [show, setShow] = useState(false);
  const openCloseModal = () => setShow((prev) => !prev);
  const [titleModal, setTitleModal] = useState(null);
  const [contentModal, setContentModal] = useState(null);
  useEffect(() => getPreparacionesOrderedStock(), []);
  const verOferta = () => {
    setTitleModal("Oferta del Dia");
    setContentModal(
      <Segment>
        <Header>{preparaciones[0].nombre}</Header>
        <Image
          src={
            preparaciones[0].Imagen
              ? preparaciones[0].Imagen
              : require("../../../assets/Imagenes/Mantencion.jpg").default
          }
        />
        <Label>${preparaciones[0].Valor}</Label>
      </Segment>
    );
    openCloseModal();
  };
  return (
    <>
      <div>
        <Container fluid>
          <Segment inverted>
            <Header
              as="h1"
              content="Siglo XXI"
              textAlign="center"
              style={{
                fontSize: props ? "4em" : "6em",
                fontWeight: "normal",
                marginBottom: 0,
                marginTop: props ? "1.5em" : "3em",
              }}
            />
            <Header
              as="h2"
              content="Tradicionalmente sabroso"
              textAlign="center"
              style={{
                fontSize: props ? "1.5em" : "2em",
                fontWeight: "normal",
                marginBottom: 0,
                marginTop: props ? "0.5em" : "1.5em",
              }}
            />
            <Segment inverted></Segment>
            <Divider horizontal section />
          </Segment>
        </Container>
        <Container>
          <Segment style={{ padding: "8em 0em" }} vertical>
            <Grid container stackable verticalAlign="middle">
              <Grid.Row>
                <Grid.Column width={8}>
                  <Header as="h3" style={{ fontSize: "2em" }}>
                    ¿Que es Siglo XXI?
                  </Header>
                  <p style={{ fontSize: "1.33em" }}>
                    Siglo XXI es un restaurant con más de 50 años de
                    experiencia, ubicado en una zona turística para proporcionar
                    a nustros clientes un deleite visual, como también un buen
                    servicio gastronómico.
                  </p>
                  <Header as="h3" style={{ fontSize: "2em" }}>
                    Beneficios de registrarse en Siglo XXI
                  </Header>
                  <p style={{ fontSize: "1.33em" }}>
                    Al ser cliente de Siglo XXI podrás optar a preferencias en
                    la reservación de mesas, descuentos especiales, ofertas y
                    combos exclusivos.
                  </p>
                </Grid.Column>
                <Grid.Column floated="right" width={6}>
                  <Image
                    bordered
                    rounded
                    size="large"
                    src={
                      require("../../../assets/Imagenes/Mantencion.jpg").default
                    }
                  />
                </Grid.Column>
              </Grid.Row>
              <Grid.Row>
                <Grid.Column textAlign="center">
                  <Button size="huge" color="black">
                    Registrarse
                  </Button>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>

          <Segment style={{ padding: "0em" }} vertical>
            <Grid celled="internally" columns="equal" stackable>
              <Grid.Row textAlign="center">
                <Grid.Column
                  style={{ paddingBottom: "5em", paddingTop: "5em" }}
                >
                  <Header as="h3" style={{ fontSize: "2em" }}>
                    "¿Estás Hambriento?"
                  </Header>
                  <p style={{ fontSize: "1.33em" }}>
                    Revisa nuestras ofertas del día
                  </p>
                  <Button size="huge" color="black" onClick={() => verOferta()}>
                    Revisar
                  </Button>
                </Grid.Column>
                <Grid.Column
                  style={{ paddingBottom: "5em", paddingTop: "5em" }}
                >
                  <Header as="h3" style={{ fontSize: "2em" }}>
                    "Nuestras redes sociales"
                  </Header>
                  <p style={{ fontSize: "1.33em" }}>
                    Pincha aquí para redireccionarte a nuestras redes sociales
                  </p>
                  <Button.Group basic size="medium">
                    <Button icon="instagram" />
                    <Button icon="facebook" />
                    <Button icon="twitter" />
                  </Button.Group>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>

          <Segment style={{ padding: "8em 0em" }} vertical>
            <Container text>
              <Header as="h3" style={{ fontSize: "2em" }}>
                Historia de Siglo XXI
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                El restaurante siglo XXI, se encuentra en una zona ampliamente
                turística del país, atiende desde hace 50 años por sus dueños,
                quienes poco a poco fueron construyendo el local hasta hacerse
                conocido por su comida casera.
              </p>
              <Button as="a" size="large">
                Leer más
              </Button>

              <Divider
                as="h4"
                className="header"
                horizontal
                style={{ margin: "3em 0em", textTransform: "uppercase" }}
              >
                <a href="#">Trabaja con nosotros</a>
              </Divider>

              <Header as="h3" style={{ fontSize: "2em" }}>
                Únete a Nosotros
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                Pincha arriba sobre "Trabaja con nosotros" para ayudarnos a
                mejorar, entregando tus observaciones correspondientes, esto con
                el fin de compenetrarnos con ustedes para entregar el mejor
                servicio.
              </p>
            </Container>
          </Segment>
        </Container>
      </div>
      <ModalBasic
        show={show}
        onClose={openCloseModal}
        title={titleModal}
        children={contentModal}
      />
    </>
  );
}
