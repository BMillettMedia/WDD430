import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Document } from '../documents.model';
import { DocumentItemComponent } from '../document-item/document-item.component';

@Component({
  selector: 'cms-document-list',
  standalone: true,
  imports: [CommonModule, DocumentItemComponent],
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent {
  @Output() selectedDocumentEvent = new EventEmitter<Document>();

  documents: Document[] = [
    new Document('1', 'Angular Guide', 'Angular documentation', 'https://angular.io'),
    new Document('2', 'TypeScript Handbook', 'TS docs', 'https://www.typescriptlang.org'),
    new Document('3', 'RxJS Docs', 'Reactive programming', 'https://rxjs.dev'),
    new Document('4', 'MDN Web Docs', 'Web standards', 'https://developer.mozilla.org')
  ];
  //get more info when this actually works

  onSelectedDocument(document: Document) {
    this.selectedDocumentEvent.emit(document);
  }
}
