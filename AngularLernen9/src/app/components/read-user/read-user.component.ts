import { UserService } from './../../services/user.service';
import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-read-user',
  standalone: true,
  imports: [NgFor],
 // templateUrl: './read-user.component.html',
 template:`
 
 <ul>
  <li *ngFor="let name of users">{{name}}</li>
 </ul>
 
 
 `,
  styleUrl: './read-user.component.scss'
})
export class ReadUserComponent {

  constructor(private userService:UserService){}

  get users(){
    return this.userService.users;
  }
}
