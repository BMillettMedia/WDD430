import { Component } from '@angular/core';
import { ContactListComponent } from './contact-list/contact-list';
import { ContactDetailComponent } from './contact-detail/contact-detail';


@Component({
  selector: 'cms-contacts',
  standalone: true,
  imports: [ContactListComponent, ContactDetailComponent],
  template: `
    <div class="row">
      <div class="col-md-6">
        <cms-contact-list></cms-contact-list>
      </div>
      <div class="col-md-6">
        <cms-contact-detail></cms-contact-detail>
      </div>
    </div>
  `
})
export class ContactsComponent { }
