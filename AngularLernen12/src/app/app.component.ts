import { NgFor, NgIf, NgTemplateOutlet } from '@angular/common';
import {
  Component,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ChildComponent } from './components/child/child.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HomeComponent,
    NgFor,
    NgIf,
    NgTemplateOutlet,
    ChildComponent,
  ],
  template: `
    <ng-template #t> Parent Template Icerigi </ng-template>

    <app-child [childContainer]="t"></app-child>

    <h3>App Component</h3>

    <!--<ng-container
      [ngTemplateOutlet]="t"
      [ngTemplateOutletContext]="{ data: 123 }"
      ]
      >Container <br
    /></ng-container>-->
    <!--<ng-template #t let-data="data"
      >ngTemplateOutletContext <br />
      {{ data }}</ng-template
    >-->
    <!--<ng-container
      [ngTemplateOutlet]="t"
      [ngTemplateOutletContext]="{ x: 123, y: 321, $implicit: 0 }"
      ]
      >Container <br
    /></ng-container>
    <ng-template #t let-x="x" let-y="y" let-z
      >ngTemplateOutletContext <br />
      x: {{ x }} <br />
      y: {{ y }} <br />
      z: {{ z }} <br
    /></ng-template>
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
      >
    -->
    <!--Burasi ng-content-->
    <!-- <header>Header</header>
      <body>
        Body
      </body>
      <footer>Footer</footer>

      <div class="solMenu">Sol Menu</div>
      <div class="ortaMenu">Orta Menu</div>
      <div class="sagMenu">Sag Menu</div>
    </app-home>-->

    <ng-container *ngTemplateOutlet="t; context: { $implicit: person }">
    </ng-container>

    <ng-template #t let-person>
      <div>
        <h3>Personel Listesi</h3>
        <ul>
          <li *ngFor="let person of person">
            {{ person.name }} - {{ person.age }} Jahre alt - {{ person.gender }}
          </li>
        </ul>
      </div>
    </ng-template>
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

  person: any[] = [
    { name: 'John Doe', age: 30, gender: 'Male' },
    { name: 'Jane Doe', age: 25, gender: 'Female' },
    { name: 'Alice Doe', age: 28, gender: 'Female' },
    { name: 'Bob Doe', age: 35, gender: 'Male' },
    { name: 'Charlie Doe', age: 32, gender: 'Male' },
    { name: 'David Doe', age: 27, gender: 'Male' },
    { name: 'Eve Doe', age: 33, gender: 'Female' },
    { name: 'Frank Doe', age: 31, gender: 'Male' },
    { name: 'Grace Doe', age: 29, gender: 'Female' },
  ];

  @ViewChild('templateIcerik2', { read: TemplateRef })
  ngTemplate: TemplateRef<any>;
  constructor(private viewContainerRef: ViewContainerRef) {}
  ngAfterViewInit() {
    // Bu kısım, HTML tamamen yüklendiğinde `templateIcerik`'i dolduracak
    this.viewContainerRef.createEmbeddedView(this.ngTemplate);
  }
}
