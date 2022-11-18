import React from "react";
import { Grid } from "semantic-ui-react";
import { Grafico, Dona, Cake, Cards } from "../../components/Workers/Dashboard";
import "./Reportes.scss";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";
import { Button, Form } from "react-bootstrap";
export function ReportesWorker() {
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
    pdf.save(`Reporte ${date}.pdf`);
  };

  return (
    <div>
      <Button onClick={handleDownloadPdf}>Descargar PDF</Button>
      <Form>
        <Form.Control type="date"></Form.Control>
      </Form>
      <div className="Dashboard" ref={printRef}>
        <Cards />
        <div className="Dashboard__Menu">
          <Grafico />
        </div>
        <div className="Dashboard__Content">
          <Grid>
            <Dona />
            <Cake />
          </Grid>
        </div>
        <div className="Dashboard__Final"></div>
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
