var express = require('express');
var router = express.Router();

const Contact = require('../models/contacts');
const sequenceGenerator = require('./sequenceGenerator');

// =========================
// GET ALL CONTACTS
// =========================
router.get('/', (req, res, next) => {
  Contact.find()
    .populate('group')
    .then(contacts => {
      res.status(200).json({
        message: 'Contacts fetched successfully',
        contacts: contacts
      });
    })
    .catch(error => {
      res.status(500).json({
        message: 'An error occurred',
        error: error
      });
    });
});

// =========================
// ADD CONTACT
// =========================
router.post('/', (req, res, next) => {
  const maxContactId = sequenceGenerator.nextId('contacts');

  const contact = new Contact({
    id: maxContactId,
    name: req.body.name,
    email: req.body.email,
    phone: req.body.phone,
    imageUrl: req.body.imageUrl,
    group: req.body.group
  });

  contact.save()
    .then(createdContact => {
      res.status(201).json({
        message: 'Contact added successfully',
        contact: createdContact
      });
    })
    .catch(error => {
      res.status(500).json({
        message: 'An error occurred',
        error: error
      });
    });
});

// =========================
// UPDATE CONTACT
// =========================
router.put('/:id', (req, res, next) => {
  Contact.findOne({ id: req.params.id })
    .then(contact => {
      contact.name = req.body.name;
      contact.email = req.body.email;
      contact.phone = req.body.phone;
      contact.imageUrl = req.body.imageUrl;
      contact.group = req.body.group;

      Contact.updateOne({ id: req.params.id }, contact)
        .then(() => {
          res.status(204).json({
            message: 'Contact updated successfully'
          });
        });
    })
    .catch(error => {
      res.status(500).json({
        message: 'Contact not found',
        error: error
      });
    });
});

// =========================
// DELETE CONTACT
// =========================
router.delete('/:id', (req, res, next) => {
  Contact.deleteOne({ id: req.params.id })
    .then(() => {
      res.status(204).json({
        message: 'Contact deleted successfully'
      });
    })
    .catch(error => {
      res.status(500).json({
        message: 'An error occurred',
        error: error
      });
    });
});

module.exports = router;