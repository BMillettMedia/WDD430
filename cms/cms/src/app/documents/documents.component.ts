import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DocumentListComponent } from './document-list/document-list';

@Component({
  selector: 'cms-documents',
  standalone: true,
  imports: [
    CommonModule,
    DocumentListComponent
  ],
  templateUrl: './documents.html'
})
export class DocumentsComponent {}
