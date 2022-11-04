import { WorkersLayout } from "../layouts";
import {
  HomeAdmin,
  UsersWorker,
  MesasWorker,
  PreparacionesWorker,
  PagosWorker,
  PedidosWorker,
  DetallesMesaWorker,
  BodegaWorker,
  CocinaWorker,
  ProveedoresWorker,
  FinanzasWorker,
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
    path: "/Workers/Pagos",
    layout: WorkersLayout,
    component: PagosWorker,
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
  {
    path: "/Workers/Cocina",
    layout: WorkersLayout,
    component: CocinaWorker,
    exact: true,
  },
  {
    path: "/Workers/Proveedores",
    layout: WorkersLayout,
    component: ProveedoresWorker,
    exact: true,
  },
  {
    path: "/Workers/Finanzas",
    layout: WorkersLayout,
    component: FinanzasWorker,
    exact: true,
  },
];

export default routesWorkers;
