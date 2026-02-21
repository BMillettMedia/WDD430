import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';

import { Contact } from '../contact.model';
import { ContactService } from '../contact.service';

@Component({
  selector: 'cms-contact-edit',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent implements OnInit {

  originalContact: Contact | null = null;

  contact: Contact = new Contact(
    '',
    '',
    '',
    '',
    '',
    null
  );

  editMode: boolean = false;

  constructor(
    private contactService: ContactService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.route.params.subscribe(params => {

      const id = params['id'];

      if (!id) {
        this.editMode = false;
        return;
      }

      const foundContact = this.contactService.getContact(id);

      if (!foundContact) {
        return;
      }

      this.editMode = true;

      this.originalContact = foundContact;

      // FIXED: Proper Contact object creation
      this.contact = new Contact(
        foundContact.id,
        foundContact.name,
        foundContact.email,
        foundContact.phone,
        foundContact.imageUrl,
        foundContact.group
      );

    });

  }

  onSave(): void {

    if (this.editMode && this.originalContact) {

      this.contactService.updateContact(
        this.originalContact,
        this.contact
      );

    } else {

      this.contactService.addContact(this.contact);

    }

    this.router.navigate(['/contacts']);
  }

  onCancel(): void {

    this.router.navigate(['/contacts']);

  }

}
