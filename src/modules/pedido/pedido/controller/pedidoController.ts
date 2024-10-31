import { Request, Response } from "express";
import { pedidoServices } from "../services/pedidoServices";
import { number } from "joi";

const pedidoservices = new pedidoServices();

export class pedidoController {
    async getPedido(req: Request, res: Response): Promise<void> {
        try {
            const pedido = await pedidoservices.getPedido();
            res.status(200).json(pedido);
        } catch (error) {
            res.status(500).json( error);
        }
    }

    async adicionarPedido(req: Request, res: Response): Promise<void> {

        const { valor, datadoPedido, clienteId, livroIds } = req.body;
        
        try {            
            const pedido = await pedidoservices.adicionarPedido(valor, datadoPedido, clienteId, livroIds);
            res.status(201).json(pedido);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async updatePedido(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const { valor, datadoPedido, datadeDevolucao, clienteId, livroIds } = req.body;

        try {
            const pedido = await pedidoservices.updatePedido(parseInt(id), valor, datadoPedido, datadeDevolucao, clienteId, livroIds);
            res.status(200).json(pedido);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async deletePedido(req: Request, res: Response): Promise<void> {
        const { id } = req.params;

        try {
            await pedidoservices.deletePedido(parseInt(id));
            res.status(200).json({ message: "Pedido deletado com sucesso" });
        } catch (error) {
            res.status(500).json(error);
        }
    }

    async devolverPedido(req: Request, res: Response): Promise<void> {
        const { id } = req.params;

        try {
            await pedidoservices.devolucaoPedido(parseInt(id));
            res.status(200).json({ message: "Pedido devolvido com sucesso" });
        } catch (error) {
            res.status(500).json(error);
        }
    }
    

    async getPedidoById(req: Request, res: Response): Promise<void> {
        const { id } = req.params;

        try {
            const pedido = await pedidoservices.getPedidoById(parseInt(id));
            res.status(200).json(pedido);
        } catch (error) {
            res.status(500).json(error);
        }
    }

    

}