import { Cliente } from "../entity/Cliente";


export const mapCliente = (cliente: Cliente) => ({
    id: cliente.id,
    nome: cliente.nome,
    cpf: cliente.cpf,
    celular: cliente.celular,
    cep: cliente.cep

})



