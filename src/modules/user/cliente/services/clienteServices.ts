import { mapCliente } from '../mapper/clienteMapper';
import { clienteRepository } from '../repositories/clienteRepositories';
import axios from 'axios';

export class clienteServices {
    async getCliente() {        
        try {
            const cliente = await clienteRepository.find();
            return cliente.map(mapCliente);
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

            const address = [data.logradouro, data.bairro, data.uf, data.localidade];
            console.log('Endereço:', address);

            const cliente = clienteRepository.create({ nome, cpf, celular, cep, address });
            console.log('Cliente antes de salvar:', cliente);

            await clienteRepository.save(cliente);
            console.log('Cliente salvo:', cliente);

            return cliente;
        } catch (error) {
            console.error('Erro ao criar cliente:', error);
            return error;
        }
    }

    async updateCliente(id: number, nome: string, cpf: string, celular: string, cep: number) {
        try {
            const response = await axios.get(`https://viacep.com.br/ws/${cep}/json/`);
            const { data } = response;
            if (data.erro) {
                return 'CEP inválido';
            }

            const address = [data.logradouro, data.bairro, data.uf, data.localidade];
            console.log('Endereço:', address);

            const cliente = await clienteRepository.findOne({where: {id}});
            if (!cliente) {
                return 'Cliente não encontrado';
            }

            cliente.nome = nome;
            cliente.cpf = cpf;
            cliente.celular = celular;
            cliente.cep = cep;
            cliente.address = address;

            await clienteRepository.save(cliente);
            console.log('Cliente atualizado:', cliente);

            return cliente;
        } catch (error) {
            console.error('Erro ao atualizar cliente:', error);
            return error;
        }
    }

    async deleteCliente(id: number) {
        try {
            const cliente = await clienteRepository.findOne({where: {id}});
            if (!cliente) {
                return 'Cliente não encontrado';
            }

            await clienteRepository.remove(cliente);
            console.log('Cliente deletado:', cliente);

            return cliente;
        } catch (error) {
            console.error('Erro ao deletar cliente:', error);
            return error;
        }
    }

    async getClienteById(id: number) {
        try {
            const cliente = await clienteRepository.findOne({where: {id}});
            if (!cliente) {
                return 'Cliente não encontrado';
            }

            return mapCliente(cliente);
        } catch (error) {
            console.error('Erro ao buscar cliente:', error);
            return error;
        }
    }


}