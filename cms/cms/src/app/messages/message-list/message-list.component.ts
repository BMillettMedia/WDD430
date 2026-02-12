import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
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
export class MessageListComponent implements OnInit {

  messages: Message[] = [];


  @Output() selectedMessage = new EventEmitter<Message>();

  constructor(private messageService: MessageService) {}

  ngOnInit(): void {
    // Initial load
    this.messages = this.messageService.getMessages();

    // Listen for changes
    this.messageService.messageChangedEvent.subscribe(
      (messages: Message[]) => {
        this.messages = messages;
      }
    );
  }


  onSelected(message: Message): void {
    this.selectedMessage.emit(message);
  }

}
