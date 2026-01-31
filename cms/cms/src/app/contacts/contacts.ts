import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Contact } from './contact.model';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';

@Component({
  selector: 'cms-contacts',
  //standalone: true,
  templateUrl: './contacts.html',
  styleUrl: './contacts.css',
  imports: [CommonModule, ContactListComponent, ContactDetailComponent]
})
  export class ContactsComponent {
    selectedContact!: Contact;

    onContactSelected(contact: Contact) {
      this.selectedContact = contact;
    }
}



