import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

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

  constructor(private api: ApiService) { }

  ngOnInit(): void {
    this.api.genericGet('/get-user/tt@tt.tt')
      .subscribe({
        next: (res: any) => console.log('Response', res),
        error: (err: any) => console.log('Error', err),
        complete: () => { }
      });
  }
}
