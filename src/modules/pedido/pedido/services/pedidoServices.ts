import { livroRepository } from "../../../bibioteca/livro/repositories/livroRepository";
import { clienteRepository } from "../../../user/cliente/repositories/clienteRepositories";
import { mapPedido } from "../mapper/pedidoMapper";
import { pedidoRepository } from "../repositories/pedidoRepositories";
import { In } from "typeorm";
import { createPedidoValidation } from "../validation/createPedidoValidation";

export class pedidoServices {
    async getPedido() {
        try {
            const pedidos = await pedidoRepository.find();
            return pedidos.map(mapPedido);
        } catch (error) {
            console.error("Erro ao buscar pedidos:", error);
            throw new Error("Erro interno ao buscar pedidos. Tente novamente mais tarde.");
        }
    }

    async adicionarPedido(
        valor: number,
        datadoPedido: Date,        
        clienteId: number,
        livroIds: number[]
    ) {
        // Validação dos dados de entrada
        const { error } = await createPedidoValidation.validate({ valor, datadoPedido, clienteId, livroIds });
        if (error) {
            console.log("Erro de validação: ", error);
            throw error;
        }

        try {
            
            const cliente = await clienteRepository.findOneBy({ id: clienteId });
            const livros = await livroRepository.find({
                where: { id: In(livroIds) }                
            });

            if (!cliente) {
                throw new Error("Cliente não encontrado");
            }

            if (livros.length !== livroIds.length) {
                throw new Error("Um ou mais livros não foram encontrados");
            }

            const datadeDevolucao = new Date(datadoPedido);
            datadeDevolucao.setDate(datadeDevolucao.getDate() + 7);

            
            const novoPedido = pedidoRepository.create({
                valor,
                datadoPedido,
                datadeDevolucao,
                cliente: [cliente],                
                livro: livros
            });            
            await pedidoRepository.save(novoPedido);         

            
            return mapPedido(novoPedido);
        } catch (error) {
            console.error("Erro ao adicionar pedido:", error);
            throw error;
        }
    }

    async updatePedido(
        id: number,
        valor: number,
        datadoPedido: Date,
        datadeDevolucao: Date,
        clienteId: number,
        livroIds: number[]
    ) {
        try {
            const pedido = await pedidoRepository.findOneOrFail({ where: { id } });
            const cliente = await clienteRepository.findOneBy({ id: clienteId });

            if (!cliente) {
                throw new Error("Cliente não encontrado");
            }

            pedido.valor = valor;
            pedido.datadoPedido = datadoPedido;
            pedido.datadeDevolucao = datadeDevolucao;            
            pedido.cliente = [cliente];
            pedido.livro = await livroRepository.find({ where: { id: In(livroIds) } });

            await pedidoRepository.save(pedido);

            return mapPedido(pedido);
        } catch (error) {
            console.error("Erro ao atualizar pedido:", error);
            throw error;
        }
    }

    async deletePedido(id: number) {
        try {
            const pedido = await pedidoRepository.findOneOrFail({ where: { id } });

            if (pedido.status === false) {
                throw new Error("Pedido ainda não foi devolvido.");
            }
            await pedidoRepository.remove(pedido);

            return;
        } catch (error) {
            console.error("Erro ao deletar pedido:", error);
            throw error;
        }
    }

    async devolucaoPedido(id: number) {
        try {
            const pedido = await pedidoRepository.findOneOrFail({ where: { id } });
            if (pedido.status === true) {
                throw new Error("Pedido já foi devolvido.");
            }

            pedido.status = true
            await pedidoRepository.save(pedido);

            return { message: "Pedido devolvido com sucesso.", pedido };
        } catch (error) {
            console.error("Erro ao devolver pedido:", error);
            throw error;
        }
    }

    async getPedidoById(id: number) {
        try {
            const pedido = await pedidoRepository.findOneOrFail({ where: { id } });
            return mapPedido(pedido);
        } catch (error) {
            console.error("Erro ao buscar pedido:", error);
            throw error;
        }
    }



    
        
    
}
