import { Component, HostListener, ViewChild, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSidenav } from '@angular/material/sidenav';
import { AddProductComponent } from '../../shared/add-product/add-product.component';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.scss']
})
export class SupplierComponent implements AfterViewInit {
  screenWidth!: number;
  menuItems: any[] = [
    {label: 'Dashboard', icon: 'dashboard', route: 'supplier/dashboard'},
    {label: 'Products', icon: 'shopping_bag', route: 'supplier/products'},
    {label: 'Orders', icon: 'list_alt', route: 'supplier/orders'},
    {label: 'Profile', icon: 'person', route: 'supplier/profile'},
  ]

  @ViewChild('sidenav') sidenav!: MatSidenav

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.handleScreenWidthChanges()
  }

  constructor(private cd: ChangeDetectorRef, private dialog: MatDialog) {}

  ngAfterViewInit() {
    this.handleScreenWidthChanges();
    this.cd.detectChanges();
  }

  handleScreenWidthChanges():void {
    this.screenWidth = window.innerWidth;

    if(this.screenWidth <= 600) {
      this.sidenav.close();
    } else {
      this.sidenav.open();
    }
  }

  addProduct(): void {
    const dialogRef = this.dialog.open(AddProductComponent, {
      panelClass: 'full-width'
    });

    dialogRef.afterClosed().subscribe({
      next: (res) => console.log(res),
      error: (err) => console.log(err),
      complete: () => {}
    })
  }
}
