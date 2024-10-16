import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  standalone: true,
  imports: [RouterModule],
 template:`ProductDetailComponent
 
 <a routerLink="spec">Spec</a> & <a routerLink="overview">Overview</a> 
 
 <router-outlet></router-outlet>
 `
})
export class ProductDetailComponent {

}
