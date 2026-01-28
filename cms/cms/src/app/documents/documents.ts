import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { DocumentList } from './document-list/document-list';


@Component({
  selector: 'cms-documents',
  standalone:true,
  imports: [DocumentList, CommonModule],
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
