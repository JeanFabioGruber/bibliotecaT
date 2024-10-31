import { Genero } from "../entity/Genero";

export const mapGeneros = (generos: Genero) => ({
    id: generos.id,
    nome: generos.nome,
    descricao: generos.descricao
})