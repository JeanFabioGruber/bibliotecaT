import { Router } from "express";
import bibliotecaRoutes from "../../modules/bibioteca/http/routesBiblioteca/bibliotecaRoutes"

const routes = Router({mergeParams: true})

routes.use(bibliotecaRoutes)