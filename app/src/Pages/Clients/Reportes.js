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
} from "../../components/Workers/Dashboard";
import axios from "axios";

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
          <Button onClick={handleDownloadPdf} disabled>
            Reporte diario
          </Button>
          <Button onClick={handleDownloadPdf}>Reporte semanal</Button>
          <Button onClick={handleDownloadPdf}>Reporte mensual</Button>
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
                  <Card.Title as="h4">Users Behavior</Card.Title>
                  <p className="card-category">24 Hours performance</p>
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
                  <Card.Title as="h4">Productos mas vendidos</Card.Title>
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
            <Col md="6">
              <Card>
                <Card.Header>
                  <Card.Title as="h4">2017 Sales</Card.Title>
                  <p className="card-category">All products including Taxes</p>
                </Card.Header>
                <Card.Body>
                  <div className="ct-chart" id="chartActivity">
                    <Grafico />
                  </div>
                </Card.Body>
                <Card.Footer>
                  <div className="legend">
                    <i className="fas fa-circle text-info"></i>
                    Tesla Model S <i className="fas fa-circle text-danger"></i>
                    BMW 5 Series
                  </div>
                  <hr></hr>
                  <div className="stats">
                    <i className="fas fa-check"></i>
                    Data information certified
                  </div>
                </Card.Footer>
              </Card>
            </Col>
            <Col md="6">
              <Card className="card-tasks">
                <Card.Header>
                  <Card.Title as="h4">Tasks</Card.Title>
                  <p className="card-category">Backend development</p>
                </Card.Header>
                <Card.Body>
                  <div className="table-full-width">
                    <Table>
                      <tbody>
                        <tr>
                          <td>
                            <Form.Check className="mb-1 pl-0">
                              <Form.Check.Label>
                                <Form.Check.Input
                                  defaultValue=""
                                  type="checkbox"
                                ></Form.Check.Input>
                                <span className="form-check-sign"></span>
                              </Form.Check.Label>
                            </Form.Check>
                          </td>
                          <td>
                            Sign contract for "What are conference organizers
                            afraid of?"
                          </td>
                          <td className="td-actions text-right">
                            <OverlayTrigger
                              overlay={
                                <Tooltip id="tooltip-488980961">
                                  Edit Task..
                                </Tooltip>
                              }
                            >
                              <Button
                                className="btn-simple btn-link p-1"
                                type="button"
                                variant="info"
                              >
                                <i className="fas fa-edit"></i>
                              </Button>
                            </OverlayTrigger>
                            <OverlayTrigger
                              overlay={
                                <Tooltip id="tooltip-506045838">
                                  Remove..
                                </Tooltip>
                              }
                            >
                              <Button
                                className="btn-simple btn-link p-1"
                                type="button"
                                variant="danger"
                              >
                                <i className="fas fa-times"></i>
                              </Button>
                            </OverlayTrigger>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <Form.Check className="mb-1 pl-0">
                              <Form.Check.Label>
                                <Form.Check.Input
                                  defaultChecked
                                  defaultValue=""
                                  type="checkbox"
                                ></Form.Check.Input>
                                <span className="form-check-sign"></span>
                              </Form.Check.Label>
                            </Form.Check>
                          </td>
                          <td>
                            Lines From Great Russian Literature? Or E-mails From
                            My Boss?
                          </td>
                          <td className="td-actions text-right">
                            <OverlayTrigger
                              overlay={
                                <Tooltip id="tooltip-537440761">
                                  Edit Task..
                                </Tooltip>
                              }
                            >
                              <Button
                                className="btn-simple btn-link p-1"
                                type="button"
                                variant="info"
                              >
                                <i className="fas fa-edit"></i>
                              </Button>
                            </OverlayTrigger>
                            <OverlayTrigger
                              overlay={
                                <Tooltip id="tooltip-21130535">
                                  Remove..
                                </Tooltip>
                              }
                            >
                              <Button
                                className="btn-simple btn-link p-1"
                                type="button"
                                variant="danger"
                              >
                                <i className="fas fa-times"></i>
                              </Button>
                            </OverlayTrigger>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <Form.Check className="mb-1 pl-0">
                              <Form.Check.Label>
                                <Form.Check.Input
                                  defaultChecked
                                  defaultValue=""
                                  type="checkbox"
                                ></Form.Check.Input>
                                <span className="form-check-sign"></span>
                              </Form.Check.Label>
                            </Form.Check>
                          </td>
                          <td>
                            Flooded: One year later, assessing what was lost and
                            what was found when a ravaging rain swept through
                            metro Detroit
                          </td>
                          <td className="td-actions text-right">
                            <OverlayTrigger
                              overlay={
                                <Tooltip id="tooltip-577232198">
                                  Edit Task..
                                </Tooltip>
                              }
                            >
                              <Button
                                className="btn-simple btn-link p-1"
                                type="button"
                                variant="info"
                              >
                                <i className="fas fa-edit"></i>
                              </Button>
                            </OverlayTrigger>
                            <OverlayTrigger
                              overlay={
                                <Tooltip id="tooltip-773861645">
                                  Remove..
                                </Tooltip>
                              }
                            >
                              <Button
                                className="btn-simple btn-link p-1"
                                type="button"
                                variant="danger"
                              >
                                <i className="fas fa-times"></i>
                              </Button>
                            </OverlayTrigger>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <Form.Check className="mb-1 pl-0">
                              <Form.Check.Label>
                                <Form.Check.Input
                                  defaultChecked
                                  type="checkbox"
                                ></Form.Check.Input>
                                <span className="form-check-sign"></span>
                              </Form.Check.Label>
                            </Form.Check>
                          </td>
                          <td>
                            Create 4 Invisible User Experiences you Never Knew
                            About
                          </td>
                          <td className="td-actions text-right">
                            <OverlayTrigger
                              overlay={
                                <Tooltip id="tooltip-422471719">
                                  Edit Task..
                                </Tooltip>
                              }
                            >
                              <Button
                                className="btn-simple btn-link p-1"
                                type="button"
                                variant="info"
                              >
                                <i className="fas fa-edit"></i>
                              </Button>
                            </OverlayTrigger>
                            <OverlayTrigger
                              overlay={
                                <Tooltip id="tooltip-829164576">
                                  Remove..
                                </Tooltip>
                              }
                            >
                              <Button
                                className="btn-simple btn-link p-1"
                                type="button"
                                variant="danger"
                              >
                                <i className="fas fa-times"></i>
                              </Button>
                            </OverlayTrigger>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <Form.Check className="mb-1 pl-0">
                              <Form.Check.Label>
                                <Form.Check.Input
                                  defaultValue=""
                                  type="checkbox"
                                ></Form.Check.Input>
                                <span className="form-check-sign"></span>
                              </Form.Check.Label>
                            </Form.Check>
                          </td>
                          <td>Read "Following makes Medium better"</td>
                          <td className="td-actions text-right">
                            <OverlayTrigger
                              overlay={
                                <Tooltip id="tooltip-160575228">
                                  Edit Task..
                                </Tooltip>
                              }
                            >
                              <Button
                                className="btn-simple btn-link p-1"
                                type="button"
                                variant="info"
                              >
                                <i className="fas fa-edit"></i>
                              </Button>
                            </OverlayTrigger>
                            <OverlayTrigger
                              overlay={
                                <Tooltip id="tooltip-922981635">
                                  Remove..
                                </Tooltip>
                              }
                            >
                              <Button
                                className="btn-simple btn-link p-1"
                                type="button"
                                variant="danger"
                              >
                                <i className="fas fa-times"></i>
                              </Button>
                            </OverlayTrigger>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <Form.Check className="mb-1 pl-0">
                              <Form.Check.Label>
                                <Form.Check.Input
                                  defaultValue=""
                                  disabled
                                  type="checkbox"
                                ></Form.Check.Input>
                                <span className="form-check-sign"></span>
                              </Form.Check.Label>
                            </Form.Check>
                          </td>
                          <td>Unfollow 5 enemies from twitter</td>
                          <td className="td-actions text-right">
                            <OverlayTrigger
                              overlay={
                                <Tooltip id="tooltip-938342127">
                                  Edit Task..
                                </Tooltip>
                              }
                            >
                              <Button
                                className="btn-simple btn-link p-1"
                                type="button"
                                variant="info"
                              >
                                <i className="fas fa-edit"></i>
                              </Button>
                            </OverlayTrigger>
                            <OverlayTrigger
                              overlay={
                                <Tooltip id="tooltip-119603706">
                                  Remove..
                                </Tooltip>
                              }
                            >
                              <Button
                                className="btn-simple btn-link p-1"
                                type="button"
                                variant="danger"
                              >
                                <i className="fas fa-times"></i>
                              </Button>
                            </OverlayTrigger>
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </Card.Body>
                <Card.Footer>
                  <hr></hr>
                  <div className="stats">
                    <i className="now-ui-icons loader_refresh spin"></i>
                    Updated 3 minutes ago
                  </div>
                </Card.Footer>
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
  }${separator}${date}`;
}
