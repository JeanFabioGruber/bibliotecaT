import Joi from "joi";

export const autorCreateValidation = Joi.object({
  nome: Joi.string().required(),
  idade: Joi.number().required(),
  cidade: Joi.string().required(),
});