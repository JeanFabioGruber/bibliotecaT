import { Autor } from "../entity/Autor";

export const mapAutor = (autores: Autor[]) => { 
    return autores.map(({ id, nome, idade, cidade }) => ({ id, nome, idade, cidade }));
};
     
