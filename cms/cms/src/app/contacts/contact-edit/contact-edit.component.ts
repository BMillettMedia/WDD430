import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Contact } from '../contact.model';
import { ContactService } from '../contact.service';

@Component({
  selector: 'cms-contact-edit',
  standalone: true,
  imports: [CommonModule, FormsModule],
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

  editMode = false;

  constructor(
    private contactService: ContactService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.route.params.subscribe(params => {

      const id = params['id'];

      if (!id) return;

      this.originalContact = this.contactService.getContact(id);

      if (!this.originalContact) return;

      this.editMode = true;

      this.contact = new Contact(
        this.originalContact.id,
        this.originalContact.name,
        this.originalContact.email,
        this.originalContact.phone,
        this.originalContact.imageUrl,
        this.originalContact.group
      );

    });

  }

  onSave(): void {

    if (this.editMode && this.originalContact) {

      this.contactService.updateContact(this.originalContact, this.contact);

    } else {

      this.contact.id = Date.now().toString();

      this.contactService.addContact(this.contact);

    }

    this.router.navigate(['/contacts']);

  }

  onCancel(): void {

    this.router.navigate(['/contacts']);

  }

}
