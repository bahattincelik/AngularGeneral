import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { ReadUserComponent } from './components/read-user/read-user.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, CreateUserComponent, ReadUserComponent],
  //templateUrl: './app.component.html',
  template:`
  <app-create-user></app-create-user>
  <app-read-user></app-read-user>
  
  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'AngularLernen9';
}
