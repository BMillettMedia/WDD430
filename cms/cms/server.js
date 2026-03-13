var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');

require('./server/database');

var app = express();

/* IMPORT ROUTES */
var index = require('./server/routes/app');
var documentRoutes = require('./server/routes/documents');
var messageRoutes = require('./server/routes/messages');
var contactRoutes = require('./server/routes/contacts');

/* MIDDLEWARE */
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

/* SERVE ANGULAR BUILD */
app.use(express.static(path.join(__dirname, 'dist/cms/browser')));

/* ROUTES */
app.use('/', index);
app.use('/documents', documentRoutes);
app.use('/messages', messageRoutes);
app.use('/contacts', contactRoutes);

/* INVALID URL HANDLER */
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'dist/cms/browser/index.html'));
});

/* PORT */
const port = 3000;

/* START SERVER */
app.listen(port, () => {
  console.log('Server running on port: ' + port);
});

/*cors logic*/
app.use(cors());