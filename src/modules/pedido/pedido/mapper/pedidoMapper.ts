import { stat } from "fs";
import { mapLivro } from "../../../bibioteca/livro/mapper/livroMapper";
import { mapCliente } from "../../../user/cliente/mapper/clienteMapper";
import { Pedido } from "../entity/Pedido";

export const mapPedido = (pedido: Pedido) => ({
    id: pedido.id,
    data_pedido: formatDate(pedido.datadoPedido),
    data_entrega: formatDate(pedido.datadeDevolucao),    
    cliente: pedido.cliente.map(mapCliente),
    livro: pedido.livro.map(mapLivro),
    status: pedido.status
});






const formatDate = (date: any): string => {
    // Verifica se 'date' é uma instância de Date; se não, tenta convertê-lo
    const dateObj = date instanceof Date ? date : new Date(date);

    // Confere se a conversão para 'Date' foi bem-sucedida
    if (isNaN(dateObj.getTime())) {
        throw new Error("Data inválida");
    }

    const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: '2-digit', year: 'numeric' };
    return dateObj.toLocaleDateString('pt-BR', options);
};