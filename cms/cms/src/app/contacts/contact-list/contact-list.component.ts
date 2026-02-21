import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';

import { Contact } from '../contact.model';
import { ContactService } from '../contact.service';
import { ContactItemComponent } from '../contact-item/contact-item.component';

@Component({
  selector: 'cms-contact-list',
  standalone: true,
  imports: [
    CommonModule,
    ContactItemComponent
  ],
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit, OnDestroy {

  contacts: Contact[] = [];

  private subscription!: Subscription;

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {

    // Load initial contacts
    this.contacts = this.contactService.getContacts();

    // Subscribe to contact list updates
    this.subscription = this.contactService.contactListChangedEvent.subscribe(
      (contacts: Contact[]) => {
        this.contacts = contacts;
      }
    );

  }

  ngOnDestroy(): void {

    // Prevent memory leaks
    if (this.subscription) {
      this.subscription.unsubscribe();
    }

  }

  onSelected(contact: Contact): void {

    // Notify service which contact was selected
    this.contactService.contactSelectedEvent.emit(contact);

  }

}