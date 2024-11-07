import { Component, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: ` <h1 #h>APP Component</h1> `,
})
export class AppComponent {
  @ViewChild('h', { static: true }) h!: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.setStyle(this.h.nativeElement, 'color', 'yellow');
  }

  title = 'AngularLernen13';
}
