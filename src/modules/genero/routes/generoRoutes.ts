import { Router } from 'express';
import {generoController} from '../controller/generoController';

const router = Router({ mergeParams: true });

const generocontroller = new generoController();

router.get('/generos', generocontroller.getGeneros);
// router.get('/generos/:id', generocontroller.getGeneroById);
router.post('/genero', generocontroller.createGenero);
// router.put('/generos/:id', generocontroller.updateGenero);
// router.delete('/generos/:id', generocontroller.deleteGenero);

export default router;