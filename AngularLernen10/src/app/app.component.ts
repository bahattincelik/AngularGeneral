import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterModule],
 // templateUrl: './app.component.html',
 template:`
 
 <a routerLink="home" routerLinkActive="active">Home</a> | 
 <a routerLink="about" routerLinkActive="active">About</a> | 
 <a routerLink="contact" routerLinkActive="active">Contact</a> <br>
 <hr>
 <router-outlet></router-outlet>
 
 `,
  styles: [".active{color:green;background-color:yellow}"]
})
export class AppComponent {
  title = 'AngularLernen10';
}
