import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import {
  Component,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, NgFor, NgIf, NgTemplateOutlet],
  template: `
    <h3>App Component</h3>

    <ng-container
      [ngTemplateOutlet]="t"
      [ngTemplateOutletContext]="{ data: 123 }"
      ]
      >Container <br
    /></ng-container>
    <ng-template #t let-data="data"
      >ngTemplateOutletContext <br />
      {{ data }}</ng-template
    >
    <br />
    <hr />
    <ng-container *ngTemplateOutlet="templateIcerik"
      >Container icerigi</ng-container
    >

    <ng-template #templateIcerik>Template icerigi</ng-template>

    <ng-template #templateIcerik2>Template icerigi diger Yontem</ng-template>

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

  @ViewChild('templateIcerik2', { read: TemplateRef })
  ngTemplate: TemplateRef<any>;
  constructor(private viewContainerRef: ViewContainerRef) {}
  ngAfterViewInit() {
    // Bu kısım, HTML tamamen yüklendiğinde `templateIcerik`'i dolduracak
    this.viewContainerRef.createEmbeddedView(this.ngTemplate);
  }
}
