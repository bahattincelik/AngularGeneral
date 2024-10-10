import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductService } from './productservice';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  providers:[],
 // templateUrl: './app.component.html',
 template:`
 
 
 
 
 `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
 constructor(private productService: ProductService){
  console.log(productService.getProducts());
 }
}
