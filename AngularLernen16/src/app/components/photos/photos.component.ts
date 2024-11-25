import { Component } from '@angular/core';
import { LazyLoadImageModule } from 'ng-lazyload-image';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-photos',
  standalone: true,
  imports: [LazyLoadImageModule, CommonModule],
  template: `
    <div class="photo-grid">
      <ng-container *ngFor="let photo of photoLinks">
        <img
          *ngIf="photo != null"
          [defaultImage]="'https://via.placeholder.com/256'"
          [lazyLoad]="photo"
          [offset]="100"
          width="256"
          height="256"
          alt="Lazy Loaded Photo"
        />
      </ng-container>
    </div>
  `,
  styleUrl: './photos.component.scss',
})
export class PhotosComponent {
  photoLinks: any;

  constructor() {
    this.photoLinks = Array(198)
      .fill(0, 1, 199)
      .map((x, i) =>
        i < 100
          ? `https://randomuser.me/api/portraits/men/${i}.jpg`
          : `https://randomuser.me/api/portraits/women/${i - 99}.jpg`
      );
  }
}
