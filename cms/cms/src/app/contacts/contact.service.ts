import { Injectable, EventEmitter } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Contact } from './contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  // Emits when a contact is selected
  contactSelectedEvent = new EventEmitter<Contact>();

  // Emits when contact list changes
  contactListChangedEvent = new Subject<Contact[]>();

  contacts: Contact[] = [];
  maxContactId: number = 0;

  // REPLACE WITH REAL FIREBASE URL
  private firebaseUrl =
    'https://wdd430-4e51e-default-rtdb.firebaseio.com/contacts.json';

  constructor(private http: HttpClient) {}

  // =========================
  // GET CONTACTS (HTTP GET)
  // =========================
  getContacts() {

  this.http.get<{message:string, contacts:any}>(
    'http://localhost:3000/contacts'
  )
  .subscribe(response => {

    this.contacts = response.contacts.map((contact:any) => {
      return {
        id: contact._id,
        name: contact.name,
        email: contact.email,
        phone: contact.phone,
        imageUrl: contact.imageUrl,
        group: contact.group
      };
    });

    this.contactListChangedEvent.next(this.contacts.slice());

  });

}

  // =========================
  // GET SINGLE CONTACT
  // =========================
  getContact(id: string): Contact | null {

    return this.contacts.find(c => c.id === id) || null;
  }

  // =========================
  // ADD CONTACT
  // =========================
  addContact(contact: Contact): void {

    if (!contact) return;

    contact.id = (++this.maxContactId).toString();

    this.contacts.push(contact);
    this.storeContacts();
  }

  // =========================
  // UPDATE CONTACT
  // =========================
  updateContact(original: Contact, updated: Contact): void {

    if (!original || !updated) return;

    const index =
      this.contacts.findIndex(c => c.id === original.id);

    if (index !== -1) {
      updated.id = original.id;
      this.contacts[index] = updated;
      this.storeContacts();
    }
  }

  // =========================
  // DELETE CONTACT
  // =========================
  deleteContact(contact: Contact): void {

    this.contacts =
      this.contacts.filter(c => c.id !== contact.id);

    this.storeContacts();
  }

  // =========================
  // STORE CONTACTS (HTTP PUT)
  // =========================
  storeContacts(): void {

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    this.http.put(this.firebaseUrl, this.contacts, { headers })
      .subscribe(() => {
        this.contactListChangedEvent
          .next(this.contacts.slice());
      });
  }

  // =========================
  // GET MAX ID
  // =========================
  getMaxId(): number {

    return this.contacts.reduce(
      (max, contact) => Math.max(max, +contact.id),
      0
    );
  }

}