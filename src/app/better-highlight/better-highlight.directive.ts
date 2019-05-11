import { Directive, OnInit, Renderer2, ElementRef, HostListener } from '@angular/core';
import { MockNgModuleResolver } from '@angular/compiler/testing';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
  }

  @HostListener('mouseenter') mouseover(eventData: string = 'hello world') {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'pink');
    console.log(eventData);
  }

  @HostListener('mouseleave') mouseleave(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    console.log(eventData);
  }
}
