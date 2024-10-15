import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [],
 // templateUrl: './error.component.html',
 // styleUrl: './error.component.scss'
 template:`
  <h1>Fehler</h1>
  <p>Es ist ein unbekannter Fehler aufgetreten.</p>
  <p>Bitte versuche es später noch einmal.</p>
  <button (click)="goBack()">Zurück</button>
  `
})
export class ErrorComponent {

  constructor(private router: Router) { }

  goBack() {
      this.router.navigate(['home']);
  }


}
