import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Message } from '../message.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'cms-message-item',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './message-item.component.html',
  styleUrls: ['./message-item.component.css']
})
export class MessageItemComponent implements OnInit {

  @Input() message!: Message;
  @Output() messageSelected = new EventEmitter<Message>();

  messageSender: string = 'Unknown';

  ngOnInit(): void {

    if (this.message.sender && typeof this.message.sender === 'object') {
      this.messageSender = this.message.sender.name;
    }
  }

  onSelected(): void {
    this.messageSelected.emit(this.message);
  }
}