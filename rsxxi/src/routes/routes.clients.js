import { ClientLayout } from "../layouts";
import {
  Home,
  Preparaciones,
  Carrito,
  HistorialPedidos,
} from "../Pages/Clients";
import { Carta } from "../Pages/Clients/Carta";
import { ComandCa } from "../Pages/Clients/ComandCa";
const routesClients = [
  {
    path: "/",
    layout: ClientLayout,
    component: Home,
  },
  {
    path: "/Carta",
    layout: ClientLayout,
    component: Carta,
  },
  {
    path: "/Comand",
    layout: ClientLayout,
    component: ComandCa,
  },
  {
    path: "/Client/:numero_mesa",
    layout: ClientLayout,
    component: Preparaciones,
  },
  {
    path: "/client/:numero_mesa/carrito",
    layout: ClientLayout,
    component: Carrito,
    exact: true,
  },
  {
    path: "/client/:numero_mesa/pedidos",
    layout: ClientLayout,
    component: HistorialPedidos,
    exact: true,
  },
];

export default routesClients;
