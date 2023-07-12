const express = require('express');
const cors = require('cors');
const { faker } = require('@faker-js/faker');

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');

//Importo la funcion que llama a archivo con la
//funcion que realiza los llamados a los endpoints
const routerApi = require('./routes');

const app = express();
const port = 3000;


//para poder usar los post, necesito el express.json
app.use(express.json());
app.use(cors());


// -- req es la petición que llega al servidor, y res es la respuesta que el servidor entregará.

app.get('/', (req, res) => {
  res.send('Server corriendo OK desde el puerto 3000')
})


//-- Funcion que llama a los endpoints
routerApi(app);



app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);




app.listen(port, () => {
  console.log('corriendo en mi puerto ', port);
})
