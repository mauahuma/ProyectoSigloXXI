import { ClientLayout } from "../layouts";
import { Home } from "../Pages/Clients";
const routesClients = [
  {
    path: "/",
    layout: ClientLayout,
    component: Home,
  },
];

export default routesClients;
