import { mapEditora } from '../mapper/editoraMapper';
import { editoraRepository } from '../repositoires/editoraRepository';


export class editoraServices {
//   constructor() {
//     this.editoraRepository = editoraRepository;
//   }

  async getAll() {
    try {
      const editora = await editoraRepository.find();
      return editora.map(mapEditora);
     
    } catch (error) {

      return error;
    }
  }

//   async getById(id) {
//     const editora = await this.editoraRepository.findOne(id);
//     return mapEditora(editora);
//   }

  async create(nome: string, cnpj: string, telefone: string, email: string) {
    const newEditora = this.editoraRepository.create(editora);
    await this.editoraRepository.save(newEditora);
    return mapEditora(newEditora);
  }

//   async update(id, editora) {
//     await this.editoraRepository.update(id, editora);
//     return this.getById(id);
//   }

//   async delete(id) {
//     const editora = await this.editoraRepository.findOne(id);
//     await this.editoraRepository.remove(editora);
//     return mapEditora(editora);
//   }
}