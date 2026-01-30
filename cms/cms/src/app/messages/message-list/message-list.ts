import { Component } from '@angular/core';
import { Message } from '../message.model';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.html',
  styleUrls: ['./message-list.css']
})
export class MessageList {
  messages: Message[] = [];
}
