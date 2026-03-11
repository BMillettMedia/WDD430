class message{
  constructor(id,subject,messageText,sender){
    this.id=id,
    this.subject=subject,
    this.messageText=messageText,
    this.sender=sender
  }
}

module.exports = message;