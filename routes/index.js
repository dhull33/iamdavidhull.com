const express = require('express');

const app = express();

/* GET home page. */
app.get('/', (req, res, next) => {
  return res.render('index', {
    title: 'David Hull | Node.js Engineer',
    srcset:
      '/images/bg-1456x1600.jpeg 1456w, /images/bg-910x1000.jpeg 910w,' +
      ' /images/bg-728x800.jpeg 728w, /images/bg-455x500.jpeg 455w'
  });
});

module.exports = app;
