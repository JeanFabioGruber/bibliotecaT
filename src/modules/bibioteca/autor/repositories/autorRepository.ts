import { AppDataSource } from "../../../../data-source";
import { Autor } from "../entity/Autor";


export const autorRepository = AppDataSource.getRepository(Autor);