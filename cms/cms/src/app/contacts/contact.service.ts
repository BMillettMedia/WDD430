import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Contact } from './contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contactSelectedEvent = new EventEmitter<Contact>();
  contactListChangedEvent = new Subject<Contact[]>();

  private contacts: Contact[] = [];

  constructor(private http: HttpClient) {}

  getContacts(): void {
    this.http.get<{ message: string, contacts: Contact[] }>(
      'http://localhost:3000/contacts'
    )
    .subscribe(response => {
      this.contacts = response.contacts;
      this.contactListChangedEvent.next(this.contacts.slice());
    });
  }

  addContact(contact: Contact) {
    contact.id = '';

    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    this.http.post<{ message: string, contact: Contact }>(
      'http://localhost:3000/contacts',
      contact,
      { headers }
    )
    .subscribe(response => {
      this.contacts.push(response.contact);
      this.contactListChangedEvent.next(this.contacts.slice());
    });
  }

  updateContact(originalContact: Contact, newContact: Contact) {

    if (!originalContact || !newContact) return;

    const pos = this.contacts.findIndex(c => c.id === originalContact.id);
    if (pos < 0) return;

    newContact.id = originalContact.id;
    newContact.id = originalContact.id;

    this.http.put('http://localhost:3000/contacts/' + originalContact.id, newContact)
      .subscribe(() => {
        this.contacts[pos] = newContact;
        this.contactListChangedEvent.next(this.contacts.slice());
      });
  }

  deleteContact(contact: Contact) {

    const pos = this.contacts.findIndex(c => c.id === contact.id);
    if (pos < 0) return;

    this.http.delete('http://localhost:3000/contacts/' + contact.id)
      .subscribe(() => {
        this.contacts.splice(pos, 1);
        this.contactListChangedEvent.next(this.contacts.slice());
      });
  }
}