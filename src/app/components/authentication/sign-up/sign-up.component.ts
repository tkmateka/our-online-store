import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  @Output() submitted = new EventEmitter<string>();  
  
  allUsers: any[] = JSON.parse(localStorage.getItem('allUsers') || '[]');
  signUpForm: FormGroup;
  roles: string[] = ['admin', 'supplier', 'customer', 'delivery'];

  constructor(private snackBar: MatSnackBar, private router: Router, private api: ApiService) {
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

  ngOnInit(): void {
  }

  submit(): void {
    if (this.signUpForm.invalid) return;

    if (this.signUpForm.get('password')?.value !== this.signUpForm.get('confirmPassword')?.value) {
      this.signUpForm.get('confirmPassword')?.setErrors({ 'pattern': true });
      return;
    }

    let formValue = this.signUpForm.value;
    delete formValue.confirmPassword; // Remove password from Form Value

    this.api.genericPost('/add-user', formValue)
      .subscribe({
        next: (res: any) => {
          this.signUpForm.reset();

          if (this.router.url.includes('sign-up')) {
            this.router.navigate(['/sign-in']);
          } else {
            this.submitted.emit('change');
          }
        },
        error: (err: any) => console.log('Error', err),
        complete: () => { }
      });
  }

  closeIfPopup(): void {
    if (!this.router.url.includes('sign-up')) {
      this.submitted.emit('close');
    }
  }

  goToLogin(): void {
    if (!this.router.url.includes('sign-in')) {
      this.submitted.emit('change');
    } else {
      this.router.navigate(['/sign-up']);
    }
  }
}
