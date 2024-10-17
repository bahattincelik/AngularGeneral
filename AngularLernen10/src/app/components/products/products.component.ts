import { NgFor } from '@angular/common';
import { RouterOutlet, RouterModule, ActivatedRoute } from '@angular/router';
import { Product } from './../../../../../AngularLernen8/src/app/productservice';
import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterModule, NgFor],
 // templateUrl: './products.component.html',
 template:`
 Product <br>
 <a [routerLink]="['detail',2]" >Products Details</a><br>
 <router-outlet></router-outlet>
 <ul>
  <li *ngFor="let photo of photos">
    <a [routerLink]="[photo.id]">{{photo.url}}</a>"
  </li>
 </ul>
 
 
 
 `
  
})
export class ProductsComponent implements OnInit {

  //constructor(private httpClient: HttpClient) {}
  constructor(private activatedRoute: ActivatedRoute) {}
  photos;

  ngOnInit() {
    this.activatedRoute.data
     .subscribe((data:any) => this.photos = data ["photos"]);
  }

}
