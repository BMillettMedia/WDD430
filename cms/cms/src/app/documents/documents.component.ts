import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

import { DocumentListComponent } from './document-list/document-list.component';

@Component({
  selector: 'cms-documents',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    DocumentListComponent   // ✅ REQUIRED
  ],
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent {
}