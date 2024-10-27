import { error } from "console";
import { generoRepository } from "../../genero/repositories/generoRepository";
import { livroRepository } from "../repositories/livroRepository";
import  livroCreateValidation  from "../validation/livroCreateValidation"

export class livroService {    
    async getLivros() {
        try {
            const livros = await livroRepository.find();
            return livros;
        } catch (error) {
            return error;
        }
    }
    async adicionarLivro(
        titulo: string,
        descricao: string,
        totaldepaginas: number,
        data_lancamento: Date,
        generosIds: number[]
    ) {
        if (generosIds.length === 0) {
            throw new Error("O livro deve ter pelo menos um gênero.");
        }

        if (generosIds.length > 3) {
            throw new Error("O livro deve ter no máximo três gêneros.");
        }  
        
        if (totaldepaginas < 1) {
            throw new Error("O livro deve ter pelo menos uma página.");
        }

        if (descricao.length < 1) {
            throw new Error("O livro deve ter uma descrição.");
        }

        if (data_lancamento > new Date()) {
            throw new Error("A data de lançamento do livro deve ser anterior à data atual.");
        }

        if (data_lancamento < new Date('1900-01-01')) {
            throw new Error("A data de lançamento do livro deve ser posterior a 01/01/1900.");
        }

        if (data_lancamento === null) {
            throw new Error("O livro deve ter uma data de lançamento.");
        }

        if (titulo === null) {
            throw new Error("O livro deve ter um título.");
        }

        if ( await livroRepository.exists({where: {titulo}})) {
            throw new Error("Já existe um livro com esse título.");
        }

        try {
            // Validate input data
            const { error } = livroCreateValidation.validate({
                titulo,
                descricao,
                totaldepaginas,
                data_lancamento,
                generosIds
            });

            if (Error) {
                throw new Error(`Validation error: ${Error}`);
            }

            const generos = await generoRepository.findByIds(generosIds);

            const novoLivro = livroRepository.create({
                titulo,
                descricao,
                totaldepaginas,
                data_lancamento,
                genero: generos
            });

            return await livroRepository.save(novoLivro);
        } catch (Error) {
            console.error("Erro ao adicionar livro:", Error);
        
            
        }
    }

    async updateLivro(
        id: number,
        titulo: string,
        descricao: string,
        totaldepaginas: number,
        data_lancamento: Date,      
    ) {
        try {            
            const livro = await livroRepository.findOneOrFail({ where: { id } });
    
            livro.titulo = titulo;
            livro.descricao = descricao;
            livro.totaldepaginas = totaldepaginas;
            livro.data_lancamento = data_lancamento; 

            await livroRepository.save(livro);
    
            return await livroRepository.findOne({
                where: { id },
                relations: ['genero']
            });
        } catch (error) {
            console.error("Erro ao atualizar livro:", error);
            throw new Error("Não foi possível atualizar o livro.");
        }

        
    }

    async deleteLivro(id: number) {
        try {
            livroRepository.delete
            const livro = await livroRepository.findOneOrFail({ where: { id } });
            await livroRepository.remove(livro);
        } catch (error) {
            console.error("Erro ao deletar livro:", error);
            throw new Error("Não foi possível deletar o livro.");
        }
    }

    async updateLivroGenero(id: number, generosIds: number[]) {
        try {
            const livro = await livroRepository.findOneOrFail({ where: { id } });
            const generos = await generoRepository.findByIds(generosIds);
            livro.genero = generos;
            await livroRepository.save(livro);
            return await livroRepository.findOneOrFail({
                where: { id },
                relations: ['genero']
            });
        } catch (error) {
            console.error("Erro ao atualizar gêneros do livro:", error);
            throw new Error("Não foi possível atualizar os gêneros do livro.");
        }
    }
    
    
}