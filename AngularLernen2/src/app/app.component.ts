import { Component, ViewChild, TemplateRef, ViewContainerRef, AfterViewInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CurrencyPipe, UpperCasePipe, DatePipe, SlicePipe, PercentPipe} from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CurrencyPipe, UpperCasePipe, DatePipe, SlicePipe, PercentPipe],
 // templateUrl: './app.component.html',
 template: `

<h2> Pipe Component</h2>
<p>Wählung : {{1234.567 | currency: '$'}}</p>
<p>Groß Buchstaben : {{ 'angular pipes' | uppercase}}</p>
<p> Date : {{today | date : 'fullDate'}}</p>
<p> Original : {{'Bahattin Celik'}}</p>
<p> Slice : {{'Bahattin Celik' | slice:0:5}}</p>
<p> Percent : {{0.56678 | percent}}</p>


 <button (click)="showContent()">Show</button>
 <ng-template #myTemplate let-name>
  <h1>Hallo, {{name}}!</h1>
 </ng-template>
 
 
 `,
  styleUrl: './app.component.scss'
})
export class AppComponent {

today = new Date();

  @ViewChild('myTemplate', { read: TemplateRef }) templateRef!: TemplateRef<any>;

  constructor(private viewContainerRef: ViewContainerRef) {}

  ngAfterViewInit() {
    // Bu kısım, HTML tamamen yüklendiğinde `templateRef`'i dolduracak
    console.log('templateRef:', this.templateRef); // Boş olup olmadığını kontrol et
  }

  showContent() {
    if (this.templateRef) {
      // Yüklenen şablonu yüklü view container'a eklemek için embedded view'ı oluşturuyoruz
      this.viewContainerRef.createEmbeddedView(this.templateRef, { $implicit: 'Bahattin' });
      
    } else {
      console.error('templateRef boş, şablon yüklenemedi!');
    }
  }
}
