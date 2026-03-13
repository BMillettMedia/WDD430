var express = require('express');
var router = express.Router();

var Document = require('../models/document');

/* GET all documents */
router.get('/', (req, res) => {

  Document.find()
    .then(documents => {
      res.status(200).json({
        message: 'Documents fetched successfully',
        documents: documents
      });
    })
    .catch(error => {
      res.status(500).json({
        message: 'Fetching documents failed'
      });
    });

});


/* CREATE document */
router.post('/', (req, res) => {

  const document = new Document({
    name: req.body.name,
    description: req.body.description,
    url: req.body.url,
    children: []
  });

  document.save()
    .then(createdDocument => {
      res.status(201).json({
        message: 'Document added successfully',
        document: createdDocument
      });
    })
    .catch(error => {
      res.status(500).json({
        message: 'Creating document failed'
      });
    });

});


/* UPDATE document */
router.put('/:id', (req, res) => {

  const document = {
    name: req.body.name,
    description: req.body.description,
    url: req.body.url
  };

  Document.updateOne({ _id: req.params.id }, document)
    .then(result => {
      res.status(200).json({
        message: 'Document updated successfully'
      });
    })
    .catch(error => {
      res.status(500).json({
        message: 'Updating document failed'
      });
    });

});


/* DELETE document */
router.delete('/:id', (req, res) => {

  Document.deleteOne({ _id: req.params.id })
    .then(result => {
      res.status(200).json({
        message: 'Document deleted successfully'
      });
    })
    .catch(error => {
      res.status(500).json({
        message: 'Deleting document failed'
      });
    });

});


module.exports = router;