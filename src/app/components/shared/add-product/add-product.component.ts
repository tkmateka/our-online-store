import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { SharedService } from '../../../services/shared.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent {
  currentUser: any;
  addProductForm: FormGroup;
  reviewControl: FormControl;
  featuresControl: FormControl;
  trueOrFalseOptions:any[] = [
    {label: 'Yes', value: true},
    {label: 'No', value: false},
  ]
  productCode: string = `PROD-${new Date().getTime()}`;
  weekendFilter = (d: Date | null): boolean => {
    const day = (d || new Date()).getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  };

  constructor(private shared: SharedService) {
    const user = this.shared.isLoggedIn();
    this.currentUser = user ? JSON.parse(user) : {};

    this.reviewControl = new FormControl('');
    this.featuresControl = new FormControl('');

    this.addProductForm = new FormGroup({
      owner: new FormControl(this.currentUser['_id']),
      productName: new FormControl('', Validators.required),
      productCode: new FormControl(this.productCode),
      price: new FormControl(null, Validators.required),
      isOnSpecial: new FormControl(false),
      specialPrice: new FormControl(null), // Add required if isOnSpecial is true and display on form
      // rating: new FormControl(null),
      // reviews: new FormArray([this.reviewControl]),
      offerDelivery: new FormControl(false),
      deliveryETA: new FormGroup({ // Add required if offerDelivery is true and display on form
        start: new FormControl<Date | null>(null),
        end: new FormControl<Date | null>(null),
      }),
      deliverOnWeekends: new FormControl(false), // display on form if offerDelivery is true
      keyFeatures: new FormArray([
        this.featuresControl
      ]),
      productImage: new FormControl('')
    });

    this.addProductForm.get('productCode')?.disable();
  }

  submit(): void {
    console.log(this.addProductForm);
  }
}
