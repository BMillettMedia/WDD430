import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Documents
import { DocumentsComponent } from './documents/documents.component';
import { DocumentDetailComponent } from './documents/document-detail/document-detail.component';
import { DocumentEditComponent } from './documents/document-edit/document-edit.component';

// Messages
import { MessagesComponent } from './messages/messages.component';
import { MessageDetailComponent } from './messages/message-detail/message-detail.component';

// Contacts
import { ContactsComponent } from './contacts/contacts.component';
import { ContactDetailComponent } from './contacts/contact-detail/contact-detail.component';
import { ContactEditComponent } from './contacts/contact-edit/contact-edit.component';



const appRoutes: Routes = [

  { path: '', redirectTo: '/documents', pathMatch: 'full' },

  {
    path: 'documents',
    component: DocumentsComponent,
    children: [
      { path: 'new', component: DocumentEditComponent },
      { path: ':id', component: DocumentDetailComponent },
      { path: ':id/edit', component: DocumentEditComponent }
    ]
  },

  {
    path: 'contacts',
    component: ContactsComponent,
    children: [
      { path: 'new', component: ContactEditComponent },
      { path: ':id', component: ContactDetailComponent },
      { path: ':id/edit', component: ContactEditComponent }
    ]
  },

  {
  path: 'messages',
  component: MessagesComponent,
  children: [
    { path: ':id', component: MessageDetailComponent }
  ]
}


];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
