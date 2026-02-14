import { Injectable, EventEmitter } from '@angular/core';
import { Document } from './documents.model';
import { MOCKDOCUMENTS } from './MOCKDOCUMENTS';

@Injectable({
  providedIn: 'root'
})

export class DocumentService {

  documents: Document[] = [];

  documentSelectedEvent = new EventEmitter<Document>();
  documentChangedEvent = new EventEmitter<Document[]>();
  

  constructor() {
    this.documents = MOCKDOCUMENTS;
  }

  getDocuments(): Document[] {
    return this.documents.slice();
  }

  getDocument(id: string): Document | null {

    for (const document of this.documents) {
      if (document.id === id) {
        return document;
      }
    }

    return null;

  }

  deleteDocument(id: string): void {

    this.documents = this.documents.filter(doc => doc.id !== id);

    this.documentChangedEvent.emit(this.documents.slice());

  }

  addDocument(document: Document): void {

  this.documents.push(document);

  this.documentChangedEvent.emit(this.documents.slice());

}

/*updateDocument(original: Document, updated: Document): void {

  const pos = this.documents.indexOf(original);

  if (pos < 0) {
    return;
  }

  this.documents[pos] = updated;

  this.documentChangedEvent.emit(this.documents.slice());

}*/

updateDocument(original: Document, updated: Document): void {

  const pos = this.documents.findIndex(d => d.id === original.id);

  if (pos < 0) return;

  this.documents[pos] = updated;

  this.documentChangedEvent.emit(this.documents.slice());

}



}
