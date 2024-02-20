import { Component } from '@angular/core';

@Component({
  selector: 'app-supplier-dashboard',
  templateUrl: './supplier-dashboard.component.html',
  styleUrls: ['./supplier-dashboard.component.scss']
})
export class SupplierDashboardComponent {
  miniCards:any[] = [
    {label: 'Outstanding Deliveries', value: 2, icon: 'send'},
    {label: 'Returned Products', value: 0, icon: 'assignment_return'},
    {label: 'Sold Products', value: 28, icon: 'sell'},
    {label: 'Pending Approval Products', value: 13, icon: 'verified'},
  ]
}
