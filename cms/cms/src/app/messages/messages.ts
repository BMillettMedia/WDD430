import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageList } from './message-list/message-list';
import { MessageEdit } from './message-edit/message-edit';

@Component({
  selector: 'cms-messages',
  //selector: 'app-messages',
  imports: [MessageList, MessageEdit, CommonModule],
  templateUrl: './messages.html',
  styleUrl: './messages.css',
  template: `
    <div class="container">
      <h2>Messages</h2>
      <cms-message-list></cms-message-list>
      <cms-message-edit></cms-message-edit>
    </div>
  `
})
export class MessagesComponent {

}
