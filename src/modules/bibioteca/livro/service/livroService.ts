import { mapLivro } from "../mapper/livroMapper";
import { generoRepository } from "../../genero/repositories/generoRepository";
import { livroRepository } from "../repositories/livroRepository";
import  livroCreateValidation  from "../validation/livroCreateValidation"
import { editoraRepository } from "../../editora/repositoires/editoraRepository";
import { autorRepository } from "../../autor/repositories/autorRepository";
import { In } from "typeorm";

export class livroService {    
    async getLivros() {       
            const livros = await livroRepository.find();
            if (livros.length > 0) {
                return livros.map(mapLivro);
            }

            throw new Error("Não foi possível encontrar livros.");
           
    }

    async adicionarLivro(
        titulo: string,
        descricao: string,
        totaldepaginas: number,
        data_lancamento: Date,
        generosIds: number[],
        editoraIds: number[],
        autoresIds: number[]
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
            const { error } = livroCreateValidation.validate({
                titulo,
                descricao,
                totaldepaginas,
                data_lancamento,
                generosIds,
                editoraIds,
                autoresIds            
            });

            if (error) {
                throw new Error(`Validation error: ${error}`);
            }

            const generos = await generoRepository.findBy({ id: In(generosIds) });
            const editoras = await editoraRepository.findBy({ id: In(editoraIds) });
            const autores = await autorRepository.findBy({ id: In(autoresIds) });

            const novoLivro = livroRepository.create({
                titulo,
                descricao,
                totaldepaginas,
                data_lancamento,
                genero: generos,
                editora: editoras,
                autor: autores              
            });

            await livroRepository.save(novoLivro); 
            
            return mapLivro(novoLivro)
        
            
        
    }

    async updateLivro(
        id: number,
        titulo: string,
        descricao: string,
        totaldepaginas: number,
        data_lancamento: Date,      
    ) {
                   
            const livro = await livroRepository.findOneOrFail({ where: { id } });
    
            livro.titulo = titulo;
            livro.descricao = descricao;
            livro.totaldepaginas = totaldepaginas;
            livro.data_lancamento = data_lancamento; 

            await livroRepository.save(livro);

            if (!livro) {
                throw new Error("Livro não encontrado.");
            }

            
    
            return mapLivro(livro);        
    }

    async deleteLivro(id: number) {
                   
            const livro = await livroRepository.findOneOrFail({ where: { id } });
            await livroRepository.remove(livro);

            if (!livro) {
                throw new Error("Livro não encontrado.");
            }

            return true;
        
            
            
        
    }

    async updateLivroGenero(id: number, generosIds: number[]) {
       
            const livro = await livroRepository.findOneOrFail({ where: { id } });
            if (!livro) {
                throw new Error("Livro não encontrado.");
            }
            const generos = await generoRepository.findByIds(generosIds);
            if(!generos) {
                throw new Error("O livro deve ter pelo menos um gênero.");
            }
            livro.genero = generos;
            await livroRepository.save(livro);
                       

            return await livroRepository.findOneOrFail({
                where: { id },
                relations: ['genero']
            });           
        
    }

    async updateLivroAutor(id: number, autoresIds: number[]) {
        
            const livro = await livroRepository.findOneOrFail({ where: { id } });
            if (!livro) {
                throw new Error("Livro não encontrado.");
            }

            const autores = await autorRepository.findByIds(autoresIds);
            if(!autores) {
                throw new Error("O livro deve ter pelo menos um autor.");
            }
            livro.autor = autores;
            await livroRepository.save(livro);
            return await livroRepository.findOneOrFail({
                where: { id },
                relations: ['autor']
            });        
            
        
    }

    async updateLivroEditora(id: number, editorasIds: number[]) {        
            const livro = await livroRepository.findOneOrFail({ where: { id } });
            if (!livro) {
                throw new Error("Livro não encontrado.");
            }
            const editoras = await editoraRepository.findByIds(editorasIds);
            if(!editoras) {
                throw new Error("O livro deve ter pelo menos uma editora.");
            }
            livro.editora = editoras;
            await livroRepository.save(livro);
            return await livroRepository.findOneOrFail({
                where: { id },
                relations: ['editora']
            });        
    }
    
    
}