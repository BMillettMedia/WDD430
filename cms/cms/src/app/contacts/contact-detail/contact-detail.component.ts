import { Component, Input } from '@angular/core';
import {CommonModule} from '@angular/common';
import { Contact } from '../contact.model';

@Component({
  selector: 'cms-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css'],
  imports: [CommonModule]
})
export class ContactDetailComponent {
  @Input() contact!: Contact;
}