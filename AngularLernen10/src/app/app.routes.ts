import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import {ErrorComponent} from './components/error/error.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

import { ProductOverviewComponent } from './components/product-overview/product-overview.component';

import { ProductSpecComponent } from './components/product-spec/product-spec.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {path: "products", component: ProductsComponent, children: [
        {path: ":detail/:id", component: ProductDetailComponent, children: [
            {path: "", redirectTo: "overview", pathMatch: "full"},
            {path: "overview", component: ProductOverviewComponent},
            {path: "spec", component: ProductSpecComponent}
      
        
        ]
        }
    ]
    },
   
   /* {path: "home", component:HomeComponent},
    {path: "home/:id", component:HomeComponent},
    {path: "about", component:AboutComponent},
    {path: "contact", component:ContactComponent},*/

    {path: "**", component:ErrorComponent}
];
