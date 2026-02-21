import { Component, OnInit } from '@angular/core';
import { Contact } from './contact.model';
import { ContactService } from './contact.service';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactDetailComponent } from './contact-detail/contact-detail.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'cms-contacts',
  standalone: true,
  imports: [CommonModule, 
    RouterModule,
    ContactListComponent, 
    ContactDetailComponent
  ],
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contacts: Contact[] = [];
  selectedContact: Contact | null = null;

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {
    this.contacts = this.contactService.getContacts();
  }

  onContactSelected(contact: Contact): void {
    this.selectedContact = contact;
  }

}