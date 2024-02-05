import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  signUpForm: FormGroup;
  roles: string[] = ['admin', 'supplier', 'customer', 'delivery'];

  constructor() {
    this.signUpForm = new FormGroup({
      firstName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      lastName: new FormControl('', [Validators.required, Validators.minLength(3)]),
      email: new FormControl('', [Validators.required, Validators.pattern(/^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/)]),
      cellNumber: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]),
      address: new FormGroup({
        streetName: new FormControl('', [Validators.required]),
        streetNumber: new FormControl(null, [Validators.required]),
        suburb: new FormControl('', [Validators.required]),
        city: new FormControl('', [Validators.required]),
        code: new FormControl(null, [Validators.required]),
      }),
      role: new FormControl('', [Validators.required]),
      offerDelivery: new FormControl(null),
      password: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]),
      confirmPassword: new FormControl('', [Validators.required])
    })
  }

  submit():void {

    if(this.signUpForm.get('password')?.value !== this.signUpForm.get('confirmPassword')?.value) {
      this.signUpForm.get('confirmPassword')?.setErrors({'pattern': true});
      return;
    }
    
    if(this.signUpForm.invalid) return;

    console.log(this.signUpForm)
  }
}
