import { WorkersLayout } from "../layouts";
import {
  HomeAdmin,
  UsersWorker,
  MesasWorker,
  PedidosWorker,
} from "../Pages/Workers";
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
    path: "/Workers/Mesas",
    layout: WorkersLayout,
    component: MesasWorker,
    exact: true,
  },
  {
    path: "/Workers/Pedidos",
    layout: WorkersLayout,
    component: PedidosWorker,
    exact: true,
  },
];

export default routesWorkers;
