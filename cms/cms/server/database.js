const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://cmsAdmin:DBm36822758@cluster0.mhqj378.mongodb.net/'
  /*, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}*/
);//mongodb temp link get new one soon

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.once('open', function () {
  console.log('Connected to MongoDB database');
});

module.exports = db;