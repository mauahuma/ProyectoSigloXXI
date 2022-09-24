import routesWorkers from "./routes.workers";
import routesClients from "./routes.clients";
import { Error404 } from "../Pages";
import { BasicLayout } from "../layouts";
const routes = [
  ...routesWorkers,
  ...routesClients,
  {
    layout: BasicLayout,
    component: Error404,
  },
];

export default routes;
