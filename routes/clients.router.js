const express = require('express');
const { faker } = require('@faker-js/faker');

const router = express.Router();


router.get('/filter', (req, res) => {
  res.send('Yo soy un filter!!')
});


router.get('/', (req, res) => {
  res.json({

    text: "Clientes",
    name: 'Pepito Colores',
    nac: '15/05/1996',
    mail: 'lalala@hotmail'

  });
});

router.get('/:id', (req, res) =>{
  const { id } = req.params;
  res.json({

    id,
    name: 'Pepito Colores',
    nac: '15/05/1996',
    mail: 'lalala@hotmail'

  });
});



module.exports = router;
