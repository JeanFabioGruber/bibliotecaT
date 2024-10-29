import { Router } from "express";
import {LivroController} from "../controller/livroController";

const router = Router({ mergeParams: true });

const livroController = new LivroController();

router.get('/livros', livroController.getLivros);
router.post('/livro', livroController.createLivro);
router.put('/livro/:id', livroController.updateLivro);
router.delete('/livro/:id', livroController.deleteLivro);
router.put('/livro/:id/genero', livroController.updateLivroGenero);
router.put('/livro/:id/autor', livroController.updateLivroAutor);
router.put('/livro/:id/editora', livroController.updateLivroEditora);

export default router;




