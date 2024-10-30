import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import { Pedido } from "../../../pedido/pedido/entity/Pedido";



@Entity()
export class Cliente {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    cpf: string;

    @Column()
    celular: string;

    @Column()
    cep: number;

    @Column('simple-array')
    address: string[];

    @ManyToMany(() => Pedido, pedido => pedido.cliente)
    pedido: Pedido[]

}