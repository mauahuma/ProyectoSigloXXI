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
  ReportesWorker,
  ReservasWorker,
} from "../Pages/Workers";
import { Reportes } from "../Pages/Clients";

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
  {
    path: "/Workers/Reportes",
    layout: WorkersLayout,
    component: Reportes,
    exact: true,
  },
  {
    path: "/Workers/Reportes/Semanal",
    layout: WorkersLayout,
    component: Reportes,
    exact: true,
  },
  {
    path: "/Workers/Reportes/Mensual",
    layout: WorkersLayout,
    component: Reportes,
    exact: true,
  },
  {
    path: "/Workers/Reservas",
    layout: WorkersLayout,
    component: ReservasWorker,
    exact: true,
  },
];

export default routesWorkers;
