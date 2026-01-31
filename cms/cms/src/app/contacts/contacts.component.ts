import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactListComponent } from './contact-list/contact-list.component';

@Component({
  selector: 'cms-contacts',
  standalone: true,
  imports: [
    CommonModule,
    ContactListComponent
  ],
  templateUrl: './contacts.html'
})
export class ContactsComponent {}
