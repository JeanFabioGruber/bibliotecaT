import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { User } from "../../../cliente/cliente/entity/User";

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




}