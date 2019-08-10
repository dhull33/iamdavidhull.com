const express = require('express');

const app = express();

/* GET home page. */
app.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = app;
