const express = require('express');
const router = express.Router();
const Message = require('../models/message');

router.get('/', async (req, res) => {
  try {
    const messages = await Message.find();
    res.status(200).json(messages);
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

router.post('/', async (req, res) => {

  try {

    const message = new Message({
      subject: req.body.subject,
      msgText: req.body.msgText,
      sender: req.body.sender
    });

    const result = await message.save();

    res.status(201).json({
      message: "Message added successfully",
      result: result
    });

  } catch (err) {
    res.status(500).json({ error: err });
  }
});

module.exports = router;