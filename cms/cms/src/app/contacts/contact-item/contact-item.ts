import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Contact } from '../contact.model';

@Component({
  selector: 'cms-contact-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-item.html'
})
export class ContactItemComponent {
  @Input() contact!: Contact;
  @Output() selected = new EventEmitter<Contact>();

  onSelected() {
    this.selected.emit(this.contact);
  }
}