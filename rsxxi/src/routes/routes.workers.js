import {WorkersLayout} from "../layouts";
import {LoginWorker} from "../Pages/Workers";
const routesWorkers = [

    {
        path:"/Workers",
        layout: WorkersLayout,
        component: LoginWorker,
        
    },
];

export default routesWorkers;