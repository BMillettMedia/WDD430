import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

import { Document } from '../documents.model';
import { DocumentService } from '../document.service';

@Component({
  selector: 'cms-document-edit',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './document-edit.component.html',
  styleUrls: ['./document-edit.component.css']
})
export class DocumentEditComponent implements OnInit {

  originalDocument: Document | null = null;

  document: Document = new Document('', '', '', '');

  editMode: boolean = false;

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

      this.originalDocument = this.documentService.getDocument(id);

      if (!this.originalDocument) {
        return;
      }

      this.editMode = true;

      this.document = {
        id: this.originalDocument.id,
        name: this.originalDocument.name,
        description: this.originalDocument.description,
        url: this.originalDocument.url
      };

    });

  }

  onSave(): void {

    const newDocument = new Document(
      '',
      this.document.name,
      this.document.description,
      this.document.url
    );

    if (this.editMode && this.originalDocument) {

      this.documentService.updateDocument(
        this.originalDocument,
        newDocument
      );

    } else {

      this.documentService.addDocument(newDocument);

    }

    this.router.navigate(['/documents']);
  }

  onCancel(): void {
    this.router.navigate(['/documents']);
  }

}
