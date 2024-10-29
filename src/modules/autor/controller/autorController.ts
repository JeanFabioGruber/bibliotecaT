import { Request, Response } from 'express'
import { Autor } from '../entity/Autor'
import { autorServices } from '../services/autorServices';

const autorservices = new autorServices();

export class autorController {
    async getAutores(req: Request, res: Response): Promise<void> {
        
        try {
            const autores = await autorservices.getAutores()
            res.json(autores);
        } catch (error) {
            res.status(500).json({ mesage: error });
        }
    }

    async createAutor(req: Request, res: Response): Promise<void> {
        const { nome, idade, cidade } = req.body;
        try {
            const newAutor = await autorservices.createAutor(nome, idade, cidade);
            res.json(newAutor);
        } catch (error) {
            res.status(500).json({ mesage: error });
        }
    }

    async updateAutor(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const { nome, idade, cidade } = req.body;
        try {
            const autor = await autorservices.updateAutor(Number(id), nome, idade, cidade);
            res.json(autor);
        } catch (error) {
            res.status(500).json({ mesage: error });
        }
    }

    async deleteAutor(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        try {
            const autor = await autorservices.deleteAutor(Number(id));
            res.status(204);
        } catch (error) {
            res.status(500).json({ mesage: error });
        }
    }
}