import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { Document } from '../documents.model';
import { DocumentService } from '../document.service';

@Component({
  selector: 'cms-document-edit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './document-edit.component.html',
  styleUrls: ['./document-edit.component.css']
})
export class DocumentEditComponent implements OnInit {

  originalDocument: Document | null = null;

  document: Document = new Document(
    '',
    '',
    '',
    ''
  );

  editMode = false;

  constructor(
    private documentService: DocumentService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.route.params.subscribe(params => {

      const id = params['id'];

      if (!id) {
        this.editMode = false;
        return;
      }

      const foundDocument = this.documentService.getDocument(id);

      if (!this.originalDocument) {
        return;
      }

      this.editMode = true;

      this.document = new Document(
        this.originalDocument.id,
        this.originalDocument.name,
        this.originalDocument.description,
        this.originalDocument.url
      );

    });

  }

  onSave(): void {

    if (this.editMode && this.originalDocument) {

      this.documentService.updateDocument(this.originalDocument, this.document);

    } else {

      this.document.id = Date.now().toString();

      this.documentService.addDocument(this.document);

    }

    this.router.navigate(['/documents']);

  }

  onCancel(): void {

    this.router.navigate(['/documents']);

  }

}
