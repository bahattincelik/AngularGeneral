import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { NgIf, JsonPipe} from '@angular/common';
import { capitalletterValidator, matchPassword } from './validators/func';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ReactiveFormsModule, NgIf, JsonPipe],
 // templateUrl: './app.component.html',
 template: ` 
  <form [formGroup]="frm" (ngSubmit)="onSubmit()">
    <input type="text" placeholder="Name" formControlName="name"> <br/>
    <div *ngIf= "!name.valid && (name.dirty || name.touched)">
    Name is required and should be at least 3 characters long.
      <pre>{{name.errors | json}}</pre>
    </div>



    <input type="text" placeholder="Surname" formControlName="surname"> <br/> 
    <div *ngIf= "!surname.valid && (surname.dirty || surname.touched)">
    Surname is required and should be at least 3 characters long.
      <pre>{{surname.errors | json}}</pre>
    </div> 


    <input type="text" placeholder="Password" formControlName="password"> <br/> 
    <div *ngIf= "!password.valid && (password.dirty || password.touched)">
    Password is required and should be at least 3 characters long.
      <pre>{{password.errors | json}}</pre>
    </div> 


    <input type="text" placeholder="ConfirmPassword" formControlName="confirmpassword"> <br/> 
    <div *ngIf= "!confirmpassword.valid && (confirmpassword.dirty || confirmpassword.touched)">
    ConfirmPassword is required and should be at least 3 characters long.
      <pre>{{confirmpassword.errors | json}}</pre>
    </div> 

    <div *ngIf="frm.errors?.['noMatch']">
      Passwords do not match.
  

    </div>

    <input type="text" placeholder="Email" formControlName="email"> <br/>  
    <div *ngIf= "!email.valid && (email.dirty || email.touched)">
    Email is required and should be at least 3 characters long.
      <pre>{{email.errors | json}}</pre>
    </div> 


    <input type="text" placeholder="Tel" formControlName="tel"> <br/> 
    
    

    <div formGroupName="address">
      <input type="text" placeholder="Street" formControlName="street"> <br/>
      <input type="text" placeholder="City" formControlName="city"> <br/>
      <input type="text" placeholder="Zip" formControlName="zip"> <br/>
    </div>
  
    <button type="submit">Submit</button>
  </form>




  `,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'AngularLernen6';
  frm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.frm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3), capitalletterValidator(3)]],
      surname: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmpassword: ['', [Validators.required, Validators.minLength(8)]],
      email: ['', [Validators.required, Validators.email]],
      tel: ['', []],
      address: this.formBuilder.group({
        street: ['', []],
        city: ['', []],
        zip: ['', []]
      })
    }, {validators:matchPassword()});
  }


  get name(){
    return this.frm.get('name');
  }
  get surname(){
    return this.frm.get('surname');
  }
  get password(){
    return this.frm.get('password');
  }
  get confirmpassword(){
    return this.frm.get('confirmpassword');
  }
  get email(){
    return this.frm.get('email');
  }
  get address(){
    return this.frm.get('address');
  }
  get city(){
    return this.frm.get('address.city');
  }
  get zip(){
    return this.frm.get('address.zip');
  }
  
  

  onSubmit() {
    console.log(this.frm.valid);
    console.log(this.frm.value);
  }

}
