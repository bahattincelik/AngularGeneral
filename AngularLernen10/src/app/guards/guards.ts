import { HttpClient } from "@angular/common/http";
import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateChildFn, CanActivateFn, CanDeactivateFn, CanMatchFn, ResolveFn, RouterStateSnapshot } from "@angular/router";
import { Route } from "@angular/router";
import { UrlSegment } from "@angular/router";

export const canActivateGuard: CanActivateFn = (route : ActivatedRouteSnapshot,
    state:RouterStateSnapshot) => {

        console.log('canActivateGuard');
return true;
    }

export const canActivateChildGuard: CanActivateChildFn = (childRoute : ActivatedRouteSnapshot,
        state: RouterStateSnapshot)=>{

            console.log('canActivateChildGuard');
            return true;
        }

export const canDeactivateGuard : CanDeactivateFn<any> = (component: any, 
    currentRoute: ActivatedRouteSnapshot, 
    currentState: RouterStateSnapshot, 
    nextState: RouterStateSnapshot) => {
        console.log('canDeactivateGuard');
        return true;
    }


    export const resolveGuard : ResolveFn <any> = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) =>{

        const httpClient = inject(HttpClient);
        console.log('resolveGuard');
        return httpClient.get('https://jsonplaceholder.typicode.com/photos');
        
      

    }
    export const isAdminGuard : CanMatchFn  = (route: Route, segments: UrlSegment[]) => {
        console.log('is adminGuard');
        return !!localStorage.getItem("admin");
    }

    export const isUserGuard : CanMatchFn  = (route: Route, segments: UrlSegment[]) => {
        console.log('is adminGuard');
        return !localStorage.getItem("admin");
    }