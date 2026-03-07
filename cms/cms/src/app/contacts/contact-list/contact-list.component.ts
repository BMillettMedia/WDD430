import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { RouterModule } from '@angular/router';

import { Contact } from '../contact.model';
import { ContactService } from '../contact.service';
import { ContactItemComponent } from '../contact-item/contact-item.component';
import { ContactsFilterPipe } from '../contacts-filter-pipe.ts';

@Component({
  selector: 'cms-contact-list',
  standalone: true,
  imports: [
    CommonModule,
    ContactItemComponent,
    RouterModule,
    ContactsFilterPipe
  ],
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit, OnDestroy {

  contacts: Contact[] = [];
  term: string = '';

  private subscription!: Subscription;

  constructor(private contactService: ContactService) {}

  ngOnInit(): void {

    // Subscribe FIRST
    this.subscription =
      this.contactService.contactListChangedEvent
        .subscribe((contacts: Contact[]) => {
          this.contacts = contacts;
        });

    // Then trigger HTTP fetch
    this.contactService.getContacts();
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  search(value: string): void {
    this.term = value;
  }

}