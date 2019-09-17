const express = require('express');

const app = express();

/* GET home page. */
app.get('/', (req, res, next) => {
  return res.render('index', {
    title: 'David Hull | Node.js Engineer',
    altText: 'David Hull - Node.js & JavaScript Developer'
  });
});

app.get('/resume', (req, res, next) => {});

module.exports = app;
