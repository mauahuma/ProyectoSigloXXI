import { BASE_API } from "../utils/constants";

export async function getPedidosPorProveedorApi(proveedor) {
  try {
    const proveedorFilter = `idProveedor=${proveedor}&activo=true`;

    const url = `${BASE_API}/api/pedidosProveedor/?${proveedorFilter}`;
    const response = await fetch(url);
    const result = await response.json();
    return result;
  } catch (error) {
    throw error;
  }
}

export async function addPedidoProveedorApi(idprod, idprov, cant, val) {
  try {
    const url = `${BASE_API}/api/pedidosProveedor/`;

    const params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        idProducto: idprod,
        idProveedor: idprov,
        cantidadSolicitada: cant,
        valorSolicitado: val,
        activo: true,
      }),
    };
    await fetch(url, params);
  } catch (error) {
    throw error;
  }
}

export async function updatePedidoProveedorApi(idPedido, data) {
  try {
    const url = `${BASE_API}/api/pedidosProveedor/${idPedido}/`;
    const params = {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    await fetch(url, params);

    const url2 = `${BASE_API}/api/finanzas/`;
    const params2 = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        tipo: "EGRESO",
        monto: data.cantidadRecibida * data.valorRecibido,
        fecha: data.fechaRecepcion,
        detalle: `Egreso correspondiente a pedido n°: ${idPedido}`,
      }),
    };
    await fetch(url2, params2);
  } catch (error) {
    throw error;
  }
}
