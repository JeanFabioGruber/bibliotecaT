import { Editora } from "../entity/Editora";

export const mapEditora = (editora: Editora | Editora[]) => {
    // Se for um array, faz o mapeamento de cada item
    if (Array.isArray(editora)) {
        return editora.map(({ id, nome, cnpj, telefone, email }) => ({ id, nome, cnpj, telefone, email }));
    } else {
        // Se for um único objeto, faz o mapeamento diretamente
        const { id, nome, cnpj, telefone, email } = editora;
        return { id, nome, cnpj, telefone, email };
    }
};
