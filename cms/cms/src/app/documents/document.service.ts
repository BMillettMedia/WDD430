import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Document } from './documents.model';

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  documentListChangedEvent = new Subject<Document[]>();

  private documents: Document[] = [];

  private baseUrl = 'http://localhost:3000/documents';

  constructor(private http: HttpClient) {}

  // =========================
  // GET DOCUMENTS
  // =========================
  getDocuments(): void {
    this.http.get<{ message: string, documents: Document[] }>(this.baseUrl)
      .subscribe(response => {
        this.documents = response.documents || [];
        this.sortAndSend();
      });
  }

  // =========================
  // ADD DOCUMENT
  // =========================
  addDocument(document: Document): void {

    if (!document) return;

    document.id = '';

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    this.http.post<{ message: string, document: Document }>(
      this.baseUrl,
      document,
      { headers }
    )
    .subscribe(response => {
      this.documents.push(response.document);
      this.sortAndSend();
    });
  }

  // =========================
  // UPDATE DOCUMENT
  // =========================
  updateDocument(original: Document, updated: Document): void {

    if (!original || !updated) return;

    const pos = this.documents.findIndex(d => d.id === original.id);
    if (pos < 0) return;

    updated.id = original.id;

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    this.http.put(this.baseUrl + '/' + original.id, updated, { headers })
      .subscribe(() => {
        this.documents[pos] = updated;
        this.sortAndSend();
      });
  }

  // =========================
  // DELETE DOCUMENT
  // =========================
  deleteDocument(document: Document): void {

    if (!document) return;

    const pos = this.documents.findIndex(d => d.id === document.id);
    if (pos < 0) return;

    this.http.delete(this.baseUrl + '/' + document.id)
      .subscribe(() => {
        this.documents.splice(pos, 1);
        this.sortAndSend();
      });
  }

  // =========================
  // HELPER
  // =========================
  private sortAndSend() {
    this.documents.sort((a, b) => a.name < b.name ? -1 : 1);
    this.documentListChangedEvent.next(this.documents.slice());
  }
}