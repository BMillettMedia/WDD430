import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Message } from '../message.model';
import { ContactService } from '../../contacts/contact.service';
import { Contact } from '../../contacts/contact.model';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'cms-message-item',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './message-item.component.html',
  styleUrls: ['./message-item.component.css']
})
export class MessageItemComponent implements OnInit {

  @Input() message!: Message;
  @Output() messageSelected = new EventEmitter<Message>();

  messageSender!: string;

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    const contact: Contact | null =
      this.contactService.getContact(this.message.sender);

    this.messageSender = contact ? contact.name : 'Unknown';
  }

  onSelected(): void {
    this.messageSelected.emit(this.message);
  }

}