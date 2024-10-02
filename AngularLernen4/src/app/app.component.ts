import { Component, Input, OnChanges, SimpleChanges, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
 // templateUrl: './app.component.html',
 template: ` 
 
 
 
 <p> Werte : {{inputValue}}</p>
 
 <h1> OnInitialized</h1>
 `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'AngularLernen4';
  @Input() inputValue:string ='Hi';

  ngOnChanges(changes: SimpleChanges) {
    console.log('Input value has changed', changes);
  }

  ngOnInit() {
    console.log('AppComponent has been initialized');
  }
  
}
