import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from './contact.model';

@Pipe({
  name: 'contactsFilter',
  standalone: true
})
export class ContactsFilterPipe implements PipeTransform {

  transform(contacts: Contact[], term: string): Contact[] {

    if (!contacts) return [];

    if (!term || term.trim().length === 0) {
      return contacts;
    }

    const filtered = contacts.filter(contact =>
      contact.name
        .toLowerCase()
        .includes(term.toLowerCase())
    );

    return filtered.length > 0 ? filtered : contacts;
  }

}