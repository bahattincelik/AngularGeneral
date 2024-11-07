import { Component } from '@angular/core';

@Component({
  selector: 'app-b',
  standalone: true,
  imports: [],
  template: ` Component B <br />

    <h2 [style.color]="color">Component B h2</h2>`,
})
export class BComponent {
  color: string = 'pink';
}
