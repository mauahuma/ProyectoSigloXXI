import React, { useState, useEffect } from "react";
import ChartistGraph from "react-chartist";
import {
  Badge,
  Button,
  Card,
  Navbar,
  Nav,
  Table,
  Container,
  Row,
  Col,
  Form,
  OverlayTrigger,
  Tooltip,
} from "react-bootstrap";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import "./Reportes.scss";
import { Icon } from "semantic-ui-react";
import {
  Cake,
  Dona,
  Grafico,
  Barras,
} from "../../components/Workers/Dashboard/Diario";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export function Reportes() {
  const today = getCurrentDatelf("-");
  const printRef = React.useRef();
  const date = getCurrentDate("-");

  const handleDownloadPdf = async () => {
    const element = printRef.current;
    const canvas = await html2canvas(element);
    const data = canvas.toDataURL("image/png");

    const pdf = new jsPDF();
    const imgProperties = pdf.getImageProperties(data);
    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = (imgProperties.height * pdfWidth) / imgProperties.width;

    pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);
    pdf.save(`Reporte Diario ${date}.pdf`);
  };

  const [total_pago, setTotal_pago] = useState([]);
  const [totalIngresos, setTotalIngresos] = useState([]);
  const [totalEgresos, setTotalEgresos] = useState([]);

  const peticionApi3 = async () => {
    await axios
      .get(
        `http://127.0.0.1:8000/api/finanzas/?tipo=INGRESO&fecha__gte=${today}`
      )
      .then((Response) => {
        var respuesta = Response.data;
        var auxTotal_pago = 0;
        respuesta.map((elemento) => {
          auxTotal_pago = auxTotal_pago + elemento.monto;
        });

        setTotalIngresos(auxTotal_pago);
      });
  };
  const peticionApi2 = async () => {
    await axios
      .get(
        `http://127.0.0.1:8000/api/pedidos/?close=true&created_at__gte=${today}`
      )
      .then((Response) => {
        var respuesta = Response.data;
        var auxTotal_pago = 0;
        respuesta.map((elemento) => {
          auxTotal_pago = auxTotal_pago + 1;
        });
        setTotal_pago(auxTotal_pago);
      });
  };
  const peticionApi4 = async () => {
    await axios
      .get(
        `http://127.0.0.1:8000/api/finanzas/?tipo=EGRESO&fecha__gte=${today}`
      )
      .then((Response) => {
        var respuesta = Response.data;
        var auxTotal_pago = 0;
        respuesta.map((elemento) => {
          auxTotal_pago = auxTotal_pago + elemento.monto;
        });

        setTotalEgresos(auxTotal_pago);
      });
  };
  useEffect(() => {
    peticionApi2();
    peticionApi3();
    peticionApi4();
  }, []);
  const navigate = useNavigate();

  const goToDay = () => {
    navigate(`/workers/Reportes`);
  };
  const goToWeek = () => {
    navigate(`/workers/Reportes/Semanal`);
  };
  const goToMonth = () => {
    navigate(`/workers/Reportes/Mensual`);
  };
  return (
    <div className="Reportes">
      <div
        className="header-page-worker"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div>
          {" "}
          <Button onClick={handleDownloadPdf}>Descargar PDF</Button>
        </div>

        <div>
          <Button onClick={goToDay} disabled>
            Reporte diario
          </Button>
          <Button onClick={goToWeek}>Reporte semanal</Button>
          <Button onClick={goToMonth}>Reporte mensual</Button>
        </div>
      </div>
      <div
        ref={printRef}
        style={{
          padding: "10px",
        }}
      >
        <h2 style={{ paddingLeft: "7%" }}>Reporte diario</h2>
        <Container
          style={{
            padding: "40px",
          }}
          fluid
        >
          <Row>
            <Col lg="3" sm="6">
              <Card className="card-stats">
                <Card.Body>
                  <Row>
                    <Col xs="5">
                      <Icon
                        name="audio description"
                        color="yellow"
                        size="huge"
                      />
                      <i className="nc-icon nc-chart text-warning"></i>
                    </Col>
                    <Col xs="7">
                      <div className="numbers">
                        <p className="card-category">Total de ventas</p>
                        <Card.Title as="h4">{total_pago}</Card.Title>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="3" sm="6">
              <Card className="card-stats">
                <Card.Body>
                  <Row>
                    <Col xs="5">
                      <Icon
                        name="audio description"
                        color="yellow"
                        size="huge"
                      />
                      <i className="nc-icon nc-light-3 text-success"></i>
                    </Col>
                    <Col xs="7">
                      <div className="numbers">
                        <p className="card-category">Ingresos</p>
                        <Card.Title as="h4">$ {totalIngresos}</Card.Title>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="3" sm="6">
              <Card className="card-stats">
                <Card.Body>
                  <Row>
                    <Col xs="5">
                      <Icon
                        name="audio description"
                        color="yellow"
                        size="huge"
                      />
                      <i className="nc-icon nc-vector text-danger"></i>
                    </Col>
                    <Col xs="7">
                      <div className="numbers">
                        <p className="card-category">Egresos</p>
                        <Card.Title as="h4">$ {totalEgresos}</Card.Title>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col lg="3" sm="6">
              <Card className="card-stats">
                <Card.Body>
                  <Row>
                    <Col xs="5">
                      <Icon
                        name="audio description"
                        color="yellow"
                        size="huge"
                      />
                      <i className="nc-icon nc-favourite-28 text-primary"></i>
                    </Col>
                    <Col xs="7">
                      <div className="numbers">
                        <p className="card-category">Balance</p>
                        <Card.Title as="h4">
                          $ {totalIngresos - totalEgresos}
                        </Card.Title>
                      </div>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md="8">
              <Card>
                <Card.Header>
                  <Card.Title as="h4">
                    Precio de venta y costo de preparacion de recetas
                  </Card.Title>
                  <p className="card-category">
                    ordenados de mayor a menor utilidad
                  </p>
                </Card.Header>
                <Card.Body>
                  <div className="ct-chart" id="chartHours">
                    <Barras />
                  </div>
                </Card.Body>
              </Card>
            </Col>
            <Col md="4">
              <Card>
                <Card.Header>
                  <Card.Title as="h4">Productos más vendidos</Card.Title>
                </Card.Header>
                <Card.Body>
                  <div
                    className="ct-chart ct-perfect-fourth"
                    id="chartPreferences"
                  >
                    <Dona today={today} />
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col md="12">
              <Card>
                <Card.Header>
                  <Card.Title as="h4">Ventas del dia segun hora</Card.Title>
                </Card.Header>
                <Card.Body>
                  <div className="ct-chart" id="chartActivity">
                    <Grafico />
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
}
export function getCurrentDate(separator = "") {
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  return `${date}${separator}${
    month < 10 ? `0${month}` : `${month}`
  }${separator}${year}`;
}

export function getCurrentDatelf(separator = "") {
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  return `${year}${separator}${
    month < 10 ? `0${month}` : `${month}`
  }${separator}${date < 10 ? `0${date}` : `${date}`}`;
}
