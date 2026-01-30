import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageListComponent } from './message-list/message-list.component';
import { MessageEditComponent } from './message-edit/message-edit.component';

@Component({
  selector: 'cms-messages',
  standalone: true,
  imports: [
    CommonModule,
    MessageListComponent,
    MessageEditComponent
  ],
  templateUrl: './messages.component.html'
})
export class MessagesComponent {}
