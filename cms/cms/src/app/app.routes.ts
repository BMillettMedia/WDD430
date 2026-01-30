import { Routes } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { MessagesComponent } from './messages/messages.component';
import { DocumentsComponent } from './documents/documents.component';

export const routes: Routes = [
  { path: 'contacts', component: ContactsComponent },
  { path: 'messages', component: MessagesComponent },
  { path: 'documents', component: DocumentsComponent },
  { path: '', redirectTo: '/contacts', pathMatch: 'full' }
];
