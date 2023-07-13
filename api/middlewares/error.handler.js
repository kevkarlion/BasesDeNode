const { isBoom } = require("@hapi/boom");

function logErrors(err, req, res, next) {
  console.log("soy la funcion logErrors");
  console.error(err);
  next(err);

};



//Aun si no estoy usando el parametro next, se debe poner
//para que se detecte que es un middleware de tipo error
function errorHandler (err, req, res, next){
  console.log("soy la funcion errorHandler");
  res.status(500).json({
    message: err.message,

    // STACK cadena de texto que muestra la pila de llamadas
    // en el momento del error
    stack: err.stack
  });
};

function boomErrorHandler (err, req, res, next){
  if (err.isBoom) {
    //Boom tiene toda la info del error
    //con output obtengo estos datos
    const { output } = err;

    //satatusCode nos indica el tipo de error.
    //Con payload enviamos la informacion
    res.status(output.statusCode).json(output.payload);
  } else {
    next(err);
  };
};




module.exports = { logErrors, errorHandler, boomErrorHandler };


