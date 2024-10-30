import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Pedido } from "../../../pedido/pedido/entity/Pedido";



@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    cpf: string;

    @Column()
    celular: string;

    @Column()
    cep: number

    @ManyToMany(() => Pedido, pedido => pedido.user)
    pedido: Pedido[]

}