const boom = require('boom');
const { faker } = require('@faker-js/faker');
<<<<<<< HEAD
const pool = require('../libs/postgres.pool');
// const sequelize = require('../libs/sequelize');




=======
/* const pool = require('../libs/postgres.pool'); */
const sequelize = require('../libs/sequelize');
>>>>>>> e9876bf46bd904afb7bd0e5edff48bdfd4304a1e
class ProductsService {
  constructor() {
    this.products = [];
    this.generate();
    this.pool=pool;
    this.pool.on('error', (err) => console.error(err))
      
  }

  generate() {
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.products.push({
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        price: parseInt(faker.commerce.price(), 10),
        image: faker.image.url(),
        isBlock: faker.datatype.boolean(),
      });
    }
  }

  async create(data) {
    const newProduct = {
      id: faker.string.uuid(),
      ...data,
    };
    this.products.push(newProduct);
    return newProduct;
  }

<<<<<<< HEAD
 async find() {
    const query = 'SELECT * FROM tasks';
    const [data] = await sequelize.query(query); 
    return data
=======
  async find() {
    const query = 'SELECT * FROM tasks';
    const [data] = await sequelize.query(query);
    return data;
>>>>>>> e9876bf46bd904afb7bd0e5edff48bdfd4304a1e
  }

  async findOne(id) {
    const product = this.products.find((item) => item.id === id);
    if (!product) {
      throw boom.notFound('product not found');
    }
    if (product.isBlock) {
      throw boom.conflict('product is block');
    }
    return product;
  }

  async update(id, changes) {
    // Construir una lista de campos a actualizar y sus valores
    const fields = [];
    const values = [];
    let setClause = '';
  
    // Solo agregar los campos que fueron proporcionados en el cuerpo de la solicitud
    if (changes.name) {
      fields.push('name');
      values.push(changes.name);
    }
    if (changes.ruc) {
      fields.push('ruc');
      values.push(changes.ruc);
    }
    if (changes.direccion) {
      fields.push('direccion');
      values.push(changes.direccion);
    }
    if (changes.estado !== undefined) {  // Asegúrate de que el estado también se incluya si se proporciona
      fields.push('estado');
      values.push(changes.estado);
    }
  
    // Si no se proporciona ningún campo, lanzar un error
    if (fields.length === 0) {
      throw boom.badRequest('No se proporcionaron datos para actualizar');
    }
  
    // Construir la consulta de actualización dinámicamente
    setClause = fields.map((field, index) => `${field} = $${index + 1}`).join(', ');
    values.push(id);  // El id del proveedor es el último parámetro
  
    const query = `UPDATE proveedores SET ${setClause} WHERE id = $${values.length} RETURNING *`;
    const { rows } = await this.pool.query(query, values);
    
    if (rows.length === 0) {
      throw boom.notFound('Proveedor no encontrado');
    }
  
    return rows[0];
  }
  

  async delete(id) {
    const index = this.products.findIndex((item) => item.id === id);
    if (index === -1) {
      throw boom.notFound('product not found');
    }
    this.products.splice(index, 1);
    return { id };
  }
}

module.exports = ProductsService;
