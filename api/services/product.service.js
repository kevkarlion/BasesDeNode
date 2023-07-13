
const { faker } = require('@faker-js/faker');
const boom = require('@hapi/boom');

class productsService {

  constructor() {
    this.product = [];
    this.generate();
  }

  async generate() {
    const limit = 100;
    for (let i = 0; i < limit; i++) {
      this.product.push({
        id: faker.string.uuid(),
        nombre: faker.commerce.productName(),

        //el 10 en el parseInt es para indicar la base decimal
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.url(),
        isBlock: faker.datatype.boolean()
      });
    };
  };

  async create(body) {
    const newProduct = {
      id: faker.string.uuid(),

      //spread operation
      //pasa los datos de manera individual, y no todo el bloque como objeto
      ...body
    };
    this.product.push(newProduct);
    return newProduct;
  };

  find() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.product);
      }, 2000);
    })
  };

  async findOne(id) {
    const findItemId = this.product.find(item => item.id === id);
    if (!findItemId) {
      throw boom.notFound("product not found");
    };
    if (findItemId.isBlock) {
      throw boom.conflict("product is block");
    }
    return findItemId;
  };

  async update(id, data) {
    const index = this.product.findIndex(item => item.id === id);
    if (index === -1) {

      //el boom ayuda a gestionar mejor los tipos
      //de errores.
      throw boom.notFound("product not found");

      //throw new Error("elemento no encontrado");
    } else {
      const changeProduct = this.product[index];
      this.product[index] = {
        ...changeProduct,

        //data sobre escribe la info que haya previamente. Esto es asi,
        //porque esta al final en la declaracion
        ...data
      };
      return this.product[index];
    };

  };

  async delete(id) {
    const index = this.product.findIndex(item => item.id === id);
    if (index === -1) {
      throw boom.notFound("product not found");
      //throw new Error("elemento no encontrado");
    } else {
      this.product.splice(index, 1);
    };
  };
};


module.exports = productsService;
