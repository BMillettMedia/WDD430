import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { DropdownDirective } from './shared/dropdown.directive';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'cms-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    RouterModule,
    DropdownDirective
  ],
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  @Output() featureSelected = new EventEmitter<string>();

  onSelect(feature: string): void {
    this.featureSelected.emit(feature);
  }

}
