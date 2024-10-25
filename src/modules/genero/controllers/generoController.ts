import { Request, Response } from 'express';
import { generoRepository } from '../repositories/generoRepository';

export class generoController {
    async getGeneros(req: Request, res: Response): Promise<void> {
        try {
            const generos = await generoRepository.find();
            res.json(generos);
        } catch (error) {
            res.status(500).json({ mesage: error });
        }
        
    }

    async createGenero(req: Request, res: Response): Promise<void> {
        const { nome, descricao } = req.body;

        try {
            const genero = generoRepository.create({ nome, descricao });
            await generoRepository.save(genero);
            res.status(201).json(genero);
        } catch (error) {
            res.status(500).json({ mesage: error });
        }
    }
        
}