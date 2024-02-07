import { Component, Input, ViewChild } from '@angular/core';

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
    let scrollValue;

    if (this.slider.nativeElement.scrollWidth > window.innerWidth) {
      // Removing 80px which is the white space on the left and right of the slider and the scrollbar
      if (type === 'left') {
        scrollValue = this.slider.nativeElement.scrollLeft - (window.innerWidth - 80);
      } else {
        scrollValue = this.slider.nativeElement.scrollLeft + (window.innerWidth - 80);
      }

      // Added this to add an animation while scrolling...
      this.slider.nativeElement.scrollTo({
        left: scrollValue,
        behavior: 'smooth'
      });

      let totalUsedWidth = scrollValue + window.innerWidth;

      this.isRightDisabled = (totalUsedWidth >= this.slider.nativeElement.scrollWidth);
      this.isLeftDisabled = (scrollValue < 1);
    } else {
      this.isLeftDisabled = true;
      this.isRightDisabled = true;
    }
  }
}
