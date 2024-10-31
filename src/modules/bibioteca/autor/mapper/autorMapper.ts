import { Autor } from "../entity/Autor";
import { mapLivro } from "../../livro/mapper/livroMapper";

export const mapAutor = (autores: Autor) => ({
    id: autores.id,
    nome: autores.nome,
    idade: autores.idade,
    cidade: autores.cidade    
})
     
