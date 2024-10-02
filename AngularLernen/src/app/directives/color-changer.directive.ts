import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appColorChanger]',
  standalone: true
})
export class ColorChangerDirective implements OnInit {

  @Input() appColorChanger: string = '';
  constructor(private el:ElementRef) { }

  ngOnInit()  {
    this.el.nativeElement.style.backgroundColor = this.appColorChanger;
  }

}
