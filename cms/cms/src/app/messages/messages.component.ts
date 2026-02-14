import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Message } from './message.model';
import { MessageService } from './message.service';
import { RouterModule } from '@angular/router';

import { MessageListComponent } from './message-list/message-list.component';
import { MessageEditComponent } from './message-edit/message-edit.component';
import { MessageDetailComponent } from './message-detail/message-detail.component';

@Component({
  selector: 'cms-messages',
  standalone: true,
  imports: [
    CommonModule,
    MessageListComponent,
    MessageEditComponent,
    MessageDetailComponent,
    RouterModule
  ],
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})

export class MessagesComponent implements OnInit {

  messages: Message[] = [];
  selectedMessage: Message | null = null;

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    this.messages = this.messageService.getMessages();
  }

  onMessageSelected(message: Message): void {
    this.selectedMessage = message;
  }

}
