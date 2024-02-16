import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-auth-popup',
  templateUrl: './auth-popup.component.html',
  styleUrls: ['./auth-popup.component.scss']
})
export class AuthPopupComponent {
  isSignIn:boolean = true;

  constructor(public dialogRef: MatDialogRef<AuthPopupComponent>) {}

  handleSignIn(data: any):void {
    if(data === 'close') {
      this.dialogRef.close()
    } else {
      this.isSignIn = !this.isSignIn;
    }
    
  }
}
