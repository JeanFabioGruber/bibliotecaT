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

    async updateCliente(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const { nome, cpf, celular, cep } = req.body;
        try {
            const cliente = await clienteservices.updateCliente(Number(id), nome, cpf, celular, cep);
            res.status(200).json(cliente);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async deleteCliente(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        try {
            const cliente = await clienteservices.deleteCliente(Number(id));
            res.status(200).json(cliente);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async getClienteById(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        try {
            const cliente = await clienteservices.getClienteById(Number(id));
            res.status(200).json(cliente);
        } catch (error) {
            res.status(500).json(error);
        }
    }
} 