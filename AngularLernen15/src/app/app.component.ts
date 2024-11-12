import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,

  template: ``,
})
export class AppComponent {
  constructor(private httpClient: HttpClient) {
    httpClient.get('https://jsonplaceholder.typicode.com/posts').subscribe({
      next: (datas) => console.log(datas),
      error: (error) => console.log(error),
    });
  }
}
