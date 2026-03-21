const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

/* ROUTES */
const index = require('./server/routes/app');
const documentRoutes = require('./server/routes/documents');
const messageRoutes = require('./server/routes/messages');
const contactRoutes = require('./server/routes/contacts');

/* MIDDLEWARE */
app.use(cors());
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

/* INVALID ROUTE */
app.use((req, res) => {
  res.sendFile(path.join(__dirname, 'dist/cms/browser/index.html'));
});

/* MONGODB CONNECTION */
mongoose.connect('mongodb://localhost:27017/cms', {
  useNewUrlParser: true,
})
.then(() => console.log('✅ Connected to MongoDB'))
.catch(err => console.log('❌ MongoDB connection error:', err));

/* PORT */
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('🚀 Server running on port:', port);
});