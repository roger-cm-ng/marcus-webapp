/* eslint-disable no-console */
const express = require('express');
const compression = require('compression');
const path = require('path');
const http = require('http');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const port = 8081;
const app = express();
const server = http.Server(app);

app.use(compression());
app.use(express.static(path.join(__dirname, '..', '..' , '..', 'dist')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.set('port', process.env.PORT || port);

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '..', '..', 'html', 'index.html'));
});
app.get('/article1', function(req, res) {
  res.sendFile(path.join(__dirname, '..', '..', 'html', 'article1.html'));
});
app.get('/contact', function(req, res) {
  res.sendFile(path.join(__dirname, '..', '..', 'html', 'contact.html'));
});
app.get('/shop', function(req, res) {
  res.sendFile(path.join(__dirname, '..', '..', 'html', 'shop.html'));
});
app.get('/thanks', function(req, res) {
  res.sendFile(path.join(__dirname, '..', '..', 'html', 'thanks.html'));
});

app.get('/players/araujo', function(req, res) {
  res.sendFile(path.join(__dirname, '..', '..', 'html', 'players', 'araujo.html'));
});
app.get('/players/hernandez', function(req, res) {
  res.sendFile(path.join(__dirname, '..', '..', 'html', 'players', 'hernandez.html'));
});
app.get('/players/kimminjae', function(req, res) {
  res.sendFile(path.join(__dirname, '..', '..', 'html', 'players', 'kimminjae.html'));
});
app.get('/players/kvaratskhelia', function(req, res) {
  res.sendFile(path.join(__dirname, '..', '..', 'html', 'players', 'kvaratskhelia.html'));
});
app.get('/players/maignan', function(req, res) {
  res.sendFile(path.join(__dirname, '..', '..', 'html', 'players', 'maignan.html'));
});
app.get('/players/mbappe', function(req, res) {
  res.sendFile(path.join(__dirname, '..', '..', 'html', 'players', 'mbappe.html'));
});
app.get('/players/osimhen', function(req, res) {
  res.sendFile(path.join(__dirname, '..', '..', 'html', 'players', 'osimhen.html'));
});
app.get('/players/trippier', function(req, res) {
  res.sendFile(path.join(__dirname, '..', '..', 'html', 'players', 'trippier.html'));
});


server.listen(app.get('port'), app.get('ip'), () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
