import { Router } from "express";
import bibliotecaRoutes from "../../modules/bibioteca/routesBiblioteca/bibliotecaRoutes"
import userRoutes from "../../modules/user/routesUser/userRoutes"
import gpedidosRoutes from "../../modules/pedido/routesPedidoG/gpedidosRoutes"

const routes = Router({mergeParams: true})

routes.use("/api/biblioteca", bibliotecaRoutes)
routes.use("/api/user", userRoutes)
routes.use("/api/pedido", gpedidosRoutes)

export default routes;