var express = require('express');
var router = express.Router();

const Message = require('../models/messages');
const sequenceGenerator = require('./sequenceGenerator');

// =========================
// GET ALL MESSAGES
// =========================
router.get('/', (req, res, next) => {
  Message.find()
    .populate('sender')
    .then(messages => {
      res.status(200).json({
        message: 'Messages fetched successfully',
        messages: messages
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
// ADD MESSAGE
// =========================
router.post('/', (req, res, next) => {
  const maxMessageId = sequenceGenerator.nextId('messages');

  const message = new Message({
    id: maxMessageId,
    subject: req.body.subject,
    msgText: req.body.msgText,
    sender: req.body.sender
  });

  message.save()
    .then(createdMessage => {
      res.status(201).json({
        message: 'Message added successfully',
        messageObj: createdMessage
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
// UPDATE MESSAGE
// =========================
router.put('/:id', (req, res, next) => {
  Message.findOne({ id: req.params.id })
    .then(message => {
      message.subject = req.body.subject;
      message.msgText = req.body.msgText;
      message.sender = req.body.sender;

      Message.updateOne({ id: req.params.id }, message)
        .then(() => {
          res.status(204).json({
            message: 'Message updated successfully'
          });
        });
    })
    .catch(error => {
      res.status(500).json({
        message: 'Message not found',
        error: error
      });
    });
});

// =========================
// DELETE MESSAGE
// =========================
router.delete('/:id', (req, res, next) => {
  Message.deleteOne({ id: req.params.id })
    .then(() => {
      res.status(204).json({
        message: 'Message deleted successfully'
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