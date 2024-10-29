import { AppDataSource } from "../../../../data-source";
import { Editora } from "../entity/Editora";

export const editoraRepository = AppDataSource.getRepository(Editora);