import { Livro } from "../entity/Livro";
import { mapGeneros } from "../../genero/mapper/generoMapper";
import { mapEditora } from "../../editora/mapper/editoraMapper";
import { mapAutor } from "../../autor/mapper/autorMapper";

export const mapLivro = (livro: Livro) => ({
    id: livro.id,
    titulo: livro.titulo,
    descricao: livro.descricao,
    totaldepaginas: livro.totaldepaginas,
    data_lancamento: formatDate(livro.data_lancamento),
    genero: livro.genero.map(mapGeneros),
    editora: livro.editora.map(mapEditora),
    autor: livro.autor.map(mapAutor)
});

const formatDate = (date: any): string => {
    // Verifica se 'date' é uma instância de Date; se não, tenta convertê-lo
    const dateObj = date instanceof Date ? date : new Date(date);

    // Confere se a conversão para 'Date' foi bem-sucedida
    if (isNaN(dateObj.getTime())) {
        throw new Error("Data inválida");
    }

    const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: '2-digit', year: 'numeric' };
    return dateObj.toLocaleDateString('pt-BR', options);
};
