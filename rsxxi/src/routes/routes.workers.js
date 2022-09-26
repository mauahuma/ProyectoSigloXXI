import { WorkersLayout } from "../layouts";
import { HomeAdmin } from "../Pages/Workers";
const routesWorkers = [
  {
    path: "/Workers",
    layout: WorkersLayout,
    component: HomeAdmin,
    exact: true,
  },
];

export default routesWorkers;
