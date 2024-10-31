import { mapPedido } from "../mapper/pedidoMapper";
import { pedidoRepository } from "../repositories/pedidoRepositories";

export class pedidoServices {
    async getPedido() {
        try {
            const pedido = await pedidoRepository.find();
            return mapPedido(pedido);
        } catch (error) {
            return error;
        }
    }

    async adicionarPedido(
        datadoPedido: Date,
        valor_total: number,
        clienteId: number,
        livroIds: number[]
    ) {
        if (valor_total < 1) {
            throw new Error("O pedido deve ter um valor total.");
        }

        if (datadoPedido === null) {
            throw new Error("O pedido deve ter uma data de pedido.");
        }

        if (clienteId === null) {
            throw new Error("O pedido deve ter um cliente.");
        }
        
        if (livroIds.length === 0) {
            throw new Error("O pedido deve ter pelo menos um livro.");
        }

        const datadeDevolucao = new Date(datadoPedido);
        datadeDevolucao.setDate(datadeDevolucao.getDate() + 7);

        return await pedidoRepository.save({
            datadoPedido,
            datadeDevolucao,
            valor_total,
            clienteId,
            livroIds
        });
    }
}