import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { usePedidoProveedor } from "../../../../hooks";
import { Form, Button, Checkbox, Image } from "semantic-ui-react";
import Moment from "moment";
export function FormPedido(props) {
  const { onClose, onRefetch, pedido } = props;
  const { updatePedidoProveedor } = usePedidoProveedor();
  const formik = useFormik({
    initialValues: initialValues(pedido),
    validationSchema: Yup.object(pedido ? updateSchema() : newSchema()),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        await updatePedidoProveedor(pedido.id, formValue);
        // else await addPreparacion(formValue);

        onRefetch();
        onClose();
      } catch (error) {
        console.log(error);
      }
    },
  });

  return (
    <Form
      className="add-edit-preparaciones-form"
      onSubmit={formik.handleSubmit}
    >
      <label>Cantidad solicitada:</label>
      <Form.Input
        name="cantidadSolicitada"
        placeholder="Cantidad solicitada"
        value={formik.values.cantidadSolicitada}
        onChange={formik.handleChange}
        error={formik.errors.cantidadSolicitada}
        disabled
      ></Form.Input>

      <label>Cantidad recibida:</label>
      <Form.Input
        name="cantidadRecibida"
        placeholder="Cantidad recibida"
        value={formik.values.cantidadRecibida}
        onChange={formik.handleChange}
        error={formik.errors.cantidadRecibida}
      ></Form.Input>
      <label>Precio anterior:</label>
      <Form.Input
        name="valorSolicitado"
        placeholder="Precio anterior"
        value={formik.values.valorSolicitado}
        onChange={formik.handleChange}
        error={formik.errors.valorSolicitado}
        disabled
      ></Form.Input>
      <label>Precio real:</label>
      <Form.Input
        name="valorRecibido"
        placeholder="Precio real"
        value={formik.values.valorRecibido}
        onChange={formik.handleChange}
        error={formik.errors.valorRecibido}
      ></Form.Input>
      <Button
        type="submit"
        primary
        fluid
        content={pedido ? "Actualizar" : "Crear"}
      />
    </Form>
  );
}

function initialValues(data) {
  const fecha = Moment().format("YYYY-MM-DD");
  return {
    cantidadSolicitada: data?.cantidadSolicitada || "",
    cantidadRecibida: data?.cantidadSolicitada || "",
    valorSolicitado: data?.valorSolicitado || "",
    valorRecibido: data?.valorSolicitado || "",
    activo: false,
    fechaRecepcion: fecha,
  };
}

function newSchema() {
  return {
    cantidadSolicitada: Yup.number().required(false),
    cantidadRecibida: Yup.number().required(false),
    valorSolicitado: Yup.number().required(false),
    valorRecibido: Yup.number().required(false),
  };
}
function updateSchema() {
  return {
    cantidadSolicitada: Yup.number().required(false),
    cantidadRecibida: Yup.number().required(false),
    valorSolicitado: Yup.number().required(false),
    valorRecibido: Yup.number().required(false),
  };
}
