import { AppDataSource } from "../../../../data-source";
import { Cliente } from "../entity/Cliente";



export const clienteRepository = AppDataSource.getRepository(Cliente);