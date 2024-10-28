const Joi = require('joi');

export default Joi.object({
  titulo: Joi.string().required(),
  descricao: Joi.string().required(),
  totaldepaginas: Joi.number().required(),
  data_lancamento: Joi.date().required(),
    generosIds: Joi.array().items(Joi.number()).required(),
    editoraIds: Joi.array().items(Joi.number()).required()
});

