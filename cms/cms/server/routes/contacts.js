const express = require('express');
const router = express.Router();
const Contact = require('../models/contact');

router.get('/', async (req, res) => {

  try {

    const contacts = await Contact.find();

    res.status(200).json({
      message: "Contacts fetched successfully",
      contacts: contacts
    });

  } catch (err) {
    res.status(500).json({ error: err });
  }

});

router.post('/', async (req, res) => {

  try {

    const contact = new Contact({
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
      imageUrl: req.body.imageUrl,
      group: req.body.group
    });

    const result = await contact.save();

    res.status(201).json({
      message: "Contact added successfully",
      contact: result
    });

  } catch (err) {
    res.status(500).json({ error: err });
  }

});

module.exports = router;