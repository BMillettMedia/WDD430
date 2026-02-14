import { Injectable, EventEmitter } from '@angular/core';
import { Contact } from './contact.model';
import { MOCKCONTACTS } from './MOCKCONTACTS';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contacts: Contact[] = [];

  contactSelectedEvent = new EventEmitter<Contact>();

  constructor() {
    this.contacts = MOCKCONTACTS;
  }

  getContacts(): Contact[] {
    return this.contacts.slice();
  }

  getContact(id: string): Contact | null {
    for (const contact of this.contacts) {
      if (contact.id === id) {
        return contact;
      }
    }
    return null;
  }

    contactChangedEvent = new EventEmitter<Contact[]>();

deleteContact(id: string): void {

  this.contacts = this.contacts.filter(c => c.id !== id);

  this.contactChangedEvent.emit(this.contacts.slice());

}

addContact(contact: Contact): void {

  this.contacts.push(contact);

  this.contactChangedEvent.emit(this.contacts.slice());

}

updateContact(original: Contact, updated: Contact): void {

  const pos = this.contacts.indexOf(original);

  if (pos < 0) return;

  this.contacts[pos] = updated;

  this.contactChangedEvent.emit(this.contacts.slice());

}


}
