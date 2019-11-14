const db = require('../data/dbConfig')

module.exports = {
  find,
  findById,
  findSteps,
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

function findSteps(id) {
  return db("steps as S")
  .join("students as sc", "sc.id", "===", "S.scheme_id")
  .where({ scheme_id: id })
  .select("S.id", "sc.scheme_name", "S.step_number", "S.instructions");
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