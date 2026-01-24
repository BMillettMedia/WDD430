import { Component } from '@angular/core';
/*import { RouterLink, RouterLinkActive } from '@angular/router';*/
import { Contacts } from './contacts/contacts';
import { ContactsComponent } from './contacts/contacts.component';


@Component({
  selector: 'cms-header',
  standalone: true,
  imports: [ContactsComponent, Contacts],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
/*export class Header {

}*/


export class HeaderComponent {}