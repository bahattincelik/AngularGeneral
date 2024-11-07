import { Component, Renderer2, ViewChild, ElementRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ChildComponent } from './components/child/child.component';
import { BComponent } from './components/b/b.component';
import { AComponent } from './components/a/a.component';

@Component({
  selector: 'app-root',
  standalone: true,
  styles: ['.abc2{background:red}'],
  imports: [RouterOutlet, ChildComponent, AComponent, BComponent],
  template: `
    <app-a></app-a>
    <br />
    <app-b></app-b>
    <p class="abc">Hallo Style</p>
    <br />
    <p class="abc2">Hallo Style2</p>
    <br />
    <h3>Content Child</h3>
    <app-child>
      Hallo <br />

      <input type="text" #i />
    </app-child>

    <h1 #h>APP Component</h1>
  `,
})
export class AppComponent {
  @ViewChild('h', { static: true }) h!: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngOnInit(): void {
    this.renderer.setStyle(this.h.nativeElement, 'color', 'yellow');
  }

  title = 'AngularLernen13';
}
