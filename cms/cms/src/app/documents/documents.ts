import { Component } from '@angular/core';
import { DocumentListComponent } from './document-list/document-list.component';


@Component({
  selector: 'cms-documents',
  imports: [DocumentListComponent],
  templateUrl: './documents.html',
  styleUrl: './documents.css',
  template: `
    <div class="container">
      <h2>Documents</h2>
      <cms-document-list></cms-document-list>
    </div>
  `
})
export class Documents {

}
