const express = require('express');

const app = express();

/* GET users listing. */
app.get('/', (req, res, next) => {
  res.send('respond with a resource');
});

module.exports = app;
