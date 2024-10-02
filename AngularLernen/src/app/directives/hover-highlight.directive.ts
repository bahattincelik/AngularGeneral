import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverHighlight]',
  standalone: true
})
export class HoverHighlightDirective {

  @HostBinding('style.backgroundColor') backgroundColor: string = '';

  @HostListener('mouseenter') onMouseEnter() {
    this.backgroundColor = 'yellow';
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.backgroundColor = '';
  }

}
