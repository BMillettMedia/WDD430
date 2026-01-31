import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[cmsDropdown]',
  standalone: true
})
export class DropdownDirective {
  private isOpen = false;

  constructor(private el: ElementRef) {}

  @HostListener('click')
  toggle() {
    this.isOpen = !this.isOpen;
    const menu = this.el.nativeElement.querySelector('.dropdown-menu');
    if (menu) {
      menu.classList.toggle('show', this.isOpen);
    }
  }
}
