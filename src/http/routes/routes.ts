
import { Router } from 'express';
import generoRoutes from '../../modules/genero/routes/generoRoutes';
import livroRoutes from '../../modules/livro/routes/livroRoutes';
import editoraRoutes from '../../modules/editora/routes/editoraRoutes';
import autorRoutes from '../../modules/autor/routes/autorRoutes';

const routes = Router( { mergeParams: true } );

routes.use(generoRoutes);
routes.use(livroRoutes);
routes.use(editoraRoutes);
routes.use(autorRoutes);

export default routes;