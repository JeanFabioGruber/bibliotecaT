import { AppDataSource } from "../../../../data-source";
import { Pedido } from "../entity/Pedido";

export const pedidoRepository = AppDataSource.getRepository(Pedido);