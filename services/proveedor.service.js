const boom = require('@hapi/boom');
const { faker } = require('@faker-js/faker');
const pool = require('../libs/postgres.pool');

class ProveedorService {
  constructor() {
    this.proveedor = [];
    this.generate();
    this.pool = pool;
    this.pool.on('error', (err) => console.error(err));
  }

  generate() {
    const limit = 100;
    for (let index = 0; index < limit; index++) {
      this.proveedor.push({
        id: faker.number.int({ min: 1, max: 1000 }),
        name: faker.company.name(),
        ruc: faker.string.numeric(13), 
        direccion: faker.location.streetAddress(),
        estado: faker.datatype.boolean(),
      });
    }
  }

  async create(data) {
    const { name, ruc, direccion, estado } = data;
    const query = 'INSERT INTO proveedor (name, ruc, direccion, estado) VALUES ($1, $2, $3, $4) RETURNING *';
    const values = [name, ruc, direccion, estado];
    const result = await this.pool.query(query, values);
    return result.rows[0];
  }
  


  async find() {
    const query = 'SELECT * FROM proveedor';
    const { rows } = await this.pool.query(query);
    return rows;
  }

  async findOne(id) {
    const query = 'SELECT * FROM proveedor WHERE id = $1';
    const { rows } = await this.pool.query(query, [id]);
    if (rows.length === 0) {
      throw boom.notFound('Proveedor no encontrado');
    }
    return rows[0];
  }

  async update(id, changes) {
    try {
      const { name, ruc, direccion, estado } = changes;
      
      const queryFind = 'SELECT * FROM proveedor WHERE id = $1';
      const { rows } = await this.pool.query(queryFind, [id]);
      if (rows.length === 0) {
        throw boom.notFound('Proveedor no encontrado');
      }
  
      const queryUpdate = `
        UPDATE proveedor
        SET name = $1, ruc = $2, direccion = $3, estado = $4
        WHERE id = $5
        RETURNING *`;
      
      const values = [name, ruc, direccion, estado, id];
      const result = await this.pool.query(queryUpdate, values);
  
      return result.rows[0]; 
    } catch (error) {
      throw boom.badImplementation('Error al actualizar el proveedor');
    }
  }
  

  async delete(id) {
    const query = 'DELETE FROM proveedor WHERE id = $1 RETURNING id';
    const { rowCount } = await this.pool.query(query, [id]);
    if (rowCount === 0) {
      throw boom.notFound('Proveedor no encontrado');
    }
    return { id };
  }
}

module.exports = ProveedorService;
