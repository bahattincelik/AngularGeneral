import { NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, NgFor, NgIf],
  template: `
    <h3>App Component</h3>

    <ng-container>Container icerigi</ng-container>

    <ul>
      <span *ngFor="let product of products">
        <li *ngIf="product.available">
          {{ product.produtcName }}
        </li>
      </span>
    </ul>

    <ul>
      <ng-container *ngFor="let product of products">
        <li *ngIf="product.available">
          {{ product.produtcName }}
        </li>
      </ng-container>
    </ul>

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

  products: any[] = [
    { produtcName: 'Pencil', available: true },
    { produtcName: 'Notebook', available: false },
    { produtcName: 'Pen', available: true },
    { produtcName: 'Marker', available: false },
    { produtcName: 'Eraser', available: true },
    { produtcName: 'Ruler', available: false },
  ];
}
