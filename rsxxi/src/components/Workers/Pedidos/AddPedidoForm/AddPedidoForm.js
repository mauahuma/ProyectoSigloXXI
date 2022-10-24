import React, { useState, useEffect } from "react";
import { Form, Image, Button, Dropdown } from "semantic-ui-react";
import { map } from "lodash";
import { useFormik } from "formik";
import * as Yup from "yup";
import { usePreparaciones, usePedidos } from "../../../../hooks";
import "./AddPedidoForm.scss";

export function AddPedidoForm(props) {
  const { idMesa, openCloseModal, onReloadOrders } = props;
  const [productsFormat, setProductsFormat] = useState([]);
  const [productsData, setProductsData] = useState([]);
  const { preparaciones, getPreparaciones, getPreparacionById } =
    usePreparaciones();
  const { addPedidoaMesa } = usePedidos();

  useEffect(() => getPreparaciones(), []);
  useEffect(
    () => setProductsFormat(formatDropdownData(preparaciones)),
    [preparaciones]
  );

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,
    onSubmit: async (formValue) => {
      for await (const idPreparacion of formValue.preparaciones) {
        await addPedidoaMesa(idMesa, idPreparacion);
      }

      onReloadOrders();
      openCloseModal();
    },
  });

  useEffect(() => addProductList(), [formik.values]);

  const addProductList = async () => {
    try {
      const preparacionesId = formik.values.preparaciones;

      const arrayTemp = [];
      for await (const idPreparacion of preparacionesId) {
        const response = await getPreparacionById(idPreparacion);
        arrayTemp.push(response);
      }
      setProductsData(arrayTemp);
    } catch (error) {
      console.log(error);
    }
  };

  const removeProductList = (index) => {
    const idPreparaciones = [...formik.values.preparaciones];
    idPreparaciones.splice(index, 1);
    formik.setFieldValue("preparaciones", idPreparaciones);
  };

  return (
    <Form className="add-order-form" onSubmit={formik.handleSubmit}>
      <Dropdown
        placeholder="Preparaciones"
        fluid
        selection
        search
        options={productsFormat}
        value={null}
        onChange={(_, data) =>
          formik.setFieldValue("preparaciones", [
            ...formik.values.preparaciones,
            data.value,
          ])
        }
      />

      <div className="add-order-form__list">
        {map(productsData, (product, index) => (
          <div className="add-order-form__list-product" key={index}>
            <div>
              <Image
                src={
                  require("../../../../assets/Imagenes/Mantencion.jpg").default
                }
                avatar
                size="tiny"
              />
              <span>{product.nombre}</span>
            </div>
            <Button
              type="button"
              content="Eliminar"
              basic
              color="red"
              onClick={() => removeProductList(index)}
            />
          </div>
        ))}
      </div>

      <Button
        type="submit"
        primary
        fluid
        content="Añadir productos a la mesa"
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

function initialValues() {
  return {
    preparaciones: [],
  };
}

function validationSchema() {
  return {
    preparaciones: Yup.array().required(true),
  };
}
