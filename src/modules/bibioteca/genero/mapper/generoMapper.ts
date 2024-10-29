import { Genero } from "../entity/Genero";

export const mapGeneros = (generos: Genero[]) => {
    return generos.map(({ id, nome, descricao }) => ({ id, nome, descricao }));
};