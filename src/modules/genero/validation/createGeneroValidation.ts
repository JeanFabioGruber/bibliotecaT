import Joi from "joi";

export const createGeneroValidation = Joi.object({
  nome: Joi.string().required(),
  descricao: Joi.string().required(),
});