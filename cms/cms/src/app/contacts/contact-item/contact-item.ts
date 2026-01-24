import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Contact } from "../contact.model";

@Component({
  selector: 'cms-contact-item',
  imports: [],
  standalone: true,
  templateUrl: './contact-item.html',
  styleUrl: './contact-item.css',
})
/*export class ContactItem {
  @Input() contact!: Contact;
}*/

export class ContactItemComponent {
  @Input() contact!: Contact;
  @Output() selectedContactEvent = new EventEmitter<Contact>();

  onSelected() {
    this.selectedContactEvent.emit(this.contact);
  }
}
