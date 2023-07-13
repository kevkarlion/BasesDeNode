const Joi = require('joi');

const id = Joi.string().uuid();

const name = Joi.string()
  .min(3)
  .max(15);

const image = Joi.string().uri();

const price = Joi.number()
  .integer()
  .min(10);




//Uso el schema de esta manera, donde
//puedo agregar los daatos que
//considere son necesarios.
const createProductSchema = Joi.object({
  name: name.required(),
  price: price.required(),
  image: image.required()
});


const updateProductSchema = Joi.object({
  name: name,
  price: price,
  image: image
});

const getProductSchema = Joi.object({
  id: id.required()
});


module.exports = { createProductSchema, updateProductSchema, getProductSchema };
