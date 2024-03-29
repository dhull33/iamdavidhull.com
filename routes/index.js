const express = require('express');

const app = express();

/* GET home page. */
app.get('/', (req, res, next) => {
  return res.render('index', {
    title: 'David Hull | Full Stack Developer',
    altText: 'David Hull - Node.js & JavaScript Developer'
  });
});

module.exports = app;
