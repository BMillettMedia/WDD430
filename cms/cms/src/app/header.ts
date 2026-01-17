import { Component } from '@angular/core';
import { Contacts } from './contacts/contacts';


@Component({
  selector: 'cms-header',
  imports: [Contacts],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {

}
