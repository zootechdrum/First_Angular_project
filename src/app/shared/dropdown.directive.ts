import { Directive, OnInit, Renderer2, ElementRef, HostListener, HostBinding } from '@angular/core';


@Directive({
  selector: '[appDropdown]'
})

export class DropdownDirective {
 @HostBinding('class.open') isOpen = false;

  @HostListener('click') onclick() {
    this.isOpen = !this.isOpen;
  }
}
