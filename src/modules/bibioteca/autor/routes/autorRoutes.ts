import { Router } from "express";

import { autorController } from "../controller/autorController";

const router = Router({ mergeParams: true });
const autorcontroller = new autorController();

router.get('/autores', autorcontroller.getAutores);
router.post('/autor', autorcontroller.createAutor);
router.put('/autores/:id', autorcontroller.updateAutor);
router.delete('/autores/:id', autorcontroller.deleteAutor);

export default router;
