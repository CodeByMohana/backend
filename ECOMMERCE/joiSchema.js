const Joi = require("joi");

const productSchema = Joi.object({
    name: Joi.string().required(),
    image: Joi.string().required(),
    price: Joi.number().required().min(0),
    description: Joi.string(),
});
module.exports = productSchema;  //export the schema
