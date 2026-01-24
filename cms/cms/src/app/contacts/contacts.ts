import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Contact } from './contact.model';
import { ContactListComponent } from './contact-list/contact-list';
import { ContactDetailComponent } from './contact-detail/contact-detail';

@Component({
  selector: 'cms-contacts',
  standalone: true,
  templateUrl: './contacts.html',
  styleUrl: './contacts.css',
  imports: [CommonModule, ContactListComponent, ContactDetailComponent]
})
export class ContactComponent {

  selectedContact!: Contact;

  onContactSelected(contact: Contact) {
  this.selectedContact = contact;
}
}



