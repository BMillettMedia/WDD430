const express = require('express');
const router = express.Router();
const Document = require('../modles/document');

/* GET all documents */

router.get('/', async (req, res) => {
  try {
    const documents = await Document.find();
    res.status(200).json({
      message: "Documents fetched successfully",
      documents: documents
    });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

/* POST create document */

router.post('/', async (req, res) => {
  try {
    const document = new Document({
      name: req.body.name,
      description: req.body.description,
      url: req.body.url,
      children: req.body.children
    });

    const result = await document.save();

    res.status(201).json({
      message: "Document added successfully",
      document: result
    });

  } catch (err) {
    res.status(500).json({ error: err });
  }
});

/* PUT update */

router.put('/:id', async (req, res) => {
  try {

    await Document.updateOne(
      { _id: req.params.id },
      {
        name: req.body.name,
        description: req.body.description,
        url: req.body.url
      }
    );

    res.status(200).json({ message: "Document updated" });

  } catch (err) {
    res.status(500).json({ error: err });
  }
});

/* DELETE */

router.delete('/:id', async (req, res) => {
  try {

    await Document.deleteOne({ _id: req.params.id });

    res.status(200).json({ message: "Document deleted" });

  } catch (err) {
    res.status(500).json({ error: err });
  }
});

module.exports = router;