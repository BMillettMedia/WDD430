import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

import { Message } from '../message.model';
import { MessageService } from '../message.service';
import { MessageItemComponent } from '../message-item/message-item.component';

@Component({
  selector: 'cms-message-list',
  standalone: true,
  imports: [CommonModule, MessageItemComponent],
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css']
})
export class MessageListComponent implements OnInit, OnDestroy {

  @Input() messages: Message[] = [];
  @Output() selectedMessage = new EventEmitter<Message>();

  subscription!: Subscription;

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {

    this.subscription =
      this.messageService.messageListChangedEvent
        .subscribe((messages: Message[]) => {
          this.messages = messages;
        });

    this.messageService.getMessages();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  onSelected(message: Message): void {
    this.selectedMessage.emit(message);
  }

}