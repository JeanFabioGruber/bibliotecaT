import { Livro } from "../modules/livro/entity/Livro";
import { Genero } from "../modules/genero/entity/Genero";

export const mapLivro = (livro: Livro) => ({
    id: livro.id,
    titulo: livro.titulo,
    descricao: livro.descricao,
    totaldepaginas: (livro.totaldepaginas),
    data_lancamento: formatDate(livro.data_lancamento),
    genero: mapGeneros(livro.genero),
});

const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: '2-digit', year: 'numeric' };
    return date.toLocaleDateString('pt-BR', options);
};


export const mapGeneros = (generos: Genero[]) => {
    return generos.map(({ id, nome, descricao }) => ({ id, nome, descricao }));
};
