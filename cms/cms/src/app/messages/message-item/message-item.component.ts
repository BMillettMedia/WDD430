import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Message } from '../message.model';
import { ContactService } from '../../contacts/contact.service';
import { Contact } from '../../contacts/contact.model';

@Component({
  selector: 'cms-message-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './message-item.component.html'
})
export class MessageItemComponent implements OnInit {

  @Input() message!: Message;
  messageSender!: string;

  constructor(private contactService: ContactService) {}

  ngOnInit() {
    const contact: Contact | null =
      this.contactService.getContact(this.message.sender);

    this.messageSender = contact ? contact.name : 'Unknown';
  }
}
