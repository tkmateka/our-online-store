import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
  @Input() cardType!: string;

  images = [700, 800, 807].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor() {
    console.log(this.images)
  }
}
