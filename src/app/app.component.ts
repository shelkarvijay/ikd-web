import { DOCUMENT } from '@angular/common';
import { Component, ElementRef, HostListener, Inject, ViewChild } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // @ViewChild("body") el: ElementRef;
  @HostListener('window:scroll', ['$event']) 
  scrollHandler(event: Event) {
    this.scrollOffeset = this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
    console.log(this.scrollOffeset);
    // if(offset > 100) {
    //   document.getElementById("header").add
    // }
  }

  title = 'ikd-web';
  interval: number = 5000;
  proportion: number = 25;
  noOfslides: number = 5;
  scrollOffeset: any;
  slides = [
    {'image': '../assets/images/logo.jpeg'}, 
    {'image': 'https://gsr.dev/material2-carousel/assets/demo.png'},
    {'image': 'https://gsr.dev/material2-carousel/assets/demo.png'}, 
    {'image': 'https://gsr.dev/material2-carousel/assets/demo.png'}, 
    {'image': 'https://gsr.dev/material2-carousel/assets/demo.png'}
  ];
  images = [700, 533, 807, 124].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor(config: NgbCarouselConfig,
    @Inject(DOCUMENT) private document: Document,) {
    // customize default values of carousels used by this component tree
    config.interval = 100000;
    // config.wrap = false;
    config.keyboard = false;
    config.pauseOnHover = false;

  }
}
