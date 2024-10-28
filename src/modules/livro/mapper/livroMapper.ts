import { Livro } from "../entity/Livro";

import { mapGeneros } from "../../genero/mapper/generoMapper";
import { Editora } from "../../editora/entity/Editora";
import { mapEditora } from "../../editora/mapper/editoraMapper";

export const mapLivro = (livro: Livro) => ({
    id: livro.id,
    titulo: livro.titulo,
    descricao: livro.descricao,
    totaldepaginas: (livro.totaldepaginas),
    data_lancamento: formatDate(livro.data_lancamento),
    genero: mapGeneros(livro.genero),
    editora: mapEditora(livro.editora)
});

const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: '2-digit', year: 'numeric' };
    return date.toLocaleDateString('pt-BR', options);
};