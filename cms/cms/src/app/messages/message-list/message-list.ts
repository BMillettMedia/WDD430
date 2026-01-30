import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MessageItem } from '../message-item/message-item';
import { Message } from '../message.model';

@Component({
  selector: 'cms-message-list',
  standalone: true,
  imports: [
    CommonModule,
    MessageItem
  ],
  templateUrl: './message-list.html'
})
export class MessageList {
  messages: Message[] = [];
}
