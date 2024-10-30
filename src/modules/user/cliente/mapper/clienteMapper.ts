import { Cliente } from "../entity/Cliente";


export const mapCliente = (cliente: Cliente[]) => {
    return cliente.map(({ id, nome, cpf, celular, cep, address }) => ({ id, nome, cpf, celular, cep, address }));
    


};



