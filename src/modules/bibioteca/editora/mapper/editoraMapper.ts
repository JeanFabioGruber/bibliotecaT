import { Editora } from "../entity/Editora";

export const mapEditora = (editora: Editora) => ({
    id: editora.id,
    nome: editora.nome,
    cnpj: editora.cnpj,
    telefone: editora.telefone,
    email: editora.email
})
