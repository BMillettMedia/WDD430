import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Document } from './documents.model';
import { DocumentListComponent } from './document-list/document-list.component';
import { DocumentDetail } from './document-detail/document-detail.component';

@Component({
  selector: 'cms-documents',
  standalone: true,
  imports: [
    CommonModule,
    DocumentListComponent,
    DocumentDetail
  ],
  templateUrl: './documents.component.html'
})
export class DocumentsComponent {
  selectedDocument?: Document;
}
