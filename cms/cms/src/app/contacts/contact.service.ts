import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { Contact } from './contact.model';
import { MOCKCONTACTS } from './MOCKCONTACTS';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contactListChangedEvent = new Subject<Contact[]>();

  private contacts: Contact[] = [];

  maxContactId: number = 0;

  constructor() {

    this.contacts = MOCKCONTACTS;

    this.maxContactId = this.getMaxId();

  }

  // =========================
  // GET ALL CONTACTS
  // =========================
  getContacts(): Contact[] {
    return this.contacts.slice();
  }

  // =========================
  // GET SINGLE CONTACT
  // =========================
  getContact(id: string): Contact | null {

    for (let contact of this.contacts) {

      if (contact.id === id) {
        return contact;
      }

    }

    return null;

  }

  // =========================
  // GET MAX ID
  // =========================
  getMaxId(): number {

    let maxId = 0;

    for (let contact of this.contacts) {

      const currentId = parseInt(contact.id);

      if (currentId > maxId) {
        maxId = currentId;
      }

    }

    return maxId;

  }

  // =========================
  // ADD CONTACT
  // =========================
  addContact(newContact: Contact): void {

    if (!newContact) return;

    this.maxContactId++;

    newContact.id = this.maxContactId.toString();

    this.contacts.push(newContact);

    this.contactListChangedEvent.next(
      this.contacts.slice()
    );

  }

  // =========================
  // UPDATE CONTACT
  // =========================
  updateContact(
    originalContact: Contact,
    newContact: Contact
  ): void {

    if (!originalContact || !newContact) return;

    const pos = this.contacts.indexOf(originalContact);

    if (pos < 0) return;

    newContact.id = originalContact.id;

    this.contacts[pos] = newContact;

    this.contactListChangedEvent.next(
      this.contacts.slice()
    );

  }

  // =========================
  // DELETE CONTACT
  // =========================
  deleteContact(contact: Contact): void {

    if (!contact) return;

    const pos = this.contacts.indexOf(contact);

    if (pos < 0) return;

    this.contacts.splice(pos, 1);

    this.contactListChangedEvent.next(
      this.contacts.slice()
    );

  }

}
