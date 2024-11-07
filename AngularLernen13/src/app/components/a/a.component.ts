import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-a',
  standalone: true,
  imports: [],
  template: `
    Component A <br />

    <h2>Component A h2</h2>
  `,
  styles: [
    `
      h2 {
        color: red;
      }
    `,
  ],
  //encapsulation: ViewEncapsulation.None,
  //encapsulation: ViewEncapsulation.Emulated,
  encapsulation: ViewEncapsulation.ShadowDom,
})
export class AComponent {}
