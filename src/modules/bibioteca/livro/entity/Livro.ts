
import { Entity, JoinTable, ManyToMany } from "typeorm";
import { Genero } from "../../genero/entity/Genero";
import { Editora } from "../../editora/entity/Editora";
import { Column, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Autor } from "../../autor/entity/Autor";
import { Pedido } from "../../../pedido/pedido/entity/Pedido";


@Entity()
export class Livro {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titulo: string;

  @Column()
  descricao: string;
  
  @Column()
  totaldepaginas: number;

  @Column()
  data_lancamento: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

    @ManyToMany(() => Autor, autor => autor.livros, { cascade: true, eager: true, onDelete: 'CASCADE' })
    @JoinTable({
        name: 'autor_livro',
        joinColumn: { 
          name: 'autor_id',
          referencedColumnName: 'id' 
        },
        inverseJoinColumn: { 
          name: 'livro_id',
          referencedColumnName: 'id'
        }

    })
    autor: Autor[];

    @ManyToMany(() => Genero, genero => genero.livros, { cascade: true, eager: true, onDelete: 'CASCADE' })
    @JoinTable({
        name: ' genero_livro',
        joinColumn: { 
          name: 'genero_id',
          referencedColumnName: 'id' 
        },
        inverseJoinColumn: { 
          name: 'livro_id',
          referencedColumnName: 'id'
        }

    })
    genero: Genero[];

    @ManyToMany(() => Editora, editora => editora.livros, { cascade: true, eager: true, onDelete: 'CASCADE' })
    @JoinTable({
        name: 'editora_livro',
        joinColumn: { 
          name: 'editora_id',
          referencedColumnName: 'id' 
        },
        inverseJoinColumn: { 
          name: 'livro_id',
          referencedColumnName: 'id'
        }

    })
    editora: Editora[];

    @ManyToMany(() => Pedido, pedido => pedido.livro)
    pedido: Pedido[];

}