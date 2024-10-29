
import { Router } from 'express';
import generoRoutes from '../../modules/bibioteca/genero/routes/generoRoutes';
import livroRoutes from '../../modules/bibioteca/livro/routes/livroRoutes';
import editoraRoutes from '../../modules/bibioteca/editora/routes/editoraRoutes';
import autorRoutes from '../../modules/bibioteca/autor/routes/autorRoutes';

const routes = Router( { mergeParams: true } );

routes.use(generoRoutes);
routes.use(livroRoutes);
routes.use(editoraRoutes);
routes.use(autorRoutes);

export default routes;