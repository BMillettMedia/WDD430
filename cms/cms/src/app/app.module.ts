import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header';

import { ContactsComponent } from './contacts/contacts';
import { ContactListComponent } from './contacts/contact-list/contact-list';
import { ContactItemComponent } from './contacts/contact-item/contact-item';

import { MessagesComponent } from './messages/messages';
import { MessageList } from './messages/message-list/message-list';
import { MessageItem } from './messages/message-item/message-item';
import { MessageEdit } from './messages/message-edit/message-edit';

import { DocumentsComponent } from './documents/documents';
import { DocumentListComponent } from './documents/document-list/document-list';

import { routes } from './app.routes';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,

    ContactsComponent,
    ContactListComponent,
    ContactItemComponent,

    MessagesComponent,
    MessageList,
    MessageItem,
    MessageEdit,

    DocumentsComponent,
    DocumentListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
