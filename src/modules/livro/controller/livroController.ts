// import { Request, Response } from "express";
// import { livroRepository } from "../repositories/livroRepository";
// import { generoRepository } from "../../genero/repositories/generoRepository";

// export class LivroController {

//     async getLivros(req: Request, res: Response): Promise<void> {
//         try {
//             const livros = await livroRepository.find( { relations: ['genero'] });
//             res.json(livros);
//         } catch (error) {
//             res.status(500).json({ mesage: error });
//         }
//     }

//     async createLivro(req: Request, res: Response): Promise<void> {
//         const { titulo, descricao, totaldepaginas, data_lancamento, genero_id} = req.body;
        

//         try {
//             const genero = await generoRepository.findOne({ where: { id: genero_id } });
//             const livro = livroRepository.create({ titulo, descricao, totaldepaginas, data_lancamento, genero: [genero] });
//             await livroRepository.save(livro);
            

            
            
//         } catch (error) {
//             res.status(500).json({ mesage: error });
//         }
//     }


// }