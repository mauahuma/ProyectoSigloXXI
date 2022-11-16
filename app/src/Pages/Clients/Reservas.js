import React from "react";
import "./Reservas.scss";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useReservas } from "../../hooks";
import { Form, Button } from "react-bootstrap";
import { Icon } from "semantic-ui-react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export function Reservas() {
  const navigate = useNavigate();

  const opcionesC = [
    { key: 1, text: "1", value: 1 },
    { key: 2, text: "2", value: 2 },
    { key: 3, text: "3", value: 3 },
    { key: 4, text: "4", value: 4 },
    { key: 5, text: "5", value: 5 },
    { key: 6, text: "6", value: 6 },
    { key: 7, text: "7", value: 7 },
    { key: 8, text: "8", value: 8 },
    { key: 9, text: "9", value: 9 },
    { key: 10, text: "10", value: 10 },
  ];
  const opcionesH = [
    { key: 15, text: "15:00", value: "15:00" },
    { key: 152, text: "15:30", value: "15:30" },
    { key: 16, text: "16:00", value: "16:00" },
    { key: 162, text: "16:30", value: "16:30" },
    { key: 17, text: "17:00", value: "17:00" },
    { key: 172, text: "17:30", value: "17:30" },
    { key: 18, text: "18:00", value: "18:00" },
    { key: 182, text: "18:30", value: "18:30" },
    { key: 19, text: "19:00", value: "19:00" },
    { key: 192, text: "19:30", value: "19:30" },
    { key: 20, text: "20:00", value: "20:00" },
  ];
  const { addReserva } = useReservas();
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(newSchema()),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        await addReserva(formValue);
        toast.success(`Reserva creada exitosamente`);

        navigate(`/`);
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <div className="Reservas">
      <Form onSubmit={formik.handleSubmit}>
        <Form.Label as="h2">
          <Icon name="calendar alternate" />
          <Form.Label>Realiza tu reserva</Form.Label>{" "}
        </Form.Label>
        <Form.Label>Completa todos los campos</Form.Label>
        <Form.Label as="h1">Datos personales</Form.Label>
        <Form.Group>
          <Form.Control
            id="nombre"
            placeholder="Nombre y apellido"
            value={formik.values.nombre}
            onChange={formik.handleChange}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.nombre}
          </Form.Control.Feedback>
          <Form.Control
            id="correo"
            placeholder="Correo electrónico"
            value={formik.values.correo}
            onChange={formik.handleChange}
          />
          <Form.Control.Feedback type="invalid">
            {formik.errors.correo}
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Label as="h1">Seleccione la cantidad de comensales</Form.Label>
        <Form.Control
          as="select"
          name="comensales"
          placeholder="Cantidad de comensales"
          value={formik.values.comensales}
          onChange={formik.handleChange}

          //   onChange={(_, data) => formik.setFieldValue("comensales", data)}
        >
          {opcionesC.map((opt, i) => (
            <option key={i} value={opt.value}>
              {opt.value}
            </option>
          ))}
        </Form.Control>

        <Form.Control.Feedback type="invalid">
          {formik.errors.comensales}
        </Form.Control.Feedback>
        <Form.Label as="h1">Seleccione la fecha disponible</Form.Label>
        <Form.Control
          type="date"
          selected={formik.values.fecha}
          className="form-control"
          name="fecha"
          onChange={formik.handleChange}
        />
        <Form.Control.Feedback type="invalid">
          {formik.errors.fecha}
        </Form.Control.Feedback>
        <Form.Label as="h1">Seleccione el rango horario</Form.Label>
        <Form.Select
          name="hora"
          placeholder="Seleccionar Hora"
          value={formik.values.hora}
          onChange={formik.handleChange}
        >
          {opcionesH.map((opt, i) => (
            <option key={i} value={opt.value}>
              {opt.text}
            </option>
          ))}
        </Form.Select>
        <Form.Control.Feedback type="invalid">
          {formik.errors.hora}
        </Form.Control.Feedback>
        <Button color="green" size="huge" type="submit">
          Confirmar Reservar
        </Button>
      </Form>
    </div>
  );
}

function initialValues(data) {
  return {
    nombre: data?.nombre || "",
    correo: data?.correo || "",
    comensales: data?.comensales || "",
    fecha: null,
    hora: data?.hora || "",
    active: true,
  };
}

function newSchema() {
  return {
    nombre: Yup.string().required(true),
    correo: Yup.string().required(true),
    comensales: Yup.number().required(true),
    fecha: Yup.date().required(true),
    hora: Yup.string().required(true),
  };
}
