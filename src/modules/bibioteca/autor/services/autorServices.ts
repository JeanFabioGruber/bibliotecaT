
import { autorRepository } from "../repositories/autorRepository";
import { mapAutor } from "../mapper/autorMapper";
import { create } from "domain";
import { autorCreateValidation } from "../validation/autorCreateValidation";

export class autorServices  {
    async getAutores() {
        try {
            const autores = await autorRepository.find()
            return autores.map(mapAutor);
        } catch (error) {
            return error;
        }
    }

    async createAutor(nome: string, idade: number, cidade: string) {
        try {
            const {error} = autorCreateValidation.validate({ nome, idade, cidade });

            if (error) {
                throw new Error(`Validation error: ${error}`);;
            }            
            const newautor = await autorRepository.create({ nome, idade, cidade });
            await autorRepository.save(newautor);
            return mapAutor(newautor);
        } catch (error) {
            return error;
        }
    }

    async updateAutor(id: number, nome: string, idade: number, cidade: string) {
        try {
            const autorToUpdate = await autorRepository.findOneOrFail({ where: { id } });
            autorToUpdate.nome = nome;
            autorToUpdate.idade = idade;
            autorToUpdate.cidade = cidade;
            await autorRepository.save(autorToUpdate);
            return mapAutor(autorToUpdate);
        } catch (error) {
            return error;
        }
    }

    async deleteAutor(id: number) {
        try {
            const autorToDelete = await autorRepository.findOneOrFail({ where: { id } });
            await autorRepository.remove(autorToDelete);
            return true;
        } catch (error) {
            return error;
        }
    }


}