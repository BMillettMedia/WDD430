import { Routes } from '@angular/router';

import { ContactsComponent } from './contacts/contacts.component';
import { MessagesComponent } from './messages/messages';
import { DocumentsComponent } from './documents/documents';

export const routes: Routes = [
  { path: '', redirectTo: '/documents', pathMatch: 'full' },
  { path: 'contacts', component: ContactsComponent },
  { path: 'messages', component: MessagesComponent },
  { path: 'documents', component: DocumentsComponent }
];