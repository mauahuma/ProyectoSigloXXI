import React from "react";
import { Grid, Button } from "semantic-ui-react";
import { Grafico, Dona, Cake, Cards } from "../../components/Workers/Dashboard";
import "./Reportes.scss";
import html2canvas from "html2canvas";
import { jsPDF } from "jspdf";

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
    <div className="Dashboard" ref={printRef}>
      <Button type="button" onClick={handleDownloadPdf}>
        Descargar PDF
      </Button>
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
