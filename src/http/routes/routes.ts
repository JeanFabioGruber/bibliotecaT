
import { Router } from 'express';
import generoRoutes from '../../modules/genero/routes/generoRoutes';
import livroRoutes from '../../modules/livro/routes/livroRoutes';
import editoraRoutes from '../../modules/editora/routes/editoraRoutes';

const routes = Router( { mergeParams: true } );

routes.use(generoRoutes);
routes.use(livroRoutes);
routes.use(editoraRoutes);


export default routes;