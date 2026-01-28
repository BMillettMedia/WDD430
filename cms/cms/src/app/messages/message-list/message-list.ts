import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageItem } from '../message-item/message-item';
import { Message } from '../message.mode';

@Component({
  selector: 'cms-message-list',
  standalone:true,
  imports: [CommonModule, MessageItem],
  templateUrl: './message-list.html',
  styleUrl: './message-list.css',
})
export class MessageList {
//sample messages copied from assignment image example 
  messages: Message = [
    { sender: 'Bro. Jackson', text: 'The grades for this assignment have been posted' },
    { sender: 'Steve Johnson', text: 'When is assignment 3 due' },
    { sender: 'Bro. Jackson', text: 'Assignment 3 is due on Saturday at 11:30 PM' },
    { sender: 'Mark Smith', text: 'Can I meet with you sometime. I need help with assignment 3' },
    { sender: 'Bro. Jackson', text: 'I can meet with you today at 4:00 PM in my office.' }
  ];
}
