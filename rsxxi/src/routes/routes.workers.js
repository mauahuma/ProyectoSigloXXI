import { WorkersLayout } from "../layouts";
import { HomeAdmin, UsersWorker } from "../Pages/Workers";
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
];

export default routesWorkers;
