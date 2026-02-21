import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, RouterModule } from '@angular/router';


import { HeaderComponent } from './header.component';
import { ContactsComponent } from './contacts/contacts.component';
import { DocumentsComponent } from './documents/documents.component';
import { MessagesComponent } from './messages/messages.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    ContactsComponent,
    DocumentsComponent,
    MessagesComponent,
    RouterOutlet,
    RouterModule
  ],
   templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  selectedFeature: string = 'contacts';

  onFeatureSelected(feature: string): void {
    this.selectedFeature = feature;
  }

}
