import { Component } from '@angular/core';
import { DocumentList } from './document-list/document-list';


@Component({
  selector: 'cms-documents',
  imports: [DocumentList],
  templateUrl: './documents.html',
  styleUrl: './documents.css',
  template: `
    <div class="container">
      <h2>Documents</h2>
      <cms-document-list></cms-document-list>
    </div>
  `
})
export class DocumentsComponent{

}
