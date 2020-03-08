const path = require('path');
const express = require('express');
const pageInfo = require('./pageInfo');

const app = express();

var moment = require('moment');
app.locals.moment = moment;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('pages/index', pageInfo.index);
});

app.get('/contact', (req, res) => {
  res.render('pages/contact', pageInfo.contact);
});

app.get('/resources', (req, res) => {
  res.render('pages/resources', pageInfo.resources);
});

app.get('/definitions', (req, res) => {
  res.render('pages/definitions', pageInfo.definitions);
});

app.use(express.static(path.join(__dirname, 'public')));

app.use(function (req, res, next) {
  res.status(404);
  res.send('404: File Not Found');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
  console.log(`Listening on port ${PORT}`);
});