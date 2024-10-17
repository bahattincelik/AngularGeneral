import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import {ErrorComponent} from './components/error/error.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

import { ProductOverviewComponent } from './components/product-overview/product-overview.component';

import { ProductSpecComponent } from './components/product-spec/product-spec.component';
import { canActivateChildGuard, canActivateGuard, canDeactivateGuard, isAdminGuard, resolveGuard, isUserGuard } from './guards/guards';
import { AdminComponent } from './components/admin/admin.component';
import { UserComponent } from './components/user/user.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    
   
   {path: "home", component:HomeComponent},
    {path: "home/:id", component:HomeComponent},
    {path: "about", component:AboutComponent},
    {path: "dashboard", component: AdminComponent, canMatch : [isAdminGuard]},
    {path: "dashboard", component: UserComponent, canMatch : [isUserGuard]},
    {path: "contact", component:ContactComponent},
    {path: "products", component: ProductsComponent, canActivate: [canActivateGuard], canActivateChild: [canActivateChildGuard], canDeactivate : [canDeactivateGuard], resolve:{photos:resolveGuard}, children: [
        {path: ":detail/:id", component: ProductDetailComponent, children: [
            {path: "", redirectTo: "overview", pathMatch: "full"},
            {path: "overview", component: ProductOverviewComponent},
            {path: "spec", component: ProductSpecComponent}
      
        
        ]
        }
    ]
    },

    {path: "**", component:ErrorComponent}
];
