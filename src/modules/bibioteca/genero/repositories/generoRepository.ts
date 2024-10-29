import { AppDataSource } from "../../../../data-source";
import { Genero } from "../entity/Genero";

export const generoRepository = AppDataSource.getRepository(Genero);