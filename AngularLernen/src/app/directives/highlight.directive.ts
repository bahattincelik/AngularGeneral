import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective {

  constructor(private el:ElementRef, private rendere: Renderer2) {
    this.rendere.setStyle(this.el.nativeElement, 'backgroundColor', 'yellow');
   }

}
