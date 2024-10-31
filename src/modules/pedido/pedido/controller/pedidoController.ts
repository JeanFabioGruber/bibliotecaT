
export class pedidoController {
    async getPedido() {
        try {
            const pedido = await pedidoRepository.find();
            return pedido;
        } catch (error) {
            return error;
        }
    }
}