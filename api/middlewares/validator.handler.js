const boom = require('@hapi/boom');


//la funcion validatorHandler toma 2 valores
//que luego necesitan ser procesados por un
//middleware, por eso la clausura, el anidamiento
//de funcion
function validatorHandler(schema, property) {
  //Necesitamos middleware de forma dinamica
  return (req, res, next) => {
    const data = req[property];

    //si la info que nos envian
    //cumple con el schema, por eso lo valido
    const { error } = schema.validate(data, { abortEarly: false }); //abortEarly es para que nos arroje todos los errores de una
    if (error) {
      next(boom.badRequest(error));
    }
    next();
  }
};


module.exports = validatorHandler;
