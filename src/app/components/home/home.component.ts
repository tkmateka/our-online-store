import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SharedService } from 'src/app/services/shared.service';
import { AuthPopupComponent } from '../shared/auth-popup/auth-popup.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  categories: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  featuredProducts: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  dataProperties: string[] = ['type', 'age', 'color', 'price'];
  slidesData: any[] = [
    {
      name: 'Noxolo',
      type: 'Chiwawa',
      age: 5.3,
      color: 'red',
      price: 105.99,
      img: '../../../assets/images/puppies/IMG-20240206-WA0026.jpg'
    },
    {
      name: 'Josefina',
      type: 'Pit-Bull',
      age: 3,
      color: 'yellow',
      price: 217.99,
      img: '../../../assets/images/watches/IMG-20240206-WA0005.jpg'
    }
  ]

  constructor(private shared: SharedService, private dialog: MatDialog, private router: Router, private snackBar: MatSnackBar) { }

  ngOnInit(): void {

  }

  sellProduct(): void {
    if (!this.shared.isLoggedIn()) { // null
      const dialogRef = this.dialog.open(AuthPopupComponent);

      dialogRef.afterClosed()
        .subscribe({
          next: (res) => {
            if (this.shared.isLoggedIn()) {
              this.checkIfLoggedIn();
            }
          },
          error: (err) => console.log(err),
          complete: () => { },
        })
    } else {
      this.checkIfLoggedIn();
    }
  }

  checkIfLoggedIn() {
    const currentUser = JSON.parse(this.shared.isLoggedIn() || '{}')

    if (currentUser.role.toLowerCase() === 'supplier') {
      this.router.navigate(['/supplier/dashboard'])
    } else {
      this.snackBar.open('Only suppliers allowed', 'Ok', {duration: 5000})
    }
  }
}
