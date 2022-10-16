import { ClientLayout } from "../layouts";
import { Home, CartaMesa } from "../Pages/Clients";
const routesClients = [
  {
    path: "/",
    layout: ClientLayout,
    component: Home,
  },
  {
    path: "/Client/:numero_mesa",
    layout: ClientLayout,
    component: CartaMesa,
  },
];

export default routesClients;
