import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

import { Contact } from '../contact.model';
import { ContactService } from '../contact.service';

@Component({
  selector: 'cms-contact-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent {

  @Input() contact!: Contact;

  constructor(
    private contactService: ContactService,
    private router: Router
  ) {}

  onDelete(): void {

    if (!this.contact) return;

    this.contactService.deleteContact(this.contact);

    this.router.navigate(['/contacts']);
  }
}