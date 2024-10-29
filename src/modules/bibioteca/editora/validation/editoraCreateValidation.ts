import Joi from "joi";

export const editoraCreateValidation = Joi.object({
    nome: Joi.string().required(),
    cnpj: Joi.string().required(),
    telefone: Joi.string().required(),
    email: Joi.string().required(),
});