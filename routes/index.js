const express = require('express');

const app = express();

/* GET home page. */
app.get('/', (req, res, next) => {
  res.render('index', { title: 'David Hull | Node.js Engineer' });
});

module.exports = app;
