import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent],
  template: `
    <h3>App Component</h3>
    <app-home
      ><!--Burasi ng-content-->
      <header>Header</header>
      <body>
        Body
      </body>
      <footer>Footer</footer>

      <div class="solMenu">Sol Menu</div>
      <div class="ortaMenu">Orta Menu</div>
      <div class="sagMenu">Sag Menu</div>
    </app-home>
  `,
})
export class AppComponent {
  title = 'AngularLernen12';
}
