var Sequence = require('../models/sequence');

/*var maxDocumentId;
var maxMessageId;
var maxContactId;
var sequenceId = null;*/

class SequenceGenerator {

  constructor() {

    this.sequenceId = null;

    this.maxDocumentId = 0;
    this.maxMessageId = 0;
    this.maxContactId = 0;

    Sequence.findOne()
      .then(sequence => {

        if (!sequence) {
          const newSequence = new Sequence({
            maxDocumentId: 0,
            maxMessageId: 0,
            maxContactId: 0
          });

          return newSequence.save();
        }

        return sequence;

      })
      .then(sequence => {

        this.sequenceId = sequence._id;
        this.maxDocumentId = sequence.maxDocumentId;
        this.maxMessageId = sequence.maxMessageId;
        this.maxContactId = sequence.maxContactId;

      })
      .catch(err => console.log(err));
  }

  nextId(collectionType) {

    let updateObject = {};
    let nextId;

    switch (collectionType) {

      case 'documents':
        this.maxDocumentId++;
        updateObject = { maxDocumentId: this.maxDocumentId };
        nextId = this.maxDocumentId;
        break;

      case 'messages':
        this.maxMessageId++;
        updateObject = { maxMessageId: this.maxMessageId };
        nextId = this.maxMessageId;
        break;

      case 'contacts':
        this.maxContactId++;
        updateObject = { maxContactId: this.maxContactId };
        nextId = this.maxContactId;
        break;

      default:
        return null;
    }

    Sequence.updateOne(
      { _id: this.sequenceId },
      { $set: updateObject }
    ).exec();

    return nextId.toString();
  }

}

module.exports = new SequenceGenerator();