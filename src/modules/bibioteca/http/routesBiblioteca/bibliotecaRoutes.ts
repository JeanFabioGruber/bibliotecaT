
import { Router } from 'express';
import generoRoutes from '../../genero/routes/generoRoutes';
import livroRoutes from '../../livro/routes/livroRoutes';
import editoraRoutes from '../../editora/routes/editoraRoutes';
import autorRoutes from '../../autor/routes/autorRoutes';

const routes = Router( { mergeParams: true } );

routes.use(generoRoutes);
routes.use(livroRoutes);
routes.use(editoraRoutes);
routes.use(autorRoutes);

export default routes;