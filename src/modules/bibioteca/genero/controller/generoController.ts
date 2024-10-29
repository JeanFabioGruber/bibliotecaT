import { Request, Response } from 'express';
import { generoRepository } from '../repositories/generoRepository';
import { generoServices } from '../services/generoServices';

const generoservice = new generoServices();

export class generoController {
    async getGeneros(req: Request, res: Response): Promise<void> {
        try {
            const generos = await generoservice.getAll();
            res.json(generos);
        } catch (error) {
            res.status(500).json({ mesage: error });
        }
    
    }

    async getGenero(req: Request, res: Response): Promise<void> {
        const { id } = req.params;

        try {
            const genero = await generoservice.getById(Number(id));
            res.json(genero);
        } catch (error) {
            res.status(500).json
        }
    }

    async createGenero(req: Request, res: Response): Promise<void> {
        const { nome, descricao } = req.body;

        try {
            const genero = await generoservice.create(nome, descricao);
            res.json(genero);
        } catch (error) {
            res.status(500).json({ mesage: error });
        }
    }

    async updateGenero(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const { nome, descricao } = req.body;

        try {
            const genero = await generoservice.update(Number(id), nome, descricao);
            res.json(genero);
        } catch (error) {
            res.status(500).json({ mesage: error });
        }
    }

    async deleteGenero(req: Request, res: Response): Promise<void> {
        const { id } = req.params;

        try {
            await generoservice.delete(Number(id));
            res.status(204).send();
        } catch (error) {
            res.status(500).json({ mesage: error });
        }
    }
        
}