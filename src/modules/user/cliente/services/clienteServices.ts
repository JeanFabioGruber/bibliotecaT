
import { mapCliente } from '../mapper/clienteMapper';
import { clienteRepository } from '../repositories/clienteRepositories';
import axios from 'axios';

export class clienteServices {
    async getCliente() {        
        try {
            const cliente = await clienteRepository.find();
            return mapCliente(cliente);
        } catch (error) {
            return error;
        }
    }
    
    async createCliente(nome: string, cpf: string, celular: string, cep: number) {
        try {
            const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
            const { data } = response;
            if (data.erro) {
                return 'CEP inválido';
            }

            const address = [data.logradouro, data.bairro, data.localidade, data.uf];
            console.log(address);


            const cliente = await clienteRepository.create({ nome, cpf, celular, address });
            await clienteRepository.save(cliente);
            console.log(cliente);
            return cliente;
        } catch (error) {
            return error;
        }
    }
}