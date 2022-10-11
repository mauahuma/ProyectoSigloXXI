import { WorkersLayout } from "../layouts";
import {
  HomeAdmin,
  UsersWorker,
  MesasWorker,
  PreparacionesWorker,
  IngredientesWorker,
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
    path: "/Workers/Preparaciones",
    layout: WorkersLayout,
    component: PreparacionesWorker,
    exact: true,
  },
  {
    path: "/Workers/Ingredientes",
    layout: WorkersLayout,
    component: IngredientesWorker,
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
