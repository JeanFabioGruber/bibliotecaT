import { Router } from "express";
import pedidoRoutes from "../pedido/routes/pedidoRoutes";

const routes = Router({ mergeParams: true });

routes.use(pedidoRoutes);

export default routes;

