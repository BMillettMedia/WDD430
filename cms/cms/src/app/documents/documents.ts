import { Component } from '@angular/core';
import { Document } from './documents.model';
import { DocumentListComponent } from './document-list/document-list.component';
import { DocumentDetail } from './document-detail/document-detail.component';
import { CommonModule } from '@angular/common';


@Component({
  standalone: true,
  selector: 'cms-documents',
  templateUrl: './documents.html',
  styleUrls: ['./documents.css'],
  imports: [CommonModule, DocumentListComponent, DocumentDetail]
})
export class DocumentsComponent {
  selectedDocument!: Document;
}
