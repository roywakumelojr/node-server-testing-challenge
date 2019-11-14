const express = require('express');

const Students = require('../students/studentsModel.js');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.status(200).json({ api: 'up' });
});

server.get('/students', (req, res) => {
  Students.getAll()
  .then(students => {
    res.status(200).json(students);
  })
  .catch(error => {
    res.status(500).json(error);
  });
});

module.exports = server;
