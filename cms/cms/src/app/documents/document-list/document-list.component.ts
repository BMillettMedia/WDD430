import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Document } from '../documents.model';
import { DocumentService } from '../document.service';
import { DocumentItemComponent } from '../document-item/document-item.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'cms-document-list',
  standalone: true,
  imports: [CommonModule, DocumentItemComponent,RouterModule],
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {

  documents: Document[] = [];

  constructor(private documentService: DocumentService) {}

  ngOnInit(): void {

  this.documents = this.documentService.getDocuments();

  this.documentService.documentChangedEvent.subscribe(
    (documents: Document[]) => {
      this.documents = documents;
    }
  );

}

  onSelected(document: Document) {
    this.documentService.documentSelectedEvent.emit(document);
  }
}
