const db = require("../data/dbConfig.js");

module.exports = {
  insert,
  update,
  remove,
  getAll,
  findById
};

function insert(student) {
  return (
    db("students")
      .insert(student, "id")
      .then(ids => {
        const id = ids[0];
        return db("students")
          .where({ id })
          .first();
      })
  );
}

async function update(id, changes) {
  return null;
}

function remove(id) {
  return null;
}

function getAll() {
  return db("students");
}

function findById(id) {
  return null;
}
