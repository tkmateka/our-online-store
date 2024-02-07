import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent {
  isLeftDisabled: boolean = true;
  isRightDisabled: boolean = false;

  @Input() cardType!: string;

  @ViewChild('slider') slider: any;

  handleOnSlide(type: string) {
    console.log('type', type);
    console.log('slider', this.slider);

    if (this.slider.nativeElement.scrollWidth > window.innerWidth) {
      if (type === 'left') {
        this.slider.nativeElement.scrollLeft -= 400;
      } else {
        this.slider.nativeElement.scrollLeft += 400;
      }

      let totalUsedWidth = this.slider.nativeElement.scrollLeft + window.innerWidth;

        this.isRightDisabled = (totalUsedWidth >= this.slider.nativeElement.scrollWidth);


      this.isLeftDisabled = (this.slider.nativeElement.scrollLeft < 1);
    } else {
      this.isLeftDisabled = true;
      this.isRightDisabled = true;
    }
  }
}
