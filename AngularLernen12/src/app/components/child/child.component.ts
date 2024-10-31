import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { Component, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule, NgTemplateOutlet],
  template: `
    <ng-container *ngTemplateOutlet="childContainer">
      Ng Continer icerigi.........
    </ng-container>
  `,
})
export class ChildComponent {
  @Input() childContainer: TemplateRef<HTMLElement>;
}
