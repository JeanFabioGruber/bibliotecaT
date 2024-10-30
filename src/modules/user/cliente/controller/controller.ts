import { clienteServices } from "../services/clienteServices";
import { Request, Response } from 'express';

const clienteservices = new clienteServices();

export class clienteController {
    async getCliente(req: Request, res: Response): Promise<void> {

        try {
            const clientes = await clienteservices.getCliente();
            res.status(200).json(clientes);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async createCliente(req: Request, res: Response): Promise<void> {
        const { nome, cpf, celular, cep } = req.body;
        try {
            const cliente = await clienteservices.createCliente(nome, cpf, celular, cep);
            res.status(201).json(cliente);
        } catch (error) {
            res.status(500).json(error);
        }
    }
} 