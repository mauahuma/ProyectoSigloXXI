import React, { useState, useEffect } from "react";
import { Grid, Header, Image, Card, Button, Divider } from "semantic-ui-react";

export function MenuC(props) {
  const { Title, Product1, Product2, Product3, Des1, Des2, Des3 } = props;

  return (
    <>
      <div className="MenuC">
        <Header as="h1" textAlign="center">
          <Header.Content>{Title}</Header.Content>
        </Header>
        <Grid columns={3} divided>
          <Grid.Row>
            <Grid.Column>
              <Card centered>
                <Image
                  src={
                    require("../../../assets/Imagenes/Mantencion.jpg").default
                  }
                />
                <Card.Content>
                  <Card.Header textAlign="center">{Product1}</Card.Header>
                  <Card.Meta textAlign="center">
                    <span className="date">Joined in 2015</span>
                  </Card.Meta>
                  <Card.Description textAlign="center">{Des1}</Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a></a>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column>
              <Card centered>
                <Image
                  src={
                    require("../../../assets/Imagenes/Mantencion.jpg").default
                  }
                />
                <Card.Content>
                  <Card.Header textAlign="center">{Product2}</Card.Header>
                  <Card.Meta textAlign="center">
                    <span className="date">Joined in 2015</span>
                  </Card.Meta>
                  <Card.Description textAlign="center">{Des2}</Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a></a>
                </Card.Content>
              </Card>
            </Grid.Column>
            <Grid.Column>
              <Card centered>
                <Image
                  src={
                    require("../../../assets/Imagenes/Mantencion.jpg").default
                  }
                />
                <Card.Content>
                  <Card.Header textAlign="center">{Product3}</Card.Header>
                  <Card.Meta textAlign="center">
                    <span className="date">Joined in 2015</span>
                  </Card.Meta>
                  <Card.Description textAlign="center">{Des3}</Card.Description>
                </Card.Content>
                <Card.Content extra>
                  <a></a>
                </Card.Content>
              </Card>
            </Grid.Column>
          </Grid.Row>
          <Divider></Divider>
        </Grid>
      </div>
    </>
  );
}
