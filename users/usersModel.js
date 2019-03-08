const db = require('../data/dbConfig');

const getUsers = () => {
  return db('users');
};

const addUsers = body => {
  return db('users')
    .insert(body)
    .then(id => {
      return findById(id[0]);
    });
};

const findById = id => {
  return db('users')
    .where({ id })
    .first();
};

const deleteUser = id => {
  return db('users')
    .where({ id })
    .del();
};

module.exports = {
  getUsers,
  addUsers,
  findById,
  deleteUser
};
