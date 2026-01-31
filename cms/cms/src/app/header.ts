import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownDirective } from './shared/dropdown.directive';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'cms-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    DropdownDirective
  ],
  templateUrl: './header.component.html'
})
export class HeaderComponent {}
