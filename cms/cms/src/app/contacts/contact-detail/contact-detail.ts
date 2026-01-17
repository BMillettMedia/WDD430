import { Component, Input } from '@angular/core';
import {CommonModule} from '@angular/common';
import { Contact } from '../contact.model';

@Component({
  selector: 'cms-contact-detail',
  templateUrl: './contact-detail.html',
  styleUrls: ['./contact-detail.css'],
  imports: [CommonModule]
})
export class ContactDetailComponent {
  @Input() contact!: Contact;
}