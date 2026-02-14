import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Contact } from '../contact.model';
import { ContactService } from '../contact.service';
import { ContactItemComponent } from '../contact-item/contact-item.component';

@Component({
  selector: 'cms-contact-list',
  standalone: true,
  imports: [CommonModule, ContactItemComponent],
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  @Input() contacts: Contact[] = [];
  @Output() selectedContact = new EventEmitter<Contact>();

  constructor(private contactService: ContactService) {}

  onSelected(contact: Contact): void {
    this.selectedContact.emit(contact);
  }

  ngOnInit(): void {

    this.contacts = this.contactService.getContacts();

    this.contactService.contactChangedEvent.subscribe(
      (contacts: Contact[]) => {
        this.contacts = contacts;
      }
    );

  }

}
