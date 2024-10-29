import { Request, Response } from 'express';
import { editoraServices } from '../services/editoraServices';
import { number } from 'joi';

const editoraservices = new editoraServices();

export class editoraController {
    public async getEditoras(req: Request, res: Response) {
        try {
            const editoras = await editoraservices.getAll();
            res.status(200).json(editoras); 
        } catch (error) {
            res.status(500).json({ mesage: error });
        }
    }

    public async getEditora(req: Request, res: Response) {
        const { id } = req.params;
        try {
            const editora = await editoraservices.getById(Number(id));
            res.status(200).json(editora);
        } catch (error) {
            res.status(500).json({ mesage: error });
        }
    }

    public async createEditora(req: Request, res: Response) {
        const { nome, cnpj, telefone, email } = req.body;
        try {
            const editora = await editoraservices.create(nome, cnpj, telefone, email );
            res.status(201).json(editora);
        } catch (error) {
            res.status(500).json({ mesage: error });
        }
    }

    public async updateEditora(req: Request, res: Response) {
        const { id } = req.params;
        const { nome, cnpj, telefone, email } = req.body;
        try {
            const editora = await editoraservices.update(Number(id), nome, cnpj, telefone, email );
            res.status(200).json(editora);
        } catch (error) {
            res.status(500).json({ mesage: error });
        }
    }

    public async deleteEditora(req: Request, res: Response) {
        const { id } = req.params;
        try {
            await editoraservices.delete(Number(id));
            res.status(204).send({mesage: "Editora deletada com sucesso"});
        } catch (error) {
            res.status(500).json({ mesage: error });
        }
    }
}