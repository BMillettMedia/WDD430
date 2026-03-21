import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

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

  originalDocument!: Document;
  document!: Document;

  editMode = false;
  id!: string;

  private subscription!: Subscription;

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
      this.editMode = true;

      // 🔥 SUBSCRIBE to data instead of calling getDocument directly
      this.subscription = this.documentService.documentListChangedEvent
        .subscribe((documents: Document[]) => {

          const doc = documents.find(d => d.id === this.id);

          if (!doc) {
            this.router.navigate(['/documents']);
            return;
          }

          this.originalDocument = doc;

          this.document = new Document(
            doc.id,
            doc.name,
            doc.description,
            doc.url
          );
        });

      // 🔥 Load documents from backend
      this.documentService.getDocuments();
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

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}