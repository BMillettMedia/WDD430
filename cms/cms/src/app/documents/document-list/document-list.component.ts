import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

import { Document } from '../documents.model';
import { DocumentService } from '../document.service';
import { DocumentItemComponent } from '../document-item/document-item.component';

@Component({
  selector: 'cms-document-list',
  standalone: true,
  imports: [CommonModule, DocumentItemComponent],
  templateUrl: './document-list.component.html',
  styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit, OnDestroy {

  documents: Document[] = [];

  private subscription!: Subscription;

  constructor(private documentService: DocumentService) {}

  ngOnInit(): void {

    this.documents = this.documentService.getDocuments();

    this.subscription = this.documentService.documentListChangedEvent
      .subscribe(
        (documentsList: Document[]) => {
          this.documents = documentsList;
        }
      );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
