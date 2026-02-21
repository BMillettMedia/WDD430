import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Document } from './documents.model';
import { MOCKDOCUMENTS } from './MOCKDOCUMENTS';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  // Observable Subject
  documentListChangedEvent = new Subject<Document[]>();

  private documents: Document[] = [];

  maxDocumentId: number = 0;

  constructor() {

    this.documents = MOCKDOCUMENTS;

    this.maxDocumentId = this.getMaxId();

  }

  // =========================
  // GET ALL DOCUMENTS
  // =========================
  getDocuments(): Document[] {

    return this.documents.slice();

  }

  // =========================
  // GET SINGLE DOCUMENT
  // =========================
  getDocument(id: string): Document | null {

    for (let document of this.documents) {

      if (document.id === id) {
        return document;
      }

    }

    return null;

  }

  // =========================
  // GET MAX ID
  // =========================
  getMaxId(): number {

    let maxId = 0;

    for (let document of this.documents) {

      const currentId = parseInt(document.id, 10);

      if (currentId > maxId) {
        maxId = currentId;
      }

    }

    return maxId;

  }

  // =========================
  // ADD DOCUMENT
  // =========================
  addDocument(newDocument: Document): void {

    if (!newDocument) return;

    this.maxDocumentId++;

    newDocument.id = this.maxDocumentId.toString();

    this.documents.push(newDocument);

    this.documentListChangedEvent.next(
      this.documents.slice()
    );

  }

  // =========================
  // UPDATE DOCUMENT
  // =========================
  updateDocument(
    originalDocument: Document,
    newDocument: Document
  ): void {

    if (!originalDocument || !newDocument) return;

    const pos = this.documents.indexOf(originalDocument);

    if (pos < 0) return;

    newDocument.id = originalDocument.id;

    this.documents[pos] = newDocument;

    this.documentListChangedEvent.next(
      this.documents.slice()
    );

  }

  // =========================
  // DELETE DOCUMENT
  // =========================
  deleteDocument(document: Document): void {

    if (!document) return;

    const pos = this.documents.indexOf(document);

    if (pos < 0) return;

    this.documents.splice(pos, 1);

    this.documentListChangedEvent.next(
      this.documents.slice()
    );

  }

}
