import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-supplier-toolbar',
  templateUrl: './supplier-toolbar.component.html',
  styleUrls: ['./supplier-toolbar.component.scss']
})
export class SupplierToolbarComponent implements OnChanges {
  @Input() screenWidth!:number;
  @Input() sidenav!:MatSidenav;

  ngOnChanges(changes: SimpleChanges):void {
    this.screenWidth = this.screenWidth;
    this.sidenav = this.sidenav;
  }
}
