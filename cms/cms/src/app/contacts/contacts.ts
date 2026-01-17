import { Component } from '@angular/core';
import { ContactListComponent } from './contact-list/contact-list';
import { ContactDetailComponent } from './contact-detail/contact-detail';

@Component({
  selector: 'cms-contacts',
  templateUrl: './contacts.html',
  styleUrl: './contacts.css',
  imports: [ContactListComponent, ContactDetailComponent]
})
export class Contacts {

}
