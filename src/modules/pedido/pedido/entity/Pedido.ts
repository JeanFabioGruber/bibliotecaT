import { Column, CreateDateColumn, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
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

    @Column( {default: false})
    status: boolean;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

    @ManyToMany(() => Cliente, cliente => cliente.pedido, {eager: true})
    @JoinTable({
        name: 'cliente_pedido',
        joinColumn: {
            name: 'cliente_id',
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