import {
  Checkbox,
  Grid,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
  Button,
  Select,
  Input,
} from "semantic-ui-react";
import React, { useState } from "react";
import { MenuC, HeaDR } from "../../../components/Clients";

export function Carta() {
  const options = [
    { key: "todos", text: "Todos", value: "todos" },
    { key: "entradas", text: "Entradas", value: "entradas" },
    { key: "platos", text: "Platos", value: "platos" },
    { key: "postres", text: "Postres", value: "postres" },
    { key: "bebestibles", text: "Bebestibles", value: "bebestibles" },
  ];
  const [visible, setVisible] = useState(false);
  const onVisible = () => setVisible((prev) => !prev);
  return (
    <div className="Carta">
      <div>
        <Grid.Column>
          <Segment inverted>
            <Menu inverted>
              <Checkbox
                slider
                checked={visible}
                onChange={(e, data) => setVisible(data.checked)}
              />
              <Menu.Item
                name="No sé que colocar aquí"
                onClick={() => console.log}
              />
              <Menu.Item name="Volver" onClick={() => console.log} />
              <Menu.Menu position="right">
                <Input
                  labelPosition="right"
                  type="text"
                  placeholder="Buscar..."
                  action
                >
                  <input />
                  <Select compact options={options} defaultValue="Filtros" />
                  <Button type="submit">Buscar</Button>
                </Input>
              </Menu.Menu>
            </Menu>
          </Segment>
        </Grid.Column>
        <Grid.Column>
          <Sidebar.Pushable as={Segment}>
            <Sidebar
              as={Menu}
              animation="overlay"
              icon="labeled"
              inverted
              onHide={() => setVisible(false)}
              vertical
              visible={visible}
              width="thin"
            >
              <Menu.Item as="a">
                <Icon name="utensil spoon" />
                Entradas
              </Menu.Item>
              <Menu.Item as="a">
                <Icon name="utensils" />
                Platos
              </Menu.Item>
              <Menu.Item as="a">
                <Icon name="birthday cake" />
                Postres
              </Menu.Item>
              <Menu.Item as="a">
                <Icon name="beer" />
                Bebestibles
              </Menu.Item>
            </Sidebar>

            <Sidebar.Pusher>
              <Segment inverted>
                <HeaDR />
              </Segment>
              <Segment basic>
                <MenuC
                  Title="Entradas"
                  Product1="ceviche"
                  Product2="ceviche"
                  Product3="ceviche"
                />
                <MenuC
                  Title="Platos"
                  Product1="Porotos"
                  Product2="Porotos"
                  Product3="Porotos"
                />
                <MenuC
                  Title="Postres"
                  Product1="Helado"
                  Product2="Helado"
                  Product3="Helado"
                />
                <MenuC
                  Title="Bebestibles"
                  Product1="Jugo"
                  Product2="Jugo"
                  Product3="Jugo"
                />
              </Segment>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </Grid.Column>
      </div>
      <div className="Carta__Navbar"></div>
      <div className="Carta__Content"></div>
    </div>
  );
}
