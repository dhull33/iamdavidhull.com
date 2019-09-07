const express = require('express');

const app = express();

/* GET home page. */
app.get('/', (req, res, next) => {
  return res.render('index', {
    title: 'David Hull | Node.js Engineer',
    srcset:
      '/images/free-1600x1015.png 1600w, /images/free-1000x630.png 1000w, /images/free-800x504.png 800w',
    altText: 'David Hull - Node.js & JavaScript Developer'
  });
});

module.exports = app;
