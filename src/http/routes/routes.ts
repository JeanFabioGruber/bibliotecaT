
import { Router } from 'express';
import generoRoutes from '../../modules/genero/routes/generoRoutes';

const routes = Router( { mergeParams: true } );

routes.use(generoRoutes);


export default routes;