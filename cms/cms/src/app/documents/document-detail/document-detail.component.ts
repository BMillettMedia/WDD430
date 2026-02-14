import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

import { Document } from '../documents.model';
import { DocumentService } from '../document.service';
import { WindRefService } from '../../wind-ref.service';

@Component({
  selector: 'cms-document-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './document-detail.component.html',
  styleUrls: ['./document-detail.component.css']
})
export class DocumentDetailComponent implements OnInit {

  document: Document | null = null;

  nativeWindow: any;

  constructor(
    private documentService: DocumentService,
    private route: ActivatedRoute,
    private router: Router,
    private windRefService: WindRefService
  ) {}

  ngOnInit(): void {

    this.nativeWindow = this.windRefService.getNativeWindow();

    this.route.params.subscribe(params => {

      const id: string = params['id'];

      const doc = this.documentService.getDocument(id);

      if (doc) {
        this.document = doc;
      }

    });

  }

  onView(): void {

    if (!this.document) return;

    this.nativeWindow.open(this.document.url);

  }

  onDelete(): void {

    if (!this.document) return;

    this.documentService.deleteDocument(this.document.id);

    this.router.navigate(['/documents']);

  }

}
