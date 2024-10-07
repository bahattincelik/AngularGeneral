import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
import { NgIf } from '@angular/common';
import { ReactiveFormsModule, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, NgIf, ReactiveFormsModule],
  template: `
  <!-- Template Driven Form -->
  <div>
    <h1>Template Driven Form Anmeldung</h1>
    <form #myForm="ngForm" (ngSubmit)="onSubmit(myForm)">
      <div>
        <label for="username">User Name:</label>
        <input type="text" id="username" name="username" ngModel required #username="ngModel"/>
        <div *ngIf="username.invalid && username.touched">
          User Name ist erforderlich
        </div>
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" ngModel required #email="ngModel"/>
        <div *ngIf="email.invalid && email.touched">
          Email ist ungültig oder erforderlich
        </div>
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" ngModel required #password="ngModel"/>
        <div *ngIf="password.invalid && password.touched">
          Passwort ist erforderlich und muss mindestens 8 Zeichen lang sein
        </div>
      </div>
      <div ngModelGroup="address">
        <h3>Address</h3>
        <div>
          <label for="street">Street:</label>
          <input type="text" id="street" name="street" ngModel/>
        </div>
        <div>
          <label for="city">City:</label>
          <input type="text" id="city" name="city" ngModel/>
        </div>
      </div>
      <button type="submit" [disabled]="myForm.invalid">Anmelden</button>
      <br>
      <button type="button" (click)="resetForm()">Reset</button>
    </form>
  </div>

  <!-- Reactive Form -->
  <div>
    <h1>Reactive Form Anmeldung</h1>
    <form [formGroup]="registrationForm" (ngSubmit)="onSubmit2()">
      <div>
        <label for="username">User Name:</label>
        <input type="text" formControlName="username" required>
        <div *ngIf="registrationForm.get('username')?.invalid && registrationForm.get('username')?.touched">
          User Name ist erforderlich
        </div>
      </div>
      <div>
        <label for="email">Email:</label>
        <input type="email" formControlName="email" required>
        <div *ngIf="registrationForm.get('email')?.invalid && registrationForm.get('email')?.touched">
          Email ist ungültig oder erforderlich
        </div>
      </div>
      <div>
        <label for="password">Password:</label>
        <input type="password" formControlName="password">
        <div *ngIf="registrationForm.get('password')?.invalid && registrationForm.get('password')?.touched">
          Passwort ist erforderlich
        </div>
      </div>

      <div formGroupName="address">
        <h3>Address</h3>
        <div>
          <label for="street">Street:</label>
          <input type="text" formControlName="street">
        </div>
        <div>
          <label for="city">City:</label>
          <input type="text" formControlName="city">
        </div>
      </div>

      <button type="submit" [disabled]="registrationForm.invalid">Anmelden</button>
      <br>
    </form>
  </div>
  `
})
export class AppComponent {
  // ViewChild ile Template-Driven Form referansı alınıyor.
  @ViewChild('myForm') form!: NgForm;

  // Reactive Form değişkeni
  registrationForm: FormGroup;

  // Template-Driven Form ile Reset işlemi
  resetForm() {
    if (this.form) {
      this.form.resetForm();
    }
  }

  // Template-Driven Form için kullanıcı verisi
  user = {
    username: '',
    email: '',
    password: '',
    address: {
      street: '',
      city: ''
    },
  };

  // Template-Driven Form onSubmit metodu
  onSubmit(form: NgForm) {
    console.log("Template-Driven Form:", form.value);
    this.user = form.value;
    form.reset();
  }

  // Reactive Form yapılandırması constructor içinde oluşturuluyor.
  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      address: this.fb.group({
        street: [''],
        city: [''],
      }),
    });
  }

  // Reactive Form onSubmit metodu
  onSubmit2() {
    console.log("Reactive Form:", this.registrationForm.value);
    this.registrationForm.reset();
  }
}
