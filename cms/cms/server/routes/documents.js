var express = require('express');
var router = express.Router();

var Document = require('../models/document');

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

module.exports = router;