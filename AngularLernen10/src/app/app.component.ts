import { Product } from './../../../AngularLernen8/src/app/productservice';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { routes } from './routes/routes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
 // templateUrl: './app.component.html',
 template:`
 
 <a routerLink="products">Products</a> <br>
 <router-outlet></router-outlet>
 <!--<a routerLink="home" routerLinkActive="active">Home</a> | 
 <a routerLink="about" routerLinkActive="active">About</a> | 
 <a routerLink="contact" routerLinkActive="active">Contact</a> <br>
 <hr>
 
 <br>
 <button (click) ="go()">Go</button>-->
 
 `,
  styles: [".active{color:green;background-color:yellow}"]
})
export class AppComponent {
  title = 'AngularLernen10';

  constructor() {
   
  };

  go() {
    history.pushState({message: "hallo"}, "title", "a/c" )
  }
}
