class Document{

  constructor(id,name,description,url,children){
    this.id = id,
    this.name = name,
    this.description = description,
    this.url = url,
    this.children = children
  }
}

module.exports = Document;