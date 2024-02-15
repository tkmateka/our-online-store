import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  allUsers: any[] = JSON.parse(localStorage.getItem('allUsers') || '[]');
  signInForm: FormGroup;

  constructor(private snackBar: MatSnackBar, private router: Router, private api: ApiService) {
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

    this.api.genericPost('/sign-in', formValue)
      .subscribe({
        next: (res: any) => {
          sessionStorage.setItem('currentUser', JSON.stringify(res));
          this.signInForm.reset();
          this.router.navigate(['/home']);
        },
        error: (err: any) => this.snackBar.open(err.error, 'Ok', { duration: 3000 }),
        complete: () => { }
      })
  }
}

