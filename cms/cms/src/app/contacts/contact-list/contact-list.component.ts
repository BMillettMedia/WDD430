import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Contact } from '../contact.model';
import { ContactService } from '../contact.service';
import { ContactItemComponent } from '../contact-item/contact-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'cms-contact-list',
  standalone: true,
  imports: [CommonModule, ContactItemComponent],
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})


/*export class ContactListComponent implements OnInit {
  contacts: Contact[] = [];

  constructor(private contactService: ContactService) {}

  ngOnInit() {
    this.contacts = this.contactService.getContacts();
  }

  onSelected(contact: Contact) {
    this.contactService.contactSelectedEvent.emit(contact);
  }
}*/

export class ContactListComponent {

  @Input() contacts: Contact[] = [];
  @Output() selectedContact = new EventEmitter<Contact>();

  onSelected(contact: Contact): void {
    this.selectedContact.emit(contact);
  }

}