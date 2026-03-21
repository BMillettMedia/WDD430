const express = require('express');
const router = express.Router();

const Document = require('../models/documents');
const SequenceGenerator = require('./sequenceGenerator');
const documents = require('../models/documents');
const sequenceGenerator = new SequenceGenerator();

/* GET all documents */
router.get('/', async (req, res) => {
  Document.find()
    .then(document => {
      res.status(200).json({
        message: 'Documetns Fetched Successfully',
        documents: documents
      });
    })
    .catch(error => {
    res.status(500).json({ 
      message: 'error',
      error: error
    });
  })
});

//add
router.post('/', (req, res) => {
  const nextId = sequenceGenerator.nextId('documents');

  const document = new Document({
    id: nextId,
    name: req.body.name,
    description: req.body.description,
    url: req.body.url
  });

  document.save()
    .then(created => {
      res.status(201).json({
        message: 'Added',
        document: created
      });
    });
});

// UPDATE
router.put('/:id', (req, res) => {
  Document.findOne({ id: req.params.id })
    .then(doc => {
      doc.name = req.body.name;
      doc.description = req.body.description;
      doc.url = req.body.url;

      return Document.updateOne({ id: req.params.id }, doc);
    })
    .then(() => {
      res.status(204).json({ message: 'Updated' });
    });
});

// DELETE
router.delete('/:id', (req, res) => {
  Document.deleteOne({ id: req.params.id })
    .then(() => {
      res.status(204).json({ message: 'Deleted' });
    });
});

module.exports = router;