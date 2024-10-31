import { mapEditora } from '../mapper/editoraMapper';
import { editoraRepository } from '../repositoires/editoraRepository';
import { editoraCreateValidation } from '../validation/editoraCreateValidation';


export class editoraServices {
  async getAll() {
    try {
      const editora = await editoraRepository.find();
      return editora.map(mapEditora);
     
    } catch (error) {

      return error;
    }
  }

  async getById(id: number) {
    
    try {
      const editora = await editoraRepository.findOneOrFail({ where: { id } });
      return mapEditora(editora);
    } catch (error) {
      return error;
    }
  }

  async create(nome: string, cnpj: string, telefone: string, email: string) {

    try {
      const { error} = editoraCreateValidation.validate({ nome, cnpj, telefone, email });
      if (error) {
        throw new Error(`Validation error: ${error}`);
      }
      const newEditora = editoraRepository.create({ nome, cnpj, telefone, email });
      await editoraRepository.save(newEditora);
      return mapEditora(newEditora);
    } catch (error) {
      return error;
    }
  }

  async update(id: number, nome: string, cnpj: string, telefone: string, email: string) {
    try {
      const editoraToUpdate = await editoraRepository.findOneOrFail({ where: { id } });
      editoraToUpdate.nome = nome;
      editoraToUpdate.cnpj = cnpj;
      editoraToUpdate.telefone = telefone;
      editoraToUpdate.email = email;
      await editoraRepository.save(editoraToUpdate);
      return mapEditora(editoraToUpdate);
    } catch (error) {
      return error;
    } 


  }

  async delete(id : number) {
    try {
      const editoraToDelete = await editoraRepository.findOneOrFail({ where: { id } });
      await editoraRepository.remove(editoraToDelete);
      return;
    } catch (error) {
      return error;
    
  }
}
}