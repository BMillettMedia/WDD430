var express = require('express');
var router = express.Router();

var Contact = require('../models/contact');

var contacts = [
  new Contact('1', 'John Doe', 'john@email.com', '555-5555', '', null)
];

/* GET all contacts */
router.get('/', (req, res) => {
  res.status(200).json({
    message: 'Contacts fetched successfully',
    contacts: contacts
  });
});

/* CREATE contact */
router.post('/', (req, res) => {

  const contact = new Contact(
    req.body.id,
    req.body.name,
    req.body.email,
    req.body.phone,
    req.body.imageUrl,
    req.body.group
  );

  contacts.push(contact);

  res.status(201).json({
    message: 'Contact added successfully',
    contact: contact
  });

});

/* UPDATE contact */
router.put('/:id', (req, res) => {

  const contact = contacts.find(c => c.id === req.params.id);

  if (!contact) {
    return res.status(404).json({ message: 'Contact not found' });
  }

  contact.name = req.body.name;
  contact.email = req.body.email;
  contact.phone = req.body.phone;

  res.status(200).json({
    message: 'Contact updated successfully'
  });

});

/* DELETE contact */
router.delete('/:id', (req, res) => {

  contacts = contacts.filter(c => c.id !== req.params.id);

  res.status(200).json({
    message: 'Contact deleted successfully'
  });

});

module.exports = router;