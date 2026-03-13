import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Document } from './documents.model';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  documentSelectedEvent = new EventEmitter<Document>();
  documentListChangedEvent = new Subject<Document[]>();

  documents: Document[] = [];
  maxDocumentId: number = 0;

  // REPLACE WITH REAL FIREBASE URL
  private firebaseUrl =
    'https://YOUR_PROJECT_ID-default-rtdb.firebaseio.com/documents.json';

  constructor(private http: HttpClient) {}

  // =========================
  // GET ALL DOCUMENTS (HTTP)
  // =========================
 getDocuments() {

  this.http.get<{message:string, documents:any}>(
    'http://localhost:3000/documents'
  )
  .subscribe(response => {

    this.documents = response.documents.map((doc:any) => {
      return {
        id: doc._id,
        name: doc.name,
        description: doc.description,
        url: doc.url,
        children: doc.children
      };
    });

    this.documentListChangedEvent.next(this.documents.slice());

  });

}

  // =========================
  // GET SINGLE DOCUMENT
  // =========================
  getDocument(id: string): Document | null {

    return this.documents.find(doc => doc.id === id) || null;
  }

  // =========================
  // ADD DOCUMENT
  // =========================
  addDocument(document: Document): void {

    if (!document) return;

    document.id = (++this.maxDocumentId).toString();

    this.documents.push(document);
    this.storeDocuments();
  }

  // =========================
  // UPDATE DOCUMENT
  // =========================
  updateDocument(original: Document, updated: Document): void {

    if (!original || !updated) return;

    const index =
      this.documents.findIndex(d => d.id === original.id);

    if (index !== -1) {
      updated.id = original.id;
      this.documents[index] = updated;
      this.storeDocuments();
    }
  }

  // =========================
  // DELETE DOCUMENT
  // =========================
  deleteDocument(document: Document): void {

    this.documents =
      this.documents.filter(d => d.id !== document.id);

    this.storeDocuments();
  }

  // =========================
  // STORE DOCUMENTS (HTTP PUT)
  // =========================
  storeDocuments(): void {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    this.http.put(this.firebaseUrl, this.documents, { headers })
      .subscribe(() => {
        this.documentListChangedEvent
          .next(this.documents.slice());
      });
  }

  // =========================
  // GET MAX ID
  // =========================
  getMaxId(): number {

    return this.documents.reduce(
      (max, doc) => Math.max(max, +doc.id),
      0
    );
  }
}