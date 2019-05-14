import { Directive, OnInit, Renderer2, ElementRef, HostListener } from '@angular/core';

@Directive ({
  selector: '[appBlueHighlight]'
})

export class BlueHighlightDirective implements OnInit {

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
