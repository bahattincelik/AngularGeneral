import { RouterOutlet, RouterModule } from '@angular/router';
import { Product } from './../../../../../AngularLernen8/src/app/productservice';
import { Component } from '@angular/core';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterModule],
 // templateUrl: './products.component.html',
 template:`
 Product <br>
 <a [routerLink]="['detail',2]" >Products Details</a><br>
 <router-outlet></router-outlet>
 
 
 
 
 `
  
})
export class ProductsComponent {

}
