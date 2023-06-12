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
app.use(express.static(path.join(__dirname, '..', 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

app.set('port', process.env.PORT || port);

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '..', '..', 'html', '/index.html'));
});

server.listen(app.get('port'), app.get('ip'), () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
