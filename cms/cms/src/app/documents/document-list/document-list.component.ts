import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Document } from '../document.serive';
import { DocumentService } from '../document.service';
import { DocumentItemComponent } from '../document-item/document-item.component';

@Component({
  selector: 'cms-document-list',
  standalone: true,
  imports: [CommonModule, DocumentItemComponent],
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {

  documents: Document[] = [];

  constructor(private documentService: DocumentService) {}

  ngOnInit() {
    this.documents = this.documentService.getDocuments();
  }

  onSelected(document: Document) {
    this.documentService.documentSelectedEvent.emit(document);
  }
}
