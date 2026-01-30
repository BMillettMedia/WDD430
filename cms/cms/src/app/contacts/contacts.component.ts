import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactItemComponent } from './contact-item/contact-item';
import { Contact } from './contact.model';

@Component({
  selector: 'cms-contact-list',
  standalone: true,
  imports: [
    CommonModule,
    ContactItemComponent
  ],
  templateUrl: './contact-list.html'
})
export class ContactListComponent {
  contacts: Contact[] = [];

  onSelected(contact: Contact) {
    console.log('Selected contact:', contact);
  }
}
