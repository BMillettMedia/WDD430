import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Document } from './documents.model';
import { DocumentListComponent } from './document-list/document-list.component';
import { DocumentDetailComponent } from './document-detail/document-detail.component';

@Component({
  selector: 'cms-documents',
  standalone: true,
  imports: [
    CommonModule,
    DocumentListComponent,
    DocumentDetailComponent
  ],
  templateUrl: './documents.component.html'
})
export class DocumentsComponent {
  selectedDocument?: Document;
}
