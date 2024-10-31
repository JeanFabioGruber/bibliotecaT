import Joi from "joi";

export const createPedidoValidation = Joi.object({
    valor: Joi.number().required(),
    datadoPedido: Joi.date().required(),
    clienteId: Joi.number().required(),
    livroIds: Joi.array().items(Joi.number()).required()    
})