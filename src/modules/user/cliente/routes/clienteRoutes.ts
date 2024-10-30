import { Router } from "express";

import { clienteController } from "../controller/controller";

const routes = Router({ mergeParams: true });

const clientecontroller = new clienteController();

routes.get('/clientes', clientecontroller.getCliente);
routes.post('/cliente', clientecontroller.createCliente);

export default routes;