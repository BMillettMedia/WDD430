import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Message } from '../message.model';
import { MessageService } from '../message.service';

@Component({
  selector: 'cms-message-edit',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './message-edit.component.html',
  styleUrls: ['./message-edit.component.css']
})
export class MessageEditComponent {

  currentSender = '1';

  constructor(private messageService: MessageService) {}

  onSendMessage(subjectInput: HTMLInputElement, msgTextInput: HTMLTextAreaElement) {
    const newMessage = new Message(
      Math.random().toString(),
      this.currentSender,
      subjectInput.value,
      msgTextInput.value
    );

    this.messageService.addMessage(newMessage);

    subjectInput.value = '';
    msgTextInput.value = '';
  }
}
