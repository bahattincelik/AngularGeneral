import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault, NgClass, NgStyle} from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HighlightDirective } from './directives/highlight.directive';
import { HoverHighlightDirective } from './directives/hover-highlight.directive';
import { ColorChangerDirective } from './directives/color-changer.directive';
import $ from 'jquery';



@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault, NgClass, NgStyle, FormsModule, HighlightDirective, HoverHighlightDirective, ColorChangerDirective], 
  //templateUrl: './app.component.html',
  template: `
    <h1>{{ title }}</h1>
    <router-outlet></router-outlet>

    <ul>
  <li *ngFor="let item of items">{{ item }}</li>
</ul>
<button (click)="isLoggedIn = !isLoggedIn">Giriş Durumunu Değiştir</button>
<p *ngIf="isLoggedIn">User okay</p>
<p *ngIf="!isLoggedIn">Please user</p>
<div [ngSwitch]="Farbe">
  <p *ngSwitchCase="'red'">RED</p>
  <p *ngSwitchCase="'blue'">BLUE</p>
  <p *ngSwitchCase="'green'">GREEN</p>
  <p *ngSwitchDefault>Please Color : </p>
</div>
<button (click)="isActive = !isActive">Aktif Durumunu Değiştir</button>
<div [ngClass]="{'highlight': isActive, 'error': hasError}">
  Bu bir div öğesi
</div>
<p [ngStyle]="{'font-size': fontSize, 'color': textColor}">
  Dinamik stil uygulaması
</p>

<input [(ngModel)]="username" placeholder="Kullanıcı Adı">
<p>Girilen Kullanıcı Adı: {{ username }}</p>
<p ngNonBindable>{{ BuMetinAngularTarafindanYorumlanmaz }}</p>

<p appHighlight>Bu bir highlight directive örneği</p>

<p appHoverHighlight>Bu bir hover highlight directive örneği</p>

<p [appColorChanger]="'yellow'">Bu paragrafın arka planı sarı olacak!</p>
<p [appColorChanger]="'lightblue'">Bu paragrafın arka planı açık mavi olacak!</p>
<p [appColorChanger]="'lightgreen'">Bu paragrafın arka planı açık yeşil olacak!</p>

<div id="myDiv">Merhaba Dünya!</div>
<button (click)="changeColor()">Rengimi Değiştir!</button>


  `,
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit  {
  title = 'AngularLernen';
  items = ['Item 1', 'Item 2', 'Item 3'];
  isLoggedIn = false;
  Farbe = 'red';
  isActive = false;
  hasError = false;
  fontSize = '16px';
  textColor = 'blue';
  username = '';

  ngOnInit() {
    ($ as any)('#myDiv').css('color', 'red');  
  }

  changeColor() {
    ($ as any)('#myDiv').css('color', 'blue');  
  }

}
