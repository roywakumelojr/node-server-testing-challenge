const express = require('express');

const studentsRouter = require('../students/studentsRouter.js');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.status(200).json({ api: "up", environment: process.env.DB_ENV });
});

server.use('/api/students', studentsRouter);


module.exports = server;
