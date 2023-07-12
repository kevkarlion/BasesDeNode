const express = require('express');
const productsService = require('../services/product.service');
const validatorHandler = require('../middlewares/validator.handler');
const { createProductSchema, updateProductSchema, getProductSchema } = require('../schemas/product.schema');


//creo una instancia de la clase
const service = new productsService();
//debo eliminar las partes especializadas
//despues del slash /, ya que el router se encarga de ello
const router = express.Router();






//filter que va antes del products:id,
//ya que sino tomara la palabra filter como un id y
//generara un choche de endpoints.
router.get('/filter', async (req, res) => {
  res.send('Yo soy un filter!!')
});



//--EJEMPLO DE GET CON SOLICITUD A UN ID

//En req, es donde viene el pedido desde el cliente con ciertos datos.
//Estos datos de solicitud son los que
//despues usamos para procesar la informacion.
//Como en este caso con el id que solicita.
router.get('/:id',
  //Agrego la funcion del validator, pasandole los schemas y parametros
  //para que pueda corroborar que los parametros estan bien.
  validatorHandler(getProductSchema, 'params'),
  async (req, res, next) => {
    try {
      //Le indico con las llaves, que de todas las
      //propiedades que tiene params, solo me interesa el id.
      const { id } = req.params;
      const product = await service.findOne(id);
      res.json(product);
    } catch (error) {
      //Le digo explicitamente que ejecute los
      //middleware que tengamos declarados.
      next(error);
    };
  }
);





router.get('/', async (req, res) => {
  try {
    const products = await service.find();
    res.status(200).json(products);
  } catch (error) {
    throw new Error("Algo no salio bien en la carga de datos");
  };

});


router.post('/',
validatorHandler(createProductSchema, 'body'),
async (req, res) => {
  try {
    const body = req.body;
    newProduct = await service.create(body);
    //envio de estado
    res.status(201).json(newProduct);
  } catch (error) {
    res.send(404).json({
      message: error.message,
    });
  }
  }
);


// Por convencion, patch es quien hace las actualizaciones parciales.
//next es para pasar el error al siguiente
//manejador de errores middleware
router.patch('/:id',
  validatorHandler(getProductSchema, 'params'),
  validatorHandler(updateProductSchema, 'body'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const data = req.body;
      const productModify = await service.update(id, data);
      res.status(201).json(productModify);
    } catch (err) {
      next(err);
    };
  }
);


router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params;
    await service.delete(id);
    res.status(200).json({
      message: 'Elemento eliminado'
    });
  } catch (error) {
    next(error);
  }

});



module.exports = router;
