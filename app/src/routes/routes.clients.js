import { ClientLayout, HomeLayout, PedidosLayout } from "../layouts";
import {
  Home,
  Preparaciones,
  Carrito,
  HistorialPedidos,
  Registrarse,
  Ingresar,
  Contactanos,
} from "../Pages/Clients";
import { Carta } from "../Pages/Clients/Carta";
import { ComandCa } from "../Pages/Clients/ComandCa";
const routesClients = [
  {
    path: "/",
    layout: HomeLayout,
    component: Home,
  },
  {
    path: "/Registrarse",
    layout: HomeLayout,
    component: Registrarse,
  },
  {
    path: "/Ingresar",
    layout: HomeLayout,
    component: Ingresar,
  },
  {
    path: "/Contactanos",
    layout: HomeLayout,
    component: Contactanos,
  },
  {
    path: "/Carta",
    layout: ClientLayout,
    component: Carta,
  },
  {
    path: "/Client/:numero_mesa",
    layout: PedidosLayout,
    component: ComandCa,
  },
  {
    path: "/client/:numero_mesa/carrito",
    layout: PedidosLayout,
    component: Carrito,
    exact: true,
  },
  {
    path: "/client/:numero_mesa/pedidos",
    layout: PedidosLayout,
    component: HistorialPedidos,
    exact: true,
  },
];

export default routesClients;