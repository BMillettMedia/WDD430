var express = require('express');
var router = express.Router();

var Message = require('../models/message');

var messages = [
  new Message('1', 'Welcome', 'Welcome to the CMS!', 'Admin')
];

/* GET all messages */
router.get('/', (req, res) => {
  res.status(200).json({
    message: 'Messages fetched successfully',
    messages: messages
  });
});

/* CREATE message */
router.post('/', (req, res) => {

  const message = new Message(
    req.body.id,
    req.body.subject,
    req.body.messageText,
    req.body.sender
  );

  messages.push(message);

  res.status(201).json({
    message: 'Message added successfully',
    messageData: message
  });

});

/* UPDATE message */
router.put('/:id', (req, res) => {

  const message = messages.find(m => m.id === req.params.id);

  if (!message) {
    return res.status(404).json({ message: 'Message not found' });
  }

  message.subject = req.body.subject;
  message.messageText = req.body.messageText;

  res.status(200).json({
    message: 'Message updated successfully'
  });

});

/* DELETE message */
router.delete('/:id', (req, res) => {

  messages = messages.filter(m => m.id !== req.params.id);

  res.status(200).json({
    message: 'Message deleted successfully'
  });

});

module.exports = router;