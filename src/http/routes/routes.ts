import { Router } from "express";
import bibliotecaRoutes from "../../modules/bibioteca/routesBiblioteca/bibliotecaRoutes"
import userRoutes from "../../modules/user/routesUser/userRoutes"
const routes = Router({mergeParams: true})

routes.use("/api/biblioteca", bibliotecaRoutes)
routes.use("/api/user", userRoutes)

export default routes;