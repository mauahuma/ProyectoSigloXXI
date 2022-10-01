import { WorkersLayout } from "../layouts";
import { HomeAdmin, UsersWorker, PedidosWorkers } from "../Pages/Workers";
const routesWorkers = [
  {
    path: "/Workers",
    layout: WorkersLayout,
    component: HomeAdmin,
    exact: true,
  },
  {
    path: "/Workers/Usuarios",
    layout: WorkersLayout,
    component: UsersWorker,
    exact: true,
  },
  {
    path: "/Workers/Pedidos",
    layout: WorkersLayout,
    component: PedidosWorkers,
    exact: true,
  },
];

export default routesWorkers;
