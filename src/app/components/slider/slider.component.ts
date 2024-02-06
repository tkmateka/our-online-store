import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ColorsService } from 'src/app/services/colors.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnChanges {
  @Input() slides!: any[];
  @Input() dataProperties!: string[];

  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    dotsSpeed: 700,
    navText: ['<<<', '>>>'],
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 1
      },
      740: {
        items: 1
      }
    },
    nav: true
  }

  constructor(public colorService: ColorsService) {}

  ngOnChanges(changes: SimpleChanges):void {
    console.log('CHANGES',changes)
  }
}
