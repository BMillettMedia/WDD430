import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Message } from '../message.model';
import { MessageService } from '../message.service';
import { Contact } from '../../contacts/contact.model';

@Component({
  selector: 'cms-message-edit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './message-edit.component.html',
  styleUrls: ['./message-edit.component.css']
})
export class MessageEditComponent {

  // placeholder sender until UI selector is added
  currentSender: Contact | null = null;

  constructor(private messageService: MessageService) {}

  onSendMessage(
    subjectInput: HTMLInputElement,
    msgTextInput: HTMLTextAreaElement
  ) {

    const newMessage = new Message(
      Math.random().toString(),
      subjectInput.value,
      msgTextInput.value,
      this.currentSender
    );

    this.messageService.addMessage(newMessage);

    // clear form
    subjectInput.value = '';
    msgTextInput.value = '';
  }
}