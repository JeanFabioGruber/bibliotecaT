import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../../../cliente/cliente/entity/User";
import { Livro } from "../../../bibioteca/livro/entity/Livro";

@Entity()
export class Pedido {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    valor: number;

    @Column()
    datadoPedido: Date;

    @Column()
    datadeDevolucao: Date;

    @ManyToMany(() => User, user => user.pedido, {eager: true})
    @JoinTable({
        name: 'user_pedido',
        joinColumn: {
            name: 'user_id',
            referencedColumnName: 'id'
        },
        inverseJoinColumn: {
            name: 'pedido_id',
            referencedColumnName: 'id'
        }

    })
    user: User[];

    @ManyToMany(() => Livro, livro => livro.pedido, {eager: true})
    @JoinTable({
        name: 'livro_pedido',
        joinColumn: {
            name: 'livro_id',
            referencedColumnName: 'id'
        },
        inverseJoinColumn: {
            name: 'pedido_id',
            referencedColumnName: 'id'
        }
    })
    livro: Livro[]




}