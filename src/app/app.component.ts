import { Component, ElementRef, ViewChild } from '@angular/core';
import { Swiper, SwiperOptions } from 'swiper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'swiper-tutorial';
  swiper?: Swiper;
  @ViewChild('swiperRef')
  swiperRef: ElementRef | undefined;
  slides: Array<{title: string}> = [
    {
      title: "Slide 1"
    },
    {
      title: "Slide 2"
    },
    {
      title: "Slide 3"
    },
    {
      title: "Slide 4"
    },
    {
      title: "Slide 5"
    },
    {
      title: "Slide 6"
    },
    {
      title: "Slide 7"
    },
    {
      title: "Slide 8"
    },
  ]
  
  ngAfterViewInit() {
    this.swiper = this.swiperRef?.nativeElement.swiper;
  }
  
  public config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 25,
    breakpoints: {
      320: {
        slidesPerView: 1.5,
      },
      768: {
        slidesPerView: 2.5,
      },
      1280: {
        slidesPerView: 3.5,
      }
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      enabled: true,
      draggable: true
    }
  }
}
