import { Component, Inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductService, LoggerService } from './productservice';
import { productServiceIT } from './injection-token';
import { HttpClient } from '@angular/common/http';
import { firstValueFrom } from 'rxjs';
import { provideHttpClient } from '@angular/common/http';
import { RandomService } from './random.service';
import { AComponent } from './a.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AComponent],
  providers: [
 // `importProvidersFrom` yerine `provideHttpClient()` doğrudan kullanıldı

    //ProductService, LoggerService

    //{provide: ProductService, useClass: ProductService}, {provide: LoggerService, useClass: LoggerService}

    //{provide: "productService", useClass: ProductService}, {provide: LoggerService, useClass: LoggerService}

    //{provide: productServiceIT, useClass: ProductService}, 
    //{provide: LoggerService, useClass: LoggerService},
    //{provide:"example", useValue: "hallo"}
    /*{provide:"example", useValue: ()=> {
      return "hallo";
    }}*/

    /*{ provide: LoggerService, useClass: LoggerService },
    {
      provide: "productService",
      useFactory: (httpClient: HttpClient, loggerService: LoggerService) => {
        // Use a Promise-based factory function
        return new Promise<ProductService>(async (resolve) => {
          const obs = httpClient.get("https://jsonplaceholder.typicode.com/posts");
          const data = await firstValueFrom(obs); // Asenkron işlem yapılır
          console.log('Fetched Data:', data);
          resolve(new ProductService(loggerService)); // `ProductService`'i döndürüyoruz
        });
      },
      deps: [HttpClient, LoggerService] // Bağımlılıkları sağladık
    }*/
  ], // DI Token - Default Type Token
  // templateUrl: './app.component.html',
  template: `
 AppComponent => {{randomService.random}}
 <br>
 <app-a></app-a>
  `,
  styleUrl: './app.component.scss'
})
/*export class AppComponent {
 constructor(private productService: ProductService){
  console.log(productService.getProducts());
 }*/
/*export class AppComponent {
  constructor(@Inject(ProductService) private productService){
   console.log(productService.getProducts());
  }
}*/
/*export class AppComponent {
  constructor(@Inject("productService")private productService: ProductService){
   console.log(productService.getProducts());
  }
}*/

/*export class AppComponent {
  constructor(@Inject(productServiceIT) private productService: ProductService, @Inject("example") func: any){
   console.log(productService.getProducts());
   console.log(func());
  }
}*/

export class AppComponent {


 constructor(public randomService: RandomService){}

  //products = [];

  /*constructor(public randomService: RandomService, @Inject("productService") private productService: ProductService) {
    this.products = productService.getProducts();
    console.log(this.products);
  }*/


}
