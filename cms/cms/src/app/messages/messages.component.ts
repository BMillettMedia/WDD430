import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessageList } from './message-list/message-list.component';
import { MessageEdit } from './message-edit/message-edit.component';

@Component({
  selector: 'cms-messages',
  standalone: true,
  imports: [
    CommonModule,
    MessageList,
    MessageEdit
  ],
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent {}
