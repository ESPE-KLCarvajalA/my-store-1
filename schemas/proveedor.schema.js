const Joi = require('joi');

const id = Joi.number().integer();
const name = Joi.string().min(3).max(50);
const ruc = Joi.string().length(13);
const direccion = Joi.string().max(100);
const estado = Joi.boolean();

const createProveedorSchema = Joi.object({
  name: name.required(),
  ruc: ruc.required(),
  direccion: direccion.required(),
  estado: estado.required(),
});

const updateProveedorSchema = Joi.object({
  name: Joi.string().optional(),
  ruc: Joi.string().optional(),
  direccion: Joi.string().optional(),
  estado: Joi.boolean().optional(),
});

const getProveedorSchema = Joi.object({
  id: id.required(),
});

module.exports = { createProveedorSchema, updateProveedorSchema, getProveedorSchema };
