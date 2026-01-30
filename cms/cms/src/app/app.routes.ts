import { Routes } from '@angular/router';

import { ContactsComponent } from './contacts/contacts';
import { MessagesComponent } from './messages/messages';
import { DocumentsComponent } from './documents/documents';

export const routes: Routes = [
  { path: '', redirectTo: '/contacts', pathMatch: 'full' },
  { path: 'contacts', component: ContactsComponent },
  { path: 'messages', component: MessagesComponent },
  { path: 'documents', component: DocumentsComponent }
];
