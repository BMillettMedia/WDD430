const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
  subject: String,
  msgText: String,
  sender: String
});

module.exports = mongoose.model('Message', messageSchema);