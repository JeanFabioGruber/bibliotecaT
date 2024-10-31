import { Router } from "express";

import { clienteController } from "../controller/controller";

const routes = Router({ mergeParams: true });

const clientecontroller = new clienteController();

routes.get('/clientes', clientecontroller.getCliente);
routes.post('/cliente', clientecontroller.createCliente);
routes.put('/cliente/:id', clientecontroller.updateCliente);
routes.delete('/cliente/:id', clientecontroller.deleteCliente);
routes.get('/cliente/:id', clientecontroller.getClienteById);

export default routes;