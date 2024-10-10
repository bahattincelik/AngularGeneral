import { Component, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductService, LoggerService } from './productservice';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  providers:[ProductService, LoggerService],
 // templateUrl: './app.component.html',
 template:`
 
 
 
 
 `,
  styleUrl: './app.component.scss'
})
/*export class AppComponent {
 constructor(private productService: ProductService){
  console.log(productService.getProducts());
 }*/
 export class AppComponent {
  constructor(@Inject(ProductService) private productService){
   console.log(productService.getProducts());
  }
}
