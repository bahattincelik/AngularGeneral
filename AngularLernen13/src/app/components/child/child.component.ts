import { Component, ContentChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [],
  template: ` <ng-content> </ng-content> `,
})
export class ChildComponent {
  @ContentChild('i') input: ElementRef;
  ngAfterContentInit(): void {
    console.log('Content child has been initialized', this.input);
  }
}
