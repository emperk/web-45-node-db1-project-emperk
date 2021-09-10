const db = require('../../data/db-config');

const getAll = () => {
  // DO YOUR MAGIC
  // select * from accounts;
  return db('accounts');
}

const getById = (id) => {
  // DO YOUR MAGIC
  // select * from accounts where id = 1;
  return db('accounts').where('id', id).first()
}

const create = () => {
  // DO YOUR MAGIC
}

const updateById = () => {
  // DO YOUR MAGIC
}

const deleteById = () => {
  // DO YOUR MAGIC
}

module.exports = {
  getAll,
  getById,
  create,
  updateById,
  deleteById,
}
