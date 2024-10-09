import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule],
  template: ` 
  <form [formGroup]="frm" (ngSubmit)="onSubmit()">
    <input type="text" placeholder="Name" formControlName="name"> <br/>
    <input type="text" placeholder="Surname" formControlName="surname"> <br/>  
    <input type="text" placeholder="Email" formControlName="email"> <br/>  
    <input type="text" placeholder="Tel" formControlName="tel"> <br/>  
    <div formGroupName="address">
      <input type="text" placeholder="Street" formControlName="street"> <br/>
      <input type="text" placeholder="City" formControlName="city"> <br/>
      <input type="text" placeholder="Zip" formControlName="zip"> <br/>
    </div>
  
    <button type="submit">Submit</button>
  </form>

  <button (click)="markAsTouched()">markAsTouched</button><br/>
  <button (click)="markAllAsTouched()">markAllAsTouched</button><br/>
  <button (click)="markAsUntouched()">markAsUntouched</button><br/>
  <button (click)="markAsDirty()">markAsDirty</button><br/>
  <button (click)="markAsPristine()">markAsPristine</button><br/>
  <button (click)="disable()">disable</button><br/>
  <button (click)="enable()">enable</button><br/>


  <p>Form touched: {{frm.touched}}</p>
  <p>'name' form control touched: {{frm.get('name')?.touched}}</p> <br>
  <p>'City' form control touched: {{frm.get('address')?.get("city")?.touched}}</p>
  <hr>
  <p>Form dirty: {{frm.dirty}}</p>
  <p>'name' form control dirty: {{frm.get('name')?.dirty}}</p>
  <hr>
  <p>Form pristine: {{frm.pristine}}</p>
  <p>'name' form control pristine: {{frm.get('name')?.pristine}}</p>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AngularLernen6';
  frm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.frm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      surname: ['', []],
      email: ['', []],
      tel: ['', []],
      address: this.formBuilder.group({
        street: ['', []],
        city: ['', []],
        zip: ['', []]
      })
    });
  }

  onSubmit() {
    console.log(this.frm.valid);
    console.log(this.frm.value);
  }

  markAsTouched() {
    //this.frm.markAllAsTouched();
    this.frm.get('name')?.markAsTouched({onlySelf: true});
  }

  markAllAsTouched() {
    this.frm.get("address")?.markAllAsTouched();
  }

  markAsUntouched() {
    this.frm.markAsUntouched();
  }

  markAsDirty() {
    this.frm.markAsDirty();
  }

  markAsPristine() {
    this.frm.markAsPristine();
  }
  disable(){
    this.frm.get("name")?.disable();
  }
  enable(){
    this.frm.get("name")?.enable();
  }
}
