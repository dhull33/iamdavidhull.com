const express = require('express');

const app = express();

/* GET home page. */
app.get('/', (req, res, next) => {
  return res.render('index', {
    title: 'David Hull | Node.js Engineer',
    srcset:
      ' /images/brain-800x800.png 800w, /images/brain-500x500.png' +
      ' 500w, /images/brain-260x260.png 260w',
    altText: 'David Hull - Node.js & JavaScript Developer'
  });
});

module.exports = app;
