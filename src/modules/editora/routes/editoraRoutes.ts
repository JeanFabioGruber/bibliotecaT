import { Router } from "express";

import  { editoraController } from "../controller/editoraController";

const router = Router({ mergeParams: true });

const editoracontroller = new editoraController();

router.get('/editoras', editoracontroller.getEditoras);
router.get('/editoras/:id', editoracontroller.getEditora);
router.post('/editora', editoracontroller.createEditora);
router.put('/editoras/:id', editoracontroller.updateEditora);
router.delete('/editoras/:id', editoracontroller.deleteEditora);

export default router;

