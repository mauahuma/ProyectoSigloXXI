import React, { useState, useEffect } from "react";
import { Form, Button, Dropdown } from "semantic-ui-react";
import "./AddEditBodegaForm.scss";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useBodega, useProveedores } from "../../../../hooks";
import { map } from "lodash";

export function AddEditBodegaForm(props) {
  const { onClose, onRefetch, producto } = props;
  const [proveedoresFormato, setProveedoresFormato] = useState([]);
  const { addProducto, updateProducto } = useBodega();
  const { proveedores, getProveedores } = useProveedores();
  useEffect(() => getProveedores(), []);
  useEffect(() => {
    setProveedoresFormato(formatDropdownData(proveedores));
  }, [proveedores]);
  const formik = useFormik({
    initialValues: initialValues(producto),
    validationSchema: Yup.object(producto ? updateSchema() : newSchema()),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      try {
        if (producto) {
          if (formValue.stock_actual > formValue.stock_critico) {
            formValue.necesita_Stock = false;
            await updateProducto(producto.id, formValue);
          } else {
            formValue.necesita_Stock = true;
            await updateProducto(producto.id, formValue);
          }
        } else {
          if (formValue.stock_actual > formValue.stock_critico) {
            formValue.necesita_Stock = false;
            await addProducto(formValue);
          } else {
            formValue.necesita_Stock = true;
            await addProducto(formValue);
          }
        }
        onRefetch();
        onClose();
      } catch (error) {
        console.log(error);
      }
    },
  });
  return (
    <Form className="add-edit-bodega-form" onSubmit={formik.handleSubmit}>
      <label>Nombre producto:</label>
      <Form.Input
        name="nombre"
        placeholder="Nombre Producto"
        value={formik.values.nombre}
        onChange={formik.handleChange}
        error={formik.errors.nombre}
      ></Form.Input>
      <label>Medidas producto:</label>
      <Form.Input
        name="medida"
        placeholder="Medidas Producto"
        value={formik.values.medida}
        onChange={formik.handleChange}
        error={formik.errors.medida}
      ></Form.Input>
      <label>Stock actual:</label>
      <Form.Input
        name="stock_actual"
        placeholder="stock actual"
        value={formik.values.stock_actual}
        onChange={formik.handleChange}
        error={formik.errors.stock_actual}
      ></Form.Input>
      <label>Stock crítico:</label>

      <Form.Input
        name="stock_critico"
        placeholder="stock crítico"
        value={formik.values.stock_critico}
        onChange={formik.handleChange}
        error={formik.errors.stock_critico}
      ></Form.Input>
      <label>Valor:</label>

      <Form.Input
        name="valor"
        placeholder="Valor"
        value={formik.values.valor}
        onChange={formik.handleChange}
        error={formik.errors.valor}
      ></Form.Input>
      <label>Proveedor</label>
      <Dropdown
        placeholder="Proveedor"
        fluid
        selection
        search
        options={proveedoresFormato}
        value={formik.values.proveedor}
        error={formik.errors.proveedor}
        onChange={(_, data) => formik.setFieldValue("proveedor", data.value)}
      />
      <Button
        type="submit"
        primary
        fluid
        content={producto ? "Actualizar" : "Crear"}
      />
    </Form>
  );
}
function formatDropdownData(data) {
  return map(data, (item) => ({
    key: item.id,
    text: item.nombre,
    value: item.id,
  }));
}

function initialValues(data) {
  return {
    nombre: data?.nombre || "",
    medida: data?.medida || "",
    stock_actual: data?.stock_actual || "",
    stock_critico: data?.stock_critico || "",
    valor: data?.valor || "",

    proveedor: data?.proveedor || "",
  };
}

function newSchema() {
  return {
    nombre: Yup.string().required(true),
    medida: Yup.string().required(true),
    stock_actual: Yup.number().required(true),
    stock_critico: Yup.number().required(true),
    valor: Yup.number().required(true),

    proveedor: Yup.number().required(true),
  };
}
function updateSchema() {
  return {
    nombre: Yup.string().required(true),
    medida: Yup.string().required(true),
    stock_actual: Yup.number().required(true),
    stock_critico: Yup.number().required(true),
    valor: Yup.number().required(true),

    proveedor: Yup.number().required(true),
  };
}
