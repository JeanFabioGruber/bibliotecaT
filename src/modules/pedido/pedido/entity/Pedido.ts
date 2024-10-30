import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Cliente} from "../../../user/cliente/entity/Cliente";
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

    @ManyToMany(() => Cliente, cliente => cliente.pedido, {eager: true})
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
    cliente: Cliente[];    

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