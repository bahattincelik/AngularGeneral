import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-component',
  standalone: true,
  imports: [],
  //templateUrl: './child.component.component.html',
  template: `
    <h2>Child Component</h2>
    <p>Kommen Message : {{message}}</p>
    <button (click)="sendMessage('')">Senden</button>
  `,
  styleUrl: './child.component.component.scss'
})
export class ChildComponentComponent {

  @Input() message:string = '';

  @Output() messageEvent=new EventEmitter<string>();
  sendMessage(message: string) {
    this.messageEvent.emit('Hallo, ich bin von der ChilComponent gekommen');
  }

}
