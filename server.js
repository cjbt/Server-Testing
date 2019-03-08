const express = require('express');
const db = require('./users/usersModel');
const server = express();

server.use(express.json());

server.get('/', (req, res) => {
  res.send('<h1>Server working</h1>');
});

server.post('/users', (req, res) => {
  const body = req.body;

  db.addUsers(body)
    .then(user => {
      if (!user) {
        res.status(404).json({ message: 'user not found' });
      } else {
        res.status(201).json(user);
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

server.delete('/:id', (req, res) => {
  const id = req.params.id;
  db.deleteUser({ id })
    .then(res => {
      res.status(200).res.json(res);
    })
    .catch(err => res.status(500).json(err));
});

module.exports = server;
