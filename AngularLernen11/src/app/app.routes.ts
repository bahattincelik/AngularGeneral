import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [
    { path: "", component: HomeComponent},
    {path:"products/add", 
        loadComponent: () => import ('./components/products/add-product/add-product.component').then (m=>m.AddProductComponent),
        data: {preload: true}
    },

    {path:"products/:id", 
        loadComponent: () => import ('./components/products/detail-product/detail-product.component').then (m=>m.DetailProductComponent)
        
    },

    {path:"products", 
        loadComponent: () => import ('./components/products/list-product/list-product.component').then (m=>m.ListProductComponent)},
    
    {path:"customer/add", 
        loadComponent: () => import ('./components/customers/add-customer/add-customer.component').then (m=>m.AddCustomerComponent)},

    {path:"customer/:id", 
        loadComponent: () => import ('./components/customers/dateil-customer/dateil-customer.component').then (m=>m.DateilCustomerComponent)},

    {path:"customers", 
        loadComponent: () => import ('./components/customers/list-customer/list-customer.component').then (m=>m.ListCustomerComponent),
        data: {preload: true}
    },



];
