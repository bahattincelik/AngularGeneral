import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { PhotosComponent } from './components/photos/photos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PhotosComponent],
  template: `<app-photos></app-photos>`,
  styleUrl: './app.component.scss',
})
export class AppComponent {
  constructor(private title: Title) {
    title.setTitle('Welcome');
  }
}
