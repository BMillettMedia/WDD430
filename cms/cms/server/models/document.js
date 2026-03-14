const mongoose = require('mongoose');

const documentSchema = mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  url: String,
  children: Array
});

module.exports = mongoose.model('Document', documentSchema);