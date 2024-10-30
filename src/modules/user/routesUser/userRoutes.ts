import { Router } from "express";
import clienteRoutes from "../cliente/routes/clienteRoutes";

const routes = Router({ mergeParams: true });

routes.use(clienteRoutes);

export default routes;