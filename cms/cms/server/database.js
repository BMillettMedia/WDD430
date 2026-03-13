const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

mongoose.connection.once('open', function () {
  console.log("Connected to MongoDB Atlas successfully");
});

module.exports = db;