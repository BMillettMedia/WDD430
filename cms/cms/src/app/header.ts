import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';

@Component({
  selector: 'cms-header',
  standalone: true,
  imports: [ContactsComponent, RouterModule],
  templateUrl: './header.html',
  styleUrls: ['./header.css']
})
export class HeaderComponent {}
