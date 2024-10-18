
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ListProductComponent } from './components/products/list-product/list-product.component';
import { ListCustomerComponent } from './components/customers/list-customer/list-customer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, ListProductComponent, ListCustomerComponent, RouterModule], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularLernen11';
}
