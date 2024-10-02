import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { NgFor, NgIf, NgSwitch, NgSwitchCase, NgSwitchDefault, NgClass, NgStyle } from '@angular/common';
import { HighlightDirective } from './directives/highlight.directive';
import { HoverHighlightDirective } from './directives/hover-highlight.directive';
import { ColorChangerDirective } from './directives/color-changer.directive';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,  // Router özellikleri için
        FormsModule,          // ngModel kullanımı için
        NgFor,
        NgIf,
        NgSwitch,
        NgSwitchCase,
        NgSwitchDefault,
        NgClass,
        NgStyle,
        HighlightDirective,
        HoverHighlightDirective,
        ColorChangerDirective
      ],
      declarations: [AppComponent], // Bileşeni ve direktifleri bildir
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the 'AngularLernen' title`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('AngularLernen');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('AngularLernen');
  });
});
