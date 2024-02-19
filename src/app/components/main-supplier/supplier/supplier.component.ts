import { Component, HostListener, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.scss']
})
export class SupplierComponent {
  screenWidth: number;
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

  constructor() {
    this.screenWidth = window.innerWidth;
  }

  handleScreenWidthChanges():void {
    this.screenWidth = window.innerWidth;

    if(this.screenWidth <= 600) {
      this.sidenav.close();
    } else {
      this.sidenav.open();
    }
  }
}
