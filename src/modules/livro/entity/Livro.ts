
import { Entity, JoinTable, ManyToMany } from "typeorm";
import { Genero } from "../../genero/entity/Genero";
import { Column, CreateDateColumn, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


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

}