import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Livro } from "../../livro/entity/Livro";


@Entity()
export class Autor {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    idade: number;

    @Column()
    cidade: string;

    @ManyToMany(() => Livro, livro => livro.autor)
    livros: Livro[];
}