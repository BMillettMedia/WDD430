import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Message } from '../message.model';

@Component({
  selector: 'cms-message-item',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './message-item.html',
  styleUrl: './message-item.css',
})
export class MessageItem {
  @Input() message!: Message;
}
