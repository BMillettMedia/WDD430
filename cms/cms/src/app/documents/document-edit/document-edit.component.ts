import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

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

  originalDocument!: Document;   // ← not nullable anymore
  document!: Document;

  editMode = false;
  id!: string;

  constructor(
    private documentService: DocumentService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.route.params.subscribe(params => {

      this.id = params['id'];

      // ADD MODE
      if (!this.id) {
        this.editMode = false;
        this.document = new Document('', '', '', '');
        return;
      }

      // EDIT MODE
      const doc = this.documentService.getDocument(this.id);

      if (!doc) {
        this.router.navigate(['/documents']);
        return;
      }

      this.originalDocument = doc;
      this.editMode = true;

      // clone object so we don't mutate original directly
      this.document = new Document(
        doc.id,
        doc.name,
        doc.description,
        doc.url
      );
    });
  }

  onSubmit(form: NgForm): void {

    const value = form.value;

    const newDocument = new Document(
      this.originalDocument?.id ?? '',
      value.name,
      value.description,
      value.url
    );

    if (this.editMode) {
      this.documentService.updateDocument(this.originalDocument, newDocument);
    } else {
      this.documentService.addDocument(newDocument);
    }

    this.router.navigate(['/documents']);
  }

  onCancel(): void {
    this.router.navigate(['/documents']);
  }

}