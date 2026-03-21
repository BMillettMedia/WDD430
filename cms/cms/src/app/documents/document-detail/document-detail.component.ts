import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

import { Document } from '../documents.model';
import { DocumentService } from '../document.service';

@Component({
  selector: 'cms-document-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './document-detail.component.html',
  styleUrls: ['./document-detail.component.css']
})
export class DocumentDetailComponent {

  @Input() document!: Document;

  constructor(
    private documentService: DocumentService,
    private router: Router
  ) {}

  // ✅ Navigate to detail view using routing
  onView(): void {
    this.router.navigate(['/documents', this.document.id]);
  }

  // ✅ Delete using backend service
  onDelete(): void {
    this.documentService.deleteDocument(this.document);
    this.router.navigate(['/documents']);
  }

}