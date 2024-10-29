import { Router } from "express";
import bibliotecaRoutes from "../../modules/bibioteca/routesBiblioteca/bibliotecaRoutes"

const routes = Router({mergeParams: true})

routes.use(bibliotecaRoutes)

export default routes;