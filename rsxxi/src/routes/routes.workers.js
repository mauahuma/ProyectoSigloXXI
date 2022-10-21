import { WorkersLayout } from "../layouts";
import {
  HomeAdmin,
  UsersWorker,
  MesasWorker,
  PreparacionesWorker,
  IngredientesWorker,
  PedidosWorker,
  DetallesMesaWorker,
  BodegaWorker,
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
  {
    path: "/Workers/Bodega",
    layout: WorkersLayout,
    component: BodegaWorker,
    exact: true,
  },
  {
    path: "/Workers/Mesa/:id",
    layout: WorkersLayout,
    component: DetallesMesaWorker,
    exact: true,
  },
];

export default routesWorkers;
