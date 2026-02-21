import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

import { Document } from '../documents.model';
import { DocumentService } from '../document.service';
import { WindRefService } from '../../wind-ref.service';

@Component({
  selector: 'cms-document-item',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './document-item.component.html',
  styleUrls: ['./document-item.component.css']
})
export class DocumentItemComponent {

  @Input() document!: Document;

  private nativeWindow: any;

  constructor(
    private documentService: DocumentService,
    private router: Router,
    private windRefService: WindRefService
  ) {
    this.nativeWindow = this.windRefService.getNativeWindow();
  }

  onView(): void {
    if (!this.document?.url) return;

    this.nativeWindow.open(this.document.url, '_blank');
  }

  onEdit(): void {
    if (!this.document?.id) return;

    this.router.navigate(['/documents', this.document.id, 'edit']);
  }

  onDelete(): void {
    if (!this.document?.id) return;

    this.documentService.deleteDocument(this.document);
    this.router.navigate(['/documents']);
  }

}
