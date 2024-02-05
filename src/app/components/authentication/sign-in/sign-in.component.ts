import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  allUsers: any[] = JSON.parse(localStorage.getItem('allUsers') || '[]');
  signInForm: FormGroup;

  constructor(private snackBar: MatSnackBar, private router: Router) {
    this.signInForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.pattern(/^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/)]),
      password: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(8)]),
    })
  }

  ngOnInit(): void {
  }

  submit(): void {
    if (this.signInForm.invalid) return;

    let formValue = this.signInForm.value;
    const foundUser = this.allUsers.find(user => user.email.toLowerCase() === this.signInForm.get('email')?.value.toLowerCase());

    if (foundUser) {
      if (foundUser.password === formValue.password) {
        sessionStorage.setItem('currentUser', JSON.stringify(foundUser));
        this.signInForm.reset();
        this.router.navigate(['/home']);
      } else {
        this.snackBar.open('Sorry, password is incorrect', 'Ok', {
          duration: 3000
        })
      }
    } else {
      this.snackBar.open('User not found.', 'Ok', {
        duration: 3000
      })
    }
  }
}

