import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponentComponent } from "./child.component/child.component.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ChildComponentComponent],
  //templateUrl: './app.component.html',
  template: `
    <h1>Parent Child Communication</h1>
 <app-child-component [message]="parentMessage"></app-child-component>

 <h1>Child Parent Communication</h1>
 <app-child-component (messageEvent)="receivedMessage($event)"></app-child-component>
 <p>{{childMessage}}</p>

  `,

  styleUrl: './app.component.scss'
})
export class AppComponent {
  
  childMessage= '';

  receivedMessage(message: string) {
    this.childMessage = message;
  }


  
  parentMessage: string='Hallo, ich bin von der ParentComponent gekommen';


}
