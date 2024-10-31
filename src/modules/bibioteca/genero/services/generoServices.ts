import { mapGeneros } from "../mapper/generoMapper";
import { generoRepository } from "../repositories/generoRepository";
import { createGeneroValidation } from "../validation/createGeneroValidation";


export class generoServices {
    async getAll() {
        try {
            const generos = await generoRepository.find();
            return generos.map(mapGeneros);
        } catch (error) {
            return error;
        }
    }

    async getById(id: number) {
        try {
            const genero = await generoRepository.findOneOrFail({ where: { id } });
            return mapGeneros(genero);
        } catch (error) {
            return error;
        }
    }

    async create(nome: string, descricao: string) {
        try {
            const { error } = createGeneroValidation.validate({ nome, descricao });
            if (error) {
                throw new Error(`Validation error: ${error}`);
            }
            const newGenero = generoRepository.create({ nome, descricao });
            await generoRepository.save(newGenero);
            return mapGeneros(newGenero);
        } catch (error) {
            return error;
        }

    }

    async update(id: number, nome: string, descricao: string) {
        try {
            const generoToUpdate = await generoRepository.findOneOrFail({ where: { id } });
            generoToUpdate.nome = nome;
            generoToUpdate.descricao = descricao;
            await generoRepository.save(generoToUpdate);
            return mapGeneros(generoToUpdate);
        } catch (error) {
            return error;
        }
    }

    async delete(id: number) {
        try {
            await generoRepository.delete(id);
            return { message: 'Genero deletado com sucesso' };
        } catch (error) {
            return error;
        }
    }

    

}