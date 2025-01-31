const Boom = require('@hapi/boom'); // Usar la nueva librería

function validatorHandler(schema, property) {
  return (req, res, next) => {
    const data = req[property];
    const { error } = schema.validate(data, { abortEarly: false });
    if (error) {
      
      // Devolver un error con Boom
      return next(Boom.badRequest(error.details.map(err => err.message).join(', ')));
    }
    next();
  };
}

module.exports = validatorHandler;
