import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
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

  originalContact!: Contact;   // not nullable anymore
  contact!: Contact;

  editMode = false;
  id!: string;

  constructor(
    private contactService: ContactService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.route.params.subscribe(params => {

      this.id = params['id'];

      // ADD MODE
      if (!this.id) {
        this.editMode = false;
        this.contact = new Contact(
          '',
          '',
          '',
          '',
          '',
          null
        );
        return;
      }

      // EDIT MODE
      const foundContact = this.contactService.getContact(this.id);

      if (!foundContact) {
        this.router.navigate(['/contacts']);
        return;
      }

      this.originalContact = foundContact;
      this.editMode = true;

      // Clone safely
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

  onSubmit(form: NgForm): void {

    const value = form.value;

    const newContact = new Contact(
      this.originalContact?.id ?? '',
      value.name,
      value.email,
      value.phone,
      value.imageUrl ?? '',
      this.contact.group ?? null
    );

    if (this.editMode) {
      this.contactService.updateContact(this.originalContact, newContact);
    } else {
      this.contactService.addContact(newContact);
    }

    this.router.navigate(['/contacts']);
  }

  onCancel(): void {
    this.router.navigate(['/contacts']);
  }

}