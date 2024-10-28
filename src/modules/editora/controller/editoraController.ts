import { Request, Response } from 'express';
import { editoraServices } from '../services/editoraServices';

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
}