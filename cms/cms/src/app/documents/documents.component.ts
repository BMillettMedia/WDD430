import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Document } from './documents.model';
import { RouterOutlet,RouterModule } from '@angular/router';
import { DocumentService } from './document.service';
import { DocumentListComponent } from './document-list/document-list.component';
import { DocumentDetailComponent } from './document-detail/document-detail.component';

@Component({
  selector: 'cms-documents',
  standalone: true,
  imports: [
    CommonModule,
    DocumentListComponent,
    DocumentDetailComponent,
    RouterOutlet,
    RouterModule
  ],
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent {


  
  /*selectedDocument!: Document;

  constructor(private documentService: DocumentService) {}

  ngOnInit() {
    this.documentService.documentSelectedEvent.subscribe(
      (document: Document) => {
        this.selectedDocument = document;
      }
    );*/
  
}
