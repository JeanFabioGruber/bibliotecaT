import { Request, Response } from "express";
import { livroService } from "../service/livroService";

const livroservice = new livroService();

export class LivroController {

    async getLivros(req: Request, res: Response): Promise<void> {
        try {
            const livros = await livroservice.getLivros();
            res.json(livros);
        } catch (error) {
            res.status(500).json({ mesage: error });
        }
    }

    async createLivro(req: Request, res: Response): Promise<void> {
        const { titulo, descricao, totaldepaginas, data_lancamento,  generosIds, editoraIds, autoresIds} = req.body;
        

        try {            
            const livro = await livroservice.adicionarLivro(titulo, descricao, totaldepaginas, data_lancamento, generosIds, editoraIds, autoresIds);
            res.status(201).json(livro);
            

            
            
        } catch (error) {
            res.status(500).json({ mesage: (error as Error).message });
        }
    }

    async updateLivro(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const { titulo, descricao, totaldepaginas, data_lancamento, generosIds } = req.body;
       

        try {
            const livro = await livroservice.updateLivro(Number(id), titulo, descricao, totaldepaginas, data_lancamento);
            res.json(livro);
        } catch (error) {
            res.status(500).json({ mesage: error });
        }
    }

    async deleteLivro(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
         

        try {
            
            await livroservice.deleteLivro(Number(id));            
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ mesage: error });
        }
    }

    async updateLivroGenero(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const { generosIds } = req.body;

        try {
            const livro = await livroservice.updateLivroGenero(Number(id), generosIds);
            res.json(livro);
        } catch (error) {
            res.status(500).json({ mesage: error });
        }
    }

    async updateLivroAutor(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const { autoresIds } = req.body;

        try {
            const livro = await livroservice.updateLivroAutor(Number(id), autoresIds);
            res.json(livro);
        } catch (error) {
            res.status(500).json({ mesage: error });
        }
    }

    async updateLivroEditora(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const { editoraIds } = req.body;

        try {
            const livro = await livroservice.updateLivroEditora(Number(id), editoraIds);
            res.json(livro);
        } catch (error) {
            res.status(500).json({ mesage: error });
        }
    }



}