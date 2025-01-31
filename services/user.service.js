const boom = require('boom');
<<<<<<< HEAD
const conn = require('../libs/postgres');
=======
const getConnection = require('../libs/postgres');
>>>>>>> e9876bf46bd904afb7bd0e5edff48bdfd4304a1e

class UserService {
  constructor() {}

  async create(data) {
    return data;
  }

  async find() {
<<<<<<< HEAD
    const client = await conn.getConnection();
    const result = await client.query('SELECT * FROM tasks');
    return result.rows;
=======
    const client = await getConnection();
    const rst = await client.query('SELECT * FROM tasks');
    return rst.rows;
>>>>>>> e9876bf46bd904afb7bd0e5edff48bdfd4304a1e
  }

  async findOne(id) {
    return { id };
  }

  async update(id, changes) {
    return {
      id,
      changes,
    };
  }

  async delete(id) {
    return { id };
  }
}

module.exports = UserService;
