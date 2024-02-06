import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
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
}
