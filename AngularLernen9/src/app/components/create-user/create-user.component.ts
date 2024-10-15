import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
@Component({
  selector: 'app-create-user',
  standalone: true,
  imports: [],
  //templateUrl: './create-user.component.html',
  template:`
  <input type="text" placeholder="Name" #txtName><button (click)="userCreate(txtName.value)">Create</button>

  `,
  styleUrl: './create-user.component.scss'
})
export class CreateUserComponent {

  constructor (private userService: UserService){}
  userCreate (name){
    this.userService.addUser(name);
  }

}
