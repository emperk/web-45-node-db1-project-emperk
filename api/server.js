const express = require("express");

const server = express();

server.use(express.json());

server.use('*', (req, res) => {
  res.status(404).json({
    message: '404 Error. Nothing found.',
  })
})

module.exports = server;
