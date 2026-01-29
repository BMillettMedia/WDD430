import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header';

import { MessagesComponent } from './messages/messages';
import { MessageList } from './messages/message-list/message-list';
import { MessageItem } from './messages/message-item/message-item';
import { MessageEdit } from './messages/message-edit/message-edit';

import { ContactsComponent } from './contacts/contacts';
import { ContactItemComponent } from './contacts/contact-item/contact-item';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,

    MessagesComponent,
    MessageList,
    MessageItem,
    MessageEdit,

    ContactsComponent,
    ContactItemComponent
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
