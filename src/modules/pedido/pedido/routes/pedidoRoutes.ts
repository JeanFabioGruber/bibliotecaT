import { Router } from "express";

import { pedidoController } from "../controller/pedidoController";

const pedidoRoutes = Router({ mergeParams: true });

const pedidocontroller = new pedidoController();

pedidoRoutes.get("/pedido", pedidocontroller.getPedido);
pedidoRoutes.post("/pedido", pedidocontroller.adicionarPedido);
pedidoRoutes.put("/pedido/:id", pedidocontroller.updatePedido);
pedidoRoutes.delete("/pedido/:id", pedidocontroller.deletePedido);
pedidoRoutes.put("/devolverpedido/:id", pedidocontroller.devolverPedido);


export default pedidoRoutes;