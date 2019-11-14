const db = require('../data/dbConfig')

module.exports = {
  find,
  findById,
  add,
  update,
  remove
}

function find() {
  return db('students')
}

function findById(id) {
  return db('students')
  .where({ id }).first();
}

function add(students) {
  return db("students")
  .insert(students);          
}

function update(changes, id) {
  return db("students")
  .update(changes)
  .where({ id });      
}

function remove(id) {
  return db("students")
  .delete()
  .where({ id });      
}