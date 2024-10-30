import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
    <h3>Home Component</h3>

    <div style="background-color: antiquewhite;">
      <ng-content select="header"></ng-content>
    </div>
    <div style="background-color: azure;">
      <ng-content select="body"></ng-content>
    </div>
    <div style="background-color: blue;">
      <ng-content select="footer"></ng-content>
    </div>

    <table>
      <tr>
        <td><ng-content select=".solMenu"></ng-content></td>
        <td><ng-content select=".ortaMenu"></ng-content></td>
        <td><ng-content select=".sagMenu"></ng-content></td>
      </tr>
      <tr>
        <ng-content></ng-content>
      </tr>
    </table>
  `,
})
export class HomeComponent {}

/*


*/
